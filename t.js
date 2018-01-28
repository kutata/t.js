!function(root, factory) {
  root._$ = root.t = factory();
}(this, function() {
	var $ = function( selector ) {
    return new $.prototype.selector( selector );
  }

  $.prototype = $.prototype = {
    slice: Array.prototype.slice,
    map: Array.prototype.map,

    selector: function(selector) {
      var self = this;
      var dom = [];

      if (!selector)
        return this;

      dom = typeof selector == 'string' ? 
        document.querySelectorAll(selector) :
      selector;

      if (!dom.length)
        dom = [dom];

      for (var i = 0; i < dom.length; i++) {
        self[i] = dom[i];
      }

      this.length = dom.length;

      return this;
    },

    find: function(selector) {
      return $(this[0].querySelectorAll(':scope ' + selector));
    },
  }

  $.prototype.selector.prototype = $.prototype;

  return $;
});
