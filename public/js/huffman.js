

try {
    console.log(myArray);
}
catch (e) {
    myArray = ['asdasdfgfdsasdfs'];
}

log = console.log.bind(console);

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


myArray = myArray[0].split('').map(String);

var Heap = function(fn) {
    this.fn = fn || function(e) {
        return e;
    };
    this.items = [];
};

Heap.prototype = {
    swap: function(i, j) {
        this.items[i] = [
            this.items[j],
            this.items[j] = this.items[i]
        ][0];
    },
    bubble: function(index) {
        var parent = ~~((index - 1) / 2);
        //log(parent)
        if (this.item(parent) < this.item(index)) {
            //swapTree(this.item(index),this.item(parent));
            this.swap(index, parent);
            this.bubble(parent);
        }

    },
    item: function(index) {
        return this.fn(this.items[index]);
    },
    pop: function() {
        return this.items.pop();
    },
    sift: function(index, end) {
        var child = index * 2 + 1;
        if (child < end) {
            if (child + 1 < end && this.item(child + 1) > this.item(child)) {
                child++;
            }
            if (this.item(index) < this.item(child)) {
                this.swap(index, child);
                return this.sift(child, end);
            }
        }
    },
    push: function() {
        var lastIndex = this.items.length;
        for (var i = 0; i < arguments.length; i++) {
            this.items.push(arguments[i]);
            this.bubble(lastIndex++);
        }

    },
    get length() {
        return this.items.length;
    }
};


/******array calculate******/

//myArray = ['h','a','b','a','a','c','d','a','c','b','e','c','e','c','e','c','j','b'];
//console.log(myArray.length)
// if (myArray.length/2 !== Math.floor(myArray.length/2) )
// {
//     myArray.push(max)
// }
const tempArray = myArray.map(a=>a);
var length = myArray.length;


var prob1 = {};
//create tree
var tree1 = new Heap(function(e) {
    return e[0];
});
for (var i = 0; i < myArray.length; i++) {
    if (prob1.hasOwnProperty(myArray[i])) {
        prob1[myArray[i]]++;
    } else {
        prob1[myArray[i]] = 1;
    }
}


Object.keys(prob1).sort(function(a, b) {
    return ~~(Math.random() * 2);
}).forEach(function(e) {
    tree1.push([prob1[e], e]);
});

var ll = tree1.length

var element = d3.select("#algorithm-box").node();
var height = 100;
var myheight = height * ll;
var middle = height/2;
var width = element.getBoundingClientRect().width/3;
var mywidth = element.getBoundingClientRect().width;
var barWidth = width/length;
var intLength = parseInt(Math.log10(Math.abs(20))+1);
var fontSize = 10 ;
var y = d3.scaleLinear()
    .domain([0,ll])
    .range([0, myheight]);
var x = d3.scaleLinear()
    .domain([0,tree1.length])
    .range([0, width]);
var yspace=50;
//var xspace = Math.log2(length)*x(1);
var svg = d3.select("#algorithm-box").append("svg")
    .attr("width",'100%' )
    .attr("height", myheight )
    .style('display','block')
    .style('margin','auto')
    .append("g").attr('transform','translate('+((mywidth-width)/2)+','+50+')');
///////////////////////////////////////////////////////////////////////////////

var g = svg.append("g")
    .attr('transform','translate('+0+','+height+')');

var g1 = svg.append("g")
    .attr('transform','translate('+0+','+height+')');
////////////////////////////////////////////////////////////////////////////
// var data = {
//     "nodes": [
//         // {"id": "0"},
//         // {"id": "1"},
//         // {"id": "2"},
//         // {"id": "3"},
//         // {"id": "4"},
//         // {"id": "5"},
//         // {"id": "6"},
//     ],
//     "links": [
//         // {"source": "0", "target": "1", "value": "3"},
//         // {"source": "0", "target": "2", "value": "7"},
//         // {"source": "1", "target": "3", "value": "4"},
//         // {"source": "1", "target": "4", "value": "4"},
//         // {"source": "2", "target": "5", "value": "4"},
//         // {"source": "2", "target": "6", "value": "4"},
//     ]
// };


//
// var simulation = d3.forceSimulation()
//     .force("charge", d3.forceManyBody().strength(-200))
//     .force("link", d3.forceLink().id(function(d) { return d.id; }).distance(50))
//     .force("x", d3.forceX(width / 2))
//     .force("y", d3.forceY(height / 2))
//     .alphaTarget(1)
//     .on("tick", ticked);
//
// var link = g1.selectAll(".link-huffman"),
//     node = g1.selectAll(".node-huffman");
//
// simulation.nodes(data.nodes);
// simulation.force("link").links(data.links);
//
//
// link = link
//     .data(data.links)
//     .enter().append("line")
//     .attr("id",function (d,i){return "link"+i})
//     .attr("class", function (d,i){return "link-huffman"});
//
//
// node = node
//     .data(data.nodes)
//     .enter().append('g')
//
// node
//     .attr("class","node-huffman")
//     .append("circle").attr("r", 15)
//     .attr("id", function (d,i){return "circle" + i})
//
// node.append("text")
//     .attr("dx", "-5")
//     .attr("dy", ".35em")
//     .style("font-size","15px")
//     .text(function(d) { return d.id });


// function ticked(e) {
//     let k = 10 * this.alpha();
//     link .each(function(d) { d.source.y -= k, d.target.y += k; })
//         .attr("x1", function(d) { return d.source.x; })
//         .attr("y1", function(d) { return d.source.y; })
//         .attr("x2", function(d) { return d.target.x; })
//         .attr("y2", function(d) { return d.target.y; })
//
//     node.attr("transform", function(d) {  return "translate(" + d.x + "," + d.y + ")"; })
// }
//
// setTimeout(()=>{
// data.nodes.push({"id": "1"})
// restart();
// },1000)
//
// setTimeout(()=>{
//     data.nodes.push({"id": "0"})
//     restart();
// },2000)
// setTimeout(()=>{
//     data.nodes.push({"id": "2"})
//     data.links.push({"source": "2", "target": "0", "value": "r"})
//     data.links.push({"source": "2", "target": "1", "value": "l"})
//     restart();
// },3000)
// setTimeout(()=>{
//     data.nodes.push({"id": "4"})
//     restart();
// },4000)
// setTimeout(()=>{
//     data.nodes.push({"id": "5"})
//     data.links.push({"source": "5", "target": "2", "value": "r"})
//     data.links.push({"source": "5", "target": "4", "value": "l"})
//     restart();
// },5000)

function restart() {
    link = link
        .data(data.links)
    link.exit().remove();

    link = link
        .enter().append("line").merge(link);
    link.attr("id",function (d,i){return "link"+i})
        .attr("class", function (d,i){return "link-huffman"})


    node = node
        .data(data.nodes)
    // Apply the general update pattern to the nodes.
    node.exit().remove();
    node = node.enter().append('g').merge(node);
    node
        .attr("class","node-huffman")
        .append("circle").attr("r", 15)
        .attr("id", function (d,i){return "circle" + i})

    node.append("text")
        .attr("dx", "-5")
        .attr("dy", ".35em")
        .style("font-size","15px")
        .text(function(d) { return d.id })
    // Apply the general update pattern to the links.

    // Update and restart the simulation.
    simulation.nodes(data.nodes);
    simulation.force("link").links(data.links);
    simulation.alpha(1).restart();
}
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

var i1 = 0,
    duration1 = 750,
    root1;
var counter1 = 0;
var treeData1 = {};
/////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////
// var g2 = svg.append("g")
// rects = g2
//     .selectAll("g")
//     .data(myArray)
//     .enter().append("g").attr('transform',function (d,i) {
//         return 'translate('+ (x(i)) +','+0+')';
//     })
// rects.attr("id", function(d,i) {return "rect" + i})
//     .append("rect").attr("id", function(d,i) {return "rect1-" + i}).attr('class','rectss')
//     .attr("rx", 6)
//     .attr("ry", 6)
//     .attr("transform", function(d, i) {
//         return "translate(" + 0  + ","+(middle)+") rotate(180)"})
//     .attr("width", barWidth )
//     .attr("height", function(d,i) {
//         return  y(Math.abs(i))
//     })
// rects.append("text")
//     .attr("transform", function(d, i) {
//         return "translate(" + ((barWidth/2)-5+(0)-barWidth) + ","+(middle-(y(i))-1)+")"
//     })
//     .style('font-size',fontSize)
//     .html(function(d) {return d;})

/*************************************** rect *************************************/
/*************************************** lable *************************************/



////////////////////////////////////////////


var tree = d3.tree()
    .size([width, height]);

var tree1 = d3.tree()
    .size([width, height]);



function buildHeap(inData){

    var newsource = {name: inData[0],id:0, children: getChildren(0, inData) }
//   console.log('dl', newsource)

    root = d3.hierarchy(newsource, function(d) { return d.children; });

    root.x0 = 0;
    root.y0 = width/2;

    update(root)
}

function buildHeap1(inData){

    var newsource = {name: inData[0],id:0, children: getChildren(0, inData) }
//   console.log('dl', newsource)

    root1 = d3.hierarchy(newsource, function(d) { return d.children; });

    root1.x0 = 0;
    root1.y0 = width/2;

    update1(root1)
}


// just leaving this global so i can mess with it in the console
var nodes;
var nodes1;
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

    i1=0;
//  root = d3.hierarchy(newsource, function(d) { return d.children; });
    treeData1 = tree(root1);
    nodes1 = treeData1.descendants();
    let links = treeData1.descendants().slice(1);
    //console.log(nodes);
    // ****************** Nodes section ***************************
    // Update the nodes...
    //console.log(i);
    let node = g1.selectAll('g.node-heap')
        .data(nodes1, function(d) {return d.id || (d.id = ++i); });

    // Enter any new modes at the parent's previous position.
    let nodeEnter = node.enter().append('g')
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
    let nodeExit = node.exit()
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
    let link = g.selectAll('path.link-heap')
        .data(links, function(d) { return d.id; });

    // Enter any new links at the parent's previous position.
    let linkEnter = link.enter().insert('path', "g")
        .attr("class", "link-heap")
        .attr('d', function(d){
            var o = {y: source.y0, x: source.x0}
            return diagonal(o, o)
        });

    // UPDATE
    let linkUpdate = linkEnter.merge(link);

    // Transition back to the parent element position
    linkUpdate.transition()
        .duration(duration)
        .attr('d', function(d){ return diagonal(d, d.parent) });

    // Remove any exiting links
    let linkExit = link.exit().transition()
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
function clone(selector,g) {
    var node = d3.select(selector).node();
    return d3.select(g.insertBefore(node.cloneNode(true),
        node.nextSibling));
}
var array_length;
/* to create MAX  array */

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
function moveChoiceTo(elem_choice, direction) {

    var span = elem_choice.parentNode,
        td = span.parentNode;

    if (direction === -1 && span.previousElementSibling) {
        td.insertBefore(span, span.previousElementSibling);
    } else if (direction === 1 && span.nextElementSibling) {
        td.insertBefore(span, span.nextElementSibling.nextElementSibling)
    }
}
var g2;
function flatten(arr) {
    return arr.reduce(function (flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
}
function myCompare(a,b) {
    if (a[0] > b[0])
        return -1;
    else if (a[0] < b[0])
        return +1;
    else
        return 0;

}
function swapTree(i,j,index) {
    log('swap',i,j)
    var ni,nj,gi,gj,xti=0,xtj=0,ti,tj;


    if (Array.isArray(i))
    {
        ni = flatten(i).join('-');
        gi = d3.select('#tree'+ni)
        ti = d3.select('#treeNode'+ni).attr("transform");
        if (ti)
        {
            xti = ti.split(/[(,)]+/)[1];
        }
        gi.attr('transform','translate('+(-xti+(x(index-1)))+','+0+')');
    }
    else
    {
        ni = i
        gi = d3.select('#treeNode'+ni);
        ti = d3.select('#treeNode'+ni).attr("transform");
        if (ti)
        {
            xti = ti.split(/[(,)]+/)[1];
        }
        gi.attr('transform','translate('+((x(index-1)))+','+0+')');

    }
    if (Array.isArray(j))
    {
        nj = flatten(j).join('-');
        gj = d3.select('#tree'+nj);
        tj = d3.select('#treeNode'+nj).attr("transform");
        if (tj)
        {
            xtj = tj.split(/[(,)]+/)[1];

        }
        gj.attr('transform','translate('+(-xtj+(x(index)))+','+0+')');

    }
    else
    {
        nj = j;
        gj = d3.select('#treeNode'+nj);
        tj = d3.select('#treeNode'+nj).attr("transform");
        if (tj)
        {
            xtj = tj.split(/[(,)]+/)[1];

        }
        gj.attr('transform','translate('+((x(index)))+','+0+')');
    }
    console.log(index)
   // gj.attr('transform','translate('+x(index-1)+','+0+')');
  //  gi.attr('transform','translate('+x(index-1)+','+0+')');



}
function swapTree1(i,j,index) {
    log('swap',i,j)
    var ni,nj,gi,gj,xti=0,xtj=0,ti,tj;


    if (Array.isArray(i))
    {
        ni = flatten(i).join('-');
        gi = d3.select('#tree'+ni)
        ti = d3.select('#treeNode'+ni).attr("transform");
        if (ti)
        {
            xti = ti.split(/[(,)]+/)[1];
        }
        gi.attr('transform','translate('+(-xti+(x(index)))+','+0+')');
    }
    else
    {
        ni = i
        gi = d3.select('#treeNode'+ni);
        ti = d3.select('#treeNode'+ni).attr("transform");
        if (ti)
        {
            xti = ti.split(/[(,)]+/)[1];
        }
        gi.attr('transform','translate('+((x(index)))+','+0+')');

    }
    if (Array.isArray(j))
    {
        nj = flatten(j).join('-');
        gj = d3.select('#tree'+nj);
        tj = d3.select('#treeNode'+nj).attr("transform");
        if (tj)
        {
            xtj = tj.split(/[(,)]+/)[1];

        }
        gj.attr('transform','translate('+(-xtj+(x(index-1)))+','+0+')');

    }
    else
    {
        nj = j;
        gj = d3.select('#treeNode'+nj);
        tj = d3.select('#treeNode'+nj).attr("transform");
        if (tj)
        {
            xtj = tj.split(/[(,)]+/)[1];

        }
        gj.attr('transform','translate('+((x(index-1)))+','+0+')');
    }
    console.log(index)
    // gj.attr('transform','translate('+x(index-1)+','+0+')');
    //  gi.attr('transform','translate('+x(index-1)+','+0+')');



}

function link(d) {
    return "M" + d.source.y + "," + d.source.x
        + "C" + (d.source.y + d.target.y) / 2 + "," + d.source.x
        + " " + (d.source.y + d.target.y) / 2 + "," + d.target.x
        + " " + d.target.y + "," + d.target.x;
}
function create(data) {
    g2 = svg.append("g")
    treeNodes = g2
        .selectAll("g")
        //.data(data.items)
        .data(data)
        .enter().append("g").attr('transform',function (d,i) {
            return 'translate('+ (x(i)) +','+0+')';
        }).attr("id", function(d,i) {return "treeNode" + d[1]}).attr("class","node-huffman")
    treeNodes
        .append("circle").attr("id", function(d,i) {return "circle-" + d[1]}).attr('class','circles')
        .attr("r", 10)
    treeNodes.append("text")
        .attr("transform", function(d, i) {
            return "translate("+12+ ","+0+")"
        })
        .style('font-size',fontSize)
        .html(function(d) {log(d);return d;})
}
function createTree1(i,j,is,js) {
    let s = is +js;
    var fi =[],fj=[];

    var treeLink1,treeLink2,ni,nj,fi,fj,tri,trj,gt,xtni=0,xtnj = 0,xtnni=0,xtnnj = 0,nni,nnj,rxi=0,rxj=0,cx=0,xti=0,xtj=0,dxi=0,dxj=0

    if (Array.isArray(i) && Array.isArray(j))
    {
        fi =   flatten(i).join('-');
        ni = d3.select('#tree'+fi)
        nni = d3.select('#tree'+fi)
        ni.raise();
        fj =   flatten(j).join('-');
        nj = d3.select('#tree'+fj)
        nnj = d3.select('#tree'+fj)
        nj.raise();
        gt = g2.append("g").attr('id','tree'+fi+'-'+fj)
        treeLink1 = gt.append("g").attr("id", "treeLink" + fi)
        treeLink2 = gt.append("g").attr("id", "treeLink" + fj)
        // var cj = nj.node();
        // var ci = ni.node();
        let tni = nni.attr("transform");
        if (tni)
        {
            xtnni = tni.split(/[(,)]+/)[1];
        }
        let tnj = nnj.attr("transform");
        if (tnj)
        {
            xtnnj = tnj.split(/[(,)]+/)[1];
        }
        let ti = d3.select('#treeNode'+fi).attr("transform");
        if (ti)
        {
            xti = ti.split(/[(,)]+/)[1];
        }
        let tj = d3.select('#treeNode'+fj).attr("transform");
        if (tj)
        {
            xtj = tj.split(/[(,)]+/)[1];
        }
        log(i,j)
        rxi = parseFloat(xti) + parseFloat(xtnni) ;
        rxj =parseFloat(xtj) + parseFloat(xtnnj) ;
        cx = ((rxi + rxj)/2)
        dxj = xtnni;
        dxi = xtnnj
    }
    else if (Array.isArray(i))
    {

        fi =   flatten(i).join('-');
        ni = d3.select('#tree'+fi)
        nni = d3.select('#tree'+fi)
        ni.raise();
        fj = j
        nj = d3.select('#treeNode'+fj)
        gt = g2.append("g").attr('id','tree'+fi+'-'+fj)
        treeLink1 = gt.append("g").attr("id", "treeLink" + fi)
        treeLink2 = gt.append("g").attr("id", "treeLink" + fj)
        // var cj = nj.node();
        // var ci = ni.node();
        let tni = nni.attr("transform");
        if (tni)
        {
            xtnni = tni.split(/[(,)]+/)[1];
        }
        nj.raise();
        let ti = d3.select('#treeNode'+fi).attr("transform");
        if (ti)
        {
            xti = ti.split(/[(,)]+/)[1];
        }
        let tj = d3.select('#treeNode'+fj).attr("transform");
        if (tj)
        {
            xtj = tj.split(/[(,)]+/)[1];
        }
        log(i,j)
        //gt.append(nj.node())
        // $("#treeNode"+fi).appendTo('#tree'+fi+','+fj);
        // $("#treeNode"+fj).appendTo('#tree'+fi+','+fj);
        log()
        rxi = parseFloat(xti) + parseFloat(xtnni) ;
        rxj =parseFloat(xtj) + parseFloat(xtnnj) ;
        cx = ((rxi + rxj)/2)
        dxj = xtnni;
        dxi = rxj

    }
    else if (Array.isArray(j))
    {
        fi = i
        fj =   flatten(j).join('-');
        ni = d3.select('#treeNode'+fi)
        ni.raise();
        nj = d3.select('#tree'+fj)
        nnj = d3.select('#tree'+fj)
        nj.raise();
        gt = g2.append("g").attr('id','tree'+fi+'-'+fj)
        treeLink1 = gt.append("g").attr("id", "treeLink" + fi)
        treeLink2 = gt.append("g").attr("id", "treeLink" + fj)
         var cj = nj.node();
        var ci = ni.node();
        log(i,j)

        let tnj = nnj.attr("transform");
        if (tnj)
        {
            xtnnj = tnj.split(/[(,)]+/)[1];
        }
        let ti = d3.select('#treeNode'+fi).attr("transform");
        if (ti)
        {
            xti = ti.split(/[(,)]+/)[1];
        }
        let tj = d3.select('#treeNode'+fj).attr("transform");
        if (tj)
        {
            xtj = tj.split(/[(,)]+/)[1];
        }
        rxi = parseFloat(xti) + parseFloat(xtnni) ;
        rxj =parseFloat(xtj) + parseFloat(xtnnj) ;
        cx = ((rxi + rxj)/2)
        dxi = xtnnj;
        dxj = rxi

    }
    else
    {
        fi = i
        ni = d3.select('#treeNode'+fi)
        ni.raise();
        fj = j
        nj = d3.select('#treeNode'+fj)
        nj.raise();
        gt = g2.append("g").attr('id','tree'+fi+'-'+fj)
        treeLink1 = gt.append("g").attr("id", "treeLink" + fi)
        treeLink2 = gt.append("g").attr("id", "treeLink" + fj)
        var cj = nj.node();
        var ci = ni.node();
        // gt.node().appendChild(ci);
        // gt.node().appendChild(cj);
        let ti = d3.select('#treeNode'+fi).attr("transform");
        if (ti)
        {
            xti = ti.split(/[(,)]+/)[1];
        }
        let tj = d3.select('#treeNode'+fj).attr("transform");
        if (tj)
        {
            xtj = tj.split(/[(,)]+/)[1];
        }
        //gt.append(nj.node())
        // $("#treeNode"+fi).appendTo('#tree'+fi+','+fj);
        // $("#treeNode"+fj).appendTo('#tree'+fi+','+fj);
         rxi = parseFloat(xti)  ;
         rxj =parseFloat(xtj)  ;
         cx = ((rxi + rxj)/2)
        dxi = rxi;
        dxj = rxj;

    }
  //  log(ni,nj)


   //var copy = clone('#treeNode'+i,gt.node());
  // var copy = clone('#treeNode'+i,gt);


    //var xti=0,xtj = 0;
    // let ti = d3.select('#treeNode'+fi).attr("transform");
    // if (ti)
    // {
    //     xti = ti.split(/[(,)]+/)[1];
    // }
    // let tj = d3.select('#treeNode'+fj).attr("transform");
    // if (tj)
    // {
    //     xtj = tj.split(/[(,)]+/)[1];
    // }
    // let tni = ni.attr("transform");
    // if (tni)
    // {
    //     xtni = tni.split(/[(,)]+/)[1];
    // }
    // let tnj = nj.attr("transform");
    // if (tnj)
    // {
    //     xtnj = tnj.split(/[(,)]+/)[1];
    // }
    // var rxi = parseFloat(xti) + parseFloat(xtnni) ;
    // var rxj =parseFloat(xtj) + parseFloat(xtnnj) ;
    // var cx = ((rxi + rxj)/2)


    gt.attr('transform', 'translate('+ (-(rxi-rxj)/2) +','+0+')');
    gt.append(function() { return ni.node() })
    gt.append(function() { return nj.node() })
    treeLink1.append('line')
        .attr("x1", cx)
        .attr("y1",0 )
        .attr("x2", cx )
        .attr("y2",0 )
        .transition().duration(500).attr("x1",cx)
        .attr("y1",0 )
        .attr("x2",rxi )
        .attr("y2",(y(1)) ).attr('class','link-huffman')
    treeLink2.append('line').attr("x1", cx)
        .attr("y1",0 )
        .attr("x2",cx)
        .attr("y2",0 ).transition().duration(500).attr("x1",cx)
        .attr("y1",0 )
        .attr("x2",rxj )
        .attr("y2",(y(1)) ).attr('class','link-huffman')
        ni.transition().duration(300).attr('transform', 'translate('+ dxj +','+(y(1))+')');
        nj.transition().duration(300).attr('transform', 'translate('+ dxi +','+(y(1))+')');

   var treeNodes = gt.append("g").attr('transform', 'translate('+ cx +','+0+')').attr("id", "treeNode" + fi+'-'+fj).attr("class","node-huffman")
    treeNodes
        .append("circle").attr("id","circle-" + fi+'-'+fj).attr('class','circles')
        .attr("r", 10)
    treeNodes.append("text")
        .attr("transform", "translate("+12+ ","+0+")")
        .style('font-size',fontSize)
        .html(s)
}
function createTree(i,j,is,js) {
    let s = is +js;
    var fi =[],fj=[];

    var treeLink1,treeLink2,ni,nj,fi,fj,tri,trj,gt

    if (Array.isArray(i) && Array.isArray(j))
    {
        fi =   flatten(i).join('-');
        ni = d3.select('#tree'+fi).attr('class','')
        ni.raise();
        fj =   flatten(j).join('-');
        nj = d3.select('#tree'+fj).attr('class','')
        nj.raise();
        gt = g2.append("g").attr('id','tree'+fi+'-'+fj)
        treeLink1 = gt.append("g").attr("id", "treeLink" + fi)
        treeLink2 = gt.append("g").attr("id", "treeLink" + fj)
        // var cj = nj.node();
        // var ci = ni.node();

    }
    else if (Array.isArray(i))
    {

        fi =   flatten(i).join('-');
        ni = d3.select('#tree'+fi).attr('class','')
        ni.raise();
        fj = j
        nj = d3.select('#treeNode'+fj)
        gt = g2.append("g").attr('id','tree'+fi+'-'+fj)
        treeLink1 = gt.append("g").attr("id", "treeLink" + fi)
        treeLink2 = gt.append("g").attr("id", "treeLink" + fj)
        // var cj = nj.node();
        // var ci = ni.node();

        nj.raise();

    }
    else if (Array.isArray(j))
    {
        fi = i
        fj =   flatten(j).join('-');
        ni = d3.select('#treeNode'+fi)
        ni.raise();
        nj = d3.select('#tree'+fj).attr('class','')
        nj.raise();
        gt = g2.append("g").attr('id','tree'+fi+'-'+fj)
        treeLink1 = gt.append("g").attr("id", "treeLink" + fi)
        treeLink2 = gt.append("g").attr("id", "treeLink" + fj)
        var cj = nj.node();
        var ci = ni.node();

    }
    else
    {
        fi = i
        ni = d3.select('#treeNode'+fi)
        ni.raise();
        fj = j
        nj = d3.select('#treeNode'+fj)
        nj.raise();
        gt = g2.append("g").attr('id','tree'+fi+'-'+fj)
        treeLink1 = gt.append("g").attr("id", "treeLink" + fi)
        treeLink2 = gt.append("g").attr("id", "treeLink" + fj)
        var cj = nj.node();
        var ci = ni.node();
        // gt.node().appendChild(ci);
        // gt.node().appendChild(cj);

        //gt.append(nj.node())
        // $("#treeNode"+fi).appendTo('#tree'+fi+','+fj);
        // $("#treeNode"+fj).appendTo('#tree'+fi+','+fj);

    }
    //  log(ni,nj)


    //var copy = clone('#treeNode'+i,gt.node());
    // var copy = clone('#treeNode'+i,gt);


    var xti=0,xtj = 0,xtni=0,xtnj = 0,ytni=0,ytnj = 0,yti=0,ytj =0
        let ti = d3.select('#treeNode'+fi).attr("transform");
    if (ti)
    {
        xti = ti.split(/[(,)]+/)[1];
        yti = ti.split(/[(,)]+/)[2];
    }
    let tj = d3.select('#treeNode'+fj).attr("transform");
    if (tj)
    {
        xtj = tj.split(/[(,)]+/)[1];
        ytj = tj.split(/[(,)]+/)[2];

    }
    let tni = ni.attr("transform");
    if (tni)
    {
        xtni = tni.split(/[(,)]+/)[1];
        ytni = tni.split(/[(,)]+/)[2];

    }
    let tnj = nj.attr("transform");
    if (tnj)
    {
        xtnj = tnj.split(/[(,)]+/)[1];
        ytnj = tnj.split(/[(,)]+/)[2];

    }
  //  gt.attr('transform', 'translate('+ (-(xti-xtj)/2) +','+0+')')

    var yf = parseFloat(yti) + parseFloat(ytni)
    gt.attr('class','tree'+ fi+'-'+fj);
    gt.append(function() { return ni.node() })
    gt.append(function() { return nj.node() })
    treeLink1.append('line')
        .attr("x1", ((xti)-(xti-xtj)/2))
        .attr("y1",yf )
        .attr("x2", ((xti)-(xti-xtj)/2) )
        .attr("y2",yf )
        .transition().duration(500).attr("x1",(xti-(xti-xtj)/2))
        .attr("y1",yf )
        .attr("x2",xti )
        .attr("y2",(yf+y(1)) ).attr('class','link-huffman')
    treeLink2.append('line').attr("x1", ((xti)-(xti-xtj)/2))
        .attr("y1",yf )
        .attr("x2",((xti)-(xti-xtj)/2))
        .attr("y2",yf ).transition().duration(500).attr("x1",((xti)-(xti-xtj)/2))
        .attr("y1",yf )
        .attr("x2",xtj )
        .attr("y2",(yf+y(1)) ).attr('class','link-huffman')
    ni.transition().duration(300).attr('transform', 'translate('+ xtni +','+(yf+y(1))+')')
    nj.transition().duration(300).attr('transform', 'translate('+ xtnj +','+(yf+y(1))+')')

    var treeNodes = gt.append("g").attr('transform', 'translate('+ ((xti)-(xti-xtj)/2) +','+yf+')').attr("id", "treeNode" + fi+'-'+fj).attr("class","node-huffman")
    treeNodes
        .append("circle").attr("id","circle-" + fi+'-'+fj).attr('class','circles')
        .attr("r", 10)
    treeNodes.append("text")
        .attr("transform", "translate("+12+ ","+0+")")
        .style('font-size',fontSize)
        .html(s)
}

function swap(input, index_A, index_B) {
    var temp = input[index_A];
    input[index_A] = input[index_B];
    input[index_B] = temp;
}
function sortTree1(tree) {
    for (let i = tree.length-1;i>0;i--) {
        if (tree[i][0] > tree[i - 1][0]) {
            swap(tree,i,i-1);
           // swapTree(tree[i][1],tree[i-1][1]);
        }
    }
    log(tree);
}

var Huffman = {
    encode: function *(data) {
        var prob = {};
        var myTree =[]
        //create tree
        var tree = new Heap(function(e) {
            return e[0];
        });
        for (var i = 0; i < data.length; i++) {
            if (prob.hasOwnProperty(data[i])) {
                prob[data[i]]++;
            } else {
                prob[data[i]] = 1;
            }
        }
        Object.keys(prob).sort().forEach(function(e) {
            tree.push([prob[e], e]);
            myTree.push([prob[e], e]);
        });
        log(tree);
        myTree.sort(myCompare)
        log(myTree);

        create(myTree);

        yield 4;

        while (myTree.length > 1) {
            let l = myTree.length;
            var first = myTree.pop(),
                second = myTree.pop();
            createTree(first[1],second[1],first[0] , second[0]);
            yield ;
            let gg = g2.selectAll('.tree')//.attr('transform','translate('+0+','+y(1)+')')
            log(gg._groups)
            log(gg._groups)
            myTree.push([first[0] + second[0], [first[1], second[1]]]);
            for (let i = myTree.length-1;i>0;i--) {
                if (myTree[i][0] > myTree[i - 1][0]) {
                    swap(myTree,i,i-1);
                }
            }
            // let flat;
            // for (let i = 0;i<myTree.length;i++) {
            //     if (Array.isArray(myTree[i][1])) {
            //         flat =  flatten(myTree[i][1]).join('-');
            //         let n = d3.select('.tree'+flat);
            //         let t = n.attr('transform');
            //         let yy=0;
            //         if (t)
            //         {
            //             yy = t.split(/[(,)]+/)[2];
            //         }
            //         n.attr('transform','translate('+0+','+((parseFloat(yy))+(y(1)))+')')
            //         //swapTree(myTree[i][1],myTree[i-1][1],i);
            //         //  yield '';
            //     }
            // }




        }
        // while (tree.length > 1) {
        //     let l = tree.length;
        //     var first = tree.pop(),
        //         second = tree.pop();
        //     createTree(first[1],second[1],first[0] , second[0]);
        //     tree.push([first[0] + second[0], [first[1], second[1]]]);
        //     yield ;
        //     sortTree(tree);
        // }

        // var dict = {};
        // var recurse = function(root, string) {
        //     if (root.constructor === Array) {
        //         recurse(root[0], string + '0');
        //         recurse(root[1], string + '1');
        //     } else {
        //         dict[root] = string;
        //     }
        // };
        // tree.items = tree.pop()[1];
        // recurse(tree.items, '');
        // var result = '';
        // for (var i = 0; i < data.length; i++) {
        //     result += dict[data[i]];
        // }
        // var header = Object.keys(dict).map(function(e) {
        //     return e.charCodeAt(0) + '|' + dict[e];
        // }).join('-') + '/';
        // return header + result;
    },
    decode: function(string) {
        string = string.split('/');
        var data = string[1].split(''),
            header = {};
        string[0].split('-').forEach(function(e) {
            var values = e.split('|');
            header[values[1]] = String.fromCharCode(values[0]);
        });
        var result = '';
        while (data.length) {
            var i = 0,
                cur = '';
            while (data.length) {
                cur += data.shift();
                if (header.hasOwnProperty(cur)) {
                    result += header[cur];
                    break;
                }
            }
        }
        return result;
    }
};

var seq = Huffman.encode(myArray.map(a=>a));
//log(enc);
//var dec = Huffman.decode(enc);
//log(dec);

//seq = heapSort(myArray.map((a,i)=>(a)));
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
   // myArray = tempArray.map(a=>a);
    //console.log('t'+tempArray);
   // console.log('m'+myArray);

    seq = Huffman.encode(myArray.map(a=>a));
    g2.selectAll('g').remove();
    create()
}
function nextAlgorithm()
{
    console.log(seq.next())
}
