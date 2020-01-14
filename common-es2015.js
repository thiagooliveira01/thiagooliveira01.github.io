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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _servicos_base_resource_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../servicos/base-resource.service */ "./src/app/shared/servicos/base-resource.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! toastr */ "./node_modules/toastr/toastr.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_5__);






class BaseResourceFormComponent {
    constructor(injector, resource, resourceService, jsonDataToResourceFn) {
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
    ngOnInit() {
        this.setCurrentAction();
        this.buildResourceForm();
        this.loadResource();
    }
    ngAfterContentChecked() {
        this.setPageTitle();
    }
    submitForm() {
        this.submittingForm = true;
        if (this.currentAction == 'new')
            this.createResource();
        else //edit
            this.updateResource();
    }
    //metodos privados
    setCurrentAction() {
        if (this.route.snapshot.url[0].path == "new")
            this.currentAction = 'new';
        else
            this.currentAction = 'edit';
    }
    buildResource() {
    }
    loadResource() {
        if (this.currentAction == 'edit') {
            this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(params => this.resourceService.getById(+params.get("id"))))
                .subscribe((resource) => {
                this.resource = resource;
                this.resourceForm.patchValue(resource); //carregando dados para formulario
            }, (error) => alert('Ocorreu um erro no servidor.'));
        }
    }
    setPageTitle() {
        if (this.currentAction == 'new')
            this.pageTitle = this.creationPageTitle();
        else {
            this.pageTitle = this.editionPageTitle();
        }
    }
    creationPageTitle() {
        return "Novo";
    }
    editionPageTitle() {
        return "Edição";
    }
    createResource() {
        const resource = this.jsonDataToResourceFn(this.resourceForm.value);
        this.resourceService.create(resource).subscribe(resource => this.actionsForSuccess(resource), error => this.actionsForError(error));
    }
    updateResource() {
        const resource = this.jsonDataToResourceFn(this.resourceForm.value);
        this.resourceService.update(resource).subscribe(resource => this.actionsForSuccess(resource), error => this.actionsForError(error));
    }
    actionsForSuccess(resource) {
        toastr__WEBPACK_IMPORTED_MODULE_5___default.a.success('Solicitação processada com sucesso!');
        const baseComponentPath = this.route.snapshot.parent.url[0].path;
        //volta para categorias e re-abre o formulario na rota de edit
        this.router.navigateByUrl(baseComponentPath, { skipLocationChange: true }).then(() => this.router.navigate([baseComponentPath, resource.id, 'edit']));
    }
    actionsForError(error) {
        toastr__WEBPACK_IMPORTED_MODULE_5___default.a.error('Ocorreu um erro ao processar a sua solicitação!');
        this.submittingForm = false;
        if (error.status === 422)
            this.serverErrorMessages = JSON.parse(error._body).errors;
        else
            this.serverErrorMessages = ["Falha na comunicação com o servidor. Tente mais tarde."];
    }
}
BaseResourceFormComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
    { type: undefined },
    { type: _servicos_base_resource_service__WEBPACK_IMPORTED_MODULE_3__["BaseResouceService"] },
    { type: Function }
];


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

class BaseResouceListComponent {
    constructor(resourceService) {
        this.resourceService = resourceService;
        this.resources = [];
    }
    ngOnInit() {
        this.resourceService.getall().subscribe(resources => this.resources = resources.sort((a, b) => b.id - a.id), error => alert('Erro ao carregar a lista'));
    }
    deleteResource(resource) {
        const confirmaDelete = confirm('Deseja realmente excluir este item?');
        if (confirmaDelete) {
            this.resourceService.delete(resource.id).subscribe(() => this.resources = this.resources.filter(element => element != resource), () => alert('Erro ao tentar excluir'));
        }
    }
}
BaseResouceListComponent.ctorParameters = () => [
    { type: _servicos_base_resource_service__WEBPACK_IMPORTED_MODULE_0__["BaseResouceService"] }
];


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map