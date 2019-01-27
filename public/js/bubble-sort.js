
try {
    console.log(myArray);
}
catch (e) {
    myArray = [5,9,-8,6,21,8,7,4,1,1,10];
}

var mainColor = d3.rgb("#aa8eff");
var swapColor = d3.rgb("#ffaa55");
var selectColor = d3.rgb("#ff6259");
var selectorder = d3.rgb("#ff00ff");
var selected = d3.rgb("#ffff00");
var count = 1;
var durationTime = 200;
var stop = false;
var steps = 0;
var bogoShuffles = 0;
var max = Math.max(...myArray);
var min = Math.min(...myArray);
var maxHeight = Math.max(...[Math.abs(min),Math.abs(max)]);
const tempArray = myArray.map(a=>a);
console.log('t'+tempArray);
console.log('m'+myArray);
var length = myArray.length;

var height = 500;

var middle = height/2
var element = d3.select("#algorithm-box").node();

var width = element.getBoundingClientRect().width/3;
var mywidth = element.getBoundingClientRect().width;
var barWidth = width/length;

var x = d3.scaleLinear()
    .domain([0,length])
    .range([0, width]);

var y = d3.scaleLinear()
    .domain([0,maxHeight])
    .range([0, middle -20]);

var svg = d3.select("#algorithm-box").append("svg")
    .attr("width", '100%' )
    .attr("height", height ) .style('display','block')
    .style('margin','auto')
    .append("g").attr('transform','translate('+((mywidth-width)/2)+',0)');
var rects = svg.append("g")
    .attr("transform", "translate(" + barWidth + ",0) ")
    .selectAll("rect")
    .data(myArray)
    .enter().append("rect")

rects.attr("id", function(d,i) {return "rect" + i})
    .attr("rx", 6)
    .attr("ry", 6)
    .attr("transform", function(d, i) {
        if (d<0) return "translate(" + (x(i) ) + ","+(middle+y(Math.abs(d)))+")  rotate(180) "
        return "translate(" + (x(i) ) + ","+(middle)+") rotate(180)"})
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
var seq = bubble();
var myTimer ;

function stopAlgorithm () {
    clearInterval(myTimer);
}
function stopAlgorithm () {
    clearInterval(myTimer);
}
function resumeAlgorithm()
{
    myTimer =setInterval(()=>{console.log(seq.next())},400);
}
function resetAlgorithm()
{
    clearInterval(myTimer);
    myArray = tempArray.map(a=>a);
    console.log('t'+tempArray);
    console.log('m'+myArray);

    seq = bubble();

    // $('svg').remove();
    //  svg = d3.select("#algorithm-box").append("svg")
    //     .attr("width", width )
    //     .attr("height", height )
    //     .append("g")
    //  rects = svg.append("g")
    //     .attr("transform", "translate(" + barWidth + ",0) ")
    //     .selectAll("rect")
    //     .data(myArray)
    //     .enter().append("rect")
    //
    // rects.attr("id", function(d,i) {return "rect" + i})
    //     .attr("transform", function(d, i) {
    //         if (d<0) return "translate(" + (x(i) ) + ","+(middle+y(Math.abs(d)))+")  rotate(180) "
    //         return "translate(" + (x(i) ) + ","+(middle)+") rotate(180)"})
    //     .attr("width", barWidth *.9)
    //     .attr("height", function(d,i) {
    //         return  y(Math.abs(d))
    //
    //     })
    //
    //  labels = svg.selectAll("text")
    //     .data(myArray)
    //     .enter().append("text")
    //
    // labels.attr("id", function(d,i) {return "text" + i})
    //     .attr("transform", function(d, i) {
    //         if (d<0) return "translate(" + ((barWidth/2)-5+(x(i))) + ","+(middle+(y(Math.abs(d))+15))+")"
    //         return "translate(" + ((barWidth/2)-5+(x(i))) + ","+(middle-(y(d))-1)+")"
    //     })
    //     .html(function(d) {return d;})
    labels.attr("class", "").attr("id",function(d, i) {return "text" + i})
        .transition().duration(500)
        .attr("transform", function(d, i) {
            if (d<0) return "translate(" + ((barWidth/2)-5+(x(i))) + ","+(middle+(y(Math.abs(d))+15))+")"
            return "translate(" + ((barWidth/2)-5+(x(i))) + ","+(middle-(y(d))-1)+")"
        })

    rects.attr("class", "").attr("id",function(d, i) {return "rect" + i})
        .transition().duration(500)
        .attr("transform", function(d, i) {
            if (d<0) return "translate(" + (x(i) ) + ","+(middle+y(Math.abs(d)))+")  rotate(180) "
            return "translate(" + (x(i) ) + ","+(middle)+") rotate(180)"}).style("fill", mainColor )
}
function nextAlgorithm()
{
    seq.next();
}




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

//var seq = insertion();


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
    slide(i,j);
    console.log('swap',i,'/',j);
    var it= d3.select("#text" + i);
    var jt= d3.select("#text" + j);
    it.attr("id","text" + j);
    jt.attr("id","text" + i);
    var ir= d3.select("#rect" + i);
    var jr= d3.select("#rect" + j);
    ir.attr("id","rect" + j);
    jr.attr("id","rect" + i);


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

