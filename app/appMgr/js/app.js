define(
	[
		'router',
		'jslib/jquery',
		'jslib/bootstrap',
		'jslib/handlebars',
		'jslib/ember'
	],
	function(Router) {
		alert(1)
		var App = Ember.Application.create();
		App.initialize();
		return App;
	}
);
