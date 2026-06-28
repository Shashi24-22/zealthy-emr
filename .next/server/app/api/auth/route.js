"use strict";
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
exports.id = "app/api/auth/route";
exports.ids = ["app/api/auth/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Froute&page=%2Fapi%2Fauth%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Froute.js&appDir=C%3A%5CUsers%5Cshash%5COneDrive%5CDesktop%5Czealthy%5Czealthy-emr%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cshash%5COneDrive%5CDesktop%5Czealthy%5Czealthy-emr&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Froute&page=%2Fapi%2Fauth%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Froute.js&appDir=C%3A%5CUsers%5Cshash%5COneDrive%5CDesktop%5Czealthy%5Czealthy-emr%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cshash%5COneDrive%5CDesktop%5Czealthy%5Czealthy-emr&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_shash_OneDrive_Desktop_zealthy_zealthy_emr_app_api_auth_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/route.js */ \"(rsc)/./app/api/auth/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/route\",\n        pathname: \"/api/auth\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\shash\\\\OneDrive\\\\Desktop\\\\zealthy\\\\zealthy-emr\\\\app\\\\api\\\\auth\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_shash_OneDrive_Desktop_zealthy_zealthy_emr_app_api_auth_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGcm91dGUmcGFnZT0lMkZhcGklMkZhdXRoJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGYXV0aCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNzaGFzaCU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q3plYWx0aHklNUN6ZWFsdGh5LWVtciU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDc2hhc2glNUNPbmVEcml2ZSU1Q0Rlc2t0b3AlNUN6ZWFsdGh5JTVDemVhbHRoeS1lbXImaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ21DO0FBQ2hIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vemVhbHRoeS1lbXIvPzE3MjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcc2hhc2hcXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFx6ZWFsdGh5XFxcXHplYWx0aHktZW1yXFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGhcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2F1dGgvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxzaGFzaFxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXHplYWx0aHlcXFxcemVhbHRoeS1lbXJcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hdXRoL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Froute&page=%2Fapi%2Fauth%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Froute.js&appDir=C%3A%5CUsers%5Cshash%5COneDrive%5CDesktop%5Czealthy%5Czealthy-emr%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cshash%5COneDrive%5CDesktop%5Czealthy%5Czealthy-emr&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/route.js":
/*!*******************************!*\
  !*** ./app/api/auth/route.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./lib/db.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./lib/auth.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nasync function POST(req) {\n    const { email, password } = await req.json();\n    const user = await _lib_db__WEBPACK_IMPORTED_MODULE_1__.db.user.findUnique({\n        where: {\n            email\n        }\n    });\n    if (!user || !await bcryptjs__WEBPACK_IMPORTED_MODULE_3___default().compare(password, user.password)) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Invalid email or password\"\n        }, {\n            status: 401\n        });\n    }\n    const res = next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        ok: true\n    });\n    // Always overwrite the session cookie on login\n    res.cookies.set(\"session\", (0,_lib_auth__WEBPACK_IMPORTED_MODULE_2__.makeSessionCookie)({\n        userId: user.id,\n        name: user.name,\n        email: user.email\n    }), {\n        httpOnly: true,\n        path: \"/\",\n        maxAge: 60 * 60 * 24 * 7\n    });\n    return res;\n}\nasync function DELETE() {\n    const res = next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        ok: true\n    });\n    res.cookies.delete(\"session\");\n    return res;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEyQztBQUNiO0FBQ2lCO0FBQ2pCO0FBRXZCLGVBQWVJLEtBQUtDLEdBQUc7SUFDNUIsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFHLE1BQU1GLElBQUlHLElBQUk7SUFFMUMsTUFBTUMsT0FBTyxNQUFNUix1Q0FBRUEsQ0FBQ1EsSUFBSSxDQUFDQyxVQUFVLENBQUM7UUFBRUMsT0FBTztZQUFFTDtRQUFNO0lBQUU7SUFDekQsSUFBSSxDQUFDRyxRQUFRLENBQUUsTUFBTU4sdURBQWMsQ0FBQ0ksVUFBVUUsS0FBS0YsUUFBUSxHQUFJO1FBQzdELE9BQU9QLHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7WUFBRUssT0FBTztRQUE0QixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUNqRjtJQUVBLE1BQU1DLE1BQU1mLHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7UUFBRVEsSUFBSTtJQUFLO0lBQ3pDLCtDQUErQztJQUMvQ0QsSUFBSUUsT0FBTyxDQUFDQyxHQUFHLENBQUMsV0FBV2hCLDREQUFpQkEsQ0FBQztRQUFFaUIsUUFBUVYsS0FBS1csRUFBRTtRQUFFQyxNQUFNWixLQUFLWSxJQUFJO1FBQUVmLE9BQU9HLEtBQUtILEtBQUs7SUFBQyxJQUFJO1FBQ3JHZ0IsVUFBVTtRQUNWQyxNQUFNO1FBQ05DLFFBQVEsS0FBSyxLQUFLLEtBQUs7SUFDekI7SUFDQSxPQUFPVDtBQUNUO0FBRU8sZUFBZVU7SUFDcEIsTUFBTVYsTUFBTWYscURBQVlBLENBQUNRLElBQUksQ0FBQztRQUFFUSxJQUFJO0lBQUs7SUFDekNELElBQUlFLE9BQU8sQ0FBQ1MsTUFBTSxDQUFDO0lBQ25CLE9BQU9YO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96ZWFsdGh5LWVtci8uL2FwcC9hcGkvYXV0aC9yb3V0ZS5qcz82ZWFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcclxuaW1wb3J0IHsgZGIgfSBmcm9tICdAL2xpYi9kYic7XHJcbmltcG9ydCB7IG1ha2VTZXNzaW9uQ29va2llIH0gZnJvbSAnQC9saWIvYXV0aCc7XHJcbmltcG9ydCBiY3J5cHQgZnJvbSAnYmNyeXB0anMnO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxKSB7XHJcbiAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IGF3YWl0IHJlcS5qc29uKCk7XHJcblxyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBlbWFpbCB9IH0pO1xyXG4gIGlmICghdXNlciB8fCAhKGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKSkpIHtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnSW52YWxpZCBlbWFpbCBvciBwYXNzd29yZCcgfSwgeyBzdGF0dXM6IDQwMSB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlcyA9IE5leHRSZXNwb25zZS5qc29uKHsgb2s6IHRydWUgfSk7XHJcbiAgLy8gQWx3YXlzIG92ZXJ3cml0ZSB0aGUgc2Vzc2lvbiBjb29raWUgb24gbG9naW5cclxuICByZXMuY29va2llcy5zZXQoJ3Nlc3Npb24nLCBtYWtlU2Vzc2lvbkNvb2tpZSh7IHVzZXJJZDogdXNlci5pZCwgbmFtZTogdXNlci5uYW1lLCBlbWFpbDogdXNlci5lbWFpbCB9KSwge1xyXG4gICAgaHR0cE9ubHk6IHRydWUsXHJcbiAgICBwYXRoOiAnLycsXHJcbiAgICBtYXhBZ2U6IDYwICogNjAgKiAyNCAqIDcsXHJcbiAgfSk7XHJcbiAgcmV0dXJuIHJlcztcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIERFTEVURSgpIHtcclxuICBjb25zdCByZXMgPSBOZXh0UmVzcG9uc2UuanNvbih7IG9rOiB0cnVlIH0pO1xyXG4gIHJlcy5jb29raWVzLmRlbGV0ZSgnc2Vzc2lvbicpO1xyXG4gIHJldHVybiByZXM7XHJcbn0iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZGIiLCJtYWtlU2Vzc2lvbkNvb2tpZSIsImJjcnlwdCIsIlBPU1QiLCJyZXEiLCJlbWFpbCIsInBhc3N3b3JkIiwianNvbiIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJjb21wYXJlIiwiZXJyb3IiLCJzdGF0dXMiLCJyZXMiLCJvayIsImNvb2tpZXMiLCJzZXQiLCJ1c2VySWQiLCJpZCIsIm5hbWUiLCJodHRwT25seSIsInBhdGgiLCJtYXhBZ2UiLCJERUxFVEUiLCJkZWxldGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/auth.js":
/*!*********************!*\
  !*** ./lib/auth.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getSession: () => (/* binding */ getSession),\n/* harmony export */   makeSessionCookie: () => (/* binding */ makeSessionCookie)\n/* harmony export */ });\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n\nfunction getSession() {\n    const cookieStore = (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)();\n    const raw = cookieStore.get(\"session\")?.value;\n    if (!raw) return null;\n    try {\n        return JSON.parse(Buffer.from(raw, \"base64\").toString(\"utf8\"));\n    } catch  {\n        return null;\n    }\n}\nfunction makeSessionCookie(payload) {\n    return Buffer.from(JSON.stringify(payload)).toString(\"base64\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBdUM7QUFFaEMsU0FBU0M7SUFDZCxNQUFNQyxjQUFjRixxREFBT0E7SUFDM0IsTUFBTUcsTUFBTUQsWUFBWUUsR0FBRyxDQUFDLFlBQVlDO0lBQ3hDLElBQUksQ0FBQ0YsS0FBSyxPQUFPO0lBQ2pCLElBQUk7UUFDRixPQUFPRyxLQUFLQyxLQUFLLENBQUNDLE9BQU9DLElBQUksQ0FBQ04sS0FBSyxVQUFVTyxRQUFRLENBQUM7SUFDeEQsRUFBRSxPQUFNO1FBQ04sT0FBTztJQUNUO0FBQ0Y7QUFFTyxTQUFTQyxrQkFBa0JDLE9BQU87SUFDdkMsT0FBT0osT0FBT0MsSUFBSSxDQUFDSCxLQUFLTyxTQUFTLENBQUNELFVBQVVGLFFBQVEsQ0FBQztBQUN2RCIsInNvdXJjZXMiOlsid2VicGFjazovL3plYWx0aHktZW1yLy4vbGliL2F1dGguanM/Mjg3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb29raWVzIH0gZnJvbSAnbmV4dC9oZWFkZXJzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXNzaW9uKCkge1xyXG4gIGNvbnN0IGNvb2tpZVN0b3JlID0gY29va2llcygpO1xyXG4gIGNvbnN0IHJhdyA9IGNvb2tpZVN0b3JlLmdldCgnc2Vzc2lvbicpPy52YWx1ZTtcclxuICBpZiAoIXJhdykgcmV0dXJuIG51bGw7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKEJ1ZmZlci5mcm9tKHJhdywgJ2Jhc2U2NCcpLnRvU3RyaW5nKCd1dGY4JykpO1xyXG4gIH0gY2F0Y2gge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZVNlc3Npb25Db29raWUocGF5bG9hZCkge1xyXG4gIHJldHVybiBCdWZmZXIuZnJvbShKU09OLnN0cmluZ2lmeShwYXlsb2FkKSkudG9TdHJpbmcoJ2Jhc2U2NCcpO1xyXG59Il0sIm5hbWVzIjpbImNvb2tpZXMiLCJnZXRTZXNzaW9uIiwiY29va2llU3RvcmUiLCJyYXciLCJnZXQiLCJ2YWx1ZSIsIkpTT04iLCJwYXJzZSIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsIm1ha2VTZXNzaW9uQ29va2llIiwicGF5bG9hZCIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.js\n");

/***/ }),

/***/ "(rsc)/./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   db: () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = globalThis;\nconst db = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) {\n    globalForPrisma.prisma = db;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvZGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBRTlDLE1BQU1DLGtCQUFrQkM7QUFFakIsTUFBTUMsS0FBS0YsZ0JBQWdCRyxNQUFNLElBQUksSUFBSUosd0RBQVlBLEdBQUc7QUFFL0QsSUFBSUssSUFBeUIsRUFBYztJQUN6Q0osZ0JBQWdCRyxNQUFNLEdBQUdEO0FBQzNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vemVhbHRoeS1lbXIvLi9saWIvZGIuanM/M2RjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XHJcblxyXG5jb25zdCBnbG9iYWxGb3JQcmlzbWEgPSBnbG9iYWxUaGlzO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRiID0gZ2xvYmFsRm9yUHJpc21hLnByaXNtYSA/PyBuZXcgUHJpc21hQ2xpZW50KCk7XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gIGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPSBkYjtcclxufSJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJnbG9iYWxGb3JQcmlzbWEiLCJnbG9iYWxUaGlzIiwiZGIiLCJwcmlzbWEiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/db.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/bcryptjs"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2Froute&page=%2Fapi%2Fauth%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Froute.js&appDir=C%3A%5CUsers%5Cshash%5COneDrive%5CDesktop%5Czealthy%5Czealthy-emr%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cshash%5COneDrive%5CDesktop%5Czealthy%5Czealthy-emr&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();