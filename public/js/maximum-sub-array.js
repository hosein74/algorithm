


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
myArray = [-2, -3, 4, -1, -6, -7, 5, 10,-8];
//console.log(myArray.length)
var max = Math.max(...myArray);

var min = Math.min(...myArray);
var maxHeight = Math.max(...[Math.abs(min),Math.abs(max)]);
const tempArray = myArray.map(a=>a);
var length = myArray.length;

var element = d3.select("#algorithm-box").node();
var height = 200;
var myheight = height +50
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
    .append("g").attr('transform','translate('+((mywidth-width)/2)+','+50+')');
////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////
var numbs = [myArray[0]];
//
// var margin = {top: 20, right: 90, bottom: 30, left: 90},
//     width = 960 - margin.left - margin.right,
//     height = 500 - margin.top - margin.bottom;

var i = 0,
    duration = 750,
    root;
var counter = 0;
var treeData = {};


//////////////////////////////////////////////////////////
var g1 = svg.append("g")
rects = g1
    .selectAll("g")
    .data(myArray)
    .enter().append("g").attr('transform',function (d,i) {
        return 'translate('+ (x(i)) +','+0+')';
    })
rects.attr("id", function(d,i) {return "rect" + i})
    .append("rect").attr("id", function(d,i) {return "rect1-" + i}).attr('class','rectss')
    .attr("rx", 6)
    .attr("ry", 6)
    .attr("transform", function(d, i) {
        if (d<0) return "translate(" + 0 + ","+(middle+y(Math.abs(d)))+")  rotate(180) "
        return "translate(" + 0  + ","+(middle)+") rotate(180)"})
    .attr("width", barWidth*.9 )
    .attr("height", function(d,i) {
        return  y(Math.abs(d))
    })
rects.append("text")
    .attr("transform", function(d, i) {
        if (d<0) return "translate(" + ((barWidth/2)-5+(0)-barWidth) + ","+(middle+(y(Math.abs(d))+15))+")"
        return "translate(" + ((barWidth/2)-5+(0)-barWidth) + ","+(middle-(y(d))-1)+")"
    })
    .style('font-size',fontSize)
    .html(function(d) {return d;})

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
    return d3.select("#rect1-" + j)
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


function *maxSubarraySum(array) {
    let maxSoFar = 0;
    let maxEndingHere = 0;
    var index=[];
    var rIndex=[];
    for (let i = 0; i < array.length; i++) {
        maxEndingHere += array[i];
        select(i,swapColor);
        yield ;
        if (maxEndingHere < 0) {
            maxEndingHere = 0;
            select(i,selectColor);
            // for (let j = i; j > 0; j--)
            // {
            //     select(j,mainColor);
            // }
        }
        if (maxSoFar < maxEndingHere) {
            maxSoFar = maxEndingHere;
            select(i,finalorder);
            index.push(i);
            yield ;
        }
    }
    yield '';
    let lastI = index.pop();
    var maxtemp = maxSoFar
    for (var i = lastI; maxSoFar > 0 ; i-- )
    {
        maxSoFar -= array[i];
        select(i,selectorder);
    }
    return maxtemp;

}



seq = maxSubarraySum(myArray.map((a,i)=>(a)));
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

    seq = maxSubarraySum(myArray.map((a,i)=>(a)));
    //var g = svg.append("g")
    rects.transition().duration(500).attr('transform',function (d,i) {
        return 'translate('+x(i)+',0)';
    }).attr('class',0).attr('id',function (d,i) {
        return 'rect'+i;
    });
    d3.selectAll(".rectss").style('fill',mainColor).attr('id',function (d,i) {
        return 'rect1-'+i;
    });
}
function nextAlgorithm()
{
    console.log(seq.next())
}
