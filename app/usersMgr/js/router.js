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

            users: Ember.Route.extend({
                route: '/users/:userid',
                connectOutlets: function( router, params ) {
                    var appController = router.get('applicationController');

                    require([ 'controller/userController', 'view/userForm' ],
                        function (UserController, userForm) {
                            appController.connectOutlet({
                                viewClass:userForm,
                                controller:UserController.create(),
                                context:params
                            });
                        }
                    );
                }
            })
        })
    });
});
