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




 const analyzeAlgorithm = function (type,data)
 {
    var times = [];
    var t;
     for (let i = 0; i <data.length ; i++)
     {
         console.log(data[i])
         switch (type) {
             case 'bubble-sort':
                 t= bubbleSort(data[i].map(d=>d))
                 console.log(t)
                 times.push(t);
                 break;
             case 'selection-sort':
                 t= selectionSort(data[i].map(d=>d))
                 console.log(t)
                 times.push(t);
                 break;
             case 'insertion-sort':
                 t= insertionSort(data[i].map(d=>d))
                 console.log(t)
                 times.push(t);
                 break;
             case 'merge-sort':
             var mergesortCounter =0;
             var mergeSortArray = data[i].map(d=>d);

         function mergeSort (arr) {

             if (arr.length === 1) {
                 // return once we hit an array with a single item
                 return arr
             }
             const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
             const left = arr.slice(0, middle) // items on the left side
             const right = arr.slice(middle) // items on the right side
             mergesortCounter ++;
             return  merge(
                 mergeSort(left),
                 mergeSort(right)
             )
         }

             // compare the arrays item by item and return the concatenated result
         function merge (left, right) {
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
             while (indexLeft < left.length)
             {
                 mergesortCounter++;
                 result.push(left[indexLeft]);
                 indexLeft++
             }
             while (indexRight < right.length)
             {
                 mergesortCounter++;
                 result.push(right[indexRight]);
                 indexRight++
             }
             return result;
         }

             var d = process.hrtime()
             t= mergeSort(data[i].map(d=>d));
             t= mergesortCounter;
             //t= process.hrtime()[1] - d[1];
             console.log(t)
             times.push(t);
             break;
             case 'quick-sort':
                 var quicksortCounter =0;
                 var quickSortArray = data[i].map(d=>d);


             function quickSort(arr, left, right){
                 var len = arr.length,
                     pivot,
                     partitionIndex;

                 if(left < right){
                     quicksortCounter++;
                     pivot = right;
                     partitionIndex = partition(arr, pivot, left, right);

                     //sort left and right
                     quickSort(arr, left, partitionIndex - 1);
                     quickSort(arr, partitionIndex + 1, right);
                 }
                 return arr;
             }
             function partition(arr, pivot, left, right){
                 var pivotValue = arr[pivot],
                     partitionIndex = left;

                 for(var i = left; i < right; i++){
                     quicksortCounter++;
                     if(arr[i] < pivotValue){
                         quicksortCounter++;
                         swap(arr, i, partitionIndex);
                         partitionIndex++;
                     }
                 }
                 quicksortCounter++;
                 swap(arr, right, partitionIndex);
                 return partitionIndex;
             }
             function swap(arr, i, j){
                 var temp = arr[i];
                 arr[i] = arr[j];
                 arr[j] = temp;
             }

                 var d = process.hrtime()
                 t= quickSort(data[i].map(d=>d),0,quickSortArray.length);
                 t= quicksortCounter;
                 //t= process.hrtime()[1] - d[1];
                 console.log(t)
                 times.push(t);
                 break;
         }
     }

     return times;
 }

module.exports =analyzeAlgorithm;