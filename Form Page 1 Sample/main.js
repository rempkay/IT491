(function ($) {
    "use strict";

    var casename = $('.validate-input input[name="casename"]');
    var transcription = $('.validate-input input[name="transcription"]');
    var metatags = $('.validate-input input[name="metatags"]');

	$('.validate-form').on('submit',function(){
        var check = true;

        if($(casename).val().trim() == ''){
            showValidate(casename);
            check=false;
        }

        if($(transcription).val().trim() == ''){
            showValidate(transcription);
            check=false;
        }


        if($(metatags).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate(metatags);
            check=false;
        }

        

        return check;
    });

	
	$('.validate-form .input1').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);

