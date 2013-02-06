/**
 * @version 2012112301
 * @namespace Ember
 * @requires jslib/ember
 */
define(function (require, exports, module) {
    "use strict";
    require('../../3rdPart/ember');
    /**
     * 用于在模板的嵌套each中，把一个each中的属性值当另外一个each的属性名来获取值。
     * 例如：
     * {{#each record in view.content}}
     *      {{#each col in view.heads}}
     *          {{getValueInNestEach record col.mapping}}
     *      {{/each}}
     * {{/each}}
     * 跟下面js语句原理类似
     * for( a in obj1 ){
     *     for( b in obj2 ){
     *         var v = obj1[b]
     *     }
     * }
     * 将返回v的值
     * @method getValueInNestEach
     * @for Ember.Handlebars.helpers
     * @param rootpath {String}
     * @param path {String}
     */
    var HandlebarsGet = Ember.Handlebars.get;
    Ember.Handlebars.registerHelper('getValueInNestEach', function(rootpath, path, options) {
        Ember.assert("参数错误，调用格式：{{getValueInNestEach targetObject col.mapping}}",
            arguments.length == 3);

        var path = HandlebarsGet(path, path, options),
            root = HandlebarsGet(rootpath, rootpath, options);

        return root[path];
    });
});