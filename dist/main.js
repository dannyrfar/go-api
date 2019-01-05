(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _reminders_reminders_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reminders/reminders.component */ "./src/app/reminders/reminders.component.ts");





var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'reminders', component: _reminders_reminders_component__WEBPACK_IMPORTED_MODULE_4__["RemindersComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">GoLang API - Angular</a>\n\n      <button\n        class=\"btn btn-light btn-margin\"\n        routerLink=\"/\">\n          Home\n      </button>\n\n    </div>\n  </div>\n</nav>\n\n<div class=\"container-fluid\">\n<div class=\"row\">\n  <div class=\"col-sm\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _reminders_reminders_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reminders/reminders.component */ "./src/app/reminders/reminders.component.ts");
/* harmony import */ var _reminders_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reminders.service */ "./src/app/reminders.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _reminders_reminders_component__WEBPACK_IMPORTED_MODULE_7__["RemindersComponent"]
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [_reminders_service__WEBPACK_IMPORTED_MODULE_8__["RemindersService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"c-block\">\n  <h2>Welcome Home!</h2>\n  <a class=\"btn btn-primary\" routerLink=\"/reminders\">Show Reminders List</a>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/reminders.service.ts":
/*!**************************************!*\
  !*** ./src/app/reminders.service.ts ***!
  \**************************************/
/*! exports provided: RemindersService, Reminder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemindersService", function() { return RemindersService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reminder", function() { return Reminder; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");




var RemindersService = /** @class */ (function () {
    function RemindersService(httpClient) {
        this.httpClient = httpClient;
    }
    RemindersService.prototype.getRemindersList = function () {
        return this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].gateway + '/reminders');
    };
    RemindersService.prototype.addReminder = function (reminder) {
        return this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].gateway + '/reminders', reminder);
    };
    RemindersService.prototype.completeReminder = function (reminder) {
        return this.httpClient.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].gateway + '/reminders', reminder);
    };
    RemindersService.prototype.deleteReminder = function (reminder) {
        return this.httpClient.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].gateway + '/reminders/' + reminder.id);
    };
    RemindersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RemindersService);
    return RemindersService;
}());

var Reminder = /** @class */ (function () {
    function Reminder() {
    }
    return Reminder;
}());



/***/ }),

/***/ "./src/app/reminders/reminders.component.css":
/*!***************************************************!*\
  !*** ./src/app/reminders/reminders.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n    width: auto;\n    margin: 5px;\n  }\n  \n  td {\n    vertical-align: unset;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVtaW5kZXJzL3JlbWluZGVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7R0FDYjs7RUFFRDtJQUNFLHNCQUFzQjtHQUN2QiIsImZpbGUiOiJzcmMvYXBwL3JlbWluZGVycy9yZW1pbmRlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWFyZ2luOiA1cHg7XG4gIH1cbiAgXG4gIHRkIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdW5zZXQ7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/reminders/reminders.component.html":
/*!****************************************************!*\
  !*** ./src/app/reminders/reminders.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Reminders</h2>\n<table class=\"table\">\n  <thead>\n  <tr>\n    <th>Message</th>\n    <th>Complete</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let reminder of activeReminders\">\n    <td>{{reminder.message}}</td>\n    <td>\n      <button *ngIf=\"!reminder.complete\" class=\"btn btn-secondary\" (click)=\"completeReminder(reminder)\">\n        <i class=\"fa fa-check\"></i>\n      </button>\n      <button *ngIf=\"reminder.complete\" class=\"btn btn-success\" disabled>\n        <i class=\"fa fa-check\"></i>\n      </button>\n\n      <button class=\"btn btn-danger\" (click)=\"deleteReminder(reminder)\">\n        <i class=\"fa fa-trash\"></i>\n      </button>\n    </td>\n  </tr>\n  </tbody>\n</table>\n<h3>Completed</h3>\n<table class=\"table\">\n  <thead>\n  <tr>\n    <th>Message</th>\n    <th>Complete</th>\n  </tr>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let reminder of completedReminders\">\n    <td>{{reminder.message}}</td>\n    <td>\n      <button *ngIf=\"!reminder.complete\" class=\"btn btn-secondary\" (click)=\"completeReminder(reminder)\">\n        <i class=\"fa fa-check\"></i>\n      </button>\n      <button *ngIf=\"reminder.complete\" class=\"btn btn-success\" disabled>\n        <i class=\"fa fa-check\"></i>\n      </button>\n      <button class=\"btn btn-danger\" (click)=\"deleteReminder(reminder)\">\n        <i class=\"fa fa-trash\"></i>\n      </button>\n    </td>\n  </tr>\n  </tbody>\n</table>\n<input placeholder=\"description...\" [(ngModel)]=\"ReminderMessage\" (keydown.enter)=\"addReminder(ReminderMessage)\">\n<button class=\"btn btn-primary\" (click)=\"addReminder(ReminderMessage)\">Add</button>"

/***/ }),

/***/ "./src/app/reminders/reminders.component.ts":
/*!**************************************************!*\
  !*** ./src/app/reminders/reminders.component.ts ***!
  \**************************************************/
/*! exports provided: RemindersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemindersComponent", function() { return RemindersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _reminders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reminders.service */ "./src/app/reminders.service.ts");



var RemindersComponent = /** @class */ (function () {
    function RemindersComponent(reminderService) {
        this.reminderService = reminderService;
    }
    RemindersComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    RemindersComponent.prototype.getAll = function () {
        var _this = this;
        this.reminderService.getRemindersList().subscribe(function (data) {
            _this.activeReminders = data.filter(function (a) { return !a.complete; });
            _this.completedReminders = data.filter(function (a) { return a.complete; });
        });
    };
    RemindersComponent.prototype.addReminder = function (reminderMessage) {
        var _this = this;
        if (reminderMessage === undefined) {
            this.getAll();
        }
        else {
            var newReminder = {
                message: reminderMessage,
                id: '',
                complete: false
            };
            this.reminderService.addReminder(newReminder).subscribe(function () {
                _this.getAll();
            });
        }
    };
    RemindersComponent.prototype.completeReminder = function (reminder) {
        var _this = this;
        this.reminderService.completeReminder(reminder).subscribe(function () {
            _this.getAll();
        });
    };
    RemindersComponent.prototype.deleteReminder = function (reminder) {
        var _this = this;
        this.reminderService.deleteReminder(reminder).subscribe(function () {
            _this.getAll();
        });
    };
    RemindersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reminders',
            template: __webpack_require__(/*! ./reminders.component.html */ "./src/app/reminders/reminders.component.html"),
            styles: [__webpack_require__(/*! ./reminders.component.css */ "./src/app/reminders/reminders.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_reminders_service__WEBPACK_IMPORTED_MODULE_2__["RemindersService"]])
    ], RemindersComponent);
    return RemindersComponent;
}());



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
var environment = {
    production: false,
    gateway: 'http://localhost:3000',
    callback: 'http://localhost:4200/callback',
    domain: 'dannyrfar.auth0.com',
    clientId: 'GcJw1S33TKBJ2Yw9ntyUGyd4lvszcoEU',
    audience: 'http://remindersApp'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/danny/go/src/github.com/dannyrfar/go-api/ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map