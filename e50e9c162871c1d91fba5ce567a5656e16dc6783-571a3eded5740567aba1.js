(self.webpackChunkinteo_gatsby_template=self.webpackChunkinteo_gatsby_template||[]).push([[61],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var c,u,l,s;if(Array.isArray(e)){if((c=e.length)!=o.length)return!1;for(u=c;0!=u--;)if(!a(e[u],o[u]))return!1;return!0}if(n&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!o.has(u.value[0]))return!1;for(s=e.entries();!(u=s.next()).done;)if(!a(u.value[1],o.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!o.has(u.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((c=e.length)!=o.length)return!1;for(u=c;0!=u--;)if(e[u]!==o[u])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(o,l[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!e.$$typeof)&&!a(e[l[u]],o[l[u]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return a(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},5414:function(e,t,n){"use strict";n.d(t,{q:function(){return pe}});var r,i,a,o,c=n(5697),u=n.n(c),l=n(4839),s=n.n(l),f=n(2993),M=n.n(f),g=n(7294),N=n(6494),p=n.n(N),d="bodyAttributes",y="htmlAttributes",m="titleAttributes",j={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(j).map((function(e){return j[e]})),"charset"),D="cssText",I="href",h="http-equiv",A="innerHTML",x="itemprop",O="name",E="property",w="rel",b="src",L="target",z={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},v="defaultTitle",k="defer",S="encodeSpecialCharacters",C="onChangeClientState",Y="titleTemplate",U=Object.keys(z).reduce((function(e,t){return e[z[t]]=t,e}),{}),Q=[j.NOSCRIPT,j.SCRIPT,j.STYLE],P="data-react-helmet",R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},W=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},F=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},V=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},_=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},H=function(e){var t=X(e,j.TITLE),n=X(e,Y);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=X(e,v);return t||r||void 0},q=function(e){return X(e,C)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Z({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[j.BASE]})).map((function(e){return e[j.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var a=r[i].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},K=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+R(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var i={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),o=0;o<a.length;o++){var c=a[o],u=c.toLowerCase();-1===t.indexOf(u)||n===w&&"canonical"===e[n].toLowerCase()||u===w&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==A&&c!==D&&c!==x||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][l]&&(i[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(i),o=0;o<a.length;o++){var c=a[o],u=p()({},r[c],i[c]);r[c]=u}return e}),[]).reverse()},X=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:n.g.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,M=e.titleAttributes;ue(j.BODY,r),ue(j.HTML,i),ce(f,M);var g={baseTag:le(j.BASE,n),linkTags:le(j.LINK,a),metaTags:le(j.META,o),noscriptTags:le(j.NOSCRIPT,c),scriptTags:le(j.SCRIPT,l),styleTags:le(j.STYLE,s)},N={},p={};Object.keys(g).forEach((function(e){var t=g[e],n=t.newTags,r=t.oldTags;n.length&&(N[e]=n),r.length&&(p[e]=g[e].oldTags)})),t&&t(),u(e,N,p)},oe=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),ue(j.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(P),i=r?r.split(","):[],a=[].concat(i),o=Object.keys(t),c=0;c<o.length;c++){var u=o[c],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===i.indexOf(u)&&i.push(u);var s=a.indexOf(u);-1!==s&&a.splice(s,1)}for(var f=a.length-1;f>=0;f--)n.removeAttribute(a[f]);i.length===a.length?n.removeAttribute(P):n.getAttribute(P)!==o.join(",")&&n.setAttribute(P,o.join(","))}},le=function(e,t){var n=document.head||document.querySelector(j.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),i=Array.prototype.slice.call(r),a=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===A)n.innerHTML=t.innerHTML;else if(r===D)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(P,"true"),i.some((function(e,t){return o=t,n.isEqualNode(e)}))?i.splice(o,1):a.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:a}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[z[n]||n]=e[n],t}),t)},Me=function(e,t,n){switch(e){case j.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[P]=!0,i=fe(n,r),[g.createElement(j.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var i=se(n),a=oe(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+_(a,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+_(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case d:case y:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})[P]=!0,r);return Object.keys(t).forEach((function(e){var n=z[e]||e;if(n===A||n===D){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),g.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===A||e===D)})).reduce((function(e,t){var i=void 0===r[t]?t:t+'="'+_(r[t],n)+'"';return e?e+" "+i:i}),""),a=r.innerHTML||r.cssText||"",o=-1===Q.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(o?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},ge=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,M=e.titleAttributes;return{base:Me(j.BASE,t,r),bodyAttributes:Me(d,n,r),htmlAttributes:Me(y,i,r),link:Me(j.LINK,a,r),meta:Me(j.META,o,r),noscript:Me(j.NOSCRIPT,c,r),script:Me(j.SCRIPT,u,r),style:Me(j.STYLE,l,r),title:Me(j.TITLE,{title:f,titleAttributes:M},r)}},Ne=s()((function(e){return{baseTag:J([I,L],e),bodyAttributes:G(d,e),defer:X(e,k),encode:X(e,S),htmlAttributes:G(y,e),linkTags:K(j.LINK,[w,I],e),metaTags:K(j.META,[O,T,h,E,x],e),noscriptTags:K(j.NOSCRIPT,[A],e),onChangeClientState:q(e),scriptTags:K(j.SCRIPT,[b,A],e),styleTags:K(j.STYLE,[D],e),title:H(e),titleAttributes:G(m,e)}}),(function(e){ie&&ne(ie),e.defer?ie=te((function(){ae(e,(function(){ie=null}))})):(ae(e),ie=null)}),ge)((function(){return null})),pe=(i=Ne,o=a=function(e){function t(){return B(this,t),V(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!M()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case j.SCRIPT:case j.NOSCRIPT:return{innerHTML:t};case j.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return Z({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Z({},i,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,i=e.newProps,a=e.newChildProps,o=e.nestedChildren;switch(r.type){case j.TITLE:return Z({},i,((t={})[r.type]=o,t.titleAttributes=Z({},a),t));case j.BODY:return Z({},i,{bodyAttributes:Z({},a)});case j.HTML:return Z({},i,{htmlAttributes:Z({},a)})}return Z({},i,((n={})[r.type]=Z({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Z({},t);return Object.keys(e).forEach((function(t){var r;n=Z({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return g.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,a=i.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[U[n]||n]=e[n],t}),t)}(F(i,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case j.LINK:case j.META:case j.NOSCRIPT:case j.SCRIPT:case j.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:o,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=F(e,["children"]),r=Z({},n);return t&&(r=this.mapChildrenToProps(t,r)),g.createElement(i,r)},W(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(g.Component),a.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=i.peek,a.rewind=function(){var e=i.rewind();return e||(e=ge({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);pe.renderStatic=pe.rewind},4839:function(e,t,n){"use strict";var r,i=n(7294),a=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return u},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var o=i.prototype;return o.UNSAFE_componentWillMount=function(){l.push(this),s()},o.componentDidUpdate=function(){s()},o.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},o.render=function(){return a.createElement(r,this.props)},i}(i.PureComponent);return o(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),o(f,"canUseDOM",c),f}}},4752:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e){var t=e.label,n=e.link,i=e.size,a=e.icon,o=e.onClick,c=e.className;return r.createElement("a",{className:"button flex gap-1 items-center justify-center bg-primary-600 text-white font-semibold  "+("lg"===i?"px-6 py-4 text-body-sm":"px-5 py-3 text-body-xs")+" "+c,href:n,onClick:o},t,!0===a?r.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("path",{d:"M14.1668 5.83301L5.8335 14.1663",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M6.6665 5.83301H14.1665V13.333",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})):"")}},3498:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7294),i=n(5414),a=n(1597),o=n(4752),c=function(e){document.getElementById(e).scrollIntoView({behavior:"smooth"})},u=function(){return r.createElement("header",null,r.createElement("div",{className:"container mx-auto"},r.createElement("div",{className:"flex py-5 justify-between items-center"},r.createElement(a.Link,{to:"/"},r.createElement("img",{className:"h-8 w-auto",src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCA4OCAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuNjk2NzQgMjYuNTE5MVYyNi4xMjg0QzUuMTQyMTQgMjYuMTI4NCA1LjE0MjE0IDI0LjUzNTUgNS4xNDIxNCAyMi4xNjEyVjkuODM4OEM1LjE0MjE0IDcuNDY0NDggNS4xNDIxNCA1Ljg3MTU4IDYuNjk2NzQgNS44NzE1OFY1LjQ4MDg3SDBWNS44NzE1OEMxLjU1NDYgNS44NzE1OCAxLjU1NDYgNy40NjQ0OCAxLjU1NDYgOS44Mzg4VjIyLjE2MTJDMS41NTQ2IDI0LjUzNTUgMS41NTQ2IDI2LjEyODQgMCAyNi4xMjg0VjI2LjUxOTFINi42OTY3NFoiIGZpbGw9IiMyQzJDMkMiLz4KPHBhdGggZD0iTTguMTQ1NTMgNS40ODA4N1Y1Ljg3MTU4QzkuNzAwMTMgNS44NzE1OCA5LjcwMDEzIDcuNDY0NDggOS43MDAxMyA5LjgzODhWMjIuMTYxMkM5LjcwMDEzIDI0LjUzNTUgOS43MDAxMyAyNi4xMjg0IDguMTQ1NTMgMjYuMTI4NFYyNi41MTkxSDE0Ljg0MjNWMjYuMTI4NEMxMy4yODc3IDI2LjEyODQgMTMuMjg3NyAyNC41MzU1IDEzLjI4NzcgMjIuMTYxMlYxMi45OTQ1TDI0LjI1OTYgMjYuNTE5MUgyOC4zMjU0VjI2LjEyODRDMjYuNzcwOCAyNi4xMjg0IDI2Ljc3MDggMjQuNTM1NSAyNi43NzA4IDIyLjE2MTJWOS44Mzg4QzI2Ljc3MDggNy40NjQ0OCAyNi43NzA4IDUuODcxNTggMjguMzI1NCA1Ljg3MTU4VjUuNDgwODdIMjEuNjI4N1Y1Ljg3MTU4QzIzLjAzMzggNS44NzE1OCAyMy4xODMzIDcuMTkzOTkgMjMuMTgzMyA5LjIzNzdWMTkuNjM2NkwxMS44MjI4IDUuNDgwODdIOC4xNDU1M1oiIGZpbGw9IiMyQzJDMkMiLz4KPHBhdGggZD0iTTMwLjEwODkgNS40ODA4N1YxMC40MDk4SDMwLjQ5NzZDMzAuNDk3NiA4Ljg0Njk5IDMyLjA4MjEgOC44NDY5OSAzNC40NDM5IDguODQ2OTlIMzYuODk1M1YyMi4xNjEyQzM2Ljg5NTMgMjQuNTM1NSAzNi44OTUzIDI2LjEyODQgMzUuMzcwNiAyNi4xMjg0VjI2LjUxOTFINDIuMDM3NVYyNi4xMjg0QzQwLjQ4MjkgMjYuMTI4NCA0MC40ODI5IDI0LjUzNTUgNDAuNDgyOSAyMi4xNjEyVjguODQ2OTlINDIuOTk0MkM0NS4zNTU5IDguODQ2OTkgNDYuOTQwNCA4Ljg0Njk5IDQ2Ljk0MDQgMTAuNDA5OEg0Ny4zMjkxVjUuNDgwODdIMzAuMTA4OVoiIGZpbGw9IiMyQzJDMkMiLz4KPHBhdGggZD0iTTQ5LjEzNTkgNS40ODA4N1Y1Ljg3MTU4QzUwLjY5MDUgNS44NzE1OCA1MC42OTA1IDcuNDY0NDggNTAuNjkwNSA5LjgzODhWMjIuMTYxMkM1MC42OTA1IDI0LjUzNTUgNTAuNjkwNSAyNi4xMjg0IDQ5LjEzNTkgMjYuMTI4NFYyNi41MTkxSDY0LjIzMzVMNjQuNjgxOSAyMS41OTAySDY0LjI2MzRDNjQuMjYzNCAyMy4xNTMgNjIuMjYwMyAyMy4xNTMgNTkuODk4NiAyMy4xNTNINTQuMjc4MVY4Ljg0Njk5SDU5Ljg5ODZDNjIuMjYwMyA4Ljg0Njk5IDYzLjg0NDggOC44NDY5OSA2My44NDQ4IDEwLjQwOThINjQuMjMzNVY1LjQ4MDg3SDQ5LjEzNTlaTTU5Ljg2ODcgMTkuMzY2MUM2MC4xMDc4IDE3LjcxMzEgNjEuMjczOCAxNi4xNTAzIDYyLjgyODQgMTYuMTUwM1YxNS43NTk2QzYxLjI3MzggMTUuNzU5NiA2MC4xMDc4IDE0LjIyNjggNTkuODY4NyAxMi41NDM3SDU5LjQ4QzU5LjI3MDcgMTQuMjI2OCA1OC4wNzQ5IDE1Ljc1OTYgNTYuNTUwMiAxNS43NTk2VjE2LjE1MDNDNTguMDc0OSAxNi4xNTAzIDU5LjI3MDcgMTcuNzEzMSA1OS40OCAxOS4zNjYxSDU5Ljg2ODdaIiBmaWxsPSIjMkMyQzJDIi8+CjxwYXRoIGQ9Ik04OCAxNkM4OCA4LjY2NjY2IDgyLjYxODcgNSA3Ny4yMzc0IDVDNzEuODI2MiA1IDY2LjQ0NDkgOC42NjY2NiA2Ni40NDQ5IDE2QzY2LjQ0NDkgMjMuMzMzMyA3MS44MjYyIDI3IDc3LjIzNzQgMjdDODIuNjE4NyAyNyA4OCAyMy4zMzMzIDg4IDE2Wk04NC41MDIyIDE2Qzg0LjUwMjIgMjAuOTI5IDgwLjg1NDggMjMuMzYzNCA3Ny4yMzc0IDIzLjM2MzRDNzMuNTkwMSAyMy4zNjM0IDY5Ljk3MjYgMjAuOTI5IDY5Ljk3MjYgMTZDNjkuOTcyNiAxMS4wNzEgNzMuNTkwMSA4LjYzNjYxIDc3LjIzNzQgOC42MzY2MUM4MC44NTQ4IDguNjM2NjEgODQuNTAyMiAxMS4wNzEgODQuNTAyMiAxNlpNNzcuNTA2NSAxOS4zMDZDNzcuNzQ1NiAxNy42MjI5IDc4LjkxMTYgMTYuMDkwMiA4MC40NjYyIDE2LjA5MDJWMTUuNjY5NEM3OC45MTE2IDE1LjY2OTQgNzcuNzQ1NiAxNC4xMzY2IDc3LjUwNjUgMTIuNDUzNkg3Ny4xMTc4Qzc2LjkwODUgMTQuMTM2NiA3NS43MTI3IDE1LjY2OTQgNzQuMTg4IDE1LjY2OTRWMTYuMDkwMkM3NS43MTI3IDE2LjA5MDIgNzYuOTA4NSAxNy42MjI5IDc3LjExNzggMTkuMzA2SDc3LjUwNjVaIiBmaWxsPSIjMkMyQzJDIi8+CjxwYXRoIGQ9Ik01OS44NjkzIDE5LjM2NjFDNjAuMTA4NCAxNy43MTMxIDYxLjI3NDQgMTYuMTUwMiA2Mi44MjkgMTYuMTUwMlYxNS43NTk1QzYxLjI3NDQgMTUuNzU5NSA2MC4xMDg0IDE0LjIyNjcgNTkuODY5MyAxMi41NDM3SDU5LjQ4MDZDNTkuMjcxMyAxNC4yMjY3IDU4LjA3NTUgMTUuNzU5NSA1Ni41NTA4IDE1Ljc1OTVWMTYuMTUwMkM1OC4wNzU1IDE2LjE1MDIgNTkuMjcxMyAxNy43MTMxIDU5LjQ4MDYgMTkuMzY2MUg1OS44NjkzWiIgZmlsbD0iIzk5NjgzMCIvPgo8cGF0aCBkPSJNNzcuNTA3IDE5LjMwNTlDNzcuNzQ2MiAxNy42MjI5IDc4LjkxMjIgMTYuMDkwMSA4MC40NjY4IDE2LjA5MDFWMTUuNjY5M0M3OC45MTIyIDE1LjY2OTMgNzcuNzQ2MiAxNC4xMzY2IDc3LjUwNyAxMi40NTM1SDc3LjExODRDNzYuOTA5MSAxNC4xMzY2IDc1LjcxMzMgMTUuNjY5MyA3NC4xODg2IDE1LjY2OTNWMTYuMDkwMUM3NS43MTMzIDE2LjA5MDEgNzYuOTA5MSAxNy42MjI5IDc3LjExODQgMTkuMzA1OUg3Ny41MDdaIiBmaWxsPSIjOTk2ODMwIi8+Cjwvc3ZnPgo=",alt:"Logo"})),r.createElement("nav",{className:"flex flex-row gap-6"},r.createElement("div",{className:"hidden md:flex gap-4 items-center"},[{name:"About",sectionId:"about"},{name:"Services",sectionId:"services"},{name:"Our Work",sectionId:"works"}].map((function(e){var t=e.name,n=e.sectionId;return r.createElement("a",{key:t,onClick:function(){return c(n)},className:"text-body-sm font-medium text-neutral-700 hover:text-primary-600 px-4 cursor-pointer"},t)}))),r.createElement(o.Z,{label:"CONTACT US",onClick:function(){return c("contact")},className:"cursor-pointer"})))))},l=function(){var e=(0,a.useStaticQuery)("1981850342");return r.createElement("footer",{id:"contact"},r.createElement("div",{className:"container mx-auto"},r.createElement("div",{className:"mt-2 md:mb-20 mb-10"},r.createElement("hr",{className:"text-neutral-300"})),r.createElement("div",{className:"grid lg:grid-cols-12 grid-cols-1 lg:gap-8 gap-12"},r.createElement("div",{className:"lg:col-span-6 md:pr-24"},r.createElement("h3",{className:"font-display md:text-display-lg text-display-sm font-normal pb-4"},"Kick-start your dream home with us"),r.createElement("a",{href:"/",className:"font-display md:text-display-lg text-display-sm italic text-primary-600 underline"},"Send us a hi")),r.createElement("div",{className:"lg:col-span-6 flex flex-col gap-8 xl:pl-80 lg:pl-48"},r.createElement("div",{className:"flex flex-col gap-2"},r.createElement("p",{className:"text-display-xs font-display font-normal"},"Brooklyn, New York"),r.createElement("p",{className:"text-body-sm font-light text-neutral-900"},"962 Fifth Avenue Str, 3rd Floor-Trump Building NY 10006, United State.")),r.createElement("div",{className:"flex flex-col gap-2"},r.createElement("p",{className:"text-body-sm font-light text-neutral-900"},"Email us at"),r.createElement("a",{className:"text-display-xs font-display font-normal text-primary-600",href:"mailto:hello@landify.design"},"hello@landify.design")),r.createElement("div",{className:"flex flex-col gap-2"},r.createElement("p",{className:"text-body-sm font-light text-neutral-900"},"If you're hurry, quick call for us"),r.createElement("a",{className:"text-display-xs font-display font-normal text-primary-600",href:"/"},"+8(663)125-08-59")))),r.createElement("div",{className:"md:my-20 my-10"},r.createElement("hr",{className:"text-neutral-300"})),r.createElement("div",{className:"flex lg:flex-row flex-col gap-8 lg:items-center justify-between md:mb-20 mb-10"},r.createElement("div",{className:"text-body-md font-light"},"© ",(new Date).getFullYear()," Inteo - Award winning studio. Made with love by"," ",r.createElement("a",{href:"https://landify.design/?ref=inteo",className:"text-primary-600"},"Landify")),r.createElement("div",{className:"flex lg:flex-row flex-col lg:items-center md:gap-6 gap-4"},r.createElement("div",{className:"flex flex-row items-center opacity-70"},r.createElement("p",{className:"text-body-sm font-semibold tracking-widest text-neutral-700 pr-4"},"CONNECT"),r.createElement("hr",{className:"w-16 text-neutral-700"})),r.createElement("div",{className:"flex flex-row  items-center gap-6"},e.allSocialJson.nodes.map((function(e){return r.createElement("a",{href:e.href,key:e.name,target:"_blank",rel:"noreferrer"},r.createElement("img",{className:"h-10 w-10",src:e.icon.publicURL,alt:e.name}))})))))))},s=function(e){var t=e.children;return r.createElement(r.Fragment,null,r.createElement(i.q,null,r.createElement("script",{src:"https://gumroad.com/js/gumroad.js"})),r.createElement(u,null),r.createElement("div",null,r.createElement("main",null,t)),r.createElement(l,null))}},8396:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(7294),i=n(5414),a=n(1597),o=n.p+"static/og-preview-d6d16206a201aeaab57826ff6eac1067.jpg";function c(e){var t,n=e.lang,c=e.meta,u=e.title,l=e.description,s=e.image,f=e.url,M=(0,a.useStaticQuery)("2037338169").site,g=u||M.siteMetadata.title,N=l||M.siteMetadata.description,p=M.siteMetadata.siteUrl,d=s||o,y="/"+f||0;return r.createElement(i.q,{htmlAttributes:{lang:n},title:g,meta:[{name:"description",content:N},{name:"keywords",content:"landing page, uikit, open source ui kit, landify ui kit, free uikit, figma uikit, aravinddesign, free website ui kit, free figma website ui kit, free landing page ui kit, landing page ui kit for figma, website ui kit for figma"},{property:"og:image",content:""+p+d},{property:"og:title",content:g},{property:"og:description",content:N},{property:"og:type",content:"website"},{property:"og:url",content:""+p+y},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:creator",content:(null===(t=M.siteMetadata)||void 0===t?void 0:t.author)||""},{name:"twitter:image",content:""+p+d},{name:"twitter:title",content:u},{name:"twitter:description",content:N}].concat(c)})}c.defaultProps={lang:"en",meta:[],description:""};var u=c}}]);
//# sourceMappingURL=e50e9c162871c1d91fba5ce567a5656e16dc6783-571a3eded5740567aba1.js.map