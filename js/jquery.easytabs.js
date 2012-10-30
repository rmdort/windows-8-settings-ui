/*
* Windows 8 Style Settings
*/


(function($, undefined){


  function EasyTabs(element, options){

  	var self = this;

    this.options = $.extend({}, options, $.fn.easyTabs.options);

    // Create The transition animation on page load

    $('.settingsWrapper').addClass("loaded");

    // Initialize

    this.$el = element;
    this.$container = $(this.options.container);
    this.options.slideWidth = this.options.slideWidth || 40;

    // Hide all the content in Settings

    this.$children = this.$container.children('div').hide();

    // Show the first tab

    this.$children.filter(':first').show();


    // Add Click Handler to Settings Menu
    this.$el.on('click', 'a', function(event){

      var hash = this.hash,
          $this = $(this);

      if($this.parent().is('.active')) return false;

      // Slide in the select Tab

      self.slideIn(hash);

      // Add Active Class to the selected menu

      $this
        .parent()
        .siblings()
        .removeClass("active")
        .end()
        .addClass("active");

      event.preventDefault();

    });

  };

  // Slide In an Element

  EasyTabs.prototype.slideIn = function(hash){

    this.$children
    .hide()
    .filter(hash)
    .css({
        opacity:0,
        position: 'relative',
        marginRight: this.options.slideWidth,
        left: this.options.slideWidth
      })
      .show()
      .animate({
        opacity:1,
        left:0
      },400);

  };


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