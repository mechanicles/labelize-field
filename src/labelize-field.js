/* -----------------------------------------------
 * LabelizeField: Simple Jquery in field label plugin
 * author: [Santosh Wadghule, santosh.wadghule@gmail.com
 * copyright: (c) 2012 Santosh Wadghule
 * ----------------------------------------------- */

(function($) {

  "use strict";

  $.fn.labelizeField = function(options) {
    var settings = $.extend({
      'labelClass'  : 'fade',
      'labelEffect' : true
    }, options);

    var allLabelizeFields = $('input.labelize-field');
    allLabelizeFields.each(function(){
      if ($(this).val() !== "")
        {
          $(this).prev('label').hide();
        }
    });

    allLabelizeFields.keyup(function(e){
      if (e.keyCode == 9) {
        if (settings.labelEffect) { 
          $(this).prev('label').addClass(settings.labelClass);
          $(this).keypress(function(){
            $(this).prev('label').hide();
          }); 
          $(this).blur(function(){
            $(this).prev('label').removeClass(settings.labelClass);
            if ($(this).val() === "") {
              $(this).prev('label').show();
            }
          });
        }
        else {
          $(this).prev('label').hide();
          $(this).blur(function(){
            if ($(this).val() === "") {
              $(this).prev('label').show();
            }
          });
        }

      }
    });

    this.click(function(){

      if (settings.labelEffect) { 
        $(this).addClass(settings.labelClass);
        $(this).next('input').keypress(function(){
          $(this).prev('label').hide();
        }); 

        $(this).next('input').blur(function(){
          $(this).prev('label').removeClass(settings.labelClass);
          if ($(this).val() === "") {
            $(this).prev('label').show();
          }
        });
      }
      else {
        $(this).hide();
        $(this).next('input').blur(function(){
          if ($(this).val() === "") {
            $(this).prev('label').show();
          }
        });
      }
    });
    return this;
  };

})(jQuery);
