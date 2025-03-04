/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/send/route";
exports.ids = ["app/api/send/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "async_hooks":
/*!******************************!*\
  !*** external "async_hooks" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("async_hooks");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "node:stream":
/*!******************************!*\
  !*** external "node:stream" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("node:stream");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsend%2Froute&page=%2Fapi%2Fsend%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend%2Froute.ts&appDir=%2FUsers%2Fsopi%2FDocuments%2FGitHub%2Fportfolio2%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsopi%2FDocuments%2FGitHub%2Fportfolio2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=export&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsend%2Froute&page=%2Fapi%2Fsend%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend%2Froute.ts&appDir=%2FUsers%2Fsopi%2FDocuments%2FGitHub%2Fportfolio2%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsopi%2FDocuments%2FGitHub%2Fportfolio2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=export&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_sopi_Documents_GitHub_portfolio2_src_app_api_send_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/send/route.ts */ \"(rsc)/./src/app/api/send/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"export\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/send/route\",\n        pathname: \"/api/send\",\n        filename: \"route\",\n        bundlePath: \"app/api/send/route\"\n    },\n    resolvedPagePath: \"/Users/sopi/Documents/GitHub/portfolio2/src/app/api/send/route.ts\",\n    nextConfigOutput,\n    userland: _Users_sopi_Documents_GitHub_portfolio2_src_app_api_send_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/send/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZzZW5kJTJGcm91dGUmcGFnZT0lMkZhcGklMkZzZW5kJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGc2VuZCUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnNvcGklMkZEb2N1bWVudHMlMkZHaXRIdWIlMkZwb3J0Zm9saW8yJTJGc3JjJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRnNvcGklMkZEb2N1bWVudHMlMkZHaXRIdWIlMkZwb3J0Zm9saW8yJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PWV4cG9ydCZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNpQjtBQUM5RjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL3NvcGllaXpvLndvcmsvP2QxYzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL3NvcGkvRG9jdW1lbnRzL0dpdEh1Yi9wb3J0Zm9saW8yL3NyYy9hcHAvYXBpL3NlbmQvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiZXhwb3J0XCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3NlbmQvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9zZW5kXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9zZW5kL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL3NvcGkvRG9jdW1lbnRzL0dpdEh1Yi9wb3J0Zm9saW8yL3NyYy9hcHAvYXBpL3NlbmQvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3NlbmQvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsend%2Froute&page=%2Fapi%2Fsend%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend%2Froute.ts&appDir=%2FUsers%2Fsopi%2FDocuments%2FGitHub%2Fportfolio2%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsopi%2FDocuments%2FGitHub%2Fportfolio2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=export&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/contact/page.module.css":
/*!*****************************************!*\
  !*** ./src/app/contact/page.module.css ***!
  \*****************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"main\": \"page_main__c0U7_\",\n\t\"ak\": \"page_ak__gwbmd\",\n\t\"contacttext\": \"page_contacttext__SxoXd\",\n\t\"cformtext\": \"page_cformtext__ZwSOG\",\n\t\"cformemail\": \"page_cformemail__v3QrI\",\n\t\"cformtextarea\": \"page_cformtextarea__wVKJB\",\n\t\"cformbutton\": \"page_cformbutton__O_8_V\",\n\t\"formitem\": \"page_formitem__GABok\",\n\t\"comissiontext\": \"page_comissiontext__9EwRz\",\n\t\"emmain\": \"page_emmain__bHUGA\",\n\t\"emcontent\": \"page_emcontent__i6K8P\"\n};\n\nmodule.exports.__checksum = \"2acd50edd34f\"\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2NvbnRhY3QvcGFnZS5tb2R1bGUuY3NzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29waWVpem8ud29yay8uL3NyYy9hcHAvY29udGFjdC9wYWdlLm1vZHVsZS5jc3M/MWViYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYWluXCI6IFwicGFnZV9tYWluX19jMFU3X1wiLFxuXHRcImFrXCI6IFwicGFnZV9ha19fZ3dibWRcIixcblx0XCJjb250YWN0dGV4dFwiOiBcInBhZ2VfY29udGFjdHRleHRfX1N4b1hkXCIsXG5cdFwiY2Zvcm10ZXh0XCI6IFwicGFnZV9jZm9ybXRleHRfX1p3U09HXCIsXG5cdFwiY2Zvcm1lbWFpbFwiOiBcInBhZ2VfY2Zvcm1lbWFpbF9fdjNRcklcIixcblx0XCJjZm9ybXRleHRhcmVhXCI6IFwicGFnZV9jZm9ybXRleHRhcmVhX193VktKQlwiLFxuXHRcImNmb3JtYnV0dG9uXCI6IFwicGFnZV9jZm9ybWJ1dHRvbl9fT184X1ZcIixcblx0XCJmb3JtaXRlbVwiOiBcInBhZ2VfZm9ybWl0ZW1fX0dBQm9rXCIsXG5cdFwiY29taXNzaW9udGV4dFwiOiBcInBhZ2VfY29taXNzaW9udGV4dF9fOUV3UnpcIixcblx0XCJlbW1haW5cIjogXCJwYWdlX2VtbWFpbl9fYkhVR0FcIixcblx0XCJlbWNvbnRlbnRcIjogXCJwYWdlX2VtY29udGVudF9faTZLOFBcIlxufTtcblxubW9kdWxlLmV4cG9ydHMuX19jaGVja3N1bSA9IFwiMmFjZDUwZWRkMzRmXCJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/contact/page.module.css\n");

/***/ }),

/***/ "(rsc)/./src/app/api/send/route.ts":
/*!***********************************!*\
  !*** ./src/app/api/send/route.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var resend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! resend */ \"(rsc)/./node_modules/resend/dist/index.mjs\");\n/* harmony import */ var _contact_email_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../contact/email-template */ \"(rsc)/./src/app/contact/email-template.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst resend = new resend__WEBPACK_IMPORTED_MODULE_0__.Resend(process.env.RESEND_API_KEY);\nconst fromEmail = process.env.RESEND_FROM_EMAIL;\nasync function POST(request) {\n    const req = await request.json();\n    try {\n        const { data, error } = await resend.emails.send({\n            from: \"Acme <onboarding@resend.dev>\",\n            to: [\n                req.email\n            ],\n            subject: \"お問い合わせありがとうございます\",\n            react: (0,_contact_email_template__WEBPACK_IMPORTED_MODULE_1__.EmailTemplate)({\n                senderName: req.name,\n                content: req.message\n            })\n        });\n        if (error) {\n            return Response.json({\n                error\n            }, {\n                status: 500\n            });\n        }\n        return Response.json(data);\n    } catch (error) {\n        return Response.json({\n            error\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9zZW5kL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ2dDO0FBQzZCO0FBQzlCO0FBRS9CLE1BQU1HLFNBQVMsSUFBSUgsMENBQU1BLENBQUNJLFFBQVFDLEdBQUcsQ0FBQ0MsY0FBYztBQUVwRCxNQUFNQyxZQUFZSCxRQUFRQyxHQUFHLENBQUNHLGlCQUFpQjtBQUV4QyxlQUFlQyxLQUFLQyxPQUFnQjtJQUN6QyxNQUFNQyxNQUFNLE1BQU1ELFFBQVFFLElBQUk7SUFFOUIsSUFBSTtRQUNGLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBRyxNQUFNWCxPQUFPWSxNQUFNLENBQUNDLElBQUksQ0FBQztZQUMvQ0MsTUFBTTtZQUNOQyxJQUFJO2dCQUFDUCxJQUFJUSxLQUFLO2FBQUM7WUFDZkMsU0FBUztZQUNUQyxPQUFPcEIsc0VBQWFBLENBQUM7Z0JBQUVxQixZQUFZWCxJQUFJWSxJQUFJO2dCQUFFQyxTQUFTYixJQUFJYyxPQUFPO1lBQUM7UUFDcEU7UUFFQSxJQUFJWCxPQUFPO1lBQ1QsT0FBT1ksU0FBU2QsSUFBSSxDQUFDO2dCQUFFRTtZQUFNLEdBQUc7Z0JBQUVhLFFBQVE7WUFBSTtRQUNoRDtRQUVBLE9BQU9ELFNBQVNkLElBQUksQ0FBQ0M7SUFDdkIsRUFBRSxPQUFPQyxPQUFPO1FBQ2QsT0FBT1ksU0FBU2QsSUFBSSxDQUFDO1lBQUVFO1FBQU0sR0FBRztZQUFFYSxRQUFRO1FBQUk7SUFDaEQ7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3NvcGllaXpvLndvcmsvLi9zcmMvYXBwL2FwaS9zZW5kL3JvdXRlLnRzPzQ5NzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuaW1wb3J0IHsgUmVzZW5kIH0gZnJvbSAncmVzZW5kJztcbmltcG9ydCB7IEVtYWlsVGVtcGxhdGUgfSBmcm9tICcuLi8uLi9jb250YWN0L2VtYWlsLXRlbXBsYXRlJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgcmVzZW5kID0gbmV3IFJlc2VuZChwcm9jZXNzLmVudi5SRVNFTkRfQVBJX0tFWSk7XG5cbmNvbnN0IGZyb21FbWFpbCA9IHByb2Nlc3MuZW52LlJFU0VORF9GUk9NX0VNQUlMXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgY29uc3QgcmVxID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCByZXNlbmQuZW1haWxzLnNlbmQoe1xuICAgICAgZnJvbTogJ0FjbWUgPG9uYm9hcmRpbmdAcmVzZW5kLmRldj4nLFxuICAgICAgdG86IFtyZXEuZW1haWxdLFxuICAgICAgc3ViamVjdDogJ+OBiuWVj+OBhOWQiOOCj+OBm+OBguOCiuOBjOOBqOOBhuOBlOOBluOBhOOBvuOBmScsXG4gICAgICByZWFjdDogRW1haWxUZW1wbGF0ZSh7IHNlbmRlck5hbWU6IHJlcS5uYW1lLCBjb250ZW50OiByZXEubWVzc2FnZSB9KSxcbiAgICB9KTtcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oeyBlcnJvciB9LCB7IHN0YXR1czogNTAwIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBSZXNwb25zZS5qc29uKGRhdGEpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBSZXNwb25zZS5qc29uKHsgZXJyb3IgfSwgeyBzdGF0dXM6IDUwMCB9KTtcbiAgfVxufSJdLCJuYW1lcyI6WyJSZXNlbmQiLCJFbWFpbFRlbXBsYXRlIiwiUmVhY3QiLCJyZXNlbmQiLCJwcm9jZXNzIiwiZW52IiwiUkVTRU5EX0FQSV9LRVkiLCJmcm9tRW1haWwiLCJSRVNFTkRfRlJPTV9FTUFJTCIsIlBPU1QiLCJyZXF1ZXN0IiwicmVxIiwianNvbiIsImRhdGEiLCJlcnJvciIsImVtYWlscyIsInNlbmQiLCJmcm9tIiwidG8iLCJlbWFpbCIsInN1YmplY3QiLCJyZWFjdCIsInNlbmRlck5hbWUiLCJuYW1lIiwiY29udGVudCIsIm1lc3NhZ2UiLCJSZXNwb25zZSIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/send/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/app/contact/email-template.tsx":
/*!********************************************!*\
  !*** ./src/app/contact/email-template.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EmailTemplate: () => (/* binding */ EmailTemplate)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page.module.css */ \"(rsc)/./src/app/contact/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst EmailTemplate = ({ senderName, content })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().emmain),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"お問い合わせありがとうございます！\"\n            }, void 0, false, {\n                fileName: \"/Users/sopi/Documents/GitHub/portfolio2/src/app/contact/email-template.tsx\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"以下の内容でお問合せを受け付けました。\"\n            }, void 0, false, {\n                fileName: \"/Users/sopi/Documents/GitHub/portfolio2/src/app/contact/email-template.tsx\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().emcontent),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"名前：\",\n                            senderName\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sopi/Documents/GitHub/portfolio2/src/app/contact/email-template.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"内容：\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sopi/Documents/GitHub/portfolio2/src/app/contact/email-template.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: content\n                    }, void 0, false, {\n                        fileName: \"/Users/sopi/Documents/GitHub/portfolio2/src/app/contact/email-template.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sopi/Documents/GitHub/portfolio2/src/app/contact/email-template.tsx\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, undefined),\n            \"sopieizo@shiftz.workからの返信をお待ちください。\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sopi/Documents/GitHub/portfolio2/src/app/contact/email-template.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2NvbnRhY3QvZW1haWwtdGVtcGxhdGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQStCO0FBQ1E7QUFPaEMsTUFBTUUsZ0JBQXdELENBQUMsRUFDcEVDLFVBQVUsRUFBRUMsT0FBTyxFQUNwQixpQkFDRyw4REFBQ0M7UUFBSUMsV0FBV0wsZ0VBQWE7OzBCQUN6Qiw4REFBQ087MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7MEJBQUU7Ozs7OzswQkFDSCw4REFBQ0o7Z0JBQUlDLFdBQVdMLG1FQUFnQjs7a0NBQzVCLDhEQUFDUTs7NEJBQUU7NEJBQUlOOzs7Ozs7O2tDQUNQLDhEQUFDTTtrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDQTtrQ0FBR0w7Ozs7Ozs7Ozs7OztZQUNGOzs7Ozs7a0JBR1oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb3BpZWl6by53b3JrLy4vc3JjL2FwcC9jb250YWN0L2VtYWlsLXRlbXBsYXRlLnRzeD81NThiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcGFnZS5tb2R1bGUuY3NzXCI7XG5cbmludGVyZmFjZSBFbWFpbFRlbXBsYXRlUHJvcHMge1xuICBzZW5kZXJOYW1lOiBzdHJpbmc7XG4gIGNvbnRlbnQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IEVtYWlsVGVtcGxhdGU6IFJlYWN0LkZDPFJlYWRvbmx5PEVtYWlsVGVtcGxhdGVQcm9wcz4+ID0gKHtcbiAgc2VuZGVyTmFtZSwgY29udGVudFxufSkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW1tYWlufT5cbiAgICAgICAgPGgxPuOBiuWVj+OBhOWQiOOCj+OBm+OBguOCiuOBjOOBqOOBhuOBlOOBluOBhOOBvuOBme+8gTwvaDE+XG4gICAgICAgIDxwPuS7peS4i+OBruWGheWuueOBp+OBiuWVj+WQiOOBm+OCkuWPl+OBkeS7mOOBkeOBvuOBl+OBn+OAgjwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbWNvbnRlbnR9PlxuICAgICAgICAgICAgPHA+5ZCN5YmN77yae3NlbmRlck5hbWV9PC9wPlxuICAgICAgICAgICAgPHA+5YaF5a6577yaPC9wPlxuICAgICAgICAgICAgPHA+e2NvbnRlbnR9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgc29waWVpem9Ac2hpZnR6LndvcmvjgYvjgonjga7ov5Tkv6HjgpLjgYrlvoXjgaHjgY/jgaDjgZXjgYTjgIJcbiAgICAgIDwvZGl2PlxuKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZXMiLCJFbWFpbFRlbXBsYXRlIiwic2VuZGVyTmFtZSIsImNvbnRlbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJlbW1haW4iLCJoMSIsInAiLCJlbWNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/contact/email-template.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/resend"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fsend%2Froute&page=%2Fapi%2Fsend%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fsend%2Froute.ts&appDir=%2FUsers%2Fsopi%2FDocuments%2FGitHub%2Fportfolio2%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fsopi%2FDocuments%2FGitHub%2Fportfolio2&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=export&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();