/**
 * 用户列表Grid视图控制器
 * @module UsersController
 * @author wangwk
 * @version 2012112301
 * @requires model/userStore
 */
define(function (require, exports, module) {
    var UserStore = require('model/userResource');

    return Em.ResourceController.extend({
        queryUrl: "data/users/query",
        selectedRows: [],

        pageInfo: Em.Object.create({
            "totlepage": 1,
            "curpage": 1,
            "pagesize": 20,
            "totlenum": 0
        }),
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
        }.property( "filterBy", "content" ),
        /**
         * 删除指定的用户,不会清空已选中行
         * @function
         * @param {Array} users 选中的行视图实例的数组
         */
        deleteUsers: function(users){
            var ctlr = this;
            users.forEach(function(user, i, users){
                var userResource = user.get( 'content' );
                ctlr.removeObject( userResource );
                userResource.destroyResource()
                    .done(function(){
                    })
                    .fail(function(){
                        alert("删除失败");
                    });
            });
        },
        /**
         * 删除选中的用户,会清空已选中行
         * @function
         */
        deleteSelectedUsers: function(){
            this.deleteUsers(this.selectedRows);
            this.selectedRows.length = 0;
        },
        /**
         * 加载分页信息以及列表数据
         * @private
         */
        _loadData: function(json){
            this.clearAll();
            this.deserializePageInfo(json.pageInfo);
            //Em.set(this, "pageInfo", json.pageInfo);
            //this.pageInfo.set("content", json.pageInfo);
            this.loadAll(json.data);
        },
        /**
         * 设置pageInfo
         * @private
         */
        deserializePageInfo: function(json){
            var pageInfo = this.pageInfo;
            for(var prop in json) {
                pageInfo.set(prop, json[prop]);
            }
            return this;
        },
        /**
         * 重写了findAll方法.加载列表,并将查询设置为controller的content
         * @function
         */
        findAll: function() {
            var self = this;

            return this._resourceRequest({type: 'GET',context: this})
                .done(this._loadData);
        },
        /**
         * 查询.并将查询结果设置为controller的content
         * @function
         */
        query:function(opt){
            var self = this,
                params = {
                    url: this.queryUrl,
                    type: "GET",
                    data: opt,
                    dataType: "json",
                    context: this
                };

            return jQuery.ajax(params)
                .done(this._loadData);

        },
        resourceType: UserStore
    });
});