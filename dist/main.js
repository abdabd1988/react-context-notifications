!function(t){function e(e){for(var o,a,c=e[0],f=e[1],s=e[2],u=0,p=[];u<c.length;u++)a=c[u],i[a]&&p.push(i[a][0]),i[a]=0;for(o in f)Object.prototype.hasOwnProperty.call(f,o)&&(t[o]=f[o]);for(l&&l(e);p.length;)p.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,c=1;c<n.length;c++){var f=n[c];0!==i[f]&&(o=!1)}o&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},i={0:0},r=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var c=window.webpackJsonp=window.webpackJsonp||[],f=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var l=f;r.push([12,1]),n()}({12:function(t,e,n){"use strict";n.r(e);var o=n(1),i=n.n(o),r=n(0),a=n.n(r),c=n(3),f=n(4),s=n.n(f),l=Object(o.createContext)({notifications:null}),u=l.Consumer,p=l.Provider;function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function b(t,e){return!e||"object"!==y(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(t,e){return(h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var v=function(t){function e(t){var n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),n=b(this,m(e).call(this,t));var o=t.id,i=t.deleteNotification,r=t.deleteAfter;return n.deleteTimeout=setTimeout(function(){return i(o)},r),n}var n,r,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}(e,o["Component"]),n=e,(r=[{key:"componentWillUnmount",value:function(){this.deleteTimeout&&clearTimeout(this.deleteTimeout)}},{key:"render",value:function(){var t=this.props,e=t.id,n=t.message,o=t.position,r=t.deleteNotification,a=t.defaultStyles,c=t.classNamePrefix;return i.a.createElement("div",{className:"".concat(c,"-item"),style:a?{position:"relative",display:"flex",alignItem:"center",alignContent:"center",margin:"10px",background:"#fff",borderRadius:"4px",color:"#000",boxShadow:"0 5px 10px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1)",left:"top center"===o||"bottom center"===o?"-50%":null,wordBreak:"break-all",lineHeight:1.2}:void 0},i.a.createElement("div",{className:"".concat(c,"-item-content"),style:a?{width:"150px",padding:"16px 12px",color:"#4a4a4a",fontSize:"16px"}:void 0},n),i.a.createElement("button",{type:"button",style:a?{display:"block",width:"50px",border:"none",padding:0,margin:0,borderLeft:"1px solid #eee",outline:"none",background:"none",cursor:"pointer",fontSize:"20px",color:"#000"}:void 0,onClick:function(){return r(e)}},"×"))}}])&&d(n.prototype,r),a&&d(n,a),e}();function g(t){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function O(){return(O=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function N(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function w(t){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function j(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function S(t,e){return(S=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}v.propTypes={id:a.a.string.isRequired,message:a.a.oneOfType([a.a.string,a.a.number]).isRequired,position:a.a.string,deleteAfter:a.a.number,deleteNotification:a.a.func.isRequired,defaultStyles:a.a.bool,classNamePrefix:a.a.string},v.defaultProps={position:null,classNamePrefix:"notification",defaultStyles:!1,deleteAfter:2e3};var x=function(t){function e(t){var n,o,i;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),o=this,(n=!(i=w(e).call(this,t))||"object"!==g(i)&&"function"!=typeof i?j(o):i).renderNotification=n.renderNotification.bind(j(n)),n}var n,r,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&S(t,e)}(e,o["Component"]),n=e,(r=[{key:"renderNotification",value:function(t){var e=this.props.notificationItem;return i.a.createElement(e,O({key:t.id},t))}},{key:"renderAreas",value:function(t){var e=this,n=this.props.settings;if(t){var o=(n||{}).defaultStyles;return Object.keys(t).map(function(n){var r=t[n],a=r.notifications,c=r.styles;return i.a.createElement("div",{key:n,className:n,style:o?c:null},a&&a.map(e.renderNotification))})}return null}},{key:"render",value:function(){var t=this.props,e=t.notifications;if(!t.notificationItem)return null;var n={"top-left":{notifications:e.filter(function(t){return"top left"===t.position}),styles:{position:"fixed",left:0,top:0}},"top-center":{notifications:e.filter(function(t){return"top center"===t.position}),styles:{position:"fixed",left:"50%",top:0}},"top-right":{notifications:e.filter(function(t){return"top right"===t.position}),styles:{position:"fixed",right:0,top:0}},"bottom-left":{notifications:e.filter(function(t){return"bottom left"===t.position}),styles:{position:"fixed",left:0,bottom:0}},"bottom-center":{notifications:e.filter(function(t){return!t.position||"bottom center"===t.position}),styles:{position:"fixed",left:"50%",bottom:0}},"bottom-right":{notifications:e.filter(function(t){return"bottom right"===t.position}),styles:{position:"fixed",right:0,bottom:0}}};return this.renderAreas(n)}}])&&N(n.prototype,r),a&&N(n,a),e}();function P(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function _(t){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function k(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function T(t){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function E(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function A(t,e){return(A=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}x.propTypes={notifications:a.a.arrayOf(a.a.object).isRequired,notificationItem:a.a.oneOfType([a.a.node,a.a.element,a.a.func]),settings:a.a.shape({className:a.a.string,classNamePrefix:a.a.string,defaultStyles:a.a.bool})},x.defaultProps={notificationItem:null,settings:null};var C=function(t){function e(t){var n,o,i;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),o=this;var r=(n=!(i=T(e).call(this,t))||"object"!==_(i)&&"function"!=typeof i?E(o):i).props.settings.className;return n.state={notifications:[]},n.el=document.createElement("div"),n.el.setAttribute("class",r),n.addNotification=n.addNotification.bind(E(n)),n.deleteNotification=n.deleteNotification.bind(E(n)),n.clearNotifications=n.clearNotifications.bind(E(n)),n}var n,r,a;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&A(t,e)}(e,o["Component"]),n=e,(r=[{key:"componentDidMount",value:function(){document.body.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){document.body.removeChild(this.el)}},{key:"addNotification",value:function(t){if(t&&"object"===_(t)){var e=this.props.settings,n=this.state.notifications,o=t.message,i=t.position,r=t.deleteAfter,a=t.onNotificationDelete;this.setState({notifications:[].concat(P(n),[{id:s()(),message:o,position:i,deleteAfter:r,deleteNotification:this.deleteNotification,classNamePrefix:e.classNamePrefix,defaultStyles:e.defaultStyles,onNotificationDelete:a&&"function"==typeof a?a:null}])})}else console.warn("react-context-notification: You tried to add a notification with incorrect function parameters")}},{key:"deleteNotification",value:function(t){var e=this.state.notifications;this.setState({notifications:e.filter(function(e){return e.id!==t})})}},{key:"clearNotifications",value:function(){this.setState({notifications:[]})}},{key:"render",value:function(){var t=this.props,e=t.children,n=t.settings,o=n.component,r=this.state.notifications,a={notifications:r,addNotification:this.addNotification,clearNotifications:this.clearNotifications},f=i.a.createElement(x,{notifications:r,settings:n,notificationItem:o||v});return i.a.createElement(p,{value:a},e,Object(c.createPortal)(f,this.el))}}])&&k(n.prototype,r),a&&k(n,a),e}();function R(){return(R=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}C.propTypes={children:a.a.oneOfType([a.a.node,a.a.element,a.a.func,a.a.array]).isRequired,settings:a.a.shape({className:a.a.string,classNamePrefix:a.a.string,component:a.a.oneOfType([a.a.node,a.a.element]),defaultStyles:a.a.bool})},C.defaultProps={settings:{className:"notifications",classNamePrefix:"notifications",component:null,defaultStyles:!1}};var I=function(t){return function(e){return i.a.createElement(u,null,function(n){var o=n.notifications,r=n.addNotification,a=n.clearNotifications;return i.a.createElement(t,R({},e,{notifications:o,addNotification:r,clearNotifications:a}))})}};n.d(e,"NotificationsProvider",function(){return C}),n.d(e,"withNotifications",function(){return I})}});