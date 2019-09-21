(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/footer/footer.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/footer/footer.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12 text-center\">\n        Data Migration Utility v1.0 &copy; 2019 <a class=\"text-muted\" href=\"https://www.dataeconomysolutions.com\"\n          target=\"_blank\">Data\n          Economy Solutions - All Rights Reserved</a>\n      </div>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/layout.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/layout.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navigation Bar-->\n<header id=\"topnav\">\n    <app-topbar (mobileMenuButtonClicked)=\"onToggleMobileMenu()\">\n    </app-topbar>\n    <app-navbar [showMobileMenu]=\"showMobileMenu\"></app-navbar>\n</header>\n<!-- End Navigation Bar-->\n<div class=\"wrapper\">\n    <!-- content -->\n    <router-outlet></router-outlet>\n</div>\n<!-- footer -->\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/navbar/navbar.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/navbar/navbar.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"topbar-menu\">\n    <div class=\"container-fluid\">\n        <div id=\"navigation\" [ngbCollapse]=\"!showMobileMenu\">\n            <!-- Navigation Menu-->\n            <ul class=\"navigation-menu\">\n                <li>\n                    <a routerLink=\"/app/home\" routerLinkActive=\"active\">\n                        <i class=\"fas fa-home\"></i>HOME</a>\n                </li>\n                <li>\n                    <a routerLink=\"/app/request\" routerLinkActive=\"active\">\n                        <i class=\"fas fa-file-alt\"></i>REQUEST</a>\n                </li>\n                <li>\n                    <a routerLink=\"/app/history\" routerLinkActive=\"active\">\n                        <i class=\"fas fa-history\"></i>HISTORY</a>\n                </li>\n                <li>\n                    <a routerLink=\"/app/recon\" routerLinkActive=\"active\">\n                        <i class=\"fas fa-retweet\"></i>RECON</a>\n                </li>\n                <li>\n                    <a routerLink=\"/app/help\" routerLinkActive=\"active\">\n                        <i class=\"far fa-question-circle\"></i>HELP</a>\n                </li>\n\n            </ul>\n            <!-- End navigation menu -->\n            <div class=\"clearfix\"></div>\n        </div>\n        <!-- end #navigation -->\n    </div>\n    <!-- end container -->\n</div>\n<!-- end navbar-custom -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layouts/topbar/topbar.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layouts/topbar/topbar.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Topbar Start -->\n<div class=\"navbar-custom\">\n  <div class=\"container-fluid\">\n    <ul class=\"list-unstyled topnav-menu float-right mb-0\">\n      <li class=\"dropdown notification-list\">\n        <!-- Mobile menu toggle-->\n        <a class=\"navbar-toggle nav-link\" [ngClass]=\"{'open': openMobileMenu}\" (click)=\"toggleMobileMenu($event)\"\n          href=\"javascript: void(0);\">\n          <div class=\"lines\">\n            <span></span>\n            <span></span>\n            <span></span>\n          </div>\n        </a>\n      </li>\n      <li class=\"dropdown notification-list\">\n        <a class=\"nav-link dropdown-toggle  waves-effect waves-light\" href=\"javascript: void(0);\" role=\"button\"\n          aria-haspopup=\"false\" aria-expanded=\"false\">\n          <i class=\"fa fa-shopping-basket noti-icon\"></i>\n          <span class=\"badge badge-danger rounded-circle noti-icon-badge\" *ngIf=\"basketCount>0\">{{basketCount}}</span>\n        </a>\n      </li>\n\n      <li class=\"dropdown d-none d-lg-block\" ngbDropdown>\n        <a class=\"nav-link dropdown-toggle waves-effect waves-light\" href=\"javascript: void(0);\" ngbDropdownToggle\n          id=\"extraMenu\" aria-expanded=\"false\">\n          <i class=\"fas fa-cog fa-lg\"></i>\n          <i class=\"mdi mdi-chevron-down\"></i>\n        </a>\n        <div class=\"dropdown-menu\" ngbDropdownMenu aria-labelledby=\"extraMenu\">\n          <a routerLink=\"/app/settings/users\" routerLinkActive=\"active\" class=\"dropdown-item\">\n            <i class=\"fas fa-users-cog mr-1\"></i>\n            <span>USERS</span>\n          </a>\n          <a routerLink=\"/app/settings/connection\" routerLinkActive=\"active\" class=\"dropdown-item\">\n            <i class=\"fas fa-database mr-1\"></i>\n            <span>CONNECTION</span>\n          </a>\n        </div>\n      </li>\n      <li class=\"dropdown notification-list\" ngbDropdown>\n        <a class=\"nav-link dropdown-toggle nav-user mr-0 waves-effect waves-light\" ngbDropdownToggle\n          id=\"profileDropdown\" href=\"javascript: void(0);\" role=\"button\" aria-haspopup=\"false\" aria-expanded=\"false\">\n          <i class=\"fas fa-user-circle fa-2x\" style=\"vertical-align: middle\"></i>\n          <span class=\"pro-user-name ml-1\">\n            Admin <i class=\"mdi mdi-chevron-down\"></i>\n          </span>\n        </a>\n        <div class=\"dropdown-menu dropdown-menu-right profile-dropdown\" aria-labelledby=\"profileDropdown\"\n          ngbDropdownMenu>\n          <div class=\"dropdown-header noti-title\">\n            <h6 class=\"text-overflow m-0\">Welcome !</h6>\n          </div>\n          <div class=\"dropdown-divider\"></div>\n          <!-- item-->\n          <a href=\"javascript:void(0);\" class=\"dropdown-item notify-item\" (click)=\"logout()\">\n            <i class=\"fe-log-out\"></i>\n            <span>Logout</span>\n          </a>\n        </div>\n      </li>\n    </ul>\n\n    <!-- LOGO -->\n    <div class=\"logo-box\">\n      <a href=\"/\" class=\"logo text-center\">\n        <span class=\"logo-lg\">\n          <img src=\"assets/images/logo-dark.png\" alt=\"\" height=\"18\" />\n        </span>\n        <span class=\"logo-sm\">\n          <img src=\"assets/images/logo-dark.png\" alt=\"\" height=\"24\" />\n        </span>\n      </a>\n    </div>\n    <ul class=\"list-unstyled topnav-menu topnav-menu-left m-0\">\n      <li class=\"dropdown d-none d-lg-block\">\n        <a class=\"nav-link app-name-text\">\n          Data Migration Utility\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>\n<!-- end Topbar -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/ui/pagetitle/pagetitle.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/ui/pagetitle/pagetitle.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12\">\n    <div class=\"page-title-box\">\n      <div class=\"page-title-right\">\n        <ol class=\"breadcrumb m-0\">\n          <li class=\"breadcrumb-item\" [ngClass]=\"{'active': item.active}\" *ngFor=\"let item of breadcrumbItems\">\n            <a [routerLink]=\"item.path\" *ngIf=\"!item.active\">{{ item.label }}</a>\n            <span *ngIf=\"item.active\">{{ item.label }}</span>\n          </li>\n        </ol>\n      </div>\n      <h4 class=\"page-title\">{{ title }}</h4>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/ui/portlet/portlet.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/ui/portlet/portlet.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngIf=\"isVisible\">\n  <!-- card header -->\n\n  <div class=\"card-header bg-{{ color }} text-{{ text }} {{headerClass}}\">\n    {{ title }}\n\n    <div class=\"card-widgets\">\n      <a href=\"javascript: void(0);\" (click)=\"refreshContent()\"><i class=\"mdi mdi-refresh\"></i></a>\n      <a href=\"javascript: void(0);\" (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\"\n        aria-expanded=\"false\" aria-controls=\"cardCollpase5\" class=\"mdi mdi-minus\" [ngClass]=\"\n           {\n             'mdi-minus': isCollapsed == false,\n             'mdi-plus': isCollapsed == true\n           }\">\n      </a>\n      <!-- <a href=\"javascript: void(0);\" (click)=\"remove()\"><i class=\"mdi mdi-close\"></i></a> -->\n    </div>\n\n  </div>\n\n  <!-- End card header -->\n\n  <div id=\"cardCollpase5\" [ngbCollapse]=\"isCollapsed\">\n    <ng-content></ng-content>\n  </div>\n\n  <div class=\"card-disabled\" *ngIf=\"isLoading\">\n    <div class=\"card-portlets-loader\"></div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/guards/auth.guard */ "./src/app/core/guards/auth.guard.ts");
/* harmony import */ var _layouts_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/layout.component */ "./src/app/layouts/layout.component.ts");





const routes = [
    { path: '', loadChildren: () => __webpack_require__.e(/*! import() | account-account-module */ "account-account-module").then(__webpack_require__.bind(null, /*! ./account/account.module */ "./src/app/account/account.module.ts")).then(m => m.AccountModule) },
    { path: 'app', component: _layouts_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"], loadChildren: () => __webpack_require__.e(/*! import() | pages-pages-module */ "pages-pages-module").then(__webpack_require__.bind(null, /*! ./pages/pages.module */ "./src/app/pages/pages.module.ts")).then(m => m.PagesModule), canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: "**", redirectTo: '' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'top', onSameUrlNavigation: 'reload' })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _core_helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/helpers/error.interceptor */ "./src/app/core/helpers/error.interceptor.ts");
/* harmony import */ var _core_helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/helpers/jwt.interceptor */ "./src/app/core/helpers/jwt.interceptor.ts");
/* harmony import */ var _core_helpers_fake_backend__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/helpers/fake-backend */ "./src/app/core/helpers/fake-backend.ts");
/* harmony import */ var _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/layouts.module */ "./src/app/layouts/layouts.module.ts");
/* harmony import */ var _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/ui/ui.module */ "./src/app/shared/ui/ui.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_8__["LayoutsModule"],
            _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_9__["UIModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbDropdownModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbTabsetModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbAccordionModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbCollapseModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModalModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbProgressbarModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbAlertModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbToastModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbPopoverModule"]
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _core_helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_6__["JwtInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _core_helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_5__["ErrorInterceptor"], multi: true },
            // provider used to create fake backend
            _core_helpers_fake_backend__WEBPACK_IMPORTED_MODULE_7__["FakeBackendProvider"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/guards/auth.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/core/services/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    canActivate(route, state) {
        const currentUser = this.authenticationService.currentUser();
        if (currentUser) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
};
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/core/helpers/error.interceptor.ts":
/*!***************************************************!*\
  !*** ./src/app/core/helpers/error.interceptor.ts ***!
  \***************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/core/services/auth.service.ts");





let ErrorInterceptor = class ErrorInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                location.reload();
            }
            const error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
};
ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])
], ErrorInterceptor);



/***/ }),

/***/ "./src/app/core/helpers/fake-backend.ts":
/*!**********************************************!*\
  !*** ./src/app/core/helpers/fake-backend.ts ***!
  \**********************************************/
/*! exports provided: FakeBackendInterceptor, FakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return FakeBackendInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendProvider", function() { return FakeBackendProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let FakeBackendInterceptor = class FakeBackendInterceptor {
    intercept(request, next) {
        const users = [
            { id: 1, username: 'test', email: 'admin', password: 'admin', firstName: 'Test', lastName: 'User' }
        ];
        const authHeader = request.headers.get('Authorization');
        const isLoggedIn = authHeader && authHeader.startsWith('Bearer fake-jwt-token');
        // wrap in delayed observable to simulate server api call
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(() => {
            // authenticate - public
            if (request.url.endsWith('/api/login') && request.method === 'POST') {
                const user = users.find(x => x.email === request.body.email && x.password === request.body.password);
                if (!user) {
                    return error('Email or password is incorrect');
                }
                return ok({
                    id: user.id,
                    username: user.username,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    token: `fake-jwt-token`
                });
            }
            // get all users
            if (request.url.endsWith('/api/users') && request.method === 'GET') {
                if (!isLoggedIn) {
                    return unauthorised();
                }
                return ok(users);
            }
            // pass through any requests not handled above
            return next.handle(request);
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["materialize"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["dematerialize"])());
        // private helper functions
        function ok(body) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({ status: 200, body }));
        }
        function unauthorised() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
        }
        function error(message) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ status: 400, error: { message } });
        }
    }
};
FakeBackendInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], FakeBackendInterceptor);

let FakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
    useClass: FakeBackendInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/core/helpers/jwt.interceptor.ts":
/*!*************************************************!*\
  !*** ./src/app/core/helpers/jwt.interceptor.ts ***!
  \*************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/core/services/auth.service.ts");



let JwtInterceptor = class JwtInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        // add authorization header with jwt token if available
        const currentUser = this.authenticationService.currentUser();
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }
        return next.handle(request);
    }
};
JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
], JwtInterceptor);



/***/ }),

/***/ "./src/app/core/services/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/cookie.service */ "./src/app/core/services/cookie.service.ts");





let AuthenticationService = class AuthenticationService {
    constructor(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
    }
    /**
     * Returns the current user
     */
    currentUser() {
        if (!this.user) {
            this.user = JSON.parse(this.cookieService.getCookie('currentUser'));
        }
        return this.user;
    }
    /**
     * Performs the auth
     * @param email email of user
     * @param password password of user
     */
    login(email, password) {
        return this.http.post(`/api/login`, { email, password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                this.user = user;
                // store user details and jwt in cookie
                this.cookieService.setCookie('currentUser', JSON.stringify(user), 1);
            }
            return user;
        }));
    }
    /**
     * Logout the user
     */
    logout() {
        // remove user from local storage to log user out
        this.cookieService.deleteCookie('currentUser');
        this.user = null;
    }
};
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _services_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
], AuthenticationService);



/***/ }),

/***/ "./src/app/core/services/cookie.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/cookie.service.ts ***!
  \*************************************************/
/*! exports provided: CookieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieService", function() { return CookieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CookieService = class CookieService {
    constructor() { }
    /**
     * Returns the cookie value by name
     * @param name cookie name
     */
    getCookie(name) {
        if (!name) {
            return null;
        }
        const nameEQ = name + '=';
        const ca = document.cookie.split(';');
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1, c.length);
            }
            if (c.indexOf(nameEQ) === 0) {
                return c.substring(nameEQ.length, c.length);
            }
        }
        return null;
    }
    /**
     * Deletes the cookie with given name
     * @param name cookie name
     * @param path path of the domain
     */
    deleteCookie(name) {
        this.setCookie(name, '', -1);
    }
    /**
     * Creates/sets the cookie
     * @param name name of cookie
     * @param value cookie value
     * @param days validity in days
     */
    setCookie(name, value, days) {
        let expires = '';
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toUTCString();
        }
        document.cookie = name + '=' + value + expires + '; path=/';
    }
};
CookieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CookieService);



/***/ }),

/***/ "./src/app/layouts/footer/footer.component.scss":
/*!******************************************************!*\
  !*** ./src/app/layouts/footer/footer.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layouts/footer/footer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/layouts/footer/footer.component.ts ***!
  \****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/layouts/footer/footer.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/layouts/layout.component.scss":
/*!***********************************************!*\
  !*** ./src/app/layouts/layout.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layouts/layout.component.ts":
/*!*********************************************!*\
  !*** ./src/app/layouts/layout.component.ts ***!
  \*********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LayoutComponent = class LayoutComponent {
    constructor() {
        this.showMobileMenu = false;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        document.body.classList.remove('authentication-bg');
        document.body.classList.remove('authentication-bg-pattern');
    }
    /**
     * on settings button clicked from topbar
     */
    onSettingsButtonClicked() {
        document.body.classList.toggle('right-bar-enabled');
    }
    /**
     * On mobile toggle button clicked
     */
    onToggleMobileMenu() {
        this.showMobileMenu = !this.showMobileMenu;
    }
};
LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-layout',
        template: __webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/layout.component.html"),
        styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/layouts/layout.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LayoutComponent);



/***/ }),

/***/ "./src/app/layouts/layouts.module.ts":
/*!*******************************************!*\
  !*** ./src/app/layouts/layouts.module.ts ***!
  \*******************************************/
/*! exports provided: LayoutsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutsModule", function() { return LayoutsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-click-outside */ "./node_modules/ng-click-outside/lib/index.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_click_outside__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/ui/ui.module */ "./src/app/shared/ui/ui.module.ts");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout.component */ "./src/app/layouts/layout.component.ts");
/* harmony import */ var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./topbar/topbar.component */ "./src/app/layouts/topbar/topbar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/layouts/footer/footer.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/layouts/navbar/navbar.component.ts");











let LayoutsModule = class LayoutsModule {
};
LayoutsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _layout_component__WEBPACK_IMPORTED_MODULE_7__["LayoutComponent"],
            _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_8__["TopbarComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCollapseModule"],
            ng_click_outside__WEBPACK_IMPORTED_MODULE_5__["ClickOutsideModule"],
            _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_6__["UIModule"]
        ]
    })
], LayoutsModule);



/***/ }),

/***/ "./src/app/layouts/navbar/navbar.component.scss":
/*!******************************************************!*\
  !*** ./src/app/layouts/navbar/navbar.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layouts/navbar/navbar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/layouts/navbar/navbar.component.ts ***!
  \****************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
    ngOnInit() {
        this.showMobileMenu = false;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], NavbarComponent.prototype, "showMobileMenu", void 0);
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/layouts/navbar/navbar.component.scss")]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/layouts/topbar/topbar.component.scss":
/*!******************************************************!*\
  !*** ./src/app/layouts/topbar/topbar.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo-box .logo img {\n  height: 30px;\n}\n\n.app-name-text {\n  font-size: 26px;\n  font-weight: 600;\n  color: #34a7cc !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy90b3BiYXIvRDpcXFNwcmluZ1NUU1xcd29ya3NwYWNlXFxkYXRhLWVjb25vbXlcXGRhdGEtZWNvbm9teS1taWdyYXRpb24tbWFzdGVyXFxkYXRhLWVjb25vbXktbWlncmF0aW9uLWFuZ3VsYXItY2xpZW50L3NyY1xcYXBwXFxsYXlvdXRzXFx0b3BiYXJcXHRvcGJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0cy90b3BiYXIvdG9wYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVRO0VBQ0ksWUFBQTtBQ0RaOztBRE1BO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvdG9wYmFyL3RvcGJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvLWJveCB7XHJcbiAgICAubG9nbyB7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmFwcC1uYW1lLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMzRhN2NjICFpbXBvcnRhbnRcclxufSIsIi5sb2dvLWJveCAubG9nbyBpbWcge1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5hcHAtbmFtZS10ZXh0IHtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzM0YTdjYyAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/layouts/topbar/topbar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/layouts/topbar/topbar.component.ts ***!
  \****************************************************/
/*! exports provided: TopbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopbarComponent", function() { return TopbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");




let TopbarComponent = class TopbarComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.settingsButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mobileMenuButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.openMobileMenu = false;
        this.basketCount = 0;
    }
    /**
     * Toggles the right sidebar
     */
    toggleRightSidebar() {
        this.settingsButtonClicked.emit();
    }
    /**
     * Toggle the menu bar when having mobile screen
     */
    toggleMobileMenu(event) {
        event.preventDefault();
        this.openMobileMenu = !this.openMobileMenu;
        this.mobileMenuButtonClicked.emit();
    }
    /**
     * Logout the user
     */
    logout() {
        this.authService.logout();
        this.router.navigate(['/auth/login']);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TopbarComponent.prototype, "settingsButtonClicked", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TopbarComponent.prototype, "mobileMenuButtonClicked", void 0);
TopbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-topbar',
        template: __webpack_require__(/*! raw-loader!./topbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/layouts/topbar/topbar.component.html"),
        styles: [__webpack_require__(/*! ./topbar.component.scss */ "./src/app/layouts/topbar/topbar.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
], TopbarComponent);



/***/ }),

/***/ "./src/app/shared/ui/count-to.directive.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/ui/count-to.directive.ts ***!
  \*************************************************/
/*! exports provided: CountToDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountToDirective", function() { return CountToDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CountToDirective = class CountToDirective {
    constructor(el) {
        this.el = el;
        this.from = 0;
        this.duration = 4;
        this.e = this.el.nativeElement;
        this.refreshInterval = 30;
        this.step = 0;
    }
    ngOnInit() {
    }
    ngOnChanges() {
        if (this.CountTo) {
            this.start();
        }
    }
    calculate() {
        this.duration = this.duration * 1000;
        this.steps = Math.ceil(this.duration / this.refreshInterval);
        this.increment = ((this.CountTo - this.from) / this.steps);
        this.num = this.from;
    }
    tick() {
        setTimeout(() => {
            this.num += this.increment;
            this.step++;
            if (this.step >= this.steps) {
                this.num = this.CountTo;
                this.e.textContent = this.CountTo.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            }
            else {
                this.e.textContent = Math.round(this.num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); // Math.round(this.num);
                this.tick();
            }
        }, this.refreshInterval);
    }
    start() {
        this.calculate();
        this.tick();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], CountToDirective.prototype, "CountTo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CountToDirective.prototype, "from", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CountToDirective.prototype, "duration", void 0);
CountToDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        // tslint:disable-next-line: directive-selector
        selector: '[CountTo]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], CountToDirective);



/***/ }),

/***/ "./src/app/shared/ui/pagetitle/pagetitle.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/shared/ui/pagetitle/pagetitle.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC91aS9wYWdldGl0bGUvcGFnZXRpdGxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/ui/pagetitle/pagetitle.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/ui/pagetitle/pagetitle.component.ts ***!
  \************************************************************/
/*! exports provided: PagetitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagetitleComponent", function() { return PagetitleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PagetitleComponent = class PagetitleComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], PagetitleComponent.prototype, "breadcrumbItems", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], PagetitleComponent.prototype, "title", void 0);
PagetitleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-title',
        template: __webpack_require__(/*! raw-loader!./pagetitle.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/ui/pagetitle/pagetitle.component.html"),
        styles: [__webpack_require__(/*! ./pagetitle.component.scss */ "./src/app/shared/ui/pagetitle/pagetitle.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PagetitleComponent);



/***/ }),

/***/ "./src/app/shared/ui/portlet/portlet.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/shared/ui/portlet/portlet.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC91aS9wb3J0bGV0L3BvcnRsZXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/ui/portlet/portlet.component.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/ui/portlet/portlet.component.ts ***!
  \********************************************************/
/*! exports provided: PortletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortletComponent", function() { return PortletComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PortletComponent = class PortletComponent {
    constructor() {
        // tslint:disable-next-line: no-output-on-prefix
        this.onContentRefresh = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        // set the value
        this.isCollapsed = false;
        this.isLoading = false;
        this.isVisible = true;
    }
    /**
     * Refreshes the content
     */
    refreshContent() {
        this.isLoading = true;
        // event emit to let parent know about data refresh
        this.onContentRefresh.emit();
        setTimeout(() => {
            this.isLoading = false;
        }, 2000);
    }
    /**
     * Removes self from dom
     */
    remove() {
        this.isVisible = false;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], PortletComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], PortletComponent.prototype, "color", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], PortletComponent.prototype, "text", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], PortletComponent.prototype, "headerClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], PortletComponent.prototype, "onContentRefresh", void 0);
PortletComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-portlet',
        template: __webpack_require__(/*! raw-loader!./portlet.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/ui/portlet/portlet.component.html"),
        styles: [__webpack_require__(/*! ./portlet.component.scss */ "./src/app/shared/ui/portlet/portlet.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PortletComponent);



/***/ }),

/***/ "./src/app/shared/ui/slimscroll.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/ui/slimscroll.directive.ts ***!
  \***************************************************/
/*! exports provided: SlimscrollDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlimscrollDirective", function() { return SlimscrollDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var smooth_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! smooth-scrollbar */ "./node_modules/smooth-scrollbar/index.js");



let SlimscrollDirective = class SlimscrollDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    ngAfterViewInit() {
        // smooth scroll
        smooth_scrollbar__WEBPACK_IMPORTED_MODULE_2__["default"].init(this.el.nativeElement);
    }
};
SlimscrollDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appSlimScroll]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
], SlimscrollDirective);



/***/ }),

/***/ "./src/app/shared/ui/ui.module.ts":
/*!****************************************!*\
  !*** ./src/app/shared/ui/ui.module.ts ***!
  \****************************************/
/*! exports provided: UIModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIModule", function() { return UIModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-click-outside */ "./node_modules/ng-click-outside/lib/index.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng_click_outside__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _slimscroll_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./slimscroll.directive */ "./src/app/shared/ui/slimscroll.directive.ts");
/* harmony import */ var _count_to_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./count-to.directive */ "./src/app/shared/ui/count-to.directive.ts");
/* harmony import */ var _pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pagetitle/pagetitle.component */ "./src/app/shared/ui/pagetitle/pagetitle.component.ts");
/* harmony import */ var _portlet_portlet_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./portlet/portlet.component */ "./src/app/shared/ui/portlet/portlet.component.ts");











let UIModule = class UIModule {
};
UIModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        // tslint:disable-next-line: max-line-length
        declarations: [
            _slimscroll_directive__WEBPACK_IMPORTED_MODULE_7__["SlimscrollDirective"],
            _count_to_directive__WEBPACK_IMPORTED_MODULE_8__["CountToDirective"],
            _pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_9__["PagetitleComponent"],
            _portlet_portlet_component__WEBPACK_IMPORTED_MODULE_10__["PortletComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            ng_click_outside__WEBPACK_IMPORTED_MODULE_6__["ClickOutsideModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbCollapseModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDatepickerModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTimepickerModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDropdownModule"]
        ],
        // tslint:disable-next-line: max-line-length
        exports: [
            _slimscroll_directive__WEBPACK_IMPORTED_MODULE_7__["SlimscrollDirective"],
            _count_to_directive__WEBPACK_IMPORTED_MODULE_8__["CountToDirective"],
            _pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_9__["PagetitleComponent"],
            _portlet_portlet_component__WEBPACK_IMPORTED_MODULE_10__["PortletComponent"]
        ]
    })
], UIModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\SpringSTS\workspace\data-economy\data-economy-migration-master\data-economy-migration-angular-client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map