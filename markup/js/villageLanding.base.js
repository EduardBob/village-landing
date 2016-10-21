/* Main scripts file. */

window.liveGroup = {
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
liveGroup.Behavior.default = function(context) {
	jQuery('html').removeClass('no-js');
}

/**
 * Execute all Behaviors.
 */
liveGroup.runBehaviors = function(context) {
	if (typeof context == 'undefined') context = document;
	var behaviors = Object.keys(liveGroup.Behavior);
	for (var i = 0, len = behaviors.length; i < len; i++) {
		liveGroup.Behavior[behaviors[i]](context);
	}
}
/**
 * Run All behaviors on document ready.
 */
jQuery(document).ready(function() {
	liveGroup.runBehaviors(document);
});
