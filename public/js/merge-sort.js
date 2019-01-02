
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

/******array calculate******/
myArray = [5,10,9,3,4,5,3,2,6];
console.log(myArray.length)
var max = Math.max(...myArray);
// if (myArray.length/2 !== Math.floor(myArray.length/2) )
// {
//     myArray.push(max)
// }
var min = Math.min(...myArray);
var maxHeight = Math.max(...[Math.abs(min),Math.abs(max)]);
const tempArray = myArray.map(a=>a);
var length = myArray.length;

var element = d3.select("#algorithm-box").node();
var height = 100;
var myheight = height*Math.log2(length);
var middle = height/2;
var width = element.getBoundingClientRect().width/3;
var mywidth = element.getBoundingClientRect().width;
var barWidth = width/length;
var intLength = parseInt(Math.log10(Math.abs(maxHeight))+1);
var fontSize = 10 ;
var x = d3.scaleLinear()
    .domain([0,length])
    .range([0, width]);
var y = d3.scaleLinear()
    .domain([0,maxHeight])
    .range([0, middle -20]);
var yspace=50;
var xspace = Math.log2(length)*x(1);
var svg = d3.select("#algorithm-box").append("svg")
    .attr("width",'100%' )
    .attr("height", myheight )
    .style('display','block')
    .style('margin','auto')
    .append("g").attr('transform','translate('+((mywidth-width)/2)+',0)');
/*************************************** rect *************************************/
var g = svg.append("g")
    rects = g
    .selectAll("g")
    .data(myArray)
    .enter().append("g").attr('transform',function (d,i) {
            return 'translate('+0+',0)';
        })
rects.attr("id", function(d,i) {return "rect" + i})
    .append("rect")
    .attr("rx", 6)
    .attr("ry", 6)
    .attr("transform", function(d, i) {
        if (d<0) return "translate(" + (x(i) ) + ","+(middle+y(Math.abs(d)))+")  rotate(180) "
        return "translate(" + (x(i) ) + ","+(middle)+") rotate(180)"})
    .attr("width", barWidth )
    .attr("height", function(d,i) {
        return  y(Math.abs(d))
    })
rects.append("text")
    .attr("transform", function(d, i) {
        if (d<0) return "translate(" + (((barWidth/2)-5+(x(i)))-barWidth) + ","+(middle+(y(Math.abs(d))+15))+")"
        return "translate(" + (((barWidth/2)-5+(x(i)))-barWidth) + ","+(middle-(y(d))-1)+")"
    })
    .style('font-size',fontSize)
    .html(function(d) {return d;})

/*************************************** rect *************************************/
/*************************************** lable *************************************/
var labels = g
    .selectAll("text")
    .data(myArray)
    .enter().append("text")
    .attr('x',0)
    .attr('y',0)

labels.attr("id", function(d,i) {return "text" + i})
    .attr("transform", function(d, i) {
        if (d<0) return "translate(" + (((barWidth/2)-5+(x(i)))-barWidth) + ","+(middle+(y(Math.abs(d))+15))+")"
        return "translate(" + (((barWidth/2)-5+(x(i)))-barWidth) + ","+(middle-(y(d))-1)+")"
    })
    .html(function(d) {return d;})
/*************************************** rect *************************************/

// function *mergeSort(array, comparator) {
//     array = array.slice();
//     if(array.length < 2) {
//         // We consider the array already sorted, no change is done
//         return array;
//     }
//
//     // default javascript sorting to mimic the native Array.prototype.sort
//     comparator = comparator || function (a, b) {
//         //console.log('a is ' + a + ', b is ' + b);
//         var aString = a.toString();
//         var bString = b.toString();
//         return a < b ? -1 : a > b ? 1 : 0;
//     };
//
//     // The size of the sub-arrays . Constantly changing .
//     var step = 1;
//     var startL, startR;
//
//     // var stack = [],arr1=[],arr2=[];
//     // stack.push(array.map((a,i)=>({value :a , index:i})));
//     // while (stack.length>0)
//     // {
//     //     let temp = stack.pop();
//     //     if (temp.length>1)
//     //     {
//     //         console.log('div',temp[0].index,temp[temp.length-1].index)
//     //         divid(temp[0].index,temp[temp.length-1].index+1)
//     //         yield temp;
//     //         console.log('temp',temp)
//     //          arr1 = temp.filter((a,i)=>i<temp.length/2)
//     //          arr2 = temp.filter((a,i)=>i>=temp.length/2)
//     //         //console.log('arr1',arr1,'arr2',arr2);
//     //         if (arr1.length>1)
//     //         {
//     //            // divid(arr1[0].index,arr1[arr1.length-1].index);
//     //             stack.push(arr1)
//     //         }
//     //         if (arr2.length>1)
//     //         {
//     //            // divid(arr1[0].index,arr1[arr1.length-1].index);
//     //             stack.push(arr2)
//     //         }
//     //         //console.log('stack',stack);
//     //     }
//     // }
//
//
//     for (var i=0 ;i<array.length;i++)
//     {
//
//         goDownGroup(i,i+1,xspace-i*x(1),xspace*Math.log2(array.length),'l');
//
//     }
//
//     while(step < array.length) {
//         startL = 0;
//         startR = step;
//         while(startR + step <= array.length) {
//             startL = startR + step;
//             startR = startL + step;
//         }
//         if(startR < array.length) {
//             yield *mergeArrays(array, startL, startL + step, startR, array.length - 1, comparator);
//         }
//         step *= 2;
//     }
//     console.log(JSON.stringify(array));
//     return array;
// }
//
// function *mergeArrays(array, startL, stopL, startR, stopR, comparator) {
//     // Additional arrays needed for merging
//     var right = new Array(stopR - startR + 1);
//     var left = new Array(stopL - startL + 1);
//
//     var i, k, m, n;
//
//     // Copy the elements to the additional arrays
//     for(i = 0, k = startR; i < (right.length - 1); ++i, ++k) {
//        // yield (k+'R->'+i);
//         right[i] = array[k];
//     }
//     for(i = 0, k = startL; i < (left.length - 1); ++i, ++k) {
//        //yield (k+'L->'+i);
//         left[i] = array[k];
//     }
//
//     // Adding sentinel values
//     right[right.length - 1] = Number.MAX_VALUE;
//     left[left.length - 1] = Number.MAX_VALUE;
//
//     // Merging the two sorted arrays into the initial one
//
//     for(k = startL, m = 0, n = 0; k < stopR; ++k) {
//         console.log('startL',startL);
//         console.log('stopL',stopL);
//         console.log('startR',startR);
//         console.log('stopR',stopR);
//         //yield ''
//         if(comparator(left[m], right[n]) <= 0) {
//             array[k] = left[m];
//             ///yield (startL+m)+'to'+(k-startL+m)
//             console.log('(startL+m) to k-startL+m')
//            // goUp(startL+m,k-startL+m,xspace,yspace,'l');
//            // yield left[m]+'to'+array[k]
//             m++;
//         } else {
//             array[k] = right[n];
//           //  yield (startR+n)+'to'+(k-startR+n);
//             console.log('(startR+n) to k-startR+n')
//            // goUp(startR+n,k-startR+n,xspace,yspace,'r');
//           //  yield right[n]+'to'+array[k]
//             n++;
//         }
//     }
//     yield 'end'+ JSON.stringify(right) +' , '+JSON.stringify(left)
// }
//
// var seq = mergeSort(myArray);
function *mergeSort (arr) {
    if (arr.length === 1) {
        // return once we hit an array with a single item
        return arr
    }
    const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
    const left = arr.slice(0, middle) // items on the left side
    const right = arr.slice(middle) // items on the right side
    console.log(JSON.stringify(left));
    console.log(JSON.stringify(right));
    //goDownGroup()
    //divid(arr[0].index,arr[arr.length-1].index+1,xspace,yspace);
    var l=goDownGroup(left[0].index,left[left.length-1].index,xspace,yspace,'l');
    var r=goDownGroup(right[0].index,right[right.length-1].index,xspace,yspace,'r');
    yield "";
     return yield *merge(
        yield *mergeSort(left),
        yield *mergeSort(right),l,r
    )
}

// compare the arrays item by item and return the concatenated result
function *merge (left, right,l,r) {
    let result = []
    let indexLeft = 0
    let indexRight = 0
    console.log(l,r)
    while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft].value < right[indexRight].value) {
          //  select(left[indexLeft].index,selectColor);
            result.push(left[indexLeft]);
            goUp(left[indexLeft].index,indexLeft,result.length-1,xspace,yspace,'l',left.length+right.length,l);
            indexLeft++
        } else {
           // select(right[indexRight].index,selectColor);
            result.push(right[indexRight]);
            goUp(right[indexRight].index,left.length+indexRight,result.length-1,xspace,yspace,'r',left.length+right.length,r);
            indexRight++
        }
    }
    while (indexLeft < left.length)
    {
        result.push(left[indexLeft]);
        goUp(left[indexLeft].index,indexLeft,result.length-1,xspace,yspace,'l',left.length+right.length,l);
        indexLeft++
    }
    while (indexRight < right.length)
    {
        result.push(right[indexRight]);
        goUp(right[indexRight].index,left.length+indexRight,result.length-1,xspace,yspace,'r',left.length+right.length,r);
        indexRight++
    }
    console.log('result'+JSON.stringify(result));


    yield '';
   // return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
    return result;
}
seq = mergeSort(myArray.map((a,i)=>({value:a,index:i})));
var myTimer ;

function stopAlgorithm () {
    clearInterval(myTimer);
}
function resumeAlgorithm()
{
    myTimer =setInterval(()=>{console.log(seq.next())},1100);
}
function resetAlgorithm()
{
    clearInterval(myTimer);
    myArray = tempArray.map(a=>a);
    console.log('t'+tempArray);
    console.log('m'+myArray);

    seq = mergeSort(myArray.map((a,i)=>({value:a,index:i})));
    var g = svg.append("g")
    rects.transition().duration(500).attr('transform',function (d,i) {
            return 'translate('+0+',0)';
        }).attr('class',0);



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
    // labels.attr("class", "").attr("id",function(d, i) {return "text" + i})
    //     .transition().duration(500)
    //     .attr("transform", function(d, i) {
    //         if (d<0) return "translate(" + ((barWidth/2)-5+(x(i))) + ","+(middle+(y(Math.abs(d))+15))+")"
    //         return "translate(" + ((barWidth/2)-5+(x(i))) + ","+(middle-(y(d))-1)+")"
    //     })
    //
    // rects.attr("class", "").attr("id",function(d, i) {return "rect" + i})
    //     .transition().duration(500)
    //     .attr("transform", function(d, i) {
    //         if (d<0) return "translate(" + (x(i) ) + ","+(middle+y(Math.abs(d)))+")  rotate(180) "
    //         return "translate(" + (x(i) ) + ","+(middle)+") rotate(180)"}).style("fill", mainColor )
}
function nextAlgorithm()
{
    console.log(seq.next())
}

function swap1(i,j) {

    slide(j,i);
    console.log('slide(j,i)')
    slide(i,j);
    console.log('slide(i,j)')
    d3.select("#text" + j).attr("id","text" + i);
    d3.select("#rect" + j).attr("id","rect" + i);
    d3.select("#text" + i).attr("id","text" + j);
    d3.select("#rect" + i).attr("id","rect" + j);


}
function swap(i,j) {
    slide(j,i,200);
    console.log('slide(j,i)')
    slide(i,j,200);
    console.log('slide(i,j)')
    d3.select('#rect'+j).attr("id",'#rect'+i);
    d3.select('#rect'+i).attr("id",'#rect'+j);
}
function slide1(j, i) {
    d3.select("#text" + j)
        .transition().duration(durationTime)
    //.attr("transform", function(d) {return "translate(" + (x(i)) + ", 0)"})
        .attr("transform", function(d, k) {
            console.log('swap '+j+':'+d+"to"+i)
            if (d<0) return "translate(" + (((barWidth/2)-5+(x(i)))-barWidth) + ","+(middle+(y(Math.abs(d))+15))+")"
            return "translate(" + (((barWidth/2)-5+(x(i)))-barWidth) + ","+(middle-(y(d))-1)+")"
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
function slide(j, i,dd) {
    var ytr = 0;
    let t = d3.select('#rect'+j).attr("transform");
    if (t)
    {
        ytr = t.split(/[(,)]+/)[2];
    }
    d3.select('#rect'+j).style("fill", swapColor )
        .transition().duration(dd)
    //.attr("transform", function(d) {return "translate(" + (x(i-1)) + ", 0)"})
        .attr("transform", function(d, k) {
            return "translate(" + (x(i)-x(j) ) + ","+ytr+") "}
        ).transition().duration(dd/9).style("fill", mainColor )
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

function move(a,x,y,d) {
    d3.select(a).transition()
        .duration(d).attr('transform','translate('+x+','+y+')');
}
function swapxy(a,b,d)
{
    let va = d3.select(a).attr('transform').translate;
    console.log(va);
    let vb = d3.select(b).attr('transform').translate;
    move(a,vb.x,vb.y,d);
    move(b,va.x,va.y,d);
    d3.select(a).attr("id",b);
    d3.select(b).attr("id",a);
}
function swapxy1(a,b,d)
{
    let va = d3.select(a).node().getBBox();
    let vb = d3.select(b).node().getBBox();
    move(a,vb.x,vb.y,d);
    move(b,va.x,va.y,d);
    d3.select(a).attr("id",b);
    d3.select(b).attr("id",a);
}
function goDownGroup(i,j,xx,yy,go)
{
    var ytr = 0;
    var xtr = 0;
    var  t,s,c ;
    var gg = go ==='l'?-1:1;
    var k = i;
    var ss = d3.select('#rect'+i);
    var tt = ss.attr("transform");
    var xxtr=0;

    if (tt)
    {
        xxtr = tt.split(/[(,)]+/)[1];
    }
    for (;k<=j;k++)
    {
        s = d3.select('#rect'+k);
        t = s.attr("transform");
        c = s.attr("class") ? s.attr("class") : 0;
        c++;
        s.attr("class",c);
        if (t)
        {
            ytr = t.split(/[(,)]+/)[2];
            xtr = t.split(/[(,)]+/)[1];
        }
        move('#rect'+k,((parseFloat(xtr)+(xx/(Math.pow(2,c)))*gg)),(parseFloat(ytr)+yy),1000);
    }
    console.log(xxtr)
    return parseFloat(xxtr);

}



function goDown(i,j,d)
{
    var ytr = 0;
    var xtr = 0;
    var  t,s,c ;

        s = d3.select('#rect'+i);
        t = s.attr("transform");
        c = s.attr("class") ? s.attr("class") : 0;
        c++;
        s.attr("class",c);
        if (t)
        {
            ytr = t.split(/[(,)]+/)[2];
            xtr = t.split(/[(,)]+/)[1];
        }
        move('#rect'+i,((parseInt(xtr)+(xx/(c*2)))),(parseInt(ytr)+yy),d)
}
function goUp(i,iIndex,j,xx,yy,go,l,xp)
{
    var ytr = 0;
    var xtr = 0;
    var  t,s,c ;
    var g = go ==='l'?1:-1;
    s = d3.select('#rect'+i);
    t = s.attr("transform");
    c = s.attr("class") ? s.attr("class") : 0;
        if (t)
        {
            ytr = t.split(/[(,)]+/)[2];
            xtr = t.split(/[(,)]+/)[1];
        }
        console.log('xp'+xp);
        console.log('xp1'+(parseFloat(xtr)+(xx/(Math.pow(2,c)))*g));
        //move('#rect'+i,(parseInt(xtr)+(xx/(c))*g+(x(j))),(parseInt(ytr)-yy),1000);
        console.log("iIndex"+iIndex);
        console.log(g);
        move('#rect'+i,(parseFloat(xtr)+(xx/(Math.pow(2,c)))*g)-x(iIndex)+x(j),(parseFloat(ytr)-yy),1000);


    c--;
    s.attr("class",c);
}

function divid(i,j) {

    var middle = Math.ceil((i+j)/2);
    goDownGroup(i,middle,xspace,yspace,'l');
    goDownGroup(middle,j,xspace,yspace,'r');
}
//divid(0,12);
//setTimeout(()=>{divid(0,6);divid(6,12);},2000);
//setTimeout(()=>{divid(0,3);divid(3,6);divid(6,9);divid(9,12)},4000);
//(()=>{divid(0,2);divid(2,3);divid(3,5);divid(5,6);divid(6,8);divid(8,9);divid(9,11);divid(11,12);},6000);

//godown(0,3,-50,100);
//godown(4,7,50,100);
//setTimeout(()=>{slide(3,0,1000);},10)
//move('#rect3',-50,100,1000);
//move('#rect1',-50,100,1000);
//setTimeout(()=>{move('#rect1',100,0,1000)},3000);
//move('#rect6',-50,100,1000);
//move('#rect6',0,0,1000);

// move('#rect2',-50,100,1000);
// move('#rect3',-50,100,1000);
// move('#rect4',50,100,1000);
// move('#rect5',50,100,1000);
// move('#rect6',50,100,1000);
// move('#rect7',50,100,1000);

//move('#rect2',-350,-100,1000);
//move('#text2',350,100,1000);
//setTimeout(()=>{swapxy('#rect2','#rect5',3000);},21);
//setTimeout(()=>{move('#rect2',-350,-100,1000);},10000);
// var mysvg = d3.select("#algorithm-box").append("svg")
//     .attr("width", width )
//     .attr("height", height ).style('display','block')
//     .style('margin','auto')
//     .append("g");

