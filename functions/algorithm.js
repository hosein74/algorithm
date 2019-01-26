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
                            [8,5,9,1],

                        ]
                    ];
                    if (data)
                        mmdata = data;
                    var stack = [];

                    for (let i = 0; i < mmdata.length-1; i=i+2) {
                        var simplematrixmultipleCounter = 0;
                        var simplematrixmultipleArray = mmdata[i].map(d => d);

                        function multiply(a, b) {
                            stack.push([[a.length,a[0].length],[b.length,b[0].length]])
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

                        var d = process.hrtime();
                        t = multiply(mmdata[i], mmdata[i+1]);
                        t = simplematrixmultipleCounter;
                        times.push(t);
                    }
                    console.log(mmdata);
                    console.log(stack)
                    return {data:stack,times:times};
                    break;
             case 'strassen--matrix-multiple':
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
                 if (data)
                     smmdata = data;
                 var stack = [];

                 for (let i = 0; i < smmdata.length-1; i=i+2) {
                     var simplematrixmultipleCounter = 0;
                     var simplematrixmultipleArray = smmdata[i].map(d => d);


                     var d = process.hrtime();
                     t = multiply(mmdata[i], mmdata[i+1]);
                     t = simplematrixmultipleCounter;
                     times.push(t);
                 }
                 console.log(mmdata);
                 console.log(stack)
                 return {data:stack,times:times};
                 break;
             case 'simple-multiple':
                 var stack = [];
                 let smdata = [2469,455552,2324,32424,12313,1342];
                 if (data)
                     smdata = data;
             function  SimpleMultiple(a,b) {
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

                 for (let i = 0; i < smdata.length-1; i=i+2) {
                     stack.push([smdata[i],smdata[i+1]]);
                     var simplemultipleCounter = 0;
                   //  var simplemultipleArray = smdata[i].map(d => d);
                     var array_length = smdata.length
                     var d = process.hrtime();
                     t = SimpleMultiple(smdata[i],smdata[i+1]);
                     t = simplemultipleCounter;
                     times.push(t);
                 }
                 return {data:stack,times:times};
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
             function myCompare(a,b) {
                 activityselectionCounter++;
                 if (a.end > b.end)
                     return 1;
                 else if (a.end < b.end)
                     return -1;
                 else
                     return 0;

             }
                 function printMaxActivities(arr) {
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
                         myActivites.sort(myCompare);

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
                 let asdata = [[[5, 1, 3, 0, 5, 8,1],[9 ,2 ,4 ,6 ,7 ,9,8]],[[5, 6, 3, 1, 5, 8,9,10],[9 ,8 ,4 ,10 ,7 ,9,8,11]]];
                 if (data)
                     asdata = data;
                 var stack = [];

                 for (let i = 0; i < asdata.length; i++) {
                     var activityselectionCounter = 0;
                     var activityselectionArray = asdata[i].map(d => d);

                     var d = process.hrtime();
                     t=printMaxActivities(asdata[i])
                     t = activityselectionCounter;
                     times.push(t);
                 }
                 console.log(asdata);
                 console.log(stack)
                 return {data:asdata,times:times};
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
                             result += dict[data.charAt(i)];
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
                 let hfdata = ['asdasdfgfdsasdfs','qwsxcvfdsgfdvhgnbcdfgrewd','asdsasdsasdsasd'];
                 if (data)
                     hfdata = data;
                 var stack = [];
                 for (let i = 0; i < hfdata.length; i++) {
                     var huffmanCounter = 0;
                  //   var huffmanArray = hfdata[i].map(d => d);

                     var d = process.hrtime();
                     t= Huffman.encode(hfdata[i]);
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
                 let jsdata =    [[[3, 6, 1, 4, 6,2,3,5],[20 ,19 ,27 ,25 ,15,50,50,10]],[[5, 3, 4, 4, 2,1,3,5],[20 ,20 ,15 ,10 ,15,40,50,10]]];
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
                if (data)
                     dfsdata = data;
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
                 if (data)
                     bfsdata = data;
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

                 if (data)
                     primdata = data;
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

                 if (data)
                     kruskalsdata = data;
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

                 if (data)
                     dijkstrasdata = data;
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

     return times;

 }
module.exports =analyzeAlgorithm;
