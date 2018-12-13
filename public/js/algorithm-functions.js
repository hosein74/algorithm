
var mainColor = d3.rgb("#aa8eff");
var swapColor = d3.rgb("#ffaa55");
var selectColor = d3.rgb("#ff6259");
var selectorder = d3.rgb("#ff00ff");
var selected = d3.rgb("#ffff00");

var count = 1;
var myArray = [1,-15,-5,20,41,21,54,31,24,20,30,2,1,25,30,12,5];
var sortedArray =[];
var durationTime = 200;
var stop = false;
var   steps = 0;
var    bogoShuffles = 0;
var max = Math.max(...myArray);
var min = Math.min(...myArray);
var maxHeight = Math.max(...[Math.abs(min),Math.abs(max)]);

var length = myArray.length;

var height = 500;

var middle = height/2

var width = 1000;

var barWidth = width/length;

var x = d3.scaleLinear()
    .domain([0,length])
    .range([0, width]);

var y = d3.scaleLinear()
    .domain([0,maxHeight])
    .range([0, middle -20]);

var svg = d3.select("#algorithm-box").append("svg")
    .attr("width", width )
    .attr("height", height )
    .append("g")

console.log(max);
console.log(min);
console.log(maxHeight);
console.log(barWidth/3);
console.log(y(1));
console.log(x(1));

var rects = svg.append("g")
    .attr("transform", "translate(" + barWidth + ",0) ")
    .selectAll("rect")
    .data(myArray)
    .enter().append("rect")

rects.attr("id", function(d,i) {return "rect" + i})
    .attr("transform", function(d, i) {
        if (d<0) return "translate(" + (x(i) ) + ","+(middle+y(Math.abs(d)))+")  rotate(180) "
        return "translate(" + (x(i) ) + ","+(middle)+") rotate(180)"}

    )
    .attr("width", barWidth *.9)
    .attr("height", function(d,i) {
        return  y(Math.abs(d))

    })

var labels = svg.selectAll("text")
    .data(myArray)
    .enter().append("text")

labels.attr("id", function(d,i) {return "text" + i})
    .attr("transform", function(d, i) {
        if (d<0) return "translate(" + ((barWidth/2)-5+(x(i))) + ","+(middle+(y(Math.abs(d))+15))+")"
        return "translate(" + ((barWidth/2)-5+(x(i))) + ","+(middle-(y(d))-1)+")"
    })
    .html(function(d) {return d;})

function reset() {
    stop = false;

    d3.select("#counter").html(steps = 0)

    labels.attr("class", "")
        .transition().duration(2000)
        .attr("transform", function(d, i) {
            if (d<0) return "translate(" + (x(i-1) ) + ","+(middle+y(Math.abs(d)))+")  rotate(180) "
            return "translate(" + (x(i-1) ) + ","+(middle)+") rotate(180)"}
        )

    rects.attr("class", "")
        .transition().duration(2000)
        .attr("transform", function(d, i) {
            if (d<0) return "translate(" + ((barWidth/2)-5+(x(i-1))) + ","+(middle+(y(Math.abs(d))+15))+")"
            return "translate(" + ((barWidth/2)-5+(x(i-1))) + ","+(middle-(y(d))-1)+")"
        })
}

function *bubble() {
    var N = myArray.length;
    var D = myArray;
    var swapped;
    do {
        swapped = false;
        //tracer._select(N - 1)._wait();
        select(N-1,selectColor);
        yield N-1;
        for (var i = 1; i < N; i++) {
            //  tracer._select(i)._wait();
            select(i,selectColor);
            yield i;
            if (D[i - 1] > D[i]) {
                swap(i-1,i)
                yield 'swap'+i+","+(i-1);
                var temp = D[i - 1];
                D[i - 1] = D[i];
                D[i] = temp;
                swapped = true;
            }
            deselect(i,mainColor);
        }
        deselect(N-1,mainColor)
        N--;
    } while (swapped);
}

//var seq = bubble();

//window.setInterval(()=>{console.log(seq.next())},400)


function *insertion() {
    var N = myArray.length;
    var D = myArray;
    for (var i = 1; i < N; i++) {
        var key = D[i];
        select(i,selectColor);
        yield i;
        var j;
        for (j = i - 1; (j >= 0) && (D[j] > key); j--) {
            D[j + 1] = D[j];
            swap(j,j+1);
            yield 'swap'+i+","+(i-1);
        }
        D[j + 1] = key;
        deselect(i,mainColor);
    }
}

var seq = insertion();


function *selection() {
    var N = myArray.length;
    var D = myArray;
    var swapped;
    var min;
    for (var i = 0; i < D.length - 1; i++) {
        var minJ = i;
        var min = i;
        select(i,selectColor);
        yield i;
        for (var j = i + 1; j < D.length; j++) {
            select(j,selectorder);
            yield j;
            if (D[j] < D[minJ]) {
                minJ = j;
            }
            deselect(j,mainColor);
        }
        if (minJ !== i) {
            swap(i,minJ)
            yield 'swap'+i+","+minJ;
            var temp = D[i];
            D[i] = D[minJ];
            D[minJ] = temp;
        }
        deselect(i,mainColor);
    }
}

//var seq = selection();


function swap(i,j) {

    slide(j,i);
    console.log('slide(j,i)')
    slide(i,j);
    console.log('slide(i,j)')
    d3.select("#text" + j).attr("id","text" + i);
    d3.select("#rect" + j).attr("id","rect" + i);
    d3.select("#text" + i).attr("id","text" + j);
    d3.select("#rect" + i).attr("id","rect" + j);


}


function slide(j, i) {
    d3.select("#text" + j)
        .transition().duration(durationTime)
    //.attr("transform", function(d) {return "translate(" + (x(i)) + ", 0)"})
        .attr("transform", function(d, k) {
            console.log('swap '+j+':'+d+"to"+i)
            if (d<0) return "translate(" + ((barWidth/2)-5+(x(i))) + ","+(middle+(y(Math.abs(d))+15))+")"
            return "translate(" + ((barWidth/2)-5+(x(i))) + ","+(middle-(y(d))-1)+")"
        })
    //d3.select("#rect" + j).style("fill", swapColor );

    d3.select("#rect" + j).style("fill", swapColor )
        .transition().duration(durationTime)
    //.attr("transform", function(d) {return "translate(" + (x(i-1)) + ", 0)"})
        .attr("transform", function(d, k) {
            if (d<0) return "translate(" + (x(i) ) + ","+(middle+y(Math.abs(d)))+")  rotate(180) "
            return "translate(" + (x(i) ) + ","+(middle)+") rotate(180)"}

        ).transition().duration(durationTime/9).style("fill", mainColor )



}
function select(j,color) {
    return d3.select("#rect" + j)
        .transition()
        .duration(100)
        .style("fill", color )

}
function deselect(j,color) {
    return d3.select("#rect" + j)
        .transition()
        .duration(100)
        .style("fill", color )

}



