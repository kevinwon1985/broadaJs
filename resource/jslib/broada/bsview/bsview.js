/**
 * 将bootstrap以ember视图的方式封装成组件
 * @module Ember.bsview
 * @class Ember.bsview
 * @author wangwk
 * @version 2012111301
 * @namespace Ember
 * @requires jslib/ember
 * @requires jslib/bootstrap
 */
define(
    [
        "jslib/ember",
        "jslib/bootstrap"
    ],
    function () {
        var exports = Em.bsview = Em.bsview || {};
        /**
         * button组件
         * @class Ember.bsview.botton
         * @param {object} opt 配置对象
         */
        exports.botton = Em.View.extend({
            tagName: "button",
            classNames: ["btn"],
            classNameBindings: ["type","size","disabled"],
            text: "",
            type: "",
            size:"",
            disabled:false,
            template: Em.Handlebars.compile(
                '{{view.text}}'
            )
        });

        /**
         * grid组件
         * @class Ember.bsview.grid
         * @param {object} opt 配置对象
         */
        exports.grid = Em.View.extend({
            template: Em.Handlebars.compile(
                '<table class="table table-bordered">'+
                ' <thead>'+
                '	<tr>'+
                '	  <th>#</th>'+
                '	  <th>First Name</th>'+
                '	  <th>Last Name</th>'+
                '	  <th>Username</th>'+
                '	</tr>'+
                '  </thead>'+
                '  <tbody>'+
                '	<tr>'+
                '	  <td>1</td>'+
                '	  <td>Mark</td>'+
                '	  <td>Otto</td>'+
                '	  <td>@mdo</td>'+
                '	</tr>'+
                '	<tr>'+
                '	  <td>2</td>'+
                '	  <td>Mark</td>'+
                '	  <td>Otto</td>'+
                '	  <td>@TwBootstrap</td>'+
                '	</tr>'+
                '	<tr>'+
                '	  <td>3</td>'+
                '	  <td>Jacob</td>'+
                '	  <td>Thornton</td>'+
                '	  <td>@fat</td>'+
                '	</tr>'+
                '	<tr>'+
                '	  <td>4</td>'+
                '	  <td colspan="2">Larry the Bird</td>'+
                '	  <td>@twitter</td>'+
                '	</tr>'+
                ' </tbody>'+
                '</table>'
            )
        });


        return exports;
    }
);