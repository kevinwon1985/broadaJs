({
    appDir: "./",
    baseUrl: "js",
    dir: "../usersMgr-build",
	paths: {
		jslib: '../../../resource/jslib'
	},
	shim: {
		'jslib/bootstrap': ['jslib/jquery'],
		'jslib/ember': ['jslib/jquery', 'jslib/handlebars']
    },
	optimize: "none",
    modules: [
        {
            name: "app"
        }
    ]
})