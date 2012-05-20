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

    this.click(function(){
      $(this).next('input').focus();

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
