


var mainColor = d3.rgb("#aa8eff");
var swapColor = d3.rgb("#ffaa55");
var selectColor = d3.rgb("#ff6259");
var selectorder = d3.rgb("#ff00ff");
var finalorder = d3.rgb("#48cb9a");
var selected = d3.rgb("#ffff00");
var count = 1;
var durationTime = 200;
var stop = false;
var steps = 0;
var bogoShuffles = 0;

/******array calculate******/
function myCompare(a,b) {
    if (a.profit > b.profit)
        return -1;
    else if (a.profit < b.profit)
        return +1;
    else
        return 0;

}
myMatrix = [[[3, 6, 1, 4, 6,2,3,5],[20 ,19 ,27 ,25 ,15,50,50,10]],[]];
var deadTimes = myMatrix[0][0];
var profits = myMatrix[0][1];

var TempMatrix =  myMatrix.map(a=>a);
var myActivites=[];

try {
    if (deadTimes.length !== profits.length)
        throw (new Error('arrays not valid'));
    for (let i=0;i<deadTimes.length;i++)
    {
        if (  profits[i] <= 0 || deadTimes[i] <= 0  )
            throw (new Error('start and end not valid in index '+i));
        myActivites.push({deadTime:deadTimes[i],profit:profits[i],index:i});
    }
    myActivites.sort(myCompare);

}
catch (e) {
    console.log(e);
    alert(e);
}

var length = deadTimes.length;
var element = d3.select("#algorithm-box").node();
var height = 40;
var myheight = height*(length+1)+70;
var width = element.getBoundingClientRect().width/2;
var mywidth = element.getBoundingClientRect().width;

var barWidth = myheight/(length+1);
var fontSize = 10 ;

var maximum = Math.max(...deadTimes)

var x = d3.scaleLinear()
    .domain([0,maximum])
    .range([0, width]);
var y = d3.scaleLinear()
    .domain([0,length+1])
    .range([0, myheight-50]);
var svg = d3.select("#algorithm-box").append("svg")
    .attr("width",'100%' )
    .attr("height", myheight )
    .style('display','block')
    .style('margin','auto')
    .append("g").attr('transform','translate('+((mywidth-width)/2)+','+20+')');
////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////
//
// var margin = {top: 20, right: 90, bottom: 30, left: 90},
//     width = 960 - margin.left - margin.right,
//     height = 500 - margin.top - margin.bottom;


/// ///////////////////////////////////////////////////////
var g1 = svg.append("g")
rects = g1
    .selectAll("g")
    .data(myActivites)
    .enter().append("g").attr('transform',function (d,i) {
        return 'translate('+0 +','+y(d.index)+')';
    })
//

rects.attr("id", function(d,i) {return "rect" + i}).attr('class', function(d,i) {return 'rects-'+d.index})
    .append("rect").attr("id", function(d,i) {return "rect-" + i}).attr('class', function(d,i) {return 'rects'})
    .attr("rx", 6)
    .attr("ry", 6)
    .attr("height", barWidth*.8 )
    .attr("width", function(d,i) {
        return  x(Math.abs(d.deadTime))
    })
rects.append("text").attr("id", function(d,i) {return "index-" + i}).attr('class','indexes').text(function (d,i) {
    return d.index ;
}).attr('transform',function (d,i) {
    return 'translate('+ d.deadTime/2 +','+(barWidth/2)+')';
})

rects.append("text").attr("id", function(d,i) {return "profit-" + i}).attr('class','profits').text(function (d,i) {
    return d.profit;
}).attr('transform',function (d,i) {
    return 'translate('+ (x(d.deadTime)/2) +','+(barWidth/2)+')';
})
//
// rects.append("text").attr("id", function(d,i) {return "end-" + i}).attr('class','ends').text(function (d,i) {
//     return d.deadTime;
// }).attr('transform',function (d,i) {
//     return 'translate('+ x(d.deadTime) +1 +','+(barWidth/2)+')';
// })


svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + (myheight-barWidth/2   ) + ")")
    .call(d3.axisTop(x)); // Create an axis component with d3.axisBottom
/*************************************** rect *************************************/
/*************************************** lable *************************************/



////////////////////////////////////////////
function clone(selector) {
    var node = d3.select(selector).node();
    return d3.select(node.parentNode.insertBefore(node.cloneNode(true),
        node.nextSibling));
}


function select(j,color) {
    return d3.select("#rect-" + j)
        .transition()
        .duration(100)
        .style("fill", color )
}



function swapRect(i,j) {

    console.log(i);
    console.log(j);
    var iRect = d3.select('#rect'+i)
    var jRect = d3.select('#rect'+j)
    // var ir =d3.select('#rect'+i).attr('transform')
    // var jr =d3.select('#rect'+j).attr('transform')
    var ir =d3.select('#rect'+i).node().getBBox();
    var jr =d3.select('#rect'+j).node().getBBox();
    var iRect1 =d3.select('#rect1-'+i)
    var jRect1 =d3.select('#rect1-'+j)
    var ri = iRect1.node().getBBox();
    var rj = jRect1.node().getBBox();
    let ti = d3.select('#rect'+i).attr("transform");
    var xtri=0,xtrj=0
    if (ti)
    {
        xtri = ti.split(/[(,)]+/)[1];
    }
    let tj = d3.select('#rect'+j).attr("transform");
    if (tj)
    {
        xtrj = tj.split(/[(,)]+/)[1];
    }

    // let vi = ir.attr('transform').translate;
    // let vj = jr.attr('transform').translate;
    console.log(ir)
    console.log(jr)
    console.log(-x(i)+x(j))
    console.log(xtri);
    console.log(-x(j)+x(i))
    console.log(xtrj);
    move('#rect'+i,x(j)   ,0,1000);
    move('#rect'+j,x(i),0,1000);
    iRect.attr("id",'rect'+j);
    jRect.attr("id",'rect'+i);
    iRect1.attr("id",'rect1-'+j);
    jRect1.attr("id",'rect1-'+i);
}

function move(a,x1,y1,d) {
     let copy =clone(a).transition()
        .duration(d).attr('transform','translate('+x1+','+y1+')').attr('class','dr');
    copy.select('rect').transition()
        .duration(d).attr('width',x(1)).style('fill',finalorder);
     copy.select('.indexes').transition()
         .duration(d).attr('transform',function (d,i) {
         return 'translate('+ (x(1)/2) +','+(y(1)/2)+')';
     });
     copy.select('.profits').remove();
}

function *printMaxActivities()
{

    rects.transition().duration(300).attr('transform',function (d,i) {
        return 'translate('+ 0 +','+y(i)+')';
    });

    yield ''

    const slot = new Array(length);
    const result = new Array(length);
    for (let i = length - 1; i >= 0; i--) {
        result[i] = '-';
    }
// Initialise all slots to free
    for (let i = 0; i < length; i++) {
        slot[i] = 0;
    }

// Iterate through all the given jobs
    for (let i = 0; i < length; i++) {
        /*
           Start from the last possible slot.
           Find a slot for the job
           */
        select(i,swapColor);
        yield i;
        for (let j = Math.min(length, myActivites[i].deadTime) - 1; j >= 0; j--) {
            if (slot[j] === 0) {
                move('.rects-'+myActivites[i].index,x(j),y(length),300);
                result[j] = myActivites[i].index;
                slot[j] = 1;
                yield ;
                break;
            }
        }
        select(i,mainColor);

    }
    return result;
}



var seq = printMaxActivities();
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

    seq = printMaxActivities();
    //var g = svg.append("g")
    rects.transition().duration(300).attr('transform',function (d,i) {
        return 'translate('+ 0 +','+y(d.index)+')';
    });

    d3.selectAll(".rects").style('fill',mainColor).attr('id',function (d,i) {
        return 'rect-'+i;
    });
    d3.selectAll(".dr").transition().duration(300).attr('transform',function (d,i) {
        return 'translate('+x(length)  +','+y(length)+')';
    }).remove();
}
function nextAlgorithm()
{
    console.log(seq.next())
}
