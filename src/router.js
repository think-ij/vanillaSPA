// template
const mainTemplate = require("./pages/main.hbs")();
const aboutTemplate = require("./pages/about.hbs")();

// modules
const mainModule = require("./modules/main.js").default;
const aboutModule = require("./modules/about.js").default;

// const mainTemplate = mainTemplate();
// const aboutTemplate = aboutTemplate();

const routes = {
  "/": mainTemplate,
  "/main": mainTemplate,
  "/about": aboutTemplate,
};

const modules = {
  "/": mainModule,
  "/main": mainModule,
  "/about": aboutModule,
};

let appContent;
// entry point
const initialRoutes = (element) => {
  // console.log("a");
  appContent = element;
  renderHTML(routes["/"]);

  window.onpopstate = () => {
    // console.log("b");
    const pathName = window.location.pathname;
    renderHTML(routes[pathName]);
    modules[pathName]();
  };
};

// set browser history
const historyRouterPush = (pathName, data, callback) => {
  // console.log("c");
  // console.log(pathName);
  window.history.pushState(data, pathName, window.location.origin + pathName);
  renderHTML(routes[pathName]);
  modules[pathName](data);
  callback && typeof callback === "function" && callback(data);

  console.log("change done");
};

// render
const renderHTML = (route) => {
  appContent.innerHTML = route;
};

module.exports = {
  initialRoutes,
  historyRouterPush,
};
