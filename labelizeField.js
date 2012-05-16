(function( $ ){
  $.fn.labelizeField = function() {

    this.each(function(){
      if($(this).val() != "")
        {
          $(this).prev('label').hide();
        }
    });

    this.focus(function(){
      $(this).prev('label').addClass('focus');
      $(this).keypress(function(){
        $(this).prev('label').hide()
      }) 
    });

    this.blur(function(){
      if($(this).val() == "")
        {
          $(this).prev('label').removeClass('focus');
          $(this).prev('label').show();
        }
    });
  };

})(jQuery);
