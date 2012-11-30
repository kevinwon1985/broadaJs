/**
 * 应用userMgr的入口
 * @author wangwk
 * @version 2012112001
 */
define(function (require, exports, module) {
    "use strict";
    require('jslib/ember');

    return Ember.Router.extend({
        enableLogging: true,
        addUser: Ember.Route.transitionTo('root.addUser'),
        root: Ember.Route.extend({

            index: Ember.Route.extend({
                route: '/',
                connectOutlets: function( router ) {
                    var appController = router.get('applicationController'),
                        gridController = appController.namespace.gridController;

                    require([ 'view/userGrid' ],
                        function ( UserGrid ) {
                            appController.connectOutlet({
                                viewClass:UserGrid,
                                controller:gridController
                            });
                        }
                    );
                }
            }),

            addUser: Ember.Route.extend({
                route: '/addUser',
                connectOutlets: function( router ) {
                    var appController = router.get('applicationController'),
                        gridController = appController.namespace.gridController;

                    require([ 'controller/userController', 'view/userForm' ],
                        function (userController, userForm) {
                            appController.connectOutlet({
                                viewClass:userForm,
                                controller:userController.create(),
                                context:gridController
                            });
                        }
                    );
                }
            })
        })
    });
});
