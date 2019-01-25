


var mainColor = d3.rgb("#aa8eff");
var mainColor1 = d3.rgb("#a83dff");
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
console.log(myMatrix);
/******array calculate******/
//console.log(myArray.length)
// if (myArray.length/2 !== Math.floor(myArray.length/2) )
// {
//     myArray.push(max)
// }
    
    
    
var TempMatrix =  myMatrix.map(a=>a);
var maxLenght = Math.max(...[myMatrix[0].length,myMatrix[1].length]);
var minLenght = Math.min(...[myMatrix[0].length,myMatrix[1].length]);
var length = myMatrix[0][0].length + myMatrix[1][0].length +  myMatrix[0][0].length + 8;
var element = d3.select("#algorithm-box").node();
var height = 100;
var myheight = height*maxLenght;
var width = element.getBoundingClientRect().width/2;
var mywidth = element.getBoundingClientRect().width;
var barWidth = width/length;
var fontSize = 10 ;
var margin1=0;
var margin2=0;
if (myMatrix[0].length > myMatrix[1].length)
{
    margin2 = Math.ceil(maxLenght-minLenght)*100/2;
}else
{
    margin1 =  Math.ceil(maxLenght-minLenght)*100/2;
}

console.log(margin2);
console.log(margin1);

var matrix3 = []
for (var i=0;i<myMatrix[0].length;i++)
{
    var culumn =[];
    for (var j=0;j<myMatrix[1][0].length;j++)
    {
        culumn.push(' ');
    }
    matrix3.push(culumn);
}

var x = d3.scaleLinear()
    .domain([0,length])
    .range([0, width]);
var y = d3.scaleLinear()
    .domain([0,maxLenght])
    .range([0, myheight]);
var svg1 = d3.select("#algorithm-box").append("svg")
    .attr("width",'100%' )
    .attr("height", myheight )
    .style('display','block')
    .style('margin','auto')
    .append("g").attr('transform','translate('+((mywidth-width)/2)+','+0+')');
////////////////////////////////////////////////////////////////////////////


var svg = svg1.append("g").attr('transform','translate('+(0)+','+80+')');
var g2 = svg1.append("g").attr('transform','translate('+(0)+','+50+')');

g2.append('text').attr('transform','translate('+x(myMatrix[0][0].length +myMatrix[1][0].length +7)+','+0+')').text('').attr('id','text').attr('fill',mainColor).style('font-weight','bold');

////////////////////////////////mat1///////////////////////////
var mat1 = svg.append("g").attr('transform','translate(0,'+margin1+')')
mat1.append('line').attr('x1',function () {return x(0)})
    .attr('y1',function () {return y(0)})
    .attr('x2',function () {return x(0)})
    .attr('y2',function () {return y(myMatrix[0].length-1)})
    .attr('stroke',function () {return selectColor})
    .attr('stroke-width',function () {return '5'})

mat1.append('line').attr('x1',function () {return x(myMatrix[0][0].length +1)})
    .attr('y1',function () {return y(0)})
    .attr('x2',function () {return x(myMatrix[0][0].length +1)})
    .attr('y2',function () {return y(myMatrix[0].length-1)})
    .attr('stroke',function () {return selectColor})
    .attr('stroke-width',function () {return '5'})
var culumns1 = mat1
    .selectAll("g")
    .data(myMatrix[0])
    .enter().append("g").attr('transform',function (d,i,array) {
        return 'translate('+ (x(1)) +','+y(i)+')';
    }).attr('class','column1').attr('id',function (d,i) {
        return 'column1-'+i
    });
  var rows1 =  culumns1.selectAll("g")
      .data(function (d,i) { return d})
      .enter().append("g").attr('transform',function (d,i,array) {
          return 'translate('+ (x(i)) +','+0+')';
      }).attr('class','row1').attr('id',function (d,i) {
          return 'row1-'+i
      });
rows1.append('circle').attr('transform','translate('+3+','+-3+')').attr('r',x(1)/2.5)
    .attr('fill',swapColor).attr('id',function (d,i) {return 'rect1-'+i});
rows1.append('text').text(function (d,i) { return d;}).attr('fill',mainColor1).style('font-weight','bold');
////////////////////////////////mat2///////////////////////////
var mat2 = svg.append("g").attr('transform','translate(0,'+margin2+')')
mat2.append('line').attr('x1',function () {return x(myMatrix[0][0].length +3)})
    .attr('y1',function () {return y(0)})
    .attr('x2',function () {return x(myMatrix[0][0].length +3)})
    .attr('y2',function () {return y(myMatrix[1].length-1)})
    .attr('stroke',function () {return selectColor})
    .attr('stroke-width',function () {return '5'})

mat2.append('line').attr('x1',function () {return x(myMatrix[0][0].length +myMatrix[1][0].length +4) })
    .attr('y1',function () {return y(0)})
    .attr('x2',function () {return x(myMatrix[0][0].length +myMatrix[1][0].length +4)})
    .attr('y2',function () {return y(myMatrix[1].length-1)})
    .attr('stroke',function () {return selectColor})
    .attr('stroke-width',function () {return '5'})
var culumns2 = mat2
    .selectAll("g")
    .data(myMatrix[1])
    .enter().append("g").attr('transform',function (d,i,array) {
        return 'translate('+ (x(myMatrix[0][0].length +4)) +','+y(i)+')';
    }).attr('class','column2').attr('id',function (d,i) {
        return 'column2-'+i
    });
var rows2 =  culumns2.selectAll("g")
    .data(function (d,i) { return d})
    .enter().append("g").attr('transform',function (d,i,array) {
        return 'translate('+ (x(i)) +','+0+')';
    }).attr('class','row2').attr('id',function (d,i) {
        return 'row2-'+i
    });
rows2.append('circle').attr('transform','translate('+3+','+-3+')').attr('r',x(1)/2.5)
    .attr('fill',swapColor).attr('id',function (d,i) {return 'rect2-'+i});
rows2.append('text').text(function (d,i) { return d;}).attr('fill',mainColor1).style('font-weight','bold');
///////////////////////////////mat3///////////////////////////////////////
var mat3 = svg.append("g")
mat3.append('line').attr('x1',function () {return x(myMatrix[0][0].length +myMatrix[1][0].length +6)})
    .attr('y1',function () {return y(0)})
    .attr('x2',function () {return x(myMatrix[0][0].length +myMatrix[1][0].length +6)})
    .attr('y2',function () {return y(myMatrix[0].length-1)})
    .attr('stroke',function () {return selectColor})
    .attr('stroke-width',function () {return '5'})

mat3.append('line').attr('x1',function () {return x(myMatrix[0][0].length +myMatrix[1][0].length+ myMatrix[1][0].length +7) })
    .attr('y1',function () {return y(0)})
    .attr('x2',function () {return x(myMatrix[0][0].length +myMatrix[1][0].length + myMatrix[1][0].length + 7)})
    .attr('y2',function () {return y(myMatrix[0].length-1)})
    .attr('stroke',function () {return selectColor})
    .attr('stroke-width',function () {return '5'})
var culumns3 = mat3
    .selectAll("g")
    .data(matrix3)
    .enter().append("g").attr('transform',function (d,i,array) {
        return 'translate('+ (x(myMatrix[0][0].length +myMatrix[1][0].length +7)) +','+y(i)+')';
    }).attr('class','column3').attr('id',function (d,i) {
        return 'column3-'+i
    });
var rows3 =  culumns3.selectAll("g")
    .data(function (d,i) { return d})
    .enter().append("g").attr('transform',function (d,i,array) {
        return 'translate('+ (x(i)) +','+0+')';
    }).attr('class','row3').attr('id',function (d,i) {
        return 'row3-'+i
    });
rows3.append('circle').attr('transform','translate('+3+','+-3+')').attr('r',x(1)/2.5)
    .attr('fill',swapColor).attr('id',function (d,i) {return 'rect3-'+i});
rows3.append('text').text(function (d,i) { return d;}).attr('fill',mainColor1).style('font-weight','bold');



function *multiply(a, b) {
    var stack=[];
    var aNumRows = a.length, aNumCols = a[0].length,
        bNumRows = b.length, bNumCols = b[0].length,
        m = new Array(aNumRows);  // initialize array of rows
    for (var r = 0; r < aNumRows; ++r) {
        m[r] = new Array(bNumCols); // initialize the current row
        selectColumn(1,r,finalorder);
        for (var c = 0; c < bNumCols; ++c) {
            m[r][c] = 0;             // initialize the current cell
            emptyText();
            selectRow(2,c,finalorder);
            yield '';
            for (var i = 0; i < aNumCols; ++i) {
                m[r][c] += a[r][i] * b[i][c];
                console.log('m[r][c] += a[r][i] * b[i][c]');
                console.log(m[r][c] ,' ', a[r][i] ,' * ', b[i][c]);
                //stack.push(a[r][i] +' * '+ b[i][c]);
                addText('('+a[r][i] +' * '+ b[i][c]+')');
                select(1,r,i,selected);
                select(2,i,c,selected);
                yield '';
                select(1,r,i,finalorder);
                select(2,i,c,finalorder);
            }
            setNode(3,r,c,m[r][c]);
            selectRow(2,c,swapColor);
        }
        selectColumn(1,r,swapColor);
    }
    emptyText();
    return m;
}
function emptyText() {
  d3.select('#text').text('');
}

function addText(text)
{

    let t = d3.select('#text');
    console.log(t)
    var temp = t.text();
    if (temp==='')
    t.text(text);
    else
    t.text(temp+' + '+text);

}

function select(mat,i,j,color)
{
    console.log('#column'+mat+'-'+i+' #row'+mat+'-'+j+' circle');
    return d3.select('#column'+mat+'-'+i+' #row'+mat+'-'+j+' circle')
        .transition()
        .duration(200)
        .style("fill", color );
}
function selectColumn (mat,i,color)
{
    console.log('#column'+mat+'-'+i+' circle');
    return d3.selectAll('#column'+mat+'-'+i+' circle')
        .transition()
        .duration(200)
        .style("fill", color );
}
function selectRow(mat,j,color)
{
    console.log('#row'+mat+'-'+j+' circle');
    return d3.selectAll('#row'+mat+'-'+j+' circle')
        .transition()
        .duration(200)
        .style("fill", color );
}

function setNode(mat,i,j,text) {
    return d3.select('#column'+mat+'-'+i+' #row'+mat+'-'+j+' text')
        .transition()
        .duration(200)
        .text(text);
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



seq = multiply(myMatrix[0],myMatrix[1]);
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


    seq = multiply(myMatrix[0],myMatrix[1]);
    mat3.selectAll('text').text('');
    emptyText();
    mat2.selectAll('g circle').style('fill',swapColor);
    mat1.selectAll('g circle').style('fill',swapColor)

}
function nextAlgorithm()
{
    console.log(seq.next())
}
