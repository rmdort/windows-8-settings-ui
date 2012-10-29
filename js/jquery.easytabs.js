/*
* Windows 8 Style Settings
*/

/* Constructor */

(function($, undefined){
  

    function EasyTabs(element, options){
	
    	var self = this;
  
      this.options = $.extend(options, $.fn.easyTabs.options);
  
      // Create The transition animation on page load
  
      $('.settingsWrapper').addClass("loaded");
  
      // Assignments
  
      this.$el = element;  
      this.$container = $(this.options.container);
      this.options.slideWidth = this.options.slideWidth || 40;
  
      this.$children = this.$container.children('div').css({
        "position":"relative",
        marginRight: self.options.slideWidth
      })
      .hide();
  
      this.$children.filter(':first').show();
  
      this.$el.on('click', 'a', function(event){
    
        var hash = this.hash,
            $this = $(this);
    
        if($this.parent().is('.active')) return false;
    
        self.$children.hide().filter(hash).css({
          opacity:0,
          left: self.options.slideWidth
        })
        .show()
        .animate({
          opacity:1,
          left:0
        },400);
    
        $(this)
          .parent()
          .siblings()
          .removeClass("active")
          .end()
          .addClass("active");
    
        event.preventDefault();
    
      });
  
    }


    $.fn.easyTabs = function(options){
    	return this.each(function(){
    		var easyTabs = new EasyTabs($(this), options);
    		$(this).data("easyTabs", easyTabs);
    	});
    };

    $.fn.easyTabs.options = {
      container: '.settingsContent',
      slideWidth: 30
    };


})(jQuery);