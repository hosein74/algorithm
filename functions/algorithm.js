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
         }
     }

     return times;
 }

module.exports =analyzeAlgorithm;