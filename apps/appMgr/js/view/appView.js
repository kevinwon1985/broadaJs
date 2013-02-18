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
			var view = this,
                ctrl = this.controller,
				$win = $(window),
				headerHeight = $('#header').height()+5;

            ctrl._setActiveSubmenu();

            this._adjustContentFrameHeight( $win.height()-headerHeight );
            $win.resize(function(){
                view._adjustContentFrameHeight( $win.height()-headerHeight );
            });
		},
        /**
         * 调整主内容iframe的高度
         * @method
         * @param {int} h 高度
         */
        _adjustContentFrameHeight: function(h) {
            var $contentFrame = $('#_contentFrame_');
            if ($contentFrame.length>0){
                $contentFrame.height(h);
            }
        }
    });
});