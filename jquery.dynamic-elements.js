/**
 * jQuery Dynamic Elements Plugin v1.0
 * https://github.com/MarcFC/jquery.dynamic-elements
 *
 * Copyright 2014 Marc Fernandez
 * Released under the MIT license
 */

(function($){

  $.fn.dynamicElements = function(options) {

    var settings = $.extend({
      addSelector: null,
      removeSelector: null,
      minSize: 1,
      maxSize: 10,
      onAddFinished: function (){
        return null;
      },
      onRemoveFinished: function (){
        return null;
      }
    }, options);

    var selector = this.selector;
    // jQuery clone hack (http://jsperf.com/outerhtml-vs-jquery-clone-hack/4)
    var HTMLelement = this.last().clone().wrap('<p>').parent().html();

    if(settings.addSelector != null){
      settings.addSelector.click(function() {
        if(numberOfElements() < settings.maxSize)
          lastElement().after(HTMLelement);
        settings.onAddFinished();
        return false;
      });
    }

    if(settings.removeSelector != null){
      settings.removeSelector.click(function() {
        if(numberOfElements() > settings.minSize)
          lastElement().remove();
        settings.onRemoveFinished();
        return false;
      });
    }

    var lastElement = function(){
      return $(selector).last();
    };

    var numberOfElements = function(){
      return $(selector).length;
    };

    // Making plugin method chainable (http://learn.jquery.com/plugins/basic-plugin-creation/#chaining)
    return this;

  };

})(jQuery);