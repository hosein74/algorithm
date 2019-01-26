var express = require('express');
var router = express.Router();
var multer  = require('multer');
var path = require('path');
var files = multer({ dest: 'files/' });
var fs = require('fs');
var readline = require('readline')
var analyzeAlgorithm = require('../functions/algorithm')



/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('pages/index', { title : 'heello' });
});

router.get('/algorithm/:name', function(req, res, next) {
    res.render('pages/index', { algorithmName : req.params.name });
});


router.post('/algorithm/:name/:operations',files.single('file'), function(req, res, next) {
  if (req.file)
  {
      var flag = 0;
      var matrix=[],mat=[];
      var array=[];
      var line=[];
      var lineReader = readline.createInterface({
          input: fs.createReadStream('files/'+req.file.filename)
      });
      lineReader.on('line', function (line) {
          console.log('Line from file:', line);
          let l = line.split(",").map(String);

          array.push(l)

          if (line === '*') {
              matrix.push(mat);
              mat=[];
          }
          else
          {
              mat.push(l)
          }
          console.log(flag)
      });
      lineReader.on('error', function (err) {
          console.log('Line from file err:', err);
          res.status(400).end();
      });
      lineReader.on('close', function (line) {
          console.log(line);
          console.log('done reading file.');
          console.log(array);
          console.log(matrix);
          fs.unlink(path.join(__dirname + '/../files/'+req.file.filename),err=>
          {
            console.log(err)
          })
          if ( req.params.operations === 'animation') {
              res.render('pages/index', {algorithmName: req.params.name, animation: true , data : array,matrix:matrix});
          }else if (req.params.operations === 'analyze')
          {
              var times = analyzeAlgorithm(req.params.name,array,matrix);
              //bubbleSort(array)
              res.render('pages/index', {algorithmName: req.params.name, analyze: true, data : array , times :times,matrix : matrix});
          }
      });
  }
  else
  {
    var defulatData = [[ 9, 6, 20, -9, -6, 8, 1, 32 ],[1,8,9,6,8,-8,-3],[1,1,1,1,1,1,1],
        [ 0, 8, 9, 50, 5, 8, 4, 3 ]]
      var defulatMatrix = [[
                            [ 9, 6 ],
                            [1,8],
                            [1,1]
                           ],
                           [
                            [ 0, 8,9,4],
                            [5,9,5,9]
                           ],
          [
              [ 9, 6,8 ],
              [1,8,6],
              [1,1,0]
          ],
          [
              [ 0, 8, 9],
              [5,9,6],
              [8,5,9],
              [8,7,2],
              [8,7,2],
          ]
                            ];
      if ( req.params.operations === 'animation') {
          res.render('pages/index', {algorithmName: req.params.name, animation: true , data : null});
      }else if (req.params.operations === 'analyze')
      {
          //var time = bubbleSort([1,8,9,6,8,9, 6, 20, -9, -6, 8,9, 6, 20, -9, -6, 8,9, 6, 20, -9, -6, 8,9, 6, 20, -9, -6, 8,9, 6, 20, -9, -6, 8,9, 6, 20, -9, -6, 8,9, 6, 20, -9, -6, 8,9, 6, 20, -9, -6, 8,9, 6, 20, -9, -6, 8,9, 6, 20, -9, -6, 8,9, 6, 20, -9, -6, 8,9, 6, 20, -9, -6, 8,9, 6, 20, -9, -6, 8,9, 6, 20, -9, -6, 8,9, 6, 20, -9, -6, 8,9, 6, 20, -9, -6, 8,9, 6, 20, -9, -6, 8,9, 6, 20, -9, -6, 8,9, 6, 20, -9, -6, 8,9, 6, 20, -9, -6, 8,9, 6, 20, -9, -6, 8,9, 6, 20, -9, -6, 8,9, 6, 20, -9, -6, 8,9, 6, 20, -9, -6, 8,9, 6, 20, -9, -6, 8,9, 6, 20, -9, -6, 8,9, 6, 20, -9, -6, 8,9, 6, 20, -9, -6, 8,9, 6, 20, -9, -6, 8,9, 6, 20, -9, -6, 8,9, 6, 20, -9, -6, 8,9, 6, 20, -9, -6, 8,-8,-3,5]);
          var times = analyzeAlgorithm(req.params.name,null,null);
          //let def = defulatData.map(d=>{d.push(d.length); return d})

          res.render('pages/index', {algorithmName: req.params.name, analyze: true, data : times.data , times :times.times,matrix:defulatMatrix});
      }
  }
    //
    // fs.readFile('files/'+req.file.filename, 'utf8', function(err, contents) {
    //     var array = JSON.parse("[" + contents + "]");
    // });

});



module.exports = router;
