 const bubbleSort =function (D) {
    var count = 0;
    var d = process.hrtime()
    let N = D.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 1; i < N; i++) {
            count ++;
            if (D[i - 1] > D[i]) {
                count ++;
                const temp = D[i - 1];
                D[i - 1] = D[i];
                D[i] = temp;
                swapped = true;
            }
        }
        count ++;
        N--;
    } while (swapped);
    return count;
    return (process.hrtime()[1] - d[1]);
}

 function insertionSort(D){
 var count = 0;
 var d = process.hrtime()
     var N = D.length;
     for (var i = 1; i < N; i++) {
         count++;
         var key = D[i];
         var j;
         for (j = i - 1; (j >= 0) && (D[j] > key); j--) {
             count++;
             D[j + 1] = D[j];
         }
         D[j + 1] = key;
     }
     return count;
     return (process.hrtime()[1] - d[1]);
 }

 function selectionSort(D) {
     var count = 0;
     var d = process.hrtime()
     var min;
     for (var i = 0; i < D.length - 1; i++) {
         count++;
         var minJ = i;
         var min = i;
         for (var j = i + 1; j < D.length; j++) {
             count++;
             if (D[j] < D[minJ]) {
                 count++;
                 minJ = j;
             }
         }
         if (minJ !== i) {
             count++;
             var temp = D[i];
             D[i] = D[minJ];
             D[minJ] = temp;
         }
     }
     return count;
     return (process.hrtime()[1] - d[1]);
 }


 log = console.log.bind(console);

 const analyzeAlgorithm1 = function (type,data,matrix) {
     var times = [];
     var t;
     for (let i = 0; i < data.length; i++) {
         switch (type) {
             case 'bubble-sort':

                 t = bubbleSort(data[i].map(d => d))
                 console.log(t)
                 times.push(t);
                 break;
             case 'selection-sort':
                 t = selectionSort(data[i].map(d => d))
                 console.log(t)
                 times.push(t);
                 break;
             case 'insertion-sort':
                 t = insertionSort(data[i].map(d => d))
                 console.log(t)
                 times.push(t);
                 break;
             case 'merge-sort':
                 var mergesortCounter = 0;
                 var mergeSortArray = data[i].map(d => d);
             function mergeSort(arr) {

                 if (arr.length === 1) {
                     // return once we hit an array with a single item
                     return arr
                 }
                 const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
                 const left = arr.slice(0, middle) // items on the left side
                 const right = arr.slice(middle) // items on the right side
                 mergesortCounter++;
                 return merge(
                     mergeSort(left),
                     mergeSort(right)
                 )
             }
             function merge(left, right) {
                 let result = []
                 let indexLeft = 0
                 let indexRight = 0
                 while (indexLeft < left.length && indexRight < right.length) {
                     mergesortCounter++;
                     if (left[indexLeft] < right[indexRight]) {
                         //  select(left[indexLeft].index,selectColor);
                         result.push(left[indexLeft]);
                         indexLeft++
                     } else {
                         // select(right[indexRight].index,selectColor);
                         result.push(right[indexRight]);
                         indexRight++
                     }
                 }
                 while (indexLeft < left.length) {
                     mergesortCounter++;
                     result.push(left[indexLeft]);
                     indexLeft++
                 }
                 while (indexRight < right.length) {
                     mergesortCounter++;
                     result.push(right[indexRight]);
                     indexRight++
                 }
                 return result;
             }
                 var d = process.hrtime()
                 t = mergeSort(data[i].map(d => d));
                 t = mergesortCounter;
                 times.push(t);
                 break;
             case 'quick-sort':
                 var quicksortCounter = 0;
                 var quickSortArray = data[i].map(d => d);
             function quickSort(arr, left, right) {
                 var len = arr.length,
                     pivot,
                     partitionIndex;

                 if (left < right) {
                     quicksortCounter++;
                     pivot = right;
                     partitionIndex = partition(arr, pivot, left, right);

                     //sort left and right
                     quickSort(arr, left, partitionIndex - 1);
                     quickSort(arr, partitionIndex + 1, right);
                 }
                 return arr;
             }
             function partition(arr, pivot, left, right) {
                 var pivotValue = arr[pivot],
                     partitionIndex = left;

                 for (var i = left; i < right; i++) {
                     quicksortCounter++;
                     if (arr[i] < pivotValue) {
                         quicksortCounter++;
                         swap(arr, i, partitionIndex);
                         partitionIndex++;
                     }
                 }
                 quicksortCounter++;
                 swap(arr, right, partitionIndex);
                 return partitionIndex;
             }
             function swap(arr, i, j) {
                 var temp = arr[i];
                 arr[i] = arr[j];
                 arr[j] = temp;
             }
                 var d = process.hrtime()
                 t = quickSort(data[i].map(d => d), 0, quickSortArray.length);
                 t = quicksortCounter;
                 times.push(t);
                 break;
             case 'heap-sort':
                 var heapsortCounter = 0;
                 var heapSortArray = data[i].map(d => d);
                 var array_length = data.length
             function heap_root(input, i) {
                 var left = 2 * i + 1;
                 var right = 2 * i + 2;
                 var max = i;

                 if (left < array_length && input[left] > input[max]) {
                     max = left;
                     heapsortCounter++;
                 }

                 if (right < array_length && input[right] > input[max]) {
                     max = right;
                     heapsortCounter++;
                 }


                 if (max != i) {
                     heapsortCounter++;
                     swap(input, i, max);
                     heap_root(input, max);
                 }

             }
             function heapSort(input) {
                 array_length = input.length;

                 for (var i = Math.floor(input.length / 2); i >= 0; i -= 1) {
                     heapsortCounter++;
                     heap_root(input, i);
                 }

                 for (i = input.length - 1; i > 0; i--) {
                     heapsortCounter++;
                     swap(input, 0, i);
                     array_length--;
                     heap_root(input, 0);
                 }
             }
             function swap(input, index_A, index_B) {
                 var temp = input[index_A];
                 input[index_A] = input[index_B];
                 input[index_B] = temp;
             }
                 var d = process.hrtime();
                 t = heapSort(heapSortArray);
                 t = heapsortCounter;
                 times.push(t);
                 break;
         }
     }
     return times;

 }
 const analyzeAlgorithm = function (type,data,matrix) {
     var times = [];
     var t;
         switch (type) {
             case 'bubble-sort':
                 let bdata = [[5,9,-8,6,3,8,7,4,1,1,10],[5,9,6,3,14,4,0,3,4,9,7],[8,2,4,5,1,0,-2,-3,5]];
                 if (data)
                     bdata = data;
                 for (let i = 0; i < bdata.length; i++) {
                     t = bubbleSort(bdata[i].map(d => d))
                     console.log(t)
                     times.push(t);
                 }
                 log(times);
                 return {data:bdata,times:times};
                 break;
             case 'selection-sort':
                 let sdata = [[5,9,-8,6,3,8,7,4,1,1,10],[5,9,6,3,14,4,0,3,4,9,7],[8,2,4,5,1,0,-2,-3,5]];
                 if (data)
                     sdata = data;
                 for (let i = 0; i < sdata.length; i++) {
                     t = selectionSort(sdata[i].map(d => d))
                     console.log(t)
                     times.push(t);
                 }
                 return {data:sdata,times:times};
                 break;
             case 'insertion-sort':
                 let idata = [[5,9,-8,6,3,8,7,4,1,1,10],[5,9,6,3,14,4,0,3,4,9,7],[8,2,4,5,1,0,-2,-3,5]];
                 if (data)
                     idata = data;
                 for (let i = 0; i < idata.length; i++) {
                     t = insertionSort(idata[i].map(d => d))
                     console.log(t)
                     times.push(t);
                 }
                 return {data:idata,times:times};

                 break;
             case 'merge-sort':
                 let mdata = [[5,9,-8,6,3,8,7,4,1,1,10],[5,9,6,3,14,4,0,3,4,9,7],[8,2,4,5,1,0,-2,-3,5]];
                 if (data)
                     mdata = data;
             function mergeSort(arr) {

                 if (arr.length === 1) {
                     // return once we hit an array with a single item
                     return arr
                 }
                 const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
                 const left = arr.slice(0, middle) // items on the left side
                 const right = arr.slice(middle) // items on the right side
                 mergesortCounter++;
                 return merge(
                     mergeSort(left),
                     mergeSort(right)
                 )
             }

             function merge(left, right) {
                 let result = []
                 let indexLeft = 0
                 let indexRight = 0
                 while (indexLeft < left.length && indexRight < right.length) {
                     mergesortCounter++;
                     if (left[indexLeft] < right[indexRight]) {
                         //  select(left[indexLeft].index,selectColor);
                         result.push(left[indexLeft]);
                         indexLeft++
                     } else {
                         // select(right[indexRight].index,selectColor);
                         result.push(right[indexRight]);
                         indexRight++
                     }
                 }
                 while (indexLeft < left.length) {
                     mergesortCounter++;
                     result.push(left[indexLeft]);
                     indexLeft++
                 }
                 while (indexRight < right.length) {
                     mergesortCounter++;
                     result.push(right[indexRight]);
                     indexRight++
                 }
                 return result;
             }
                 for (let i = 0; i < mdata.length; i++) {
                     var mergesortCounter = 0;
                     var mergeSortArray = mdata[i].map(d => d);



                     var d = process.hrtime()
                     t = mergeSort(mdata[i].map(d => d));
                     t = mergesortCounter;
                     times.push(t);
                 }
                 return {data:mdata,times:times};
                 break;
             case 'quick-sort':
                 let qdata = [[5,9,-8,6,3,8,7,4,1,1,10],[5,9,6,3,14,4,0,3,4,9,7],[8,2,4,5,1,0,-2,-3,5]];
                 if (data)
                     qdata = data;
             function quickSort(arr, left, right) {
                 var len = arr.length,
                     pivot,
                     partitionIndex;

                 if (left < right) {
                     quicksortCounter++;
                     pivot = right;
                     partitionIndex = partition(arr, pivot, left, right);

                     //sort left and right
                     quickSort(arr, left, partitionIndex - 1);
                     quickSort(arr, partitionIndex + 1, right);
                 }
                 return arr;
             }

             function partition(arr, pivot, left, right) {
                 var pivotValue = arr[pivot],
                     partitionIndex = left;

                 for (var i = left; i < right; i++) {
                     quicksortCounter++;
                     if (arr[i] < pivotValue) {
                         quicksortCounter++;
                         swap(arr, i, partitionIndex);
                         partitionIndex++;
                     }
                 }
                 quicksortCounter++;
                 swap(arr, right, partitionIndex);
                 return partitionIndex;
             }

             function swap(arr, i, j) {
                 var temp = arr[i];
                 arr[i] = arr[j];
                 arr[j] = temp;
             }
                 for (let i = 0; i < qdata.length; i++) {
                     var quicksortCounter = 0;
                     var quickSortArray = qdata[i].map(d => d);



                     var d = process.hrtime()
                     t = quickSort(qdata[i].map(d => d), 0, quickSortArray.length);
                     t = quicksortCounter;
                     times.push(t);
                 }
                 return {data:qdata,times:times};
                 break;
             case 'heap-sort':
                 let hdata = [[5,9,-8,6,3,8,7,4,1,1,10],[5,9,6,3,14,4,0,3,4,9,7],[8,2,4,5,1,0,-2,-3,5]];
                 if (data)
                     hdata = data;
             function heap_root(input, i) {
                 var left = 2 * i + 1;
                 var right = 2 * i + 2;
                 var max = i;

                 if (left < array_length && input[left] > input[max]) {
                     max = left;
                     heapsortCounter++;
                 }

                 if (right < array_length && input[right] > input[max]) {
                     max = right;
                     heapsortCounter++;
                 }


                 if (max != i) {
                     heapsortCounter++;
                     swap(input, i, max);
                     heap_root(input, max);
                 }

             }

             function heapSort(input) {
                 array_length = input.length;

                 for (var i = Math.floor(input.length / 2); i >= 0; i -= 1) {
                     heapsortCounter++;
                     heap_root(input, i);
                 }

                 for (i = input.length - 1; i > 0; i--) {
                     heapsortCounter++;
                     swap(input, 0, i);
                     array_length--;
                     heap_root(input, 0);
                 }
             }

             function swap(input, index_A, index_B) {
                 var temp = input[index_A];
                 input[index_A] = input[index_B];
                 input[index_B] = temp;
             }
                 for (let i = 0; i < hdata.length; i++) {
                     var heapsortCounter = 0;
                     var heapSortArray = hdata[i].map(d => d);
                     var array_length = hdata.length



                     var d = process.hrtime();
                     t = heapSort(heapSortArray);
                     t = heapsortCounter;
                     times.push(t);
                 }
                 return {data:hdata,times:times};
                 break;
             case 'simple-matrix-multiple':
                    let mmdata = [[
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
                            [1,1,0],
                            [1,1,5]
                        ],
                        [
                            [ 0, 8, 9],
                            [5,9,6,1],
                            [8,5,9,1]

                        ]
                    ];

                    if (matrix)
                        mmdata = matrix;
                    var stackmm = [];
                    log('////////////////////////////////////////////')
                    log(mmdata)
                    log('/////////////////////////////////////')
                    log(matrix)
                    log('/////////////////////////////////////')
             function multiply1(a, b) {
                 console.log(a,b)
                 stackmm.push([[a.length,a[0].length],[b.length,b[0].length]])
                 var aNumRows = a.length, aNumCols = a[0].length,
                     bNumRows = b.length, bNumCols = b[0].length,
                     m = new Array(aNumRows);  // initialize array of rows
                 for (var r = 0; r < aNumRows; ++r) {
                     simplematrixmultipleCounter++;
                     m[r] = new Array(bNumCols); // initialize the current row
                     for (var c = 0; c < bNumCols; ++c) {
                         m[r][c] = 0;             // initialize the current cell
                         simplematrixmultipleCounter++;
                         for (var i = 0; i < aNumCols; ++i) {
                             m[r][c] += a[r][i] * b[i][c];
                             simplematrixmultipleCounter++;
                         }
                     }
                 }
                 return simplematrixmultipleCounter;
             }
                    for (let i = 0; i < mmdata.length-1; i=i+2) {
                        var simplematrixmultipleCounter = 0;
                        var simplematrixmultipleArray = mmdata[i].map(d => d);
                        var d = process.hrtime();
                        t = multiply1(mmdata[i], mmdata[i+1]);
                        t = simplematrixmultipleCounter;
                        times.push(t);
                    }
                    console.log(mmdata);
                    console.log(stackmm)
                    return {data:stackmm,times:times};
                    break;
             case 'strassen--matrix-multiple':
                 var stackmm = [];

             function multiply(a, b) {
                 stackmm.push([[a.length,a[0].length],[b.length,b[0].length]])
                 console.log(a,b)
                 var aNumRows = a.length, aNumCols = a[0].length,
                     bNumRows = b.length, bNumCols = b[0].length,
                     m = new Array(aNumRows);  // initialize array of rows
                 for (var r = 0; r < aNumRows; ++r) {
                     simplematrixmultipleCounter++;
                     m[r] = new Array(bNumCols); // initialize the current row
                     for (var c = 0; c < bNumCols; ++c) {
                         m[r][c] = 0;             // initialize the current cell
                         simplematrixmultipleCounter++;
                         for (var i = 0; i < aNumCols; ++i) {
                             m[r][c] += a[r][i] * b[i][c];
                             simplematrixmultipleCounter++;
                         }
                     }
                 }
                 return simplematrixmultipleCounter;
             }
                 let smmdata = [[
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
                         [1,1,0],
                         [1,1,5]
                     ],
                     [
                         [ 0, 8, 9],
                         [5,9,6,1],
                         [8,5,9,1],

                     ]
                 ];
                 if (matrix)
                     smmdata = matrix;

                 for (let i = 0; i < smmdata.length-1; i=i+2) {
                     var simplematrixmultipleCounter = 0;
                     var simplematrixmultipleArray = smmdata[i].map(d => d);


                     var d = process.hrtime();
                     t = multiply(smmdata[i], smmdata[i+1]);
                     t = simplematrixmultipleCounter;
                     times.push(t);
                 }
                 console.log(smmdata);
                 console.log(stack)
                 return {data:stackmm,times:times};
                 break;
             case 'simple-multiple':
                 var stack = [];
                 let smdata = [[[2469,455552],[2324,32424],[12313,1342]]];
                 if (matrix)
                     smdata = matrix;
                 log(matrix)
             function  SimpleMultiple(a,b) {
                 log(a,b)
                 var AN = a ;
                 var BN = b ;
                 var AA = a.toString().split("").map(Number);
                 var BA = b.toString().split("").map(Number);
                 var AB = a * b;
                 var ABL = (AB.toString()).length;
                 var AL = (a.toString()).length
                 var BL = (b.toString()).length
                 for (var i =BL-1;i>=0;i--)
                 {  simplemultipleCounter++;
                     plusArray =[];
                     for (var j =AL-1;j>=0;j--)
                     {simplemultipleCounter++;
                         let m = BA[i] * AA[j];
                         if (m>9)
                         {
                             simplemultipleCounter++;
                             plusArray[j-1] = Math.floor(m/10);
                             if (j === 0)
                             {

                             }
                             m = m%10;
                         }
                     }
                 }
                 return simplemultipleCounter;
             }
                 for (let i = 0; i < smdata[0].length; i++) {
                     stack.push([smdata[0][i][0],smdata[0][i][1]]);
                     var simplemultipleCounter = 0;
                   //  var simplemultipleArray = smdata[i].map(d => d);
                     var array_length = smdata.length
                     var d = process.hrtime();
                     t = SimpleMultiple(smdata[0][i][0],smdata[0][i][1]);
                     t = simplemultipleCounter;
                     times.push(t);
                 }
                 return {data:smdata[0],times:times};
                 break;
             case 'karatsuba-multiple':
                 var stack = [];
                 let kmdata = [2469,455552,2324,32424,12313,1342];
                 if (data)
                     kmdata = data;
             function karatsubaMulti(x, y) {
                 let n = Math.min(('' + x).length, ('' + y).length);

                 if(n == 1)
                 {
                     karatsubamultipleCounter++;
                     return x * y;
                 }
                 karatsubamultipleCounter+=2;

                 let tenpowhalfn = Math.pow(10, parseInt(n / 2));
                 let tenpown = Math.pow(10, 2 * parseInt(n / 2));

                 let a = parseInt(x / tenpowhalfn);
                 let b = x % tenpowhalfn;
                 let c = parseInt(y / tenpowhalfn);
                 let d = y % tenpowhalfn;

                 let caller = arguments.callee;

                 return tenpown * caller(a, c) + tenpowhalfn * (caller(a, d) + caller(b, c)) + caller(b, d);
             }

                 for (let i = 0; i < kmdata.length-1; i=i+2) {
                     stack.push([kmdata[i],kmdata[i+1]]);
                     var karatsubamultipleCounter = 0;
                     //  var simplemultipleArray = smdata[i].map(d => d);
                     var array_length = kmdata.length
                     var d = process.hrtime();
                     t = karatsubaMulti(kmdata[i],kmdata[i+1]);
                     t = karatsubamultipleCounter;
                     times.push(t);
                 }
                 return {data:stack,times:times};
                 break;
             case 'maximum-sub-array':
             function maxSubarraySum(array) {
                 let maxSoFar = 0;
                 let maxEndingHere = 0;
                 var index=[];
                 var rIndex=[];
                 for (let i = 0; i < array.length; i++) {
                     maximumsubarrayCounter++;
                     maxEndingHere += array[i];
                     if (maxEndingHere < 0) {
                         maxEndingHere = 0;
                         // for (let j = i; j > 0; j--)
                         // {
                         //     select(j,mainColor);
                         // }
                     }
                     if (maxSoFar < maxEndingHere) {
                         maxSoFar = maxEndingHere;
                         index.push(i);
                     }
                 }
                 let lastI = index.pop();
                 var maxtemp = maxSoFar
                 for (var i = lastI; maxSoFar > 0 ; i-- )
                 {
                     maximumsubarrayCounter++;
                     maxSoFar -= array[i];
                 }
                 return maxtemp;
             }

                 var stack = [];
                 let msdata =[[-2, 3, 4, -1, -6, -7, 5, 10,-8],[5,-9,3,2,8,5,-2,-30],[8,2,4,3,6,7,2,51,4,-100,20,1]]
                 if (data)
                     msdata = data;
                 for (let i = 0; i < msdata.length; i++) {
                     //stack.push([kmdata[i],kmdata[i+1]]);
                     var maximumsubarrayCounter = 0;
                      var maximumsubarrayArray = msdata[i].map(d => d);
                     var array_length = msdata.length
                     var d = process.hrtime();
                     t = maxSubarraySum(msdata[i].map(d => d));
                     t = maximumsubarrayCounter;
                     times.push(t);
                 }
                 return {data:msdata,times:times};
                 break;
             case 'activity-selection':
             function myCompare1(a,b) {
                 activityselectionCounter++;
                 if (a.end > b.end)
                     return 1;
                 else if (a.end < b.end)
                     return -1;
                 else
                     return 0;

             }
                 function printMaxActivities1(arr) {
                 // The first activity always gets selected
                     var start = arr[0];
                     var end = arr[1];
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
                      //   stack.push(myActivites)
                         myActivites.sort(myCompare1);

                     }
                     catch (e) {
                         console.log(e);
                       //  alert(e);
                     }
                 var i = 0;
                     // Consider rest of the activities
                 for (var j = 1; j < arr.length; j++){
                     activityselectionCounter++;
                     // If this activity has start time greater than or
                     // equal to the finish time of previously selected
                     // activity, then select it
                     if (arr[j].start >= arr[i].end)
                     {
                         activityselectionCounter++;
                         i = j;
                     }
                 }
             }
                 let asdata = [[[5, 1, 3, 0, 5, 8,1],[9 ,2 ,4 ,6 ,7 ,9,8]],[[5, 6, 3, 1, 5, 8,9,10],[9 ,8 ,4 ,10 ,7 ,9,10,11]]];
                 if (matrix)
                     asdata = matrix;
                 var stack = [];

                 for (let i = 0; i < asdata.length; i++) {
                     var activityselectionCounter = 0;
                     var activityselectionArray = asdata[i].map(d => d);

                     var d = process.hrtime();
                     t=printMaxActivities1(asdata[i])
                     t = activityselectionCounter;
                     times.push(t);
                 }
                 console.log(asdata);
                 console.log(stack);
                 return {data:asdata.map(d=>d[0].length),times:times};
                 break;
             case 'huffman':
                 var Heap = function(fn) {
                     this.fn = fn || function(e) {
                         return e;
                     };
                     this.items = [];
                 };
                 Heap.prototype = {
                     swap: function(i, j) {
                         huffmanCounter++;
                         this.items[i] = [
                             this.items[j],
                             this.items[j] = this.items[i]
                         ][0];
                     },
                     bubble: function(index) {
                         huffmanCounter++;
                         var parent = ~~((index - 1) / 2);
                         if (this.item(parent) < this.item(index)) {
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
                 var Huffman = {
                     encode: function(data) {
                         var prob = {};
                         var tree = new Heap(function(e) {
                             return e[0];
                         });
                         for (var i = 0; i < data.length; i++) {
                             huffmanCounter
                             if (prob.hasOwnProperty(data[i])) {
                                 prob[data[i]]++;
                             } else {
                                 prob[data[i]] = 1;
                             }
                         }
                         Object.keys(prob).sort(function(a, b) {
                             return ~~(Math.random() * 2);
                         }).forEach(function(e) {
                             tree.push([prob[e], e]);
                         });
                         while (tree.length > 1) {
                             huffmanCounter++;
                             var first = tree.pop(),
                                 second = tree.pop();
                             tree.push([first[0] + second[0], [first[1], second[1]]]);
                         }
                         var dict = {};
                         var recurse = function(root, string) {
                             huffmanCounter++;
                             if (root.constructor === Array) {
                                 recurse(root[0], string + '0');
                                 recurse(root[1], string + '1');
                             } else {
                                 dict[root] = string;
                             }
                         };
                         tree.items = tree.pop()[1];
                         recurse(tree.items, '');
                         var result = '';
                         for (var i = 0; i < data.length; i++) {
                             huffmanCounter++;
                             result += dict[data[(i)]];
                         }
                         var header = Object.keys(dict).map(function(e) {
                             return e.charCodeAt(0) + '|' + dict[e];
                         }).join('-') + '/';
                         return header + result;
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
                 let hfdata = [['asdasdfgfdsasdfs'],['qwsxcvfdsgfdvhgnbcdfgrewd'],['asdsasdsasdsasd']];
                 if (data)
                     hfdata = data;
                 var stack = [];
                 log(hfdata)
                 for (let i = 0; i < hfdata.length; i++) {
                     var huffmanCounter = 0;
                  //   var huffmanArray = hfdata[i].map(d => d);

                     var d = process.hrtime();
                     t= Huffman.encode(hfdata[i][0]);
                     t = huffmanCounter;
                     times.push(t);
                 }
                 console.log(hfdata);
                 console.log(stack)
                 return {data:hfdata,times:times};
                 break;
             case 'job-scheduling':
             function myCompare(a,b) {
                 if (a.profit > b.profit)
                     return -1;
                 else if (a.profit < b.profit)
                     return +1;
                 else
                     return 0;

             }

             function jobScheduling(arr)
             {
                 var deadTimes = arr[0];
                 var profits = arr[1];
                 var TempMatrix =  arr.map(a=>a);
                 var myActivites=[];

                 try {
                     if (deadTimes.length !== profits.length)
                         throw (new Error('arrays not valid'));
                     for (let i=0;i<deadTimes.length;i++)
                     {
                         jobschedulingCounter++;
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


                 const slot = new Array(length);
                 const result = new Array(length);
                 for (let i = length - 1; i >= 0; i--) {
                     jobschedulingCounter++;
                     result[i] = '-';
                 }
// Initialise all slots to free
                 for (let i = 0; i < length; i++) {
                     jobschedulingCounter++;
                     slot[i] = 0;
                 }

// Iterate through all the given jobs
                 for (let i = 0; i < length; i++) {
                     jobschedulingCounter++;
                     /*
                        Start from the last possible slot.
                        Find a slot for the job
                        */
                     for (let j = Math.min(length, myActivites[i].deadTime) - 1; j >= 0; j--) {
                         jobschedulingCounter++;
                         if (slot[j] === 0) {
                             jobschedulingCounter++;
                             result[j] = myActivites[i].index;
                             slot[j] = 1;
                             break;
                         }
                     }
                 }
                 return result;
             }
                 let jsdata =[[[3, 6, 1, 4, 6,2,3,5],[20 ,19 ,27 ,25 ,15,50,50,10]],[[5, 3, 4, 4, 2,1,3,5],[20 ,20 ,15 ,10 ,15,40,50,10]]];
                 if (data)
                     jsdata = data;
                 var stack = [];
                 for (let i = 0; i < jsdata.length; i++) {
                     var jobschedulingCounter = 0;
                     var jobschedulingArray = jsdata[i].map(d => d);

                     var d = process.hrtime();
                     t=jobScheduling(jsdata[i])
                     t = jobschedulingCounter;
                     times.push(t);
                 }
                 console.log(jsdata);
                 console.log(stack)
                 return {data:jsdata,times:times};
                 break;
             case 'dfs':
             function dfs(root){
                 visited = [];
                 for (var j = 0; j < data.nodes.length; j++) {
                     visited[j] = false;
                     dfsCounter++;
                 }
                 var stack=[];
                 stack.push({f:null,n:root});
                 while(stack.length!==0){
                     dfsCounter++;
                     var element = stack.pop();
                     for (var j = 0; j < data.links.length; j++) {
                         dfsCounter++;
                         if(data.links[j].source.index === element.n && visited[data.links[j].target.index] === false){
                             stack.push({f:element.n,n:data.links[j].target.index});
                             dfsCounter++;
                         }
                     }
                     visited[element.n] = true;
                 }
             }
                 let dfsdata = [[[0,1, 2, 3, 4, 5, 6,7,8,9,10],[0 ,1],[0 ,2],[0 ,3],[1 ,3],[1 ,8],[1 ,9],[2 , 4],[10 ,4],[5 ,4],[4 ,7],[7 ,6],[6 ,2],[6 ,9]],[[0,1, 2, 3],[0 ,1],[0 ,2],[0 ,3],[1 ,3],[1 ,2],[1 ,3]]];
             function convertToGraph(arr) {
                 var vertexes = arr[0];
                 var data = {nodes:[],links:[]};
                 for (var i=0;i<vertexes.length;i++)
                 {
                     data.nodes.push({"id": vertexes[i],"index":i})
                 }
                 for (var i=1;i<arr.length;i++)
                 {
                     data.links.push({"source": arr[i][0], "target": arr[i][1],"index":i-1})
                     data.links.push({"source": arr[i][1], "target": arr[i][0],"index":i-1})
                 }
                 return data;
             }
                 console.log(data);
                if (matrix)
                     dfsdata = matrix;
                 var stack1 = [];
                 for (let i = 0; i < dfsdata.length; i++) {
                     data = convertToGraph(dfsdata[i]);
                     stack1.push(dfsdata[i][0]);
                     var dfsCounter = 0;
                  //   var jobschedulingArray = dfsdata[i].map(d => d);
                     var d = process.hrtime();
                     t=dfs(dfsdata[i][0][0]);
                     t = dfsCounter;
                     times.push(t);
                 }
                 console.log(stack1)
                 return {data:stack1,times:times};
                 break;
             case 'bfs':

             function bfs(root){

                 visited = [];

                 for(i =0 ;i<data.nodes.length;i++){
                     visited[i] = false;
                     bfsCounter++;
                 }
                 var queue=[];
                 queue.push(root);
                 while(queue.length !== 0){
                     bfsCounter++;
                     var element = queue.shift();
                     if (visited[element] === false){
                         bfsCounter++;
                         visited[element] = true;
                     }
                     for (var i=0;i<data.links.length;i++)
                     {                         bfsCounter++;

                         if(data.links[i].source.index === element){
                             if(visited[data.links[i].target.index] === false){
                                 bfsCounter++;
                                 visited[data.links[i].target.index] = true;
                                 queue.push(data.links[i].target.index);
                             }
                         }
                     }
                 }
             }
                 let bfsdata = [[[0,1, 2, 3, 4, 5, 6,7,8,9,10],[0 ,1],[0 ,2],[0 ,3],[1 ,3],[1 ,8],[1 ,9],[2 , 4],[10 ,4],[5 ,4],[4 ,7],[7 ,6],[6 ,2],[6 ,9]],[[0,1, 2, 3],[0 ,1],[0 ,2],[0 ,3],[1 ,3],[1 ,2],[1 ,3]]];
             function convertToGraph(arr) {
                 var vertexes = arr[0];
                 var data = {nodes:[],links:[]};
                 for (var i=0;i<vertexes.length;i++)
                 {
                     data.nodes.push({"id": vertexes[i],"index":i})
                 }
                 for (var i=1;i<arr.length;i++)
                 {
                     data.links.push({"source": arr[i][0], "target": arr[i][1],"index":i-1})
                     data.links.push({"source": arr[i][1], "target": arr[i][0],"index":i-1})
                 }
                 return data;
             }
                 console.log(data);
                 if (matrix)
                     bfsdata = matrix;
                 var stack1 = [];
                 for (let i = 0; i < bfsdata.length; i++) {
                     data = convertToGraph(bfsdata[i]);
                     stack1.push(bfsdata[i][0]);
                     var bfsCounter = 0;
                     //   var jobschedulingArray = dfsdata[i].map(d => d);
                     var d = process.hrtime();
                     t=bfs(bfsdata[i][0][0]);
                     t = bfsCounter;
                     times.push(t);
                 }
                 console.log(stack1)
                 return {data:stack1,times:times};
                 break;
             case 'prim':
             function prim(element) {
                 var visited=[];
                 var visitedTree=[];
                 var size = data.nodes.length;
                 for(i =0 ;i<size;i++){
                     visited[i] = false;
                     visitedTree[i] = false;
                     primCounter++;
                 }
                 var minD =Infinity;
                 var minI
                 var minJ
                 var sum = 0;
                 visited[data.nodes[element].index]= true;
                 for (var k = 0; k < data.nodes.length - 1; k++) { // Searching for k edges
                     minD = Infinity;
                     primCounter++;
                     for (var i = 0; i < data.nodes.length; i++) {
                         if (visited[i]) {
                             primCounter++;
                             for (var j = 0; j < data.links.length; j++) {
                                 primCounter++;
                                 if(data.links[j].source === i && visited[data.links[j].target] === false){
                                     if (data.links[j].value < minD){
                                         primCounter++;
                                         minD = data.links[j].value;
                                         minI = i;
                                         minJ = j;
                                     }
                                 }
                             }
                         }
                     }
                     console.log(minJ)
                     console.log(data.links[minJ])
                     visited[data.links[minJ].target] = true;
                 }
             }
             function convertToGraph1(arr) {
                 var vertexes = arr[0];
                 var data = {nodes:[],links:[]};
                 for (var i=0;i<vertexes.length;i++)
                 {
                     data.nodes.push({"id": vertexes[i],"index":i})
                 }
                 for (var i=1;i<arr.length;i++)
                 {
                     data.links.push({"source": arr[i][0], "target": arr[i][1] ,"value": arr[i][2],"index":i-1});
                     data.links.push({"source": arr[i][1], "target": arr[i][0] ,"value": arr[i][2],"index":i-1});
                 }
                 return data;
             }

                 let primdata = [[[0,1, 2, 3, 4, 5, 6,7,8,9,10],[0 ,1,3],[0 ,2,7],[1 ,3,4],[1 ,8,9],[1 ,9,2],[2 , 4,2],[10 ,4,2],[5 ,4,1],[4 ,7,8],[7 ,6,4],[6 ,2,4],[6 ,9,7]],[[0,1, 2, 3, 4, 5],[0 ,1,3],[0 ,2,7],[1 ,3,4],[2 , 4,2],[5 ,4,1]]]; function convertToGraph(arr) {
                 var vertexes = arr[0];
                 var data = {nodes:[],links:[]};
                 for (var i=0;i<vertexes.length;i++)
                 {
                     data.nodes.push({"id": vertexes[i]})
                 }
                 for (var i=1;i<arr.length;i++)
                 {
                     data.links.push({"source": arr[i][0], "target": arr[i][1]});
                     data.links.push({"source": arr[i][1], "target": arr[i][0]});
                 }
                 return data;
             }

                 if (matrix)
                     primdata = matrix;
                 var stack1 = [];
                 for (let i = 0; i < primdata.length; i++) {
                     data = convertToGraph1(primdata[i]);
                     stack1.push(primdata[i][0]);
                     var primCounter = 0;
                     //   var jobschedulingArray = dfsdata[i].map(d => d);
                     var d = process.hrtime();
                     t=prim(0);
                     t = primCounter;
                     times.push(t);
                 }
                 console.log(stack1)
                 return {data:stack1,times:times};
                 break;
             case 'kruskals':
             function kruskal() {
                 visited = [];

                 for(i =0 ;i<data.nodes.length;i++){
                     visited[i] = false;
                     kruskalsCounter++;
                 }

                 edges =[];

                 edge = data.links.sort((a, b) => Number(a.value) - Number(b.value));
                 for (var i=0;i<edge.length;i++){
                     kruskalsCounter++;
                     edges.push([]);
                 }

                 for (var i=0;i<edge.length;i++){
                     edges[i][0] = edge[i].source;
                     edges[i][1] = edge[i].target;
                     edges[i][2] = edge[i].value;
                     edges[i][3] = edge[i].index;
                     kruskalsCounter++;
                 }

                 const vcount = data.nodes.length;
                 const t = [];
                 for (var i = 0; i < vcount; i++) {
                     t[i] = {};
                     t[i][i] = true;
                     kruskalsCounter++;
                 }
                 var wsum = 0;
                 for (var n = 0; n < vcount-1  && edges.length > 0;) {
                     const e = edges.shift(); // Get the edge of min weight
                     kruskalsCounter++;
                     for( var i = 0; i < edges.length-1; i++){
                         kruskalsCounter++;
                         if ( e[0] === edges[i][1] && e[1] === edges[i][0]) {
                             edges.splice(i, 1);
                             kruskalsCounter++;
                         }
                     }
                     if (t[e[0]] === t[e[1]]) {
                         continue;
                     }
                     kruskalsCounter++;
                     wsum += e.weight;
                     // Merge tree of e[0] & e[1]
                     const tmerged = {};
                     for (const i in t[e[0]]) tmerged[i] = true;
                     for (const i in t[e[1]]) tmerged[i] = true;
                     for (const i in tmerged) t[i] = tmerged;
                     n += 1;
                 }
             }
             function convertToGraph1(arr) {
                 var vertexes = arr[0];
                 var data = {nodes:[],links:[]};
                 for (var i=0;i<vertexes.length;i++)
                 {
                     data.nodes.push({"id": vertexes[i],"index":i})
                 }
                 for (var i=1;i<arr.length;i++)
                 {
                     data.links.push({"source": arr[i][0], "target": arr[i][1] ,"value": arr[i][2],"index":i-1});
                     data.links.push({"source": arr[i][1], "target": arr[i][0] ,"value": arr[i][2],"index":i-1});
                 }
                 return data;
             }

                 let kruskalsdata = [[[0,1, 2, 3, 4, 5, 6,7,8,9,10],[0 ,1,3],[0 ,2,7],[1 ,3,4],[1 ,8,9],[1 ,9,2],[2 , 4,2],[10 ,4,2],[5 ,4,1],[4 ,7,8],[7 ,6,4],[6 ,2,4],[6 ,9,7]],[[0,1, 2, 3, 4, 5],[0 ,1,3],[0 ,2,7],[1 ,3,4],[2 , 4,2],[5 ,4,1]]]; function convertToGraph(arr) {
                 var vertexes = arr[0];
                 var data = {nodes:[],links:[]};
                 for (var i=0;i<vertexes.length;i++)
                 {
                     data.nodes.push({"id": vertexes[i]})
                 }
                 for (var i=1;i<arr.length;i++)
                 {
                     data.links.push({"source": arr[i][0], "target": arr[i][1]});
                     data.links.push({"source": arr[i][1], "target": arr[i][0]});
                 }
                 return data;
             }

                 if (matrix)
                     kruskalsdata = matrix;
                 var stack1 = [];
                 for (let i = 0; i < kruskalsdata.length; i++) {
                     data = convertToGraph1(kruskalsdata[i]);
                     stack1.push(kruskalsdata[i][0]);
                     var kruskalsCounter = 0;
                     //   var jobschedulingArray = dfsdata[i].map(d => d);
                     var d = process.hrtime();
                     t=kruskal(0);
                     t = kruskalsCounter;
                     times.push(t);
                 }
                 console.log(stack1)
                 return {data:stack1,times:times};
                 break;
             case 'dijkstras':
             function Dijkstra(start) {
                 visited=[]

                 for(i =0 ;i<data.nodes.length;i++){
                     visited[i] = false
                     dijkstrasCounter++;
                 }
                 Dist = [];

                 Array3D = [];

                 for (i=0;i<data.nodes.length;i++){
                     Array3D.push({D:null,P:null});
                 }

                 S = [];
                 NODE =[];
                 MAX_VALUE = Infinity;
                 for (var i = 0; i < data.nodes.length; i++) S[i] = MAX_VALUE;
                 var minIndex;
                 var minI;
                 var minDistance;
                 for (var i = 0; i < data.nodes.length; i++) visited.push(false);
                 S[start] = 0;
                 console.log("S1: "+S);
                 //var nodenumber = 0;
                 Array3D[0].D = 0;
                 Array3D[0].P = null;
                 let k = data.nodes.length;
                 while (k--) {
                     dijkstrasCounter++;
                     minDistance = MAX_VALUE;
                     for (let i = 0; i < data.nodes.length; i++) {
                         dijkstrasCounter++;
                         if (S[i] < minDistance && !visited[i]) {
                             dijkstrasCounter++;
                             minDistance = S[i];
                             minIndex = i;
                         }
                     }
                     Dist.push(minDistance);
                     if (minDistance === MAX_VALUE) break;
                     console.log("visited: "+visited);
                     console.log("S: "+S);
                     for (var i=0;i<data.links.length;i++) {
                         dijkstrasCounter++;
                         var D = parseInt(S[minIndex])+parseInt(data.links[i].value);
                         //console.log('D: '+D);
                         //console.log('S2: '+S[i]);
                         if(data.links[i].source.index === minIndex && S[data.links[i].target.index] > D){
                             S[data.links[i].target.index] = D;
                             dijkstrasCounter++;
                             Array3D[data.links[i].target.index].D = D;
                             Array3D[data.links[i].target.index].P = minIndex;
                         }
                     }
                     visited[minIndex] = true;
                     console.log('minIndex: '+minIndex);
                     NODE.push(minIndex);
                     console.log('S END: '+S);
                 }
                 console.log("Dist "+Dist);
                 console.log("NODE "+NODE);
                 console.log(Array3D);
             }

             function convertToGraph1(arr) {
                 var vertexes = arr[0];
                 var data = {nodes:[],links:[]};
                 for (var i=0;i<vertexes.length;i++)
                 {
                     data.nodes.push({"id": vertexes[i],"index":i})
                 }
                 for (var i=1;i<arr.length;i++)
                 {
                     data.links.push({"source": arr[i][0], "target": arr[i][1] ,"value": arr[i][2],"index":i-1});
                     data.links.push({"source": arr[i][1], "target": arr[i][0] ,"value": arr[i][2],"index":i-1});
                 }
                 return data;
             }

                 let dijkstrasdata = [[[0,1, 2, 3, 4, 5, 6,7,8,9,10],[0 ,1,3],[0 ,2,7],[1 ,3,4],[1 ,8,9],[1 ,9,2],[2 , 4,2],[10 ,4,2],[5 ,4,1],[4 ,7,8],[7 ,6,4],[6 ,2,4],[6 ,9,7]],[[0,1, 2, 3, 4, 5],[0 ,1,3],[0 ,2,7],[1 ,3,4],[2 , 4,2],[5 ,4,1]]]; function convertToGraph(arr) {
                 var vertexes = arr[0];
                 var data = {nodes:[],links:[]};
                 for (var i=0;i<vertexes.length;i++)
                 {
                     data.nodes.push({"id": vertexes[i]})
                 }
                 for (var i=1;i<arr.length;i++)
                 {
                     data.links.push({"source": arr[i][0], "target": arr[i][1]});
                     data.links.push({"source": arr[i][1], "target": arr[i][0]});
                 }
                 return data;
             }

                 if (matrix)
                     dijkstrasdata = matrix;
                 var stack1 = [];
                 for (let i = 0; i < dijkstrasdata.length; i++) {
                     data = convertToGraph1(dijkstrasdata[i]);
                     stack1.push(dijkstrasdata[i][0]);
                     var dijkstrasCounter = 0;
                     //   var jobschedulingArray = dfsdata[i].map(d => d);
                     var d = process.hrtime();
                     t=Dijkstra(0);
                     t = dijkstrasCounter;
                     times.push(t);
                 }
                 console.log(stack1)
                 return {data:stack1,times:times};
                 break;
         }
 }
 const helpAlgorithm = function (type) {
var data;
var times;
     switch (type) {

         case 'bubble-sort':
             return {desc:'فایل الگوریتم های مرتب سازی باید شامل آرایه هایی باشد که عددی باشند و شامل اعداد در فایل txt  به این شکل قرار بگیرند که هر سطر یک آرایه که با جدا کننده , از هم جدا شده اند نمونه در زیر قابل دانلود می باشد '
                 ,url:'/files/Arrays.txt'};
             break;
         case 'selection-sort':
             return {desc:'فایل الگوریتم های مرتب سازی باید شامل آرایه هایی باشد که عددی باشند و شامل اعداد در فایل txt  به این شکل قرار بگیرند که هر سطر یک آرایه که با جدا کننده , از هم جدا شده اند نمونه در زیر قابل دانلود می باشد '
                 ,url:'/files/Arrays.txt'};
             break;
         case 'insertion-sort':
             return {desc:'فایل الگوریتم های مرتب سازی باید شامل آرایه هایی باشد که عددی باشند و شامل اعداد در فایل txt  به این شکل قرار بگیرند که هر سطر یک آرایه که با جدا کننده , از هم جدا شده اند نمونه در زیر قابل دانلود می باشد '
                 ,url:'/files/Arrays.txt'};
             break;
         case 'merge-sort':
             return {desc:'فایل الگوریتم های مرتب سازی باید شامل آرایه هایی باشد که عددی باشند و شامل اعداد در فایل txt  به این شکل قرار بگیرند که هر سطر یک آرایه که با جدا کننده , از هم جدا شده اند نمونه در زیر قابل دانلود می باشد '
                 ,url:'/files/Arrays.txt'};
             break;
         case 'quick-sort':
             return {desc:'فایل الگوریتم های مرتب سازی باید شامل آرایه هایی باشد که عددی باشند و شامل اعداد در فایل txt  به این شکل قرار بگیرند که هر سطر یک آرایه که با جدا کننده , از هم جدا شده اند نمونه در زیر قابل دانلود می باشد '
                 ,url:'/files/Arrays.txt'};
             break;
         case 'heap-sort':
             return {desc:'فایل الگوریتم های مرتب سازی باید شامل آرایه هایی باشد که عددی باشند و شامل اعداد در فایل txt  به این شکل قرار بگیرند که هر سطر یک آرایه که با جدا کننده , از هم جدا شده اند نمونه در زیر قابل دانلود می باشد '
                 ,url:'/files/Arrays.txt'};
             break;
         case 'simple-matrix-multiple':
             return {desc:'فایل الگوریتم های ماتریس شامل جفت ماتریس هایی است این ماتریس ها به این شکل در فایل txt  باید در نظر گرفته شوند که هر سطر ماتریس در یک سطر که درایه های آن با , از هم جدا شده اند  و هر ماتریس با یک جدا کننده * از هم جدا می شوند بعد از آخرین ماتریس نیز علامت * باید گزاشته شود تعداد ماتریس ها باید زوج باشد در این حالت ماتریس ها دو به دو در هم ضرب می شوند و برای نمایش نیز فقط دو ماتریس اول نمایش داده می شود البته توجه نمایید درایه های ماتریس باید عدد باشند و همچنین ماتریس ها از قواعد ضرب ماتریس ها پیروی بکنند نمونه فایل را در زیر می توانید دانلود کنید '
                 ,url:'/files/Matrix.txt'};
             break;
         case 'strassen--matrix-multiple':
             return {desc:'فایل الگوریتم های ماتریس شامل جفت ماتریس هایی است این ماتریس ها به این شکل در فایل txt  باید در نظر گرفته شوند که هر سطر ماتریس در یک سطر که درایه های آن با , از هم جدا شده اند  و هر ماتریس با یک جدا کننده * از هم جدا می شوند بعد از آخرین ماتریس نیز علامت * باید گزاشته شود تعداد ماتریس ها باید زوج باشد در این حالت ماتریس ها دو به دو در هم ضرب می شوند و برای نمایش نیز فقط دو ماتریس اول نمایش داده می شود البته توجه نمایید درایه های ماتریس باید عدد باشند و همچنین ماتریس ها از قواعد ضرب ماتریس ها پیروی بکنند نمونه فایل را در زیر می توانید دانلود کنید '
                 ,url:'/files/Matrix.txt'};
             break;
         case 'simple-multiple':
             return {desc:'فایل الگوریتم های ضرب اعداد شامل جفت اعداد است این جفت ها به این شکل در فایل txt  باید در نظر گرفته شوند که هر جفت عدد در یک سطر که عدد های آن با , از هم جدا شده اند و در خر ورودی هم علامت * گزاشته شود برای نمایش نیز فقط سطر اول نمایش داده می شود  نمونه فایل را در زیر می توانید دانلود کنید '
                 ,url:'/files/Numbers.txt'};
             break;
         case 'karatsuba-multiple':
             return {desc:'فایل الگوریتم های ضرب اعداد شامل جفت اعداد است این جفت ها به این شکل در فایل txt  باید در نظر گرفته شوند که هر جفت عدد در یک سطر که عدد های آن با , از هم جدا شده اند و در خر ورودی هم علامت * گزاشته شود برای نمایش نیز فقط سطر اول نمایش داده می شود  نمونه فایل را در زیر می توانید دانلود کنید '
                 ,url:'/files/Numbers.txt'};
             break;
         case 'maximum-sub-array':
             return {desc:'فایل الگوریتم زیرآرایه بیشینه باید شامل آرایه هایی باشد که عددی باشند و شامل اعداد در فایل txt  به این شکل قرار بگیرند که هر سطر یک آرایه که با جدا کننده , از هم جدا شده اند توجه کنید که حداقل یک عدد مثبت در آرایه باید موجود باشد نمونه در زیر قابل دانلود می باشد '
                 ,url:'/files/Arrays.txt'};
             break;
         case 'activity-selection':
             return {desc:'فایل الگوریتم انتخاب فعالیت به این صورت است که در خط اول آرایه ای از زمان از دست دادن ارزش  فعالیت و در خط دوم آرایه ای از ارزش فعالیت ها می باشد که به این صورت تکرار می شود که بین آن ها علامت ستاره می باشد  درایه های آرایه نیز با , از هم جدا می شوند به عنوان مثال نمونه در زیر قابل دانلود می باشد '
                 ,url:'/files/Jobs.txt'};
             break;
         case 'huffman':
             return {desc:'فایل الگوریتم  به صورت شرشته هایی هست که هر سطر شامل یک رشته می باشد به عنوان مثال نمونه در زیر قابل دانلود می باشد '
                 ,url:'/files/String.txt'};
             break;
         case 'job-scheduling':
             return {desc:'فایل الگوریتم زمان بندی کار ها به این صورت است که در خط اول آرایه ای از زمان از دست دادن ارزش  فعالیت و در خط دوم آرایه ای از ارزش فعالیت ها می باشد که به این صورت تکرار می شود که بین آن ها علامت ستاره می باشد  درایه های آرایه نیز با , از هم جدا می شوند به عنوان مثال نمونه در زیر قابل دانلود می باشد '
                 ,url:'/files/Jobs.txt'};
             break;
         case 'dfs':
             return {desc:'فایل الگوریتم های گراف به این صورت است که در خط اول آرایه ای از نود های آرایه و سطر های بعد در هر سطر دو جفت که یال ها را نشان می دهند و درایه سوم هم وزن یال  به عنوان مثال نمونه در زیر قابل دانلود می باشد '
                 ,url:'/files/Graphs.txt'};
             break;
         case 'bfs':
             return {desc:'فایل الگوریتم های گراف به این صورت است که در خط اول آرایه ای از نود های آرایه و سطر های بعد در هر سطر دو جفت که یال ها را نشان می دهند و درایه سوم هم وزن یال  به عنوان مثال نمونه در زیر قابل دانلود می باشد '
                 ,url:'/files/Graphs.txt'};
             break;
         case 'prim':
             return {desc:'فایل الگوریتم های گراف به این صورت است که در خط اول آرایه ای از نود های آرایه و سطر های بعد در هر سطر دو جفت که یال ها را نشان می دهند و درایه سوم هم وزن یال  به عنوان مثال نمونه در زیر قابل دانلود می باشد '
                 ,url:'/files/Graphs.txt'};
             break;
         case 'kruskals':
             return {desc:'فایل الگوریتم های گراف به این صورت است که در خط اول آرایه ای از نود های آرایه و سطر های بعد در هر سطر دو جفت که یال ها را نشان می دهند و درایه سوم هم وزن یال  به عنوان مثال نمونه در زیر قابل دانلود می باشد '
                 ,url:'/files/Graphs.txt'};
             break;
         case 'dijkstras':
             return {desc:'فایل الگوریتم های گراف به این صورت است که در خط اول آرایه ای از نود های آرایه و سطر های بعد در هر سطر دو جفت که یال ها را نشان می دهند و درایه سوم هم وزن یال  به عنوان مثال نمونه در زیر قابل دانلود می باشد '
                 ,url:'/files/Graphs.txt'};
             break;
     }
 }
 const descriptionAlgorithm = function (type) {
     var data;
     var times;
     switch (type) {

         case 'bubble-sort':
             return {name:'bubble-sort مرتب سازی حبابی',type:'مرتب سازی',O:'n^2',code:"void bubbleSort(int arr[], int n) \n" +
                     "{ \n" +
                     "   int i, j; \n" +
                     "   bool swapped; \n" +
                     "   for (i = 0; i < n-1; i++) \n" +
                     "   { \n" +
                     "     swapped = false; \n" +
                     "     for (j = 0; j < n-i-1; j++) \n" +
                     "     { \n" +
                     "        if (arr[j] > arr[j+1]) \n" +
                     "        { \n" +
                     "           swap(&arr[j], &arr[j+1]); \n" +
                     "           swapped = true; \n" +
                     "        } \n" +
                     "     } \n" +
                     "  \n" +
                     "     // IF no two elements were swapped by inner loop, then break \n" +
                     "     if (swapped == false) \n" +
                     "        break; \n" +
                     "   } \n" +
                     "} ",desc:'در این روش مرتب سازی هر عنصر آرایه فقط با عنصر کناری خود مقایسه می شود و اگر عنصر n ام بزرگ تر از عنصر n+1 ام بود جای این دو عنصر عوض می شود این کار تا زمانی که تمام آرایه مرتب شود ادامه می یابد .\n' +
                     '\n' +
                     'اسم این الگوریتم را مرتب سازی حبابی (bubble sort) گذاشته اند  زیرا هر عنصر آرایه فقط با عنصر کناری خود بررسی می شود و مثل حباب بالا می رود.\n' +
                     '\n' +
                     'مرتبه این الگوریتم در بدترین حالت  ( O(n^2  است و  در  بهترین حالت  ( O(n است  به همین خاطر برای سورت کردن تعداد زیادی عنصر مناسب نیست .\n' +
                     '\n'};
             break;
         case 'selection-sort':
             return {name:'selection-sort مرتب سازی انتخابی',type:'مرتب سازی',O:'n^2',code:"void selectionSort(int arr[], int n) \n" +
                     "{ \n" +
                     "    int i, j, min_idx; \n" +
                     "  \n" +
                     "    // One by one move boundary of unsorted subarray \n" +
                     "    for (i = 0; i < n-1; i++) \n" +
                     "    { \n" +
                     "        // Find the minimum element in unsorted array \n" +
                     "        min_idx = i; \n" +
                     "        for (j = i+1; j < n; j++) \n" +
                     "          if (arr[j] < arr[min_idx]) \n" +
                     "            min_idx = j; \n" +
                     "  \n" +
                     "        // Swap the found minimum element with the first element \n" +
                     "        swap(&arr[min_idx], &arr[i]); \n" +
                     "    } \n" +
                     "} ",desc:"روش مرتب‌سازی انتخابی (Selection Sort)  یکی از روش‌های اولیه‌ی مرتب‌سازی بر اساس مقایسه‌ی عناصر است. این الگوریتم طی چند مرحله عناصر لیست را به صورت صعودی یا نزولی مرتب می‌کند. به این ترتیب که در هر مرحله با بررسی عناصر نامرتب، بزرگترین) یا کوچکترین( عنصر را پیدا کرده و به انتهای لیست منتقل می‌کند.\n" +
                     "پیچیدگی زمانی اجرای این الگوریتم بر اساس محاسبات فوق در بدترین حالت ( O(n^2 است. با توجه به قطعه کد نوشته شده، ترتیب عناصر تغییری در عملکرد آن اینجا نمی‌کند. یعنی این الگوریتم برای داده‌های کاملا مرتب، نامرتب تصادفی و مرتب معکوس به یک ترتیب عمل کرده و تمام مقایسه‌های محاسبه شده در رابطه‌ی فوق را انجام می‌دهد. بنابراین پیچیدگی این الگوریتم در بهترین حالت و حالت متوسط نیز ( O(n^2 است.\n" +
                     "مرتب‌سازی انتخابی یک روش مرتب‌سازی درجا است. یعنی عملیات مرتب‌سازی در داخل خود لیست و بدون نیاز به حافظه‌ی کمکی بزرگ انجام می‌گیرد.\n" +
                     "در پیاده‌سازی مرتب‌سازی انتخابی به روش فوق، اگر دو عنصر با مقدار بیشینه داشته باشیم، اولی انتخاب شده و به انتهای لیست منتقل می‌شود. در نتیجه ترتیب آنها به هم می‌خورد. بنابراین این پیاده‌سازی روش پایدار نیست. در روش پایدار ترتیب عناصر با مقدار یکسان تغییر نمی‌کند. اما اگر در مقایسه عناصر آرایه به جای >  از =>  استفاده کنید، مرتب‌سازی پایدار خواهد شد.\n"};
             break;
         case 'insertion-sort':
             return {name:'insertion-sort مرتب سازی درجی',type:'مرتب سازی',O:'n^2',code:"void insertionSort(int arr[], int n) \n" +
                     "{ \n" +
                     "   int i, key, j; \n" +
                     "   for (i = 1; i < n; i++) \n" +
                     "   { \n" +
                     "       key = arr[i]; \n" +
                     "       j = i-1; \n" +
                     "  \n" +
                     "       /* Move elements of arr[0..i-1], that are \n" +
                     "          greater than key, to one position ahead \n" +
                     "          of their current position */\n" +
                     "       while (j >= 0 && arr[j] > key) \n" +
                     "       { \n" +
                     "           arr[j+1] = arr[j]; \n" +
                     "           j = j-1; \n" +
                     "       } \n" +
                     "       arr[j+1] = key; \n" +
                     "   } \n" +
                     "} ",desc:"روش مرتب‌سازی درجی (Insertion Sort)  یکی از روش‌های مرتب‌سازی مبتنی بر مقایسه‌ی عناصر است که در مقایسه با روش‌های دیگر بیشتر مورد توجه قرار دارد.\n" +
                     "قفسه‌ی کتابی را در نظر بگیرید که قصد دارید کتاب‌ها را بر اساس عنوان و به ترتیب حروف الفبا مرتب کنید. از یک سمت قفسه شروع به مرتب کردن می‌کنید. ابتدا کتاب دوم را با کتاب اول مقایسه کرده و در صورت لزوم جابجا می‌کنید. سپس کتاب سوم را از محل خود برداشته و در مقایسه با دو کتاب قبلی در محل مناسب قرار می‌دهید. به همین ترتیب کتاب‌های بعدی را نیز نسبت به کتاب‌های مرتب‌شده‌ی قبلی در محل مناسب درج می‌کنید تا به آخر قفسه برسید.\n" +
                     "عملکرد این الگوریتم به¬گونه‌ای است که در پایان هر مرحله قسمتی از داده‌ها به صورت کامل مرتب هستند. در مرحله‌ی بعدی نیز داده‌ای از میان داده‌های غیرمرتب به این قسمت مرتب وارد شده و در محل مناسب درج می‌شود. \n" +
                     "- پيچيدگي زمانی الگوریتم مرتب‌سازی درجی در بدترین حالت و حالت متوسط ( O(n^2 و در بهترین حالت ( O(n است.\n" +
                     " یکی از ویژگی‌های مهم مرتب‌سازی درجی این است که در حالت متوسط برای درج عنصر جدید در لیست مرتب شده نیاز به مقایسه عنصر با تمامی عناصر ندارد. به همین دلیل کارآیی آن در مقایسه با بدترین حالت بهتر است. از سوی دیگر، این روش برای مرتب کردن عناصر به جای عمل جابجایی -که نیاز به سه عمل اصلی مقداردهی دارد - از کپی کردن استفاده می‌کند. در این روش ابتدا مقدار عنصر جدید در یک متغیر کمکی)در قطعه کد فوق متغیرt ( ذخیره شده و جابجا کردن عناصر بزرگتر به انتهای لیست با یک عمل اصلی انجام می‌گیرد. در انتها نیز مقدار عنصر جدید در محل مناسب درج می‌شود. در چنین حالتی تعداد اعمال اصلی انجام شده کمتر از تعداد اعمال مورد نیاز در عمل جابجایی است. به همین دلیل این روش به روش‌های مقدماتی دیگر) مانند روش مرتب‌سازی حبابی و انتخابی( ارجحیت داشته و در مراحل نهایی مرتب‌سازی‌های پیشرفته )مانند روش مرتب‌سازی سریع( از این روش به عنوان روش مرتب‌سازی جایگزین استفاده می‌شود. اگر تعداد عناصر لیست کمتر از بیست عنصر باشد، این روش در مقایسه بار روش‌های متداول مرتب‌سازی سریعتر عمل می‌کند.\n"};
             break;
         case 'merge-sort':
             return {name:'merge-sort مرتب سازی ادغامی',type:'مرتب سازی',O:'nlogn',code:"// Merges two subarrays of arr[]. \n" +
                     "// First subarray is arr[l..m] \n" +
                     "// Second subarray is arr[m+1..r] \n" +
                     "void merge(int arr[], int l, int m, int r) \n" +
                     "{ \n" +
                     "    int i, j, k; \n" +
                     "    int n1 = m - l + 1; \n" +
                     "    int n2 =  r - m; \n" +
                     "  \n" +
                     "    /* create temp arrays */\n" +
                     "    int L[n1], R[n2]; \n" +
                     "  \n" +
                     "    /* Copy data to temp arrays L[] and R[] */\n" +
                     "    for (i = 0; i < n1; i++) \n" +
                     "        L[i] = arr[l + i]; \n" +
                     "    for (j = 0; j < n2; j++) \n" +
                     "        R[j] = arr[m + 1+ j]; \n" +
                     "  \n" +
                     "    /* Merge the temp arrays back into arr[l..r]*/\n" +
                     "    i = 0; // Initial index of first subarray \n" +
                     "    j = 0; // Initial index of second subarray \n" +
                     "    k = l; // Initial index of merged subarray \n" +
                     "    while (i < n1 && j < n2) \n" +
                     "    { \n" +
                     "        if (L[i] <= R[j]) \n" +
                     "        { \n" +
                     "            arr[k] = L[i]; \n" +
                     "            i++; \n" +
                     "        } \n" +
                     "        else\n" +
                     "        { \n" +
                     "            arr[k] = R[j]; \n" +
                     "            j++; \n" +
                     "        } \n" +
                     "        k++; \n" +
                     "    } \n" +
                     "  \n" +
                     "    /* Copy the remaining elements of L[], if there \n" +
                     "       are any */\n" +
                     "    while (i < n1) \n" +
                     "    { \n" +
                     "        arr[k] = L[i]; \n" +
                     "        i++; \n" +
                     "        k++; \n" +
                     "    } \n" +
                     "  \n" +
                     "    /* Copy the remaining elements of R[], if there \n" +
                     "       are any */\n" +
                     "    while (j < n2) \n" +
                     "    { \n" +
                     "        arr[k] = R[j]; \n" +
                     "        j++; \n" +
                     "        k++; \n" +
                     "    } \n" +
                     "} \n" +
                     "  \n" +
                     "/* l is for left index and r is right index of the \n" +
                     "   sub-array of arr to be sorted */\n" +
                     "void mergeSort(int arr[], int l, int r) \n" +
                     "{ \n" +
                     "    if (l < r) \n" +
                     "    { \n" +
                     "        // Same as (l+r)/2, but avoids overflow for \n" +
                     "        // large l and h \n" +
                     "        int m = l+(r-l)/2; \n" +
                     "  \n" +
                     "        // Sort first and second halves \n" +
                     "        mergeSort(arr, l, m); \n" +
                     "        mergeSort(arr, m+1, r); \n" +
                     "  \n" +
                     "        merge(arr, l, m, r); \n" +
                     "    } \n" +
                     "} ",desc:"روش مرتب‌سازی ادغامی (Merge Sort)  یک روش مرتب‌سازی مبتنی بر مقایسه‌ی عناصر با استفاده از روش تقسیم و غلبه است. این روش از مراحل بازگشتی زیر تشکیل یافته است:\n" +
                     "1- آرایه را به دو زیرآرایه با اندازه‌ی تقریبا یکسان تقسیم کن.\n" +
                     "2- دو زیرآرایه را به روش مرتب‌سازی ادغامی مرتب کن.\n" +
                     "3- دو زیرآرایه‌ی مرتب‌شده را ادغام کن.\n" +
                     "- پيچيدگي زمانی اجرای الگوریتم در تمامی حالات  ( O(nlogn  است؛ چرا که این الگوریتم تحت هر شرایطی آرایه را به دو قسمت کرده و مرتب‌سازی را انجام می‌دهد.\n" +
                     "2- پيچيدگي حافظه‌ی مصرفی بستگی به روش پیاده‌سازی مرحله‌ی ادغام دارد که تا  ( O(n  افزایش می‌یابد. پیاده‌سازی درجای این الگوریتم حافظه‌ی مصرفی مرتبه‌ی  ( O(1  دارد؛ اما اجرای آن در بدترین حالت زمان‌بَر است.\n" +
                     "3- الگوربتم مرتب‌سازی ادغامی با پیاده‌سازی فوق یک روش پایدار است. چنین الگوریتمی ترتیب عناصر با مقدار یکسان را پس از مرتب‌سازی حفظ می‌کند.\n"};
             break;
         case 'quick-sort':
             return {name:'quick-sort مرتب سازی سریع',type:'مرتب سازی',O:'nlogn',code:"// A utility function to swap two elements \n" +
                     "void swap(int* a, int* b) \n" +
                     "{ \n" +
                     "    int t = *a; \n" +
                     "    *a = *b; \n" +
                     "    *b = t; \n" +
                     "} \n" +
                     "  \n" +
                     "/* This function takes last element as pivot, places \n" +
                     "   the pivot element at its correct position in sorted \n" +
                     "    array, and places all smaller (smaller than pivot) \n" +
                     "   to left of pivot and all greater elements to right \n" +
                     "   of pivot */\n" +
                     "int partition (int arr[], int low, int high) \n" +
                     "{ \n" +
                     "    int pivot = arr[high];    // pivot \n" +
                     "    int i = (low - 1);  // Index of smaller element \n" +
                     "  \n" +
                     "    for (int j = low; j <= high- 1; j++) \n" +
                     "    { \n" +
                     "        // If current element is smaller than or \n" +
                     "        // equal to pivot \n" +
                     "        if (arr[j] <= pivot) \n" +
                     "        { \n" +
                     "            i++;    // increment index of smaller element \n" +
                     "            swap(&arr[i], &arr[j]); \n" +
                     "        } \n" +
                     "    } \n" +
                     "    swap(&arr[i + 1], &arr[high]); \n" +
                     "    return (i + 1); \n" +
                     "} \n" +
                     "  \n" +
                     "/* The main function that implements QuickSort \n" +
                     " arr[] --> Array to be sorted, \n" +
                     "  low  --> Starting index, \n" +
                     "  high  --> Ending index */\n" +
                     "void quickSort(int arr[], int low, int high) \n" +
                     "{ \n" +
                     "    if (low < high) \n" +
                     "    { \n" +
                     "        /* pi is partitioning index, arr[p] is now \n" +
                     "           at right place */\n" +
                     "        int pi = partition(arr, low, high); \n" +
                     "  \n" +
                     "        // Separately sort elements before \n" +
                     "        // partition and after partition \n" +
                     "        quickSort(arr, low, pi - 1); \n" +
                     "        quickSort(arr, pi + 1, high); \n" +
                     "    } \n" +
                     "} ",desc:"روش مرتب‌سازی سریع (Quick Sort)  یکی از الگوریتم‌های مشهور مرتب‌سازی داده‌ها است. این الگوریتم طی مراحل بازگشتی زیر یک روش تقسیم و غلبه برای مرتب کردن داده‌ها ارائه می‌نماید:\n" +
                     "انتخاب عنصر محوری: یکی از عناصر آرایه به عنوان عنصر محوری(pivot)  - به عنوان مثال عنصر اول-  انتخاب می‌شود.\n" +
                     "تقسیم آرایه: چینش عناصر آرایه به قسمی تغییر داده می‌شود که تمامی عناصر کوچکتر یا مساوی محور در سمت چپ آن و تمامی عناصر بزرگتر در سمت راست آن قرار بگیرند. این دو قسمت زیرآرایه‌های چپ و راست نامیده می‌شوند.\n" +
                     "مرتب‌سازی بازگشتی: زیرآرایه‌های چپ و راست به روش مرتب‌سازی سریع مرتب می‌شوند.\n" +
                     "- پيچيدگي زمانی اجرای الگوریتم در بهترین حالت ( O(nlogn و در بدترین حالت ( O(n^2  است. با استفاده محاسبات ریاضی می‌توان نشان داد در حالت متوسط نیز مرتبه‌ی اجرا ( O(nlogn است.\n" +
                     "این الگوریتم یک مرتب‌سازی درجا است. یعنی میزان حافظه‌ی مصرفی الگوریتم مستقل از طول آرایه است.\n" +
                     "زمانی که تعداد عناصر آرایه کم باشد، سرعت اجرای مرتب‌سازی درجی بهتر از مرتب‌سازی سریع است. به همین دلیل طی مراحل بازگشتی مرتب‌سازی سریع، اگر طول بازه عدد کوچکی باشد، معمولا بازه با مرتب‌سازی درجی مرتب می‌شود.\n" +
                     "الگوریتم مرتب‌سازی سریع با پیاده‌سازی فوق یک روش ناپایدار است. چنین الگوریتمی لزوما ترتیب عناصر با مقدار یکسان را پس از مرتب‌سازی حفظ نمی‌کند.\n" +
                     "انتخاب عنصر محوری بحث مفصلی دارد. اما در کل یک انتخاب آزاد است. می‌توان عنصر اول، عنصر آخر، یا هر عنصر دیگری را به عنوان عنصر محوری انتخاب کرد. حتی لازم نیست از ابتدا تا انتها از یک روش انتخاب استفاده کرد. یکی از روش‌های رایج، انتخاب یک عنصر تصادفی به عنوان عنصر محوری است. اگرچه انتخاب عنصر محوری مناسب باعث بالا رفتن کارایی الگوریتم می‌شود، اما عموما هزینه‌ی لازم برای یافتن چنین محوری بالا بوده و مقرون به صرفه نیست.\n"};
             break;
         case 'heap-sort':
             return {name:'heap-sort مرتب سازی هیپ',type:'مرتب سازی',O:'nlogn',code:"// To heapify a subtree rooted with node i which is \n" +
                     "// an index in arr[]. n is size of heap \n" +
                     "void heapify(int arr[], int n, int i) \n" +
                     "{ \n" +
                     "    int largest = i; // Initialize largest as root \n" +
                     "    int l = 2*i + 1; // left = 2*i + 1 \n" +
                     "    int r = 2*i + 2; // right = 2*i + 2 \n" +
                     "  \n" +
                     "    // If left child is larger than root \n" +
                     "    if (l < n && arr[l] > arr[largest]) \n" +
                     "        largest = l; \n" +
                     "  \n" +
                     "    // If right child is larger than largest so far \n" +
                     "    if (r < n && arr[r] > arr[largest]) \n" +
                     "        largest = r; \n" +
                     "  \n" +
                     "    // If largest is not root \n" +
                     "    if (largest != i) \n" +
                     "    { \n" +
                     "        swap(arr[i], arr[largest]); \n" +
                     "  \n" +
                     "        // Recursively heapify the affected sub-tree \n" +
                     "        heapify(arr, n, largest); \n" +
                     "    } \n" +
                     "} \n" +
                     "  \n" +
                     "// main function to do heap sort \n" +
                     "void heapSort(int arr[], int n) \n" +
                     "{ \n" +
                     "    // Build heap (rearrange array) \n" +
                     "    for (int i = n / 2 - 1; i >= 0; i--) \n" +
                     "        heapify(arr, n, i); \n" +
                     "  \n" +
                     "    // One by one extract an element from heap \n" +
                     "    for (int i=n-1; i>=0; i--) \n" +
                     "    { \n" +
                     "        // Move current root to end \n" +
                     "        swap(arr[0], arr[i]); \n" +
                     "  \n" +
                     "        // call max heapify on the reduced heap \n" +
                     "        heapify(arr, i, 0); \n" +
                     "    } \n" +
                     "} ",desc:"مرتب‌سازی هرمی(Heap Sort)  یکی از روش‌های مشهور مرتب‌سازی داده‌ها است که بر اساس خصوصیات درخت (heap هیپ، هرم یا کپه ) و عملکرد آن پیاده‌سازی شده است.\n" +
                     "بر اساس تعریف درخت heap، در یک max-heap)  min-heap) بزرگترین (کوچکترین) مقدار بین داده‌ها همواره در ریشه‌ی درخت قرار دارد. یافتن بزرگترین (کوچکترین) عنصر بین عناصر، هزینه‌ی ثابت  ( O(1  دارد. با حذف این عنصر از درخت، بزرگترین (کوچکترین) عنصر بعدی مجددا در ریشه قرار می‌گیرد .به این ترتیب با حذف متوالی عناصر درخت heap  و درج آنها در محل جدید، یک آرایه‌ی مرتب‌شده‌ی نزولی (یا صعودی) به دست خواهد آمد.\n" +
                     "برای مرتب‌کردن عناصر با استفاده از درخت heap، نیاز به n  عمل حذف گره ریشه از درخت عمل pop وجود دارد. عمل حذف گره ریشه در درخت heap  خود از مرتبه‌ی  ( O(logn است .در نتیجه کل این عملیات از مرتبه‌ی  ( O(nlogn  خواهد بود.\n" +
                     "نکته‌ی قابل توجه دیگر، ساخت درخت heap  از عناصر مورد نظر برای مرتب‌سازی است. در حالت عادی عناصر به صورت نامرتب و با چیدمان تصادفی در اختیار هر الگوریتم مرتب‌سازی قرار می‌گیرند. در این حالت یک هزینه‌ی زمانی دیگر برای ساخت درخت heap  از روی چنین لیستی مورد نیاز است.\nn"};
             break;
         case 'simple-matrix-multiple':
             return {name:'simple-matrix-multiple  ضرب معمولی ماتریس',type:'ضرب ماتریس',O:'n^3',code:"function multiply(a, b) {       \n" +
                     "          var aNumRows = a.length,\n" +
                     "aNumCols = a[0].length,bNumRows = b.length,\n" +
                     "bNumCols = b[0].length,\n" +
                     "              m = new Array(aNumRows);\n" +
                     "              for (var r = 0; r < aNumRows; ++r) {\n" +
                     "                   m[r] = new Array(bNumCols);\n" +
                     "                   for (var c = 0; c < bNumCols; ++c) {\n" +
                     "                       m[r][c] = 0;\n" +
                     "                       for (var i = 0; i < aNumCols; ++i) {\n" +
                     "                            m[r][c] += a[r][i] * b[i][c];\n" +
                     "                            }\n" +
                     "                       }\n" +
                     "                    }\n" +
                     "                return m;\n" +
                     "               }\n",desc:"ماتریس‌ها به طور ساده، همانند آرایه‌های دوبعدی اند. یک ماتریس n×m یعنی ماتریسی که n  سطر و m  ستون دارد (تعداد سطر‌ها و ستون‌ها می‌تواند برابر باشد). برای ضرب کردن دو ماتریس، باید تعداد ستون‌های اولی با تعداد سطر‌های دومی برابر باشد. ضرب‌کردن یک ماتریس n×m  در یک ماتریس m×p  به اندازه‌ی (O(n×m×p  هزینه (زمان) می‌برد و خروجی‌اش یک ماتریس n×p  است. اما اگر بیش از دو ماتریس داشته باشیم، این که به چه ترتیبی این ضرب‌ها را انجام بدهیم (یا چگونه بین ماتریس‌ها پرانتزگذاری کنیم) در هزینه‌ی نهایی تاثیر دارد (دقت کنید که جواب یکسان است، فقط هزینه‌ای که ما صرف می‌کنیم فرق می‌کند.( \n" +
                     "حافظه مورد نیاز از (2^O(n است. و هر به روزرسانی نیز از( O(n است. پس پیچیدگی زمانی از ( 3^O(n است. "};
             break;
         case 'strassen--matrix-multiple':
             return {name:'strassen-matrix-multiple  ضرب استراسن ماتریس',type:'ضرب ماتریس',O:'n^2.8',code:"/* Strassen's Algorithm for matrix multiplication \n" +
                     "   Complexity:    O(n^2.808) */\n" +
                     "  \n" +
                     "inline lld** MatrixMultiply(lld** a, lld** b, int n, \n" +
                     "                                      int l, int m) \n" +
                     "{ \n" +
                     "    lld** c = new lld*[n]; \n" +
                     "    for (int i = 0; i < n; i++) \n" +
                     "        c[i] = new lld[m]; \n" +
                     "  \n" +
                     "    for (int i = 0; i < n; i++) { \n" +
                     "        for (int j = 0; j < m; j++) { \n" +
                     "            c[i][j] = 0; \n" +
                     "            for (int k = 0; k < l; k++) { \n" +
                     "                c[i][j] += a[i][k] * b[k][j]; \n" +
                     "            } \n" +
                     "        } \n" +
                     "    } \n" +
                     "    return c; \n" +
                     "} \n" +
                     "  \n" +
                     "inline lld** Strassen(lld** a, lld** b, int n,  \n" +
                     "                                int l, int m) \n" +
                     "{ \n" +
                     "    if (n == 1 || l == 1 || m == 1)  \n" +
                     "        return MatrixMultiply(a, b, n, l, m); \n" +
                     "  \n" +
                     "    lld** c = new lld*[n]; \n" +
                     "    for (int i = 0; i < n; i++) \n" +
                     "        c[i] = new lld[m]; \n" +
                     "  \n" +
                     "    int adjN = (n >> 1) + (n & 1); \n" +
                     "    int adjL = (l >> 1) + (l & 1); \n" +
                     "    int adjM = (m >> 1) + (m & 1); \n" +
                     "  \n" +
                     "    lld**** As = new lld***[2]; \n" +
                     "    for (int x = 0; x < 2; x++) { \n" +
                     "        As[x] = new lld**[2]; \n" +
                     "        for (int y = 0; y < 2; y++) { \n" +
                     "            As[x][y] = new lld*[adjN]; \n" +
                     "            for (int i = 0; i < adjN; i++) { \n" +
                     "                As[x][y][i] = new lld[adjL]; \n" +
                     "                for (int j = 0; j < adjL; j++) { \n" +
                     "                    int I = i + (x & 1) * adjN; \n" +
                     "                    int J = j + (y & 1) * adjL; \n" +
                     "                    As[x][y][i][j] = (I < n && J < l) ? a[I][J] : 0; \n" +
                     "                } \n" +
                     "            } \n" +
                     "        } \n" +
                     "    } \n" +
                     "  \n" +
                     "    lld**** Bs = new lld***[2]; \n" +
                     "    for (int x = 0; x < 2; x++) { \n" +
                     "        Bs[x] = new lld**[2]; \n" +
                     "        for (int y = 0; y < 2; y++) { \n" +
                     "            Bs[x][y] = new lld*[adjN]; \n" +
                     "            for (int i = 0; i < adjL; i++) { \n" +
                     "                Bs[x][y][i] = new lld[adjM]; \n" +
                     "                for (int j = 0; j < adjM; j++) { \n" +
                     "                    int I = i + (x & 1) * adjL; \n" +
                     "                    int J = j + (y & 1) * adjM; \n" +
                     "                    Bs[x][y][i][j] = (I < l && J < m) ? b[I][J] : 0; \n" +
                     "                } \n" +
                     "            } \n" +
                     "        } \n" +
                     "    } \n" +
                     "  \n" +
                     "    lld*** s = new lld**[10]; \n" +
                     "    for (int i = 0; i < 10; i++) { \n" +
                     "        switch (i) { \n" +
                     "        case 0: \n" +
                     "            s[i] = new lld*[adjL]; \n" +
                     "            for (int j = 0; j < adjL; j++) { \n" +
                     "                s[i][j] = new lld[adjM]; \n" +
                     "                for (int k = 0; k < adjM; k++) { \n" +
                     "                    s[i][j][k] = Bs[0][1][j][k] - Bs[1][1][j][k]; \n" +
                     "                } \n" +
                     "            } \n" +
                     "            break; \n" +
                     "        case 1: \n" +
                     "            s[i] = new lld*[adjN]; \n" +
                     "            for (int j = 0; j < adjN; j++) { \n" +
                     "                s[i][j] = new lld[adjL]; \n" +
                     "                for (int k = 0; k < adjL; k++) { \n" +
                     "                    s[i][j][k] = As[0][0][j][k] + As[0][1][j][k]; \n" +
                     "                } \n" +
                     "            } \n" +
                     "            break; \n" +
                     "        case 2: \n" +
                     "            s[i] = new lld*[adjN]; \n" +
                     "            for (int j = 0; j < adjN; j++) { \n" +
                     "                s[i][j] = new lld[adjL]; \n" +
                     "                for (int k = 0; k < adjL; k++) { \n" +
                     "                    s[i][j][k] = As[1][0][j][k] + As[1][1][j][k]; \n" +
                     "                } \n" +
                     "            } \n" +
                     "            break; \n" +
                     "        case 3: \n" +
                     "            s[i] = new lld*[adjL]; \n" +
                     "            for (int j = 0; j < adjL; j++) { \n" +
                     "                s[i][j] = new lld[adjM]; \n" +
                     "                for (int k = 0; k < adjM; k++) { \n" +
                     "                    s[i][j][k] = Bs[1][0][j][k] - Bs[0][0][j][k]; \n" +
                     "                } \n" +
                     "            } \n" +
                     "            break; \n" +
                     "        case 4: \n" +
                     "            s[i] = new lld*[adjN]; \n" +
                     "            for (int j = 0; j < adjN; j++) { \n" +
                     "                s[i][j] = new lld[adjL]; \n" +
                     "                for (int k = 0; k < adjL; k++) { \n" +
                     "                    s[i][j][k] = As[0][0][j][k] + As[1][1][j][k]; \n" +
                     "                } \n" +
                     "            } \n" +
                     "            break; \n" +
                     "        case 5: \n" +
                     "            s[i] = new lld*[adjL]; \n" +
                     "            for (int j = 0; j < adjL; j++) { \n" +
                     "                s[i][j] = new lld[adjM]; \n" +
                     "                for (int k = 0; k < adjM; k++) { \n" +
                     "                    s[i][j][k] = Bs[0][0][j][k] + Bs[1][1][j][k]; \n" +
                     "                } \n" +
                     "            } \n" +
                     "            break; \n" +
                     "        case 6: \n" +
                     "            s[i] = new lld*[adjN]; \n" +
                     "            for (int j = 0; j < adjN; j++) { \n" +
                     "                s[i][j] = new lld[adjL]; \n" +
                     "                for (int k = 0; k < adjL; k++) { \n" +
                     "                    s[i][j][k] = As[0][1][j][k] - As[1][1][j][k]; \n" +
                     "                } \n" +
                     "            } \n" +
                     "            break; \n" +
                     "        case 7: \n" +
                     "            s[i] = new lld*[adjL]; \n" +
                     "            for (int j = 0; j < adjL; j++) { \n" +
                     "                s[i][j] = new lld[adjM]; \n" +
                     "                for (int k = 0; k < adjM; k++) { \n" +
                     "                    s[i][j][k] = Bs[1][0][j][k] + Bs[1][1][j][k]; \n" +
                     "                } \n" +
                     "            } \n" +
                     "            break; \n" +
                     "        case 8: \n" +
                     "            s[i] = new lld*[adjN]; \n" +
                     "            for (int j = 0; j < adjN; j++) { \n" +
                     "                s[i][j] = new lld[adjL]; \n" +
                     "                for (int k = 0; k < adjL; k++) { \n" +
                     "                    s[i][j][k] = As[0][0][j][k] - As[1][0][j][k]; \n" +
                     "                } \n" +
                     "            } \n" +
                     "            break; \n" +
                     "        case 9: \n" +
                     "            s[i] = new lld*[adjL]; \n" +
                     "            for (int j = 0; j < adjL; j++) { \n" +
                     "                s[i][j] = new lld[adjM]; \n" +
                     "                for (int k = 0; k < adjM; k++) { \n" +
                     "                    s[i][j][k] = Bs[0][0][j][k] + Bs[0][1][j][k]; \n" +
                     "                } \n" +
                     "            } \n" +
                     "            break; \n" +
                     "        } \n" +
                     "    } \n" +
                     "  \n" +
                     "    lld*** p = new lld**[7]; \n" +
                     "    p[0] = Strassen(As[0][0], s[0], adjN, adjL, adjM); \n" +
                     "    p[1] = Strassen(s[1], Bs[1][1], adjN, adjL, adjM); \n" +
                     "    p[2] = Strassen(s[2], Bs[0][0], adjN, adjL, adjM); \n" +
                     "    p[3] = Strassen(As[1][1], s[3], adjN, adjL, adjM); \n" +
                     "    p[4] = Strassen(s[4], s[5], adjN, adjL, adjM); \n" +
                     "    p[5] = Strassen(s[6], s[7], adjN, adjL, adjM); \n" +
                     "    p[6] = Strassen(s[8], s[9], adjN, adjL, adjM); \n" +
                     "  \n" +
                     "    for (int i = 0; i < adjN; i++) { \n" +
                     "        for (int j = 0; j < adjM; j++) { \n" +
                     "            c[i][j] = p[4][i][j] + p[3][i][j] - p[1][i][j] + p[5][i][j]; \n" +
                     "            if (j + adjM < m) \n" +
                     "                c[i][j + adjM] = p[0][i][j] + p[1][i][j]; \n" +
                     "            if (i + adjN < n) \n" +
                     "                c[i + adjN][j] = p[2][i][j] + p[3][i][j]; \n" +
                     "            if (i + adjN < n && j + adjM < m) \n" +
                     "                c[i + adjN][j + adjM] = p[4][i][j] + p[0][i][j] - p[2][i][j] - p[6][i][j]; \n" +
                     "        } \n" +
                     "    } \n" +
                     "  \n" +
                     "    for (int x = 0; x < 2; x++) { \n" +
                     "        for (int y = 0; y < 2; y++) { \n" +
                     "            for (int i = 0; i < adjN; i++) { \n" +
                     "                delete[] As[x][y][i]; \n" +
                     "            } \n" +
                     "            delete[] As[x][y]; \n" +
                     "        } \n" +
                     "        delete[] As[x]; \n" +
                     "    } \n" +
                     "    delete[] As; \n" +
                     "  \n" +
                     "    for (int x = 0; x < 2; x++) { \n" +
                     "        for (int y = 0; y < 2; y++) { \n" +
                     "            for (int i = 0; i < adjL; i++) { \n" +
                     "                delete[] Bs[x][y][i]; \n" +
                     "            } \n" +
                     "            delete[] Bs[x][y]; \n" +
                     "        } \n" +
                     "        delete[] Bs[x]; \n" +
                     "    } \n" +
                     "    delete[] Bs; \n" +
                     "  \n" +
                     "    for (int i = 0; i < 10; i++) { \n" +
                     "        switch (i) { \n" +
                     "        case 0: \n" +
                     "        case 3: \n" +
                     "        case 5: \n" +
                     "        case 7: \n" +
                     "        case 9: \n" +
                     "            for (int j = 0; j < adjL; j++) { \n" +
                     "                delete[] s[i][j]; \n" +
                     "            } \n" +
                     "            break; \n" +
                     "        case 1: \n" +
                     "        case 2: \n" +
                     "        case 4: \n" +
                     "        case 6: \n" +
                     "        case 8: \n" +
                     "            for (int j = 0; j < adjN; j++) { \n" +
                     "                delete[] s[i][j]; \n" +
                     "            } \n" +
                     "            break; \n" +
                     "        } \n" +
                     "        delete[] s[i]; \n" +
                     "    } \n" +
                     "    delete[] s; \n" +
                     "  \n" +
                     "    for (int i = 0; i < 7; i++) { \n" +
                     "        for (int j = 0; j < (n >> 1); j++) { \n" +
                     "            delete[] p[i][j]; \n" +
                     "        } \n" +
                     "        delete[] p[i]; \n" +
                     "    } \n" +
                     "    delete[] p; \n" +
                     "  \n" +
                     "    return c; \n" +
                     "} ",desc:"در این نوع ضرب بجای هست ضرب از هفت ضرب و چند عملیات جمع استفاده می شود که باعث کم شدن پیچیدگی زمانی می شود "};
             break;
         case 'simple-multiple':
             return {name:'simple-multiple ضرب معمولی',type:'ضرب عداد',O:'1',code:"",desc:""}
             break;
         case 'karatsuba-multiple':
             return {name:'karatsuba-multiple ضرب کاراتسوبا',type:'ضرب عداد',O:'1',code:"",desc:""}
             break;
         case 'maximum-sub-array':
             return {name:'maximum-sub-array زیر آرایه بیشینه',type:'تقسیم و حل',O:'n',code:"int maxCrossingSum(int arr[], int l, int m, int h) \n" +
                     "{ \n" +
                     "    // Include elements on left of mid. \n" +
                     "    int sum = 0; \n" +
                     "    int left_sum = INT_MIN; \n" +
                     "    for (int i = m; i >= l; i--) \n" +
                     "    { \n" +
                     "        sum = sum + arr[i]; \n" +
                     "        if (sum > left_sum) \n" +
                     "          left_sum = sum; \n" +
                     "    } \n" +
                     "  \n" +
                     "    // Include elements on right of mid \n" +
                     "    sum = 0; \n" +
                     "    int right_sum = INT_MIN; \n" +
                     "    for (int i = m+1; i <= h; i++) \n" +
                     "    { \n" +
                     "        sum = sum + arr[i]; \n" +
                     "        if (sum > right_sum) \n" +
                     "          right_sum = sum; \n" +
                     "    } \n" +
                     "  \n" +
                     "    // Return sum of elements on left and right of mid \n" +
                     "    return left_sum + right_sum; \n" +
                     "} \n" +
                     "  \n" +
                     "// Returns sum of maxium sum subarray in aa[l..h] \n" +
                     "int maxSubArraySum(int arr[], int l, int h) \n" +
                     "{ \n" +
                     "   // Base Case: Only one element \n" +
                     "   if (l == h) \n" +
                     "     return arr[l]; \n" +
                     "  \n" +
                     "   // Find middle point \n" +
                     "   int m = (l + h)/2; \n" +
                     "  \n" +
                     "   /* Return maximum of following three possible cases \n" +
                     "      a) Maximum subarray sum in left half \n" +
                     "      b) Maximum subarray sum in right half \n" +
                     "      c) Maximum subarray sum such that the subarray crosses the midpoint */\n" +
                     "   return max(maxSubArraySum(arr, l, m), \n" +
                     "              maxSubArraySum(arr, m+1, h), \n" +
                     "              maxCrossingSum(arr, l, m, h)); \n" +
                     "} \n",desc:"فرض کنید یک آرایه‌ی N عضوی شامل اعداد A1,A2,...,AN داریم به¬طوری که حداقل یکی از این اعداد مثبت باشد. می‌خواهیم i,j  را طوری انتخاب کنیم که حاصل جمع اعداد این بازه، بیشترین مقدار ممکن شود. "}
             break;
         case 'activity-selection':
             return {name:'activity-selection انتخاب فعالیت ها',type:'حریصانه',O:'n log n',code:"void printMaxActivities(int s[], int f[], int n) \n" +
                     "{ \n" +
                     "    int i, j; \n" +
                     "  \n" +
                     "    printf (\"Following activities are selected n\"); \n" +
                     "  \n" +
                     "    // The first activity always gets selected \n" +
                     "    i = 0; \n" +
                     "    printf(\"%d \", i); \n" +
                     "  \n" +
                     "    // Consider rest of the activities \n" +
                     "    for (j = 1; j < n; j++) \n" +
                     "    { \n" +
                     "      // If this activity has start time greater than or \n" +
                     "      // equal to the finish time of previously selected \n" +
                     "      // activity, then select it \n" +
                     "      if (s[j] >= f[i]) \n" +
                     "      { \n" +
                     "          printf (\"%d \", j); \n" +
                     "          i = j; \n" +
                     "      } \n" +
                     "    } \n" +
                     "} ",desc:"مسئله انتخاب فعالیت‌ها از مسائل بهینه‌سازی ریاضی است که می‌توان برای آن الگوریتمی به روش حریصانه تولید کرد. برای نمونه فرض کنید n سخنران خود را به عنوان ورودی مسئله اعلام کرده‌اند. هدف انتخاب بیشترین تعداد سخنران به گونه‌ای است که هیچ دو سخنرانی با هم اشتراک بازه زمانی نداشته باشند.\n" +
                     "جهت عدم تداخل در زمان شروع یا پایان می‌توان بدون کم‌شدن از کلیت مسئله فرض کرد که پایان بازه سخنرانی‌ها باز است یعنی به صورت (...} است. \n" +
                     "ورودی‌ها: \n" +
                     "هدف : انتخاب بیشترین تعداد فعالیت به¬قسمی که اشتراک بازه زمانی نداشته باشند.\n"}
             break;
         case 'huffman':
             return {name:'huffman هافمن',type:'حریصانه',O:'n log n',code:"  \n" +
                     "// This constant can be avoided by explicitly \n" +
                     "// calculating height of Huffman Tree \n" +
                     "#define MAX_TREE_HT 100 \n" +
                     "  \n" +
                     "// A Huffman tree node \n" +
                     "struct MinHeapNode { \n" +
                     "  \n" +
                     "    // One of the input characters \n" +
                     "    char data; \n" +
                     "  \n" +
                     "    // Frequency of the character \n" +
                     "    unsigned freq; \n" +
                     "  \n" +
                     "    // Left and right child of this node \n" +
                     "    struct MinHeapNode *left, *right; \n" +
                     "}; \n" +
                     "  \n" +
                     "// A Min Heap: Collection of \n" +
                     "// min heap (or Hufmman tree) nodes \n" +
                     "struct MinHeap { \n" +
                     "  \n" +
                     "    // Current size of min heap \n" +
                     "    unsigned size; \n" +
                     "  \n" +
                     "    // capacity of min heap \n" +
                     "    unsigned capacity; \n" +
                     "  \n" +
                     "    // Attay of minheap node pointers \n" +
                     "    struct MinHeapNode** array; \n" +
                     "}; \n" +
                     "  \n" +
                     "// A utility function allocate a new \n" +
                     "// min heap node with given character \n" +
                     "// and frequency of the character \n" +
                     "struct MinHeapNode* newNode(char data, unsigned freq) \n" +
                     "{ \n" +
                     "    struct MinHeapNode* temp \n" +
                     "        = (struct MinHeapNode*)malloc\n" +
                     "(sizeof(struct MinHeapNode)); \n" +
                     "  \n" +
                     "    temp->left = temp->right = NULL; \n" +
                     "    temp->data = data; \n" +
                     "    temp->freq = freq; \n" +
                     "  \n" +
                     "    return temp; \n" +
                     "} \n" +
                     "  \n" +
                     "// A utility function to create \n" +
                     "// a min heap of given capacity \n" +
                     "struct MinHeap* createMinHeap(unsigned capacity) \n" +
                     "  \n" +
                     "{ \n" +
                     "  \n" +
                     "    struct MinHeap* minHeap \n" +
                     "        = (struct MinHeap*)malloc(sizeof(struct MinHeap)); \n" +
                     "  \n" +
                     "    // current size is 0 \n" +
                     "    minHeap->size = 0; \n" +
                     "  \n" +
                     "    minHeap->capacity = capacity; \n" +
                     "  \n" +
                     "    minHeap->array \n" +
                     "        = (struct MinHeapNode**)malloc(minHeap-> \n" +
                     "capacity * sizeof(struct MinHeapNode*)); \n" +
                     "    return minHeap; \n" +
                     "} \n" +
                     "  \n" +
                     "// A utility function to \n" +
                     "// swap two min heap nodes \n" +
                     "void swapMinHeapNode(struct MinHeapNode** a, \n" +
                     "                    struct MinHeapNode** b) \n" +
                     "  \n" +
                     "{ \n" +
                     "  \n" +
                     "    struct MinHeapNode* t = *a; \n" +
                     "    *a = *b; \n" +
                     "    *b = t; \n" +
                     "} \n" +
                     "  \n" +
                     "// The standard minHeapify function. \n" +
                     "void minHeapify(struct MinHeap* minHeap, int idx) \n" +
                     "  \n" +
                     "{ \n" +
                     "  \n" +
                     "    int smallest = idx; \n" +
                     "    int left = 2 * idx + 1; \n" +
                     "    int right = 2 * idx + 2; \n" +
                     "  \n" +
                     "    if (left < minHeap->size && minHeap->array[left]-> \n" +
                     "freq < minHeap->array[smallest]->freq) \n" +
                     "        smallest = left; \n" +
                     "  \n" +
                     "    if (right < minHeap->size && minHeap->array[right]-> \n" +
                     "freq < minHeap->array[smallest]->freq) \n" +
                     "        smallest = right; \n" +
                     "  \n" +
                     "    if (smallest != idx) { \n" +
                     "        swapMinHeapNode(&minHeap->array[smallest], \n" +
                     "                        &minHeap->array[idx]); \n" +
                     "        minHeapify(minHeap, smallest); \n" +
                     "    } \n" +
                     "} \n" +
                     "  \n" +
                     "// A utility function to check \n" +
                     "// if size of heap is 1 or not \n" +
                     "int isSizeOne(struct MinHeap* minHeap) \n" +
                     "{ \n" +
                     "  \n" +
                     "    return (minHeap->size == 1); \n" +
                     "} \n" +
                     "  \n" +
                     "// A standard function to extract \n" +
                     "// minimum value node from heap \n" +
                     "struct MinHeapNode* extractMin(struct MinHeap* minHeap) \n" +
                     "  \n" +
                     "{ \n" +
                     "  \n" +
                     "    struct MinHeapNode* temp = minHeap->array[0]; \n" +
                     "    minHeap->array[0] \n" +
                     "        = minHeap->array[minHeap->size - 1]; \n" +
                     "  \n" +
                     "    --minHeap->size; \n" +
                     "    minHeapify(minHeap, 0); \n" +
                     "  \n" +
                     "    return temp; \n" +
                     "} \n" +
                     "  \n" +
                     "// A utility function to insert \n" +
                     "// a new node to Min Heap \n" +
                     "void insertMinHeap(struct MinHeap* minHeap, \n" +
                     "                struct MinHeapNode* minHeapNode) \n" +
                     "  \n" +
                     "{ \n" +
                     "  \n" +
                     "    ++minHeap->size; \n" +
                     "    int i = minHeap->size - 1; \n" +
                     "  \n" +
                     "    while (i && minHeapNode->freq < minHeap->array[(i - 1) / 2]->freq) { \n" +
                     "  \n" +
                     "        minHeap->array[i] = minHeap->array[(i - 1) / 2]; \n" +
                     "        i = (i - 1) / 2; \n" +
                     "    } \n" +
                     "  \n" +
                     "    minHeap->array[i] = minHeapNode; \n" +
                     "} \n" +
                     "  \n" +
                     "// A standard funvtion to build min heap \n" +
                     "void buildMinHeap(struct MinHeap* minHeap) \n" +
                     "  \n" +
                     "{ \n" +
                     "  \n" +
                     "    int n = minHeap->size - 1; \n" +
                     "    int i; \n" +
                     "  \n" +
                     "    for (i = (n - 1) / 2; i >= 0; --i) \n" +
                     "        minHeapify(minHeap, i); \n" +
                     "} \n" +
                     "  \n" +
                     "// A utility function to print an array of size n \n" +
                     "void printArr(int arr[], int n) \n" +
                     "{ \n" +
                     "    int i; \n" +
                     "    for (i = 0; i < n; ++i) \n" +
                     "        cout<< arr[i]; \n" +
                     "  \n" +
                     "    cout<<\"\\n\"; \n" +
                     "} \n" +
                     "  \n" +
                     "// Utility function to check if this node is leaf \n" +
                     "int isLeaf(struct MinHeapNode* root) \n" +
                     "  \n" +
                     "{ \n" +
                     "  \n" +
                     "    return !(root->left) && !(root->right); \n" +
                     "} \n" +
                     "  \n" +
                     "// Creates a min heap of capacity \n" +
                     "// equal to size and inserts all character of \n" +
                     "// data[] in min heap. Initially size of \n" +
                     "// min heap is equal to capacity \n" +
                     "struct MinHeap* createAndBuildMinHeap(char data[], int freq[], int size) \n" +
                     "  \n" +
                     "{ \n" +
                     "  \n" +
                     "    struct MinHeap* minHeap = createMinHeap(size); \n" +
                     "  \n" +
                     "    for (int i = 0; i < size; ++i) \n" +
                     "        minHeap->array[i] = newNode(data[i], freq[i]); \n" +
                     "  \n" +
                     "    minHeap->size = size; \n" +
                     "    buildMinHeap(minHeap); \n" +
                     "  \n" +
                     "    return minHeap; \n" +
                     "} \n" +
                     "  \n" +
                     "// The main function that builds Huffman tree \n" +
                     "struct MinHeapNode* buildHuffmanTree(char data[], int freq[], int size) \n" +
                     "  \n" +
                     "{ \n" +
                     "    struct MinHeapNode *left, *right, *top; \n" +
                     "  \n" +
                     "    // Step 1: Create a min heap of capacity \n" +
                     "    // equal to size. Initially, there are \n" +
                     "    // modes equal to size. \n" +
                     "    struct MinHeap* minHeap = createAndBuildMinHeap(data, freq, size); \n" +
                     "  \n" +
                     "    // Iterate while size of heap doesn't become 1 \n" +
                     "    while (!isSizeOne(minHeap)) { \n" +
                     "  \n" +
                     "        // Step 2: Extract the two minimum \n" +
                     "        // freq items from min heap \n" +
                     "        left = extractMin(minHeap); \n" +
                     "        right = extractMin(minHeap); \n" +
                     "  \n" +
                     "        // Step 3: Create a new internal \n" +
                     "        // node with frequency equal to the \n" +
                     "        // sum of the two nodes frequencies. \n" +
                     "        // Make the two extracted node as \n" +
                     "        // left and right children of this new node. \n" +
                     "        // Add this node to the min heap \n" +
                     "        // '$' is a special value for internal nodes, not used \n" +
                     "        top = newNode('$', left->freq + right->freq); \n" +
                     "  \n" +
                     "        top->left = left; \n" +
                     "        top->right = right; \n" +
                     "  \n" +
                     "        insertMinHeap(minHeap, top); \n" +
                     "    } \n" +
                     "  \n" +
                     "    // Step 4: The remaining node is the \n" +
                     "    // root node and the tree is complete. \n" +
                     "    return extractMin(minHeap); \n" +
                     "} \n" +
                     "  \n" +
                     "// Prints huffman codes from the root of Huffman Tree. \n" +
                     "// It uses arr[] to store codes \n" +
                     "void printCodes(struct MinHeapNode* root, int arr[], int top) \n" +
                     "  \n" +
                     "{ \n" +
                     "  \n" +
                     "    // Assign 0 to left edge and recur \n" +
                     "    if (root->left) { \n" +
                     "  \n" +
                     "        arr[top] = 0; \n" +
                     "        printCodes(root->left, arr, top + 1); \n" +
                     "    } \n" +
                     "  \n" +
                     "    // Assign 1 to right edge and recur \n" +
                     "    if (root->right) { \n" +
                     "  \n" +
                     "        arr[top] = 1; \n" +
                     "        printCodes(root->right, arr, top + 1); \n" +
                     "    } \n" +
                     "  \n" +
                     "    // If this is a leaf node, then \n" +
                     "    // it contains one of the input \n" +
                     "    // characters, print the character \n" +
                     "    // and its code from arr[] \n" +
                     "    if (isLeaf(root)) { \n" +
                     "  \n" +
                     "        cout<< root->data <<\": \"; \n" +
                     "        printArr(arr, top); \n" +
                     "    } \n" +
                     "} \n" +
                     "  \n" +
                     "// The main function that builds a \n" +
                     "// Huffman Tree and print codes by traversing \n" +
                     "// the built Huffman Tree \n" +
                     "void HuffmanCodes(char data[], int freq[], int size) \n" +
                     "  \n" +
                     "{ \n" +
                     "    // Construct Huffman Tree \n" +
                     "    struct MinHeapNode* root \n" +
                     "        = buildHuffmanTree(data, freq, size); \n" +
                     "  \n" +
                     "    // Print Huffman codes using \n" +
                     "    // the Huffman tree built above \n" +
                     "    int arr[MAX_TREE_HT], top = 0; \n" +
                     "  \n" +
                     "    printCodes(root, arr, top); \n" +
                     "} ",desc:"کد هافمن یکی از روش‌های فشرده‌سازی اطلاعات است. با کدگذاری مجدد کاراکترهای موجود در اطلاعات بر اساس میزان استفاده‌ی آنها، سعی در کم کردن حجم فایل می‌کند. بر اساس این روش، کاراکتری با استفاده‌ی بالا با کد کوتاه¬تر و کاراکتری با استفاده‌ی کم با کد طولانی‌تر جایگزین می‌شود."}
             break;
         case 'job-scheduling':
             return {name:'job-scheduling زمان بندی کار ها',type:'حریصانه',O:'n^2',code:"bool comparison(Job a, Job b) \n" +
                     "{ \n" +
                     "     return (a.profit > b.profit); \n" +
                     "} \n" +
                     "  \n" +
                     "// Returns minimum number of platforms reqquired \n" +
                     "void printJobScheduling(Job arr[], int n) \n" +
                     "{ \n" +
                     "    // Sort all jobs according to decreasing order of prfit \n" +
                     "    sort(arr, arr+n, comparison); \n" +
                     "  \n" +
                     "    int result[n]; // To store result (Sequence of jobs) \n" +
                     "    bool slot[n];  // To keep track of free time slots \n" +
                     "  \n" +
                     "    // Initialize all slots to be free \n" +
                     "    for (int i=0; i<n; i++) \n" +
                     "        slot[i] = false; \n" +
                     "  \n" +
                     "    // Iterate through all given jobs \n" +
                     "    for (int i=0; i<n; i++) \n" +
                     "    { \n" +
                     "       // Find a free slot for this job (Note that we start \n" +
                     "       // from the last possible slot) \n" +
                     "       for (int j=min(n, arr[i].dead)-1; j>=0; j--) \n" +
                     "       { \n" +
                     "          // Free slot found \n" +
                     "          if (slot[j]==false) \n" +
                     "          { \n" +
                     "             result[j] = i;  // Add this job to result \n" +
                     "             slot[j] = true; // Make this slot occupied \n" +
                     "             break; \n" +
                     "          } \n" +
                     "       } \n" +
                     "    } \n" +
                     "  \n" +
                     "    // Print the result \n" +
                     "    for (int i=0; i<n; i++) \n" +
                     "       if (slot[i]) \n" +
                     "         cout << arr[result[i]].id << \" \"; \n" +
                     "} \n" +
                     "  ",desc:"الگوریتم زمان بندی کار ها به این صورت است که حداکثر زمان مهلت کار و ارزش هر کار را می گیرد و بیشترین امتیاز را که کار ها را می توان انجام داد به ما بر می گرداند "}
             break;
         case 'bfs':
             return {name:'bfs جستجوی اول سطح',type:'پیمایش گراف',O:'n^2',code:"class Graph \n" +
                     "{ \n" +
                     "    int V;    // No. of vertices \n" +
                     "  \n" +
                     "    // Pointer to an array containing adjacency \n" +
                     "    // lists \n" +
                     "    list<int> *adj;    \n" +
                     "public: \n" +
                     "    Graph(int V);  // Constructor \n" +
                     "  \n" +
                     "    // function to add an edge to graph \n" +
                     "    void addEdge(int v, int w);  \n" +
                     "  \n" +
                     "    // prints BFS traversal from a given source s \n" +
                     "    void BFS(int s);   \n" +
                     "}; \n" +
                     "  \n" +
                     "Graph::Graph(int V) \n" +
                     "{ \n" +
                     "    this->V = V; \n" +
                     "    adj = new list<int>[V]; \n" +
                     "} \n" +
                     "  \n" +
                     "void Graph::addEdge(int v, int w) \n" +
                     "{ \n" +
                     "    adj[v].push_back(w); // Add w to v’s list. \n" +
                     "} \n" +
                     "  \n" +
                     "void Graph::BFS(int s) \n" +
                     "{ \n" +
                     "    // Mark all the vertices as not visited \n" +
                     "    bool *visited = new bool[V]; \n" +
                     "    for(int i = 0; i < V; i++) \n" +
                     "        visited[i] = false; \n" +
                     "  \n" +
                     "    // Create a queue for BFS \n" +
                     "    list<int> queue; \n" +
                     "  \n" +
                     "    // Mark the current node as visited and enqueue it \n" +
                     "    visited[s] = true; \n" +
                     "    queue.push_back(s); \n" +
                     "  \n" +
                     "    // 'i' will be used to get all adjacent \n" +
                     "    // vertices of a vertex \n" +
                     "    list<int>::iterator i; \n" +
                     "  \n" +
                     "    while(!queue.empty()) \n" +
                     "    { \n" +
                     "        // Dequeue a vertex from queue and print it \n" +
                     "        s = queue.front(); \n" +
                     "        cout << s << \" \"; \n" +
                     "        queue.pop_front(); \n" +
                     "  \n" +
                     "        // Get all adjacent vertices of the dequeued \n" +
                     "        // vertex s. If a adjacent has not been visited,  \n" +
                     "        // then mark it visited and enqueue it \n" +
                     "        for (i = adj[s].begin(); i != adj[s].end(); ++i) \n" +
                     "        { \n" +
                     "            if (!visited[*i]) \n" +
                     "            { \n" +
                     "                visited[*i] = true; \n" +
                     "                queue.push_back(*i); \n" +
                     "            } \n" +
                     "        } \n" +
                     "    } \n" +
                     "} ",desc:"الگوریتم پیمایش اول سطح یا جستجوی اول سطح (Breadth First Search - BFS)  از جمله الگوریتم‌های مشهور پیمایش و جستجوی گراف است که در حل مسائل الگوریتمی و هوش مصنوعی کاربرد دارد. این الگوریتم برای پیمایش و جستجوی گراف از یک صف برای نگهداری ترتیب جستجو استفاده می‌کند.\n" +
                     "در گراف (G = (V, E مرتبه‌ی زمانی الگوریتم جستجوی اول سطح (|O(|E|+|V   است؛ چرا که این الگوریتم در بزرگترین حالت تمامی گره‌ها را پیمایش کرده و نیاز به بررسی تمامی یال‌ها دارد. این مرتبه‌ی اجرایی در یک گراف همبند به صورت (|O(|E|+|V  بوده و در حالت کلی متناسب با تعداد یال‌ها حداکثر از مرتبه‌ی (O(n2 است."}
             break;
         case 'dfs':
             return {name:'dfs جستجوی اول عمق',type:'پیمایش گراف',O:'n^2',code:"class Graph \n" +
                     "{ \n" +
                     "    int V;    // No. of vertices \n" +
                     "  \n" +
                     "    // Pointer to an array containing \n" +
                     "    // adjacency lists \n" +
                     "    list<int> *adj; \n" +
                     "  \n" +
                     "    // A recursive function used by DFS \n" +
                     "    void DFSUtil(int v, bool visited[]); \n" +
                     "public: \n" +
                     "    Graph(int V);   // Constructor \n" +
                     "  \n" +
                     "    // function to add an edge to graph \n" +
                     "    void addEdge(int v, int w); \n" +
                     "  \n" +
                     "    // DFS traversal of the vertices \n" +
                     "    // reachable from v \n" +
                     "    void DFS(int v); \n" +
                     "}; \n" +
                     "  \n" +
                     "Graph::Graph(int V) \n" +
                     "{ \n" +
                     "    this->V = V; \n" +
                     "    adj = new list<int>[V]; \n" +
                     "} \n" +
                     "  \n" +
                     "void Graph::addEdge(int v, int w) \n" +
                     "{ \n" +
                     "    adj[v].push_back(w); // Add w to v’s list. \n" +
                     "} \n" +
                     "  \n" +
                     "void Graph::DFSUtil(int v, bool visited[]) \n" +
                     "{ \n" +
                     "    // Mark the current node as visited and \n" +
                     "    // print it \n" +
                     "    visited[v] = true; \n" +
                     "    cout << v << \" \"; \n" +
                     "  \n" +
                     "    // Recur for all the vertices adjacent \n" +
                     "    // to this vertex \n" +
                     "    list<int>::iterator i; \n" +
                     "    for (i = adj[v].begin(); i != adj[v].end(); ++i) \n" +
                     "        if (!visited[*i]) \n" +
                     "            DFSUtil(*i, visited); \n" +
                     "} \n" +
                     "  \n" +
                     "// DFS traversal of the vertices reachable from v. \n" +
                     "// It uses recursive DFSUtil() \n" +
                     "void Graph::DFS(int v) \n" +
                     "{ \n" +
                     "    // Mark all the vertices as not visited \n" +
                     "    bool *visited = new bool[V]; \n" +
                     "    for (int i = 0; i < V; i++) \n" +
                     "        visited[i] = false; \n" +
                     "  \n" +
                     "    // Call the recursive helper function \n" +
                     "    // to print DFS traversal \n" +
                     "    DFSUtil(v, visited); \n" +
                     "} ",desc:"الگوریتم جستجوی اول عمق (Depth First Search - DFS)  الگوریتمی برای پیمایش گراف است. این دو الگوریتم خواص و کاربردهای مشترک بسیاری دارند و تفاوت اصلی در این است که در هر تکرار الگوریتم DFS  تنها یکی از گره‌های مجاور گره پردازش شده برای مرحله‌ی بعد انتخاب می‌شود. به این ترتیب، الگوریتم DFS  به جای صف از یک پشته برای مشخص کردن مسیر پیمایش استفاده می‌کند.\n" +
                     "\tمرتبه‌ی زمانی اجرای الگوریتم جستجوی اول عمق برای گراف G=(V,E) برابر O(|V|+|E|)  است؛ چرا که این الگوریتم در بزرگترین حالت تمامی گره‌ها را پیمایش کرده و نیاز به بررسی تمامی یال‌ها دارد. این مرتبه‌ی اجرایی در یک گراف همبند به صورت O(|E|) بوده و در حالت کلی متناسب با تعداد یال‌ها حداکثر از مرتبه‌ی O(n2) است."}
             break;
         case 'prim':
             return {name:'prim پریم',type:'درخت پوشای مینیمال',O:'n^2',code:"int minKey(int key[], bool mstSet[]) \n" +
                     "{ \n" +
                     "// Initialize min value \n" +
                     "int min = INT_MAX, min_index; \n" +
                     "  \n" +
                     "for (int v = 0; v < V; v++) \n" +
                     "    if (mstSet[v] == false && key[v] < min) \n" +
                     "        min = key[v], min_index = v; \n" +
                     "  \n" +
                     "return min_index; \n" +
                     "} \n" +
                     "  \n" +
                     "// A utility function to print the  \n" +
                     "// constructed MST stored in parent[] \n" +
                     "int printMST(int parent[], int n, int graph[V][V]) \n" +
                     "{ \n" +
                     "printf(\"Edge \\tWeight\\n\"); \n" +
                     "for (int i = 1; i < V; i++) \n" +
                     "    printf(\"%d - %d \\t%d \\n\", parent[i], i, graph[i][parent[i]]); \n" +
                     "} \n" +
                     "  \n" +
                     "// Function to construct and print MST for  \n" +
                     "// a graph represented using adjacency  \n" +
                     "// matrix representation \n" +
                     "void primMST(int graph[V][V]) \n" +
                     "{ \n" +
                     "    // Array to store constructed MST \n" +
                     "    int parent[V];  \n" +
                     "    // Key values used to pick minimum weight edge in cut \n" +
                     "    int key[V];  \n" +
                     "    // To represent set of vertices not yet included in MST \n" +
                     "    bool mstSet[V];  \n" +
                     "  \n" +
                     "    // Initialize all keys as INFINITE \n" +
                     "    for (int i = 0; i < V; i++) \n" +
                     "        key[i] = INT_MAX, mstSet[i] = false; \n" +
                     "  \n" +
                     "    // Always include first 1st vertex in MST. \n" +
                     "    // Make key 0 so that this vertex is picked as first vertex. \n" +
                     "    key[0] = 0;      \n" +
                     "    parent[0] = -1; // First node is always root of MST  \n" +
                     "  \n" +
                     "    // The MST will have V vertices \n" +
                     "    for (int count = 0; count < V-1; count++) \n" +
                     "    { \n" +
                     "        // Pick the minimum key vertex from the  \n" +
                     "        // set of vertices not yet included in MST \n" +
                     "        int u = minKey(key, mstSet); \n" +
                     "  \n" +
                     "        // Add the picked vertex to the MST Set \n" +
                     "        mstSet[u] = true; \n" +
                     "  \n" +
                     "        // Update key value and parent index of  \n" +
                     "        // the adjacent vertices of the picked vertex.  \n" +
                     "        // Consider only those vertices which are not  \n" +
                     "        // yet included in MST \n" +
                     "        for (int v = 0; v < V; v++) \n" +
                     "  \n" +
                     "        // graph[u][v] is non zero only for adjacent vertices of m \n" +
                     "        // mstSet[v] is false for vertices not yet included in MST \n" +
                     "        // Update the key only if graph[u][v] is smaller than key[v] \n" +
                     "        if (graph[u][v] && mstSet[v] == false && graph[u][v] < key[v]) \n" +
                     "            parent[v] = u, key[v] = graph[u][v]; \n" +
                     "    } \n" +
                     "  \n" +
                     "    // print the constructed MST \n" +
                     "    printMST(parent, V, graph); \n" +
                     "} ",desc:"الگوریتم پریم، الگوریتمی برای پیدا کردن درخت پوشای کمینه یک گراف وزن‌دار است که مشابه الگوریتم دایکسترا برای درخت کوتاه‌ترین مسیر است. \n" +
                     "در روش پریم ابتدا یک راس را انتخاب می‌کنیم. سپس کم وزن‌ترین یال‌های این راس را به عنوان یک یال درخت انتخاب می‌کنیم. حال بین یال های این دو راس کم‌وزن‌ترین یال را پیدا کرده و به عنوان عضوی از درخت انتخاب می‌کنیم. حال بین یال‌های این سه راس کم‌وزن‌ترین را انتخاب می‌کنیم. همینطور ادامه می‌دهیم تا درخت کامل شود. باید توجه داشت که یالی که هر بار اضافه می‌کنیم \n" +
                     "یک روش خوب برای بهینه کردن الگوریتم نگه داشتن کم‌ترین فاصله‌ی هر راس تا راس‌های انتخابی است. وقتی یک راس به مجموعه‌ی ما اضافه شد، فاصله‌ی بقیه راس‌ها را به روز می‌کنیم. در این صورت هر بار برای پیدا کردن راس نزدیک‌تر و به روز رسانی (O(n عملیات انجام می‌دهیم و چون  n بار این کار انجام می‌دهیم، پیچیدگی کل الگوریتم (O(n2  می‌شود. اگر فاصله‌ هر راس تا نزدیک‌‌ترین راس از بین راس‌هایی که در مجموعه قرار گرفته‌اند را در داده‌ساختاری مناسب ذخیره کنیم می‌توانیم پیچیدگی الگوریتم را بهتر کنیم. اگر این داده‌ساختار هرم کمینه باشد، چون حذف و اضافه از (O(logn  است و به ازای یال حداکثر یک بار عملیات اضافه کردن رخ می‌دهد و چون قطعا تعداد عملیات حذف کم‌تر از تعداد عملیات اضافه کردن است پیچیدگی الگوریتم به (O(mlogn+n  تغییر می‌کند که برای حالاتی که تعداد یال‌ها از (θ(n2logn کم‌تر باشد پیچیدگی کل کاهش پیدا می‌کند. حال اگر از هرم فیبوناچی استفاده کنیم پیچیدگی به (O(m+n کاهش پیدا می‌کند."}
             break;
         case 'kruskals':
             return {name:'kruskals کراسکال',type:'درخت پوشای مینیمال',O:'mlogn+n^2',code:"struct Edge \n" +
                     "{ \n" +
                     "    int src, dest, weight; \n" +
                     "}; \n" +
                     "  \n" +
                     "// a structure to represent a connected, undirected \n" +
                     "// and weighted graph \n" +
                     "struct Graph \n" +
                     "{ \n" +
                     "    // V-> Number of vertices, E-> Number of edges \n" +
                     "    int V, E; \n" +
                     "  \n" +
                     "    // graph is represented as an array of edges.  \n" +
                     "    // Since the graph is undirected, the edge \n" +
                     "    // from src to dest is also edge from dest \n" +
                     "    // to src. Both are counted as 1 edge here. \n" +
                     "    struct Edge* edge; \n" +
                     "}; \n" +
                     "  \n" +
                     "// Creates a graph with V vertices and E edges \n" +
                     "struct Graph* createGraph(int V, int E) \n" +
                     "{ \n" +
                     "    struct Graph* graph = new Graph; \n" +
                     "    graph->V = V; \n" +
                     "    graph->E = E; \n" +
                     "  \n" +
                     "    graph->edge = new Edge[E]; \n" +
                     "  \n" +
                     "    return graph; \n" +
                     "} \n" +
                     "  \n" +
                     "// A structure to represent a subset for union-find \n" +
                     "struct subset \n" +
                     "{ \n" +
                     "    int parent; \n" +
                     "    int rank; \n" +
                     "}; \n" +
                     "  \n" +
                     "// A utility function to find set of an element i \n" +
                     "// (uses path compression technique) \n" +
                     "int find(struct subset subsets[], int i) \n" +
                     "{ \n" +
                     "    // find root and make root as parent of i  \n" +
                     "    // (path compression) \n" +
                     "    if (subsets[i].parent != i) \n" +
                     "        subsets[i].parent = find(subsets, subsets[i].parent); \n" +
                     "  \n" +
                     "    return subsets[i].parent; \n" +
                     "} \n" +
                     "  \n" +
                     "// A function that does union of two sets of x and y \n" +
                     "// (uses union by rank) \n" +
                     "void Union(struct subset subsets[], int x, int y) \n" +
                     "{ \n" +
                     "    int xroot = find(subsets, x); \n" +
                     "    int yroot = find(subsets, y); \n" +
                     "  \n" +
                     "    // Attach smaller rank tree under root of high  \n" +
                     "    // rank tree (Union by Rank) \n" +
                     "    if (subsets[xroot].rank < subsets[yroot].rank) \n" +
                     "        subsets[xroot].parent = yroot; \n" +
                     "    else if (subsets[xroot].rank > subsets[yroot].rank) \n" +
                     "        subsets[yroot].parent = xroot; \n" +
                     "  \n" +
                     "    // If ranks are same, then make one as root and  \n" +
                     "    // increment its rank by one \n" +
                     "    else\n" +
                     "    { \n" +
                     "        subsets[yroot].parent = xroot; \n" +
                     "        subsets[xroot].rank++; \n" +
                     "    } \n" +
                     "} \n" +
                     "  \n" +
                     "// Compare two edges according to their weights. \n" +
                     "// Used in qsort() for sorting an array of edges \n" +
                     "int myComp(const void* a, const void* b) \n" +
                     "{ \n" +
                     "    struct Edge* a1 = (struct Edge*)a; \n" +
                     "    struct Edge* b1 = (struct Edge*)b; \n" +
                     "    return a1->weight > b1->weight; \n" +
                     "} \n" +
                     "  \n" +
                     "// The main function to construct MST using Kruskal's algorithm \n" +
                     "void KruskalMST(struct Graph* graph) \n" +
                     "{ \n" +
                     "    int V = graph->V; \n" +
                     "    struct Edge result[V];  // Tnis will store the resultant MST \n" +
                     "    int e = 0;  // An index variable, used for result[] \n" +
                     "    int i = 0;  // An index variable, used for sorted edges \n" +
                     "  \n" +
                     "    // Step 1:  Sort all the edges in non-decreasing  \n" +
                     "    // order of their weight. If we are not allowed to  \n" +
                     "    // change the given graph, we can create a copy of \n" +
                     "    // array of edges \n" +
                     "    qsort(graph->edge, graph->E, sizeof(graph->edge[0]), myComp); \n" +
                     "  \n" +
                     "    // Allocate memory for creating V ssubsets \n" +
                     "    struct subset *subsets = \n" +
                     "        (struct subset*) malloc( V * sizeof(struct subset) ); \n" +
                     "  \n" +
                     "    // Create V subsets with single elements \n" +
                     "    for (int v = 0; v < V; ++v) \n" +
                     "    { \n" +
                     "        subsets[v].parent = v; \n" +
                     "        subsets[v].rank = 0; \n" +
                     "    } \n" +
                     "  \n" +
                     "    // Number of edges to be taken is equal to V-1 \n" +
                     "    while (e < V - 1) \n" +
                     "    { \n" +
                     "        // Step 2: Pick the smallest edge. And increment  \n" +
                     "        // the index for next iteration \n" +
                     "        struct Edge next_edge = graph->edge[i++]; \n" +
                     "  \n" +
                     "        int x = find(subsets, next_edge.src); \n" +
                     "        int y = find(subsets, next_edge.dest); \n" +
                     "  \n" +
                     "        // If including this edge does't cause cycle, \n" +
                     "        // include it in result and increment the index  \n" +
                     "        // of result for next edge \n" +
                     "        if (x != y) \n" +
                     "        { \n" +
                     "            result[e++] = next_edge; \n" +
                     "            Union(subsets, x, y); \n" +
                     "        } \n" +
                     "        // Else discard the next_edge \n" +
                     "    } \n" +
                     "  \n" +
                     "    // print the contents of result[] to display the \n" +
                     "    // built MST \n" +
                     "    printf(\"Following are the edges in the constructed MST\\n\"); \n" +
                     "    for (i = 0; i < e; ++i) \n" +
                     "        printf(\"%d -- %d == %d\\n\", result[i].src, result[i].dest, \n" +
                     "                                                 result[i].weight); \n" +
                     "    return; \n" +
                     "} ",desc:"الگوریتم کراسکال، الگوریتم برای پیدا کردن درخت پوشای کمینه یک گراف وزن‌دار است. این الگوریتم بر خلاف الگوریتم پریم لزوما اجزایی که در حین اجرا جزء درخت پوشای کمینه تشخیص می‌دهد همبند نیستند و تنها تضمین می‌کند که در پایان این شرط برقرار است. \n" +
                     "در این الگوریتم، یال‌ها را بر اساس وزن به صورت صعودی مرتب می‌کنیم. سپس از اولین یال شروع می‌کنیم و هر یالی را که با یال‌هایی که قبلا انتخاب کردیم دور نمی‌سازد انتخاب می‌کنیم. تا جایی که درخت تشکیل شود. \n" +
                     "مرتب کردن یال ها و بررسی یال‌ها از (O(m+mlogn است که برابر (O(mlogn  است و هر‌بار اتصال دو مولفه از (O(n  است که چون اتصال n−1  بار انجام می‌شود پیچیدگی الگوریتم (O(mlogn+n^2 می‌شود. "}

             break;
         case 'dijkstras':
             return {name:'kruskals کراسکال',type:'درخت پوشای مینیمال',O:'n^2',code:"int minDistance(int dist[], bool sptSet[]) \n" +
                     "{ \n" +
                     "   // Initialize min value \n" +
                     "   int min = INT_MAX, min_index; \n" +
                     "   \n" +
                     "   for (int v = 0; v < V; v++) \n" +
                     "     if (sptSet[v] == false && dist[v] <= min) \n" +
                     "         min = dist[v], min_index = v; \n" +
                     "   \n" +
                     "   return min_index; \n" +
                     "} \n" +
                     "   \n" +
                     "// A utility function to print the constructed distance array \n" +
                     "int printSolution(int dist[], int n) \n" +
                     "{ \n" +
                     "   printf(\"Vertex   Distance from Source\\n\"); \n" +
                     "   for (int i = 0; i < V; i++) \n" +
                     "      printf(\"%d tt %d\\n\", i, dist[i]); \n" +
                     "} \n" +
                     "   \n" +
                     "// Function that implements Dijkstra's single source shortest path algorithm \n" +
                     "// for a graph represented using adjacency matrix representation \n" +
                     "void dijkstra(int graph[V][V], int src) \n" +
                     "{ \n" +
                     "     int dist[V];     // The output array.  dist[i] will hold the shortest \n" +
                     "                      // distance from src to i \n" +
                     "   \n" +
                     "     bool sptSet[V]; // sptSet[i] will be true if vertex i is included in shortest \n" +
                     "                     // path tree or shortest distance from src to i is finalized \n" +
                     "   \n" +
                     "     // Initialize all distances as INFINITE and stpSet[] as false \n" +
                     "     for (int i = 0; i < V; i++) \n" +
                     "        dist[i] = INT_MAX, sptSet[i] = false; \n" +
                     "   \n" +
                     "     // Distance of source vertex from itself is always 0 \n" +
                     "     dist[src] = 0; \n" +
                     "   \n" +
                     "     // Find shortest path for all vertices \n" +
                     "     for (int count = 0; count < V-1; count++) \n" +
                     "     { \n" +
                     "       // Pick the minimum distance vertex from the set of vertices not \n" +
                     "       // yet processed. u is always equal to src in the first iteration. \n" +
                     "       int u = minDistance(dist, sptSet); \n" +
                     "   \n" +
                     "       // Mark the picked vertex as processed \n" +
                     "       sptSet[u] = true; \n" +
                     "   \n" +
                     "       // Update dist value of the adjacent vertices of the picked vertex. \n" +
                     "       for (int v = 0; v < V; v++) \n" +
                     "   \n" +
                     "         // Update dist[v] only if is not in sptSet, there is an edge from  \n" +
                     "         // u to v, and total weight of path from src to  v through u is  \n" +
                     "         // smaller than current value of dist[v] \n" +
                     "         if (!sptSet[v] && graph[u][v] && dist[u] != INT_MAX  \n" +
                     "                                       && dist[u]+graph[u][v] < dist[v]) \n" +
                     "            dist[v] = dist[u] + graph[u][v]; \n" +
                     "     } \n" +
                     "   \n" +
                     "     // print the constructed distance array \n" +
                     "     printSolution(dist, V); \n" +
                     "} ",desc:"الگوریتم دایکسترا (دیکسترا، دایجسترا - Dijkstra) یک راهکار حریصانه برای یافتن کوتاهترین مسیر از مقصد ثابت( تک منبع)به سایر گره‌های گراف وزن‌دار است. این گراف می‌تواند معرف مسیرهای یک شهر و تقاطع‌های آن باشد که انبار شرکت در یک گره آن قرار داشته و هدف یافتن کوتاهترین مسیر به هر محل دیگر از این انبار است. طبیعتا این الگوریتم در یافتن کوتاهترین مسیر بین دو گره مشخص نیز کاربرد دارد. تنها شرط لازم برای استفاده از این الگوریتم نامنفی بودن وزن یال‌های گراف است.\n" +
                     "الگوریتم دایکسترا به صورت حریصانه عمل کرده و در تکرارهای متوالی طول کوتاهترین مسیر از مبدأ به یکی از گره‌های گراف را به دست می‌آورد. در این الگوریتم از سه مجموعه استفاده می‌شود:\n" +
                     "مجموعه‌ی D که اعضای آن به صورت di  نمایش داده شده و بیانگر کوتاهترین مسیر از مبدأ به گره vi  در پایان هر تکرار الگوریتم است. این مقادیر در ابتدا به ازای تمامی گره‌ها برابر ∞ است.\n" +
                     "مجموعه‌ی P که اعضای آن به صورت pi  نمایش داده شده و در پایان هر تکرار گره پیشین گره vi را که گره مبدأ از طریق آن به این گره در کوتاهترین مسیر دسترسی دارد، مشخص می‌کند. این مقادیر در ابتدا برای هیچ‌کدام از گره‌ها تعریف شده نبوده و در تکرارهای آن مقداردهی می‌شوند.\n" +
                     "مجموعه‌ی U که اعضای آن گره‌های بررسی نشده در الگوریتم است. این مجموعه در ابتدا شامل تمامی گره‌های گراف است.\n" +
                     "در قطعه کد ساده‌ی فوق تعداد تکرار حلقه‌ی while در بدترین حالت برابر تعداد گره‌های گراف است. در نتیجه این کد در مرتبه‌ی زمانی (O(n^2 اجرا می‌شود. در حالت کلی برای گراف وزن‌دار (G=(V,E  تعداد یال‌های مورد نیاز برای بررسی از مرتبه‌ی(|E|تعداد اعضای مجموعه‌ی E)  است که یک حد پایین برای مرتبه‌ی زمانی اجرای الگوریتم‌ها را نشان می‌دهد. این مرتبه در یک گراف کامل یا نسبتا پر همان مرتبه‌ی (O(n^2 است. تا کنون راهکارهای متعددی برای کاهش عملیات یا حافظه‌ی مصرفی ارائه شده است؛ اما به طور طبیعی عملکرد همگی آنها ارتباط مستقیم با تعداد یال‌های گراف دارند که در حالت کلی از مرتبه‌ی (O(n^2 است."}
             break;
     }
 }

 module.exports ={analyzeAlgorithm,helpAlgorithm,descriptionAlgorithm};
