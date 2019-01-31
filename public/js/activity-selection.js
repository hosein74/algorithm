

try {
    console.log(myMatrix);
}
catch (e) {
    myMatrix = [[[5, 1, 3, 0, 5, 8,1],[9 ,2 ,4 ,6 ,7 ,9,8]],[]];
}

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
    if (a.end > b.end)
        return 1;
   else if (a.end < b.end)
        return -1;
    else
        return 0;
}
var start = myMatrix[0][0].map(Number);
var end = myMatrix[0][1].map(Number);

var TempMatrix =  myMatrix.map(a=>a);
var myActivites=[];

try {
    if (start.length !== end.length)
        throw (new Error('arrays not valid'));

    for (let i=0;i<end.length;i++)
    {
        if ( (end[i] - start[i])  <=0 || start[i] < 0 || end[i] < 0)
            throw (new Error('start and end not valid in index '+i));
        myActivites.push({start:start[i],end:end[i],index:i});
    }
    myActivites.sort(myCompare);
}
catch (e) {
    console.log(e);
   // alert(e);
}
console.log(myActivites)

var length = start.length;
var element = d3.select("#algorithm-box").node();
var height = 40;
var myheight = height*length+70;
var width = element.getBoundingClientRect().width/2;
var mywidth = element.getBoundingClientRect().width;

var barWidth = myheight/length;
var fontSize = 10 ;

var maximum = Math.max(...end);


var x = d3.scaleLinear()
    .domain([0,maximum])
    .range([0, width]);
var y = d3.scaleLinear()
    .domain([0,length])
    .range([0, myheight-50]);
var svg = d3.select("#algorithm-box").append("svg")
    .attr("width",'100%' )
    .attr("height", myheight )
    .style('display','block')
    .style('margin','auto')
    .append("g").attr('transform','translate('+((mywidth-width)/2)+','+20+')');
////////////////////////////////////////////////////////////////////////////

svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + (myheight-barWidth/2   ) + ")")
    .call(d3.axisTop(x)); // Create an axis component with d3.axisBottom
//////////////////////////////////////
//
// var margin = {top: 20, right: 90, bottom: 30, left: 90},
//     width = 960 - margin.left - margin.right,
//     height = 500 - margin.top - margin.bottom;

function setHelp(text,color)
{
    $('#helpColor').append("<div style='margin-top: 5px ;'><p style=\"display: inline-block; \">"+text+"</p><div style=\"margin-left:10px; margin-bottom:"+(-mywidth/150)+"px;background-color: "+color+";width: "+mywidth/50+"px;height: "+mywidth/50+"px;border-radius: 50%; display: inline-block\"></div></div>\n")
}

setHelp('انتخاب شدن',finalorder);
setHelp('عدم انتخاب',selectColor);


/// ///////////////////////////////////////////////////////
var g1 = svg.append("g")
rects = g1
    .selectAll("g")
    .data(myActivites)
    .enter().append("g").attr('transform',function (d,i) {
        return 'translate('+ x(d.start) +','+y(d.index)+')';
    })
//
 rects.attr("id", function(d,i) {return "rect" + i})
    .append("rect").attr("id", function(d,i) {return "rect-" + i}).attr('class','rects')
    .attr("rx", 6)
    .attr("ry", 6)
    .attr("height", barWidth*.8 )
    .attr("width", function(d,i) {
        return  x(Math.abs(d.end - d.start))
    })
rects.append("text").attr("id", function(d,i) {return "start-" + i}).attr('class','starts').text(function (d,i) {
    return d.start;
}).attr('transform',function (d,i) {
    return 'translate('+ 1 +','+(barWidth/2)+')';
})

rects.append("text").attr("id", function(d,i) {return "end-" + i}).attr('class','ends').text(function (d,i) {
    return d.end;
}).attr('transform',function (d,i) {
    return 'translate('+ x((d.end - d.start)) +','+(barWidth/2)+')';
})


/*************************************** rect *************************************/
/*************************************** lable *************************************/



////////////////////////////////////////////


function swapNode(i,j)
{

    swapRect(i-1,j-1);
    var ik,jk;
    for (var k=0;k<nodes.length;k++)
    {
        if (nodes[k].id === i) {
            // console.log(nodes[k].id)
            ik = k;
        }
        if (nodes[k].id === j)
        {
            // console.log(nodes[k].id);
            jk = k;
        }
    }
    var  iNode = d3.select('#node-'+ik);
    var  jNode = d3.select('#node-'+jk);

    // iNode.transition().duration(400).attr('transform',function (d,i) {
    //     return 'translate('+nodes[jk].x+','+nodes[jk].y+')';
    // });
    // jNode.transition().duration(400).attr('transform',function (d,i) {
    //     return 'translate('+nodes[ik].x+','+nodes[ik].y+')';
    // });

    // iNode.attr('id',jk);
    //jNode.attr('id',ik);
    console.log('i'+i)
    console.log('ik'+ik)
    console.log('j'+j)
    console.log('jk'+jk)
    console.log(nodes)
    let itemp = nodes[ik].data.name;
    let jtemp = nodes[jk].data.name;
    // let ix = nodes[ik].x;
    // let iy = nodes[ik].y;
    // let jx = nodes[jk].x;
    // let jy = nodes[jk].y;
    // let ix0 = nodes[ik].x0;
    // let iy0 = nodes[ik].y0;
    // let jx0 = nodes[jk].x0;
    // let jy0 = nodes[jk].y0;
    // nodes[jk].x =ix;
    // nodes[jk].y =iy;
    // nodes[ik].x =jx;
    // nodes[ik].y =jy;
    // nodes[jk].x0 =ix0;
    // nodes[jk].y0 =iy0;
    // nodes[ik].x0 =jx0;
    // nodes[ik].y0 =jy0;
    renameNode(j,itemp);
    renameNode(i,jtemp);
    //   console.log('rename')
    //   console.log(nodes[ik].data.name);
    //   console.log('to ')
    //   nodes[ik].data.name = v;
    //   console.log(nodes[ik].data.name);
    //   update(nodes[ik]);
    // update(nodes[jk])
    // update(nodes[jk])
//      console.log(numbs);
//     //
//     var a = numbs.slice(1);
//     console.log(a);
//     var newsource = {name: a[0],id:1, children: getChildren(0, a) }
// //   console.log('dl', newsource)
//     root = d3.hierarchy(newsource, function(d) { return d.children; });
//
//     root.x0 = 0;
//     root.y0 = width/2;

    // update1(root)


    // setTimeout(()=>{  update(root)},2000);


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

function move(a,x,y,d) {
    d3.select(a).transition()
        .duration(d).attr('transform','translate('+x+','+y+')');
}

function *printMaxActivities(arr)
{
    rects.transition().duration(300).attr('transform',function (d,i) {
        return 'translate('+ x(d.start) +','+y(i)+')';
    });
    yield ;



    // The first activity always gets selected
    var i = 0;

    select(i,finalorder);
    yield ;
    // Consider rest of the activities
    for (var j = 1; j < arr.length; j++)
    {
        // If this activity has start time greater than or
        // equal to the finish time of previously selected
        // activity, then select it
        if (arr[j].start >= arr[i].end)
        {
            select(j,finalorder);
            i = j;

        }
        else
        {
            select(j,selectColor);
        }
        yield ;
    }
}


var seq = printMaxActivities(myActivites.map((a,i)=>(a)));
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

    seq = printMaxActivities(myActivites.map((a,i)=>(a)));
    //var g = svg.append("g")
    rects.transition().duration(300).attr('transform',function (d,i) {
        return 'translate('+ x(d.start) +','+y(d.index)+')';
    });
    d3.selectAll(".rects").style('fill',mainColor).attr('id',function (d,i) {
        return 'rect-'+i;
    });
}
function nextAlgorithm()
{
    console.log(seq.next())
}
