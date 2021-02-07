!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=7)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("isomorphic-fetch")},function(e,t){e.exports=require("cors")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("react-loader-spinner")},function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),c=n(4),i=n.n(c),o=n(0),l=n.n(o),s=n(5),u=n(1),f=[{id:"2006-2007",child:[{id:"2006",title:"2006",value:2006},{id:"2007",title:"2007",value:2007}]},{id:"2008-2009",child:[{id:"2008",title:"2008",value:2008},{id:"2009",title:"2009",value:2009}]},{id:"2010-2011",child:[{id:"2010",title:"2010",value:2010},{id:"2011",title:"2011",value:2011}]},{id:"2012-2013",child:[{id:"2012",title:"2012",value:2012},{id:"2013",title:"2013",value:2013}]},{id:"2014-2015",child:[{id:"2014",title:"2014",value:2014},{id:"2015",title:"2015",value:2015}]},{id:"2016-2017",child:[{id:"2016",title:"2016",value:2016},{id:"2017",title:"2017",value:2017}]},{id:"2018-2019",child:[{id:"2018",title:"2018",value:2018},{id:"2019",title:"2019",value:2019}]},{id:"2020-2021",child:[{id:"2020",title:"2020",value:2020}]}],m=function(e){var t=e._handleFilters,n=e.activeYear,r=e.land_success,a=e.launch_success;return l.a.createElement("aside",{className:"sidebar"},l.a.createElement("h2",null,"Filters"),l.a.createElement("div",{className:"sidebarContent"},l.a.createElement("div",{className:"sidebarTitle"},"Launch Year"),l.a.createElement("ul",{className:"sidebarList"},f.map((function(e){return l.a.createElement("li",{key:e.id},e.child.map((function(e){return l.a.createElement("span",{key:e.id,onClick:function(){return t("activeYear",e.value)},className:n===e.value?"active":""},e.title)})))}))),l.a.createElement("div",{className:"sidebarTitle"},"Successful Launch"),l.a.createElement("ul",{className:"sidebarList"},l.a.createElement("li",null,l.a.createElement("span",{onClick:function(){return t("launch_success",!0)},className:!0===a?"active":""},"True"),l.a.createElement("span",{onClick:function(){return t("launch_success",!1)},className:!1===a?"active":""},"False"))),l.a.createElement("div",{className:"sidebarTitle"},"Successful Landing"),l.a.createElement("ul",{className:"sidebarList"},l.a.createElement("li",null,l.a.createElement("span",{onClick:function(){return t("land_success",!0)},className:!0===r?"active":""},"True"),l.a.createElement("span",{onClick:function(){return t("land_success",null)},className:null===r?"active":""},"False")))))},p=n(6),d=n.n(p),h=function(e){var t=e.missions,n=e.loading;return l.a.createElement(l.a.Fragment,null,t&&t.length&&!n?t.map((function(e){var t=e.mission_name.length>10?"".concat(e.mission_name.substring(0,10),"..."):e.mission_name;return l.a.createElement("div",{className:"column",key:e.flight_number},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"cardImage"},l.a.createElement("img",{src:"https://cdn.arstechnica.net/wp-content/uploads/2018/07/Rocket-Report-Intro-3-800x450.jpg",alt:"rocket images"})),l.a.createElement("div",{className:"cardContent"},l.a.createElement(u.Link,{to:"#",className:"cardTitle",title:e.mission_name},"".concat(t," #").concat(e.flight_number)),l.a.createElement("ul",{className:"contentList"},l.a.createElement("li",{className:"missionIdWrap"},l.a.createElement("span",{className:"title"},"Mission Ids "),e.mission_id.length?l.a.createElement("ul",{className:"missionIdList"},e.mission_id.map((function(e){return l.a.createElement("li",{key:e},l.a.createElement("span",{className:"circle"}),l.a.createElement("span",{className:"content"},e))}))):null),l.a.createElement("li",null,l.a.createElement("span",{className:"title"},"Launch Year "),l.a.createElement("span",{className:"content"},e.launch_year)),l.a.createElement("li",null,l.a.createElement("span",{className:"title"},"successful Launch "),l.a.createElement("span",{className:"content"},"".concat(e.launch_success))),l.a.createElement("li",null,l.a.createElement("span",{className:"title"},"successful Landing "),l.a.createElement("span",{className:"content"},"".concat(null!==e.rocket.first_stage.cores[0].land_success?e.rocket.first_stage.cores[0].land_success:"No Data")))))))})):t&&0==t.length?l.a.createElement("h3",{className:"emptyMission"},"No missions found"):l.a.createElement(d.a,{type:"TailSpin",color:"grey",height:50,width:50,className:"loader"}))},y=n(3),v=n.n(y);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=S(e);if(t){var a=S(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return O(this,n)}}function O(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?N(e):t}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=[{path:"/",exact:!0,component:function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(c,e);var t,n,r,a=_(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),j(N(t=a.call(this,e)),"_handleFilters",(function(e,n){var r,a;""!==t.state[e]&&t.state[e]===n?t.setState((j(r={},e,""),j(r,"loading",!0),r),(function(){t.fetchFilteredData()})):t.setState((j(a={},e,n),j(a,"loading",!0),a),(function(){t.fetchFilteredData()}))})),j(N(t),"fetchFilteredData",(function(){var e=t.state;(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r="";return r=encodeURI("https://api.spaceXdata.com/v3/launches?limit=100&launch_success=".concat(e,"&land_success=").concat(t,"&launch_year=").concat(n)),v()(r).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.warn(e),null}))})(e.launch_success,e.land_success,e.activeYear).then((function(e){e&&Array.isArray(e)&&t.setState({loading:!1,missions:e})}))})),t.state={loading:!0,activeYear:"",launch_success:"",land_success:""},t}return t=c,(n=[{key:"componentDidMount",value:function(){var e,t=this;(e=encodeURI("https://api.spaceXdata.com/v3/launches?limit=100"),v()(e).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.warn(e),null}))).then((function(e){e&&Array.isArray(e)&&t.setState({loading:!1,missions:e})}))}},{key:"render",value:function(){var e=this.state,t=e.loading,n=e.missions,r=e.activeYear,a=e.launch_success,c=e.land_success;return l.a.createElement("div",{className:"container"},l.a.createElement("header",null,l.a.createElement("h1",{className:"mainHeading"},"spaceX launch programs")),l.a.createElement("div",{className:"mainWrapper"},l.a.createElement(m,{_handleFilters:this._handleFilters,activeYear:r,launch_success:a,land_success:c}),l.a.createElement("section",{className:"missionWrapper"},l.a.createElement(h,{missions:n,loading:t}))))}}])&&E(t.prototype,n),r&&E(t,r),c}(o.Component)}];function x(){return l.a.createElement("div",null,"Four Oh Four")}function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function T(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function L(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Y(e);if(t){var a=Y(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return D(this,n)}}function D(e,t){return!t||"object"!==R(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Y(e){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var I=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&F(e,t)}(c,e);var t,n,r,a=L(c);function c(){return T(this,c),a.apply(this,arguments)}return t=c,(n=[{key:"render",value:function(){return l.a.createElement(u.Switch,null,w.map((function(e){var t=e.path,n=e.exact,r=e.component,a=k(e,["path","exact","component"]);return l.a.createElement(u.Route,{key:t,path:t,exact:n,render:function(e){return l.a.createElement(r,P({},e,a))}})})),l.a.createElement(u.Route,{render:function(e){return l.a.createElement(x,e)}}))}}])&&C(t.prototype,n),r&&C(t,r),c}(o.Component),q=a()(),M=process.env.PORT||3e3;q.use(i()()),q.use(a.a.static("public")),q.get("*",(function(e,t,n){var r=Object(s.renderToString)(l.a.createElement(u.StaticRouter,{location:e.url,x:!0},l.a.createElement(I,null)));t.send('\n      <!DOCTYPE html>\n      <html>\n      <head>\n      <meta name="description" content="This is SSR app with React">\n      <meta name="robots" content="noindex, nofollow">\n      <meta name="viewport" content="width=device-width, initial-scale=1">\n      <title>SSR with REACT</title>\n      <script src="/bundle.js" defer><\/script>\n        </head>\n\n        <body>\n          <div id="app">'.concat(r,"</div>\n        </body>\n      </html>\n    "))})),q.listen(M,(function(){console.log("Server is listening on port: ".concat(M))}))}]);