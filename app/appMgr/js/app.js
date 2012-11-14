define(
	[
		'router',
		'jslib/jquery'
	],
	function(Router) {
        var $document = $(document),
            $contentFrame = $('#_contentFrame_'),
            headerHeight = $('#header').height();

		var app = Em.Application.create();
        /**
         * 调整主内容iframe的高度
         * @method
         * @param {int} h 高度
         */
        app.adjustContentFrameHeight = function(h) {
            if ($contentFrame.length>0){
                $contentFrame.height(h);
            }
        };

        app.adjustContentFrameHeight( $document.height()-headerHeight-5 );

        if(window){
            window.appMgr = app;
        }
		return app;
	}
);
