/**
 * 应用主视图
 * @module applicationView
 * @author wangwk
 * @version 2013010501
 */
define(function (require, exports, module) {
    var tpl = require('jslib/3rdPart/text!../template/app.html');

    return Em.View.extend({
        template: Em.Handlebars.compile(tpl),
		didInsertElement: function(e){
			var App = this.controller.namespace,
				$window = $(window),
				headerHeight = $('#header').height();

            App.adjustContentFrameHeight( $window.height()-headerHeight-5 );
            $(window).resize(function(){
                App.adjustContentFrameHeight( $window.height()-headerHeight-5 );
            });
		}
    });
});