import $ from "jquery";

const appNamespace = "myApp";
// router
const { initialRoutes, historyRouterPush } = require("./router");

// app
const appContent = document.querySelector("#app-content");

// Browser History

(function (window, document, $, nData) {
  var t;
  var App = function () {
    t = this;

    this.state = {};

    this.element = {};
    this.element["$win"] = $(window);
    this.element["$doc"] = $(document);
    this.element["$body"] = $("body");

    this.templates = {};

    this.methods = {};

    // prototype
    const proto = App.prototype;
    proto["build"] = function () {
      initialRoutes(appContent);
      t.init();
    };

    proto["init"] = function () {
      eventBind();
    };

    proto["routeChange"] = historyRouterPush;

    function eventBind() {
      //
      t.element.$doc.on("click", ".history", (e) => {
        t.routeChange(e.target.getAttribute("route"), {}, () => {});
      });
    }

    this.build();
  };

  window[appNamespace] = new App();
})(window, document, $ || jQuery);
