/**
 * 用户列表Grid视图控制器
 * @module UsersController
 * @author wangwk
 * @version 2012112301
 * @requires model/userStore
 */
define(function (require, exports, module) {
    var UserStore = require('model/userResource');
    var GridController = require('jslib/broada/bsview/gridController');

    return GridController.extend({
        queryUrl: "data/users/query",
        resourceType: UserStore,
        /**
         * 根据状态过滤
         * @function
         */
        filterBy: "",
        entries: function(){
            var filter = this.get( "filterBy" );
            switch (filter) {
                case "正常":
                case "失效":
                    return this.get("content").filterProperty("status", filter);
                case "全部":
                default:
                    return this.get( "content" );
            }
        }.property( "filterBy", "content" )
    });
});