


try {
    console.log(myArray);
}
catch (e) {
    myArray = [2469,455552];
}
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
/******array calculate******/
//consol e.log(myArray.length)
// if (myArray.length/2 !== Math.floor(myArray.length/2) )
// {
//     myArray.push(max)
// }

var TempMatrix =  myArray.map(a=>a);
var AN = myArray[0] ;
var BN = myArray[1] ;
var AA = myArray[0].toString().split("").map(Number);
var BA = myArray[1].toString().split("").map(Number);
var AB = myArray[0] * myArray[1];
var ABL = (AB.toString()).length;
var AL = (myArray[0].toString()).length
var BL = (myArray[1].toString()).length

var maxLenght = (4+BL);
var length = ABL+1;
var element = d3.select("#algorithm-box").node();
var height = 50;
var myheight = height*maxLenght;
var width = element.getBoundingClientRect().width/2;
var mywidth = element.getBoundingClientRect().width;
var fontSize = 10 ;


console.log(AB)
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
    .append("g").attr('transform','translate('+((mywidth-width)/2)+','+50+')');
////////////////////////////////////////////////////////////////////////////

function createNumber(number,h) {
    let svg = svg1.append("g").attr('transform','translate('+(0)+','+y(h)+')').attr('id','Line'+h);
    let l = number.toString().length;
    // for (j=l,i=ABL-l;i<ABL;i++,j--)
    // {
         var elem = svg.selectAll('g').data(number.toString()).enter().append('g').attr('transform',function (d,i,n) {
             return  'translate('+x(ABL - (n.length- (i)))+','+0+')'
         });
    elem.append('circle').attr('transform','translate('+3+','+-3+')').attr('r',x(1)/3)
        .attr('fill','#FFF').attr('id',function (d,i) {return 'rect'+h+'-'+i}).attr('class','rect');

         return elem.append('text').text(function (d,i) {
             return d;
         }).attr('id',function (d,i,n) {
             return  'num'+h+'-'+i
         }).style('fill',mainColor).style('font-weight','bold').attr('class','num'+h)

    //}
}


var A = createNumber(AN,1);
var B =createNumber(BN,2);

A.style('fill',selectColor);
B.style('fill',selectColor);
var ABemptyString = '';
var AemptyString = '';
for (var i=0;i<ABL;i++)
{
    ABemptyString += ' ';
}
for (var i=0;i<AL+1;i++)
{
    AemptyString += ' ';
}
var O =createNumber(AemptyString,0);
O.style('fill',selectorder);

for (var i=3;i<BL+3;i++)
{
    createNumber(ABemptyString,i);
}

svg1.append('line').attr('x1',function () {return x(0)})
    .attr('y1',function () {return y(2.5)})
    .attr('y2',function () {return y(2.5)})
    .attr('stroke',function () {return swapColor})
    .attr('stroke-width',function () {return '5'}).transition()
    .duration(300).attr('x2',function () {return x(ABL)})




function setHelp(text,color)
{
    $('#helpColor').append("<div style='margin-top: 5px ;'><p style=\"display: inline-block; \">"+text+"</p><div style=\"margin-left:10px; margin-bottom:"+(-mywidth/150)+"px;background-color: "+color+";width: "+mywidth/50+"px;height: "+mywidth/50+"px;border-radius: 50%; display: inline-block\"></div></div>\n")
}

setHelp('اعدا محاسباتی',mainColor);
setHelp('اعداد ',selectColor);
setHelp('اتنخاب بری عمل ضرب',swapColor);
setHelp('حاصل نهایی',finalorder);


function emptyLine(i) {
  d3.selectAll('.num'+i).text(' ');
}

function addText(text,i,j)
{

    let t = d3.select('#num'+i+'-'+j);
    t.text(text);
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

function selectNode(h,i,color) {
    return d3.select('#rect'+h+'-'+i)
        .transition()
        .duration(200)
        .style('fill',color);
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



var plusArray = [];
function * SimpleMultiple() {
    for (var i =BL-1;i>=0;i--)
    {
        plusArray =[];
        emptyLine(0);
        yield ''
        for (var j =AL-1;j>=0;j--)
        {
            selectNode(2,i,swapColor);
            let m = BA[i] * AA[j];
            if (m>9)
            {
                plusArray[j-1] = Math.floor(m/10);
                if (j === 0)
                {
                    addText(Math.floor(m/10),2+BL-i,ABL-AL-1-(BL-i-1));
                }
                m = m%10;
                addText(plusArray[j-1],0,j);

            }
            selectNode(1,j,swapColor);
            addText(m+((plusArray[j] !== undefined) ?plusArray[j]:0),2+BL-i,ABL-AL+j-(BL-i-1));
            console.log(BA[i] +'*'+ AA[j] +'+'+((plusArray[j] !== undefined) ?plusArray[j]:'0'))
            yield '';
            selectNode(1,j,'#fff');
        }
        selectNode(2,i,'#fff');
    }

    svg1.append('line').attr('x1',function () {return x(0)}).attr('id','fLine')
        .attr('y1',function () {return y(2.5+BL)})
        .attr('y2',function () {return y(2.5+BL)})
        .attr('stroke',function () {return swapColor})
        .attr('stroke-width',function () {return '5'}).transition()
        .duration(300).attr('x2',function () {return x(ABL)})



    var e =createNumber(AB,3+BL)
    e.style('fill',finalorder);

}
 var seq =  SimpleMultiple();
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


    seq = SimpleMultiple();
    d3.selectAll('.rect').style('fill','#fff');
    emptyLine(0);
    for (i=3;i<4+BL;i++)
    {
        emptyLine(i);
    }
    d3.select('#fLine').remove();
}
function nextAlgorithm()
{
    console.log(seq.next())
}
