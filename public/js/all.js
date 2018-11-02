/*! jQuery v1.11.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m="1.11.0",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(l.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:k&&!k.call("\ufeff\xa0")?function(a){return null==a?"":k.call(a)}:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||n.guid++,e):void 0},now:function(){return+new Date},support:l}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=a.document,A=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,B=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:A.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:z,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=z.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return y.find(a);this.length=1,this[0]=d}return this.context=z,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};B.prototype=n.fn,y=n(z);var C=/^(?:parents|prev(?:Until|All))/,D={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!n(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function E(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return E(a,"nextSibling")},prev:function(a){return E(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(D[a]||(e=n.unique(e)),C.test(a)&&(e=e.reverse())),this.pushStack(e)}});var F=/\S+/g,G={};function H(a){var b=G[a]={};return n.each(a.match(F)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?G[a]||H(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&n.each(arguments,function(a,c){var d;while((d=n.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){if(a===!0?!--n.readyWait:!n.isReady){if(!z.body)return setTimeout(n.ready);n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(z,[n]),n.fn.trigger&&n(z).trigger("ready").off("ready"))}}});function J(){z.addEventListener?(z.removeEventListener("DOMContentLoaded",K,!1),a.removeEventListener("load",K,!1)):(z.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(z.addEventListener||"load"===event.type||"complete"===z.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===z.readyState)setTimeout(n.ready);else if(z.addEventListener)z.addEventListener("DOMContentLoaded",K,!1),a.addEventListener("load",K,!1);else{z.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&z.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!n.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}J(),n.ready()}}()}return I.promise(b)};var L="undefined",M;for(M in n(l))break;l.ownLast="0"!==M,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c=z.getElementsByTagName("body")[0];c&&(a=z.createElement("div"),a.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",b=z.createElement("div"),c.appendChild(a).appendChild(b),typeof b.style.zoom!==L&&(b.style.cssText="border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1",(l.inlineBlockNeedsLayout=3===b.offsetWidth)&&(c.style.zoom=1)),c.removeChild(a),a=b=null)}),function(){var a=z.createElement("div");if(null==l.deleteExpando){l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}}a=null}(),n.acceptData=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(n.acceptData(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f
}}function S(a,b,c){if(n.acceptData(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d]));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},W=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},X=/^(?:checkbox|radio)$/i;!function(){var a=z.createDocumentFragment(),b=z.createElement("div"),c=z.createElement("input");if(b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a>",l.leadingWhitespace=3===b.firstChild.nodeType,l.tbody=!b.getElementsByTagName("tbody").length,l.htmlSerialize=!!b.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==z.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,a.appendChild(c),l.appendChecked=c.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,a.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){l.noCloneEvent=!1}),b.cloneNode(!0).click()),null==l.deleteExpando){l.deleteExpando=!0;try{delete b.test}catch(d){l.deleteExpando=!1}}a=b=c=null}(),function(){var b,c,d=z.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),l[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var Y=/^(?:input|select|textarea)$/i,Z=/^key/,$=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,ab=/^([^.]*)(?:\.(.+)|)$/;function bb(){return!0}function cb(){return!1}function db(){try{return z.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof n===L||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(F)||[""],h=b.length;while(h--)f=ab.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(F)||[""],j=b.length;while(j--)if(h=ab.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,m,o=[d||z],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||z,3!==d.nodeType&&8!==d.nodeType&&!_.test(p+n.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[n.expando]?b:new n.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),k=n.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!n.isWindow(d)){for(i=k.delegateType||p,_.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||z)&&o.push(l.defaultView||l.parentWindow||a)}m=0;while((h=o[m++])&&!b.isPropagationStopped())b.type=m>1?i:k.bindType||p,f=(n._data(h,"events")||{})[b.type]&&n._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&n.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&n.acceptData(d)&&g&&d[p]&&!n.isWindow(d)){l=d[g],l&&(d[g]=null),n.event.triggered=p;try{d[p]()}catch(r){}n.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((n.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?n(c,this).index(i)>=0:n.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=$.test(e)?this.mouseHooks:Z.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||z),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||z,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==db()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===db()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=z.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===L&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&(a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault())?bb:cb):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:cb,isPropagationStopped:cb,isImmediatePropagationStopped:cb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=bb,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=bb,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submitBubbles||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?b.form:void 0;c&&!n._data(c,"submitBubbles")&&(n.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),n._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.changeBubbles||(n.event.special.change={setup:function(){return Y.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),n.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),n.event.simulate("change",this,a,!0)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;Y.test(b.nodeName)&&!n._data(b,"changeBubbles")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a,!0)}),n._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!Y.test(this.nodeName)}}),l.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=cb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return n().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=cb),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});function eb(a){var b=fb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var fb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gb=/ jQuery\d+="(?:null|\d+)"/g,hb=new RegExp("<(?:"+fb+")[\\s/>]","i"),ib=/^\s+/,jb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,kb=/<([\w:]+)/,lb=/<tbody/i,mb=/<|&#?\w+;/,nb=/<(?:script|style|link)/i,ob=/checked\s*(?:[^=]|=\s*.checked.)/i,pb=/^$|\/(?:java|ecma)script/i,qb=/^true\/(.*)/,rb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,sb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},tb=eb(z),ub=tb.appendChild(z.createElement("div"));sb.optgroup=sb.option,sb.tbody=sb.tfoot=sb.colgroup=sb.caption=sb.thead,sb.th=sb.td;function vb(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==L?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==L?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,vb(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function wb(a){X.test(a.type)&&(a.defaultChecked=a.checked)}function xb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function yb(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function zb(a){var b=qb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ab(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}function Bb(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Cb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(yb(b).text=a.text,zb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&X.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}n.extend({clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!hb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ub.innerHTML=a.outerHTML,ub.removeChild(f=ub.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=vb(f),h=vb(a),g=0;null!=(e=h[g]);++g)d[g]&&Cb(e,d[g]);if(b)if(c)for(h=h||vb(a),d=d||vb(f),g=0;null!=(e=h[g]);g++)Bb(e,d[g]);else Bb(a,f);return d=vb(f,"script"),d.length>0&&Ab(d,!i&&vb(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k,m=a.length,o=eb(b),p=[],q=0;m>q;q++)if(f=a[q],f||0===f)if("object"===n.type(f))n.merge(p,f.nodeType?[f]:f);else if(mb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(kb.exec(f)||["",""])[1].toLowerCase(),k=sb[i]||sb._default,h.innerHTML=k[1]+f.replace(jb,"<$1></$2>")+k[2],e=k[0];while(e--)h=h.lastChild;if(!l.leadingWhitespace&&ib.test(f)&&p.push(b.createTextNode(ib.exec(f)[0])),!l.tbody){f="table"!==i||lb.test(f)?"<table>"!==k[1]||lb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)n.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}n.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),l.appendChecked||n.grep(vb(p,"input"),wb),q=0;while(f=p[q++])if((!d||-1===n.inArray(f,d))&&(g=n.contains(f.ownerDocument,f),h=vb(o.appendChild(f),"script"),g&&Ab(h),c)){e=0;while(f=h[e++])pb.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.deleteExpando,m=n.event.special;null!=(d=a[h]);h++)if((b||n.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k?delete d[i]:typeof d.removeAttribute!==L?d.removeAttribute(i):d[i]=null,c.push(f))}}}),n.fn.extend({text:function(a){return W(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||z).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=xb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(vb(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&Ab(vb(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(vb(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return W(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(gb,""):void 0;if(!("string"!=typeof a||nb.test(a)||!l.htmlSerialize&&hb.test(a)||!l.leadingWhitespace&&ib.test(a)||sb[(kb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(jb,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(vb(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(vb(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,o=k-1,p=a[0],q=n.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&ob.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(i=n.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=n.map(vb(i,"script"),yb),f=g.length;k>j;j++)d=i,j!==o&&(d=n.clone(d,!0,!0),f&&n.merge(g,vb(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,n.map(g,zb),j=0;f>j;j++)d=g[j],pb.test(d.type||"")&&!n._data(d,"globalEval")&&n.contains(h,d)&&(d.src?n._evalUrl&&n._evalUrl(d.src):n.globalEval((d.text||d.textContent||d.innerHTML||"").replace(rb,"")));i=c=null}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],g=n(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Db,Eb={};function Fb(b,c){var d=n(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:n.css(d[0],"display");return d.detach(),e}function Gb(a){var b=z,c=Eb[a];return c||(c=Fb(a,b),"none"!==c&&c||(Db=(Db||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Db[0].contentWindow||Db[0].contentDocument).document,b.write(),b.close(),c=Fb(a,b),Db.detach()),Eb[a]=c),c}!function(){var a,b,c=z.createElement("div"),d="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],a.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(a.style.opacity),l.cssFloat=!!a.style.cssFloat,c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===c.style.backgroundClip,a=c=null,l.shrinkWrapBlocks=function(){var a,c,e,f;if(null==b){if(a=z.getElementsByTagName("body")[0],!a)return;f="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",c=z.createElement("div"),e=z.createElement("div"),a.appendChild(c).appendChild(e),b=!1,typeof e.style.zoom!==L&&(e.style.cssText=d+";width:1px;padding:1px;zoom:1",e.innerHTML="<div></div>",e.firstChild.style.width="5px",b=3!==e.offsetWidth),a.removeChild(c),a=c=e=null}return b}}();var Hb=/^margin/,Ib=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Jb,Kb,Lb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Jb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),Ib.test(g)&&Hb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):z.documentElement.currentStyle&&(Jb=function(a){return a.currentStyle},Kb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Jb(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ib.test(g)&&!Lb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Mb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h=z.createElement("div"),i="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",j="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";h.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",b=h.getElementsByTagName("a")[0],b.style.cssText="float:left;opacity:.5",l.opacity=/^0.5/.test(b.style.opacity),l.cssFloat=!!b.style.cssFloat,h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,b=h=null,n.extend(l,{reliableHiddenOffsets:function(){if(null!=c)return c;var a,b,d,e=z.createElement("div"),f=z.getElementsByTagName("body")[0];if(f)return e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=z.createElement("div"),a.style.cssText=i,f.appendChild(a).appendChild(e),e.innerHTML="<table><tr><td></td><td>t</td></tr></table>",b=e.getElementsByTagName("td"),b[0].style.cssText="padding:0;margin:0;border:0;display:none",d=0===b[0].offsetHeight,b[0].style.display="",b[1].style.display="none",c=d&&0===b[0].offsetHeight,f.removeChild(a),e=f=null,c},boxSizing:function(){return null==d&&k(),d},boxSizingReliable:function(){return null==e&&k(),e},pixelPosition:function(){return null==f&&k(),f},reliableMarginRight:function(){var b,c,d,e;if(null==g&&a.getComputedStyle){if(b=z.getElementsByTagName("body")[0],!b)return;c=z.createElement("div"),d=z.createElement("div"),c.style.cssText=i,b.appendChild(c).appendChild(d),e=d.appendChild(z.createElement("div")),e.style.cssText=d.style.cssText=j,e.style.marginRight=e.style.width="0",d.style.width="1px",g=!parseFloat((a.getComputedStyle(e,null)||{}).marginRight),b.removeChild(c)}return g}});function k(){var b,c,h=z.getElementsByTagName("body")[0];h&&(b=z.createElement("div"),c=z.createElement("div"),b.style.cssText=i,h.appendChild(b).appendChild(c),c.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%",n.swap(h,null!=h.style.zoom?{zoom:1}:{},function(){d=4===c.offsetWidth}),e=!0,f=!1,g=!0,a.getComputedStyle&&(f="1%"!==(a.getComputedStyle(c,null)||{}).top,e="4px"===(a.getComputedStyle(c,null)||{width:"4px"}).width),h.removeChild(b),c=h=null)}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Nb=/alpha\([^)]*\)/i,Ob=/opacity\s*=\s*([^)]*)/,Pb=/^(none|table(?!-c[ea]).+)/,Qb=new RegExp("^("+T+")(.*)$","i"),Rb=new RegExp("^([+-])=("+T+")","i"),Sb={position:"absolute",visibility:"hidden",display:"block"},Tb={letterSpacing:0,fontWeight:400},Ub=["Webkit","O","Moz","ms"];function Vb(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ub.length;while(e--)if(b=Ub[e]+c,b in a)return b;return d}function Wb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=n._data(d,"olddisplay",Gb(d.nodeName)))):f[g]||(e=V(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Xb(a,b,c){var d=Qb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Yb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Zb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Jb(a),g=l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Kb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ib.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Yb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Kb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=Vb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Rb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]="",i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Vb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Kb(a,b,d)),"normal"===f&&b in Tb&&(f=Tb[b]),""===c||c?(e=parseFloat(f),c===!0||n.isNumeric(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&Pb.test(n.css(a,"display"))?n.swap(a,Sb,function(){return Zb(a,b,d)}):Zb(a,b,d):void 0},set:function(a,c,d){var e=d&&Jb(a);return Xb(a,c,d?Yb(a,b,d,l.boxSizing()&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Ob.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Nb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Nb.test(f)?f.replace(Nb,e):f+" "+e)}}),n.cssHooks.marginRight=Mb(l.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},Kb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Hb.test(a)||(n.cssHooks[a+b].set=Xb)}),n.fn.extend({css:function(a,b){return W(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Jb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)
},a,b,arguments.length>1)},show:function(){return Wb(this,!0)},hide:function(){return Wb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function $b(a,b,c,d,e){return new $b.prototype.init(a,b,c,d,e)}n.Tween=$b,$b.prototype={constructor:$b,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=$b.propHooks[this.prop];return a&&a.get?a.get(this):$b.propHooks._default.get(this)},run:function(a){var b,c=$b.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):$b.propHooks._default.set(this),this}},$b.prototype.init.prototype=$b.prototype,$b.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},$b.propHooks.scrollTop=$b.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=$b.prototype.init,n.fx.step={};var _b,ac,bc=/^(?:toggle|show|hide)$/,cc=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),dc=/queueHooks$/,ec=[jc],fc={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=cc.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&cc.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function gc(){return setTimeout(function(){_b=void 0}),_b=n.now()}function hc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=U[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function ic(a,b,c){for(var d,e=(fc[b]||[]).concat(fc["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function jc(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&V(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k=Gb(a.nodeName),"none"===j&&(j=k),"inline"===j&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==k?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],bc.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}if(!n.isEmptyObject(o)){r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=ic(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function kc(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function lc(a,b,c){var d,e,f=0,g=ec.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=_b||gc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:_b||gc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(kc(k,j.opts.specialEasing);g>f;f++)if(d=ec[f].call(j,a,k,j.opts))return d;return n.map(k,ic,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(lc,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],fc[c]=fc[c]||[],fc[c].unshift(b)},prefilter:function(a,b){b?ec.unshift(a):ec.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=lc(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&dc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(hc(b,!0),a,d,e)}}),n.each({slideDown:hc("show"),slideUp:hc("hide"),slideToggle:hc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(_b=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),_b=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ac||(ac=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(ac),ac=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e=z.createElement("div");e.setAttribute("className","t"),e.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=e.getElementsByTagName("a")[0],c=z.createElement("select"),d=c.appendChild(z.createElement("option")),b=e.getElementsByTagName("input")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==e.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=d.selected,l.enctype=!!z.createElement("form").enctype,c.disabled=!0,l.optDisabled=!d.disabled,b=z.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value,a=b=c=d=e=null}();var mc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(mc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.text(a)}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var nc,oc,pc=n.expr.attrHandle,qc=/^(?:checked|selected)$/i,rc=l.getSetAttribute,sc=l.input;n.fn.extend({attr:function(a,b){return W(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===L?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?oc:nc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(F);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?sc&&rc||!qc.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(rc?c:d)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),oc={set:function(a,b,c){return b===!1?n.removeAttr(a,c):sc&&rc||!qc.test(c)?a.setAttribute(!rc&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=pc[b]||n.find.attr;pc[b]=sc&&rc||!qc.test(b)?function(a,b,d){var e,f;return d||(f=pc[b],pc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,pc[b]=f),e}:function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),sc&&rc||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):nc&&nc.set(a,b,c)}}),rc||(nc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},pc.id=pc.name=pc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:nc.set},n.attrHooks.contenteditable={set:function(a,b,c){nc.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var tc=/^(?:input|select|textarea|button|object)$/i,uc=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return W(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):tc.test(a.nodeName)||uc.test(a.nodeName)&&a.href?0:-1}}}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var vc=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(F)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(vc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(F)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===L||"boolean"===c)&&(this.className&&n._data(this,"__className__",this.className),this.className=this.className||a===!1?"":n._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(vc," ").indexOf(b)>=0)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var wc=n.now(),xc=/\?/,yc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(yc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var zc,Ac,Bc=/#.*$/,Cc=/([?&])_=[^&]*/,Dc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Ec=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Fc=/^(?:GET|HEAD)$/,Gc=/^\/\//,Hc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ic={},Jc={},Kc="*/".concat("*");try{Ac=location.href}catch(Lc){Ac=z.createElement("a"),Ac.href="",Ac=Ac.href}zc=Hc.exec(Ac.toLowerCase())||[];function Mc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(F)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nc(a,b,c,d){var e={},f=a===Jc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Oc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Pc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Qc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ac,type:"GET",isLocal:Ec.test(zc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Oc(Oc(a,n.ajaxSettings),b):Oc(n.ajaxSettings,a)},ajaxPrefilter:Mc(Ic),ajaxTransport:Mc(Jc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Dc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||Ac)+"").replace(Bc,"").replace(Gc,zc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(F)||[""],null==k.crossDomain&&(c=Hc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===zc[1]&&c[2]===zc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(zc[3]||("http:"===zc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),Nc(Ic,k,b,v),2===t)return v;h=k.global,h&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Fc.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(xc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Cc.test(e)?e.replace(Cc,"$1_="+wc++):e+(xc.test(e)?"&":"?")+"_="+wc++)),k.ifModified&&(n.lastModified[e]&&v.setRequestHeader("If-Modified-Since",n.lastModified[e]),n.etag[e]&&v.setRequestHeader("If-None-Match",n.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Kc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Nc(Jc,k,b,v)){v.readyState=1,h&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Pc(k,v,c)),u=Qc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(n.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!l.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||n.css(a,"display"))},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var Rc=/%20/g,Sc=/\[\]$/,Tc=/\r?\n/g,Uc=/^(?:submit|button|image|reset|file)$/i,Vc=/^(?:input|select|textarea|keygen)/i;function Wc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Sc.test(a)?d(a,e):Wc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Wc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Wc(c,a[c],b,e);return d.join("&").replace(Rc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Vc.test(this.nodeName)&&!Uc.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Tc,"\r\n")}}):{name:b.name,value:c.replace(Tc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&$c()||_c()}:$c;var Xc=0,Yc={},Zc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Yc)Yc[a](void 0,!0)}),l.cors=!!Zc&&"withCredentials"in Zc,Zc=l.ajax=!!Zc,Zc&&n.ajaxTransport(function(a){if(!a.crossDomain||l.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Xc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Yc[g],b=void 0,f.onreadystatechange=n.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Yc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function $c(){try{return new a.XMLHttpRequest}catch(b){}}function _c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=z.head||n("head")[0]||z.documentElement;return{send:function(d,e){b=z.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var ad=[],bd=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=ad.pop()||n.expando+"_"+wc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(bd.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&bd.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(bd,"$1"+e):b.jsonp!==!1&&(b.url+=(xc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,ad.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||z;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var cd=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&cd)return cd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h,a.length),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&n.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var dd=a.document.documentElement;function ed(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?(typeof e.getBoundingClientRect!==L&&(d=e.getBoundingClientRect()),c=ed(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||dd;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||dd})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return W(this,function(a,d,e){var f=ed(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Mb(l.pixelPosition,function(a,c){return c?(c=Kb(a,b),Ib.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return W(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var fd=a.jQuery,gd=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=gd),b&&a.jQuery===n&&(a.jQuery=fd),n},typeof b===L&&(a.jQuery=a.$=n),n});

/* http://keith-wood.name/datepick.html
   Date picker for jQuery v4.0.5.
   Written by Keith Wood (kbwood{at}iinet.com.au) February 2010.
   Dual licensed under the GPL (http://dev.jquery.com/browser/trunk/jquery/GPL-LICENSE.txt) and
   MIT (http://dev.jquery.com/browser/trunk/jquery/MIT-LICENSE.txt) licenses.
   Please attribute the author if you use it. */

(function($) { // Hide scope, no $ conflict

/* Datepicker manager. */
function Datepicker() {
    this._defaults = {
        pickerClass: '', // CSS class to add to this instance of the datepicker
        showOnFocus: true, // True for popup on focus, false for not
        showTrigger: null, // Element to be cloned for a trigger, null for none
        showAnim: 'show', // Name of jQuery animation for popup, '' for no animation
        showOptions: {}, // Options for enhanced animations
        showSpeed: 'normal', // Duration of display/closure
        popupContainer: null, // The element to which a popup calendar is added, null for body
        alignment: 'bottom', // Alignment of popup - with nominated corner of input:
            // 'top' or 'bottom' aligns depending on language direction,
            // 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'
        fixedWeeks: false, // True to always show 6 weeks, false to only show as many as are needed
        firstDay: 0, // First day of the week, 0 = Sunday, 1 = Monday, ...
        calculateWeek: this.iso8601Week, // Calculate week of the year from a date, null for ISO8601
        monthsToShow: 1, // How many months to show, cols or [rows, cols]
        monthsOffset: 0, // How many months to offset the primary month by
        monthsToStep: 1, // How many months to move when prev/next clicked
        monthsToJump: 12, // How many months to move when large prev/next clicked
        useMouseWheel: true, // True to use mousewheel if available, false to never use it
        changeMonth: true, // True to change month/year via drop-down, false for navigation only
        yearRange: 'c-10:c+10', // Range of years to show in drop-down: 'any' for direct text entry
            // or 'start:end', where start/end are '+-nn' for relative to today
            // or 'c+-nn' for relative to the currently selected date
            // or 'nnnn' for an absolute year
        shortYearCutoff: '+10', // Cutoff for two-digit year in the current century
        showOtherMonths: false, // True to show dates from other months, false to not show them
        selectOtherMonths: false, // True to allow selection of dates from other months too
        defaultDate: null, // Date to show if no other selected
        selectDefaultDate: false, // True to pre-select the default date if no other is chosen
        minDate: null, // The minimum selectable date
        maxDate: null, // The maximum selectable date
        dateFormat: 'mm/dd/yyyy', // Format for dates
        autoSize: false, // True to size the input field according to the date format
        rangeSelect: false, // Allows for selecting a date range on one date picker
        rangeSeparator: ' - ', // Text between two dates in a range
        multiSelect: 0, // Maximum number of selectable dates, zero for single select
        multiSeparator: ',', // Text between multiple dates
        onDate: null, // Callback as a date is added to the datepicker
        onShow: null, // Callback just before a datepicker is shown
        onChangeMonthYear: null, // Callback when a new month/year is selected
        onSelect: null, // Callback when a date is selected
        onClose: null, // Callback when a datepicker is closed
        altField: null, // Alternate field to update in synch with the datepicker
        altFormat: null, // Date format for alternate field, defaults to dateFormat
        constrainInput: true, // True to constrain typed input to dateFormat allowed characters
        commandsAsDateFormat: false, // True to apply formatDate to the command texts
        commands: this.commands // Command actions that may be added to a layout by name
    };
    this.regional = {
        '': { // US/English
            monthNames: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6',
            'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
            monthNamesShort: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6',
            'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
            dayNames: ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'],
            dayNamesShort: ['CN', 'Hai', 'Ba', 'Tư', 'Năm', 'Sáu', 'Bảy'],
            dayNamesMin: ['CN', 'H', 'B', 'T', 'N', 'S', 'B'],
            dateFormat: 'mm/dd/yyyy', // See options on formatDate
            firstDay: 0, // The first day of the week, Sun = 0, Mon = 1, ...
            renderer: this.defaultRenderer, // The rendering templates
            prevText: '&lt;Sau', // Text for the previous month command
            prevStatus: 'Tháng trước', // Status text for the previous month command
            prevJumpText: '&lt;&lt;', // Text for the previous year command
            prevJumpStatus: 'Năm trước', // Status text for the previous year command
            nextText: 'Kế&gt;', // Text for the next month command
            nextStatus: 'Tháng sau', // Status text for the next month command
            nextJumpText: '&gt;&gt;', // Text for the next year command
            nextJumpStatus: 'Năm sau', // Status text for the next year command
            currentText: 'Hiện tại', // Text for the current month command
            currentStatus: 'Tháng hiện tại', // Status text for the current month command
            todayText: 'Hôm nay', // Text for the today's month command
            todayStatus: '', // Status text for the today's month command
            clearText: 'Xóa', // Text for the clear command
            clearStatus: 'Xóa ngày', // Status text for the clear command
            closeText: 'Đóng', // Text for the close command
            closeStatus: 'Đóng', // Status text for the close command
            yearStatus: 'Chọn năm', // Status text for year selection
            monthStatus: 'Chọn tháng', // Status text for month selection
            weekText: 'Wk', // Text for week of the year column header
            weekStatus: 'Week of the year', // Status text for week of the year column header
            dayStatus: 'DD, d M, yyyy', // Status text for selectable days
            defaultStatus: 'Select a date', // Status text shown by default
            isRTL: false // True if language is right-to-left
        }};
    $.extend(this._defaults, this.regional['']);
    this._disabled = [];
}

$.extend(Datepicker.prototype, {
    dataName: 'datepick',

    /* Class name added to elements to indicate already configured with datepicker. */
    markerClass: 'hasDatepick',

    _popupClass: 'datepick-popup', // Marker for popup division
    _triggerClass: 'datepick-trigger', // Marker for trigger element
    _disableClass: 'datepick-disable', // Marker for disabled element
    _coverClass: 'datepick-cover', // Marker for iframe backing element
    _monthYearClass: 'datepick-month-year', // Marker for month/year inputs
    _curMonthClass: 'datepick-month-', // Marker for current month/year
    _anyYearClass: 'datepick-any-year', // Marker for year direct input
    _curDoWClass: 'datepick-dow-', // Marker for day of week

    commands: { // Command actions that may be added to a layout by name
        // name: { // The command name, use '{button:name}' or '{link:name}' in layouts
        //      text: '', // The field in the regional settings for the displayed text
        //      status: '', // The field in the regional settings for the status text
        //      // The keystroke to trigger the action
        //      keystroke: {keyCode: nn, ctrlKey: boolean, altKey: boolean, shiftKey: boolean},
        //      enabled: fn, // The function that indicates the command is enabled
        //      date: fn, // The function to get the date associated with this action
        //      action: fn} // The function that implements the action
        prev: {text: 'prevText', status: 'prevStatus', // Previous month
            keystroke: {keyCode: 33}, // Page up
            enabled: function(inst) {
                var minDate = inst.curMinDate();
                return (!minDate || $.datepick.add($.datepick.day(
                    $.datepick.add($.datepick.newDate(inst.drawDate),
                    1 - inst.get('monthsToStep') - inst.get('monthsOffset'), 'm'), 1), -1, 'd').
                    getTime() >= minDate.getTime()); },
            date: function(inst) {
                return $.datepick.day($.datepick.add($.datepick.newDate(inst.drawDate),
                    -inst.get('monthsToStep') - inst.get('monthsOffset'), 'm'), 1); },
            action: function(inst) {
                $.datepick.changeMonth(this, -inst.get('monthsToStep')); }
        },
        prevJump: {text: 'prevJumpText', status: 'prevJumpStatus', // Previous year
            keystroke: {keyCode: 33, ctrlKey: true}, // Ctrl + Page up
            enabled: function(inst) {
                var minDate = inst.curMinDate();
                return (!minDate || $.datepick.add($.datepick.day(
                    $.datepick.add($.datepick.newDate(inst.drawDate),
                    1 - inst.get('monthsToJump') - inst.get('monthsOffset'), 'm'), 1), -1, 'd').
                    getTime() >= minDate.getTime()); },
            date: function(inst) {
                return $.datepick.day($.datepick.add($.datepick.newDate(inst.drawDate),
                    -inst.get('monthsToJump') - inst.get('monthsOffset'), 'm'), 1); },
            action: function(inst) {
                $.datepick.changeMonth(this, -inst.get('monthsToJump')); }
        },
        next: {text: 'nextText', status: 'nextStatus', // Next month
            keystroke: {keyCode: 34}, // Page down
            enabled: function(inst) {
                var maxDate = inst.get('maxDate');
                return (!maxDate || $.datepick.day($.datepick.add($.datepick.newDate(inst.drawDate),
                    inst.get('monthsToStep') - inst.get('monthsOffset'), 'm'), 1).
                    getTime() <= maxDate.getTime()); },
            date: function(inst) {
                return $.datepick.day($.datepick.add($.datepick.newDate(inst.drawDate),
                    inst.get('monthsToStep') - inst.get('monthsOffset'), 'm'), 1); },
            action: function(inst) {
                $.datepick.changeMonth(this, inst.get('monthsToStep')); }
        },
        nextJump: {text: 'nextJumpText', status: 'nextJumpStatus', // Next year
            keystroke: {keyCode: 34, ctrlKey: true}, // Ctrl + Page down
            enabled: function(inst) {
                var maxDate = inst.get('maxDate');
                return (!maxDate || $.datepick.day($.datepick.add($.datepick.newDate(inst.drawDate),
                    inst.get('monthsToJump') - inst.get('monthsOffset'), 'm'), 1).
                    getTime() <= maxDate.getTime()); },
            date: function(inst) {
                return $.datepick.day($.datepick.add($.datepick.newDate(inst.drawDate),
                    inst.get('monthsToJump') - inst.get('monthsOffset'), 'm'), 1); },
            action: function(inst) {
                $.datepick.changeMonth(this, inst.get('monthsToJump')); }
        },
        current: {text: 'currentText', status: 'currentStatus', // Current month
            keystroke: {keyCode: 36, ctrlKey: true}, // Ctrl + Home
            enabled: function(inst) {
                var minDate = inst.curMinDate();
                var maxDate = inst.get('maxDate');
                var curDate = inst.selectedDates[0] || $.datepick.today();
                return (!minDate || curDate.getTime() >= minDate.getTime()) &&
                    (!maxDate || curDate.getTime() <= maxDate.getTime()); },
            date: function(inst) {
                return inst.selectedDates[0] || $.datepick.today(); },
            action: function(inst) {
                var curDate = inst.selectedDates[0] || $.datepick.today();
                $.datepick.showMonth(this, curDate.getFullYear(), curDate.getMonth() + 1); }
        },
        today: {text: 'todayText', status: 'todayStatus', // Today's month
            keystroke: {keyCode: 36, ctrlKey: true}, // Ctrl + Home
            enabled: function(inst) {
                var minDate = inst.curMinDate();
                var maxDate = inst.get('maxDate');
                return (!minDate || $.datepick.today().getTime() >= minDate.getTime()) &&
                    (!maxDate || $.datepick.today().getTime() <= maxDate.getTime()); },
            date: function(inst) { return $.datepick.today(); },
            action: function(inst) { $.datepick.showMonth(this); }
        },
        clear: {text: 'clearText', status: 'clearStatus', // Clear the datepicker
            keystroke: {keyCode: 35, ctrlKey: true}, // Ctrl + End
            enabled: function(inst) { return true; },
            date: function(inst) { return null; },
            action: function(inst) { $.datepick.clear(this); }
        },
        close: {text: 'closeText', status: 'closeStatus', // Close the datepicker
            keystroke: {keyCode: 27}, // Escape
            enabled: function(inst) { return true; },
            date: function(inst) { return null; },
            action: function(inst) { $.datepick.hide(this); }
        },
        prevWeek: {text: 'prevWeekText', status: 'prevWeekStatus', // Previous week
            keystroke: {keyCode: 38, ctrlKey: true}, // Ctrl + Up
            enabled: function(inst) {
                var minDate = inst.curMinDate();
                return (!minDate || $.datepick.add($.datepick.newDate(inst.drawDate), -7, 'd').
                    getTime() >= minDate.getTime()); },
            date: function(inst) { return $.datepick.add($.datepick.newDate(inst.drawDate), -7, 'd'); },
            action: function(inst) { $.datepick.changeDay(this, -7); }
        },
        prevDay: {text: 'prevDayText', status: 'prevDayStatus', // Previous day
            keystroke: {keyCode: 37, ctrlKey: true}, // Ctrl + Left
            enabled: function(inst) {
                var minDate = inst.curMinDate();
                return (!minDate || $.datepick.add($.datepick.newDate(inst.drawDate), -1, 'd').
                    getTime() >= minDate.getTime()); },
            date: function(inst) { return $.datepick.add($.datepick.newDate(inst.drawDate), -1, 'd'); },
            action: function(inst) { $.datepick.changeDay(this, -1); }
        },
        nextDay: {text: 'nextDayText', status: 'nextDayStatus', // Next day
            keystroke: {keyCode: 39, ctrlKey: true}, // Ctrl + Right
            enabled: function(inst) {
                var maxDate = inst.get('maxDate');
                return (!maxDate || $.datepick.add($.datepick.newDate(inst.drawDate), 1, 'd').
                    getTime() <= maxDate.getTime()); },
            date: function(inst) { return $.datepick.add($.datepick.newDate(inst.drawDate), 1, 'd'); },
            action: function(inst) { $.datepick.changeDay(this, 1); }
        },
        nextWeek: {text: 'nextWeekText', status: 'nextWeekStatus', // Next week
            keystroke: {keyCode: 40, ctrlKey: true}, // Ctrl + Down
            enabled: function(inst) {
                var maxDate = inst.get('maxDate');
                return (!maxDate || $.datepick.add($.datepick.newDate(inst.drawDate), 7, 'd').
                    getTime() <= maxDate.getTime()); },
            date: function(inst) { return $.datepick.add($.datepick.newDate(inst.drawDate), 7, 'd'); },
            action: function(inst) { $.datepick.changeDay(this, 7); }
        }
    },

    /* Default template for generating a datepicker. */
    defaultRenderer: {
        // Anywhere: '{l10n:name}' to insert localised value for name,
        // '{link:name}' to insert a link trigger for command name,
        // '{button:name}' to insert a button trigger for command name,
        // '{popup:start}...{popup:end}' to mark a section for inclusion in a popup datepicker only,
        // '{inline:start}...{inline:end}' to mark a section for inclusion in an inline datepicker only
        // Overall structure: '{months}' to insert calendar months
        picker: '<div class="datepick">' +
        '<div class="datepick-nav">{link:prev}{link:today}{link:next}</div>{months}' +
        '{popup:start}<div class="datepick-ctrl">{link:clear}{link:close}</div>{popup:end}' +
        '<div class="datepick-clear-fix"></div></div>',
        // One row of months: '{months}' to insert calendar months
        monthRow: '<div class="datepick-month-row">{months}</div>',
        // A single month: '{monthHeader:dateFormat}' to insert the month header -
        // dateFormat is optional and defaults to 'MM yyyy',
        // '{weekHeader}' to insert a week header, '{weeks}' to insert the month's weeks
        month: '<div class="datepick-month"><div class="datepick-month-header">{monthHeader}</div>' +
        '<table><thead>{weekHeader}</thead><tbody>{weeks}</tbody></table></div>',
        // A week header: '{days}' to insert individual day names
        weekHeader: '<tr>{days}</tr>',
        // Individual day header: '{day}' to insert day name
        dayHeader: '<th>{day}</th>',
        // One week of the month: '{days}' to insert the week's days, '{weekOfYear}' to insert week of year
        week: '<tr>{days}</tr>',
        // An individual day: '{day}' to insert day value
        day: '<td>{day}</td>',
        // jQuery selector, relative to picker, for a single month
        monthSelector: '.datepick-month',
        // jQuery selector, relative to picker, for individual days
        daySelector: 'td',
        // Class for right-to-left (RTL) languages
        rtlClass: 'datepick-rtl',
        // Class for multi-month datepickers
        multiClass: 'datepick-multi',
        // Class for selectable dates
        defaultClass: '',
        // Class for currently selected dates
        selectedClass: 'datepick-selected',
        // Class for highlighted dates
        highlightedClass: 'datepick-highlight',
        // Class for today
        todayClass: 'datepick-today',
        // Class for days from other months
        otherMonthClass: 'datepick-other-month',
        // Class for days on weekends
        weekendClass: 'datepick-weekend',
        // Class prefix for commands
        commandClass: 'datepick-cmd',
        // Extra class(es) for commands that are buttons
        commandButtonClass: '',
        // Extra class(es) for commands that are links
        commandLinkClass: '',
        // Class for disabled commands
        disabledClass: 'datepick-disabled'
    },

    /* Override the default settings for all datepicker instances.
       @param  settings  (object) the new settings to use as defaults
       @return  (Datepicker) this object */
    setDefaults: function(settings) {
        $.extend(this._defaults, settings || {});
        return this;
    },

    _ticksTo1970: (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) +
        Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000),
    _msPerDay: 24 * 60 * 60 * 1000,

    ATOM: 'yyyy-mm-dd', // RFC 3339/ISO 8601
    COOKIE: 'D, dd M yyyy',
    FULL: 'DD, MM d, yyyy',
    ISO_8601: 'yyyy-mm-dd',
    JULIAN: 'J',
    RFC_822: 'D, d M yy',
    RFC_850: 'DD, dd-M-yy',
    RFC_1036: 'D, d M yy',
    RFC_1123: 'D, d M yyyy',
    RFC_2822: 'D, d M yyyy',
    RSS: 'D, d M yy', // RFC 822
    TICKS: '!',
    TIMESTAMP: '@',
    W3C: 'yyyy-mm-dd', // ISO 8601

    /* Format a date object into a string value.
       The format can be combinations of the following:
       d  - day of month (no leading zero)
       dd - day of month (two digit)
       o  - day of year (no leading zeros)
       oo - day of year (three digit)
       D  - day name short
       DD - day name long
       w  - week of year (no leading zero)
       ww - week of year (two digit)
       m  - month of year (no leading zero)
       mm - month of year (two digit)
       M  - month name short
       MM - month name long
       yy - year (two digit)
       yyyy - year (four digit)
       @  - Unix timestamp (s since 01/01/1970)
       !  - Windows ticks (100ns since 01/01/0001)
       '...' - literal text
       '' - single quote
       @param  format    (string) the desired format of the date (optional, default datepicker format)
       @param  date      (Date) the date value to format
       @param  settings  (object) attributes include:
                         dayNamesShort    (string[]) abbreviated names of the days from Sunday (optional)
                         dayNames         (string[]) names of the days from Sunday (optional)
                         monthNamesShort  (string[]) abbreviated names of the months (optional)
                         monthNames       (string[]) names of the months (optional)
                         calculateWeek    (function) function that determines week of the year (optional)
       @return  (string) the date in the above format */
    formatDate: function(format, date, settings) {
        if (typeof format != 'string') {
            settings = date;
            date = format;
            format = '';
        }
        if (!date) {
            return '';
        }
        format = format || this._defaults.dateFormat;
        settings = settings || {};
        var dayNamesShort = settings.dayNamesShort || this._defaults.dayNamesShort;
        var dayNames = settings.dayNames || this._defaults.dayNames;
        var monthNamesShort = settings.monthNamesShort || this._defaults.monthNamesShort;
        var monthNames = settings.monthNames || this._defaults.monthNames;
        var calculateWeek = settings.calculateWeek || this._defaults.calculateWeek;
        // Check whether a format character is doubled
        var doubled = function(match, step) {
            var matches = 1;
            while (iFormat + matches < format.length && format.charAt(iFormat + matches) == match) {
                matches++;
            }
            iFormat += matches - 1;
            return Math.floor(matches / (step || 1)) > 1;
        };
        // Format a number, with leading zeroes if necessary
        var formatNumber = function(match, value, len, step) {
            var num = '' + value;
            if (doubled(match, step)) {
                while (num.length < len) {
                    num = '0' + num;
                }
            }
            return num;
        };
        // Format a name, short or long as requested
        var formatName = function(match, value, shortNames, longNames) {
            return (doubled(match) ? longNames[value] : shortNames[value]);
        };
        var output = '';
        var literal = false;
        for (var iFormat = 0; iFormat < format.length; iFormat++) {
            if (literal) {
                if (format.charAt(iFormat) == "'" && !doubled("'")) {
                    literal = false;
                }
                else {
                    output += format.charAt(iFormat);
                }
            }
            else {
                switch (format.charAt(iFormat)) {
                    case 'd': output += formatNumber('d', date.getDate(), 2); break;
                    case 'D': output += formatName('D', date.getDay(),
                        dayNamesShort, dayNames); break;
                    case 'o': output += formatNumber('o', this.dayOfYear(date), 3); break;
                    case 'w': output += formatNumber('w', calculateWeek(date), 2); break;
                    case 'm': output += formatNumber('m', date.getMonth() + 1, 2); break;
                    case 'M': output += formatName('M', date.getMonth(),
                        monthNamesShort, monthNames); break;
                    case 'y':
                        output += (doubled('y', 2) ? date.getFullYear() :
                            (date.getFullYear() % 100 < 10 ? '0' : '') + date.getFullYear() % 100);
                        break;
                    case '@': output += Math.floor(date.getTime() / 1000); break;
                    case '!': output += date.getTime() * 10000 + this._ticksTo1970; break;
                    case "'":
                        if (doubled("'")) {
                            output += "'";
                        }
                        else {
                            literal = true;
                        }
                        break;
                    default:
                        output += format.charAt(iFormat);
                }
            }
        }
        return output;
    },

    /* Parse a string value into a date object.
       See formatDate for the possible formats, plus:
       * - ignore rest of string
       @param  format    (string) the expected format of the date ('' for default datepicker format)
       @param  value     (string) the date in the above format
       @param  settings  (object) attributes include:
                         shortYearCutoff  (number) the cutoff year for determining the century (optional)
                         dayNamesShort    (string[]) abbreviated names of the days from Sunday (optional)
                         dayNames         (string[]) names of the days from Sunday (optional)
                         monthNamesShort  (string[]) abbreviated names of the months (optional)
                         monthNames       (string[]) names of the months (optional)
       @return  (Date) the extracted date value or null if value is blank
       @throws  errors if the format and/or value are missing,
                if the value doesn't match the format,
                or if the date is invalid */
    parseDate: function(format, value, settings) {
        if (value == null) {
            throw 'Invalid arguments';
        }
        value = (typeof value == 'object' ? value.toString() : value + '');
        if (value == '') {
            return null;
        }
        format = format || this._defaults.dateFormat;
        settings = settings || {};
        var shortYearCutoff = settings.shortYearCutoff || this._defaults.shortYearCutoff;
        shortYearCutoff = (typeof shortYearCutoff != 'string' ? shortYearCutoff :
            this.today().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
        var dayNamesShort = settings.dayNamesShort || this._defaults.dayNamesShort;
        var dayNames = settings.dayNames || this._defaults.dayNames;
        var monthNamesShort = settings.monthNamesShort || this._defaults.monthNamesShort;
        var monthNames = settings.monthNames || this._defaults.monthNames;
        var year = -1;
        var month = -1;
        var day = -1;
        var doy = -1;
        var shortYear = false;
        var literal = false;
        // Check whether a format character is doubled
        var doubled = function(match, step) {
            var matches = 1;
            while (iFormat + matches < format.length && format.charAt(iFormat + matches) == match) {
                matches++;
            }
            iFormat += matches - 1;
            return Math.floor(matches / (step || 1)) > 1;
        };
        // Extract a number from the string value
        var getNumber = function(match, step) {
            doubled(match, step);
            var size = [2, 3, 4, 11, 20]['oy@!'.indexOf(match) + 1];
            var digits = new RegExp('^-?\\d{1,' + size + '}');
            var num = value.substring(iValue).match(digits);
            if (!num) {
                throw 'Missing number at position {0}'.replace(/\{0\}/, iValue);
            }
            iValue += num[0].length;
            return parseInt(num[0], 10);
        };
        // Extract a name from the string value and convert to an index
        var getName = function(match, shortNames, longNames, step) {
            var names = (doubled(match, step) ? longNames : shortNames);
            for (var i = 0; i < names.length; i++) {
                if (value.substr(iValue, names[i].length) == names[i]) {
                    iValue += names[i].length;
                    return i + 1;
                }
            }
            throw 'Unknown name at position {0}'.replace(/\{0\}/, iValue);
        };
        // Confirm that a literal character matches the string value
        var checkLiteral = function() {
            if (value.charAt(iValue) != format.charAt(iFormat)) {
                throw 'Unexpected literal at position {0}'.replace(/\{0\}/, iValue);
            }
            iValue++;
        };
        var iValue = 0;
        for (var iFormat = 0; iFormat < format.length; iFormat++) {
            if (literal) {
                if (format.charAt(iFormat) == "'" && !doubled("'")) {
                    literal = false;
                }
                else {
                    checkLiteral();
                }
            }
            else {
                switch (format.charAt(iFormat)) {
                    case 'd': day = getNumber('d'); break;
                    case 'D': getName('D', dayNamesShort, dayNames); break;
                    case 'o': doy = getNumber('o'); break;
                    case 'w': getNumber('w'); break;
                    case 'm': month = getNumber('m'); break;
                    case 'M': month = getName('M', monthNamesShort, monthNames); break;
                    case 'y':
                        var iSave = iFormat;
                        shortYear = !doubled('y', 2);
                        iFormat = iSave;
                        year = getNumber('y', 2);
                        break;
                    case '@':
                        var date = this._normaliseDate(new Date(getNumber('@') * 1000));
                        year = date.getFullYear();
                        month = date.getMonth() + 1;
                        day = date.getDate();
                        break;
                    case '!':
                        var date = this._normaliseDate(
                            new Date((getNumber('!') - this._ticksTo1970) / 10000));
                        year = date.getFullYear();
                        month = date.getMonth() + 1;
                        day = date.getDate();
                        break;
                    case '*': iValue = value.length; break;
                    case "'":
                        if (doubled("'")) {
                            checkLiteral();
                        }
                        else {
                            literal = true;
                        }
                        break;
                    default: checkLiteral();
                }
            }
        }
        if (iValue < value.length) {
            throw 'Additional text found at end';
        }
        if (year == -1) {
            year = this.today().getFullYear();
        }
        else if (year < 100 && shortYear) {
            year += (shortYearCutoff == -1 ? 1900 : this.today().getFullYear() -
                this.today().getFullYear() % 100 - (year <= shortYearCutoff ? 0 : 100));
        }
        if (doy > -1) {
            month = 1;
            day = doy;
            for (var dim = this.daysInMonth(year, month); day > dim;
                    dim = this.daysInMonth(year, month)) {
                month++;
                day -= dim;
            }
        }
        var date = this.newDate(year, month, day);
        if (date.getFullYear() != year || date.getMonth() + 1 != month || date.getDate() != day) {
            throw 'Invalid date';
        }
        return date;
    },

    /* A date may be specified as an exact value or a relative one.
       @param  dateSpec     (Date or number or string) the date as an object or string
                            in the given format or an offset - numeric days from today,
                            or string amounts and periods, e.g. '+1m +2w'
       @param  defaultDate  (Date) the date to use if no other supplied, may be null
       @param  currentDate  (Date) the current date as a possible basis for relative dates,
                            if null today is used (optional)
       @param  dateFormat   (string) the expected date format - see formatDate above (optional)
       @param  settings     (object) attributes include:
                            shortYearCutoff  (number) the cutoff year for determining the century (optional)
                            dayNamesShort    (string[7]) abbreviated names of the days from Sunday (optional)
                            dayNames         (string[7]) names of the days from Sunday (optional)
                            monthNamesShort  (string[12]) abbreviated names of the months (optional)
                            monthNames       (string[12]) names of the months (optional)
       @return  (Date) the decoded date */
    determineDate: function(dateSpec, defaultDate, currentDate, dateFormat, settings) {
        if (currentDate && typeof currentDate != 'object') {
            settings = dateFormat;
            dateFormat = currentDate;
            currentDate = null;
        }
        if (typeof dateFormat != 'string') {
            settings = dateFormat;
            dateFormat = '';
        }
        var offsetString = function(offset) {
            try {
                return $.datepick.parseDate(dateFormat, offset, settings);
            }
            catch (e) {
                // Ignore
            }
            offset = offset.toLowerCase();
            var date = (offset.match(/^c/) && currentDate ? $.datepick.newDate(currentDate) : null) ||
                $.datepick.today();
            var pattern = /([+-]?[0-9]+)\s*(d|w|m|y)?/g;
            var matches = pattern.exec(offset);
            while (matches) {
                date = $.datepick.add(date, parseInt(matches[1], 10), matches[2] || 'd');
                matches = pattern.exec(offset);
            }
            return date;
        };
        defaultDate = (defaultDate ? $.datepick.newDate(defaultDate) : null);
        dateSpec = (dateSpec == null ? defaultDate :
            (typeof dateSpec == 'string' ? offsetString(dateSpec) : (typeof dateSpec == 'number' ?
            (isNaN(dateSpec) || dateSpec == Infinity || dateSpec == -Infinity ? defaultDate :
            $.datepick.add($.datepick.today(), dateSpec, 'd')) : $.datepick._normaliseDate(dateSpec))));
        return dateSpec;
    },

    /* Find the number of days in a given month.
       @param  year   (Date) the date to get days for or
                      (number) the full year
       @param  month  (number) the month (1 to 12)
       @return  (number) the number of days in this month */
    daysInMonth: function(year, month) {
        month = (year.getFullYear ? year.getMonth() + 1 : month);
        year = (year.getFullYear ? year.getFullYear() : year);
        return this.newDate(year, month + 1, 0).getDate();
    },

    /* Calculate the day of the year for a date.
       @param  year   (Date) the date to get the day-of-year for or
                      (number) the full year
       @param  month  (number) the month (1-12)
       @param  day    (number) the day
       @return  (number) the day of the year */
    dayOfYear: function(year, month, day) {
        var date = (year.getFullYear ? year : this.newDate(year, month, day));
        var newYear = this.newDate(date.getFullYear(), 1, 1);
        return Math.floor((date.getTime() - newYear.getTime()) / this._msPerDay) + 1;
    },

    /* Set as calculateWeek to determine the week of the year based on the ISO 8601 definition.
       @param  year   (Date) the date to get the week for or
                      (number) the full year
       @param  month  (number) the month (1-12)
       @param  day    (number) the day
       @return  (number) the number of the week within the year that contains this date */
    iso8601Week: function(year, month, day) {
        var checkDate = (year.getFullYear ?
            new Date(year.getTime()) : this.newDate(year, month, day));
        // Find Thursday of this week starting on Monday
        checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
        var time = checkDate.getTime();
        checkDate.setMonth(0, 1); // Compare with Jan 1
        return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
    },

    /* Return today's date.
       @return  (Date) today */
    today: function() {
        return this._normaliseDate(new Date());
    },

    /* Return a new date.
       @param  year   (Date) the date to clone or
                      (number) the year
       @param  month  (number) the month (1-12)
       @param  day    (number) the day
       @return  (Date) the date */
    newDate: function(year, month, day) {
        return (!year ? null : (year.getFullYear ? this._normaliseDate(new Date(year.getTime())) :
            new Date(year, month - 1, day, 12)));
    },

    /* Standardise a date into a common format - time portion is 12 noon.
       @param  date  (Date) the date to standardise
       @return  (Date) the normalised date */
    _normaliseDate: function(date) {
        if (date) {
            date.setHours(12, 0, 0, 0);
        }
        return date;
    },

    /* Set the year for a date.
       @param  date  (Date) the original date
       @param  year  (number) the new year
       @return  the updated date */
    year: function(date, year) {
        date.setFullYear(year);
        return this._normaliseDate(date);
    },

    /* Set the month for a date.
       @param  date   (Date) the original date
       @param  month  (number) the new month (1-12)
       @return  the updated date */
    month: function(date, month) {
        date.setMonth(month - 1);
        return this._normaliseDate(date);
    },

    /* Set the day for a date.
       @param  date  (Date) the original date
       @param  day   (number) the new day of the month
       @return  the updated date */
    day: function(date, day) {
        date.setDate(day);
        return this._normaliseDate(date);
    },

    /* Add a number of periods to a date.
       @param  date    (Date) the original date
       @param  amount  (number) the number of periods
       @param  period  (string) the type of period d/w/m/y
       @return  the updated date */
    add: function(date, amount, period) {
        if (period == 'd' || period == 'w') {
            this._normaliseDate(date);
            date.setDate(date.getDate() + amount * (period == 'w' ? 7 : 1));
        }
        else {
            var year = date.getFullYear() + (period == 'y' ? amount : 0);
            var month = date.getMonth() + (period == 'm' ? amount : 0);
            date.setTime($.datepick.newDate(year, month + 1,
                Math.min(date.getDate(), this.daysInMonth(year, month + 1))).getTime());
        }
        return date;
    },

    /* Attach the datepicker functionality to an input field.
       @param  target    (element) the control to affect
       @param  settings  (object) the custom options for this instance */
    _attachPicker: function(target, settings) {
        target = $(target);
        if (target.hasClass(this.markerClass)) {
            return;
        }
        target.addClass(this.markerClass);
        var inst = {target: target, selectedDates: [], drawDate: null, pickingRange: false,
            inline: ($.inArray(target[0].nodeName.toLowerCase(), ['div', 'span']) > -1),
            get: function(name) { // Get a setting value, defaulting if necessary
                var value = this.settings[name] !== undefined ?
                    this.settings[name] : $.datepick._defaults[name];
                if ($.inArray(name, ['defaultDate', 'minDate', 'maxDate']) > -1) { // Decode date settings
                    value = $.datepick.determineDate(
                        value, null, this.selectedDates[0], this.get('dateFormat'), inst.getConfig());
                }
                return value;
            },
            curMinDate: function() {
                return (this.pickingRange ? this.selectedDates[0] : this.get('minDate'));
            },
            getConfig: function() {
                return {dayNamesShort: this.get('dayNamesShort'), dayNames: this.get('dayNames'),
                    monthNamesShort: this.get('monthNamesShort'), monthNames: this.get('monthNames'),
                    calculateWeek: this.get('calculateWeek'),
                    shortYearCutoff: this.get('shortYearCutoff')};
            }
        };
        $.data(target[0], this.dataName, inst);
        var inlineSettings = ($.fn.metadata ? target.metadata() : {});
        inst.settings = $.extend({}, settings || {}, inlineSettings || {});
        if (inst.inline) {
            this._update(target[0]);
            if ($.fn.mousewheel) {
                target.mousewheel(this._doMouseWheel);
            }
        }
        else {
            this._attachments(target, inst);
            target.bind('keydown.' + this.dataName, this._keyDown).
                bind('keypress.' + this.dataName, this._keyPress).
                bind('keyup.' + this.dataName, this._keyUp);
            if (target.attr('disabled')) {
                this.disable(target[0]);
            }
        }
    },

    /* Retrieve the settings for a datepicker control.
       @param  target  (element) the control to affect
       @param  name    (string) the name of the setting (optional)
       @return  (object) the current instance settings (name == 'all') or
                (object) the default settings (no name) or
                (any) the setting value (name supplied) */
    options: function(target, name) {
        var inst = $.data(target, this.dataName);
        return (inst ? (name ? (name == 'all' ?
            inst.settings : inst.settings[name]) : $.datepick._defaults) : {});
    },

    /* Reconfigure the settings for a datepicker control.
       @param  target    (element) the control to affect
       @param  settings  (object) the new options for this instance or
                         (string) an individual property name
       @param  value     (any) the individual property value (omit if settings is an object) */
    option: function(target, settings, value) {
        target = $(target);
        if (!target.hasClass(this.markerClass)) {
            return;
        }
        settings = settings || {};
        if (typeof settings == 'string') {
            var name = settings;
            settings = {};
            settings[name] = value;
        }
        var inst = $.data(target[0], this.dataName);
        var dates = inst.selectedDates;
        extendRemove(inst.settings, settings);
        this.setDate(target[0], dates, null, false, true);
        inst.pickingRange = false;
        inst.drawDate = $.datepick.newDate(this._checkMinMax(
            (settings.defaultDate ? inst.get('defaultDate') : inst.drawDate) ||
            inst.get('defaultDate') || $.datepick.today(), inst));
        if (!inst.inline) {
            this._attachments(target, inst);
        }
        if (inst.inline || inst.div) {
            this._update(target[0]);
        }
    },

    /* Attach events and trigger, if necessary.
       @param  target  (jQuery) the control to affect
       @param  inst    (object) the current instance settings */
    _attachments: function(target, inst) {
        target.unbind('focus.' + this.dataName);
        if (inst.get('showOnFocus')) {
            target.bind('focus.' + this.dataName, this.show);
        }
        if (inst.trigger) {
            inst.trigger.remove();
        }
        var trigger = inst.get('showTrigger');
        inst.trigger = (!trigger ? $([]) :
            $(trigger).clone().removeAttr('id').addClass(this._triggerClass)
                [inst.get('isRTL') ? 'insertBefore' : 'insertAfter'](target).
                click(function() {
                    if (!$.datepick.isDisabled(target[0])) {
                        $.datepick[$.datepick.curInst == inst ?
                            'hide' : 'show'](target[0]);
                    }
                }));
        this._autoSize(target, inst);
        var dates = this._extractDates(inst, target.val());
        if (dates) {
            this.setDate(target[0], dates, null, true);
        }
        if (inst.get('selectDefaultDate') && inst.get('defaultDate') &&
                inst.selectedDates.length == 0) {
            this.setDate(target[0], $.datepick.newDate(inst.get('defaultDate') || $.datepick.today()));
        }
    },

    /* Apply the maximum length for the date format.
       @param  inst  (object) the current instance settings */
    _autoSize: function(target, inst) {
        if (inst.get('autoSize') && !inst.inline) {
            var date = $.datepick.newDate(2009, 10, 20); // Ensure double digits
            var dateFormat = inst.get('dateFormat');
            if (dateFormat.match(/[DM]/)) {
                var findMax = function(names) {
                    var max = 0;
                    var maxI = 0;
                    for (var i = 0; i < names.length; i++) {
                        if (names[i].length > max) {
                            max = names[i].length;
                            maxI = i;
                        }
                    }
                    return maxI;
                };
                date.setMonth(findMax(inst.get(dateFormat.match(/MM/) ? // Longest month
                    'monthNames' : 'monthNamesShort')));
                date.setDate(findMax(inst.get(dateFormat.match(/DD/) ? // Longest day
                    'dayNames' : 'dayNamesShort')) + 20 - date.getDay());
            }
            inst.target.attr('size', $.datepick.formatDate(dateFormat, date, inst.getConfig()).length);
        }
    },

    /* Remove the datepicker functionality from a control.
       @param  target  (element) the control to affect */
    destroy: function(target) {
        target = $(target);
        if (!target.hasClass(this.markerClass)) {
            return;
        }
        var inst = $.data(target[0], this.dataName);
        if (inst.trigger) {
            inst.trigger.remove();
        }
        target.removeClass(this.markerClass).empty().unbind('.' + this.dataName);
        if (inst.inline && $.fn.mousewheel) {
            target.unmousewheel();
        }
        if (!inst.inline && inst.get('autoSize')) {
            target.removeAttr('size');
        }
        $.removeData(target[0], this.dataName);
    },

    /* Apply multiple event functions.
       Usage, for example: onShow: multipleEvents(fn1, fn2, ...)
       @param  fns  (function...) the functions to apply */
    multipleEvents: function(fns) {
        var funcs = arguments;
        return function(args) {
            for (var i = 0; i < funcs.length; i++) {
                funcs[i].apply(this, arguments);
            }
        };
    },

    /* Enable the datepicker and any associated trigger.
       @param  target  (element) the control to use */
    enable: function(target) {
        var $target = $(target);
        if (!$target.hasClass(this.markerClass)) {
            return;
        }
        var inst = $.data(target, this.dataName);
        if (inst.inline)
            $target.children('.' + this._disableClass).remove().end().
                find('button,select').attr('disabled', '').end().
                find('a').attr('href', 'javascript:void(0)');
        else {
            target.disabled = false;
            inst.trigger.filter('button.' + this._triggerClass).
                attr('disabled', '').end().
                filter('img.' + this._triggerClass).
                css({opacity: '1.0', cursor: ''});
        }
        this._disabled = $.map(this._disabled,
            function(value) { return (value == target ? null : value); }); // Delete entry
    },

    /* Disable the datepicker and any associated trigger.
       @param  target  (element) the control to use */
    disable: function(target) {
        var $target = $(target);
        if (!$target.hasClass(this.markerClass))
            return;
        var inst = $.data(target, this.dataName);
        if (inst.inline) {
            var inline = $target.children(':last');
            var offset = inline.offset();
            var relOffset = {left: 0, top: 0};
            inline.parents().each(function() {
                if ($(this).css('position') == 'relative') {
                    relOffset = $(this).offset();
                    return false;
                }
            });
            var zIndex = $target.css('zIndex');
            zIndex = (zIndex == 'auto' ? 0 : parseInt(zIndex, 10)) + 1;
            $target.prepend('<div class="' + this._disableClass + '" style="' +
                'width: ' + inline.outerWidth() + 'px; height: ' + inline.outerHeight() +
                'px; left: ' + (offset.left - relOffset.left) + 'px; top: ' +
                (offset.top - relOffset.top) + 'px; z-index: ' + zIndex + '"></div>').
                find('button,select').attr('disabled', 'disabled').end().
                find('a').removeAttr('href');
        }
        else {
            target.disabled = true;
            inst.trigger.filter('button.' + this._triggerClass).
                attr('disabled', 'disabled').end().
                filter('img.' + this._triggerClass).
                css({opacity: '0.5', cursor: 'default'});
        }
        this._disabled = $.map(this._disabled,
            function(value) { return (value == target ? null : value); }); // Delete entry
        this._disabled.push(target);
    },

    /* Is the first field in a jQuery collection disabled as a datepicker?
       @param  target  (element) the control to examine
       @return  (boolean) true if disabled, false if enabled */
    isDisabled: function(target) {
        return (target && $.inArray(target, this._disabled) > -1);
    },

    /* Show a popup datepicker.
       @param  target  (event) a focus event or
                       (element) the control to use */
    show: function(target) {
        target = target.target || target;
        var inst = $.data(target, $.datepick.dataName);
        if ($.datepick.curInst == inst) {
            return;
        }
        if ($.datepick.curInst) {
            $.datepick.hide($.datepick.curInst, true);
        }
        if (inst) {
            // Retrieve existing date(s)
            inst.lastVal = null;
            inst.selectedDates = $.datepick._extractDates(inst, $(target).val());
            inst.pickingRange = false;
            inst.drawDate = $.datepick._checkMinMax($.datepick.newDate(inst.selectedDates[0] ||
                inst.get('defaultDate') || $.datepick.today()), inst);
            inst.prevDate = $.datepick.newDate(inst.drawDate);
            $.datepick.curInst = inst;
            // Generate content
            $.datepick._update(target, true);
            // Adjust position before showing
            var offset = $.datepick._checkOffset(inst);
            inst.div.css({left: offset.left, top: offset.top});
            // And display
            var showAnim = inst.get('showAnim');
            var showSpeed = inst.get('showSpeed');
            showSpeed = (showSpeed == 'normal' && $.ui && $.ui.version >= '1.8' ?
                '_default' : showSpeed);
            var postProcess = function() {
                var borders = $.datepick._getBorders(inst.div);
                inst.div.find('.' + $.datepick._coverClass). // IE6- only
                    css({left: -borders[0], top: -borders[1],
                        width: inst.div.outerWidth() + borders[0],
                        height: inst.div.outerHeight() + borders[1]});
            };
            if ($.effects && $.effects[showAnim]) {
                var data = inst.div.data(); // Update old effects data
                for (var key in data) {
                    if (key.match(/^ec\.storage\./)) {
                        data[key] = inst._mainDiv.css(key.replace(/ec\.storage\./, ''));
                    }
                }
                inst.div.data(data).show(showAnim, inst.get('showOptions'), showSpeed, postProcess);
            }
            else {
                inst.div[showAnim || 'show']((showAnim ? showSpeed : ''), postProcess);
            }
            if (!showAnim) {
                postProcess();
            }
        }
    },

    /* Extract possible dates from a string.
       @param  inst  (object) the current instance settings
       @param  text  (string) the text to extract from
       @return  (CDate[]) the extracted dates */
    _extractDates: function(inst, datesText) {
        if (datesText == inst.lastVal) {
            return;
        }
        inst.lastVal = datesText;
        var dateFormat = inst.get('dateFormat');
        var multiSelect = inst.get('multiSelect');
        var rangeSelect = inst.get('rangeSelect');
        datesText = datesText.split(multiSelect ? inst.get('multiSeparator') :
            (rangeSelect ? inst.get('rangeSeparator') : '\x00'));
        var dates = [];
        for (var i = 0; i < datesText.length; i++) {
            try {
                var date = $.datepick.parseDate(dateFormat, datesText[i], inst.getConfig());
                if (date) {
                    var found = false;
                    for (var j = 0; j < dates.length; j++) {
                        if (dates[j].getTime() == date.getTime()) {
                            found = true;
                            break;
                        }
                    }
                    if (!found) {
                        dates.push(date);
                    }
                }
            }
            catch (e) {
                // Ignore
            }
        }
        dates.splice(multiSelect || (rangeSelect ? 2 : 1), dates.length);
        if (rangeSelect && dates.length == 1) {
            dates[1] = dates[0];
        }
        return dates;
    },

    /* Update the datepicker display.
       @param  target  (event) a focus event or
                       (element) the control to use
       @param  hidden  (boolean) true to initially hide the datepicker */
    _update: function(target, hidden) {
        target = $(target.target || target);
        var inst = $.data(target[0], $.datepick.dataName);
        if (inst) {
            if (inst.inline || $.datepick.curInst == inst) {
                var onChange = inst.get('onChangeMonthYear');
                if (onChange && (!inst.prevDate ||
                        inst.prevDate.getFullYear() != inst.drawDate.getFullYear() ||
                        inst.prevDate.getMonth() != inst.drawDate.getMonth())) {
                    onChange.apply(target[0], [inst.drawDate.getFullYear(), inst.drawDate.getMonth() + 1]);
                }
            }
            if (inst.inline) {
                target.html(this._generateContent(target[0], inst));
            }
            else if ($.datepick.curInst == inst) {
                if (!inst.div) {
                    inst.div = $('<div></div>').addClass(this._popupClass).
                        css({display: (hidden ? 'none' : 'static'), position: 'absolute',
                            left: target.offset().left,
                            top: target.offset().top + target.outerHeight()}).
                        appendTo($(inst.get('popupContainer') || 'body'));
                    if ($.fn.mousewheel) {
                        inst.div.mousewheel(this._doMouseWheel);
                    }
                }
                inst.div.html(this._generateContent(target[0], inst));
                target.focus();
            }
        }
    },

    /* Update the input field and any alternate field with the current dates.
       @param  target  (element) the control to use
       @param  keyUp   (boolean, internal) true if coming from keyUp processing */
    _updateInput: function(target, keyUp) {
        var inst = $.data(target, this.dataName);
        if (inst) {
            var value = '';
            var altValue = '';
            var sep = (inst.get('multiSelect') ? inst.get('multiSeparator') :
                inst.get('rangeSeparator'));
            var dateFormat = inst.get('dateFormat');
            var altFormat = inst.get('altFormat') || dateFormat;
            for (var i = 0; i < inst.selectedDates.length; i++) {
                value += (keyUp ? '' : (i > 0 ? sep : '') + $.datepick.formatDate(
                    dateFormat, inst.selectedDates[i], inst.getConfig()));
                altValue += (i > 0 ? sep : '') + $.datepick.formatDate(
                    altFormat, inst.selectedDates[i], inst.getConfig());
            }
            if (!inst.inline && !keyUp) {
                $(target).val(value);
            }
            $(inst.get('altField')).val(altValue);
            var onSelect = inst.get('onSelect');
            if (onSelect && !keyUp && !inst.inSelect) {
                inst.inSelect = true; // Prevent endless loops
                onSelect.apply(target, [inst.selectedDates]);
                inst.inSelect = false;
            }
        }
    },

    /* Retrieve the size of left and top borders for an element.
       @param  elem  (jQuery) the element of interest
       @return  (number[2]) the left and top borders */
    _getBorders: function(elem) {
        var convert = function(value) {
            var extra = ($.browser.msie ? 1 : 0);
            return {thin: 1 + extra, medium: 3 + extra, thick: 5 + extra}[value] || value;
        };
        return [parseFloat(convert(elem.css('border-left-width'))),
            parseFloat(convert(elem.css('border-top-width')))];
    },

    /* Check positioning to remain on the screen.
       @param  inst  (object) the current instance settings
       @return  (object) the updated offset for the datepicker */
    _checkOffset: function(inst) {
        var base = (inst.target.is(':hidden') && inst.trigger ? inst.trigger : inst.target);
        var offset = base.offset();
        var isFixed = false;
        $(inst.target).parents().each(function() {
            isFixed |= $(this).css('position') == 'fixed';
            return !isFixed;
        });
        if (isFixed && $.browser.opera) { // Correction for Opera when fixed and scrolled
            offset.left -= document.documentElement.scrollLeft;
            offset.top -= document.documentElement.scrollTop;
        }
        var browserWidth = (!$.browser.mozilla || document.doctype ?
            document.documentElement.clientWidth : 0) || document.body.clientWidth;
        var browserHeight = (!$.browser.mozilla || document.doctype ?
            document.documentElement.clientHeight : 0) || document.body.clientHeight;
        if (browserWidth == 0) {
            return offset;
        }
        var alignment = inst.get('alignment');
        var isRTL = inst.get('isRTL');
        var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
        var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
        var above = offset.top - inst.div.outerHeight() -
            (isFixed && $.browser.opera ? document.documentElement.scrollTop : 0);
        var below = offset.top + base.outerHeight();
        var alignL = offset.left;
        var alignR = offset.left + base.outerWidth() - inst.div.outerWidth() -
            (isFixed && $.browser.opera ? document.documentElement.scrollLeft : 0);
        var tooWide = (offset.left + inst.div.outerWidth() - scrollX) > browserWidth;
        var tooHigh = (offset.top + inst.target.outerHeight() + inst.div.outerHeight() -
            scrollY) > browserHeight;
        if (alignment == 'topLeft') {
            offset = {left: alignL, top: above};
        }
        else if (alignment == 'topRight') {
            offset = {left: alignR, top: above};
        }
        else if (alignment == 'bottomLeft') {
            offset = {left: alignL, top: below};
        }
        else if (alignment == 'bottomRight') {
            offset = {left: alignR, top: below};
        }
        else if (alignment == 'top') {
            offset = {left: (isRTL || tooWide ? alignR : alignL), top: above};
        }
        else { // bottom
            offset = {left: (isRTL || tooWide ? alignR : alignL),
                top: (tooHigh ? above : below)};
        }
        offset.left = Math.max((isFixed ? 0 : scrollX), offset.left - (isFixed ? scrollX : 0));
        offset.top = Math.max((isFixed ? 0 : scrollY), offset.top - (isFixed ? scrollY : 0));
        return offset;
    },

    /* Close date picker if clicked elsewhere.
       @param  event  (MouseEvent) the mouse click to check */
    _checkExternalClick: function(event) {
        if (!$.datepick.curInst) {
            return;
        }
        var target = $(event.target);
        if (!target.parents().andSelf().hasClass($.datepick._popupClass) &&
                !target.hasClass($.datepick.markerClass) &&
                !target.parents().andSelf().hasClass($.datepick._triggerClass)) {
            $.datepick.hide($.datepick.curInst);
        }
    },

    /* Hide a popup datepicker.
       @param  target     (element) the control to use or
                          (object) the current instance settings
       @param  immediate  (boolean) true to close immediately without animation */
    hide: function(target, immediate) {
        var inst = $.data(target, this.dataName) || target;
        if (inst && inst == $.datepick.curInst) {
            var showAnim = (immediate ? '' : inst.get('showAnim'));
            var showSpeed = inst.get('showSpeed');
            showSpeed = (showSpeed == 'normal' && $.ui && $.ui.version >= '1.8' ?
                '_default' : showSpeed);
            var postProcess = function() {
                inst.div.remove();
                inst.div = null;
                $.datepick.curInst = null;
                var onClose = inst.get('onClose');
                if (onClose) {
                    onClose.apply(target, [inst.selectedDates]);
                }
            };
            inst.div.stop();
            if ($.effects && $.effects[showAnim]) {
                inst.div.hide(showAnim, inst.get('showOptions'), showSpeed, postProcess);
            }
            else {
                var hideAnim = (showAnim == 'slideDown' ? 'slideUp' :
                    (showAnim == 'fadeIn' ? 'fadeOut' : 'hide'));
                inst.div[hideAnim]((showAnim ? showSpeed : ''), postProcess);
            }
            if (!showAnim) {
                postProcess();
            }
        }
    },

    /* Handle keystrokes in the datepicker.
       @param  event  (KeyEvent) the keystroke
       @return  (boolean) true if not handled, false if handled */
    _keyDown: function(event) {
        var target = event.target;
        var inst = $.data(target, $.datepick.dataName);
        var handled = false;
        if (inst.div) {
            if (event.keyCode == 9) { // Tab - close
                $.datepick.hide(target);
            }
            else if (event.keyCode == 13) { // Enter - select
                $.datepick.selectDate(target,
                    $('a.' + inst.get('renderer').highlightedClass, inst.div)[0]);
                handled = true;
            }
            else { // Command keystrokes
                var commands = inst.get('commands');
                for (var name in commands) {
                    var command = commands[name];
                    if (command.keystroke.keyCode == event.keyCode &&
                            !!command.keystroke.ctrlKey == !!(event.ctrlKey || event.metaKey) &&
                            !!command.keystroke.altKey == event.altKey &&
                            !!command.keystroke.shiftKey == event.shiftKey) {
                        $.datepick.performAction(target, name);
                        handled = true;
                        break;
                    }
                }
            }
        }
        else { // Show on 'current' keystroke
            var command = inst.get('commands').current;
            if (command.keystroke.keyCode == event.keyCode &&
                    !!command.keystroke.ctrlKey == !!(event.ctrlKey || event.metaKey) &&
                    !!command.keystroke.altKey == event.altKey &&
                    !!command.keystroke.shiftKey == event.shiftKey) {
                $.datepick.show(target);
                handled = true;
            }
        }
        inst.ctrlKey = ((event.keyCode < 48 && event.keyCode != 32) ||
            event.ctrlKey || event.metaKey);
        if (handled) {
            event.preventDefault();
            event.stopPropagation();
        }
        return !handled;
    },

    /* Filter keystrokes in the datepicker.
       @param  event  (KeyEvent) the keystroke
       @return  (boolean) true if allowed, false if not allowed */
    _keyPress: function(event) {
        var target = event.target;
        var inst = $.data(target, $.datepick.dataName);
        if (inst && inst.get('constrainInput')) {
            var ch = String.fromCharCode(event.keyCode || event.charCode);
            var allowedChars = $.datepick._allowedChars(inst);
            return (event.metaKey || inst.ctrlKey || ch < ' ' ||
                !allowedChars || allowedChars.indexOf(ch) > -1);
        }
        return true;
    },

    /* Determine the set of characters allowed by the date format.
       @param  inst  (object) the current instance settings
       @return  (string) the set of allowed characters, or null if anything allowed */
    _allowedChars: function(inst) {
        var dateFormat = inst.get('dateFormat');
        var allowedChars = (inst.get('multiSelect') ? inst.get('multiSeparator') :
            (inst.get('rangeSelect') ? inst.get('rangeSeparator') : ''));
        var literal = false;
        var hasNum = false;
        for (var i = 0; i < dateFormat.length; i++) {
            var ch = dateFormat.charAt(i);
            if (literal) {
                if (ch == "'" && dateFormat.charAt(i + 1) != "'") {
                    literal = false;
                }
                else {
                    allowedChars += ch;
                }
            }
            else {
                switch (ch) {
                    case 'd': case 'm': case 'o': case 'w':
                        allowedChars += (hasNum ? '' : '0123456789'); hasNum = true; break;
                    case 'y': case '@': case '!':
                        allowedChars += (hasNum ? '' : '0123456789') + '-'; hasNum = true; break;
                    case 'J':
                        allowedChars += (hasNum ? '' : '0123456789') + '-.'; hasNum = true; break;
                    case 'D': case 'M': case 'Y':
                        return null; // Accept anything
                    case "'":
                        if (dateFormat.charAt(i + 1) == "'") {
                            allowedChars += "'";
                        }
                        else {
                            literal = true;
                        }
                        break;
                    default:
                        allowedChars += ch;
                }
            }
        }
        return allowedChars;
    },

    /* Synchronise datepicker with the field.
       @param  event  (KeyEvent) the keystroke
       @return  (boolean) true if allowed, false if not allowed */
    _keyUp: function(event) {
        var target = event.target;
        var inst = $.data(target, $.datepick.dataName);
        if (inst && !inst.ctrlKey && inst.lastVal != inst.target.val()) {
            try {
                var dates = $.datepick._extractDates(inst, inst.target.val());
                if (dates.length > 0) {
                    $.datepick.setDate(target, dates, null, true);
                }
            }
            catch (event) {
                // Ignore
            }
        }
        return true;
    },

    /* Increment/decrement month/year on mouse wheel activity.
       @param  event  (event) the mouse wheel event
       @param  delta  (number) the amount of change */
    _doMouseWheel: function(event, delta) {
        var target = ($.datepick.curInst && $.datepick.curInst.target[0]) ||
            $(event.target).closest('.' + $.datepick.markerClass)[0];
        if ($.datepick.isDisabled(target)) {
            return;
        }
        var inst = $.data(target, $.datepick.dataName);
        if (inst.get('useMouseWheel')) {
            delta = ($.browser.opera ? -delta : delta);
            delta = (delta < 0 ? -1 : +1);
            $.datepick.changeMonth(target,
                -inst.get(event.ctrlKey ? 'monthsToJump' : 'monthsToStep') * delta);
        }
        event.preventDefault();
    },

    /* Clear an input and close a popup datepicker.
       @param  target  (element) the control to use */
    clear: function(target) {
        var inst = $.data(target, this.dataName);
        if (inst) {
            inst.selectedDates = [];
            this.hide(target);
            if (inst.get('selectDefaultDate') && inst.get('defaultDate')) {
                this.setDate(target,
                    $.datepick.newDate(inst.get('defaultDate') ||$.datepick.today()));
            }
            else {
                this._updateInput(target);
            }
        }
    },

    /* Retrieve the selected date(s) for a datepicker.
       @param  target  (element) the control to examine
       @return  (CDate[]) the selected date(s) */
    getDate: function(target) {
        var inst = $.data(target, this.dataName);
        return (inst ? inst.selectedDates : []);
    },

    /* Set the selected date(s) for a datepicker.
       @param  target   (element) the control to examine
       @param  dates    (CDate or number or string or [] of these) the selected date(s)
       @param  endDate  (CDate or number or string) the ending date for a range (optional)
       @param  keyUp    (boolean, internal) true if coming from keyUp processing
       @param  setOpt   (boolean, internal) true if coming from option processing */
    setDate: function(target, dates, endDate, keyUp, setOpt) {
        var inst = $.data(target, this.dataName);
        if (inst) {
            if (!$.isArray(dates)) {
                dates = [dates];
                if (endDate) {
                    dates.push(endDate);
                }
            }
            var dateFormat = inst.get('dateFormat');
            var minDate = inst.get('minDate');
            var maxDate = inst.get('maxDate');
            var curDate = inst.selectedDates[0];
            inst.selectedDates = [];
            for (var i = 0; i < dates.length; i++) {
                var date = $.datepick.determineDate(
                    dates[i], null, curDate, dateFormat, inst.getConfig());
                if (date) {
                    if ((!minDate || date.getTime() >= minDate.getTime()) &&
                            (!maxDate || date.getTime() <= maxDate.getTime())) {
                        var found = false;
                        for (var j = 0; j < inst.selectedDates.length; j++) {
                            if (inst.selectedDates[j].getTime() == date.getTime()) {
                                found = true;
                                break;
                            }
                        }
                        if (!found) {
                            inst.selectedDates.push(date);
                        }
                    }
                }
            }
            var rangeSelect = inst.get('rangeSelect');
            inst.selectedDates.splice(inst.get('multiSelect') ||
                (rangeSelect ? 2 : 1), inst.selectedDates.length);
            if (rangeSelect) {
                switch (inst.selectedDates.length) {
                    case 1: inst.selectedDates[1] = inst.selectedDates[0]; break;
                    case 2: inst.selectedDates[1] =
                        (inst.selectedDates[0].getTime() > inst.selectedDates[1].getTime() ?
                        inst.selectedDates[0] : inst.selectedDates[1]); break;
                }
                inst.pickingRange = false;
            }
            inst.prevDate = (inst.drawDate ? $.datepick.newDate(inst.drawDate) : null);
            inst.drawDate = this._checkMinMax($.datepick.newDate(inst.selectedDates[0] ||
                inst.get('defaultDate') || $.datepick.today()), inst);
            if (!setOpt) {
                this._update(target);
                this._updateInput(target, keyUp);
            }
        }
    },

    /* Determine whether a date is selectable for this datepicker.
       @param  target  (element) the control to check
       @param  date    (Date or string or number) the date to check
       @return  (boolean) true if selectable, false if not */
    isSelectable: function(target, date) {
        var inst = $.data(target, this.dataName);
        if (!inst) {
            return false;
        }
        date = $.datepick.determineDate(date, inst.selectedDates[0] || this.today(), null,
            inst.get('dateFormat'), inst.getConfig());
        return this._isSelectable(target, date, inst.get('onDate'),
            inst.get('minDate'), inst.get('maxDate'));
    },

    /* Internally determine whether a date is selectable for this datepicker.
       @param  target   (element) the control to check
       @param  date     (Date) the date to check
       @param  onDate   (function or boolean) any onDate callback or callback.selectable
       @param  mindate  (Date) the minimum allowed date
       @param  maxdate  (Date) the maximum allowed date
       @return  (boolean) true if selectable, false if not */
    _isSelectable: function(target, date, onDate, minDate, maxDate) {
        var dateInfo = (typeof onDate == 'boolean' ? {selectable: onDate} :
            (!onDate ? {} : onDate.apply(target, [date, true])));
        return (dateInfo.selectable != false) &&
            (!minDate || date.getTime() >= minDate.getTime()) &&
            (!maxDate || date.getTime() <= maxDate.getTime());
    },

    /* Perform a named action for a datepicker.
       @param  target  (element) the control to affect
       @param  action  (string) the name of the action */
    performAction: function(target, action) {
        var inst = $.data(target, this.dataName);
        if (inst && !this.isDisabled(target)) {
            var commands = inst.get('commands');
            if (commands[action] && commands[action].enabled.apply(target, [inst])) {
                commands[action].action.apply(target, [inst]);
            }
        }
    },

    /* Set the currently shown month, defaulting to today's.
       @param  target  (element) the control to affect
       @param  year    (number) the year to show (optional)
       @param  month   (number) the month to show (1-12) (optional)
       @param  day     (number) the day to show (optional) */
    showMonth: function(target, year, month, day) {
        var inst = $.data(target, this.dataName);
        if (inst && (day != null ||
                (inst.drawDate.getFullYear() != year || inst.drawDate.getMonth() + 1 != month))) {
            inst.prevDate = $.datepick.newDate(inst.drawDate);
            var show = this._checkMinMax((year != null ?
                $.datepick.newDate(year, month, 1) : $.datepick.today()), inst);
            inst.drawDate = $.datepick.newDate(show.getFullYear(), show.getMonth() + 1,
                (day != null ? day : Math.min(inst.drawDate.getDate(),
                $.datepick.daysInMonth(show.getFullYear(), show.getMonth() + 1))));
            this._update(target);
        }
    },

    /* Adjust the currently shown month.
       @param  target  (element) the control to affect
       @param  offset  (number) the number of months to change by */
    changeMonth: function(target, offset) {
        var inst = $.data(target, this.dataName);
        if (inst) {
            var date = $.datepick.add($.datepick.newDate(inst.drawDate), offset, 'm');
            this.showMonth(target, date.getFullYear(), date.getMonth() + 1);
        }
    },

    /* Adjust the currently shown day.
       @param  target  (element) the control to affect
       @param  offset  (number) the number of days to change by */
    changeDay: function(target, offset) {
        var inst = $.data(target, this.dataName);
        if (inst) {
            var date = $.datepick.add($.datepick.newDate(inst.drawDate), offset, 'd');
            this.showMonth(target, date.getFullYear(), date.getMonth() + 1, date.getDate());
        }
    },

    /* Restrict a date to the minimum/maximum specified.
       @param  date  (CDate) the date to check
       @param  inst  (object) the current instance settings */
    _checkMinMax: function(date, inst) {
        var minDate = inst.get('minDate');
        var maxDate = inst.get('maxDate');
        date = (minDate && date.getTime() < minDate.getTime() ? $.datepick.newDate(minDate) : date);
        date = (maxDate && date.getTime() > maxDate.getTime() ? $.datepick.newDate(maxDate) : date);
        return date;
    },

    /* Retrieve the date associated with an entry in the datepicker.
       @param  target  (element) the control to examine
       @param  elem    (element) the selected datepicker element
       @return  (CDate) the corresponding date, or null */
    retrieveDate: function(target, elem) {
        var inst = $.data(target, this.dataName);
        return (!inst ? null : this._normaliseDate(
            new Date(parseInt(elem.className.replace(/^.*dp(-?\d+).*$/, '$1'), 10))));
    },

    /* Select a date for this datepicker.
       @param  target  (element) the control to examine
       @param  elem    (element) the selected datepicker element */
    selectDate: function(target, elem) {
        var inst = $.data(target, this.dataName);
        if (inst && !this.isDisabled(target)) {
            var date = this.retrieveDate(target, elem);
            var multiSelect = inst.get('multiSelect');
            var rangeSelect = inst.get('rangeSelect');
            if (multiSelect) {
                var found = false;
                for (var i = 0; i < inst.selectedDates.length; i++) {
                    if (date.getTime() == inst.selectedDates[i].getTime()) {
                        inst.selectedDates.splice(i, 1);
                        found = true;
                        break;
                    }
                }
                if (!found && inst.selectedDates.length < multiSelect) {
                    inst.selectedDates.push(date);
                }
            }
            else if (rangeSelect) {
                if (inst.pickingRange) {
                    inst.selectedDates[1] = date;
                }
                else {
                    inst.selectedDates = [date, date];
                }
                inst.pickingRange = !inst.pickingRange;
            }
            else {
                inst.selectedDates = [date];
            }
            inst.prevDate = $.datepick.newDate(date);
            this._updateInput(target);
            if (inst.inline || inst.pickingRange || inst.selectedDates.length <
                    (multiSelect || (rangeSelect ? 2 : 1))) {
                this._update(target);
            }
            else {
                this.hide(target);
            }
        }
    },

    /* Generate the datepicker content for this control.
       @param  target  (element) the control to affect
       @param  inst    (object) the current instance settings
       @return  (jQuery) the datepicker content */
    _generateContent: function(target, inst) {
        var renderer = inst.get('renderer');
        var monthsToShow = inst.get('monthsToShow');
        monthsToShow = ($.isArray(monthsToShow) ? monthsToShow : [1, monthsToShow]);
        inst.drawDate = this._checkMinMax(
            inst.drawDate || inst.get('defaultDate') || $.datepick.today(), inst);
        var drawDate = $.datepick.add(
            $.datepick.newDate(inst.drawDate), -inst.get('monthsOffset'), 'm');
        // Generate months
        var monthRows = '';
        for (var row = 0; row < monthsToShow[0]; row++) {
            var months = '';
            for (var col = 0; col < monthsToShow[1]; col++) {
                months += this._generateMonth(target, inst, drawDate.getFullYear(),
                    drawDate.getMonth() + 1, renderer, (row == 0 && col == 0));
                $.datepick.add(drawDate, 1, 'm');
            }
            monthRows += this._prepare(renderer.monthRow, inst).replace(/\{months\}/, months);
        }
        var picker = this._prepare(renderer.picker, inst).replace(/\{months\}/, monthRows).
            replace(/\{weekHeader\}/g, this._generateDayHeaders(inst, renderer)) +
            ($.browser.msie && parseInt($.browser.version, 10) < 7 && !inst.inline ?
            '<iframe src="javascript:void(0);" class="' + this._coverClass + '"></iframe>' : '');
        // Add commands
        var commands = inst.get('commands');
        var asDateFormat = inst.get('commandsAsDateFormat');
        var addCommand = function(type, open, close, name, classes) {
            if (picker.indexOf('{' + type + ':' + name + '}') == -1) {
                return;
            }
            var command = commands[name];
            var date = (asDateFormat ? command.date.apply(target, [inst]) : null);
            picker = picker.replace(new RegExp('\\{' + type + ':' + name + '\\}', 'g'),
                '<' + open +
                (command.status ? ' title="' + inst.get(command.status) + '"' : '') +
                ' class="' + renderer.commandClass + ' ' +
                renderer.commandClass + '-' + name + ' ' + classes +
                (command.enabled(inst) ? '' : ' ' + renderer.disabledClass) + '">' +
                (date ? $.datepick.formatDate(inst.get(command.text), date, inst.getConfig()) :
                inst.get(command.text)) + '</' + close + '>');
        };
        for (var name in commands) {
            addCommand('button', 'button type="button"', 'button', name,
                renderer.commandButtonClass);
            addCommand('link', 'a href="javascript:void(0)"', 'a', name,
                renderer.commandLinkClass);
        }
        picker = $(picker);
        if (monthsToShow[1] > 1) {
            var count = 0;
            $(renderer.monthSelector, picker).each(function() {
                var nth = ++count % monthsToShow[1];
                $(this).addClass(nth == 1 ? 'first' : (nth == 0 ? 'last' : ''));
            });
        }
        // Add datepicker behaviour
        var self = this;
        picker.find(renderer.daySelector + ' a').hover(
                function() { $(this).addClass(renderer.highlightedClass); },
                function() {
                    (inst.inline ? $(this).parents('.' + self.markerClass) : inst.div).
                        find(renderer.daySelector + ' a').
                        removeClass(renderer.highlightedClass);
                }).
            click(function() {
                self.selectDate(target, this);
            }).end().
            find('select.' + this._monthYearClass + ':not(.' + this._anyYearClass + ')').
            change(function() {
                var monthYear = $(this).val().split('/');
                self.showMonth(target, parseInt(monthYear[1], 10), parseInt(monthYear[0], 10));
            }).end().
            find('select.' + this._anyYearClass).
            click(function() {
                $(this).css('visibility', 'hidden').
                    next('input').css({left: this.offsetLeft, top: this.offsetTop,
                    width: this.offsetWidth, height: this.offsetHeight}).show().focus();
            }).end().
            find('input.' + self._monthYearClass).
            change(function() {
                try {
                    var year = parseInt($(this).val(), 10);
                    year = (isNaN(year) ? inst.drawDate.getFullYear() : year);
                    self.showMonth(target, year, inst.drawDate.getMonth() + 1, inst.drawDate.getDate());
                }
                catch (e) {
                    alert(e);
                }
            }).keydown(function(event) {
                if (event.keyCode == 13) { // Enter
                    $(event.target).change();
                }
                else if (event.keyCode == 27) { // Escape
                    $(event.target).hide().prev('select').css('visibility', 'visible');
                    inst.target.focus();
                }
            });
        // Add command behaviour
        picker.find('.' + renderer.commandClass).click(function() {
                if (!$(this).hasClass(renderer.disabledClass)) {
                    var action = this.className.replace(
                        new RegExp('^.*' + renderer.commandClass + '-([^ ]+).*$'), '$1');
                    $.datepick.performAction(target, action);
                }
            });
        // Add classes
        if (inst.get('isRTL')) {
            picker.addClass(renderer.rtlClass);
        }
        if (monthsToShow[0] * monthsToShow[1] > 1) {
            picker.addClass(renderer.multiClass);
        }
        var pickerClass = inst.get('pickerClass');
        if (pickerClass) {
            picker.addClass(pickerClass);
        }
        // Resize
        $('body').append(picker);
        var width = 0;
        picker.find(renderer.monthSelector).each(function() {
            width += $(this).outerWidth();
        });
        picker.width(width / monthsToShow[0]);
        // Pre-show customisation
        var onShow = inst.get('onShow');
        if (onShow) {
            onShow.apply(target, [picker, inst]);
        }
        return picker;
    },

    /* Generate the content for a single month.
       @param  target    (element) the control to affect
       @param  inst      (object) the current instance settings
       @param  year      (number) the year to generate
       @param  month     (number) the month to generate
       @param  renderer  (object) the rendering templates
       @param  first     (boolean) true if first of multiple months
       @return  (string) the month content */
    _generateMonth: function(target, inst, year, month, renderer, first) {
        var daysInMonth = $.datepick.daysInMonth(year, month);
        var monthsToShow = inst.get('monthsToShow');
        monthsToShow = ($.isArray(monthsToShow) ? monthsToShow : [1, monthsToShow]);
        var fixedWeeks = inst.get('fixedWeeks') || (monthsToShow[0] * monthsToShow[1] > 1);
        var firstDay = inst.get('firstDay');
        var leadDays = ($.datepick.newDate(year, month, 1).getDay() - firstDay + 7) % 7;
        var numWeeks = (fixedWeeks ? 6 : Math.ceil((leadDays + daysInMonth) / 7));
        var showOtherMonths = inst.get('showOtherMonths');
        var selectOtherMonths = inst.get('selectOtherMonths') && showOtherMonths;
        var dayStatus = inst.get('dayStatus');
        var minDate = (inst.pickingRange ? inst.selectedDates[0] : inst.get('minDate'));
        var maxDate = inst.get('maxDate');
        var rangeSelect = inst.get('rangeSelect');
        var onDate = inst.get('onDate');
        var showWeeks = renderer.week.indexOf('{weekOfYear}') > -1;
        var calculateWeek = inst.get('calculateWeek');
        var today = $.datepick.today();
        var drawDate = $.datepick.newDate(year, month, 1);
        $.datepick.add(drawDate, -leadDays - (fixedWeeks && (drawDate.getDay() == firstDay) ? 7 : 0), 'd');
        var ts = drawDate.getTime();
        // Generate weeks
        var weeks = '';
        for (var week = 0; week < numWeeks; week++) {
            var weekOfYear = (!showWeeks ? '' : '<span class="dp' + ts + '">' +
                (calculateWeek ? calculateWeek(drawDate) : 0) + '</span>');
            var days = '';
            for (var day = 0; day < 7; day++) {
                var selected = false;
                if (rangeSelect && inst.selectedDates.length > 0) {
                    selected = (drawDate.getTime() >= inst.selectedDates[0] &&
                        drawDate.getTime() <= inst.selectedDates[1]);
                }
                else {
                    for (var i = 0; i < inst.selectedDates.length; i++) {
                        if (inst.selectedDates[i].getTime() == drawDate.getTime()) {
                            selected = true;
                            break;
                        }
                    }
                }
                var dateInfo = (!onDate ? {} :
                    onDate.apply(target, [drawDate, drawDate.getMonth() + 1 == month]));
                var selectable = (selectOtherMonths || drawDate.getMonth() + 1 == month) &&
                    this._isSelectable(target, drawDate, dateInfo.selectable, minDate, maxDate);
                days += this._prepare(renderer.day, inst).replace(/\{day\}/g,
                    (selectable ? '<a href="javascript:void(0)"' : '<span') +
                    ' class="dp' + ts + ' ' + (dateInfo.dateClass || '') +
                    (selected && (selectOtherMonths || drawDate.getMonth() + 1 == month) ?
                    ' ' + renderer.selectedClass : '') +
                    (selectable ? ' ' + renderer.defaultClass : '') +
                    ((drawDate.getDay() || 7) < 6 ? '' : ' ' + renderer.weekendClass) +
                    (drawDate.getMonth() + 1 == month ? '' : ' ' + renderer.otherMonthClass) +
                    (drawDate.getTime() == today.getTime() && (drawDate.getMonth() + 1) == month ?
                    ' ' + renderer.todayClass : '') +
                    (drawDate.getTime() == inst.drawDate.getTime() && (drawDate.getMonth() + 1) == month ?
                    ' ' + renderer.highlightedClass : '') + '"' +
                    (dateInfo.title || (dayStatus && selectable) ? ' title="' +
                    (dateInfo.title || $.datepick.formatDate(
                    dayStatus, drawDate, inst.getConfig())) + '"' : '') + '>' +
                    (showOtherMonths || (drawDate.getMonth() + 1) == month ?
                    dateInfo.content || drawDate.getDate() : '&nbsp;') +
                    (selectable ? '</a>' : '</span>'));
                $.datepick.add(drawDate, 1, 'd');
                ts = drawDate.getTime();
            }
            weeks += this._prepare(renderer.week, inst).replace(/\{days\}/g, days).
                replace(/\{weekOfYear\}/g, weekOfYear);
        }
        var monthHeader = this._prepare(renderer.month, inst).match(/\{monthHeader(:[^\}]+)?\}/);
        monthHeader = (monthHeader[0].length <= 13 ? 'MM yyyy' :
            monthHeader[0].substring(13, monthHeader[0].length - 1));
        monthHeader = (first ? this._generateMonthSelection(
            inst, year, month, minDate, maxDate, monthHeader, renderer) :
            $.datepick.formatDate(monthHeader, $.datepick.newDate(year, month, 1), inst.getConfig()));
        var weekHeader = this._prepare(renderer.weekHeader, inst).
            replace(/\{days\}/g, this._generateDayHeaders(inst, renderer));
        return this._prepare(renderer.month, inst).replace(/\{monthHeader(:[^\}]+)?\}/g, monthHeader).
            replace(/\{weekHeader\}/g, weekHeader).replace(/\{weeks\}/g, weeks);
    },

    /* Generate the HTML for the day headers.
       @param  inst      (object) the current instance settings
       @param  renderer  (object) the rendering templates
       @return  (string) a week's worth of day headers */
    _generateDayHeaders: function(inst, renderer) {
        var firstDay = inst.get('firstDay');
        var dayNames = inst.get('dayNames');
        var dayNamesMin = inst.get('dayNamesMin');
        var header = '';
        for (var day = 0; day < 7; day++) {
            var dow = (day + firstDay) % 7;
            header += this._prepare(renderer.dayHeader, inst).replace(/\{day\}/g,
                '<span class="' + this._curDoWClass + dow + '" title="' +
                dayNames[dow] + '">' + dayNamesMin[dow] + '</span>');
        }
        return header;
    },

    /* Generate selection controls for month.
       @param  inst         (object) the current instance settings
       @param  year         (number) the year to generate
       @param  month        (number) the month to generate
       @param  minDate      (CDate) the minimum date allowed
       @param  maxDate      (CDate) the maximum date allowed
       @param  monthHeader  (string) the month/year format
       @return  (string) the month selection content */
    _generateMonthSelection: function(inst, year, month, minDate, maxDate, monthHeader) {
        if (!inst.get('changeMonth')) {
            return $.datepick.formatDate(
                monthHeader, $.datepick.newDate(year, month, 1), inst.getConfig());
        }
        // Months
        var monthNames = inst.get('monthNames' + (monthHeader.match(/mm/i) ? '' : 'Short'));
        var html = monthHeader.replace(/m+/i, '\\x2E').replace(/y+/i, '\\x2F');
        var selector = '<select class="' + this._monthYearClass +
            '" title="' + inst.get('monthStatus') + '">';
        for (var m = 1; m <= 12; m++) {
            if ((!minDate || $.datepick.newDate(year, m, $.datepick.daysInMonth(year, m)).
                    getTime() >= minDate.getTime()) &&
                    (!maxDate || $.datepick.newDate(year, m, 1).getTime() <= maxDate.getTime())) {
                selector += '<option value="' + m + '/' + year + '"' +
                    (month == m ? ' selected="selected"' : '') + '>' +
                    monthNames[m - 1] + '</option>';
            }
        }
        selector += '</select>';
        html = html.replace(/\\x2E/, selector);
        // Years
        var yearRange = inst.get('yearRange');
        if (yearRange == 'any') {
            selector = '<select class="' + this._monthYearClass + ' ' + this._anyYearClass +
                '" title="' + inst.get('yearStatus') + '">' +
                '<option>' + year + '</option></select>' +
                '<input class="' + this._monthYearClass + ' ' + this._curMonthClass +
                month + '" value="' + year + '">';
        }
        else {
            yearRange = yearRange.split(':');
            var todayYear = $.datepick.today().getFullYear();
            var start = (yearRange[0].match('c[+-].*') ? year + parseInt(yearRange[0].substring(1), 10) :
                ((yearRange[0].match('[+-].*') ? todayYear : 0) + parseInt(yearRange[0], 10)));
            var end = (yearRange[1].match('c[+-].*') ? year + parseInt(yearRange[1].substring(1), 10) :
                ((yearRange[1].match('[+-].*') ? todayYear : 0) + parseInt(yearRange[1], 10)));
            selector = '<select class="' + this._monthYearClass +
                '" title="' + inst.get('yearStatus') + '">';
            start = $.datepick.add($.datepick.newDate(start + 1, 1, 1), -1, 'd');
            end = $.datepick.newDate(end, 1, 1);
            var addYear = function(y) {
                if (y != 0) {
                    selector += '<option value="' + month + '/' + y + '"' +
                        (year == y ? ' selected="selected"' : '') + '>' + y + '</option>';
                }
            };
            if (start.getTime() < end.getTime()) {
                start = (minDate && minDate.getTime() > start.getTime() ? minDate : start).getFullYear();
                end = (maxDate && maxDate.getTime() < end.getTime() ? maxDate : end).getFullYear();
                for (var y = start; y <= end; y++) {
                    addYear(y);
                }
            }
            else {
                start = (maxDate && maxDate.getTime() < start.getTime() ? maxDate : start).getFullYear();
                end = (minDate && minDate.getTime() > end.getTime() ? minDate : end).getFullYear();
                for (var y = start; y >= end; y--) {
                    addYear(y);
                }
            }
            selector += '</select>';
        }
        html = html.replace(/\\x2F/, selector);
        return html;
    },

    /* Prepare a render template for use.
       Exclude popup/inline sections that are not applicable.
       Localise text of the form: {l10n:name}.
       @param  text  (string) the text to localise
       @param  inst  (object) the current instance settings
       @return  (string) the localised text */
    _prepare: function(text, inst) {
        var replaceSection = function(type, retain) {
            while (true) {
                var start = text.indexOf('{' + type + ':start}');
                if (start == -1) {
                    return;
                }
                var end = text.substring(start).indexOf('{' + type + ':end}');
                if (end > -1) {
                    text = text.substring(0, start) +
                        (retain ? text.substr(start + type.length + 8, end - type.length - 8) : '') +
                        text.substring(start + end + type.length + 6);
                }
            }
        };
        replaceSection('inline', inst.inline);
        replaceSection('popup', !inst.inline);
        var pattern = /\{l10n:([^\}]+)\}/;
        var matches = null;
        while (matches = pattern.exec(text)) {
            text = text.replace(matches[0], inst.get(matches[1]));
        }
        return text;
    }
});

/* jQuery extend now ignores nulls!
   @param  target  (object) the object to extend
   @param  props   (object) the new settings
   @return  (object) the updated object */
function extendRemove(target, props) {
    $.extend(target, props);
    for (var name in props)
        if (props[name] == null || props[name] == undefined)
            target[name] = props[name];
    return target;
};

/* Attach the datepicker functionality to a jQuery selection.
   @param  command  (string) the command to run (optional, default 'attach')
   @param  options  (object) the new settings to use for these instances (optional)
   @return  (jQuery) for chaining further calls */
$.fn.datepick = function(options) {
    var otherArgs = Array.prototype.slice.call(arguments, 1);
    if ($.inArray(options, ['getDate', 'isDisabled', 'isSelectable', 'options', 'retrieveDate']) > -1) {
        return $.datepick[options].apply($.datepick, [this[0]].concat(otherArgs));
    }
    return this.each(function() {
        if (typeof options == 'string') {
            $.datepick[options].apply($.datepick, [this].concat(otherArgs));
        }
        else {
            $.datepick._attachPicker(this, options || {});
        }
    });
};

/* Initialise the datepicker functionality. */
$.datepick = new Datepicker(); // singleton instance

$(function() {
    $(document).mousedown($.datepick._checkExternalClick).
        resize(function() { $.datepick.hide($.datepick.curInst); });
});

})(jQuery);

/*!
 * jQuery Form Plugin
 * version: 2.73 (03-MAY-2011)
 * @requires jQuery v1.3.2 or later
 *
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
;(function($) {

/*
    Usage Note:
    -----------
    Do not use both ajaxSubmit and ajaxForm on the same form.  These
    functions are intended to be exclusive.  Use ajaxSubmit if you want
    to bind your own submit handler to the form.  For example,

    $(document).ready(function() {
        $('#myForm').bind('submit', function(e) {
            e.preventDefault(); // <-- important
            $(this).ajaxSubmit({
                target: '#output'
            });
        });
    });

    Use ajaxForm when you want the plugin to manage all the event binding
    for you.  For example,

    $(document).ready(function() {
        $('#myForm').ajaxForm({
            target: '#output'
        });
    });

    When using ajaxForm, the ajaxSubmit function will be invoked for you
    at the appropriate time.
*/

/**
 * ajaxSubmit() provides a mechanism for immediately submitting
 * an HTML form using AJAX.
 */
$.fn.ajaxSubmit = function(options) {
    // fast fail if nothing selected (http://dev.jquery.com/ticket/2752)
    if (!this.length) {
        log('ajaxSubmit: skipping submit process - no element selected');
        return this;
    }

    if (typeof options == 'function') {
        options = { success: options };
    }

    var action = this.attr('action');
    var url = (typeof action === 'string') ? $.trim(action) : '';
    if (url) {
        // clean url (don't include hash vaue)
        url = (url.match(/^([^#]+)/)||[])[1];
    }
    url = url || window.location.href || '';

    options = $.extend(true, {
        url:  url,
        success: $.ajaxSettings.success,
        type: this[0].getAttribute('method') || 'GET', // IE7 massage (see issue 57)
        iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank'
    }, options);

    // hook for manipulating the form data before it is extracted;
    // convenient for use with rich editors like tinyMCE or FCKEditor
    var veto = {};
    this.trigger('form-pre-serialize', [this, options, veto]);
    if (veto.veto) {
        log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
        return this;
    }

    // provide opportunity to alter form data before it is serialized
    if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
        log('ajaxSubmit: submit aborted via beforeSerialize callback');
        return this;
    }

    var n,v,a = this.formToArray(options.semantic);
    if (options.data) {
        options.extraData = options.data;
        for (n in options.data) {
            if(options.data[n] instanceof Array) {
                for (var k in options.data[n]) {
                    a.push( { name: n, value: options.data[n][k] } );
                }
            }
            else {
                v = options.data[n];
                v = $.isFunction(v) ? v() : v; // if value is fn, invoke it
                a.push( { name: n, value: v } );
            }
        }
    }

    // give pre-submit callback an opportunity to abort the submit
    if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
        log('ajaxSubmit: submit aborted via beforeSubmit callback');
        return this;
    }

    // fire vetoable 'validate' event
    this.trigger('form-submit-validate', [a, this, options, veto]);
    if (veto.veto) {
        log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
        return this;
    }

    var q = $.param(a);

    if (options.type.toUpperCase() == 'GET') {
        options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
        options.data = null;  // data is null for 'get'
    }
    else {
        options.data = q; // data is the query string for 'post'
    }

    var $form = this, callbacks = [];
    if (options.resetForm) {
        callbacks.push(function() { $form.resetForm(); });
    }
    if (options.clearForm) {
        callbacks.push(function() { $form.clearForm(); });
    }

    // perform a load on the target only if dataType is not provided
    if (!options.dataType && options.target) {
        var oldSuccess = options.success || function(){};
        callbacks.push(function(data) {
            var fn = options.replaceTarget ? 'replaceWith' : 'html';
            $(options.target)[fn](data).each(oldSuccess, arguments);
        });
    }
    else if (options.success) {
        callbacks.push(options.success);
    }

    options.success = function(data, status, xhr) { // jQuery 1.4+ passes xhr as 3rd arg
        var context = options.context || options;   // jQuery 1.4+ supports scope context
        for (var i=0, max=callbacks.length; i < max; i++) {
            callbacks[i].apply(context, [data, status, xhr || $form, $form]);
        }
    };

    // are there files to upload?
    var fileInputs = $('input:file', this).length > 0;
    var mp = 'multipart/form-data';
    var multipart = ($form.attr('enctype') == mp || $form.attr('encoding') == mp);

    // options.iframe allows user to force iframe mode
    // 06-NOV-09: now defaulting to iframe mode if file input is detected
   if (options.iframe !== false && (fileInputs || options.iframe || multipart)) {
       // hack to fix Safari hang (thanks to Tim Molendijk for this)
       // see:  http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
       if (options.closeKeepAlive) {
           $.get(options.closeKeepAlive, fileUpload);
        }
       else {
           fileUpload();
        }
   }
   else {
        $.ajax(options);
   }

    // fire 'notify' event
    this.trigger('form-submit-notify', [this, options]);
    return this;


    // private function for handling file uploads (hat tip to YAHOO!)
    function fileUpload() {
        var form = $form[0];

        if ($(':input[name=submit],:input[id=submit]', form).length) {
            // if there is an input with a name or id of 'submit' then we won't be
            // able to invoke the submit fn on the form (at least not x-browser)
            alert('Error: Form elements must not have name or id of "submit".');
            return;
        }

        var s = $.extend(true, {}, $.ajaxSettings, options);
        s.context = s.context || s;
        var id = 'jqFormIO' + (new Date().getTime()), fn = '_'+id;
        var $io = $('<iframe id="' + id + '" name="' + id + '" src="'+ s.iframeSrc +'" />');
        var io = $io[0];

        $io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });

        var xhr = { // mock object
            aborted: 0,
            responseText: null,
            responseXML: null,
            status: 0,
            statusText: 'n/a',
            getAllResponseHeaders: function() {},
            getResponseHeader: function() {},
            setRequestHeader: function() {},
            abort: function(status) {
                var e = (status === 'timeout' ? 'timeout' : 'aborted');
                log('aborting upload... ' + e);
                this.aborted = 1;
                $io.attr('src', s.iframeSrc); // abort op in progress
                xhr.error = e;
                s.error && s.error.call(s.context, xhr, e, e);
                g && $.event.trigger("ajaxError", [xhr, s, e]);
                s.complete && s.complete.call(s.context, xhr, e);
            }
        };

        var g = s.global;
        // trigger ajax global events so that activity/block indicators work like normal
        if (g && ! $.active++) {
            $.event.trigger("ajaxStart");
        }
        if (g) {
            $.event.trigger("ajaxSend", [xhr, s]);
        }

        if (s.beforeSend && s.beforeSend.call(s.context, xhr, s) === false) {
            if (s.global) {
                $.active--;
            }
            return;
        }
        if (xhr.aborted) {
            return;
        }

        var timedOut = 0, timeoutHandle;

        // add submitting element to data if we know it
        var sub = form.clk;
        if (sub) {
            var n = sub.name;
            if (n && !sub.disabled) {
                s.extraData = s.extraData || {};
                s.extraData[n] = sub.value;
                if (sub.type == "image") {
                    s.extraData[n+'.x'] = form.clk_x;
                    s.extraData[n+'.y'] = form.clk_y;
                }
            }
        }

        // take a breath so that pending repaints get some cpu time before the upload starts
        function doSubmit() {
            // make sure form attrs are set
            var t = $form.attr('target'), a = $form.attr('action');

            // update form attrs in IE friendly way
            form.setAttribute('target',id);
            if (form.getAttribute('method') != 'POST') {
                form.setAttribute('method', 'POST');
            }
            if (form.getAttribute('action') != s.url) {
                form.setAttribute('action', s.url);
            }

            // ie borks in some cases when setting encoding
            if (! s.skipEncodingOverride) {
                $form.attr({
                    encoding: 'multipart/form-data',
                    enctype:  'multipart/form-data'
                });
            }

            // support timout
            if (s.timeout) {
                timeoutHandle = setTimeout(function() { timedOut = true; cb(true); }, s.timeout);
            }

            // add "extra" data to form if provided in options
            var extraInputs = [];
            try {
                if (s.extraData) {
                    for (var n in s.extraData) {
                        extraInputs.push(
                            $('<input type="hidden" name="'+n+'" value="'+s.extraData[n]+'" />')
                                .appendTo(form)[0]);
                    }
                }

                // add iframe to doc and submit the form
                $io.appendTo('body');
                io.attachEvent ? io.attachEvent('onload', cb) : io.addEventListener('load', cb, false);
                form.submit();
            }
            finally {
                // reset attrs and remove "extra" input elements
                form.setAttribute('action',a);
                if(t) {
                    form.setAttribute('target', t);
                } else {
                    $form.removeAttr('target');
                }
                $(extraInputs).remove();
            }
        }

        if (s.forceSync) {
            doSubmit();
        }
        else {
            setTimeout(doSubmit, 10); // this lets dom updates render
        }

        var data, doc, domCheckCount = 50, callbackProcessed;

        function cb(e) {
            if (xhr.aborted || callbackProcessed) {
                return;
            }
            if (e === true && xhr) {
                xhr.abort('timeout');
                return;
            }

            var doc = io.contentWindow ? io.contentWindow.document : io.contentDocument ? io.contentDocument : io.document;
            if (!doc || doc.location.href == s.iframeSrc) {
                // response not received yet
                if (!timedOut)
                    return;
            }
            io.detachEvent ? io.detachEvent('onload', cb) : io.removeEventListener('load', cb, false);

            var ok = true;
            try {
                if (timedOut) {
                    throw 'timeout';
                }

                var isXml = s.dataType == 'xml' || doc.XMLDocument || $.isXMLDoc(doc);
                log('isXml='+isXml);
                if (!isXml && window.opera && (doc.body == null || doc.body.innerHTML == '')) {
                    if (--domCheckCount) {
                        // in some browsers (Opera) the iframe DOM is not always traversable when
                        // the onload callback fires, so we loop a bit to accommodate
                        log('requeing onLoad callback, DOM not available');
                        setTimeout(cb, 250);
                        return;
                    }
                    // let this fall through because server response could be an empty document
                    //log('Could not access iframe DOM after mutiple tries.');
                    //throw 'DOMException: not available';
                }

                //log('response detected');
                xhr.responseText = doc.body ? doc.body.innerHTML : doc.documentElement ? doc.documentElement.innerHTML : null;
                xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
                if (isXml)
                    s.dataType = 'xml';
                xhr.getResponseHeader = function(header){
                    var headers = {'content-type': s.dataType};
                    return headers[header];
                };

                var scr = /(json|script|text)/.test(s.dataType);
                if (scr || s.textarea) {
                    // see if user embedded response in textarea
                    var ta = doc.getElementsByTagName('textarea')[0];
                    if (ta) {
                        xhr.responseText = ta.value;
                    }
                    else if (scr) {
                        // account for browsers injecting pre around json response
                        var pre = doc.getElementsByTagName('pre')[0];
                        var b = doc.getElementsByTagName('body')[0];
                        if (pre) {
                            xhr.responseText = pre.textContent;
                        }
                        else if (b) {
                            xhr.responseText = b.innerHTML;
                        }
                    }
                }
                else if (s.dataType == 'xml' && !xhr.responseXML && xhr.responseText != null) {
                    xhr.responseXML = toXml(xhr.responseText);
                }

                data = httpData(xhr, s.dataType, s);
            }
            catch(e){
                log('error caught:',e);
                ok = false;
                xhr.error = e;
                s.error && s.error.call(s.context, xhr, 'error', e);
                g && $.event.trigger("ajaxError", [xhr, s, e]);
            }

            if (xhr.aborted) {
                log('upload aborted');
                ok = false;
            }

            // ordering of these callbacks/triggers is odd, but that's how $.ajax does it
            if (ok) {
                s.success && s.success.call(s.context, data, 'success', xhr);
                g && $.event.trigger("ajaxSuccess", [xhr, s]);
            }

            g && $.event.trigger("ajaxComplete", [xhr, s]);

            if (g && ! --$.active) {
                $.event.trigger("ajaxStop");
            }

            s.complete && s.complete.call(s.context, xhr, ok ? 'success' : 'error');

            callbackProcessed = true;
            if (s.timeout)
                clearTimeout(timeoutHandle);

            // clean up
            setTimeout(function() {
                $io.removeData('form-plugin-onload');
                $io.remove();
                xhr.responseXML = null;
            }, 100);
        }

        var toXml = $.parseXML || function(s, doc) { // use parseXML if available (jQuery 1.5+)
            if (window.ActiveXObject) {
                doc = new ActiveXObject('Microsoft.XMLDOM');
                doc.async = 'false';
                doc.loadXML(s);
            }
            else {
                doc = (new DOMParser()).parseFromString(s, 'text/xml');
            }
            return (doc && doc.documentElement && doc.documentElement.nodeName != 'parsererror') ? doc : null;
        };
        var parseJSON = $.parseJSON || function(s) {
            return window['eval']('(' + s + ')');
        };

        var httpData = function( xhr, type, s ) { // mostly lifted from jq1.4.4
            var ct = xhr.getResponseHeader('content-type') || '',
                xml = type === 'xml' || !type && ct.indexOf('xml') >= 0,
                data = xml ? xhr.responseXML : xhr.responseText;

            if (xml && data.documentElement.nodeName === 'parsererror') {
                $.error && $.error('parsererror');
            }
            if (s && s.dataFilter) {
                data = s.dataFilter(data, type);
            }
            if (typeof data === 'string') {
                if (type === 'json' || !type && ct.indexOf('json') >= 0) {
                    data = parseJSON(data);
                } else if (type === "script" || !type && ct.indexOf("javascript") >= 0) {
                    $.globalEval(data);
                }
            }
            return data;
        };
    }
};

/**
 * ajaxForm() provides a mechanism for fully automating form submission.
 *
 * The advantages of using this method instead of ajaxSubmit() are:
 *
 * 1: This method will include coordinates for <input type="image" /> elements (if the element
 *  is used to submit the form).
 * 2. This method will include the submit element's name/value data (for the element that was
 *  used to submit the form).
 * 3. This method binds the submit() method to the form for you.
 *
 * The options argument for ajaxForm works exactly as it does for ajaxSubmit.  ajaxForm merely
 * passes the options argument along after properly binding events for submit elements and
 * the form itself.
 */
$.fn.ajaxForm = function(options) {
    // in jQuery 1.3+ we can fix mistakes with the ready state
    if (this.length === 0) {
        var o = { s: this.selector, c: this.context };
        if (!$.isReady && o.s) {
            log('DOM not ready, queuing ajaxForm');
            $(function() {
                $(o.s,o.c).ajaxForm(options);
            });
            return this;
        }
        // is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
        log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
        return this;
    }

    return this.ajaxFormUnbind().bind('submit.form-plugin', function(e) {
        if (!e.isDefaultPrevented()) { // if event has been canceled, don't proceed
            e.preventDefault();
            $(this).ajaxSubmit(options);
        }
    }).bind('click.form-plugin', function(e) {
        var target = e.target;
        var $el = $(target);
        if (!($el.is(":submit,input:image"))) {
            // is this a child element of the submit el?  (ex: a span within a button)
            var t = $el.closest(':submit');
            if (t.length == 0) {
                return;
            }
            target = t[0];
        }
        var form = this;
        form.clk = target;
        if (target.type == 'image') {
            if (e.offsetX != undefined) {
                form.clk_x = e.offsetX;
                form.clk_y = e.offsetY;
            } else if (typeof $.fn.offset == 'function') { // try to use dimensions plugin
                var offset = $el.offset();
                form.clk_x = e.pageX - offset.left;
                form.clk_y = e.pageY - offset.top;
            } else {
                form.clk_x = e.pageX - target.offsetLeft;
                form.clk_y = e.pageY - target.offsetTop;
            }
        }
        // clear form vars
        setTimeout(function() { form.clk = form.clk_x = form.clk_y = null; }, 100);
    });
};

// ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
$.fn.ajaxFormUnbind = function() {
    return this.unbind('submit.form-plugin click.form-plugin');
};

/**
 * formToArray() gathers form element data into an array of objects that can
 * be passed to any of the following ajax functions: $.get, $.post, or load.
 * Each object in the array has both a 'name' and 'value' property.  An example of
 * an array for a simple login form might be:
 *
 * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
 *
 * It is this array that is passed to pre-submit callback functions provided to the
 * ajaxSubmit() and ajaxForm() methods.
 */
$.fn.formToArray = function(semantic) {
    var a = [];
    if (this.length === 0) {
        return a;
    }

    var form = this[0];
    var els = semantic ? form.getElementsByTagName('*') : form.elements;
    if (!els) {
        return a;
    }

    var i,j,n,v,el,max,jmax;
    for(i=0, max=els.length; i < max; i++) {
        el = els[i];
        n = el.name;
        if (!n) {
            continue;
        }

        if (semantic && form.clk && el.type == "image") {
            // handle image inputs on the fly when semantic == true
            if(!el.disabled && form.clk == el) {
                a.push({name: n, value: $(el).val()});
                a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
            }
            continue;
        }

        v = $.fieldValue(el, true);
        if (v && v.constructor == Array) {
            for(j=0, jmax=v.length; j < jmax; j++) {
                a.push({name: n, value: v[j]});
            }
        }
        else if (v !== null && typeof v != 'undefined') {
            a.push({name: n, value: v});
        }
    }

    if (!semantic && form.clk) {
        // input type=='image' are not found in elements array! handle it here
        var $input = $(form.clk), input = $input[0];
        n = input.name;
        if (n && !input.disabled && input.type == 'image') {
            a.push({name: n, value: $input.val()});
            a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
        }
    }
    return a;
};

/**
 * Serializes form data into a 'submittable' string. This method will return a string
 * in the format: name1=value1&amp;name2=value2
 */
$.fn.formSerialize = function(semantic) {
    //hand off to jQuery.param for proper encoding
    return $.param(this.formToArray(semantic));
};

/**
 * Serializes all field elements in the jQuery object into a query string.
 * This method will return a string in the format: name1=value1&amp;name2=value2
 */
$.fn.fieldSerialize = function(successful) {
    var a = [];
    this.each(function() {
        var n = this.name;
        if (!n) {
            return;
        }
        var v = $.fieldValue(this, successful);
        if (v && v.constructor == Array) {
            for (var i=0,max=v.length; i < max; i++) {
                a.push({name: n, value: v[i]});
            }
        }
        else if (v !== null && typeof v != 'undefined') {
            a.push({name: this.name, value: v});
        }
    });
    //hand off to jQuery.param for proper encoding
    return $.param(a);
};

/**
 * Returns the value(s) of the element in the matched set.  For example, consider the following form:
 *
 *  <form><fieldset>
 *    <input name="A" type="text" />
 *    <input name="A" type="text" />
 *    <input name="B" type="checkbox" value="B1" />
 *    <input name="B" type="checkbox" value="B2"/>
 *    <input name="C" type="radio" value="C1" />
 *    <input name="C" type="radio" value="C2" />
 *  </fieldset></form>
 *
 *  var v = $(':text').fieldValue();
 *  // if no values are entered into the text inputs
 *  v == ['','']
 *  // if values entered into the text inputs are 'foo' and 'bar'
 *  v == ['foo','bar']
 *
 *  var v = $(':checkbox').fieldValue();
 *  // if neither checkbox is checked
 *  v === undefined
 *  // if both checkboxes are checked
 *  v == ['B1', 'B2']
 *
 *  var v = $(':radio').fieldValue();
 *  // if neither radio is checked
 *  v === undefined
 *  // if first radio is checked
 *  v == ['C1']
 *
 * The successful argument controls whether or not the field element must be 'successful'
 * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
 * The default value of the successful argument is true.  If this value is false the value(s)
 * for each element is returned.
 *
 * Note: This method *always* returns an array.  If no valid value can be determined the
 *     array will be empty, otherwise it will contain one or more values.
 */
$.fn.fieldValue = function(successful) {
    for (var val=[], i=0, max=this.length; i < max; i++) {
        var el = this[i];
        var v = $.fieldValue(el, successful);
        if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length)) {
            continue;
        }
        v.constructor == Array ? $.merge(val, v) : val.push(v);
    }
    return val;
};

/**
 * Returns the value of the field element.
 */
$.fieldValue = function(el, successful) {
    var n = el.name, t = el.type, tag = el.tagName.toLowerCase();
    if (successful === undefined) {
        successful = true;
    }

    if (successful && (!n || el.disabled || t == 'reset' || t == 'button' ||
        (t == 'checkbox' || t == 'radio') && !el.checked ||
        (t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
        tag == 'select' && el.selectedIndex == -1)) {
            return null;
    }

    if (tag == 'select') {
        var index = el.selectedIndex;
        if (index < 0) {
            return null;
        }
        var a = [], ops = el.options;
        var one = (t == 'select-one');
        var max = (one ? index+1 : ops.length);
        for(var i=(one ? index : 0); i < max; i++) {
            var op = ops[i];
            if (op.selected) {
                var v = op.value;
                if (!v) { // extra pain for IE...
                    v = (op.attributes && op.attributes['value'] && !(op.attributes['value'].specified)) ? op.text : op.value;
                }
                if (one) {
                    return v;
                }
                a.push(v);
            }
        }
        return a;
    }
    return $(el).val();
};

/**
 * Clears the form data.  Takes the following actions on the form's input fields:
 *  - input text fields will have their 'value' property set to the empty string
 *  - select elements will have their 'selectedIndex' property set to -1
 *  - checkbox and radio inputs will have their 'checked' property set to false
 *  - inputs of type submit, button, reset, and hidden will *not* be effected
 *  - button elements will *not* be effected
 */
$.fn.clearForm = function() {
    return this.each(function() {
        $('input,select,textarea', this).clearFields();
    });
};

/**
 * Clears the selected form elements.
 */
$.fn.clearFields = $.fn.clearInputs = function() {
    return this.each(function() {
        var t = this.type, tag = this.tagName.toLowerCase();
        if (t == 'text' || t == 'password' || tag == 'textarea') {
            this.value = '';
        }
        else if (t == 'checkbox' || t == 'radio') {
            this.checked = false;
        }
        else if (tag == 'select') {
            this.selectedIndex = -1;
        }
    });
};

/**
 * Resets the form data.  Causes all form elements to be reset to their original value.
 */
$.fn.resetForm = function() {
    return this.each(function() {
        // guard against an input with the name of 'reset'
        // note that IE reports the reset function as an 'object'
        if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType)) {
            this.reset();
        }
    });
};

/**
 * Enables or disables any matching elements.
 */
$.fn.enable = function(b) {
    if (b === undefined) {
        b = true;
    }
    return this.each(function() {
        this.disabled = !b;
    });
};

/**
 * Checks/unchecks any matching checkboxes or radio buttons and
 * selects/deselects and matching option elements.
 */
$.fn.selected = function(select) {
    if (select === undefined) {
        select = true;
    }
    return this.each(function() {
        var t = this.type;
        if (t == 'checkbox' || t == 'radio') {
            this.checked = select;
        }
        else if (this.tagName.toLowerCase() == 'option') {
            var $sel = $(this).parent('select');
            if (select && $sel[0] && $sel[0].type == 'select-one') {
                // deselect all other options
                $sel.find('option').selected(false);
            }
            this.selected = select;
        }
    });
};

// helper fn for console logging
// set $.fn.ajaxSubmit.debug to true to enable debug logging
function log() {
    if ($.fn.ajaxSubmit.debug) {
        var msg = '[jquery.form] ' + Array.prototype.join.call(arguments,'');
        if (window.console && window.console.log) {
            window.console.log(msg);
        }
        else if (window.opera && window.opera.postError) {
            window.opera.postError(msg);
        }
    }
};

})(jQuery);

/*
 *  jQuery OwlCarousel v1.3.2
 *
 *  Copyright (c) 2013 Bartosz Wojciechowski
 *  http://www.owlgraphic.com/owlcarousel/
 *
 *  Licensed under MIT
 *
 */

/*JS Lint helpers: */
/*global dragMove: false, dragEnd: false, $, jQuery, alert, window, document */
/*jslint nomen: true, continue:true */

if (typeof Object.create !== "function") {
    Object.create = function (obj) {
        function F() {}
        F.prototype = obj;
        return new F();
    };
}
(function ($, window, document) {

    var Carousel = {
        init : function (options, el) {
            var base = this;

            base.$elem = $(el);
            base.options = $.extend({}, $.fn.owlCarousel.options, base.$elem.data(), options);

            base.userOptions = options;
            base.loadContent();
        },

        loadContent : function () {
            var base = this, url;

            function getData(data) {
                var i, content = "";
                if (typeof base.options.jsonSuccess === "function") {
                    base.options.jsonSuccess.apply(this, [data]);
                } else {
                    for (i in data.owl) {
                        if (data.owl.hasOwnProperty(i)) {
                            content += data.owl[i].item;
                        }
                    }
                    base.$elem.html(content);
                }
                base.logIn();
            }

            if (typeof base.options.beforeInit === "function") {
                base.options.beforeInit.apply(this, [base.$elem]);
            }

            if (typeof base.options.jsonPath === "string") {
                url = base.options.jsonPath;
                $.getJSON(url, getData);
            } else {
                base.logIn();
            }
        },

        logIn : function () {
            var base = this;

            base.$elem.data("owl-originalStyles", base.$elem.attr("style"))
                      .data("owl-originalClasses", base.$elem.attr("class"));

            base.$elem.css({opacity: 0});
            base.orignalItems = base.options.items;
            base.checkBrowser();
            base.wrapperWidth = 0;
            base.checkVisible = null;
            base.setVars();
        },

        setVars : function () {
            var base = this;
            if (base.$elem.children().length === 0) {return false; }
            base.baseClass();
            base.eventTypes();
            base.$userItems = base.$elem.children();
            base.itemsAmount = base.$userItems.length;
            base.wrapItems();
            base.$owlItems = base.$elem.find(".owl-item");
            base.$owlWrapper = base.$elem.find(".owl-wrapper");
            base.playDirection = "next";
            base.prevItem = 0;
            base.prevArr = [0];
            base.currentItem = 0;
            base.customEvents();
            base.onStartup();
        },

        onStartup : function () {
            var base = this;
            base.updateItems();
            base.calculateAll();
            base.buildControls();
            base.updateControls();
            base.response();
            base.moveEvents();
            base.stopOnHover();
            base.owlStatus();

            if (base.options.transitionStyle !== false) {
                base.transitionTypes(base.options.transitionStyle);
            }
            if (base.options.autoPlay === true) {
                base.options.autoPlay = 5000;
            }
            base.play();

            base.$elem.find(".owl-wrapper").css("display", "block");

            if (!base.$elem.is(":visible")) {
                base.watchVisibility();
            } else {
                base.$elem.css("opacity", 1);
            }
            base.onstartup = false;
            base.eachMoveUpdate();
            if (typeof base.options.afterInit === "function") {
                base.options.afterInit.apply(this, [base.$elem]);
            }
        },

        eachMoveUpdate : function () {
            var base = this;

            if (base.options.lazyLoad === true) {
                base.lazyLoad();
            }
            if (base.options.autoHeight === true) {
                base.autoHeight();
            }
            base.onVisibleItems();

            if (typeof base.options.afterAction === "function") {
                base.options.afterAction.apply(this, [base.$elem]);
            }
        },

        updateVars : function () {
            var base = this;
            if (typeof base.options.beforeUpdate === "function") {
                base.options.beforeUpdate.apply(this, [base.$elem]);
            }
            base.watchVisibility();
            base.updateItems();
            base.calculateAll();
            base.updatePosition();
            base.updateControls();
            base.eachMoveUpdate();
            if (typeof base.options.afterUpdate === "function") {
                base.options.afterUpdate.apply(this, [base.$elem]);
            }
        },

        reload : function () {
            var base = this;
            window.setTimeout(function () {
                base.updateVars();
            }, 0);
        },

        watchVisibility : function () {
            var base = this;

            if (base.$elem.is(":visible") === false) {
                base.$elem.css({opacity: 0});
                window.clearInterval(base.autoPlayInterval);
                window.clearInterval(base.checkVisible);
            } else {
                return false;
            }
            base.checkVisible = window.setInterval(function () {
                if (base.$elem.is(":visible")) {
                    base.reload();
                    base.$elem.animate({opacity: 1}, 200);
                    window.clearInterval(base.checkVisible);
                }
            }, 500);
        },

        wrapItems : function () {
            var base = this;
            base.$userItems.wrapAll("<div class=\"owl-wrapper\">").wrap("<div class=\"owl-item\"></div>");
            base.$elem.find(".owl-wrapper").wrap("<div class=\"owl-wrapper-outer\">");
            base.wrapperOuter = base.$elem.find(".owl-wrapper-outer");
            base.$elem.css("display", "block");
        },

        baseClass : function () {
            var base = this,
                hasBaseClass = base.$elem.hasClass(base.options.baseClass),
                hasThemeClass = base.$elem.hasClass(base.options.theme);

            if (!hasBaseClass) {
                base.$elem.addClass(base.options.baseClass);
            }

            if (!hasThemeClass) {
                base.$elem.addClass(base.options.theme);
            }
        },

        updateItems : function () {
            var base = this, width, i;

            if (base.options.responsive === false) {
                return false;
            }
            if (base.options.singleItem === true) {
                base.options.items = base.orignalItems = 1;
                base.options.itemsCustom = false;
                base.options.itemsDesktop = false;
                base.options.itemsDesktopSmall = false;
                base.options.itemsTablet = false;
                base.options.itemsTabletSmall = false;
                base.options.itemsMobile = false;
                return false;
            }

            width = $(base.options.responsiveBaseWidth).width();

            if (width > (base.options.itemsDesktop[0] || base.orignalItems)) {
                base.options.items = base.orignalItems;
            }
            if (base.options.itemsCustom !== false) {
                //Reorder array by screen size
                base.options.itemsCustom.sort(function (a, b) {return a[0] - b[0]; });

                for (i = 0; i < base.options.itemsCustom.length; i += 1) {
                    if (base.options.itemsCustom[i][0] <= width) {
                        base.options.items = base.options.itemsCustom[i][1];
                    }
                }

            } else {

                if (width <= base.options.itemsDesktop[0] && base.options.itemsDesktop !== false) {
                    base.options.items = base.options.itemsDesktop[1];
                }

                if (width <= base.options.itemsDesktopSmall[0] && base.options.itemsDesktopSmall !== false) {
                    base.options.items = base.options.itemsDesktopSmall[1];
                }

                if (width <= base.options.itemsTablet[0] && base.options.itemsTablet !== false) {
                    base.options.items = base.options.itemsTablet[1];
                }

                if (width <= base.options.itemsTabletSmall[0] && base.options.itemsTabletSmall !== false) {
                    base.options.items = base.options.itemsTabletSmall[1];
                }

                if (width <= base.options.itemsMobile[0] && base.options.itemsMobile !== false) {
                    base.options.items = base.options.itemsMobile[1];
                }
            }

            //if number of items is less than declared
            if (base.options.items > base.itemsAmount && base.options.itemsScaleUp === true) {
                base.options.items = base.itemsAmount;
            }
        },

        response : function () {
            var base = this,
                smallDelay,
                lastWindowWidth;

            if (base.options.responsive !== true) {
                return false;
            }
            lastWindowWidth = $(window).width();

            base.resizer = function () {
                if ($(window).width() !== lastWindowWidth) {
                    if (base.options.autoPlay !== false) {
                        window.clearInterval(base.autoPlayInterval);
                    }
                    window.clearTimeout(smallDelay);
                    smallDelay = window.setTimeout(function () {
                        lastWindowWidth = $(window).width();
                        base.updateVars();
                    }, base.options.responsiveRefreshRate);
                }
            };
            $(window).resize(base.resizer);
        },

        updatePosition : function () {
            var base = this;
            base.jumpTo(base.currentItem);
            if (base.options.autoPlay !== false) {
                base.checkAp();
            }
        },

        appendItemsSizes : function () {
            var base = this,
                roundPages = 0,
                lastItem = base.itemsAmount - base.options.items;

            base.$owlItems.each(function (index) {
                var $this = $(this);
                $this
                    .css({"width": base.itemWidth})
                    .data("owl-item", Number(index));

                if (index % base.options.items === 0 || index === lastItem) {
                    if (!(index > lastItem)) {
                        roundPages += 1;
                    }
                }
                $this.data("owl-roundPages", roundPages);
            });
        },

        appendWrapperSizes : function () {
            var base = this,
                width = base.$owlItems.length * base.itemWidth;

            base.$owlWrapper.css({
                "width": width * 2,
                "left": 0
            });
            base.appendItemsSizes();
        },

        calculateAll : function () {
            var base = this;
            base.calculateWidth();
            base.appendWrapperSizes();
            base.loops();
            base.max();
        },

        calculateWidth : function () {
            var base = this;
            base.itemWidth = Math.round(base.$elem.width() / base.options.items);
        },

        max : function () {
            var base = this,
                maximum = ((base.itemsAmount * base.itemWidth) - base.options.items * base.itemWidth) * -1;
            if (base.options.items > base.itemsAmount) {
                base.maximumItem = 0;
                maximum = 0;
                base.maximumPixels = 0;
            } else {
                base.maximumItem = base.itemsAmount - base.options.items;
                base.maximumPixels = maximum;
            }
            return maximum;
        },

        min : function () {
            return 0;
        },

        loops : function () {
            var base = this,
                prev = 0,
                elWidth = 0,
                i,
                item,
                roundPageNum;

            base.positionsInArray = [0];
            base.pagesInArray = [];

            for (i = 0; i < base.itemsAmount; i += 1) {
                elWidth += base.itemWidth;
                base.positionsInArray.push(-elWidth);

                if (base.options.scrollPerPage === true) {
                    item = $(base.$owlItems[i]);
                    roundPageNum = item.data("owl-roundPages");
                    if (roundPageNum !== prev) {
                        base.pagesInArray[prev] = base.positionsInArray[i];
                        prev = roundPageNum;
                    }
                }
            }
        },

        buildControls : function () {
            var base = this;
            if (base.options.navigation === true || base.options.pagination === true) {
                base.owlControls = $("<div class=\"owl-controls\"/>").toggleClass("clickable", !base.browser.isTouch).appendTo(base.$elem);
            }
            if (base.options.pagination === true) {
                base.buildPagination();
            }
            if (base.options.navigation === true) {
                base.buildButtons();
            }
        },

        buildButtons : function () {
            var base = this,
                buttonsWrapper = $("<div class=\"owl-buttons\"/>");
            base.owlControls.append(buttonsWrapper);

            base.buttonPrev = $("<div/>", {
                "class" : "owl-prev",
                "html" : base.options.navigationText[0] || ""
            });

            base.buttonNext = $("<div/>", {
                "class" : "owl-next",
                "html" : base.options.navigationText[1] || ""
            });

            buttonsWrapper
                .append(base.buttonPrev)
                .append(base.buttonNext);

            buttonsWrapper.on("touchstart.owlControls mousedown.owlControls", "div[class^=\"owl\"]", function (event) {
                event.preventDefault();
            });

            buttonsWrapper.on("touchend.owlControls mouseup.owlControls", "div[class^=\"owl\"]", function (event) {
                event.preventDefault();
                if ($(this).hasClass("owl-next")) {
                    base.next();
                } else {
                    base.prev();
                }
            });
        },

        buildPagination : function () {
            var base = this;

            base.paginationWrapper = $("<div class=\"owl-pagination\"/>");
            base.owlControls.append(base.paginationWrapper);

            base.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function (event) {
                event.preventDefault();
                if (Number($(this).data("owl-page")) !== base.currentItem) {
                    base.goTo(Number($(this).data("owl-page")), true);
                }
            });
        },

        updatePagination : function () {
            var base = this,
                counter,
                lastPage,
                lastItem,
                i,
                paginationButton,
                paginationButtonInner;

            if (base.options.pagination === false) {
                return false;
            }

            base.paginationWrapper.html("");

            counter = 0;
            lastPage = base.itemsAmount - base.itemsAmount % base.options.items;

            for (i = 0; i < base.itemsAmount; i += 1) {
                if (i % base.options.items === 0) {
                    counter += 1;
                    if (lastPage === i) {
                        lastItem = base.itemsAmount - base.options.items;
                    }
                    paginationButton = $("<div/>", {
                        "class" : "owl-page"
                    });
                    paginationButtonInner = $("<span></span>", {
                        "text": base.options.paginationNumbers === true ? counter : "",
                        "class": base.options.paginationNumbers === true ? "owl-numbers" : ""
                    });
                    paginationButton.append(paginationButtonInner);

                    paginationButton.data("owl-page", lastPage === i ? lastItem : i);
                    paginationButton.data("owl-roundPages", counter);

                    base.paginationWrapper.append(paginationButton);
                }
            }
            base.checkPagination();
        },
        checkPagination : function () {
            var base = this;
            if (base.options.pagination === false) {
                return false;
            }
            base.paginationWrapper.find(".owl-page").each(function () {
                if ($(this).data("owl-roundPages") === $(base.$owlItems[base.currentItem]).data("owl-roundPages")) {
                    base.paginationWrapper
                        .find(".owl-page")
                        .removeClass("active");
                    $(this).addClass("active");
                }
            });
        },

        checkNavigation : function () {
            var base = this;

            if (base.options.navigation === false) {
                return false;
            }
            if (base.options.rewindNav === false) {
                if (base.currentItem === 0 && base.maximumItem === 0) {
                    base.buttonPrev.addClass("disabled");
                    base.buttonNext.addClass("disabled");
                } else if (base.currentItem === 0 && base.maximumItem !== 0) {
                    base.buttonPrev.addClass("disabled");
                    base.buttonNext.removeClass("disabled");
                } else if (base.currentItem === base.maximumItem) {
                    base.buttonPrev.removeClass("disabled");
                    base.buttonNext.addClass("disabled");
                } else if (base.currentItem !== 0 && base.currentItem !== base.maximumItem) {
                    base.buttonPrev.removeClass("disabled");
                    base.buttonNext.removeClass("disabled");
                }
            }
        },

        updateControls : function () {
            var base = this;
            base.updatePagination();
            base.checkNavigation();
            if (base.owlControls) {
                if (base.options.items >= base.itemsAmount) {
                    base.owlControls.hide();
                } else {
                    base.owlControls.show();
                }
            }
        },

        destroyControls : function () {
            var base = this;
            if (base.owlControls) {
                base.owlControls.remove();
            }
        },

        next : function (speed) {
            var base = this;

            if (base.isTransition) {
                return false;
            }

            base.currentItem += base.options.scrollPerPage === true ? base.options.items : 1;
            if (base.currentItem > base.maximumItem + (base.options.scrollPerPage === true ? (base.options.items - 1) : 0)) {
                if (base.options.rewindNav === true) {
                    base.currentItem = 0;
                    speed = "rewind";
                } else {
                    base.currentItem = base.maximumItem;
                    return false;
                }
            }
            base.goTo(base.currentItem, speed);
        },

        prev : function (speed) {
            var base = this;

            if (base.isTransition) {
                return false;
            }

            if (base.options.scrollPerPage === true && base.currentItem > 0 && base.currentItem < base.options.items) {
                base.currentItem = 0;
            } else {
                base.currentItem -= base.options.scrollPerPage === true ? base.options.items : 1;
            }
            if (base.currentItem < 0) {
                if (base.options.rewindNav === true) {
                    base.currentItem = base.maximumItem;
                    speed = "rewind";
                } else {
                    base.currentItem = 0;
                    return false;
                }
            }
            base.goTo(base.currentItem, speed);
        },

        goTo : function (position, speed, drag) {
            var base = this,
                goToPixel;

            if (base.isTransition) {
                return false;
            }
            if (typeof base.options.beforeMove === "function") {
                base.options.beforeMove.apply(this, [base.$elem]);
            }
            if (position >= base.maximumItem) {
                position = base.maximumItem;
            } else if (position <= 0) {
                position = 0;
            }

            base.currentItem = base.owl.currentItem = position;
            if (base.options.transitionStyle !== false && drag !== "drag" && base.options.items === 1 && base.browser.support3d === true) {
                base.swapSpeed(0);
                if (base.browser.support3d === true) {
                    base.transition3d(base.positionsInArray[position]);
                } else {
                    base.css2slide(base.positionsInArray[position], 1);
                }
                base.afterGo();
                base.singleItemTransition();
                return false;
            }
            goToPixel = base.positionsInArray[position];

            if (base.browser.support3d === true) {
                base.isCss3Finish = false;

                if (speed === true) {
                    base.swapSpeed("paginationSpeed");
                    window.setTimeout(function () {
                        base.isCss3Finish = true;
                    }, base.options.paginationSpeed);

                } else if (speed === "rewind") {
                    base.swapSpeed(base.options.rewindSpeed);
                    window.setTimeout(function () {
                        base.isCss3Finish = true;
                    }, base.options.rewindSpeed);

                } else {
                    base.swapSpeed("slideSpeed");
                    window.setTimeout(function () {
                        base.isCss3Finish = true;
                    }, base.options.slideSpeed);
                }
                base.transition3d(goToPixel);
            } else {
                if (speed === true) {
                    base.css2slide(goToPixel, base.options.paginationSpeed);
                } else if (speed === "rewind") {
                    base.css2slide(goToPixel, base.options.rewindSpeed);
                } else {
                    base.css2slide(goToPixel, base.options.slideSpeed);
                }
            }
            base.afterGo();
        },

        jumpTo : function (position) {
            var base = this;
            if (typeof base.options.beforeMove === "function") {
                base.options.beforeMove.apply(this, [base.$elem]);
            }
            if (position >= base.maximumItem || position === -1) {
                position = base.maximumItem;
            } else if (position <= 0) {
                position = 0;
            }
            base.swapSpeed(0);
            if (base.browser.support3d === true) {
                base.transition3d(base.positionsInArray[position]);
            } else {
                base.css2slide(base.positionsInArray[position], 1);
            }
            base.currentItem = base.owl.currentItem = position;
            base.afterGo();
        },

        afterGo : function () {
            var base = this;

            base.prevArr.push(base.currentItem);
            base.prevItem = base.owl.prevItem = base.prevArr[base.prevArr.length - 2];
            base.prevArr.shift(0);

            if (base.prevItem !== base.currentItem) {
                base.checkPagination();
                base.checkNavigation();
                base.eachMoveUpdate();

                if (base.options.autoPlay !== false) {
                    base.checkAp();
                }
            }
            if (typeof base.options.afterMove === "function" && base.prevItem !== base.currentItem) {
                base.options.afterMove.apply(this, [base.$elem]);
            }
        },

        stop : function () {
            var base = this;
            base.apStatus = "stop";
            window.clearInterval(base.autoPlayInterval);
        },

        checkAp : function () {
            var base = this;
            if (base.apStatus !== "stop") {
                base.play();
            }
        },

        play : function () {
            var base = this;
            base.apStatus = "play";
            if (base.options.autoPlay === false) {
                return false;
            }
            window.clearInterval(base.autoPlayInterval);
            base.autoPlayInterval = window.setInterval(function () {
                base.next(true);
            }, base.options.autoPlay);
        },

        swapSpeed : function (action) {
            var base = this;
            if (action === "slideSpeed") {
                base.$owlWrapper.css(base.addCssSpeed(base.options.slideSpeed));
            } else if (action === "paginationSpeed") {
                base.$owlWrapper.css(base.addCssSpeed(base.options.paginationSpeed));
            } else if (typeof action !== "string") {
                base.$owlWrapper.css(base.addCssSpeed(action));
            }
        },

        addCssSpeed : function (speed) {
            return {
                "-webkit-transition": "all " + speed + "ms ease",
                "-moz-transition": "all " + speed + "ms ease",
                "-o-transition": "all " + speed + "ms ease",
                "transition": "all " + speed + "ms ease"
            };
        },

        removeTransition : function () {
            return {
                "-webkit-transition": "",
                "-moz-transition": "",
                "-o-transition": "",
                "transition": ""
            };
        },

        doTranslate : function (pixels) {
            return {
                "-webkit-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "-moz-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "-o-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "-ms-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "transform": "translate3d(" + pixels + "px, 0px,0px)"
            };
        },

        transition3d : function (value) {
            var base = this;
            base.$owlWrapper.css(base.doTranslate(value));
        },

        css2move : function (value) {
            var base = this;
            base.$owlWrapper.css({"left" : value});
        },

        css2slide : function (value, speed) {
            var base = this;

            base.isCssFinish = false;
            base.$owlWrapper.stop(true, true).animate({
                "left" : value
            }, {
                duration : speed || base.options.slideSpeed,
                complete : function () {
                    base.isCssFinish = true;
                }
            });
        },

        checkBrowser : function () {
            var base = this,
                translate3D = "translate3d(0px, 0px, 0px)",
                tempElem = document.createElement("div"),
                regex,
                asSupport,
                support3d,
                isTouch;

            tempElem.style.cssText = "  -moz-transform:" + translate3D +
                                  "; -ms-transform:"     + translate3D +
                                  "; -o-transform:"      + translate3D +
                                  "; -webkit-transform:" + translate3D +
                                  "; transform:"         + translate3D;
            regex = /translate3d\(0px, 0px, 0px\)/g;
            asSupport = tempElem.style.cssText.match(regex);
            support3d = (asSupport !== null && asSupport.length >= 1);

            isTouch = "ontouchstart" in window || window.navigator.msMaxTouchPoints;

            base.browser = {
                "support3d" : support3d,
                "isTouch" : isTouch
            };
        },

        moveEvents : function () {
            var base = this;
            if (base.options.mouseDrag !== false || base.options.touchDrag !== false) {
                base.gestures();
                base.disabledEvents();
            }
        },

        eventTypes : function () {
            var base = this,
                types = ["s", "e", "x"];

            base.ev_types = {};

            if (base.options.mouseDrag === true && base.options.touchDrag === true) {
                types = [
                    "touchstart.owl mousedown.owl",
                    "touchmove.owl mousemove.owl",
                    "touchend.owl touchcancel.owl mouseup.owl"
                ];
            } else if (base.options.mouseDrag === false && base.options.touchDrag === true) {
                types = [
                    "touchstart.owl",
                    "touchmove.owl",
                    "touchend.owl touchcancel.owl"
                ];
            } else if (base.options.mouseDrag === true && base.options.touchDrag === false) {
                types = [
                    "mousedown.owl",
                    "mousemove.owl",
                    "mouseup.owl"
                ];
            }

            base.ev_types.start = types[0];
            base.ev_types.move = types[1];
            base.ev_types.end = types[2];
        },

        disabledEvents :  function () {
            var base = this;
            base.$elem.on("dragstart.owl", function (event) { event.preventDefault(); });
            base.$elem.on("mousedown.disableTextSelect", function (e) {
                return $(e.target).is('input, textarea, select, option');
            });
        },

        gestures : function () {
            /*jslint unparam: true*/
            var base = this,
                locals = {
                    offsetX : 0,
                    offsetY : 0,
                    baseElWidth : 0,
                    relativePos : 0,
                    position: null,
                    minSwipe : null,
                    maxSwipe: null,
                    sliding : null,
                    dargging: null,
                    targetElement : null
                };

            base.isCssFinish = true;

            function getTouches(event) {
                if (event.touches !== undefined) {
                    return {
                        x : event.touches[0].pageX,
                        y : event.touches[0].pageY
                    };
                }

                if (event.touches === undefined) {
                    if (event.pageX !== undefined) {
                        return {
                            x : event.pageX,
                            y : event.pageY
                        };
                    }
                    if (event.pageX === undefined) {
                        return {
                            x : event.clientX,
                            y : event.clientY
                        };
                    }
                }
            }

            function swapEvents(type) {
                if (type === "on") {
                    $(document).on(base.ev_types.move, dragMove);
                    $(document).on(base.ev_types.end, dragEnd);
                } else if (type === "off") {
                    $(document).off(base.ev_types.move);
                    $(document).off(base.ev_types.end);
                }
            }

            function dragStart(event) {
                var ev = event.originalEvent || event || window.event,
                    position;

                if (ev.which === 3) {
                    return false;
                }
                if (base.itemsAmount <= base.options.items) {
                    return;
                }
                if (base.isCssFinish === false && !base.options.dragBeforeAnimFinish) {
                    return false;
                }
                if (base.isCss3Finish === false && !base.options.dragBeforeAnimFinish) {
                    return false;
                }

                if (base.options.autoPlay !== false) {
                    window.clearInterval(base.autoPlayInterval);
                }

                if (base.browser.isTouch !== true && !base.$owlWrapper.hasClass("grabbing")) {
                    base.$owlWrapper.addClass("grabbing");
                }

                base.newPosX = 0;
                base.newRelativeX = 0;

                $(this).css(base.removeTransition());

                position = $(this).position();
                locals.relativePos = position.left;

                locals.offsetX = getTouches(ev).x - position.left;
                locals.offsetY = getTouches(ev).y - position.top;

                swapEvents("on");

                locals.sliding = false;
                locals.targetElement = ev.target || ev.srcElement;
            }

            function dragMove(event) {
                var ev = event.originalEvent || event || window.event,
                    minSwipe,
                    maxSwipe;

                base.newPosX = getTouches(ev).x - locals.offsetX;
                base.newPosY = getTouches(ev).y - locals.offsetY;
                base.newRelativeX = base.newPosX - locals.relativePos;

                if (typeof base.options.startDragging === "function" && locals.dragging !== true && base.newRelativeX !== 0) {
                    locals.dragging = true;
                    base.options.startDragging.apply(base, [base.$elem]);
                }

                if ((base.newRelativeX > 8 || base.newRelativeX < -8) && (base.browser.isTouch === true)) {
                    if (ev.preventDefault !== undefined) {
                        ev.preventDefault();
                    } else {
                        ev.returnValue = false;
                    }
                    locals.sliding = true;
                }

                if ((base.newPosY > 10 || base.newPosY < -10) && locals.sliding === false) {
                    $(document).off("touchmove.owl");
                }

                minSwipe = function () {
                    return base.newRelativeX / 5;
                };

                maxSwipe = function () {
                    return base.maximumPixels + base.newRelativeX / 5;
                };

                base.newPosX = Math.max(Math.min(base.newPosX, minSwipe()), maxSwipe());
                if (base.browser.support3d === true) {
                    base.transition3d(base.newPosX);
                } else {
                    base.css2move(base.newPosX);
                }
            }

            function dragEnd(event) {
                var ev = event.originalEvent || event || window.event,
                    newPosition,
                    handlers,
                    owlStopEvent;

                ev.target = ev.target || ev.srcElement;

                locals.dragging = false;

                if (base.browser.isTouch !== true) {
                    base.$owlWrapper.removeClass("grabbing");
                }

                if (base.newRelativeX < 0) {
                    base.dragDirection = base.owl.dragDirection = "left";
                } else {
                    base.dragDirection = base.owl.dragDirection = "right";
                }

                if (base.newRelativeX !== 0) {
                    newPosition = base.getNewPosition();
                    base.goTo(newPosition, false, "drag");
                    if (locals.targetElement === ev.target && base.browser.isTouch !== true) {
                        $(ev.target).on("click.disable", function (ev) {
                            ev.stopImmediatePropagation();
                            ev.stopPropagation();
                            ev.preventDefault();
                            $(ev.target).off("click.disable");
                        });
                        handlers = $._data(ev.target, "events").click;
                        owlStopEvent = handlers.pop();
                        handlers.splice(0, 0, owlStopEvent);
                    }
                }
                swapEvents("off");
            }
            base.$elem.on(base.ev_types.start, ".owl-wrapper", dragStart);
        },

        getNewPosition : function () {
            var base = this,
                newPosition = base.closestItem();

            if (newPosition > base.maximumItem) {
                base.currentItem = base.maximumItem;
                newPosition  = base.maximumItem;
            } else if (base.newPosX >= 0) {
                newPosition = 0;
                base.currentItem = 0;
            }
            return newPosition;
        },
        closestItem : function () {
            var base = this,
                array = base.options.scrollPerPage === true ? base.pagesInArray : base.positionsInArray,
                goal = base.newPosX,
                closest = null;

            $.each(array, function (i, v) {
                if (goal - (base.itemWidth / 20) > array[i + 1] && goal - (base.itemWidth / 20) < v && base.moveDirection() === "left") {
                    closest = v;
                    if (base.options.scrollPerPage === true) {
                        base.currentItem = $.inArray(closest, base.positionsInArray);
                    } else {
                        base.currentItem = i;
                    }
                } else if (goal + (base.itemWidth / 20) < v && goal + (base.itemWidth / 20) > (array[i + 1] || array[i] - base.itemWidth) && base.moveDirection() === "right") {
                    if (base.options.scrollPerPage === true) {
                        closest = array[i + 1] || array[array.length - 1];
                        base.currentItem = $.inArray(closest, base.positionsInArray);
                    } else {
                        closest = array[i + 1];
                        base.currentItem = i + 1;
                    }
                }
            });
            return base.currentItem;
        },

        moveDirection : function () {
            var base = this,
                direction;
            if (base.newRelativeX < 0) {
                direction = "right";
                base.playDirection = "next";
            } else {
                direction = "left";
                base.playDirection = "prev";
            }
            return direction;
        },

        customEvents : function () {
            /*jslint unparam: true*/
            var base = this;
            base.$elem.on("owl.next", function () {
                base.next();
            });
            base.$elem.on("owl.prev", function () {
                base.prev();
            });
            base.$elem.on("owl.play", function (event, speed) {
                base.options.autoPlay = speed;
                base.play();
                base.hoverStatus = "play";
            });
            base.$elem.on("owl.stop", function () {
                base.stop();
                base.hoverStatus = "stop";
            });
            base.$elem.on("owl.goTo", function (event, item) {
                base.goTo(item);
            });
            base.$elem.on("owl.jumpTo", function (event, item) {
                base.jumpTo(item);
            });
        },

        stopOnHover : function () {
            var base = this;
            if (base.options.stopOnHover === true && base.browser.isTouch !== true && base.options.autoPlay !== false) {
                base.$elem.on("mouseover", function () {
                    base.stop();
                });
                base.$elem.on("mouseout", function () {
                    if (base.hoverStatus !== "stop") {
                        base.play();
                    }
                });
            }
        },

        lazyLoad : function () {
            var base = this,
                i,
                $item,
                itemNumber,
                $lazyImg,
                follow;

            if (base.options.lazyLoad === false) {
                return false;
            }
            for (i = 0; i < base.itemsAmount; i += 1) {
                $item = $(base.$owlItems[i]);

                if ($item.data("owl-loaded") === "loaded") {
                    continue;
                }

                itemNumber = $item.data("owl-item");
                $lazyImg = $item.find(".lazyOwl");

                if (typeof $lazyImg.data("src") !== "string") {
                    $item.data("owl-loaded", "loaded");
                    continue;
                }
                if ($item.data("owl-loaded") === undefined) {
                    $lazyImg.hide();
                    $item.addClass("loading").data("owl-loaded", "checked");
                }
                if (base.options.lazyFollow === true) {
                    follow = itemNumber >= base.currentItem;
                } else {
                    follow = true;
                }
                if (follow && itemNumber < base.currentItem + base.options.items && $lazyImg.length) {
                    base.lazyPreload($item, $lazyImg);
                }
            }
        },

        lazyPreload : function ($item, $lazyImg) {
            var base = this,
                iterations = 0,
                isBackgroundImg;

            if ($lazyImg.prop("tagName") === "DIV") {
                $lazyImg.css("background-image", "url(" + $lazyImg.data("src") + ")");
                isBackgroundImg = true;
            } else {
                $lazyImg[0].src = $lazyImg.data("src");
            }

            function showImage() {
                $item.data("owl-loaded", "loaded").removeClass("loading");
                $lazyImg.removeAttr("data-src");
                if (base.options.lazyEffect === "fade") {
                    $lazyImg.fadeIn(400);
                } else {
                    $lazyImg.show();
                }
                if (typeof base.options.afterLazyLoad === "function") {
                    base.options.afterLazyLoad.apply(this, [base.$elem]);
                }
            }

            function checkLazyImage() {
                iterations += 1;
                if (base.completeImg($lazyImg.get(0)) || isBackgroundImg === true) {
                    showImage();
                } else if (iterations <= 100) {//if image loads in less than 10 seconds
                    window.setTimeout(checkLazyImage, 100);
                } else {
                    showImage();
                }
            }

            checkLazyImage();
        },

        autoHeight : function () {
            var base = this,
                $currentimg = $(base.$owlItems[base.currentItem]).find("img"),
                iterations;

            function addHeight() {
                var $currentItem = $(base.$owlItems[base.currentItem]).height();
                base.wrapperOuter.css("height", $currentItem + "px");
                if (!base.wrapperOuter.hasClass("autoHeight")) {
                    window.setTimeout(function () {
                        base.wrapperOuter.addClass("autoHeight");
                    }, 0);
                }
            }

            function checkImage() {
                iterations += 1;
                if (base.completeImg($currentimg.get(0))) {
                    addHeight();
                } else if (iterations <= 100) { //if image loads in less than 10 seconds
                    window.setTimeout(checkImage, 100);
                } else {
                    base.wrapperOuter.css("height", ""); //Else remove height attribute
                }
            }

            if ($currentimg.get(0) !== undefined) {
                iterations = 0;
                checkImage();
            } else {
                addHeight();
            }
        },

        completeImg : function (img) {
            var naturalWidthType;

            if (!img.complete) {
                return false;
            }
            naturalWidthType = typeof img.naturalWidth;
            if (naturalWidthType !== "undefined" && img.naturalWidth === 0) {
                return false;
            }
            return true;
        },

        onVisibleItems : function () {
            var base = this,
                i;

            if (base.options.addClassActive === true) {
                base.$owlItems.removeClass("active");
            }
            base.visibleItems = [];
            for (i = base.currentItem; i < base.currentItem + base.options.items; i += 1) {
                base.visibleItems.push(i);

                if (base.options.addClassActive === true) {
                    $(base.$owlItems[i]).addClass("active");
                }
            }
            base.owl.visibleItems = base.visibleItems;
        },

        transitionTypes : function (className) {
            var base = this;
            //Currently available: "fade", "backSlide", "goDown", "fadeUp"
            base.outClass = "owl-" + className + "-out";
            base.inClass = "owl-" + className + "-in";
        },

        singleItemTransition : function () {
            var base = this,
                outClass = base.outClass,
                inClass = base.inClass,
                $currentItem = base.$owlItems.eq(base.currentItem),
                $prevItem = base.$owlItems.eq(base.prevItem),
                prevPos = Math.abs(base.positionsInArray[base.currentItem]) + base.positionsInArray[base.prevItem],
                origin = Math.abs(base.positionsInArray[base.currentItem]) + base.itemWidth / 2,
                animEnd = 'webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend';

            base.isTransition = true;

            base.$owlWrapper
                .addClass('owl-origin')
                .css({
                    "-webkit-transform-origin" : origin + "px",
                    "-moz-perspective-origin" : origin + "px",
                    "perspective-origin" : origin + "px"
                });
            function transStyles(prevPos) {
                return {
                    "position" : "relative",
                    "left" : prevPos + "px"
                };
            }

            $prevItem
                .css(transStyles(prevPos, 10))
                .addClass(outClass)
                .on(animEnd, function () {
                    base.endPrev = true;
                    $prevItem.off(animEnd);
                    base.clearTransStyle($prevItem, outClass);
                });

            $currentItem
                .addClass(inClass)
                .on(animEnd, function () {
                    base.endCurrent = true;
                    $currentItem.off(animEnd);
                    base.clearTransStyle($currentItem, inClass);
                });
        },

        clearTransStyle : function (item, classToRemove) {
            var base = this;
            item.css({
                "position" : "",
                "left" : ""
            }).removeClass(classToRemove);

            if (base.endPrev && base.endCurrent) {
                base.$owlWrapper.removeClass('owl-origin');
                base.endPrev = false;
                base.endCurrent = false;
                base.isTransition = false;
            }
        },

        owlStatus : function () {
            var base = this;
            base.owl = {
                "userOptions"   : base.userOptions,
                "baseElement"   : base.$elem,
                "userItems"     : base.$userItems,
                "owlItems"      : base.$owlItems,
                "currentItem"   : base.currentItem,
                "prevItem"      : base.prevItem,
                "visibleItems"  : base.visibleItems,
                "isTouch"       : base.browser.isTouch,
                "browser"       : base.browser,
                "dragDirection" : base.dragDirection
            };
        },

        clearEvents : function () {
            var base = this;
            base.$elem.off(".owl owl mousedown.disableTextSelect");
            $(document).off(".owl owl");
            $(window).off("resize", base.resizer);
        },

        unWrap : function () {
            var base = this;
            if (base.$elem.children().length !== 0) {
                base.$owlWrapper.unwrap();
                base.$userItems.unwrap().unwrap();
                if (base.owlControls) {
                    base.owlControls.remove();
                }
            }
            base.clearEvents();
            base.$elem
                .attr("style", base.$elem.data("owl-originalStyles") || "")
                .attr("class", base.$elem.data("owl-originalClasses"));
        },

        destroy : function () {
            var base = this;
            base.stop();
            window.clearInterval(base.checkVisible);
            base.unWrap();
            base.$elem.removeData();
        },

        reinit : function (newOptions) {
            var base = this,
                options = $.extend({}, base.userOptions, newOptions);
            base.unWrap();
            base.init(options, base.$elem);
        },

        addItem : function (htmlString, targetPosition) {
            var base = this,
                position;

            if (!htmlString) {return false; }

            if (base.$elem.children().length === 0) {
                base.$elem.append(htmlString);
                base.setVars();
                return false;
            }
            base.unWrap();
            if (targetPosition === undefined || targetPosition === -1) {
                position = -1;
            } else {
                position = targetPosition;
            }
            if (position >= base.$userItems.length || position === -1) {
                base.$userItems.eq(-1).after(htmlString);
            } else {
                base.$userItems.eq(position).before(htmlString);
            }

            base.setVars();
        },

        removeItem : function (targetPosition) {
            var base = this,
                position;

            if (base.$elem.children().length === 0) {
                return false;
            }
            if (targetPosition === undefined || targetPosition === -1) {
                position = -1;
            } else {
                position = targetPosition;
            }

            base.unWrap();
            base.$userItems.eq(position).remove();
            base.setVars();
        }

    };

    $.fn.owlCarousel = function (options) {
        return this.each(function () {
            if ($(this).data("owl-init") === true) {
                return false;
            }
            $(this).data("owl-init", true);
            var carousel = Object.create(Carousel);
            carousel.init(options, this);
            $.data(this, "owlCarousel", carousel);
        });
    };

    $.fn.owlCarousel.options = {

        items : 5,
        itemsCustom : false,
        itemsDesktop : [1199, 4],
        itemsDesktopSmall : [979, 3],
        itemsTablet : [768, 2],
        itemsTabletSmall : false,
        itemsMobile : [479, 1],
        singleItem : false,
        itemsScaleUp : false,

        slideSpeed : 200,
        paginationSpeed : 800,
        rewindSpeed : 1000,

        autoPlay : false,
        stopOnHover : false,

        navigation : false,
        navigationText : ["prev", "next"],
        rewindNav : true,
        scrollPerPage : false,

        pagination : true,
        paginationNumbers : false,

        responsive : true,
        responsiveRefreshRate : 200,
        responsiveBaseWidth : window,

        baseClass : "owl-carousel",
        theme : "owl-theme",

        lazyLoad : false,
        lazyFollow : true,
        lazyEffect : "fade",

        autoHeight : false,

        jsonPath : false,
        jsonSuccess : false,

        dragBeforeAnimFinish : true,
        mouseDrag : true,
        touchDrag : true,

        addClassActive : false,
        transitionStyle : false,

        beforeUpdate : false,
        afterUpdate : false,
        beforeInit : false,
        afterInit : false,
        beforeMove : false,
        afterMove : false,
        afterAction : false,
        startDragging : false,
        afterLazyLoad: false
    };
}(jQuery, window, document));

/*
 * jQuery.appear
 * https://github.com/bas2k/jquery.appear/
 * http://code.google.com/p/jquery-appear/
 * http://bas2k.ru/
 *
 * Copyright (c) 2009 Michael Hixson
 * Copyright (c) 2012-2014 Alexander Brovikov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
(function($) {
    $.fn.appear = function(fn, options) {

        var settings = $.extend({

            //arbitrary data to pass to fn
            data: undefined,

            //call fn only on the first appear?
            one: true,

            // X & Y accuracy
            accX: 0,
            accY: 0

        }, options);

        return this.each(function() {

            var t = $(this);

            //whether the element is currently visible
            t.appeared = false;

            if (!fn) {

                //trigger the custom event
                t.trigger('appear', settings.data);
                return;
            }

            var w = $(window);

            //fires the appear event when appropriate
            var check = function() {

                //is the element hidden?
                if (!t.is(':visible')) {

                    //it became hidden
                    t.appeared = false;
                    return;
                }

                //is the element inside the visible window?
                var a = w.scrollLeft();
                var b = w.scrollTop();
                var o = t.offset();
                var x = o.left;
                var y = o.top;

                var ax = settings.accX;
                var ay = settings.accY;
                var th = t.height();
                var wh = w.height();
                var tw = t.width();
                var ww = w.width();

                if (y + th + ay >= b &&
                    y <= b + wh + ay &&
                    x + tw + ax >= a &&
                    x <= a + ww + ax) {

                    //trigger the custom event
                    if (!t.appeared) t.trigger('appear', settings.data);

                } else {

                    //it scrolled out of view
                    t.appeared = false;
                }
            };

            //create a modified fn with some additional logic
            var modifiedFn = function() {

                //mark the element as visible
                t.appeared = true;

                //is this supposed to happen only once?
                if (settings.one) {

                    //remove the check
                    w.unbind('scroll', check);
                    var i = $.inArray(check, $.fn.appear.checks);
                    if (i >= 0) $.fn.appear.checks.splice(i, 1);
                }

                //trigger the original fn
                fn.apply(this, arguments);
            };

            //bind the modified fn to the element
            if (settings.one) t.one('appear', settings.data, modifiedFn);
            else t.bind('appear', settings.data, modifiedFn);

            //check whenever the window scrolls
            w.scroll(check);

            //check whenever the dom changes
            $.fn.appear.checks.push(check);

            //check now
            (check)();
        });
    };

    //keep a queue of appearance checks
    $.extend($.fn.appear, {

        checks: [],
        timeout: null,

        //process the queue
        checkAll: function() {
            var length = $.fn.appear.checks.length;
            if (length > 0) while (length--) ($.fn.appear.checks[length])();
        },

        //check the queue asynchronously
        run: function() {
            if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
            $.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
        }
    });

    //run checks when these methods are called
    $.each(['append', 'prepend', 'after', 'before', 'attr',
        'removeAttr', 'addClass', 'removeClass', 'toggleClass',
        'remove', 'css', 'show', 'hide'], function(i, n) {
        var old = $.fn[n];
        if (old) {
            $.fn[n] = function() {
                var r = old.apply(this, arguments);
                $.fn.appear.run();
                return r;
            }
        }
    });

})(jQuery);

/*! perfect-scrollbar - v0.5.6
* http://noraesae.github.com/perfect-scrollbar/
* Copyright (c) 2014 Hyunje Alex Jun; Licensed MIT */
(function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?e(require("jquery")):e(jQuery)})(function(e){"use strict";function t(e){return"string"==typeof e?parseInt(e,10):~~e}var o={wheelSpeed:1,wheelPropagation:!1,minScrollbarLength:null,maxScrollbarLength:null,useBothWheelAxes:!1,useKeyboard:!0,suppressScrollX:!1,suppressScrollY:!1,scrollXMarginOffset:0,scrollYMarginOffset:0,includePadding:!1},n=0,r=function(){var e=n++;return function(t){var o=".perfect-scrollbar-"+e;return t===void 0?o:t+o}};e.fn.perfectScrollbar=function(n,l){return this.each(function(){function i(e,o){var n=e+o,r=x-k;W=0>n?0:n>r?r:n;var l=t(W*(C-x)/(x-k));S.scrollTop(l)}function a(e,o){var n=e+o,r=P-E;X=0>n?0:n>r?r:n;var l=t(X*(D-P)/(P-E));S.scrollLeft(l)}function c(e){return L.minScrollbarLength&&(e=Math.max(e,L.minScrollbarLength)),L.maxScrollbarLength&&(e=Math.min(e,L.maxScrollbarLength)),e}function s(){var e={width:P,display:M?"inherit":"none"};e.left=I?S.scrollLeft()+P-D:S.scrollLeft(),q?e.bottom=R-S.scrollTop():e.top=B+S.scrollTop(),K.css(e);var t={top:S.scrollTop(),height:x,display:Y?"inherit":"none"};F?t.right=I?D-S.scrollLeft()-z-Q.outerWidth():z-S.scrollLeft():t.left=I?S.scrollLeft()+2*P-D-G-Q.outerWidth():G+S.scrollLeft(),U.css(t),O.css({left:X,width:E-H}),Q.css({top:W,height:k-J})}function d(){S.removeClass("ps-active-x"),S.removeClass("ps-active-y"),P=L.includePadding?S.innerWidth():S.width(),x=L.includePadding?S.innerHeight():S.height(),D=S.prop("scrollWidth"),C=S.prop("scrollHeight"),!L.suppressScrollX&&D>P+L.scrollXMarginOffset?(M=!0,E=c(t(P*P/D)),X=t(S.scrollLeft()*(P-E)/(D-P))):(M=!1,E=0,X=0,S.scrollLeft(0)),!L.suppressScrollY&&C>x+L.scrollYMarginOffset?(Y=!0,k=c(t(x*x/C)),W=t(S.scrollTop()*(x-k)/(C-x))):(Y=!1,k=0,W=0,S.scrollTop(0)),X>=P-E&&(X=P-E),W>=x-k&&(W=x-k),s(),M&&S.addClass("ps-active-x"),Y&&S.addClass("ps-active-y")}function u(){var t,o,n=!1;O.bind(j("mousedown"),function(e){o=e.pageX,t=O.position().left,K.addClass("in-scrolling"),n=!0,e.stopPropagation(),e.preventDefault()}),e(A).bind(j("mousemove"),function(e){n&&(a(t,e.pageX-o),d(),e.stopPropagation(),e.preventDefault())}),e(A).bind(j("mouseup"),function(){n&&(n=!1,K.removeClass("in-scrolling"))}),t=o=null}function p(){var t,o,n=!1;Q.bind(j("mousedown"),function(e){o=e.pageY,t=Q.position().top,n=!0,U.addClass("in-scrolling"),e.stopPropagation(),e.preventDefault()}),e(A).bind(j("mousemove"),function(e){n&&(i(t,e.pageY-o),d(),e.stopPropagation(),e.preventDefault())}),e(A).bind(j("mouseup"),function(){n&&(n=!1,U.removeClass("in-scrolling"))}),t=o=null}function f(e,t){var o=S.scrollTop();if(0===e){if(!Y)return!1;if(0===o&&t>0||o>=C-x&&0>t)return!L.wheelPropagation}var n=S.scrollLeft();if(0===t){if(!M)return!1;if(0===n&&0>e||n>=D-P&&e>0)return!L.wheelPropagation}return!0}function v(){function e(e){var t=e.originalEvent.deltaX,o=-1*e.originalEvent.deltaY;return(t===void 0||o===void 0)&&(t=-1*e.originalEvent.wheelDeltaX/6,o=e.originalEvent.wheelDeltaY/6),e.originalEvent.deltaMode&&1===e.originalEvent.deltaMode&&(t*=10,o*=10),t!==t&&o!==o&&(t=0,o=e.originalEvent.wheelDelta),[t,o]}function t(t){var n=e(t),r=n[0],l=n[1];o=!1,L.useBothWheelAxes?Y&&!M?(l?S.scrollTop(S.scrollTop()-l*L.wheelSpeed):S.scrollTop(S.scrollTop()+r*L.wheelSpeed),o=!0):M&&!Y&&(r?S.scrollLeft(S.scrollLeft()+r*L.wheelSpeed):S.scrollLeft(S.scrollLeft()-l*L.wheelSpeed),o=!0):(S.scrollTop(S.scrollTop()-l*L.wheelSpeed),S.scrollLeft(S.scrollLeft()+r*L.wheelSpeed)),d(),o=o||f(r,l),o&&(t.stopPropagation(),t.preventDefault())}var o=!1;window.onwheel!==void 0?S.bind(j("wheel"),t):window.onmousewheel!==void 0&&S.bind(j("mousewheel"),t)}function g(){var t=!1;S.bind(j("mouseenter"),function(){t=!0}),S.bind(j("mouseleave"),function(){t=!1});var o=!1;e(A).bind(j("keydown"),function(n){if((!n.isDefaultPrevented||!n.isDefaultPrevented())&&t){for(var r=document.activeElement?document.activeElement:A.activeElement;r.shadowRoot;)r=r.shadowRoot.activeElement;if(!e(r).is(":input,[contenteditable]")){var l=0,i=0;switch(n.which){case 37:l=-30;break;case 38:i=30;break;case 39:l=30;break;case 40:i=-30;break;case 33:i=90;break;case 32:case 34:i=-90;break;case 35:i=n.ctrlKey?-C:-x;break;case 36:i=n.ctrlKey?S.scrollTop():x;break;default:return}S.scrollTop(S.scrollTop()-i),S.scrollLeft(S.scrollLeft()+l),o=f(l,i),o&&n.preventDefault()}}})}function b(){function e(e){e.stopPropagation()}Q.bind(j("click"),e),U.bind(j("click"),function(e){var o=t(k/2),n=e.pageY-U.offset().top-o,r=x-k,l=n/r;0>l?l=0:l>1&&(l=1),S.scrollTop((C-x)*l)}),O.bind(j("click"),e),K.bind(j("click"),function(e){var o=t(E/2),n=e.pageX-K.offset().left-o,r=P-E,l=n/r;0>l?l=0:l>1&&(l=1),S.scrollLeft((D-P)*l)})}function h(){function t(){var e=window.getSelection?window.getSelection():document.getSlection?document.getSlection():{rangeCount:0};return 0===e.rangeCount?null:e.getRangeAt(0).commonAncestorContainer}function o(){r||(r=setInterval(function(){S.scrollTop(S.scrollTop()+l.top),S.scrollLeft(S.scrollLeft()+l.left),d()},50))}function n(){r&&(clearInterval(r),r=null),K.removeClass("in-scrolling"),U.removeClass("in-scrolling")}var r=null,l={top:0,left:0},i=!1;e(A).bind(j("selectionchange"),function(){e.contains(S[0],t())?i=!0:(i=!1,n())}),e(window).bind(j("mouseup"),function(){i&&(i=!1,n())}),e(window).bind(j("mousemove"),function(e){if(i){var t={x:e.pageX,y:e.pageY},r=S.offset(),a={left:r.left,right:r.left+S.outerWidth(),top:r.top,bottom:r.top+S.outerHeight()};t.x<a.left+3?(l.left=-5,K.addClass("in-scrolling")):t.x>a.right-3?(l.left=5,K.addClass("in-scrolling")):l.left=0,t.y<a.top+3?(l.top=5>a.top+3-t.y?-5:-20,U.addClass("in-scrolling")):t.y>a.bottom-3?(l.top=5>t.y-a.bottom+3?5:20,U.addClass("in-scrolling")):l.top=0,0===l.top&&0===l.left?n():o()}})}function w(t,o){function n(e,t){S.scrollTop(S.scrollTop()-t),S.scrollLeft(S.scrollLeft()-e),d()}function r(){b=!0}function l(){b=!1}function i(e){return e.originalEvent.targetTouches?e.originalEvent.targetTouches[0]:e.originalEvent}function a(e){var t=e.originalEvent;return t.targetTouches&&1===t.targetTouches.length?!0:t.pointerType&&"mouse"!==t.pointerType?!0:!1}function c(e){if(a(e)){h=!0;var t=i(e);p.pageX=t.pageX,p.pageY=t.pageY,f=(new Date).getTime(),null!==g&&clearInterval(g),e.stopPropagation()}}function s(e){if(!b&&h&&a(e)){var t=i(e),o={pageX:t.pageX,pageY:t.pageY},r=o.pageX-p.pageX,l=o.pageY-p.pageY;n(r,l),p=o;var c=(new Date).getTime(),s=c-f;s>0&&(v.x=r/s,v.y=l/s,f=c),e.stopPropagation(),e.preventDefault()}}function u(){!b&&h&&(h=!1,clearInterval(g),g=setInterval(function(){return.01>Math.abs(v.x)&&.01>Math.abs(v.y)?(clearInterval(g),void 0):(n(30*v.x,30*v.y),v.x*=.8,v.y*=.8,void 0)},10))}var p={},f=0,v={},g=null,b=!1,h=!1;t&&(e(window).bind(j("touchstart"),r),e(window).bind(j("touchend"),l),S.bind(j("touchstart"),c),S.bind(j("touchmove"),s),S.bind(j("touchend"),u)),o&&(window.PointerEvent?(e(window).bind(j("pointerdown"),r),e(window).bind(j("pointerup"),l),S.bind(j("pointerdown"),c),S.bind(j("pointermove"),s),S.bind(j("pointerup"),u)):window.MSPointerEvent&&(e(window).bind(j("MSPointerDown"),r),e(window).bind(j("MSPointerUp"),l),S.bind(j("MSPointerDown"),c),S.bind(j("MSPointerMove"),s),S.bind(j("MSPointerUp"),u)))}function m(){S.bind(j("scroll"),function(){d()})}function T(){S.unbind(j()),e(window).unbind(j()),e(A).unbind(j()),S.data("perfect-scrollbar",null),S.data("perfect-scrollbar-update",null),S.data("perfect-scrollbar-destroy",null),O.remove(),Q.remove(),K.remove(),U.remove(),K=U=O=Q=M=Y=P=x=D=C=E=X=R=q=B=k=W=z=F=G=I=j=null}function y(){d(),m(),u(),p(),b(),h(),v(),(N||V)&&w(N,V),L.useKeyboard&&g(),S.data("perfect-scrollbar",S),S.data("perfect-scrollbar-update",d),S.data("perfect-scrollbar-destroy",T)}var L=e.extend(!0,{},o),S=e(this);if("object"==typeof n?e.extend(!0,L,n):l=n,"update"===l)return S.data("perfect-scrollbar-update")&&S.data("perfect-scrollbar-update")(),S;if("destroy"===l)return S.data("perfect-scrollbar-destroy")&&S.data("perfect-scrollbar-destroy")(),S;if(S.data("perfect-scrollbar"))return S.data("perfect-scrollbar");S.addClass("ps-container");var P,x,D,C,M,E,X,Y,k,W,I="rtl"===S.css("direction"),j=r(),A=this.ownerDocument||document,K=e("<div class='ps-scrollbar-x-rail'>").appendTo(S),O=e("<div class='ps-scrollbar-x'>").appendTo(K),R=t(K.css("bottom")),q=R===R,B=q?null:t(K.css("top")),H=t(K.css("borderLeftWidth"))+t(K.css("borderRightWidth")),U=e("<div class='ps-scrollbar-y-rail'>").appendTo(S),Q=e("<div class='ps-scrollbar-y'>").appendTo(U),z=t(U.css("right")),F=z===z,G=F?null:t(U.css("left")),J=t(U.css("borderTopWidth"))+t(U.css("borderBottomWidth")),N="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,V=null!==window.navigator.msMaxTouchPoints;return y(),S})}});

(function($) {
    "use strict";
    function main() {
        mobilecheck();
        mdselect();
        Learning();
        scrollStyle();

        $(".feature-slider").owlCarousel({
            autoPlay: 10000,
            items: 4,
            itemsDesktop : [1199,4],
            itemsDesktopSmall : [979,3],
            itemsTablet: [768,2],
            itemsTabletSmall: [600,1],
            slideSpeed: 300,
            navigation: true,
            pagination: false,
            navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });



        $('.view-grid').on('click', function() {
            $('.categories-content .content').attr('class', 'content grid');
            $('.grid').addClass('fade-1');
            $('.list').removeClass('fade-2');
            $(this).addClass('active');
            $('.view-list').removeClass('active');
        });
        $('.view-list').on('click', function() {
            $('.categories-content .content').attr('class', 'content list');
            $('.list').addClass('fade-2');
            $('.grid').removeClass('fade-1');
            $(this).addClass('active');
            $('.view-grid').removeClass('active');
        });


        /*==============================
            Account info
        ==============================*/

        var $toggleList = $('.list-account-info .list-item .toggle-list');
        $('html').on('click', function() {
            $toggleList.stop().removeClass('toggle-message-add');
            $('.list-account-info .item-click').stop().removeClass('active-ac');
        });
        $('.list-account-info .list-item').on('click', function(event) {
            event.stopPropagation();
        });
        $('.list-account-info .item-click').on('click', function(event) {
            if ($(this).hasClass('active-ac') == false) {
                $('.list-account-info .item-click').removeClass('active-ac');
                $toggleList.stop().removeClass('toggle-message-add');
            }
            $(this).toggleClass('active-ac');
            $(this).siblings('.toggle-list')
                .stop()
                .toggleClass('toggle-message-add');

        });

        $.each($('.content-bar'), function() {
            var widthList = $(this).find('li').outerWidth(),
                totalList = $(this).find('li').length;
            $(this).find('ul').width(widthList * totalList + 20);
        });


        /*==============================
            PROGRESS BAR
        ==============================*/
        $('.current-progress').appear(function () {
            $('.current-progress .progress-run').addClass('progress-run-add');
            var percent = $('.current-progress .count').text();
            $('.progress-run-add').width(percent);
        });


        /*==============================
            PERCENT LEARN
        ==============================*/
        $('.percent-learn').appear(function () {
            $(this)
                .closest('.ft-item')
                    .find('.percent-learn-run')
                            .addClass('percent-learn-run-add');
            var percentLearn = $(this).text();
            var context = $(this).closest('.ft-item').find('.percent-learn-run-add');
            context.width(percentLearn);
        });


        /*==============================
            CHECKOUT
        ==============================*/
        var current_fs, next_fs, previous_fs;
        var left, opacity, scale;
        var animating;
        $(".form-checkout .next").on('click', function() {
            if(animating) return false;
            animating = true;

            current_fs = $(this).closest('fieldset');
            next_fs = $(this).closest('fieldset').next();

            $(".form-checkout #bar li").eq($("fieldset").index(next_fs)).addClass("active");

            //show the next fieldset
            next_fs.show();
            //hide the current fieldset with style
            current_fs.animate({opacity: 0}, {
                step: function(now, mx) {
                    left = (now * 50)+"%";
                    opacity = 1 - now;
                    current_fs.css({
                        'opacity': '0',
                        'position': 'absolute'
                    });
                    next_fs.css({
                        'left': left,
                        'opacity': opacity,
                        'position': 'static'
                    });
                },
                duration: 800,
                complete: function(){
                    current_fs.hide();
                    animating = false;
                },
                //this comes from the custom easing plugin
                easing: 'easeInOutBack'
            });
        });

        $(".submit").on('click', function() {
            return false;
        });
        formCheckoutCal();

        $('#page-wrap').append('<div class="overlayForm"></div>');
        $('.take-this-course').on('click', function() {
            $('.form-checkout, .overlayForm').fadeIn(400);
            $(window).trigger('resize');
            return false;
        });

        $('.closeForm').on('click', function() {
            $('.form-checkout, .overlayForm').fadeOut(400);
        });
        $('.closeForm').trigger('click');

        /*==============================
            TABS STYLE LINE
        ==============================*/
        if ($('.nav-tabs').length) {
            $.each($('.nav-tabs'), function() {
                var tabsItem = $(this).find('a'),
                    tabs = $(this),
                    leftActive = tabs.find('.active').children('a').position().left,
                    widthActive = tabs.find('.active').children('a').width();
                tabs.append('<li class="tabs-hr"></li>');
                $('.tabs-hr').css({
                    left: leftActive,
                    width: widthActive
                });
                tabsItem.on('click', function() {
                    var left = $(this).parent().position().left,
                        width = $(this).width();
                    $('.tabs-hr').animate({
                        left: left,
                        width: width
                    }, 500, 'easeInOutExpo');
                });
            });
        }

        /*==============================
            FOOTER STYLE 2
        ==============================*/
        var $footerStyle2 = $('footer#footer.footer-style-2'),
            heightFooter =  $footerStyle2.height();
        $footerStyle2.appendTo('body');
        $footerStyle2.siblings('#page-wrap').css('marginBottom', heightFooter);


        $('.question-sidebar ul, .list-message, .list-notification').wrap('<div class="list-wrap"></div>');
    }
    /*==============================
        Mobile check
    ==============================*/
    function mobilecheck() {
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            return false;
        }
        return true;
    }

    function formCheckoutCal() {
        var heightWindow = $(window).height(),
            heightForm = $('.form-checkout .container').outerHeight(),
            formMiddle = (heightWindow - heightForm - 80) / 2;
        $('.form-checkout').css('top', formMiddle);
    }

    /*==============================
        MC SELECT
    ==============================*/
    function mdselect() {
        $('.mc-select').find('select.select').each(function() {
            var selected = $(this).find('option:selected').text();
            $(this)
                .css({'z-index':10,'opacity':0,'-khtml-appearance':'none'})
                .after('<span class="select">' + selected + '</span>' + '<i class="fa fa-angle-down"></i>')
                .change(function(){
                    var val = $('option:selected',this).text();
                    $(this).next().text(val);
                });
        });
    }

    /*==============================
        Learning
    ==============================*/
    function Learning() {
        var $navListBody = $('.top-nav-list').find('.list-item-body');
        var width = $navListBody.closest('.top-nav-list').width() - 1;
        $navListBody.width(width);
        if ($('.top-nav-list').children('li').hasClass('active')) {
            $('.learning-section')
                .toggleClass('learning-section-fly')
                .css('paddingRight', width);
        }
        $('.top-nav-list').find('.outline-learn, .discussion-learn, .note-learn').on('click', '> a', function(e) {
            e.preventDefault();
            if ($(this).parent().hasClass('active') == false) {
                $('.top-nav-list').children('li').removeClass('active');
            }
            $(this).parent().toggleClass('active');
            if ($(this).parent().hasClass('active')) {
                $('.learning-section')
                    .addClass('learning-section-fly')
                    .css('paddingRight', width);
            } else {
                $('.learning-section')
                    .removeClass('learning-section-fly')
                    .css('paddingRight', '0');
            }
        });
        $('html').on('click', function() {
            $navListBody.removeClass('item-fly');
            $navListBody.parent('li').removeClass('active');
            $('.learning-section')
                .removeClass('learning-section-fly')
                .css('paddingRight', '0');
        });
        $('.top-nav-list, .list-item-body').on('click', function(event) {
            event.stopPropagation();
        });
    }
    function setHeightRespon() {
        var windowHeight = $(window).height(),
            w = window.innerWidth;
        $('.learn-section').css('min-height', windowHeight);

        if (w < 992) {
            $('.question-content-wrap').find('.question-sidebar').height('auto');
            $('.question-content-wrap').find('.score-sb').find('.list-wrap').height('auto').css('max-height', '300px');
        } else if (w >= 992) {
            var height = $('.question-content-wrap').find('.question-content').height() + 30;
            var heightUl = height - 90;
            $('.question-content-wrap').find('.score-sb').find('.list-wrap').height(heightUl).css('max-height', 'none');
            $('.question-content-wrap').find('.question-sidebar').height(height);
        }
    }

    /*==============================
        SET HEIGHT MESSAGE SB
    ==============================*/
    function setHeightMessagesb() {
        if ($('.list-item-body').length) {
            var heightlist = $(window).height() - $('.list-item-body').css('margin-top').split('px')[0];
            $('.list-item-body').height(heightlist);
        }
    }



    /*==============================
        SCROLL STYLE
    ==============================*/
    function scrollbar() {
        var $scrollbar = $('.question-sidebar .list-wrap, .messages .list-wrap, .message-sb .list-wrap, .notification .list-wrap, .list-item-body, .table-wrap .tbody');
        $scrollbar.perfectScrollbar({
            maxScrollbarLength: 150,
        });
        $scrollbar.perfectScrollbar('update');

        $('.content-bar').perfectScrollbar({
            maxScrollbarLength: 150,
            suppressScrollY: true,
            useBothWheelAxes: true,
        });
        $('.content-bar').perfectScrollbar('update');
    }
    function scrollStyle() {
        scrollbar();
        $(window).on('load', function() {
            if ($('.content-bar').length > 0) {
                var  currentPosition =$('.content-bar').find('.current').position().left;
                var  prevCurrentWidth =$('.content-bar').find('.current').prev().width();
                setTimeout(function() {
                    $('.content-bar').animate({
                        scrollLeft: currentPosition - prevCurrentWidth
                    }, 400);
                }, 100);
            }
        });
    }

    function uploadFile() {
        $('.up-file').delegate('a', 'click', function(e) {
            e.preventDefault();
            $(this).siblings('input[type="file"]').trigger('click');
        });
        $('.up-file').delegate('input[type="file"]', 'change', function() {
            var nameFile = $(this).val().replace(/\\/g, '/').replace(/.*\//, '');
            $(this).siblings('input[type="hidden"]').val(nameFile);
            readURL(this);
        });
        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('.changes-avatar')
                        .find('img')
                            .attr('src', e.target.result)
                            .width(140);
                };
                reader.readAsDataURL(input.files[0]);
            }
        }
    }



    /*==========  Slider Home ==========*/
    function SliderHome(){
        if($('#slide-home').length){
            $('#slide-home').owlCarousel({
                autoPlay: 10000,
                navigation: false,
                pagination: true,
                singleItem: true,
                mouseDrag:false,
                addClassActive:true,
                transitionStyle:'fade'
            });
        }
    }

    /*==========  Resize Slider Home ==========*/
    function ResizeSliderHome() {
        if($('#slide-home')) {
            var parentWidth = $('.slide-cn').innerWidth(),
              imgWidth = $('.item-inner').width(),
              imgHeight = $('.item-inner').height(),
              scale = parentWidth/imgWidth,
              ratio = imgWidth/imgHeight,
              heightItem = parentWidth/ratio;

          $('.slide-item').css({'height': heightItem});

          if ($(window).width() <= 1200) {

            $('.item-inner').css({
              '-webkit-transform': 'scale(' + scale + ')',
              '-moz-transform': 'scale(' + scale + ')',
              '-ms-transform': 'scale(' + scale + ')',
              'transform': 'scale(' + scale + ')'
            });

          } else {

            $('.item-inner').css({
                '-webkit-transform': 'scale(1)',
                '-moz-transform': 'scale(1)',
                '-ms-transform': 'scale(1)',
                'transform': 'scale(1)'
            });

          }
      }
    }


    $(document).ready(function() {
        main();
        setHeightRespon();
        uploadFile();
        setHeightMessagesb();
        scrollbar();
        $('.nav-tabs').wrap('<div class="nav-tabs-wrap"></div>');

        $('.open-menu').on('click', function() {
            $(this).toggleClass('toggle-active');
            $('.navigation .menu, .search-box').slideToggle(300);
        });
        $('.menu-item-has-children').on('click', '> .toggle-sub', function(evt) {
            evt.preventDefault();
            $(this).next().slideToggle(300);
            $(this).prev().toggleClass('mobile-active');
        });
    });
    $(window).load(function() {
        ResizeSliderHome();
    });

    $(window).on('resize', function() {
        formCheckoutCal();
    });
    $(window).on('resize', function() {
        setHeightRespon();
        setHeightMessagesb();
        scrollbar();
        SliderHome();
        ResizeSliderHome();

        if (window.innerWidth < 1200) {
            $('.navigation .menu, .search-box').css('display', 'none');
            if ($('.menu-item-has-children').children('.toggle-sub').length === 0 && $('.menu-item-has-children').children('.toggle-sub').length < 1)
                $('.menu-item-has-children > a').after('<span class="toggle-sub">Toggle</span>');
            $('html').on('click', function() {
                $('.open-menu').removeClass('toggle-active');
                $('.navigation .menu, .search-box').slideUp(300);
            });
            $('.navigation .menu, .open-menu, .search-box').on('click', function(evt) {
                evt.stopPropagation();
            });
        } else {
            $('.navigation .menu, .search-box').css('display', 'inline-block');
            $('.toggle-sub').remove();
        }
    }).trigger('resize');;


})(jQuery);

function outlineTab() {
    if (typeof (Storage) != "undefined") {
        $('.thead').click(function () {
            sessionStorage.activeTab = $(this).find('.total-subm').text();
        });
        if (sessionStorage.activeTab) {
            var total_subm = parseInt(sessionStorage.activeTab) + 1;
            $('.table-wrap:not(.left-sidebar)').find('.thead.active').removeClass('active');
            $(`.table-wrap:not(.left-sidebar) > .table-body:nth-child(${total_subm}) .thead`).addClass('active');
        }
    }
    $.each($('.table-wrap:not(.left-sidebar)'), function () {
        $(this)
            .find('.table-item')
            .children('.thead:not(.active)')
            .next('.tbody').hide();
        $(this)
            .find('.table-item')
            .delegate('.thead', 'click', function (evt) {
            evt.preventDefault();
            if ($(this).hasClass('active') == false) {
                $('.table-wrap:not(.left-sidebar) .table-item')
                    .find('.thead')
                    .removeClass('active')
                    .siblings('.tbody')
                    .slideUp(200);
            }
            $(this)
                .toggleClass('active')
                .siblings('.tbody')
                .slideToggle(200);
        });
    });
}
function outlineYoutubeSave() {
    var serverName = $('.server').text();
    $("body").on('click', '.youtube-link', function () {
        var youtube_id = $(this).attr('href');
        $.post(serverName + youtube_id.split("=")[1]);
    });
}
function videoClick() {
    $("body").on('click', '.video-link', function () {
        var lession_learned = parseInt($('.lession-learned').text()) + 1;
        $('.lession-learned').text(lession_learned);
        var video_total = parseInt($('.video-number').text());
        var percent_learned = Math.round(lession_learned / video_total * 100);
        console.log(percent_learned);
        if (!$(this).closest('li').hasClass('o-view')) {
            $('.lession-learned').text();
            $('.percent-learn-run-add').css('style', 'width:' + percent_learned + '%');
            $('.percent-learn').text(percent_learned + '%');
        }
        $(this).closest('li').addClass('o-view');
    });
}
$(function () {
    outlineTab();
    videoClick();
});