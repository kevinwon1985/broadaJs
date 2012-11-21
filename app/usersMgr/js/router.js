define('router', ['jslib/ember'],
	function() {
		return Ember.Router.extend({

			root: Ember.Route.extend({

				showAll: Ember.Route.transitionTo( 'index' ),
				showActive: Ember.Route.transitionTo( 'active' ),
				showCompleted: Ember.Route.transitionTo( 'completed' ),

				index: Ember.Route.extend({
					route: '/',
					connectOutlets: function( router ) {
						/*var controller = router.get( 'applicationController' );
						var context = controller.namespace.entriesController;
						context.set( 'filterBy', '' );

						// This require was left here exclusively for design purposes
						// Loads decoupled controller/view based on current route
						require([ 'app/controllers/todos', 'app/views/items' ],
							function( TodosController, ItemsView ) {
								controller.connectOutlet({
									viewClass: ItemsView,
									controller: TodosController.create(),
									context: context
								});
							}
						);*/

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
						//require( [ 'app/specs/helper' ] );
					}
				})
			})
		});
	}
);
