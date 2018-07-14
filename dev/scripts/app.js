/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = "<div class=\"box box-info\">    <div class=\"box-header with-border\">        <h3 class=\"box-title\">编辑商品信息</h3>    </div>    <!-- /.box-header -->    <!-- form start -->    <form id=\"productForm\" class=\"form-horizontal\" enctype=\'application/json\' action=\"/ssh1fs/qqq/api/add\"  method=\"post\">    <!--<form id=\"productForm\" class=\"form-horizontal\" enctype=\'application/json\' action=\"/api/systemapi/products/addto\" enctype=\"multipart/form-data\" method=\"post\">-->        <div class=\"box-body\">            <div class=\"form-group\">                <label class=\"col-sm-2 control-label\">栏目</label>                <div class=\"col-sm-4\">                    <select class=\"form-control select2 select2-hidden-accessible\"  tabindex=\"-1\" aria-hidden=\"true\" name=\"typeid\">                        <option value=\"1\" selected=\"selected\">家居</option>                        <option value=\"2\">床品</option>                        <option value=\"3\">家饰</option>                        <option value=\"4\">布艺软装</option>                        <option value=\"5\">收纳</option>                        <option value=\"6\">新品</option>                        <!--<option value=\"7\">Washington</option>-->                    </select>                </div>            </div>            <div class=\"form-group\">                <label for=\"item_name\" class=\"col-sm-2 control-label\">商品名称</label>                <div class=\"col-sm-6\">                    <input type=\"text\" class=\"form-control\" name=\"name\" id=\"item_name\" >                </div>            </div>            <!--<div class=\"form-group\">-->                <!--<label for=\"item_branch\" class=\"col-sm-2 control-label\">品牌</label>-->                <!--<div class=\"col-sm-6\">-->                    <!--<input type=\"text\" class=\"form-control\"  name=\"item_branch\" id=\"item_branch\">-->                <!--</div>-->            <!--</div>-->            <!--<div class=\"form-group\">-->                <!--<label for=\"item_size\" class=\"col-sm-2 control-label\" >商品规格</label>-->                <!--<div class=\"col-sm-6\">-->                    <!--<input type=\"text\" class=\"form-control\" id=\"item_size\" name=\"item_size\">-->                <!--</div>-->            <!--</div>-->            <div class=\"form-group\">                <label for=\"item_price\" class=\"col-sm-2 control-label\"  >价格</label>                <div class=\"col-sm-6\">                    <input type=\"text\" class=\"form-control\" id=\"price\" name=\"item_price\">                </div>            </div>            <!--<div class=\"form-group\">-->                <!--<label for=\"form-control\" class=\"col-sm-2 control-label\">活动价格</label>-->                <!--<div class=\"col-sm-6\">-->                    <!--<input type=\"text\" class=\"form-control\" id=\"form-control\">-->                <!--</div>-->            <!--</div>-->            <div class=\"form-group\">                <label for=\"item_productimg\" class=\"col-sm-2 control-label\">商品图片</label>                <div class=\"col-sm-9\">                    <input type=\"file\" class=\"form-control file-loading\" name=\"picture\" id=\"item_productimg\" multiple>                </div>            </div>            <div class=\"form-group\">                <label for=\"item_description\" class=\"col-sm-2 control-label\">产品描述</label>                <div class=\"col-sm-9\">                    <textarea class=\"form-control\" id=\"item_description\" name=\"describeinfo\" rows=\"10\" placeholder=\"Enter ...\"></textarea>                </div>            </div>        </div>        <div class=\"box-footer\">            <button type=\"submit\" id=\"goback\" class=\"btn btn-default\">返回</button>            <button id=\"addsubmit\" class=\"btn btn-info pull-right\">添加</button>        </div>    </form>        <!-- /.box-body -->        <!-- /.box-footer --></div>"

/***/ }),
/* 1 */
/***/ (function(module, exports) {


const productmodel = {
    // productionAddajax(data) {
    //     console.log("123")
    //     return $.ajax({
    //         url: '/api/systemapi/productsAdd',
    //         type: 'POST',
    //         data: data,
    //     })
    // },
    //上传产品信息表单
    productAjaxSubmit(fn, router) {
        let options = {
            "success": (result, status, router) => {
                console.log(result)

                fn(result, router)
                return result
            },
            "type": "post",
            "resetForm": true,
            "dataType": "json"
        }
        $("#productForm").ajaxSubmit(options)
    },
    //获取产品列表信息
    productFindAll() {
        // console.log('456')
        return $.ajax({
            url: '/ssh1fs/list',
            type: 'get',
            data:{
                c_id:1
            },
            success: (result) => {
                console.log(result)
                return result
            }
        })
    },
    //获取对应产品列表信息
    productFindCid(option) {
        // console.log('456')
        return $.ajax({
            url: '/ssh1fs/list',
            type: 'get',
            data: option,
            success: (result) => {
                console.log(result)
                return result
            }
        })
    },
    //获取产品列表信息删除产品信息
    productremove(id, productImgName){
        return $.ajax({
            url: '/api/systemapi/products/find',
            type: 'delete',
            data: {
                id,
            },
            success: (result) => {
                if (result.ret) {
                    return result
                }
            },
            error: ()=>{
                return status;
            }
        })
    },
    productFindById(id){
        return $.ajax({
            url: `/api/systemapi/products/${id}`,
            type: 'get',
            data: {
                id,
            },
            success: (result) => {
                if (result.ret) {
                    return result
                }
            }
        })
    }

}
module.exports = productmodel



/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3)
const headerController = __webpack_require__(20)
// const navUtil = require('./utils/nav.util')
// navUtil.render()
headerController.render()


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sme_router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sme_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sme_router__);

const home = __webpack_require__(5);

const columnController = __webpack_require__(6);
const columnSetController = __webpack_require__(8);
const productAddController = __webpack_require__(10);
const productController = __webpack_require__(11);
const customerController = __webpack_require__(16);
const ordersController = __webpack_require__(18);

const router = new __WEBPACK_IMPORTED_MODULE_0_sme_router___default.a('router-prolist');

router.route('/home', (req, res, next) => {
    res.render(home)
});
// 生成私钥：
// ssh-keygen -t rsa -b 2048 -f private.key
//
// 生成公钥：
// openssl rsa -in private.key -pubout -outform PEM -out public.key


/*------栏目管理------*/
router.route('/column', (req, res, next) => {
    columnController.render({req, res, next, router})
    columnController.event()
});
/*------栏目设置------*/
router.route('/columnSet', (req, res, next) => {
    columnSetController.render({req, res, next, router})
    columnSetController.inputfile()
});

/*------商品管理------*/
router.route('/products', (req, res, next) => {
    productController.productListPos({req, res, next, router})
});


/*------商品添加------*/
router.route('/productAdd', (req, res, next) => {
    productController.productsAddPos({req, res, next, router})
});

/*------商品编辑------*/
router.route('/productEdit', (req, res, next) => {
    productController.productEditPos({req, res, next, router})
});


/*------用户管理------*/
router.route('/customer', (req, res, next) => {
    customerController.render({req, res, next, router})
    customerController.event()
});

/*------订单管理------*/
router.route('/orders', (req, res, next) => {
    ordersController.render({req, res, next, router})
    // ordersController.event()
});


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["sme-router"]=t():e["sme-router"]=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(6),a=n(7),u=function(){function e(t){r(this,e),this.matcher=t.matcher,this._matchedCount=0}return o(e,[{key:"_fireHandlers",value:function(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=this._getCache(r),i={body:t||o,query:r.query,params:r.params};(0,a.def)(i,"route",r.path),(0,a.def)(i,"url",r.url),!t&&o&&(i._id=r._id),r.handler(i),this._cacheBody(t,r)}}},{key:"_getCache",value:function(e){return(0,i.getCache)(e._id)}},{key:"_cacheBody",value:function(e,t){e&&(0,i.setCache)(t._id,e)}},{key:"getMatchedCount",value:function(){return this._matchedCount}},{key:"go",value:function(e,t){}},{key:"redirect",value:function(e,t){}},{key:"back",value:function(){}},{key:"stop",value:function(){}}]),e}();t.default=u},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(2),u=r(a),s=n(5),c=r(s),l=n(8),f=r(l),h=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"hash";if(o(this,e),this._mount=document.getElementById(t),!this._mount)throw new Error("Can not get mount point document.getElementById(#"+t+")...");this._subRouteView='<div id="__sub-route-view"></div>',this._subMount=null,this._isPassing=!1,this._cache={},this._middlewares=[],this._matcher=new u.default,this._history="hash"===n?new f.default({matcher:this._matcher}):new c.default({matcher:this._matcher})}return i(e,[{key:"render",value:function(e){this._isPassing?this._subMount.innerHTML=e:this._mount.innerHTML=e}},{key:"next",value:function(e){this._mount.innerHTML=e,this._isPassing=this._history.getMatchedCount()>1,this._subMount=document.querySelector("#__sub-route-view")}},{key:"subRoute",value:function(){return this._subRouteView}},{key:"use",value:function(e){this._middlewares.push(e)}},{key:"route",value:function(e,t){var n=this;this._matcher.add(e,function(r){if("*"!==e&&!r._id)for(var o=0;o<n._middlewares.length;o++)n._middlewares[o](r);t(r,n,n.next.bind(n))})}},{key:"go",value:function(e,t){this._isPassing=!1,this._history.go(e,t)}},{key:"redirect",value:function(e,t){this._isPassing=!1,this._history.redirect(e,t)}},{key:"back",value:function(){this._isPassing=!1,this._history.back()}},{key:"stop",value:function(){this._history.stop()}}]),e}();t.default=h},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(3),a=function(e){return e&&e.__esModule?e:{default:e}}(i),u=n(4),s=function(){function e(){r(this,e),this._routes=[],this._id=0}return o(e,[{key:"match",value:function(e){var t=[],n="",r=e.indexOf("?"),o=!0;r>-1&&(n=e.substr(r),e=e.slice(0,r));for(var i=0;i<this._routes.length;i++){var a=this._routes[i],s=a.reg.exec(e);if(s){if("*"!==a.path&&(o=!1),!o&&"*"===a.path)continue;t.push({_id:a._id,path:a.path,url:e+n,params:this._getParams(a.params,s),query:(0,u.parseQuery)(n),handler:a.handler})}}return t}},{key:"add",value:function(e,t){var n=this._toReg({path:e,handler:t});n._id=++this._id,this._routes.push(n)}},{key:"_toReg",value:function(e){return e.params=[],e.reg="*"===e.path?/[\w\W]*/i:(0,a.default)(e.path,e.params,{end:!1}),e}},{key:"_getParams",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1],n={},r=0;r<e.length;r++)n[e[r].name]=t[r+1];return n}}]),e}();t.default=s},function(e,t){function n(e,t){for(var n,r=[],o=0,u=0,s="",c=t&&t.delimiter||p,l=t&&t.delimiters||d,f=!1;null!==(n=y.exec(e));){var h=n[0],v=n[1],_=n.index;if(s+=e.slice(u,_),u=_+h.length,v)s+=v[1],f=!0;else{var m="",b=e[u],g=n[2],w=n[3],k=n[4],x=n[5];if(!f&&s.length){var E=s.length-1;l.indexOf(s[E])>-1&&(m=s[E],s=s.slice(0,E))}s&&(r.push(s),s="",f=!1);var O=""!==m&&void 0!==b&&b!==m,j="+"===x||"*"===x,P="?"===x||"*"===x,C=m||c,M=w||k;r.push({name:g||o++,prefix:m,delimiter:C,optional:P,repeat:j,partial:O,pattern:M?a(M):"[^"+i(C)+"]+?"})}}return(s||u<e.length)&&r.push(s+e.substr(u)),r}function r(e,t){return o(n(e,t))}function o(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",i=r&&r.encode||encodeURIComponent,a=0;a<e.length;a++){var u=e[a];if("string"!=typeof u){var s,c=n?n[u.name]:void 0;if(Array.isArray(c)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but got array');if(0===c.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var l=0;l<c.length;l++){if(s=i(c[l]),!t[a].test(s))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'"');o+=(0===l?u.prefix:u.delimiter)+s}}else if("string"!=typeof c&&"number"!=typeof c&&"boolean"!=typeof c){if(!u.optional)throw new TypeError('Expected "'+u.name+'" to be '+(u.repeat?"an array":"a string"));u.partial&&(o+=u.prefix)}else{if(s=i(String(c)),!t[a].test(s))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but got "'+s+'"');o+=u.prefix+s}}else o+=u}return o}}function i(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function a(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function u(e){return e&&e.sensitive?"":"i"}function s(e,t){if(!t)return e;var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return e}function c(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(h(e[o],t,n).source);return new RegExp("(?:"+r.join("|")+")",u(n))}function l(e,t,r){return f(n(e,r),t,r)}function f(e,t,n){n=n||{};for(var r=n.strict,o=!1!==n.end,a=i(n.delimiter||p),s=n.delimiters||d,c=[].concat(n.endsWith||[]).map(i).concat("$").join("|"),l="",f=!1,h=0;h<e.length;h++){var y=e[h];if("string"==typeof y)l+=i(y),f=h===e.length-1&&s.indexOf(y[y.length-1])>-1;else{var v=i(y.prefix),_=y.repeat?"(?:"+y.pattern+")(?:"+v+"(?:"+y.pattern+"))*":y.pattern;t&&t.push(y),y.optional?y.partial?l+=v+"("+_+")?":l+="(?:"+v+"("+_+"))?":l+=v+"("+_+")"}}return o?(r||(l+="(?:"+a+")?"),l+="$"===c?"$":"(?="+c+")"):(r||(l+="(?:"+a+"(?="+c+"))?"),f||(l+="(?="+a+"|"+c+")")),new RegExp("^"+l,u(n))}function h(e,t,n){return e instanceof RegExp?s(e,t):Array.isArray(e)?c(e,t,n):l(e,t,n)}e.exports=h,e.exports.parse=n,e.exports.compile=r,e.exports.tokensToFunction=o,e.exports.tokensToRegExp=f;var p="/",d="./",y=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g")},function(e,t,n){"use strict";function r(e){var t={};return(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach(function(e){var n=e.split("="),r=o(n,2),i=r[0],a=r[1],u=[decodeURIComponent(i),a?decodeURIComponent(a):null],s=u[0],c=u[1];t[s]=c}),t):null}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.parseQuery=r},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),s=function(e){return e&&e.__esModule?e:{default:e}}(u),c=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._init(),window.addEventListener("load",n._listen),window.addEventListener("popstate",n._listen),n}return i(t,e),a(t,[{key:"_init",value:function(){var e=this;this._listen=function(t){var n=""+location.pathname+location.search,r=e.matcher.match(n);e._matchedCount=r.length,e._fireHandlers(r,t.state)}}},{key:"_routeTo",value:function(e,t){var n=this.matcher.match(e);this._matchedCount=n.length,this._fireHandlers(n,t)}},{key:"go",value:function(e,t){history.pushState(t,"",e),this._routeTo(e,t)}},{key:"redirect",value:function(e,t){history.replaceState(t,"",e),this._routeTo(e,t)}},{key:"back",value:function(){history.go(-1)}},{key:"stop",value:function(){window.removeEventListener("load",this._listen),window.removeEventListener("popstate",this._listen)}}]),t}(s.default);t.default=c},function(e,t,n){"use strict";function r(e,t){t&&i.setItem(""+a+e,JSON.stringify(t))}function o(e){try{var t=i.getItem(""+a+e);return t?JSON.parse(t):null}catch(e){throw new Error("parse body err")}}Object.defineProperty(t,"__esModule",{value:!0}),t.setCache=r,t.getCache=o;var i=sessionStorage,a="smer"},function(e,t,n){"use strict";function r(e,t,n){Object.defineProperty(e,t,{writable:!1,enumerable:!0,value:n})}Object.defineProperty(t,"__esModule",{value:!0}),t.def=r},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),s=function(e){return e&&e.__esModule?e:{default:e}}(u),c=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._cache={},n._init(),window.addEventListener("load",n._listen),window.addEventListener("hashchange",n._listen),n}return i(t,e),a(t,[{key:"_getHash",value:function(){return location.hash.slice(1)}},{key:"_init",value:function(){var e=this;this._listen=function(t){var n=e._getHash(),r=e.matcher.match(n);e._matchedCount=r.length,e._fireHandlers(r,e._cache[n])}}},{key:"go",value:function(e,t){this._cache[e]=t,location.hash=""+e}},{key:"redirect",value:function(e,t){var n=location.href,r=n.indexOf("#");e=r>0?n.slice(0,r)+"#"+e:n.slice(0,0)+"#"+e,this._cache[e]=t,location.replace(e)}},{key:"back",value:function(){history.go(-1)}},{key:"stop",value:function(){window.removeEventListener("load",this._listen),window.removeEventListener("hashchange",this._listen)}}]),t}(s.default);t.default=c}])});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "<div>    欢迎使用简单点网站内容管理系统版本V0.01</div>"

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {


const productListTPL = __webpack_require__(7)

module.exports = {
    render( {res, router} ){
        let tpl = template.render(productListTPL)
        res.render(tpl)
    },
    event(){
        $(".cus-status").on('click',function(event){
            if($(event.target).hasClass('btn-danger')){
                $(event.target).removeClass('btn-danger').addClass('btn-success').html('点击开启')
            }else{
                $(event.target).removeClass('btn-success').addClass('btn-danger').html('点击关闭')
            }
        })
    },

    // async render( {res, router} ){
    //     let productAll = await modelproduct.productFindAll()
    //     console.log(productAll)
    //     let tpl = template.render(productListTPL, productAll)
    //     res.render(tpl)
    // }
}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "<!-----------商品表-----------><div class=\"row\">    <div class=\"col-xs-12\">        <div class=\"box box-success\">            <div class=\"box-header\">                <h3 class=\"box-title col-sm-3 col-xs-3\">栏目管理</h3>                <div class=\"box-column col-sm-3 col-xs-6\">                    <div class=\"\">                        <select class=\"form-control select2 select2-hidden-accessible\"  tabindex=\"-1\" aria-hidden=\"true\">                            <option selected=\"selected\">栏目一</option>                            <option>栏目二</option>                            <option disabled=\"disabled\">栏目三</option>                            <option>Delaware</option>                            <option>Tennessee</option>                            <option>Texas</option>                            <option>Washington</option>                        </select>                    </div>                </div>                <div class=\"box-addpro col-sm-3 col-xs-3\">                    <a href=\"#/productAdd\">                        <button type=\"button\" class=\"btn btn-block btn-primary btn-sm\">添加栏目</button>                    </a>                </div>                <div class=\"input-group input-group-sm box-search col-sm-3 col-xs-12\">                    <input type=\"text\" name=\"table_search\" class=\"form-control pull-right\" placeholder=\"Search\">                    <div class=\"input-group-btn\">                        <button type=\"submit\" class=\"btn btn-default\"><i class=\"fa fa-search\"></i></button>                    </div>                </div>            </div>            <!-- /.box-header -->            <div class=\"box-body bottom-border table-responsive no-padding\">                <table class=\"prolist table table-hover\">                    <thead>                    <tr>                        <th>栏目id</th>                        <th>栏目名</th>                        <th>子栏目</th>                        <th>状态</th>                        <th colspan=\"2\">操作</th>                    </tr>                    </thead>                    <tbody>                    <tr>                        <td>1</td>                        <td>家具</td>                        <td>10</td>                        <td><button type=\"button\" class=\"cus-status btn btn-block btn-danger table-onclick\">点击关闭</button></td>                        <td><a href=\"\" class=\"btn btn-block btn-primary table-onclick\">子栏目管理</a></td>                        <td><a href=\"#/columnSet\" class=\"btn btn-block btn-primary table-onclick\">栏目设置</a></td>                    </tr>                    {{each}}                    <tr>                        <td>63548</td>                        <td><img src=\"/static/images/h-114986-1.jpg\"/></td>                        <td>{{$value.item_name}}</td>                        <td>OMEGA 欧米茄</td>                        <td>{{$value.item_updataTime}}</td>                        <td>发布中</td>                        <td><button type=\"button\" class=\"btn btn-block btn-danger\">删除</button></td>                        <td>                            <a href=\"#/editpro\">                                <button type=\"button\" class=\"btn btn-block btn-success\">编辑</button>                            </a>                        </td>                    </tr>                    {{/each}}                    </tbody>                </table>            </div>            <!-- /.box-body -->        </div>        <!-- /.box -->    </div></div><!------------分页------------><div class=\"row\">    <div class=\"col-sm-5\">        <div class=\"dataTables_info\" id=\"example2_info\" role=\"status\" aria-live=\"polite\">Showing 31 to 40 of 57 entries</div>    </div>    <div class=\"col-sm-7\">        <div class=\"dataTables_paginate paging_simple_numbers\" id=\"example2_paginate\">            <ul class=\"pagination\">                <li class=\"paginate_button previous\" id=\"example2_previous\"><a href=\"#\" aria-controls=\"example2\" data-dt-idx=\"0\" tabindex=\"0\">Previous</a></li>                <li class=\"paginate_button \"><a href=\"#\" aria-controls=\"example2\" data-dt-idx=\"1\" tabindex=\"0\">1</a></li>                <li class=\"paginate_button \"><a href=\"#\" aria-controls=\"example2\" data-dt-idx=\"2\" tabindex=\"0\">2</a></li>                <li class=\"paginate_button \"><a href=\"#\" aria-controls=\"example2\" data-dt-idx=\"3\" tabindex=\"0\">3</a></li>                <li class=\"paginate_button active\"><a href=\"#\" aria-controls=\"example2\" data-dt-idx=\"4\" tabindex=\"0\">4</a></li>                <li class=\"paginate_button \"><a href=\"#\" aria-controls=\"example2\" data-dt-idx=\"5\" tabindex=\"0\">5</a></li>                <li class=\"paginate_button \"><a href=\"#\" aria-controls=\"example2\" data-dt-idx=\"6\" tabindex=\"0\">6</a></li>                <li class=\"paginate_button next\" id=\"example2_next\"><a href=\"#\" aria-controls=\"example2\" data-dt-idx=\"7\" tabindex=\"0\">Next</a></li>            </ul>        </div>    </div></div>"

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {


const TPL = __webpack_require__(9)

module.exports = {

    render( {res, router} ){
        let tpl = template.render(TPL)
        res.render(tpl)
    },
    inputfile(){
        // $(document).on('ready', function() {
            $("#inputImg").fileinput({
                language: 'zh',
                // showUpload: false,
                dropZoneEnabled: false,
                aallowedFileExtensions: ["jpg", "png", "gif"],
                maxFileCount: 1,
                // mainClass: "input-group-lg"
            });
        // });
        // $('#inputImg').fileinput({
        //     language: 'zh',
        //     showCaption: false,
        //     dropZoneEnabled: false,
        //     aallowedFileExtensions: ["jpg", "png", "gif"],
        //     maxFileCount: 5,
        //     mainClass: "input-group-lg"
        // })
    },
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "<div class=\"box box-info\">    <div class=\"box-header with-border\">        <h3 class=\"box-title\">编辑商品信息</h3>    </div>    <!-- /.box-header -->    <!-- form start -->    <form id=\"productInfo\" class=\"form-horizontal\">        <div class=\"box-body\">            <div class=\"form-group\">                <label for=\"columnName\" class=\"col-sm-2 control-label\">栏目名称</label>                <div class=\"col-sm-6\">                    <input type=\"text\" class=\"form-control\" name=\"columnName\" id=\"columnName\" >                </div>            </div>            <div class=\"form-group\">                <label for=\"keyWord\" class=\"col-sm-2 control-label\">关键字</label>                <div class=\"col-sm-6\">                    <input type=\"text\" class=\"form-control\"  name=\"keyWord\" id=\"keyWord\">                </div>            </div>            <div class=\"form-group\">                <label for=\"inputImg\" class=\"col-sm-2 control-label\">栏目图片</label>                <div class=\"col-sm-6\">                    <!--<input type=\"file\" id=\"inputImg\" name=\"inputImg\" class =\"form-control file-loading\"   data-show-preview =\"false\" />-->                    <input id=\"inputImg\" name=\"inputImg[]\" type=\"file\" multiple>                </div>            </div>            <div class=\"form-group\">                <label class=\"col-sm-2 control-label\">栏目描述</label>                <div class=\"col-sm-10\">                    <textarea class=\"form-control\" id=\"column_description\" name=\"column_description\" rows=\"5\" placeholder=\"Enter ...\"></textarea>                </div>            </div>        </div>        <div class=\"box-footer\">            <button type=\"blacksubmit\" id=\"addback\" class=\"btn btn-default\">返回</button>            <button id=\"savesubmit\" class=\"btn btn-info pull-right\">保存</button>        </div>    </form>        <!-- /.box-body -->        <!-- /.box-footer --></div>"

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

const tplproductAdd = __webpack_require__(0)
const modelproduct = __webpack_require__(1)
const commodityAddControllors = {
    productsAddRender({res, req ,router}){
        res.render(tplproductAdd)
        this.inputfile()
        $('#goback').on('onclick', () => {
            router.back()
        })
        this.addproduct({res, req ,router})
    },
    inputfile(){
        $('#item_productimg').fileinput({
            language: 'zh',
            initialPreview :[],
            // uploadAsync: false,
            showUpload:false,
            // showCaption: false,
            // dropZoneEnabled: false,
            allowedPreviewTypes : [ 'image' ],
            aallowedFileExtensions: ["jpg", "png", "gif"],
            maxFileCount: 5,
        })
    },
    addproduct({res, req ,router}) {
        $('#addsubmit').on('click', async () => {
            //设置禁止触发默认事件，禁止表单的默认提交
            event.preventDefault()
            let that = commodityAddControllors
            let options = {
                "success" : (result, status, router) => {
                    console.log(result)
                    that.routerBack(result, status, router)
                },
                "type":"post",
                "resetForm" : true,
                "dataType" : "json"
            }
            $("#productForm").ajaxSubmit(options)
        })
    },

    routerBack(result,status, router) {
        if (result.ret) {
            alert('发布成功！')
            router.back()
        }else{
            console.log(router)
            alert('发布失败！')
        }
    },
}

module.exports = commodityAddControllors

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

const modelproduct = __webpack_require__(1)

const productionTPL = __webpack_require__(12)
const productListTPL = __webpack_require__(13)
const tplproductAdd = __webpack_require__(0)
const productEditTPL = __webpack_require__(14)

const toolsUtil = __webpack_require__(15)
const wsCache = new WebStorageCache();

const productsController = {

    async productListPos({res, router}){

        await productsController.renderProductsData({res, router});
        await productsController.columnSelection()
    },

    //渲染产品管理页面设置路由跳转加载功能方法
    async renderProductsData({res, router}){
        // console.log('123')
        let productAll = await modelproduct.productFindAll()
        console.log(productAll)
        let tpl = await template.render(productionTPL, productAll)
        res.render(tpl)
        $('#productsAdd').on('click', () => {
            router.go('/productAdd')
        })
        $('.productEdit').on('click', function() {
            let id = $(this).attr('proid')
            router.go('/productEdit',{ id })
        })
        productsController.removePos({res, router})
        //调用分页组件
        productsController.paginate()
    },

    /*------------------产品上传功能接口---------------------*/
    productsAddPos({res, req ,router}){
        res.render(tplproductAdd)
        $('#goback').on('onclick', () => {
            router.back()
        })
        productsController.addproduct({res, req ,router})

        $('#item_productimg').fileinput({
            language: 'zh',

            // uploadAsync: false,
            showUpload:false,
            // showCaption: false,
            // dropZoneEnabled: false,
            allowedPreviewTypes : [ 'image' ],
            aallowedFileExtensions: ["jpg", "png", "gif"],
            maxFileCount: 5,
        })
    },


    /*---------------------产品修改和编辑功能接口-----------------------*/
    async productEditPos({req,res,router}){
        let data = await modelproduct.productFindById(req.body.id)
        console.log(data)
        let tpl = template.render(productEditTPL, data)
        res.render(tpl)
        let productArry = []
        for(let i=0;i < data.item_productimg.length;i++){
            if(data.item_productimg!=""){
                productArry.push(`<img src="http://localhost:3000/uploads/${data.item_productimg[i]}" width="100%"/>`)
            }
        }
        console.log(data.item_productimg.length,data.item_productimg,productArry)

        //设置图片上传拆件的初始图片
        $('#item_productimg').fileinput({
            language: 'zh',
            initialPreview : productArry,
            // uploadAsync: false,
            showUpload:false,
            // showCaption: false,
            // dropZoneEnabled: false,
            allowedPreviewTypes : [ 'image' ],
            aallowedFileExtensions: ["jpg", "png", "gif"],
            maxFileCount: 5,
        })
        //表单提交
        productsController.addproduct({res, req ,router})

        //返回按钮
        $('#goback').on('onclick', () => {
            router.back()
        })
    },


    //产品删除接口功能
    removePos({res, router}){
        let that = productsController
        $('.remove').on('click', async function () {
            console.log("123")
            let id = $(this).attr('proid')
            if (window.confirm('真的要删除吗')) {
                await modelproduct.productremove(id)
                productsController.renderProductsData({res, router})
            }
        })
    },


    /*------------商品表单信息上传修改和添加公用---------------*/
    addproduct({res, req ,router}) {
        let that = productsController
        $('#addsubmit').on('click', async () => {

            //设置禁止触发默认事件，禁止表单的默认提交
            event.preventDefault()
                let options = {
                "success" : (result, status) => {
                    console.log(result)
                    console.log(router)
                    that.routerBack(result, status, router)
                },
                "type":"post",
                "resetForm" : true,
                "dataType" : "json"
            }
            $("#productForm").ajaxSubmit(options)
        })
    },


    /*--------跳转-------------*/
    routerBack(result,status, router) {
        if (result.ret) {
            alert('发布成功！')
            router.back()
        }else{
            console.log(router)
            alert('发布失败！')
        }
    },

    /*---------------分页控制-----------------*/
    paginate(){
        let options = {
            containerClass:"pagination",
            currentPage: 1,//当前页
            totalPages: 10,//总页数$("#totalpage").val()
            numberofPages: 5,//显示的页数
        }
        $("#paginate").bootstrapPaginator(options)
    },

    /*----------栏目控制----------*/
    columnSelection(){
        console.log($('.product-select'))
        $('.product-select').change( async function(){
            let cid = $(this).val()
            let option = {
                c_id : cid
            }
            let result = await modelproduct.productFindCid(option)
            if(result.ret){

            }else{
                alert
            }
            console.log(result)
            let data = result.data
            console.log(data)
            let tpl = template.render(productListTPL, {msg:data.msg})
            console.log(tpl)
            $('tbody').html(tpl)
        })
    }
}
module.exports = productsController

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "<!-----------商品表-----------><div class=\"row\">    <div class=\"col-xs-12\">        <div class=\"box box-success\">            <div class=\"box-header\">                <h3 class=\"box-title col-sm-3 col-xs-3\">商品列表</h3>                <div class=\"box-column col-sm-3 col-xs-6\">                    <div class=\"\">                        <select class=\"form-control product-select select2 select2-hidden-accessible\" tabindex=\"-1\" aria-hidden=\"true\">                            <option value=\"1\" selected=\"selected\">家居</option>                            <option value=\"2\">床品</option>                            <option value=\"3\">家饰</option>                            <option value=\"4\">布艺软装</option>                            <option value=\"5\">收纳</option>                            <option value=\"6\">新品</option>                            <!--<option value=\"7\">Washington</option>-->                        </select>                    </div>                </div>                <div class=\"box-addpro col-sm-3 col-xs-3\">                    <!--<a href=\"#/productAdd\">-->                    <a id=\"productsAdd\" class=\"btn btn-block btn-primary btn-sm productsAdd\">添加商品</a>                    <!--</a>-->                </div>                <div class=\"input-group input-group-sm box-search col-sm-3 col-xs-12\">                    <input type=\"text\" name=\"table_search\" class=\"form-control pull-right\" placeholder=\"Search\">                    <div class=\"input-group-btn\">                        <button type=\"submit\" class=\"btn btn-default\">                            <i class=\"fa fa-search\"></i>                        </button>                    </div>                </div>            </div>            <!-- /.box-header -->            <div class=\"box-body bottom-border table-responsive no-padding\">                <table class=\"prolist table table-hover\">                    <thead>                        <tr>                            <th>ID</th>                            <th>缩略图</th>                            <th>品名</th>                            <th>品牌</th>                            <th>发布时间</th>                            <th>状态</th>                            <th colspan=\"2\">操作</th>                        </tr>                    </thead>                    <tbody>                        {{each msg}}                        <tr>                            <td>{{$value.id}}</td>                            <td>                                <!-- <img src=\"http://localhost:3000/uploads/{{$value.picture}}\" /> -->                            </td>                            <!--<td><img src=\"http://localhost:3000/uploads/\"/></td>-->                            <td>{{$value.name}}</td>                            <td>OMEGA 欧米茄</td>                            <td></td>                            <!--<td>{{$value.item_updataTime}}</td>-->                            <td>发布中</td>                            <td>                                <button type=\"button\" class=\"remove btn btn-block btn-danger\" proimg=\"{{$value.picture}}\" proid=\"{{$value.id}}\">删除</button>                            </td>                            <td>                                <button type=\"button\" class=\"productEdit btn btn-block btn-success\" proid=\"{{$value.id}}\">编辑</button>                            </td>                        </tr>                        {{/each}}                    </tbody>                </table>            </div>            <!-- /.box-body -->        </div>        <!-- /.box -->    </div></div><!------------分页------------><div class=\"row\">    <div class=\"col-sm-5\">        <div class=\"dataTables_info\" id=\"example2_info\" role=\"status\" aria-live=\"polite\">Showing 31 to 40 of 57 entries</div>    </div>    <div class=\"col-sm-7\">        <div id=\"paginate\" style=\"text-align: center\"></div>    </div></div>"

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "{{each msg}}<tr>    <td>{{$value.id}}</td>    <td><img src=\"http://localhost:3000/uploads/{{$value.picture}}\"/></td>    <!--<td><img src=\"http://localhost:3000/uploads/\"/></td>-->    <td>{{$value.name}}</td>    <td>OMEGA 欧米茄</td>    <td></td>    <!--<td>{{$value.item_updataTime}}</td>-->    <td>发布中</td>    <td><button type=\"button\"class=\"remove btn btn-block btn-danger\" proimg=\"{{$value.picture}}\" proid=\"{{$value.id}}\">删除</button></td>    <td><button type=\"button\" class=\"productEdit btn btn-block btn-success\" proid=\"{{$value.id}}\">编辑</button></td></tr>{{/each}}"

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "<div class=\"box box-info\">    <div class=\"box-header with-border\">        <h3 class=\"box-title\">编辑商品信息</h3>    </div>    <!-- /.box-header -->    <!-- form start -->    <form id=\"productForm\" class=\"form-horizontal\" action=\"/api/systemapi/products/updated\" enctype=\"multipart/form-data\" method=\"post\">        <div class=\"box-body\">            <div class=\"form-group\">                <label class=\"col-sm-2 control-label\">栏目</label>                <div class=\"col-sm-4\">                    <select class=\"form-control select2 select2-hidden-accessible\"  tabindex=\"-1\" aria-hidden=\"true\">                        <option value=\"1\" selected=\"selected\">家居</option>                        <option value=\"2\">床品</option>                        <option value=\"3\">家饰</option>                        <option value=\"4\">布艺软装</option>                        <option value=\"5\">收纳</option>                        <option value=\"6\">新品</option>                        <!--<option value=\"7\">Washington</option>-->                    </select>                </div>            </div>            <div class=\"form-group\">                <label for=\"item_name\" class=\"col-sm-2 control-label\">商品名称</label>                <div class=\"col-sm-6\">                    <input type=\"text\" class=\"form-control\" name=\"item_name\" id=\"item_name\" value=\"{{item_name}}\">                </div>            </div>            <div class=\"form-group\">                <label for=\"item_branch\" class=\"col-sm-2 control-label\">品牌</label>                <div class=\"col-sm-6\">                    <input type=\"text\" class=\"form-control\"  name=\"item_branch\" id=\"item_branch\" value=\"{{item_branch}}\">                </div>            </div>            <div class=\"form-group\">                <label for=\"item_size\" class=\"col-sm-2 control-label\" >商品规格</label>                <div class=\"col-sm-6\">                    <input type=\"text\" class=\"form-control\" id=\"item_size\" name=\"item_size\" value=\"{{item_size}}\">                </div>            </div>            <div class=\"form-group\">                <label for=\"item_price\" class=\"col-sm-2 control-label\"  >价格</label>                <div class=\"col-sm-6\">                    <input type=\"text\" class=\"form-control\" id=\"item_price\" name=\"item_price\" value=\"{{item_price}}\">                </div>            </div>            <div class=\"form-group\">                <label for=\"item_productimg\" class=\"col-sm-2 control-label\">商品图片</label>                <div class=\"col-sm-9\">                    <input type=\"file\" class=\"form-control file-loading\" name=\"item_productimg\" id=\"item_productimg\" multiple>                </div>            </div>            <div class=\"form-group\">                <label for=\"item_description\" class=\"col-sm-2 control-label\">产品描述</label>                <div class=\"col-sm-10\">                    <textarea class=\"form-control\" id=\"item_description\" name=\"item_description\" rows=\"8\" placeholder=\"Enter ...\">{{item_description}}                    </textarea>                </div>            </div>            <input type=\"hidden\" name=\"filename\" value=\"{{item_productimg}}\">            <input type=\"hidden\" name=\"id\" value=\"{{_id}}\">        </div>        <div class=\"box-footer\">            <button type=\"submit\" id=\"goback\" class=\"btn btn-default\">返回</button>            <button id=\"addsubmit\" class=\"btn btn-info pull-right\">添加</button>        </div>    </form>        <!-- /.box-body -->        <!-- /.box-footer --></div>"

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = {
  hashParse() {
    let query = {}
    let hash = location.hash.slice(1)
    if (hash.indexOf('?') != -1) {
      let queryString = hash.substr(hash.indexOf('?')+1)
      let queryArray = queryString.split('&')
      queryArray.forEach((value, index) => {
        let tempArray = value.split('=')
        query[tempArray[0]] = tempArray[1]
      })
    }
    return query
  }
}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

//
// const modelproduct = require('../models/productAdd.model')
const productListTPL = __webpack_require__(17)

module.exports = {
    render( {res, router} ){
        let tpl = template.render(productListTPL)
        res.render(tpl)
    },
    event(){
        $(".cus-status").on('click',function(event){
            if($(event.target).hasClass('btn-danger')){
                $(event.target).removeClass('btn-danger').addClass('btn-success').html('点击启用')
            }else{
                $(event.target).removeClass('btn-success').addClass('btn-danger').html('点击禁用')
            }
        })
    },

    // async render( {res, router} ){
    //     let productAll = await modelproduct.productFindAll()
    //     console.log(productAll)
    //     let tpl = template.render(productListTPL, productAll)
    //     res.render(tpl)
    // }
}

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "<!-----------商品表-----------><div class=\"row\">    <div class=\"col-xs-12\">        <div class=\"box box-success\">            <div class=\"box-header\">                <h3 class=\"box-title col-sm-3 col-xs-3\">用户列表</h3>                <div class=\"box-column col-sm-3 col-xs-6\">                    <div class=\"\">                        <select class=\"form-control select2 select2-hidden-accessible\"  tabindex=\"-1\" aria-hidden=\"true\">                            <option selected=\"selected\">栏目一</option>                            <option>栏目二</option>                            <option disabled=\"disabled\">栏目三</option>                            <option>Delaware</option>                            <option>Tennessee</option>                            <option>Texas</option>                            <option>Washington</option>                        </select>                    </div>                </div>                <div class=\"input-group input-group-sm box-search col-sm-3 col-xs-12\">                    <input type=\"text\" name=\"table_search\" class=\"form-control pull-right\" placeholder=\"Search\">                    <div class=\"input-group-btn\">                        <button type=\"submit\" class=\"btn btn-default\"><i class=\"fa fa-search\"></i></button>                    </div>                </div>            </div>            <!-- /.box-header -->            <div class=\"box-body bottom-border table-responsive no-padding\">                <table class=\"prolist table table-hover\">                    <thead>                    <tr>                        <th>ID</th>                        <th>缩略图</th>                        <th>手机号</th>                        <th>注册时间</th>                        <th>状态</th>                        <th colspan=\"3\">操作</th>                    </tr>                    </thead>                    <tbody>                        <tr>                            <td class=\"uid\">010101</td>                            <td><img src=\"/static/images/avatar5.png\"/></td>                            <td>13568974584</td>                            <td>2018-06-16</td>                            <td><button type=\"button\" class=\"cus-status btn btn-block btn-danger table-onclick\">点击禁用</button></td>                            <td><a href=\"#/cus_info_edit\" class=\"btn btn-block btn-primary table-onclick\" >信息修改</a></td>                            <td><a href=\"#/cus_info_edit\" class=\"btn btn-block btn-primary table-onclick\" >购物车</a></td>                            <td><a href=\"#/cus_recording_history\" class=\"btn btn-block btn-primary table-onclick\">订单记录</a></td>                        </tr>                    </tbody>                </table>            </div>            <!-- /.box-body -->        </div>        <!-- /.box -->    </div></div><!------------分页------------><div class=\"row\">    <div class=\"col-sm-5\">        <div class=\"dataTables_info\" id=\"example2_info\" role=\"status\" aria-live=\"polite\">Showing 31 to 40 of 57 entries</div>    </div>    <div class=\"col-sm-7\">        <div class=\"dataTables_paginate paging_simple_numbers\" id=\"example2_paginate\">            <ul class=\"pagination\">                <li class=\"paginate_button previous\" id=\"example2_previous\"><a href=\"#\" aria-controls=\"example2\" data-dt-idx=\"0\" tabindex=\"0\">Previous</a></li>                <li class=\"paginate_button \"><a href=\"#\" aria-controls=\"example2\" data-dt-idx=\"1\" tabindex=\"0\">1</a></li>                <li class=\"paginate_button \"><a href=\"#\" aria-controls=\"example2\" data-dt-idx=\"2\" tabindex=\"0\">2</a></li>                <li class=\"paginate_button \"><a href=\"#\" aria-controls=\"example2\" data-dt-idx=\"3\" tabindex=\"0\">3</a></li>                <li class=\"paginate_button active\"><a href=\"#\" aria-controls=\"example2\" data-dt-idx=\"4\" tabindex=\"0\">4</a></li>                <li class=\"paginate_button \"><a href=\"#\" aria-controls=\"example2\" data-dt-idx=\"5\" tabindex=\"0\">5</a></li>                <li class=\"paginate_button \"><a href=\"#\" aria-controls=\"example2\" data-dt-idx=\"6\" tabindex=\"0\">6</a></li>                <li class=\"paginate_button next\" id=\"example2_next\"><a href=\"#\" aria-controls=\"example2\" data-dt-idx=\"7\" tabindex=\"0\">Next</a></li>            </ul>        </div>    </div></div>"

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

const ordersTPL = __webpack_require__(19)
module.exports = {
    render( {res, router} ){
        let tpl = template.render(ordersTPL)
        res.render(tpl)
    },
    // event(){
    //     $(".cus-status").on('click',function(event){
    //         if($(event.target).hasClass('btn-danger')){
    //             $(event.target).removeClass('btn-danger').addClass('btn-success').html('点击启用')
    //         }else{
    //             $(event.target).removeClass('btn-success').addClass('btn-danger').html('点击禁用')
    //         }
    //     })
    // },
}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "<!-----------商品表-----------><div class=\"row\">    <div class=\"col-xs-12\">        <div class=\"box box-success\">            <div class=\"box-header\">                <h3 class=\"box-title col-sm-3 col-xs-3\">订单信息</h3>                <div class=\"box-column col-sm-3 col-xs-6\">                    <div class=\"\">                        <select class=\"form-control select2 select2-hidden-accessible\"  tabindex=\"-1\" aria-hidden=\"true\">                            <option selected=\"selected\">全部订单</option>                            <option>完结订单</option>                            <option>未完结订单</option>                        </select>                    </div>                </div>                <div class=\"input-group input-group-sm box-search col-sm-3 col-xs-12\">                    <input type=\"text\" name=\"table_search\" class=\"form-control pull-right\" placeholder=\"请输入订单号查询\">                    <div class=\"input-group-btn\">                        <button type=\"submit\" class=\"btn btn-default\"><i class=\"fa fa-search\"></i></button>                    </div>                </div>            </div>            <!-- /.box-header -->            <div class=\"box-body bottom-border table-responsive no-padding\">                <table class=\"prolist table table-hover\">                    <thead>                    <tr>                        <th>订单编号</th>                        <th>时间</th>                        <th>状态</th>                        <th>操作</th>                    </tr>                    </thead>                    <tbody>                        <tr>                            <td class=\"uid\">1231dfdfsae010101</td>                            <td>2018-06-16-14-25-42</td>                            <td>已完结</td>                            <td><a href=\"#/cus_info_edit\" class=\"btn btn-block btn-primary table-onclick\" >查看</a></td>                        </tr>                    </tbody>                </table>            </div>            <!-- /.box-body -->        </div>        <!-- /.box -->    </div></div><!------------分页------------><div class=\"row\">    <div class=\"col-sm-5\">        <div class=\"dataTables_info\" id=\"example2_info\" role=\"status\" aria-live=\"polite\">Showing 31 to 40 of 57 entries</div>    </div>    <div class=\"col-sm-7\">        <div class=\"dataTables_paginate paging_simple_numbers\" id=\"example2_paginate\">            <ul class=\"pagination\">                <li class=\"paginate_button previous\" id=\"example2_previous\"><a href=\"#\" aria-controls=\"example2\" data-dt-idx=\"0\" tabindex=\"0\">Previous</a></li>                <li class=\"paginate_button \"><a href=\"#\" aria-controls=\"example2\" data-dt-idx=\"1\" tabindex=\"0\">1</a></li>                <li class=\"paginate_button \"><a href=\"#\" aria-controls=\"example2\" data-dt-idx=\"2\" tabindex=\"0\">2</a></li>                <li class=\"paginate_button \"><a href=\"#\" aria-controls=\"example2\" data-dt-idx=\"3\" tabindex=\"0\">3</a></li>                <li class=\"paginate_button active\"><a href=\"#\" aria-controls=\"example2\" data-dt-idx=\"4\" tabindex=\"0\">4</a></li>                <li class=\"paginate_button \"><a href=\"#\" aria-controls=\"example2\" data-dt-idx=\"5\" tabindex=\"0\">5</a></li>                <li class=\"paginate_button \"><a href=\"#\" aria-controls=\"example2\" data-dt-idx=\"6\" tabindex=\"0\">6</a></li>                <li class=\"paginate_button next\" id=\"example2_next\"><a href=\"#\" aria-controls=\"example2\" data-dt-idx=\"7\" tabindex=\"0\">Next</a></li>            </ul>        </div>    </div></div>"

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

const headerTpl = __webpack_require__(21)
const userModel = __webpack_require__(22)
var wsCache = new WebStorageCache();

module.exports = {
    async render() {
        this.renderTpl({
            greeting: '',
            isSignin: false
        })

        this.bindEvent()
        // this.isSignin()
    },

    bindEvent() {
        $('#click-btn').on('click', (e) => {
            // if ($(e.target).attr('id') === 'btn-signin') {
            //     $('#user-submit-in').on('click', async() => {
            //         let {username, password} = {
            //             username: $('#username').val(),
            //             password: $('#password').val()
            //         }
            //
            //         let result = await userModel.sign(option, 'signin')
            //         if (result.ret) {
            //             // 将token保存到localstorage里
            //             wsCache.set('token', result.data.token)
            //
            //             this.renderTpl({
            //                 greeting: '你好，' + result.data.username,
            //                 isSignin: true
            //             })
            //         }
            //         $('#username').add('#password').val('')
            //     })
            // } else {
            //     $('#user-submit').on('click', async() => {
            //         let {username, password} = {
            //             username: $('#username').val(),
            //             password: $('#password').val()
            //         }
            //
            //         let result = await userModel.sign({username, password}, 'signup')
            //         if (result.ret) {
            //             alert(result.data)
            //         }
            //         $('#username').add('#password').val('')
            //     })
            // }
            $('#user-submit-in').on('click', async() => {
                console.log('666')
                let {username, password} = {
                    username: $('#username').val(),
                    password: $('#password').val()
                }

                let result = await userModel.sign({username, password}, 'signin')
                if (result.ret) {
                    // 将token保存到localstorage里
                    wsCache.set('token', result.data.token)

                    this.renderTpl({
                        greeting: '你好，' + result.data.username,
                        isSignin: true
                    })
                }
                $('#username').add('#password').val('')
            })

        })
        $('#user-signout').on('click', () => {
            wsCache.delete('token')
            this.renderTpl({
                greeting: '',
                isSignin: false
            })
        })
    },

    async isSignin() {
        let token = wsCache.get('token')
        let result = await userModel.isSignin(token)
        if (result.ret) {
            this.renderTpl({
                greeting: '你好，' + result.data.username,
                isSignin: true
            })
        } else {
            this.renderTpl({
                greeting: '',
                isSignin: false
            })
        }
    },

    renderTpl({greeting, isSignin}) {
        let html = template.render(headerTpl, {
            greeting,
            isSignin
        })
        $('.main-header').remove()
        $('.wrapper').prepend(html)
        this.bindEvent()
    }
}


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">  <!-- Logo -->  <a href=\"index2.html\" class=\"logo\">    <!-- mini logo for sidebar mini 50x50 pixels -->    <span class=\"logo-mini\"><b>简单点</b></span>    <!-- logo for regular state and mobile devices -->    <span class=\"logo-lg\">简单点管理系统</span>  </a>  <!-- Header Navbar -->  <nav class=\"navbar navbar-static-top\" role=\"navigation\">    <!-- Sidebar toggle button-->    <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"offcanvas\" role=\"button\">      <span class=\"sr-only\">切换导航</span>    </a>    <!-- Navbar Right Menu -->    <div class=\"navbar-custom-menu\">      <ul class=\"nav navbar-nav\">        <!-- Messages: style can be found in dropdown.less-->        <li class=\"dropdown messages-menu\">          <!-- Menu toggle button -->          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">            <i class=\"fa fa-envelope-o\"></i>            <span class=\"label label-success\">4</span>          </a>          <ul class=\"dropdown-menu\">            <li class=\"header\">You have 4 messages</li>            <li>              <!-- inner menu: contains the messages -->              <ul class=\"menu\">                <li><!-- start message -->                  <a href=\"#\">                    <div class=\"pull-left\">                      <!-- User Image -->                      <img src=\"./static/images/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">                    </div>                    <!-- Message title and timestamp -->                    <h4>                      Support Team                      <small><i class=\"fa fa-clock-o\"></i> 5 mins</small>                    </h4>                    <!-- The message -->                    <p>Why not buy a new awesome theme?</p>                  </a>                </li>                <!-- end message -->              </ul>              <!-- /.menu -->            </li>            <li class=\"footer\"><a href=\"#\">查看所有消息</a></li>          </ul>        </li>        <!-- /.messages-menu -->        <!-- Notifications Menu -->        <li class=\"dropdown notifications-menu\">          <!-- Menu toggle button -->          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">            <i class=\"fa fa-bell-o\"></i>            <span class=\"label label-warning\">10</span>          </a>          <ul class=\"dropdown-menu\">            <li class=\"header\">You have 10 notifications</li>            <li>              <!-- Inner Menu: contains the notifications -->              <ul class=\"menu\">                <li><!-- start notification -->                  <a href=\"#\">                    <i class=\"fa fa-users text-aqua\"></i> 5 new members joined today                  </a>                </li>                <!-- end notification -->              </ul>            </li>            <li class=\"footer\"><a href=\"#\">全部</a></li>          </ul>        </li>        <!-- Tasks Menu -->        <li class=\"dropdown tasks-menu\">          <!-- Menu Toggle Button -->          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">            <i class=\"fa fa-flag-o\"></i>            <span class=\"label label-danger\">9</span>          </a>          <ul class=\"dropdown-menu\">            <li class=\"header\">You have 9 tasks</li>            <li>              <!-- Inner menu: contains the tasks -->              <ul class=\"menu\">                <li><!-- Task item -->                  <a href=\"#\">                    <!-- Task title and progress text -->                    <h3>                      设计按钮                      <small class=\"pull-right\">20%</small>                    </h3>                    <!-- The progress bar -->                    <div class=\"progress xs\">                      <!-- Change the css width attribute to simulate progress -->                      <div class=\"progress-bar progress-bar-aqua\" style=\"width: 20%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">                        <span class=\"sr-only\">20% Complete</span>                      </div>                    </div>                  </a>                </li>                <!-- end task item -->              </ul>            </li>            <li class=\"footer\">              查看所有任务            </li>          </ul>        </li>        <!-- User Account Menu -->        <li class=\"dropdown user user-menu\">          <!-- Menu Toggle Button -->          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">            <!-- The user image in the navbar-->            {{if isSignin}}            <img src=\"/static/images/user2-160x160.jpg\" class=\"user-image\" alt=\"User Image\">            <!-- hidden-xs hides the username on small devices so only the image appears. -->            <span class=\"hidden-xs\">{{greeting}}</span>            {{else}}            <div id=\"click-btn\">              <span id=\"btn-signin\">登录</span>              <!--<span id=\"btn-signup\">注册</span>-->            </div>            {{/if}}          </a>          <ul class=\"dropdown-menu\">            <!-- The user image in the menu -->            {{if !isSignin}}            <li class=\"user-body\" id=\"user-header\">              <form role=\"form\">                <div class=\"box-body\">                  <div class=\"form-group user\">                    <label >用户名：</label>                    <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"请输入用户名\">                  </div>                  <div class=\"form-group\">                    <label >密码：</label>                    <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"请输入密码\">                  </div>                </div>              </form>            </li>            {{else}}            <li class=\"user-header\">              <img src=\"/static/images/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">            </li>            {{/if}}            <!-- Menu Footer-->            <li class=\"user-footer\">              <div class=\"pull-left\">                <a href=\"javascript:void(0)\" class=\"btn btn-default btn-flat\">关闭</a>              </div>              {{if !isSignin}}              <div class=\"pull-right\">                <a href=\"javascript:void(0)\" id=\"user-submit-in\" class=\"btn btn-default btn-flat\">提交</a>              </div>              {{else}}              <div class=\"pull-right\">                <a href=\"javascript:void(0)\" id=\"user-signout\" class=\"btn btn-default btn-flat\">退出</a>              </div>              {{/if}}            </li>          </ul>        </li>        <!-- Control Sidebar Toggle Button -->        <li>          <a href=\"#\" data-toggle=\"control-sidebar\"><i class=\"fa fa-gears\"></i></a>        </li>      </ul>    </div>  </nav></header>"

/***/ }),
/* 22 */
/***/ (function(module, exports) {

const sign = (data, url) => {
    console.log(123)
  console.log(data)
  return $.ajax({
    url: '/api/systemapi/users/' + url,
    type: 'post',
    data: data,
    success: (result) => {
      return result
    }
  })
}

const isSignin = (token) => {
  return $.ajax({
    url: '/api/systemapi/users/signin',
    type: 'post',
    headers: {
      //注意token的格式
      'X-Access-Token': token
    },
    success(result) {
      return result
    }
  })
}

module.exports = {
  sign,
  isSignin
}


/***/ })
/******/ ]);