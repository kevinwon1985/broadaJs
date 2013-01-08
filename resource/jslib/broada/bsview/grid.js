/**
 * grid组件。以bootstrap的table为基础样式. 需要跟gridController一起使用
 * @module Ember.bsview.grid
 * @author wangwk
 * @version 2012112001
 * @namespace Ember
 * @requires jslib/ember
 * @requires jslib/bootstrap
 */
define(function (require, exports, module) {
    "use strict";
    require('jslib/ember');
    require('jslib/broada/EmHbHelpers/getValueInNestEach');
    var tpl = require('jslib/text!./templates/grid.html');

    /**
     * grid组件
     * @class Ember.bsview.grid
     * @param {object} opt 配置对象
     */
    return Em.View.extend({
        selectedRowsBinding: "controller.selectedRows",
        /**
         * 是否可选多行, true则会在第一列前插入多选框
         * @config
         */
        isMultiMode: false,
        /**
         * 需要分页控制栏, true则会在行最后插入分页控制栏
         * @config
         */
        needsPagination: false,
        /**
         * 最左显示的页码个数
         * @config
         */
        maxPageLen: "controller.maxPageLen",
        colsLen: function(){
            var heads = this.get('heads'),
                isMulti = this.get('isMultiMode');
            return heads.length + (isMulti?1:0);
        }.property('heads','isMultiMode'),

        template: Em.Handlebars.compile(tpl),

        init: function(){
            this.TheadView = Em.View.extend({
                isMultiMode: this.isMultiMode,
                heads: this.heads,
                tagName: "tr"
            });
            this.RowView = Em.View.extend({
                isMultiMode: this.isMultiMode,
                heads: this.heads,
                classNameBindings: ["selected:info"],
                selectedBinding: "controller._selected",
                tagName: "tr"
            });
            this.PageView = Em.View.extend({
                pageNumsBinding: "controller.pageNums",
                tagName: "ul",
                click: function(e){
                    e.stopPropagation();
                    e.preventDefault();

                    var tar = e.target;
                    var curpage = this.get("controller.pageInfo.curpage");
                    if( tar.tagName.toLowerCase() == "a" ){
                        var tarPageNum = parseInt( $(tar).attr("data-bsview-pagenum"), 10);
                        if( tarPageNum && tarPageNum != curpage ){
                            this.set("controller.pageInfo.curpage", tarPageNum);
                            //todo: 翻页实现
                        }
                    }
                }
            });
            this._super();
        }
    });
});