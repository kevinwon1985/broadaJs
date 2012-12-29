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

    var THeadTrView = Em.View.extend({
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
        },
        click: function(e){
            var $tar = $(e.target);
            if( $tar.attr("data-bsview") == "gridRowSelector"){
                var gridView = this.get("parentView.parentView");
                if($tar[0].checked){
                }else{
                }
            }
        }
    });
    var THeadView = Em.ContainerView.extend({
        tagName: "thead",
        init: function(){
            this.theadTrView = THeadTrView.create();
            this._super();
        },
        willDestroyElement: function(){
            this.theadTrView = null;
        },
        childViews: ["theadTrView"],
        theadTrView: null
    });

    var TBodyView = Em.CollectionView.extend({
        contentBinding: "parentView.content",
        tagName: "tbody",
        /*init: function(){
            var itemViewTpl = this.itemViewTpl;
            this.itemViewClass = Em.View.extend({
                classNameBindings: ["selected:info"],
                selected: false,
                template: itemViewTpl
            })
            this._super();
        }*/
        itemViewClass: Em.View.extend({
            classNameBindings: ["selected:info"],
            selected: false,
            //template: Em.Handlebars.compile(""),
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
                    buffer.push("<td>"+(content[colName] || "")+"</td>");
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
    });
    /**
     * 分页组件
     * 需要在grid的controller中设置pageInfo对象,例如下
     * pageInfo: {
            "totlepage": 1,
            "curpage": 1,
            "pagesize": 20,
            "totlenum": 0
        }
     */
    var PageView = Em.View.extend({
        contentBinding: "controller.pageInfo",
        tagName: "div",
        classNames: ["pagination", "pagination-right"],
        template: function(context, options){
            var view = options.data.view,
                pageInfo = view.get("content"),
                totlepage = pageInfo.totlepage,
                curpage = pageInfo.curpage;

            Ember.assert("grid的controller中必须有pageInfo对象,且pageInfo有totlepage属性和curpage属性", pageInfo && pageInfo.totlepage && pageInfo.curpage);

            var maxPageLen = view.get("parentView.parentView.parentView.parentView.maxPageLen"),
                len = Math.min(pageInfo.totlepage, maxPageLen),
                preCls = curpage == 1 ? 'class="disabled"': "",
                itemCls,
                nextCls = curpage == totlepage ? 'class="disabled"': "",
                buffer = [];

            buffer.push("<ul>");
            buffer.push('<li '+preCls+'><a href="#">&laquo;</a></li>');
            for (var i = 1; i <= len; i++) {
                itemCls = curpage == i ?  'class="active"': "";
                buffer.push('<li '+itemCls+'><a href="#" data-bsview-pagenum="'+i+'">'+i+'</a></li>');
            }
            if(pageInfo.totlepage > len){
                buffer.push('<li class="disabled"><a href="#">...</a></li>');
            }
            buffer.push('<li  '+nextCls+'><a href="#">&raquo;</a></li>');
            buffer.push("</ul>");

            //todo: 分页视图不能自动更新
            return buffer.join("");
        },
        click: function(e){
            e.preventDefault();
            var $tar = $(e.target),
                pageInfo = this.get("content"),
                pagenum = $tar.attr("data-bsview-pagenum");
            if(pagenum && pagenum != pageInfo.curpage){
                /*var $li = $tar.parent();
                this.$("li.active").removeClass();
                $li.addClass("active");*/
                pageInfo.curpage=parseInt(pagenum);
                //todo: 点击分页后如何像服务端发送请求
            }
        }
    });

    var TFootTdView = Em.ContainerView.extend({
        tagName: "td",
        attributeBindings: ["colspan"],
        colspanBinding: "parentView.parentView.parentView._colspan",
        init: function(){
            this.pageView = PageView.create();
            this._super();
        },
        willDestroyElement: function(){
            this.pageView = null;
        },
        childViews: ["pageView"],
        pageView: null
    });
    var TFootTrView = Em.ContainerView.extend({
        tagName: "tr",
        init: function(){
            this.tFootTdView = TFootTdView.create();
            this._super();
        },
        willDestroyElement: function(){
            this.tFootTdView = null;
        },
        childViews: ["tFootTdView"],
        tFootTdView: null
    });
    var TFootView = Em.ContainerView.extend({
        tagName: "tfoot",
        init: function(){
            this.tFootTrView = TFootTrView.create();
            this._super();
        },
        willDestroyElement: function(){
            this.tFootTrView = null;
        },
        childViews: ["tFootTrView"],
        tFootTrView: null
    });

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
        maxPageLen: 5,
        colsLen: function(){
            var heads = this.get('heads'),
                isMulti = this.get('isMultiMode');
            return heads.length + (isMulti?1:0);
        }.property('heads','isMultiMode'),

        template: Em.Handlebars.compile(tpl),

        init: function(){

            this.theadView = Em.View.extend({
                isMultiMode: this.isMultiMode,
                heads: this.heads,
                tagName: "tr"
            });
            this.tbodyView = Em.View.extend({
                isMultiMode: this.isMultiMode,
                heads: this.heads,
                selected: false,
                tagName: "tr"
            });
            this.tfootView = Em.View.extend({
                isMultiMode: this.isMultiMode,
                heads: this.heads,
                tagName: "tr"
            });
            this._super();
        }
    });
    /*return Em.ContainerView.extend({
        selectedRowsBinding: "controller.selectedRows",
        *//**
         * 是否可选多行, true则会在第一列前插入多选框
         * @config
         *//*
        isMultiMode: false,
        *//**
         * 需要分页控制栏, true则会在行最后插入分页控制栏
         * @config
         *//*
        needsPagination: false,
        *//**
         * 最左显示的页码个数
         * @config
         *//*
        maxPageLen: 5,
        _colspan: null,

        _combineTemplate: function(){
            var headTpl = [],
                rowTpl = [],
                footTpl = [],
                isMulti = this.isMultiMode,
                heads = this.heads,
                colspan = heads.length + (isMulti?1:0);
            if(this.isMultiMode){
                headTpl.push('<th>{{view Ember.Checkbox}}</th>');
                //奇怪的问题..这里不用能{{view Ember.Checkbox}}..不然会报错
                //todo:调试一下.断点: ember.js line 13843, 14820
                //rowTpl.push('<td>{{view Ember.Checkbox checkedBinding="view.selected"}}</td>');
                rowTpl.push('<td><input type="checkbox" {{bindAttr checked="view.selected"}}/></td>');
            }
            for (var i = 0; i < heads.length; i++) {
                var head = heads[i];
                headTpl.push("<th>"+head.title+"</th>");
                rowTpl.push('<td>{{view.content.'+(head.mapping||head.title)+'}}</td>');
            }
            footTpl.push('<tr><td colspan="'+colspan+'"></td></tr>');
            return {
                headTpl: headTpl.join(""),
                rowTpl: rowTpl.join("")
            }
            //todo: 待完成;
        },
        init: function(){
            var tpls = this._combineTemplate();
            this._colspan = this.heads.length + (this.isMultiMode?1:0);
            //this.theadView = THeadView.create();
            this.theadView = Em.View.create({
                tagName: "thead",
                template: Em.Handlebars.compile(tpls.headTpl)
            });
            this.tbodyView = Em.CollectionView.create({
                contentBinding: "parentView.content",
                tagName: "tbody",
                itemViewClass: Em.View.extend({
                    classNameBindings: ["selected:info"],
                    controllerBinding: "content",
                    selected: false,
                    template: Em.Handlebars.compile(tpls.rowTpl)
                })
            });
            *//*this.tbodyView = TBodyView.create({
                itemViewTpl : Em.Handlebars.compile(tpls.rowTpl)
            });*//*
            if(this.needsPagination){
                this.tfootView = TFootView.create();
            }
            this._super();
        },
        willDestroyElement: function(){
            this.theadView = this.tbodyView = this.tfootView = null;
        },
        //以下是视图结构
        tagName: "table",
        classNames: ["table","table-bordered","table-hover"],
        childViews: ["theadView","tbodyView","tfootView"],
        theadView: null,
        tbodyView: null,
        tfootView: null
    });*/
});