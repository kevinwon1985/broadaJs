/**
 * grid组件。以bootstrap的table为基础样式
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


    /**
     * grid组件
     * @class Ember.bsview.grid
     * @param {object} opt 配置对象
     */
    return Em.ContainerView.extend({
        selectedRowsBinding: "controller.selectedRows",
        isMultiMode: false,
        needsPagination: false,

        init: function(){
            if(this.needsPagination){
                this.childViews.push("tfootView");
            }
            this._super();
        },
        //以下是视图结构
        tagName: "table",
        classNames: ["table","table-bordered","table-hover"],
        childViews: [ 'theadView', 'tbodyView'],
        theadView: Em.ContainerView.create({
            tagName: "thead",
            childViews: [
                Em.View.create({
                    tagName: "tr",
                    template: function(context, options){
                        var view = options.data.view,
                            heads = view.get("parentView.parentView.heads"),
                            isMultiMode = view.get("parentView.parentView.isMultiMode"),
                            buffer = [];

                        if( isMultiMode ){
                            buffer.push('<th><input type="checkbox" data-bsview="gridRowSelector"></th>');
                        }
                        for (var i = 0; i < heads.length; i++) {
                            buffer.push("<th>"+heads[i].title+"</th>");
                        }
                        return buffer.join("");
                    }
                })
            ]
        }),
        tbodyView: Em.CollectionView.create({
            contentBinding: "controller.content",
            tagName: "tbody",
            itemViewClass: Em.View.extend({
                tagName: "tr",
                classNameBindings: ["selected:info"],
                selected: false,
                template: function(context, options){
                    var view = options.data.view,
                        heads = view.get("parentView.parentView.heads"),
                        content = view.get("content"),
                        isMultiMode = view.get("parentView.parentView.isMultiMode"),
                        buffer = [];

                    if( isMultiMode ){
                        buffer.push('<td><input type="checkbox" data-bsview="gridRowSelector"></td>');
                    }
                    for (var i = 0; i < heads.length; i++) {
                        var colName = heads[i].mapping;
                        buffer.push("<td>"+content[colName]+"</td>");
                    }
                    return buffer.join("");
                },
                click: function(e){
                    var $tar = $(e.target);
                    if( $tar.attr("data-bsview") == "gridRowSelector"){
                        var gridView = this.get("parentView.parentView");
                        var selectedRows = Em.set(gridView, "selectedRows", gridView.selectedRows||[]);
                        if($tar[0].checked){
                            selectedRows.push(this);
                            this.set("selected",true);
                        }else{
                            Em.set( gridView, "selectedRows", selectedRows.without(this) );
                            this.set("selected",false);
                        }
                    }
                }
            })
        }),
        tfootView: Em.View.create({
            tagName: "tfoot",
            template: function(context, options){
                var view = options.data.view,
                    heads = view.get("parentView.heads"),
                    isMultiMode = view.get("parentView.isMultiMode"),
                    colsLen = heads.length + (isMultiMode?1:0),
                    buffer = [];
                buffer.push('<tr><td colspan="'+colsLen+'">分页</td></tr>')

                return buffer.join("");
            }
        })
    });
});