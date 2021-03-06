'use strict';

!function(root, factory) {
  root._$ = root.t = factory();
}(this, function() {
  var t = function( selector ) {
    return new t.prototype.selector( selector );
  }

  t.prototype = t.prototype = {
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
        // self[i].prototype = t.prototype;
      }

      this.length = dom.length;

      return this;
    },

    find: function(selector) {
      return t(this[0].querySelectorAll(':scope ' + selector));
    },


  }

  t.prototype.selector.prototype = t.prototype;

  t.css = function(dom, style) {
    if (!dom.length)
      dom = [dom]

    style = JSON.stringify(style);
    style = style.replace(/[{}"]/g, '').replace(/,/, ';');

    for (var i = 0; i < dom.length; i++) {
      dom[i].style.cssText = style;
    }
  }

  return t;
});
