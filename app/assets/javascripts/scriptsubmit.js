$(function() {
    var paraTag = $('input#subscribe').parent('p');
    $(paraTag).children('input').remove();
    $(paraTag).append('<input type="button"  name="submit"  id="subscribe" value="Send" class="buttonsubscribe"/>');

    $('#main1 input#subscribe').click(function() {
        $('#main1').append('<img src="images/loader.gif" class="loaderIcon" alt="" />');

       
        var email1 = $('input#email1').val();
    

        $.ajax({
            type: 'post',
            url: 'submit.php',
            data: '&email1=' + email1,

            success: function(results) {
                $('#main1 img.loaderIcon').fadeOut(1000);
                $('ul#response1').html(results);
            }
        }); // end ajax
    });
});
		