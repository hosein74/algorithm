
$('#animation-algorithm').on( "click",getAlgorithm );
$('#analyze-algorithm').on( "click",getAlgorithm );

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
    else {
        alert('some error')
    }
}

$('#stop-algorithm').on( "click",stopAlgorithm );
$('#resume-algorithm').on( "click",resumeAlgorithm );
$('#reset-algorithm').on( "click",resetAlgorithm );
$('#next-algorithm').on( "click",nextAlgorithm );
