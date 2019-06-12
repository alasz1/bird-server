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

/***/ "./src/app/addsighting/addsighting.component.css":
/*!*******************************************************!*\
  !*** ./src/app/addsighting/addsighting.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\r\n    margin: 1em;\r\n}\r\n\r\nbutton {\r\n    margin: 1em;\r\n}\r\n\r\n.newSighting {\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkc2lnaHRpbmcvYWRkc2lnaHRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FkZHNpZ2h0aW5nL2FkZHNpZ2h0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XHJcbiAgICBtYXJnaW46IDFlbTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMWVtO1xyXG59XHJcblxyXG4ubmV3U2lnaHRpbmcge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/addsighting/addsighting.component.html":
/*!********************************************************!*\
  !*** ./src/app/addsighting/addsighting.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"newSighting\">\r\n  <h3>Add New Observation</h3>\r\n\r\n  <mat-form-field appearance=\"outline\">\r\n    <mat-label>Species</mat-label>\r\n    <input matInput #species>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field appearance=\"outline\">\r\n    <mat-label>Rarity</mat-label>\r\n    <select matNativeControl required #rarity>\r\n      <option value=\"common\">Common</option>\r\n      <option value=\"rare\">Rare</option>\r\n      <option value=\"extremely rare\">Extremely Rare</option>\r\n    </select>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field appearance=\"outline\">\r\n    <mat-label>Notes</mat-label>\r\n    <textarea matInput #notes></textarea>\r\n  </mat-form-field>\r\n  <br />\r\n\r\n  <!-- Camera input / add image:\r\n  <input type=\"file\" accept=\"image/*\" capture=\"environment\"> -->\r\n\r\n  <button mat-stroked-button (click)=\"addSighting(species.value, rarity.value, notes.value);species.value='';rarity.value='';notes.value=''\">Add</button>\r\n  <button mat-stroked-button routerLink=\"/\" routerLinkActive=\"link-active\">Cancel</button>\r\n</div>"

/***/ }),

/***/ "./src/app/addsighting/addsighting.component.ts":
/*!******************************************************!*\
  !*** ./src/app/addsighting/addsighting.component.ts ***!
  \******************************************************/
/*! exports provided: AddsightingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddsightingComponent", function() { return AddsightingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bird_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bird.service */ "./src/app/bird.service.ts");
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../location.service */ "./src/app/location.service.ts");
/* harmony import */ var _bird__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bird */ "./src/app/bird.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AddsightingComponent = /** @class */ (function () {
    function AddsightingComponent(birdService, locationService, router) {
        this.birdService = birdService;
        this.locationService = locationService;
        this.router = router;
    }
    AddsightingComponent.prototype.ngOnInit = function () {
    };
    AddsightingComponent.prototype.addSighting = function (species, rarity, notes, timestamp, datetime, coordinates) {
        var _this = this;
        // get timestamp & datetime
        timestamp = Date.now();
        var rawdate = new Date;
        var minutes = rawdate.getMinutes();
        var minutesStr = "";
        // add 0 if minutes are only one digit long
        if (minutes.toString().length < 2) {
            minutesStr = "0" + minutes.toString();
        }
        else {
            minutesStr = minutes.toString();
        }
        // concatenate date & time
        datetime = "" + rawdate.getDate() + "." + (rawdate.getMonth() + 1) + "." + rawdate.getFullYear() + ", " + rawdate.getHours() + ":" + minutesStr;
        console.log(datetime);
        // get geolocation
        // If promise has returned location
        this.locationService.getPosition().then(function (pos) {
            console.log("Lng: " + pos.lng + ", Lat: " + pos.lat);
            var coordinates = "Lat: " + pos.lat + ", Lng: " + pos.lng;
            console.log(coordinates);
            var nb = new _bird__WEBPACK_IMPORTED_MODULE_4__["Sighting"](timestamp, species, rarity, notes, timestamp, datetime, coordinates);
            _this.birdService.addSighting(nb).subscribe(function (newsighting) {
                console.dir(newsighting);
                _this.router.navigateByUrl("/");
            });
        })
            // If no geolocation could be fetched
            .catch(function (error) {
            console.log(error.message);
            coordinates = "coordinates unavailable";
            var nb = new _bird__WEBPACK_IMPORTED_MODULE_4__["Sighting"](timestamp, species, rarity, notes, timestamp, datetime, coordinates);
            _this.birdService.addSighting(nb).subscribe(function (newsighting) {
                console.dir(newsighting);
                _this.router.navigateByUrl("/");
            });
        });
    };
    AddsightingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addsighting',
            template: __webpack_require__(/*! ./addsighting.component.html */ "./src/app/addsighting/addsighting.component.html"),
            styles: [__webpack_require__(/*! ./addsighting.component.css */ "./src/app/addsighting/addsighting.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_bird_service__WEBPACK_IMPORTED_MODULE_2__["BirdService"], _location_service__WEBPACK_IMPORTED_MODULE_3__["LocationService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AddsightingComponent);
    return AddsightingComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _addsighting_addsighting_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addsighting/addsighting.component */ "./src/app/addsighting/addsighting.component.ts");
/* harmony import */ var _editsighting_editsighting_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editsighting/editsighting.component */ "./src/app/editsighting/editsighting.component.ts");






var routes = [{
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: '/',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"]
    },
    {
        path: 'addsighting',
        component: _addsighting_addsighting_component__WEBPACK_IMPORTED_MODULE_4__["AddsightingComponent"]
    },
    {
        path: 'editsighting/:id',
        component: _editsighting_editsighting_component__WEBPACK_IMPORTED_MODULE_5__["EditsightingComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
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

module.exports = "\r\nimg {\r\n    margin-right: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1nIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n<mat-toolbar>\r\n <img src=\"../assets/bird.png\">\r\n  <h1>\r\n    {{ title }}\r\n  </h1>\r\n</mat-toolbar>\r\n\r\n<router-outlet></router-outlet>"

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
        this.title = 'BirdWatch';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _bird_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bird.service */ "./src/app/bird.service.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _addsighting_addsighting_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./addsighting/addsighting.component */ "./src/app/addsighting/addsighting.component.ts");
/* harmony import */ var _editsighting_editsighting_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./editsighting/editsighting.component */ "./src/app/editsighting/editsighting.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-order-pipe */ "./node_modules/ngx-order-pipe/ngx-order-pipe.es5.js");






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"],
                _addsighting_addsighting_component__WEBPACK_IMPORTED_MODULE_8__["AddsightingComponent"],
                _editsighting_editsighting_component__WEBPACK_IMPORTED_MODULE_9__["EditsightingComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                ngx_order_pipe__WEBPACK_IMPORTED_MODULE_21__["OrderModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDividerModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"]
            ],
            providers: [_bird_service__WEBPACK_IMPORTED_MODULE_6__["BirdService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bird.service.ts":
/*!*********************************!*\
  !*** ./src/app/bird.service.ts ***!
  \*********************************/
/*! exports provided: BirdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirdService", function() { return BirdService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var BirdService = /** @class */ (function () {
    function BirdService(http) {
        this.http = http;
    }
    BirdService.prototype.getSightings = function () {
        return this.http.get(apiUrl);
    };
    BirdService.prototype.addSighting = function (bird) {
        return this.http.post(apiUrl, bird, httpOptions);
    };
    BirdService.prototype.getSighting = function (id) {
        return this.http.get(apiUrl + "/" + id);
    };
    BirdService.prototype.updateSighting = function (bird) {
        return this.http.put(apiUrl + "/" + bird.id, bird, httpOptions);
    };
    BirdService.prototype.deleteSighting = function (id) {
        return this.http.delete(apiUrl + "/" + id);
    };
    BirdService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BirdService);
    return BirdService;
}());

// const apiUrl = "http://localhost:3000/api/birds";
var apiUrl = "https://bird-app-1.herokuapp.com/api/birds";
var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };


/***/ }),

/***/ "./src/app/bird.ts":
/*!*************************!*\
  !*** ./src/app/bird.ts ***!
  \*************************/
/*! exports provided: Sighting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sighting", function() { return Sighting; });
var Sighting = /** @class */ (function () {
    function Sighting(id, species, rarity, notes, timestamp, datetime, coordinates) {
        this.id = id;
        this.species = species;
        this.rarity = rarity;
        this.notes = notes;
        this.timestamp = timestamp;
        this.datetime = datetime;
        this.coordinates = coordinates;
    }
    return Sighting;
}());



/***/ }),

/***/ "./src/app/editsighting/editsighting.component.css":
/*!*********************************************************!*\
  !*** ./src/app/editsighting/editsighting.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\r\n    margin: 1em;\r\n}\r\n\r\nbutton {\r\n    margin: 1em;\r\n}\r\n\r\n.updateDetails {\r\n    text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdHNpZ2h0aW5nL2VkaXRzaWdodGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvZWRpdHNpZ2h0aW5nL2VkaXRzaWdodGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luOiAxZW07XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDFlbTtcclxufVxyXG5cclxuLnVwZGF0ZURldGFpbHMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/editsighting/editsighting.component.html":
/*!**********************************************************!*\
  !*** ./src/app/editsighting/editsighting.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"updateDetails\" *ngIf=\"sighting\">\r\n  <h3>Update / delete sighting details</h3>\r\n\r\n  <mat-form-field appearance=\"outline\">\r\n    <mat-label>Species</mat-label>\r\n    <input matInput type=\"text\" [(ngModel)]=\"sighting.species\" placeholder=\"Species\" />\r\n  </mat-form-field>\r\n\r\n  <mat-form-field appearance=\"outline\">\r\n    <mat-label>Rarity</mat-label>\r\n    <select matNativeControl required #rarity [(ngModel)]=\"sighting.rarity\">\r\n      <option value=\"common\">Common</option>\r\n      <option value=\"rare\">Rare</option>\r\n      <option value=\"extremely rare\">Extremely Rare</option>\r\n    </select>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field appearance=\"outline\">\r\n    <mat-label>Notes</mat-label>\r\n    <textarea matInput type=\"text\" [(ngModel)]=\"sighting.notes\" placeholder=\"Notes\"></textarea>\r\n  </mat-form-field>\r\n\r\n  <br>\r\n  <button mat-stroked-button (click)=\"update()\">Update Sighting</button>\r\n  <button mat-stroked-button (click)=\"delete()\">Delete Sighting</button>\r\n  <button mat-stroked-button (click)=\"goBack()\">Cancel</button>\r\n</div>"

/***/ }),

/***/ "./src/app/editsighting/editsighting.component.ts":
/*!********************************************************!*\
  !*** ./src/app/editsighting/editsighting.component.ts ***!
  \********************************************************/
/*! exports provided: EditsightingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditsightingComponent", function() { return EditsightingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bird_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bird.service */ "./src/app/bird.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var EditsightingComponent = /** @class */ (function () {
    function EditsightingComponent(birdService, activatedRoute, router) {
        this.birdService = birdService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    EditsightingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            var id = params['id'];
            _this.birdService.getSighting(id).subscribe(function (sighting) {
                _this.sighting = sighting;
                console.log(_this.sighting);
            });
        });
    };
    EditsightingComponent.prototype.update = function () {
        var _this = this;
        console.dir(this.sighting);
        this.birdService.updateSighting(this.sighting).subscribe(function (sighting) {
            _this.router.navigateByUrl("/");
        });
    };
    EditsightingComponent.prototype.delete = function () {
        var _this = this;
        this.birdService.deleteSighting(this.sighting.id).subscribe(function () {
            _this.router.navigateByUrl("/");
        });
    };
    EditsightingComponent.prototype.goBack = function () {
        this.router.navigateByUrl("/");
    };
    EditsightingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editsighting',
            template: __webpack_require__(/*! ./editsighting.component.html */ "./src/app/editsighting/editsighting.component.html"),
            styles: [__webpack_require__(/*! ./editsighting.component.css */ "./src/app/editsighting/editsighting.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_bird_service__WEBPACK_IMPORTED_MODULE_2__["BirdService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EditsightingComponent);
    return EditsightingComponent;
}());



/***/ }),

/***/ "./src/app/location.service.ts":
/*!*************************************!*\
  !*** ./src/app/location.service.ts ***!
  \*************************************/
/*! exports provided: LocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return LocationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LocationService = /** @class */ (function () {
    function LocationService() {
    }
    LocationService.prototype.getPosition = function () {
        return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(function (resp) {
                resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
            }, function (err) {
                reject(err);
            });
        });
    };
    LocationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LocationService);
    return LocationService;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.main {\r\n    text-align: center;\r\n}\r\n\r\nbutton {\r\n    margin:1em;\r\n}\r\n\r\ndiv.tablewrapper {\r\n    margin: 5px;\r\n}\r\n\r\ntable {\r\n    width: 100%;\r\n}\r\n\r\ntd, th {\r\n    font-size: .6em;\r\n    text-align: left;\r\n    padding: 4px;\r\n}\r\n\r\ntd:hover {\r\n    cursor: pointer;\r\n}\r\n\r\ntd#notes {\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    max-width: 50px;\r\n}\r\n\r\ntr.observations {\r\n    background-color: #f5f5f5;\r\n}\r\n\r\n@media screen and (min-width: 600px) {\r\n    td, th {\r\n        font-size: .8em;\r\n        text-align: left;\r\n        padding: 8px;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsWUFBWTtJQUNoQjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm1haW4ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgbWFyZ2luOjFlbTtcclxufVxyXG5cclxuZGl2LnRhYmxld3JhcHBlciB7XHJcbiAgICBtYXJnaW46IDVweDtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRkLCB0aCB7XHJcbiAgICBmb250LXNpemU6IC42ZW07XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG59XHJcblxyXG50ZDpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbnRkI25vdGVzIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBtYXgtd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbnRyLm9ic2VydmF0aW9ucyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gICAgdGQsIHRoIHtcclxuICAgICAgICBmb250LXNpemU6IC44ZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n\r\n  <h2>Observations</h2>\r\n\r\n  <mat-divider></mat-divider>\r\n\r\n  <button mat-stroked-button routerLink=\"/addsighting\" routerLinkActive=\"link-active\">Add Observation</button>\r\n\r\n  <mat-divider></mat-divider>\r\n\r\n    <table>\r\n\r\n      <tr>\r\n        <th>Species</th>\r\n        <th>Rarity</th>\r\n        <th>Notes</th>\r\n        <th>Date & Time</th>\r\n        <th>Coordinates</th>\r\n      </tr>\r\n\r\n      <tr *ngFor=\"let b of bird | orderBy: timestamp\" matTooltip=\"Edit {{b.species}}\" (click)=onSelect(b)\r\n        routerLink=\"/editsighting/{{b.id}}\" class=\"observations\">\r\n\r\n        <td>{{b.species}}</td>\r\n        <td>{{b.rarity}}</td>\r\n        <td id=\"notes\">{{b.notes}}</td>\r\n        <td>{{b.datetime}}</td>\r\n        <td>{{b.coordinates}}</td>\r\n\r\n      </tr>\r\n\r\n    </table>\r\n\r\n  <mat-divider></mat-divider>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bird_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bird.service */ "./src/app/bird.service.ts");



var MainComponent = /** @class */ (function () {
    function MainComponent(birdService) {
        this.birdService = birdService;
    }
    MainComponent.prototype.ngOnInit = function () {
        this.getAllSightings();
    };
    MainComponent.prototype.getAllSightings = function () {
        var _this = this;
        // read data from localstorage
        var birdData = JSON.parse(localStorage.getItem("birdData"));
        console.log("birdData retrieved from localstorage: ", birdData);
        if (birdData) {
            this.bird = birdData;
        }
        // read data from server
        this.birdService.getSightings().subscribe(function (bird) {
            _this.bird = bird;
            console.log("birdData retrieved from server: ", bird);
            // send data to localstorage
            localStorage.setItem("birdData", JSON.stringify(_this.bird));
        });
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_bird_service__WEBPACK_IMPORTED_MODULE_2__["BirdService"]])
    ], MainComponent);
    return MainComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\antti\Documents\CD haku\bird-client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map