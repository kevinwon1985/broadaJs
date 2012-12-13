/**
 * Grid视图控制器,配合grid使用
 * @module GridController
 * @author wangwk
 * @version 2012121301
 */
define(function (require, exports, module) {
    require('jslib/ember.rest');

    return Em.ResourceController.extend({
        queryUrl: "/",
        selectedRows: [],

        pageInfo: Em.Object.create({
            "totlepage": 1,
            "curpage": 1,
            "pagesize": 20,
            "totlenum": 0
        }),
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
            Ember.assert("grid的controller中必须有pageInfo对象,且pageInfo有totlepage属性和curpage属性", this.queryUrl);

            var params = {
                url: this.queryUrl,
                type: "GET",
                data: opt,
                dataType: "json",
                context: this
            };

            return jQuery.ajax(params)
                .done(this._loadData);
        },
        /**
         * 删除指定的行,不会清空已选中行
         * @function
         * @param {Array} rows 选中的行视图实例的数组
         */
        deleteRow: function(rows){
            var ctlr = this;
            rows.forEach(function(row, i, users){
                var record = row.get( 'content' );
                ctlr.removeObject( record );
                record.destroyResource();
            });
        },
        /**
         * 删除选中的用户,会清空已选中行
         * @function
         */
        deleteSelectedRows: function(){
            this.deleteRow(this.selectedRows);
            this.selectedRows.length = 0;
        }
    });
});