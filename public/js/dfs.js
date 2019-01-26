
try {
    console.log(myMatrix);
}
catch (e) {
    myMatrix = [[[0,1, 2, 3, 4, 5, 6,7,8,9,10],[0 ,1],[0 ,2],[0 ,3],[1 ,3],[1 ,8],[1 ,9],[2 , 4],[10 ,4],[5 ,4],[4 ,7],[7 ,6],[6 ,2],[6 ,9]],[]];
}
function convertToGraph(arr) {
    var vertexes = arr[0][0];
    var data = {nodes:[],links:[]};
    for (var i=0;i<vertexes.length;i++)
    {
        data.nodes.push({"id": vertexes[i]})
    }
    for (var i=1;i<arr[0].length;i++)
    {
        data.links.push({"source": arr[0][i][0], "target": arr[0][i][1]});
        data.links.push({"source": arr[0][i][1], "target": arr[0][i][0]});
    }
    return data;
}

var data = convertToGraph(myMatrix);
console.log(data);

// var data = {
//     "nodes": [
//         {"id": "0"},
//         {"id": "1"},
//         {"id": "2"},
//         {"id": "3"},
//         {"id": "4"},
//         {"id": "5"},
//         {"id": "6"},
//         {"id": "7"},
//         {"id": "8"},
//         {"id": "9"},
//         {"id": "10"}
//     ],
//     "links": [
//         {"source": "0", "target": "1", "value": "3"},
//         {"source": "0", "target": "2", "value": "7"},
//         {"source": "0", "target": "3", "value": "4"},
//         {"source": "1", "target": "0", "value": "3"},
//         {"source": "1", "target": "3", "value": "1"},
//         {"source": "1", "target": "8", "value": "2"},
//         {"source": "1", "target": "9", "value": "5"},
//         {"source": "2", "target": "0", "value": "7"},
//         {"source": "2", "target": "4", "value": "8"},
//         {"source": "2", "target": "6", "value": "4"},
//         {"source": "3", "target": "0", "value": "4"},
//         {"source": "3", "target": "1", "value": "1"},
//         {"source": "4", "target": "2", "value": "8"},
//         {"source": "4", "target": "5", "value": "4"},
//         {"source": "4", "target": "7", "value": "6"},
//         {"source": "4", "target": "10", "value": "1"},
//         {"source": "5", "target": "4", "value": "4"},
//         {"source": "6", "target": "2", "value": "4"},
//         {"source": "6", "target": "7", "value": "9"},
//         {"source": "6", "target": "9", "value": "3"},
//         {"source": "7", "target": "4", "value": "6"},
//         {"source": "7", "target": "6", "value": "9"},
//         {"source": "8", "target": "1", "value": "2"},
//         {"source": "9", "target": "1", "value": "5"},
//         {"source": "9", "target": "6", "value": "3"},
//         {"source": "10", "target": "4", "value": "1"}
//     ]
// };

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



/******array calculate******/

//myArray = ['h','a','b','a','a','c','d','a','c','b','e','c','e','c','e','c','j','b'];
//console.log(myArray.length)
// if (myArray.length/2 !== Math.floor(myArray.length/2) )
// {
//     myArray.push(max)
// }
   // log(myMatrix);
//const tempArray = myArray.map(a=>a);
//var length = myArray.length;



var element = d3.select("#algorithm-box").node();
var height = 100;
var myheight = height * 500;
var middle = height/2;
var width = element.getBoundingClientRect().width/3;
var mywidth = element.getBoundingClientRect().width;
//var barWidth = width/length;
var intLength = parseInt(Math.log10(Math.abs(20))+1);
var fontSize = 10 ;
// var y = d3.scaleLinear()
//     .domain([0,ll])
//     .range([0, myheight]);
// var x = d3.scaleLinear()
//     .domain([0,tree1.length])
//     .range([0, width]);
var yspace=50;
//var xspace = Math.log2(length)*x(1);
var svg = d3.select("#algorithm-box").append("svg")
    .attr("width",'100%' )
    .attr("height", myheight )
    .style('display','block')
    .style('margin','auto')
    .append("g")//attr('transform','translate('+((mywidth))+','+50+')');
///////////////////////////////////////////////////////////////////////////////

var g = svg.append("g")
    .attr('transform','translate('+0+','+height+')');

var g1 = svg.append("g")
    .attr('transform','translate('+0+','+250+')');
////////////////////////////////////////////////////////////////////////////
    width1 = +g1.attr("width"),
    height1 = +g1.attr("height");

var size = data.nodes.length;

var visited = [];

for(i =0 ;i<data.nodes.length;i++){
    visited[i] = false;
}

var simulation = d3.forceSimulation()
    .force("charge", d3.forceManyBody().strength(-500))
    .force("link", d3.forceLink().id(function(d) { return d.id; }).distance(100))
    .force("x", d3.forceX(mywidth/2 ))
    .force("y", d3.forceY(height1 ))
   // .alphaTarget(1)
    .on("tick", ticked);

var link = g1.selectAll(".link-huffman"),
    node = g1.selectAll(".node-huffman");

simulation.nodes(data.nodes);
simulation.force("link").links(data.links);


link = link
    .data(data.links)
    .enter().append("line")
    .attr("id",function (d,i){return "link"+i})
    .attr("class", function (d,i){return "link-huffman"});


node = node
    .data(data.nodes)
    .enter().append('g')

node
    .attr("class","node-huffman")
    .append("circle").attr("r", 15)
    .attr("id", function (d,i){return "circle" + i})

node.append("text")
    .attr("dx", "-5")
    .attr("dy", ".35em")
    .style("font-size","15px")
    .text(function(d) { return d.id });


function ticked(e) {
   // let k = 1 * this.alpha();
    link//.each(function(d) { d.source.y -= k, d.target.y += k; })
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; })

    node.attr("transform", function(d) {  return "translate(" + d.x + "," + d.y + ")"; })
}


function visitElement(i) {
    d3.select("#circle"+i).transition().duration(400).style("fill","#22ff1a")
}

function visitElementdij(i) {
    d3.select("#circle"+i).transition().duration(400).style("fill","#ff372a")
}

function visitLink(i) {
    var a = d3.select("#link"+i)
        .attr("x1", function(d) { "x "+d.source.x; return d.source.x; })
        .attr("y1", function(d) { "y "+d.source.y; return d.source.y; })

    a.transition().duration(700)
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; }).style("stroke-width","5px").style("stroke","#7170ff");

}


function restart1() {
    link = link
        .data(data.links)
    link.exit().remove();

    link = link
        .enter().append("line").merge(link);
    link.attr("id",function (d,i){return "link"+i})
        .attr("class", function (d,i){return "link-huffman"}).style("stroke-width","3px").style("stroke","#C2C2C2");


    node = node
        .data(data.nodes)
    // Apply the general update pattern to the nodes.
    node.exit().remove();
    node = node.enter().append('g').merge(node);
    node
        .attr("class","node-huffman")
        .append("circle").attr("r", 15)
        .attr("id", function (d,i){return "circle" + i}).style("fill","#ffffff")

    node.append("text")
        .attr("dx", "-5")
        .attr("dy", ".35em")
        .style("font-size","15px")
        .text(function(d) { return d.id })
    // Apply the general update pattern to the links.

    // Update and restart the simulation.
    simulation.nodes(data.nodes);
    simulation.force("link").links(data.links);
    simulation.restart();
}


function restart() {
    var link = g1.selectAll(".link-huffman"),
        node = g1.selectAll(".node-huffman circle");
    link.style("stroke-width","3px").style("stroke","#C2C2C2");
    node
      .style("fill","#ffffff")
}
function *dfs(root){
    visited = [];


    for (var j = 0; j < data.nodes.length; j++) {
        visited[j] = false;
    }
    var stack=[];
    stack.push({f:null,n:root});
    while(stack.length!==0){
        var element = stack.pop();
        visitElement(element.n);
        for (var j = 0; j < data.links.length; j++) {
            if(data.links[j].source.index === element.n && visited[data.links[j].target.index] === false){
                stack.push({f:element.n,n:data.links[j].target.index});
            }
        }
        var link=-1;
        for (var a =0 ;a<data.links.length;a++){
            if(data.links[a].source.index === element.f && data.links[a].target.index === element.n  )
                link = a;
        }

        console.log("stack"+stack);
        console.log(link)
        if (link !==-1) {
            if (((visited[data.links[link].target.index] === true && visited[data.links[link].source.index] === true)))
            {
            }
            else
            {
                visitLink(link);
            }
        }
        visited[element.n] = true;
        yield "";
    }
}
////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////


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


function swap(input, index_A, index_B) {
    var temp = input[index_A];
    input[index_A] = input[index_B];
    input[index_B] = temp;
}


var seq = dfs(data.nodes[0].id);
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
   // restart();
    clearInterval(myTimer);
//    myArray = tempArray.map(a=>a);
   // console.log('t'+tempArray);
   // console.log('m'+myArray);
    restart();
    seq = dfs(data.nodes[0].id);
    //var g = svg.append("g")

}
function nextAlgorithm()
{
    console.log(seq.next())
}
