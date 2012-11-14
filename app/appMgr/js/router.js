define('router', ['jslib/ember'],
	/**
	 * Todos Router
	 *
	 * Defined routes represent filters according to specs
	 *
	 * @returns Class
	 */
	function() {
        //todo:配置路由
		return Ember.Router.extend({

			root: Ember.Route.extend({

				showAll: Ember.Route.transitionTo( 'index' ),
				showActive: Ember.Route.transitionTo( 'active' ),
				showCompleted: Ember.Route.transitionTo( 'completed' ),

				index: Ember.Route.extend({
					route: '/',
					connectOutlets: function( router ) {
					}
				}),

				active: Ember.Route.extend({
					route: '/active',
					connectOutlets: function( router ) {
					}
				}),

				completed: Ember.Route.extend({
					route: '/completed',
					connectOutlets: function( router ) {
					}
				}),

				specs: Ember.Route.extend({
					route: '/specs',
					connectOutlets: function() {
					}
				})
			})
		});
	}
);
