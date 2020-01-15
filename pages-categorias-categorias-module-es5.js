(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-categorias-categorias-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/categorias/categoria-form/categoria-form.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/categorias/categoria-form/categoria-form.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-bread-crumb\n    [itens]=\"[{texto: 'Categorias', link: '/categorias'}, {texto: pageTitle}]\"\n></app-bread-crumb>\n\n<app-page-header\n    [page-title]=\"pageTitle\"\n    button-text=\"<< Voltar\"\n    button-link=\"/categorias\"\n    button-class=\"btn-light\"\n></app-page-header>\n\n<form [formGroup] = \"resourceForm\" (submit)=\"submitForm()\">\n    <div class=\"card\">\n        <div class=\"card-header\">\n            Informações sobre a categoria\n        </div>\n        <div class=\"card-body\">\n            <div class=\"form-row\">\n                <div class=\"formgroup col-md-4\">\n                    <label for=\"nome\">Nome</label>\n                    <input type=\"text\" class=\"form-control\" id=\"nome\" formControlName=\"nome\">\n\n                    <app-form-field-error [form-control]=\"resourceForm.get('nome')\"></app-form-field-error>\n\n                </div>\n                <div class=\"form-group col-md-8\">\n                    <label for=\"descricao\">Descrição</label>\n                    <input type=\"text\" class=\"form-control\" id=\"descricao\" formControlName=\"descricao\">\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <app-server-error-messages [server-error-messages]=\"serverErrorMessages\"></app-server-error-messages>\n\n    <button [disabled]=\"submittingForm || resourceForm.invalid\" type=\"submit\" class=\"btn btn-primary btn-lg float-right mt-3\">Salvar</button>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/categorias/lista-categoria/lista-categoria.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/categorias/lista-categoria/lista-categoria.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-bread-crumb\n [itens]=\"[{texto: 'Categorias'}]\"\n></app-bread-crumb>\n\n<app-page-header\n    page-title=\"Categorias\"\n    button-text=\"+ Nova Categoria\"\n    button-link=\"new\"\n    button-class=\"btn-success\"\n></app-page-header>\n\n<table class=\"table table-hover\">\n    <thead>\n        <tr class=\"bg-primary text-light\">\n            <th>Categoria</th>\n            <th>Ações</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let categoria of resources\">\n            <td>\n                <strong>{{categoria.nome}}</strong><br>\n                <small>{{categoria.descricao}}</small>\n            </td>\n            <td>\n                <a [routerLink]=\"[categoria.id, 'edit']\" class=\"btn btn-outline-info btn-sm mr-2\">Editar</a>\n                <button (click)=\"deleteResource(categoria)\" class=\"btn btn-outline-danger btn-sm\">Excluir</button>\n            </td>\n        </tr>\n    </tbody>\n</table>"

/***/ }),

/***/ "./src/app/pages/categorias/categoria-form/categoria-form.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/pages/categorias/categoria-form/categoria-form.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGVnb3JpYXMvY2F0ZWdvcmlhLWZvcm0vY2F0ZWdvcmlhLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/categorias/categoria-form/categoria-form.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/categorias/categoria-form/categoria-form.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CategoriaFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaFormComponent", function() { return CategoriaFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_componentes_base_resource_form_base_resource_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/componentes/base-resource-form/base-resource-form.component */ "./src/app/shared/componentes/base-resource-form/base-resource-form.component.ts");
/* harmony import */ var _shared_categoria_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/categoria.model */ "./src/app/pages/categorias/shared/categoria.model.ts");
/* harmony import */ var _shared_categoria_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/categoria.service */ "./src/app/pages/categorias/shared/categoria.service.ts");






var CategoriaFormComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CategoriaFormComponent, _super);
    function CategoriaFormComponent(categoriaService, injector) {
        var _this = _super.call(this, injector, new _shared_categoria_model__WEBPACK_IMPORTED_MODULE_4__["Categoria"](), categoriaService, _shared_categoria_model__WEBPACK_IMPORTED_MODULE_4__["Categoria"].fromJson) || this;
        _this.categoriaService = categoriaService;
        _this.injector = injector;
        return _this;
    }
    CategoriaFormComponent.prototype.buildResourceForm = function () {
        this.resourceForm = this.formBuilder.group({
            id: [null],
            nome: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
            descricao: [null]
        });
    };
    CategoriaFormComponent.prototype.creationPageTitle = function () {
        return "Cadastro de Nova Categoria";
    };
    CategoriaFormComponent.prototype.editionPageTitle = function () {
        var nomeCategoria = this.resource.nome || "";
        return "Editando Categoria: " + nomeCategoria;
    };
    CategoriaFormComponent.ctorParameters = function () { return [
        { type: _shared_categoria_service__WEBPACK_IMPORTED_MODULE_5__["CategoriaService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
    ]; };
    CategoriaFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categoria-form',
            template: __webpack_require__(/*! raw-loader!./categoria-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/categorias/categoria-form/categoria-form.component.html"),
            styles: [__webpack_require__(/*! ./categoria-form.component.css */ "./src/app/pages/categorias/categoria-form/categoria-form.component.css")]
        })
    ], CategoriaFormComponent);
    return CategoriaFormComponent;
}(src_app_shared_componentes_base_resource_form_base_resource_form_component__WEBPACK_IMPORTED_MODULE_3__["BaseResourceFormComponent"]));



/***/ }),

/***/ "./src/app/pages/categorias/categorias-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/categorias/categorias-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CategoriasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasRoutingModule", function() { return CategoriasRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _lista_categoria_lista_categoria_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lista-categoria/lista-categoria.component */ "./src/app/pages/categorias/lista-categoria/lista-categoria.component.ts");
/* harmony import */ var _categoria_form_categoria_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categoria-form/categoria-form.component */ "./src/app/pages/categorias/categoria-form/categoria-form.component.ts");





var routes = [
    { path: '', component: _lista_categoria_lista_categoria_component__WEBPACK_IMPORTED_MODULE_3__["ListaCategoriaComponent"] },
    { path: 'new', component: _categoria_form_categoria_form_component__WEBPACK_IMPORTED_MODULE_4__["CategoriaFormComponent"] },
    { path: ':id/edit', component: _categoria_form_categoria_form_component__WEBPACK_IMPORTED_MODULE_4__["CategoriaFormComponent"] }
];
var CategoriasRoutingModule = /** @class */ (function () {
    function CategoriasRoutingModule() {
    }
    CategoriasRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CategoriasRoutingModule);
    return CategoriasRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/categorias/categorias.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/categorias/categorias.module.ts ***!
  \*******************************************************/
/*! exports provided: CategoriasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasModule", function() { return CategoriasModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _categorias_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categorias-routing.module */ "./src/app/pages/categorias/categorias-routing.module.ts");
/* harmony import */ var _lista_categoria_lista_categoria_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lista-categoria/lista-categoria.component */ "./src/app/pages/categorias/lista-categoria/lista-categoria.component.ts");
/* harmony import */ var _categoria_form_categoria_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categoria-form/categoria-form.component */ "./src/app/pages/categorias/categoria-form/categoria-form.component.ts");






var CategoriasModule = /** @class */ (function () {
    function CategoriasModule() {
    }
    CategoriasModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_lista_categoria_lista_categoria_component__WEBPACK_IMPORTED_MODULE_4__["ListaCategoriaComponent"], _categoria_form_categoria_form_component__WEBPACK_IMPORTED_MODULE_5__["CategoriaFormComponent"]],
            imports: [
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _categorias_routing_module__WEBPACK_IMPORTED_MODULE_3__["CategoriasRoutingModule"]
            ]
        })
    ], CategoriasModule);
    return CategoriasModule;
}());



/***/ }),

/***/ "./src/app/pages/categorias/lista-categoria/lista-categoria.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/pages/categorias/lista-categoria/lista-categoria.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGVnb3JpYXMvbGlzdGEtY2F0ZWdvcmlhL2xpc3RhLWNhdGVnb3JpYS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/categorias/lista-categoria/lista-categoria.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/categorias/lista-categoria/lista-categoria.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ListaCategoriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaCategoriaComponent", function() { return ListaCategoriaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_categoria_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/categoria.service */ "./src/app/pages/categorias/shared/categoria.service.ts");
/* harmony import */ var src_app_shared_componentes_base_resource_list_base_resource_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/componentes/base-resource-list/base-resource-list.component */ "./src/app/shared/componentes/base-resource-list/base-resource-list.component.ts");




var ListaCategoriaComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ListaCategoriaComponent, _super);
    function ListaCategoriaComponent(categoriaService) {
        var _this = _super.call(this, categoriaService) || this;
        _this.categoriaService = categoriaService;
        return _this;
    }
    ListaCategoriaComponent.ctorParameters = function () { return [
        { type: _shared_categoria_service__WEBPACK_IMPORTED_MODULE_2__["CategoriaService"] }
    ]; };
    ListaCategoriaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lista-categoria',
            template: __webpack_require__(/*! raw-loader!./lista-categoria.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/categorias/lista-categoria/lista-categoria.component.html"),
            styles: [__webpack_require__(/*! ./lista-categoria.component.css */ "./src/app/pages/categorias/lista-categoria/lista-categoria.component.css")]
        })
    ], ListaCategoriaComponent);
    return ListaCategoriaComponent;
}(src_app_shared_componentes_base_resource_list_base_resource_list_component__WEBPACK_IMPORTED_MODULE_3__["BaseResouceListComponent"]));



/***/ }),

/***/ "./src/app/pages/categorias/shared/categoria.model.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/categorias/shared/categoria.model.ts ***!
  \************************************************************/
/*! exports provided: Categoria */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Categoria", function() { return Categoria; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_models_base_resource_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/base-resource.model */ "./src/app/shared/models/base-resource.model.ts");


var Categoria = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Categoria, _super);
    function Categoria(id, nome, descricao) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.nome = nome;
        _this.descricao = descricao;
        return _this;
    }
    Categoria.fromJson = function (jsonData) {
        return Object.assign(new Categoria, jsonData);
    };
    Categoria.ctorParameters = function () { return [
        { type: Number },
        { type: String },
        { type: String }
    ]; };
    return Categoria;
}(src_app_shared_models_base_resource_model__WEBPACK_IMPORTED_MODULE_1__["BaseResourceModel"]));



/***/ }),

/***/ "./src/app/pages/categorias/shared/categoria.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/categorias/shared/categoria.service.ts ***!
  \**************************************************************/
/*! exports provided: CategoriaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaService", function() { return CategoriaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _categoria_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categoria.model */ "./src/app/pages/categorias/shared/categoria.model.ts");
/* harmony import */ var src_app_shared_servicos_base_resource_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/servicos/base-resource.service */ "./src/app/shared/servicos/base-resource.service.ts");




var CategoriaService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CategoriaService, _super);
    function CategoriaService(injector) {
        var _this = _super.call(this, 'api/categorias', injector, _categoria_model__WEBPACK_IMPORTED_MODULE_2__["Categoria"].fromJson) || this;
        _this.injector = injector;
        return _this;
    }
    CategoriaService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
    ]; };
    CategoriaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CategoriaService);
    return CategoriaService;
}(src_app_shared_servicos_base_resource_service__WEBPACK_IMPORTED_MODULE_3__["BaseResouceService"]));



/***/ }),

/***/ "./src/app/shared/models/base-resource.model.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/models/base-resource.model.ts ***!
  \******************************************************/
/*! exports provided: BaseResourceModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseResourceModel", function() { return BaseResourceModel; });
var BaseResourceModel = /** @class */ (function () {
    function BaseResourceModel() {
    }
    return BaseResourceModel;
}());



/***/ }),

/***/ "./src/app/shared/servicos/base-resource.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/servicos/base-resource.service.ts ***!
  \**********************************************************/
/*! exports provided: BaseResouceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseResouceService", function() { return BaseResouceService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var BaseResouceService = /** @class */ (function () {
    function BaseResouceService(apiPath, injector, jsonDataToResourceFn) {
        this.apiPath = apiPath;
        this.injector = injector;
        this.jsonDataToResourceFn = jsonDataToResourceFn;
        this.urlBase = 'https://thiagooliveira.somee.com/';
        this.http = injector.get(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]);
    }
    BaseResouceService.prototype.getall = function () {
        return this.http.get(this.urlBase + this.apiPath).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.jsonDataToResources.bind(this)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    BaseResouceService.prototype.getById = function (id) {
        var url = this.urlBase + this.apiPath + "/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.jsonDataToResource.bind(this)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    BaseResouceService.prototype.create = function (resource) {
        return this.http.post(this.urlBase + this.apiPath, resource).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.jsonDataToResource.bind(this)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    BaseResouceService.prototype.update = function (resource) {
        var url = this.urlBase + this.apiPath + "/" + resource.id;
        return this.http.put(url, resource).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () { return resource; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    BaseResouceService.prototype.delete = function (id) {
        var url = this.urlBase + this.apiPath + "/" + id;
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () { return null; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    //Medotodos protegidos
    BaseResouceService.prototype.jsonDataToResources = function (jsonData) {
        var _this = this;
        var resources = [];
        jsonData.forEach(function (element) { return resources.push(_this.jsonDataToResourceFn(element)); });
        return resources;
    };
    BaseResouceService.prototype.jsonDataToResource = function (jsonData) {
        return this.jsonDataToResourceFn(jsonData);
    };
    BaseResouceService.prototype.handleError = function (error) {
        console.log("Erro na requisição ->", error);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
    };
    BaseResouceService.ctorParameters = function () { return [
        { type: String },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"] },
        { type: Function }
    ]; };
    return BaseResouceService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-categorias-categorias-module-es5.js.map