
// jQuery is required
JSpec.requires('jQuery', 'when using jspec.jquery.sandbox.js');

/*
 *  jQuery Sandbox
 */
(function(JSpec, jQuery, undefined) {

var $ = jQuery;

// jQuery with jSpec context
var jQueryInit = jQuery.fn.init;

var _$ = _jQuery = function(selector, context) {
  jQuery.fn.init = jQueryInit;
  var result = jQuery(selector, context);
  jQuery.fn.init = jQuerySandboxInit;

  return result;
}

// jQuery with sandbox context (default)
var jQuerySandboxInit = function (selector, context) {
  if (_$('iframe[name=sandbox]').length === 0) {
    throw 'need a iframe named `sandbox\' when using jspec.jquery.sandbox.js';
  }

  return jQueryInit.call(this, selector, context || (frames['sandbox'] && frames['sandbox'].document) || undefined);
}
jQuerySandboxInit.prototype = jQueryInit.prototype;

jQuery.fn.init = jQuerySandboxInit;

/*
 *  Module
 */
JSpec.include({
  name: 'jQuerySandbox',

  /*
   * Initialization
   */

  init: function() {
  },

  /*
   *  Utilities
   */

  utilities: {
    // sandbox return a jQuery object for box element of sandbox
    // or for passed element (this element can be a html string or
    // fixture name.
    sandbox: function(content) {
      if (content && content.match(/^[ ]*<.+>[ ]*$/mi)) {
        content = $(content).appendTo('body');
      } else if (content) {
        content = $(this.fixture(content)).appendTo('body');
      }

      return content || $('body');
    },

    // alias to jQuery with jspec context
    _$: _jQuery,
    _jQuery: _jQuery,
  },

  /*
   *  Hooks
   */

  // clear sandbox
  afterSpec: function(spec) {
    $('body').html('');
  },

});

})(JSpec, jQuery);
