
$('#animation-algorithm').on( "click",getAlgorithm );
$('#analyze-algorithm').on( "click",getAlgorithm );
$('#help-file-algorithm').on( "click",getAlgorithm );
$('#description-algorithm').on( "click",getAlgorithm );

let path =window.location.pathname.split(/\//);
console.log(path)
switch (path[1]) {
    case 'algorithm':
        switch (path[3]) {
            case 'animation':
                $('#mySecondHeader').text('بخش نمایش الگوریتم')
                break;
            case 'analyze':
                $('#mySecondHeader').text('بخش تحلیل الگوریتم')
                break;
            case 'help-file':
                $('#mySecondHeader').text('بخش راهنمای فایل')
                break;
            case 'description':
                $('#mySecondHeader').text('بخش توضیحات الگوریتم')
                break;
        }

        switch (path[2]) {
            case 'bubble-sort':
                $('#myFirstHeader').text('(bubble sort) مرتب سازی حبابی')
                break;
            case 'selection-sort':
                $('#myFirstHeader').text('(selection sort) مرتب سازی انتخابی')
                break;
            case 'insertion-sort':
                $('#myFirstHeader').text('(insertion sort) مرتب سازی درجی')
                break;
            case 'quick-sort':
                $('#myFirstHeader').text('(quick sort) مرتب سازی سریع')
                break;
            case 'merge-sort':
                $('#myFirstHeader').text('(merge sort) مرتب سازی ادغامی')
                break;
            case 'heap-sort':
                $('#myFirstHeader').text('(heap sort) مرتب سازی هیپ')
                break;
            case 'simple-matrix-multiple':
                $('#myFirstHeader').text('(simple matrix multiple) ضرب معمولی ماتریس')
                break;
            case 'strassen--matrix-multiple':
                $('#myFirstHeader').text('(strassen matrix multiple) ضرب استراسن ماتریس')
                break;
            case 'simple-multiple':
                $('#myFirstHeader').text('(simple multiple) ضرب معمولی اعداد')
                break;
            case 'karatsuba-multiple':
                $('#myFirstHeader').text('(karatsuba-multiple)  ضرب کاراتسوبا')
                break;
            case 'activity-selection':
                $('#myFirstHeader').text('(activity selection) انتخاب فعالیت ها')
                break;
            case 'maximum-sub-array':
                $('#myFirstHeader').text('(maximum sub array) یافتن زیر آرایه بیشینه')
                break;
            case 'huffman':
                $('#myFirstHeader').text('(huffman) کد هافمن')
                break;
            case 'job-scheduling':
                $('#myFirstHeader').text('(job scheduling) زمان بندی کار ها')
                break;
            case 'dfs':
                $('#myFirstHeader').text('(dfs) پیمایش اول عمق')
                break;
            case 'bfs':
                $('#myFirstHeader').text('(bfs) پیمایش اول سطح')
                break;
            case 'prim':
                $('#myFirstHeader').text('(prim) پریم')
                break;
            case 'kruskals':
                $('#myFirstHeader').text('(kruskals) کراسکال')
                break;
            case 'dijkstras':
                $('#myFirstHeader').text('(dijkstras) دایجسترا')
                break;
        }
        break;
}


function getAlgorithm(e)
{
    e.preventDefault();
    var my = $(this);
    var form = $('#operation-form')
    if (my.attr('id') === 'animation-algorithm')
    {
        let path =window.location.pathname.split(/\//);
        form.attr('action','/'+path[1]+'/'+path[2]+'/animation');
        form.submit();
    }
    else if (my.attr('id') === 'analyze-algorithm')
    {
        let path =window.location.pathname.split(/\//);
        form.attr('action','/'+path[1]+'/'+path[2]+'/analyze');
        form.submit();
    }
    else if (my.attr('id') === 'help-file-algorithm')
    {
        let path =window.location.pathname.split(/\//);
        form.attr('action','/'+path[1]+'/'+path[2]+'/help-file');
        form.submit();
    }
    else if (my.attr('id') === 'description-algorithm')
    {
        let path =window.location.pathname.split(/\//);
        form.attr('action','/'+path[1]+'/'+path[2]+'/description');
        form.submit();
    }
    else {
        alert('some error')
    }
}
$('#stop-algorithm').on( "click",stopAlgorithm );
$('#resume-algorithm').on( "click",resumeAlgorithm );
$('#reset-algorithm').on( "click",resetAlgorithm );
$('#next-algorithm').on( "click",nextAlgorithm );
