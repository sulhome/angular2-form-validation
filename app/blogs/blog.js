System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Blog;
    return {
        setters:[],
        execute: function() {
            Blog = (function () {
                function Blog(title, tags, markdownText, htmlText) {
                    this.title = title;
                    this.tags = tags;
                    this.markdownText = markdownText;
                    this.htmlText = htmlText;
                }
                return Blog;
            }());
            exports_1("Blog", Blog);
        }
    }
});
//# sourceMappingURL=blog.js.map