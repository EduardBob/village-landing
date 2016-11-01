/* Main scripts file. */

window.villageLanding = {
	Behavior: {},
	Settings: {},
	Functions: {},
	runBehaviors: function() {}
};

jQuery.fn.extend({
	makeClass: function(className) {
		for (var i = 0, len = this.length; i < len; i++) {
			this.removeClass(className);
			this.addClass(className);
		}
	}
});




/**
 * Default (base) behavior
 */
villageLanding.Behavior.default = function(context) {
	jQuery('html').removeClass('no-js');
}

/**
 * Execute all Behaviors.
 */
villageLanding.runBehaviors = function(context) {
	if (typeof context == 'undefined') context = document;
	var behaviors = Object.keys(villageLanding.Behavior);
	for (var i = 0, len = behaviors.length; i < len; i++) {
		villageLanding.Behavior[behaviors[i]](context);
	}
}
/**
 * Run All behaviors on document ready.
 */
jQuery(document).ready(function() {
	villageLanding.runBehaviors(document);
});
