(function($) {
  twitterFetcher.fetch('345170787868762112', 'example1', 2,true,    true, false);
})(jQuery); 


(function($) {
    var $container = $('#portfoliocontainer');
    $container.isotope({
        itemSelector: '.element'
    });

    var $optionSets = $('#options .option-set'),
        $optionLinks = $optionSets.find('a');
    $optionLinks.click(function() {
        var $this = $(this);
        // don't proceed if already selected
        if ($this.hasClass('selected')) {
            return false;
        }
        var $optionSet = $this.parents('.option-set');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value');
        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[key] = value;
        if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
            // changes in layout modes need extra logic
            changeLayoutMode($this, options)
        } else {
            // otherwise, apply new options
            $container.isotope(options);
        }
        return false;
    });
})(jQuery); 


(function($) {
    var $container = $('#portfoliocontainer');
    $container.imagesLoaded( function() {
        $container.isotope();
    });
    })(jQuery); 

    
(function($) {
  $('html, body').ready(function() {
  var options = {
  thumbs:false,
  nextButton: false,
  prevButton: false,
  pagination: true,
  animateStartingFrameIn: true,
  autoPlay: true,
  autoPlayDelay: 3000, 
  preloader: true,
  preloadTheseFrames: [1],
  preloadTheseImages: [
  "images/smalldot1.png"
]
};
var mySequence = $("#sequence").sequence(options).data    ("sequence");
});
})(jQuery);


(function($) {
$('.imagepopup').magnificPopup({
  type: 'image',
  tLoading: 'Loading image #%curr%...',
  mainClass: 'mfp-img-mobile',
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0,1] // Will preload 0 - before current, and 1     after the current image
		},
   image: {
     tError: '<a href="%url%">The image #%curr%</a> could not be    loaded.',
     titleSrc: function(item) {
     return item.el.attr('title') + '<small></small>';
    }
  }
});
})(jQuery); 


(function($) {
  $('html, body').ready(function(){
  $('#myTab a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
  });
  });
})(jQuery);


(function($) {
  $('html, body').ready(function(){
  jQuery('#bxslider1').bxSlider();
});
})(jQuery);


(function($) {
  $('.collapse').live('show', function(){
  $(this).parent().find('.accordion-heading').addClass('open');     //add active state to button on open
  });
})(jQuery);

(function($) {
  $('.flexslider').flexslider({
    animation: "slide",
    prevText: "",          
    nextText: "", 
    start: function(){
      $('body').removeClass('loading');
    }
  });
})(jQuery);


(function($) {
$('.collapse').live('hide', function(){
    $(this).parent().find('.accordion-heading').removeClass('open'); //remove active state to button on close
});
})(jQuery);


function scrollToTop() {
  $('html, body').animate({scrollTop:0}, 'slow');
}


