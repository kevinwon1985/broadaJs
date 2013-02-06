({
    appDir: "./",
	mainConfigFile: 'requireDefaultConfig.js',
    dir: "../usersMgr-build",
    modules: [
        {
            name: "app",
			exclude: [
				"jslib/3rdPart/text",
				"jslib/3rdPart/jquery",
				"jslib/3rdPart/handlebars",
				"jslib/3rdPart/ember",
				"jslib/3rdPart/ember.rest",
				"jslib/3rdPart/bootstrap"
			]
        },
        {
            name: "view/userGrid",
			exclude: [
				"jslib/3rdPart/text"
			]
        },
        {
            name: "view/userForm",
			exclude: [
				"jslib/3rdPart/text"
			]
        }
    ]
})