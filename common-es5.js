(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/componentes/base-resource-form/base-resource-form.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/shared/componentes/base-resource-form/base-resource-form.component.ts ***!
  \***************************************************************************************/
/*! exports provided: BaseResourceFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseResourceFormComponent", function() { return BaseResourceFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _servicos_base_resource_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../servicos/base-resource.service */ "./src/app/shared/servicos/base-resource.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! toastr */ "./node_modules/toastr/toastr.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_5__);






var BaseResourceFormComponent = /** @class */ (function () {
    function BaseResourceFormComponent(injector, resource, resourceService, jsonDataToResourceFn) {
        this.injector = injector;
        this.resource = resource;
        this.resourceService = resourceService;
        this.jsonDataToResourceFn = jsonDataToResourceFn;
        this.serverErrorMessages = null;
        this.submittingForm = false;
        this.route = this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]);
        this.router = this.injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]);
        this.formBuilder = this.injector.get(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]);
    }
    BaseResourceFormComponent.prototype.ngOnInit = function () {
        this.setCurrentAction();
        this.buildResourceForm();
        this.loadResource();
    };
    BaseResourceFormComponent.prototype.ngAfterContentChecked = function () {
        this.setPageTitle();
    };
    BaseResourceFormComponent.prototype.submitForm = function () {
        this.submittingForm = true;
        if (this.currentAction == 'new')
            this.createResource();
        else //edit
            this.updateResource();
    };
    //metodos privados
    BaseResourceFormComponent.prototype.setCurrentAction = function () {
        if (this.route.snapshot.url[0].path == "new")
            this.currentAction = 'new';
        else
            this.currentAction = 'edit';
    };
    BaseResourceFormComponent.prototype.buildResource = function () {
    };
    BaseResourceFormComponent.prototype.loadResource = function () {
        var _this = this;
        if (this.currentAction == 'edit') {
            this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) { return _this.resourceService.getById(+params.get("id")); }))
                .subscribe(function (resource) {
                _this.resource = resource;
                _this.resourceForm.patchValue(resource); //carregando dados para formulario
            }, function (error) { return alert('Ocorreu um erro no servidor.'); });
        }
    };
    BaseResourceFormComponent.prototype.setPageTitle = function () {
        if (this.currentAction == 'new')
            this.pageTitle = this.creationPageTitle();
        else {
            this.pageTitle = this.editionPageTitle();
        }
    };
    BaseResourceFormComponent.prototype.creationPageTitle = function () {
        return "Novo";
    };
    BaseResourceFormComponent.prototype.editionPageTitle = function () {
        return "Edição";
    };
    BaseResourceFormComponent.prototype.createResource = function () {
        var _this = this;
        var resource = this.jsonDataToResourceFn(this.resourceForm.value);
        this.resourceService.create(resource).subscribe(function (resource) { return _this.actionsForSuccess(resource); }, function (error) { return _this.actionsForError(error); });
    };
    BaseResourceFormComponent.prototype.updateResource = function () {
        var _this = this;
        var resource = this.jsonDataToResourceFn(this.resourceForm.value);
        this.resourceService.update(resource).subscribe(function (resource) { return _this.actionsForSuccess(resource); }, function (error) { return _this.actionsForError(error); });
    };
    BaseResourceFormComponent.prototype.actionsForSuccess = function (resource) {
        var _this = this;
        toastr__WEBPACK_IMPORTED_MODULE_5___default.a.success('Solicitação processada com sucesso!');
        var baseComponentPath = this.route.snapshot.parent.url[0].path;
        //volta para categorias e re-abre o formulario na rota de edit
        this.router.navigateByUrl(baseComponentPath, { skipLocationChange: true }).then(function () { return _this.router.navigate([baseComponentPath, resource.id, 'edit']); });
    };
    BaseResourceFormComponent.prototype.actionsForError = function (error) {
        toastr__WEBPACK_IMPORTED_MODULE_5___default.a.error('Ocorreu um erro ao processar a sua solicitação!');
        this.submittingForm = false;
        if (error.status === 422)
            this.serverErrorMessages = JSON.parse(error._body).errors;
        else
            this.serverErrorMessages = ["Falha na comunicação com o servidor. Tente mais tarde."];
    };
    BaseResourceFormComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
        { type: undefined },
        { type: _servicos_base_resource_service__WEBPACK_IMPORTED_MODULE_3__["BaseResouceService"] },
        { type: Function }
    ]; };
    return BaseResourceFormComponent;
}());



/***/ }),

/***/ "./src/app/shared/componentes/base-resource-list/base-resource-list.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/shared/componentes/base-resource-list/base-resource-list.component.ts ***!
  \***************************************************************************************/
/*! exports provided: BaseResouceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseResouceListComponent", function() { return BaseResouceListComponent; });
/* harmony import */ var _servicos_base_resource_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../servicos/base-resource.service */ "./src/app/shared/servicos/base-resource.service.ts");

var BaseResouceListComponent = /** @class */ (function () {
    function BaseResouceListComponent(resourceService) {
        this.resourceService = resourceService;
        this.resources = [];
    }
    BaseResouceListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resourceService.getall().subscribe(function (resources) { return _this.resources = resources.sort(function (a, b) { return b.id - a.id; }); }, function (error) { return alert('Erro ao carregar a lista'); });
    };
    BaseResouceListComponent.prototype.deleteResource = function (resource) {
        var _this = this;
        var confirmaDelete = confirm('Deseja realmente excluir este item?');
        if (confirmaDelete) {
            this.resourceService.delete(resource.id).subscribe(function () { return _this.resources = _this.resources.filter(function (element) { return element != resource; }); }, function () { return alert('Erro ao tentar excluir'); });
        }
    };
    BaseResouceListComponent.ctorParameters = function () { return [
        { type: _servicos_base_resource_service__WEBPACK_IMPORTED_MODULE_0__["BaseResouceService"] }
    ]; };
    return BaseResouceListComponent;
}());



/***/ })

}]);
//# sourceMappingURL=common-es5.js.map