({
    appDir: "./",
    baseUrl: "js",
    dir: "../usersMgr-build",
	paths: {
		jslib: '../../../resource/jslib'
	},
	optimize: "none",
	exclude: [
		"jslib/3rdPart/jquery",
		"jslib/3rdPart/handlebars",
		"jslib/3rdPart/ember",
		"jslib/3rdPart/ember.rest",
		"jslib/3rdPart/bootstrap",
		"jslib/3rdPart/text"
	],
    modules: [
        {
            name: "app"
        }
    ]
})