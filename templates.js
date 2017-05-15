(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['docs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<nav class=\"nav has-shadow\">\n  <div class=\"container\">\n    <div class=\"nav-left\">\n      <a class=\"nav-item\" href=\"/\">\n        <img src=\"/assets/img/Diamond.png\" alt=\"Bulma logo\">\n        <h4 class=\"title is-4\">&nbsp;diamond</h4>\n      </a>\n      <a class=\"nav-item is-tab is-hidden-mobile\" href=\"/\">"
    + alias4(((helper = (helper = helpers.home || (depth0 != null ? depth0.home : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"home","hash":{},"data":data}) : helper)))
    + "</a>\n      <a class=\"nav-item is-tab is-hidden-mobile is-active\" href=\"/docs\">"
    + alias4(((helper = (helper = helpers.docs || (depth0 != null ? depth0.docs : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"docs","hash":{},"data":data}) : helper)))
    + "</a>\n      <a class=\"nav-item is-tab is-hidden-mobile\" href=\"/unify\">Unify</a>\n    </div>\n\n    <div class=\"nav-center\">\n      <a class=\"nav-item is-tab\" id=\"default\" href=\"/docs\">"
    + alias4(((helper = (helper = helpers["getting-started"] || (depth0 != null ? depth0["getting-started"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"getting-started","hash":{},"data":data}) : helper)))
    + "</a>\n      <a class=\"nav-item is-tab\" id=\"install\" href=\"/docs/?install\">"
    + alias4(((helper = (helper = helpers.install || (depth0 != null ? depth0.install : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"install","hash":{},"data":data}) : helper)))
    + "</a>\n      <a class=\"nav-item is-tab\" id=\"compile\" href=\"/docs/?compile\">"
    + alias4(((helper = (helper = helpers.compile || (depth0 != null ? depth0.compile : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"compile","hash":{},"data":data}) : helper)))
    + "</a>\n      <a class=\"nav-item is-tab\" id=\"package.json\" href=\"/docs/?package.json\">Package.JSON</a>\n    </div>\n\n    <span class=\"nav-toggle\">\n      <span></span>\n      <span></span>\n      <span></span>\n    </span>\n\n    <div class=\"nav-right nav-menu\">\n      <a class=\"nav-item is-tab is-hidden-tablet\" href=\"/\">"
    + alias4(((helper = (helper = helpers.home || (depth0 != null ? depth0.home : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"home","hash":{},"data":data}) : helper)))
    + "</a>\n      <a class=\"nav-item is-tab is-hidden-tablet is-active\" href=\"docs\">"
    + alias4(((helper = (helper = helpers.docs || (depth0 != null ? depth0.docs : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"docs","hash":{},"data":data}) : helper)))
    + "</a>\n      <a class=\"nav-item is-tab is-hidden-mobile\" href=\"/unify\">Unify</a>\n      <div class=\"nav-item\">\n        <div class=\"icon lang\">\n          <i class=\"fa fa-language\"></i>\n        </div>\n        <div class=\"field\">\n          <p class=\"control\">\n            <span class=\"select\">\n              <select class=\"lang-select\">\n                <option value=\"en-us\">English</option>\n                <option value=\"pt-br\">Português do Brasil</option>\n              </select>\n            </span>\n          </p>\n        </div>\n      </div>\n      <a class=\"nav-item\" href=\"https://discord.gg/ZeX76Zy\" target=\"_blank\">\n        <span class=\"icon\">\n          <svg class=\"svg-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 245 240\"><defs><style>.cls-1{fill:#7a7a7a;}.cls-2{fill:#fff;}</style></defs><path class=\"cls-1\" d=\"M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z\"/><path class=\"cls-1\" d=\"M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z\"/></svg>\n        </span>\n      </a>\n      <a class=\"nav-item\" href=\"https://npmjs.com/diamondpkg\" target=\"_blank\">\n        <span class=\"icon\">\n          <svg class=\"svg-icon npm\" id=\"Layer_1\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 990 990\"><defs><style>.cls-1{fill:#7a7a7a;}.cls-2{fill:#fff;}</style></defs><title>n</title><path class=\"cls-1\" d=\"M0,990V0H990V990ZM186.19,185.53V803h312V314.29H680v488.8H803.78V185.53Z\"/><path class=\"cls-2\" d=\"M186.19,185.53h617.6V803.09H680V314.29H498.17V803h-312Z\"/></svg>\n        </span>\n      </a>\n      <a class=\"nav-item\" href=\"https://github.com/diamondpkg/diamond\" target=\"_blank\">\n        <span class=\"icon\">\n          <svg class=\"svg-icon\" viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" stroke-linejoin=\"round\" stroke-miterlimit=\"1.414\"><defs><style>.cls-1{fill:#7a7a7a;}.cls-2{fill:#fff;}</style></defs><path class='cls-1' d=\"M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.09-.202-.36-1.015.07-2.117 0 0 .67-.215 2.2.82.64-.178 1.32-.266 2-.27.68.004 1.36.092 2 .27 1.52-1.035 2.19-.82 2.19-.82.43 1.102.16 1.915.08 2.117.51.56.82 1.274.82 2.147 0 3.073-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38C13.71 14.53 16 11.53 16 8c0-4.418-3.582-8-8-8\"/></svg>\n        </span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n<progress value=\"0\" max=\"100\">0%</progress>\n\n<div class=\"columns\">\n  <div class=\"column is-3 toc-outer\">\n      <div class=\"toc\"></div>\n  </div>\n  <div class=\"column is-9\">\n    <div class=\"content markdown\"></div>\n  </div>\n</div>\n\n<footer class=\"footer hidden\">\n  <div class=\"container\">\n    <div class=\"content has-text-centered\">\n      <p>\n        <strong>diamond</strong> by <a href=\"https://github.com/Hackzzila\">Hackzzila</a>.\n        The source code is licensed <a href=\"http://opensource.org/licenses/mit-license.php\">MIT</a>. \n        Website modeled after <a href=\"https://yarnpkg.com/\" target=\"_blank\">yarnpkg.com</a>.\n      </p>\n      <p>\n        <a class=\"icon\" href=\"https://github.com/diamondpkg/diamond\">\n          <i class=\"fa fa-github\"></i>\n        </a>\n      </p>\n    </div>\n  </div>\n</footer>";
},"useData":true});
templates['error'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<section class=\"hero is-info is-fullheight\">\n  <div class=\"hero-body\">\n    <div class=\"container\">\n      <div class=\"center\">\n        <img src=\"/assets/img/Diamond.svg\" alt=\"Diamond\">\n        <h1 class=\"title is-1\">"
    + alias4(((helper = (helper = helpers.error || (depth0 != null ? depth0.error : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"error","hash":{},"data":data}) : helper)))
    + "</h1>\n        <a href=\"/\">"
    + alias4(((helper = (helper = helpers["go-home"] || (depth0 != null ? depth0["go-home"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"go-home","hash":{},"data":data}) : helper)))
    + "</a>\n      </div>\n    </div>\n  </div>\n</section>";
},"useData":true});
templates['index'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<nav class=\"nav has-shadow\">\n  <div class=\"container\">\n    <div class=\"nav-left\">\n      <a class=\"nav-item\" href=\"/\">\n        <img src=\"/assets/img/Diamond.png\" alt=\"Bulma logo\">\n        <h4 class=\"title is-4\">&nbsp;diamond</h4>\n      </a>\n      <a class=\"nav-item is-tab is-hidden-mobile is-active\" href=\"/\">"
    + alias4(((helper = (helper = helpers.home || (depth0 != null ? depth0.home : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"home","hash":{},"data":data}) : helper)))
    + "</a>\n      <a class=\"nav-item is-tab is-hidden-mobile\" href=\"docs\">"
    + alias4(((helper = (helper = helpers.docs || (depth0 != null ? depth0.docs : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"docs","hash":{},"data":data}) : helper)))
    + "</a>\n      <a class=\"nav-item is-tab is-hidden-mobile\" href=\"unify\">Unify</a>\n    </div>\n    <span class=\"nav-toggle\">\n      <span></span>\n      <span></span>\n      <span></span>\n    </span>\n    <div class=\"nav-right nav-menu\">\n      <a class=\"nav-item is-tab is-hidden-tablet is-active\">"
    + alias4(((helper = (helper = helpers.home || (depth0 != null ? depth0.home : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"home","hash":{},"data":data}) : helper)))
    + "</a>\n      <a class=\"nav-item is-tab is-hidden-tablet\" href=\"unify\">Unify</a>\n      <div class=\"nav-item\">\n        <div class=\"icon lang\">\n          <i class=\"fa fa-language\"></i>\n        </div>\n        <div class=\"field\">\n          <p class=\"control\">\n            <span class=\"select\">\n              <select class=\"lang-select\">\n                <option value=\"en-us\">English</option>\n                <option value=\"pt-br\">Português do Brasil</option>\n              </select>\n            </span>\n          </p>\n        </div>\n      </div>\n      <a class=\"nav-item\" href=\"https://discord.gg/ZeX76Zy\" target=\"_blank\">\n        <span class=\"is-tab is-hidden-tablet\">Discord</span>\n        <span class=\"icon is-hidden-mobile\">\n          <svg class=\"svg-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 245 240\"><defs><style>.cls-1{fill:#7a7a7a;}.cls-2{fill:#fff;}</style></defs><path class=\"cls-1\" d=\"M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z\"/><path class=\"cls-1\" d=\"M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z\"/></svg>\n        </span>\n      </a>\n      <a class=\"nav-item\" href=\"https://npmjs.com/diamondpkg\" target=\"_blank\">\n      <span class=\"is-tab is-hidden-tablet\">npm</span>\n        <span class=\"icon is-hidden-mobile\">\n          <svg class=\"svg-icon npm\" id=\"Layer_1\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 990 990\"><defs><style>.cls-1{fill:#7a7a7a;}.cls-2{fill:#fff;}</style></defs><title>n</title><path class=\"cls-1\" d=\"M0,990V0H990V990ZM186.19,185.53V803h312V314.29H680v488.8H803.78V185.53Z\"/><path class=\"cls-2\" d=\"M186.19,185.53h617.6V803.09H680V314.29H498.17V803h-312Z\"/></svg>\n        </span>\n      </a>\n      <a class=\"nav-item\" href=\"https://github.com/diamondpkg/diamond\" target=\"_blank\">\n        <span class=\"is-tab is-hidden-tablet\">GitHub</span>\n        <span class=\"icon is-hidden-mobile\">\n          <svg  class=\"svg-icon\"viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" stroke-linejoin=\"round\" stroke-miterlimit=\"1.414\"><defs><style>.cls-1{fill:#7a7a7a;}.cls-2{fill:#fff;}</style></defs><path class='cls-1' d=\"M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.09-.202-.36-1.015.07-2.117 0 0 .67-.215 2.2.82.64-.178 1.32-.266 2-.27.68.004 1.36.092 2 .27 1.52-1.035 2.19-.82 2.19-.82.43 1.102.16 1.915.08 2.117.51.56.82 1.274.82 2.147 0 3.073-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38C13.71 14.53 16 11.53 16 8c0-4.418-3.582-8-8-8\"/></svg>\n        </span>\n      </a>\n    </div>\n  </div>\n</nav>\n\n<section class=\"hero is-medium is-info\">\n  <div class=\"hero-body\">\n    <div class=\"container\">\n      <h1 class=\"title main-text\">\n        "
    + alias4(((helper = (helper = helpers.main || (depth0 != null ? depth0.main : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"main","hash":{},"data":data}) : helper)))
    + "\n      </h1>\n      <div class=\"bottom\">\n        <a class=\"button is-info is-outlined get-started\" href=\"docs\">"
    + alias4(((helper = (helper = helpers["get-started"] || (depth0 != null ? depth0["get-started"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"get-started","hash":{},"data":data}) : helper)))
    + "</a>\n        <h2 class=\"subtitle sub-text\">\n          <b>"
    + alias4(((helper = (helper = helpers["install-with"] || (depth0 != null ? depth0["install-with"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"install-with","hash":{},"data":data}) : helper)))
    + ": </b>\n          <code>npm i -g diamondpkg</code>\n        </h2>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"hero\">\n  <div class=\"hero-body\">\n    <div class=\"container\">\n      <h1 class=\"title\">\n        "
    + alias4(((helper = (helper = helpers["packages-title"] || (depth0 != null ? depth0["packages-title"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"packages-title","hash":{},"data":data}) : helper)))
    + "\n      </h1>\n      <h2 class=\"subtitle\">\n        "
    + alias4(((helper = (helper = helpers["packages-content"] || (depth0 != null ? depth0["packages-content"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"packages-content","hash":{},"data":data}) : helper)))
    + "\n      </h2>\n    </div>\n  </div>\n</section>\n\n<section class=\"hero\">\n  <div class=\"hero-body\">\n    <div class=\"container\">\n      <h1 class=\"title\">\n        "
    + alias4(((helper = (helper = helpers["cross-preprocessor-title"] || (depth0 != null ? depth0["cross-preprocessor-title"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cross-preprocessor-title","hash":{},"data":data}) : helper)))
    + "\n      </h1>\n      <h2 class=\"subtitle\">\n        "
    + alias4(((helper = (helper = helpers["cross-preprocessor-content"] || (depth0 != null ? depth0["cross-preprocessor-content"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cross-preprocessor-content","hash":{},"data":data}) : helper)))
    + "\n      </h2>\n    </div>\n  </div>\n</section>\n\n<section class=\"hero\">\n  <div class=\"hero-body\">\n    <div class=\"container\">\n      <h1 class=\"title\">\n        "
    + alias4(((helper = (helper = helpers["multipurpose-title"] || (depth0 != null ? depth0["multipurpose-title"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"multipurpose-title","hash":{},"data":data}) : helper)))
    + "\n      </h1>\n      <h2 class=\"subtitle\">\n        "
    + alias4(((helper = (helper = helpers["multipurpose-content"] || (depth0 != null ? depth0["multipurpose-content"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"multipurpose-content","hash":{},"data":data}) : helper)))
    + "\n      </h2>\n    </div>\n  </div>\n</section>\n\n<section class=\"hero\">\n  <div class=\"hero-body\">\n    <div class=\"container\">\n      <h1 class=\"title\">\n        "
    + alias4(((helper = (helper = helpers["secure-title"] || (depth0 != null ? depth0["secure-title"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"secure-title","hash":{},"data":data}) : helper)))
    + "\n      </h1>\n      <h2 class=\"subtitle\">\n        "
    + alias4(((helper = (helper = helpers["secure-content"] || (depth0 != null ? depth0["secure-content"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"secure-content","hash":{},"data":data}) : helper)))
    + "\n      </h2>\n    </div>\n  </div>\n</section>\n\n<section class=\"hero\">\n  <div class=\"hero-body\">\n    <div class=\"container\">\n      <h1 class=\"title\">\n        "
    + alias4(((helper = (helper = helpers["fast-title"] || (depth0 != null ? depth0["fast-title"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fast-title","hash":{},"data":data}) : helper)))
    + "\n      </h1>\n      <h2 class=\"subtitle\">\n        "
    + alias4(((helper = (helper = helpers["fast-content"] || (depth0 != null ? depth0["fast-content"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fast-content","hash":{},"data":data}) : helper)))
    + "\n      </h2>\n    </div>\n  </div>\n</section>\n\n<section class=\"hero\">\n  <div class=\"hero-body\">\n    <div class=\"container\">\n      <h1 class=\"title\">\n        "
    + alias4(((helper = (helper = helpers["flatpacked-title"] || (depth0 != null ? depth0["flatpacked-title"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"flatpacked-title","hash":{},"data":data}) : helper)))
    + "\n      </h1>\n      <h2 class=\"subtitle\">\n        "
    + alias4(((helper = (helper = helpers["flatpacked-content"] || (depth0 != null ? depth0["flatpacked-content"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"flatpacked-content","hash":{},"data":data}) : helper)))
    + "\n      </h2>\n    </div>\n  </div>\n</section>\n\n<section class=\"hero is-medium is-info\">\n  <div class=\"hero-body\">\n    <div class=\"container\">\n      <h2 class=\"title main-text bottom-text\">\n        "
    + alias4(((helper = (helper = helpers["waiting-for"] || (depth0 != null ? depth0["waiting-for"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"waiting-for","hash":{},"data":data}) : helper)))
    + "\n      </h1>\n      <a class=\"button is-info is-outlined get-started bottom-text\" href=\"docs\">"
    + alias4(((helper = (helper = helpers["get-started"] || (depth0 != null ? depth0["get-started"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"get-started","hash":{},"data":data}) : helper)))
    + "</a>\n    </div>\n  </div>\n</section>\n\n<footer class=\"footer\">\n  <div class=\"container\">\n    <div class=\"content has-text-centered\">\n      <p>\n        <strong>diamond</strong> by <a href=\"https://github.com/Hackzzila\">Hackzzila</a>.\n        The source code is licensed <a href=\"http://opensource.org/licenses/mit-license.php\">MIT</a>. \n        Website modeled after <a href=\"https://yarnpkg.com/\" target=\"_blank\">yarnpkg.com</a>.\n      </p>\n      <p>\n        <a class=\"icon\" href=\"https://github.com/diamondpkg/diamond\">\n          <i class=\"fa fa-github\"></i>\n        </a>\n      </p>\n    </div>\n  </div>\n</footer>";
},"useData":true});
})();