


try {
    console.log(myArray);
}
catch (e) {
    myArray = [5,9,-8,6,3,8,7,4,1,1,10];
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

//console.log(myArray.length)
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
    .append("g").attr('transform','translate('+((mywidth-width)/2)+','+0+')');
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


var g = svg.append("g")
    .attr('transform','translate('+0+','+height+')');
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
    .attr("width", barWidth )
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


var tree = d3.tree()
    .size([width, height]);



function update_node(node)
{
//     var newsource = {name: nodes[0],id:0, children: getChildren(0, nodes) }
// //   console.log('dl', newsource)
//
//     root = d3.hierarchy(newsource, function(d) { return d.children; });
//
//     root.x0 = 0;
//     root.y0 = width/2;
//
}

function buildHeap(inData){

    var newsource = {name: inData[0],id:0, children: getChildren(0, inData) }
//   console.log('dl', newsource)

    root = d3.hierarchy(newsource, function(d) { return d.children; });

    root.x0 = 0;
    root.y0 = width/2;

    update(root)
}


// just leaving this global so i can mess with it in the console
var nodes;
function update(source){

i=0;
//  root = d3.hierarchy(newsource, function(d) { return d.children; });
    treeData = tree(root);
    nodes = treeData.descendants();
    var links = treeData.descendants().slice(1);
    //console.log(nodes);
    // ****************** Nodes section ***************************
    // Update the nodes...
    //console.log(i);
    var node = g.selectAll('g.node-heap')
        .data(nodes, function(d) {return d.id || (d.id = ++i); });

    // Enter any new modes at the parent's previous position.
    var nodeEnter = node.enter().append('g')
        .attr('class', 'node-heap')

        .attr("transform", function(d) {
            return "translate(" + source.x0 + "," + source.y0 + ")";
        })
        .on('click', click);

    // Add Circle for the nodes
    nodeEnter.append('circle')
        .attr('class', 'node-heap')
            .attr('id', function (d,i) { return 'node-'+(d.id-1)
            })
        .attr('r', 1e-6)
        .style("fill", function(d) {
            return d._children ? "lightsteelblue" : "#fff";
        });

// Add labels for the nodes
    nodeEnter.append('text')
        .attr("dy", ".35em")
        .attr("x", function(d) {
            return d.children || d._children ? -13 : 13;
        })
        .attr("text-anchor", function(d) {
            return d.children || d._children ? "end" : "start";
        })
        .text(function(d) { return d.data.name; });

    // UPDATE
    node.select('text')
        .attr("x", function(d) {
            return d.children || d._children ? -13 : 13;
        })
        .attr("text-anchor", function(d) {
            return d.children || d._children ? "end" : "start";
        })
            .text(function(d) { return d.data.name; });

    node.select('circle')
        .attr('class', 'node-heap')
        .attr('id', function (d,i) { return 'node-'+(d.id-1)
        })
        .attr('r', 1e-6)
        .style("fill", function(d) {
            return d._children ? "lightsteelblue" : "#fff";
        });

    var nodeUpdate = nodeEnter.merge(node);
  //  console.log(nodeEnter);

    // Transition to the proper position for the node
    nodeUpdate.transition()
        .duration(duration)
        .attr("transform", function(d) {
            return "translate(" + d.x + "," + d.y + ")";
        });

    // Update the node attributes and style
    nodeUpdate.select('circle.node-heap')
        .attr('r', 10)
        .attr('id', function (d,i) { return 'node-'+(d.id-1)
        })
        .style("fill", function(d) {
            return d._children ? "lightsteelblue" : "#fff";
        })
        .attr('cursor', 'pointer');


    // Remove any exiting nodes
    var nodeExit = node.exit()
    .transition()
    .duration(duration)
    .attr("transform", function(d) {
        return "translate(" + source.x + "," + source.y + ")";
    })
        .remove();

    // On exit reduce the node circles size to 0
    nodeExit.select('circle')
        .attr('r', 1e-6);

    // On exit reduce the opacity of text labels
    nodeExit.select('text')
        .style('fill-opacity', 1e-6);


// ****************** links section ***************************

    // Update the links...
    var link = g.selectAll('path.link-heap')
        .data(links, function(d) { return d.id; });

    // Enter any new links at the parent's previous position.
    var linkEnter = link.enter().insert('path', "g")
        .attr("class", "link-heap")
        .attr('d', function(d){
            var o = {y: source.y0, x: source.x0}
            return diagonal(o, o)
        });

    // UPDATE
    var linkUpdate = linkEnter.merge(link);

    // Transition back to the parent element position
    linkUpdate.transition()
        .duration(duration)
        .attr('d', function(d){ return diagonal(d, d.parent) });

    // Remove any exiting links
    var linkExit = link.exit().transition()
        .duration(duration)
        .attr('d', function(d) {
            var o = {x: source.x, y: source.y}
            return diagonal(o, o)
        })
        .remove();

    // Store the old positions for transition.
    nodes.forEach(function(d, i){
//   console.log(d)
        d.x0 = d.x;
        d.y0 = d.y;
    });

    //console.log(nodes[0])
    //nodes[0].data.children = nodes[0].data._children;
    //nodes[0].data._children = null;


}

function update1(source){



//  root = d3.hierarchy(newsource, function(d) { return d.children; });
    var treeData = tree(root)
    nodes = treeData.descendants();
    var links = treeData.descendants().slice(1);
    // ****************** Nodes section ***************************
    // Update the nodes...
    var node = g.selectAll('g.node-heap')
        .data(nodes, function(d) {return d.id || (d.id = ++i); });

    // Enter any new modes at the parent's previous position.
    var nodeEnter = node.enter().append('g')
        .attr('class', 'node-heap')
        .attr("transform", function(d) {
            return "translate(" + source.x0 + "," + source.y0 + ")";
        })
        .on('click', click);

    // Add Circle for the nodes
    nodeEnter.append('circle')
        .attr('class', 'node-heap')
        .attr('id', function (d,i) { return 'node-'+(d.id-1)
        })
        .attr('r', 1e-6)
        .style("fill", function(d) {
            return d._children ? "lightsteelblue" : "#fff";
        });

// Add labels for the nodes
    nodeEnter.append('text')
        .attr("dy", ".35em")
        .attr("x", function(d) {
            return d.children || d._children ? -13 : 13;
        })
        .attr("text-anchor", function(d) {
            return d.children || d._children ? "end" : "start";
        })
        .text(function(d) { return d.data.name; });

    // UPDATE
    var nodeUpdate = nodeEnter.merge(node);
   // console.log(nodeEnter)
    console.log(node)
    console.log(nodeEnter)
    // Transition to the proper position for the node
    nodeUpdate.transition()
        .duration(duration)
        .attr("transform", function(d) {
            return "translate(" + d.x + "," + d.y + ")";
        });

    // Update the node attributes and style
    nodeUpdate.select('circle.node-heap')
        .attr('r', 10)
        .style("fill", function(d) {
            return d._children ? "lightsteelblue" : "#fff";
        })
        .attr('cursor', 'pointer');


    // Remove any exiting nodes
    var nodeExit = node.exit()
        // .transition()
        // .duration(duration)
        // .attr("transform", function(d) {
        //     return "translate(" + source.x + "," + source.y + ")";
        // })
        .remove();

    // On exit reduce the node circles size to 0
    nodeExit.select('circle')
        .attr('r', 1e-6);

    // On exit reduce the opacity of text labels
    nodeExit.select('text')
        .style('fill-opacity', 1e-6);


// ****************** links section ***************************

    // Update the links...
    var link = g.selectAll('path.link-heap')
        .data(links, function(d) { return d.id; });

    // Enter any new links at the parent's previous position.
    var linkEnter = link.enter().insert('path', "g")
        .attr("class", "link-heap")
        .attr('d', function(d){
            var o = {y: source.y0, x: source.x0}
            return diagonal(o, o)
        });

    // UPDATE
    var linkUpdate = linkEnter.merge(link);

    // Transition back to the parent element position
    linkUpdate.transition()
        .duration(duration)
        .attr('d', function(d){ return diagonal(d, d.parent) });

    // Remove any exiting links
    var linkExit = link.exit().transition()
        .duration(duration)
        .attr('d', function(d) {
            var o = {x: source.x, y: source.y}
            return diagonal(o, o)
        })
        .remove();

    // Store the old positions for transition.
    nodes.forEach(function(d, i){
//   console.log(d)
        d.x0 = d.x;
        d.y0 = d.y;
    });

    //console.log(nodes[0])
    //nodes[0].data.children = nodes[0].data._children;
    //nodes[0].data._children = null;


}
buildHeap([])

function renameNode(i,v) {
    var ik;
    for (var k=0;k<nodes.length;k++)
    {
        if (nodes[k].id === i) {
            ik = k;
        }
    }
    console.log('rename')
    console.log(nodes[ik].data.name);
    console.log('to ')
    nodes[ik].data.name = v;
    console.log(nodes[ik].data.name);
    update(nodes[ik]);

}

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




// Takes an index and an array and finds all the children.
// returns an array which can be added to children of the root node to
// make a json thing which can be used to make a d3.hierarchy();
function getChildren(i, arr) {
    var childs = [];

    if( arr[i+1+ i] ){
        childs[0] = {name: arr[i*2+1],id:i*2+1, children: []}
        if( arr[i+i+2] ){
            //  console.log(arr[i+1+ i], arr[i+i+2])
            childs[1] = {name: arr[i * 2 + 2],id:i * 2 + 2, children:[]}  ;
        }
    }

    var nextin = i * 2 + 1;
    if(arr[nextin*2+1]){
        //  console.log('more children')
        childs[0].children = getChildren(nextin, arr)
        childs[0]._children = null;

        if( arr[nextin*2 + 2 ]){
            childs[1].children = getChildren(nextin+1, arr);
            childs[1]._children = null;
        }
    }
    return childs;
}


// not called but kind of what I might use to annimate the swap thing while
// balancing binary heaps
function expandChildren(index, chi){
    setTimeout(function () {
        //buildHeap([ 4, 3, 2, 9, 14, 29] );
      //  console.log('hooho', nodes)
        if(nodes[index].children === null){
            nodes[0].children = [nodes[0]._children[chi]]
        }
        else{
       //     console.log( typeof nodes[0]. children)
            nodes[index].children.push(nodes[index]._children[1])
        }
// .h(nodes[0]._children[0]);
        //nodes[0]._children ;

// console.log(nodes[index])
        update(nodes[index])
        if(chi < 1){
            expandChildren(0, 1)
        }
    }, 3000);

}

//expandChildren(0, 0);


// Creates a curved (diagonal) path from parent to the child nodes
// switched around all the x's and y's from orig so it's verticle
function diagonal(s, d) {
    //console.log('in diag and s = ', s);
    //console.log('d = ', d)

    path = `M ${s.x} ${s.y}
          C ${(s.x + d.x) / 2} ${s.y},
            ${(s.x + d.x) / 2} ${d.y},
            ${d.x} ${d.y}`

    return path;

}


// Toggle children on click.
function click(d) {
// use the following to superficially change the text of the node.
//  this.getElementsByTagName('text')[0].textContent = "clicked all over"

    if (d.children) {
        d._children = d.children;
        d.children = null;
    } else {
        d.children = d._children;
        d._children = null;
    }
    update(d);
}

// will make all the children null and store the real vals in _children
function collapse(d) {
    if(d.children) {
        d._children = d.children
        d.children = null;
        d._children.forEach(collapse)
    }
}


function removeNode(d)
{
    var ik;
    for (var k=0;k<nodes.length;k++)
    {
        if (nodes[k].id === d) {
            console.log(nodes[k].id)
            ik = k;
        }
    }
    //this is the links target node which you want to remove
    var target = nodes[ik];
    //make new set of children
    var children = [];
    //iterate through the children
    target.parent.children.forEach(function(child){
        if (child.id != target.id){
            //add to the child list if target id is not same
            //so that the node target is removed.
            children.push(child);
        }
    });
    //set the target parent with new set of children sans the one which is removed
    target.parent.children = children;
    //redraw the parent since one of its children is removed
    update(nodes[ik].parent);
}

function addNode(d,v) {

  //  var node = g1.select('#node-'+d)
    //var node = nodes[d];
    var id = (nodes[d].data.children.length === 0) ? nodes[d].data.id*2+1 : (nodes[d].data.children.length === 1) ? nodes[d].data.id*2+2 : null;
    var id1 = (nodes[d].data.children.length === 0) ? nodes[d].id*2 : (nodes[d].data.children.length === 1) ? nodes[d].id*2+1 : null;
    var newNode = { 'name': v,
        'id' :  id,
        'children': [],
        '_children':null
    };
    if (nodes[d].data.children.length<=2)
    {

       // console.log('node push');
       // console.log(newNode);
        var myNewNode = d3.hierarchy(newNode);
     //   console.log(myNewNode)
        myNewNode.depth = nodes[d].depth + 1;
        myNewNode.height = nodes[d].height - 1;
        myNewNode.parent = nodes[d];
        myNewNode.id = id1;
        if(!nodes[d].children){
            nodes[d].children = [];
            nodes[d].data.children = [];
        }
        nodes[d].children.push(myNewNode);
        nodes[d].data.children.push(myNewNode.data);

        //  var newsource = {name: numbs[0],id:0, children: getChildren(0, numbs) }
//   console.log('dl', newsource)

        // root = d3.hierarchy(newsource, function(d) { return d.children; });
        //
        // root.x0 = 0;
        // root.y0 = width/2;
        update(nodes[d]);
       // console.log(nodes)
    }


   // console.log(numbs);
}

function selectNode(d,color)
{
    return d3.select('#node-'+d)
        .transition()
        .duration(100)
        .style("fill", color );
}
var array_length;
/* to create MAX  array */
function *heap_root(input, i) {
    console.log('heapify -> '+ input);
    console.log('root '+ i);

    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var max = i;
    console.log('left '+ left);
    console.log('right '+ right);
    selectNode(i,selectorder);
    select(i,selectorder);

    if (left < array_length && input[left] > input[max]) {
        max = left;
    }

    if (right < array_length && input[right] > input[max])     {
        max = right;
    }
    console.log('max :' +max) ;

    yield ''
    select(i,mainColor);

    if (max != i) {
        select(i,swapColor);
        select(max,swapColor);
        selectNode(i,swapColor);
        selectNode(max,swapColor);
        yield '';
        select(i,mainColor);
        select(max,mainColor);
        selectNode(i,'#fff');
        selectNode(max,'#fff');
        swapNode(i+1,max+1);
        swap(input, i, max);
        swap(numbs, i, max);
        yield *heap_root(input, max);
    }
    else
    {
        selectNode(i,'#fff');
    }

}

function *heapSort(input) {
    buildHeap( numbs );
    //console.log(g.select('#3').data) ;
    select(0,selectColor)
    yield 'start'
    select(0,mainColor)
    for (var i=0;i<input.length;i++)
    {
        if (input[2*i+1]) {
            select(2 * i + 1,selectColor)
            numbs[2*i+1]=input[2*i+1];
            addNode(i, input[2 * i + 1])
            yield '';
            select(2 * i + 1,mainColor);

        }
        if (input[2*i+2]){
            select(2 * i + 2,selectColor)
            numbs[2*i+2]=input[2*i+2];
            addNode(i,input[2*i+2])
            yield '';
            select(2 * i + 2,mainColor)
        }
        // for (var j = Math.floor(numbs.length / 2); j >= 0; j -= 1)      {
        //     yield *heap_root(numbs, j);
        // }
    }
    //  swapNode(2,4);
    // yield ''
    //  swapNode(2,5);
    //   removeNode(0);
    yield '';
    console.log(nodes);
    array_length = input.length;
    console.log( 'numbs ->'+ numbs)
    console.log( 'input ->'+ input)
    for (var i = Math.floor(input.length / 2); i >= 0; i -= 1)      {
        yield *heap_root(input, i);
    }
    yield input;
    console.log(input)
    console.log('ta inja');
    console.log(numbs)
    for (i = input.length - 1; i > 0; i--) {
        // swapNode(1,i+1)0
        select(0,swapColor);
        select(i,swapColor);
        swapRect(0,i);
        swap(input, 0, i);
        swap(numbs, 0, i);
        array_length--;
        buildHeap(numbs.filter((a,i)=>i<array_length));
        yield'';
        select(0,mainColor);
        select(i,finalorder);
        console.log(nodes)
        yield *heap_root(input, 0);
    }
    select(0,finalorder);
}

function swap(input, index_A, index_B) {
    var temp = input[index_A];
    input[index_A] = input[index_B];
    input[index_B] = temp;
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



seq = heapSort(myArray.map((a,i)=>(a)));
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

    seq = heapSort(tempArray.map((a,i)=>a));
    //var g = svg.append("g")
    rects.transition().duration(500).attr('transform',function (d,i) {
        return 'translate('+x(i)+',0)';
    }).attr('class',0).attr('id',function (d,i) {
        return 'rect'+i;
    });
    d3.selectAll(".rectss").style('fill',mainColor).attr('id',function (d,i) {
        return 'rect1-'+i;
    });
    numbs=[myArray[0]];
    buildHeap([])



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
