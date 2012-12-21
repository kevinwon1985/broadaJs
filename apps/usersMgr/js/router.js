/**
 * 应用userMgr的路由配置
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
                    var appController = router.get('applicationController');

                    require([ 'controller/gridController', 'view/userGrid' ],
                        function (GridController, UserGrid ) {
                            var gctrl = appController.namespace.gridController
                                = GridController.create();

                            //gctrl.findAll();
                            appController.connectOutlet({
                                outletName: "masterView",
                                viewClass:UserGrid,
                                controller:gctrl
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
                        function (UserController, UserForm) {
                            var userController = UserController.create();
                            userController.set("namespace", appController.namespace);
                            userController.set("isEditing", params.userid != "new");

                            if(!params.userResource && params.userid != "new"){
                                userController.loadFromRemote(params.userid);
                            }
                            appController.connectOutlet({
                                outletName: "masterView",
                                viewClass: UserForm,
                                controller: userController,
                                context: params.userResource
                            });
                        }
                    );
                }
            }),
            queryUsers: Ember.Route.extend({
                route: '/queryUsers/:queryType/:queryOpt',
                serialize:  function(router, context){
                    var queryOpt = context.queryOpt,
                        queryType = context.queryType,
                        opt = {};

                    if(queryType == "simpleQuery"){
                        opt["mix"] = queryOpt["mix"];
                    }else{
                        for (var prop in queryOpt) {
                            var v = queryOpt[prop];
                            if( !Em.empty(v) && prop != "mix"){
                                opt[prop]=v;
                            }
                        }
                    }
                    return {
                        queryType: queryType,
                        queryOpt: encodeURIComponent(JSON.stringify(opt))
                    }
                },
                deserialize:  function(router, context){
                    var appController = router.get('applicationController'),
                        queryOpt = JSON.parse(decodeURIComponent(context.queryOpt)),
                        appOpt = appController.queryOpt,
                        EmSet = Em.set;
                    for (var prop in queryOpt) {
                        EmSet(appOpt, prop, queryOpt[prop]);
                    }
                    return {
                        queryType: context.queryType,
                        queryOpt: queryOpt
                    }
                },
                connectOutlets: function( router, params ) {
                    var appController = router.get('applicationController');

                    require([ 'controller/gridController', 'view/userGrid' ],
                        function (GridController, UserGrid ) {
                            var gctrl = appController.namespace.gridController = GridController.create();
                            gctrl.query(params.queryOpt);
                            appController.connectOutlet({
                                outletName:"masterView",
                                viewClass:UserGrid,
                                controller:gctrl
                            });
                        }
                    );
                }
            })
        })
    });
});
