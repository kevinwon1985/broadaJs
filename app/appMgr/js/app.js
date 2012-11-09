define(
	[
		'router',
		'jslib/jquery',
		'jslib/handlebars',
		'jslib/ember',
        'jslib/bootstrap'
	],
	function(Router) {
		var App = Ember.Application.create();
		return App;
	}
);
