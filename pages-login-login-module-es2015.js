(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/cadastro/cadastro.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/cadastro/cadastro.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"d-flex justify-content-center align-items-center\" style=\"height: 90vh\">\n    <aside class=\"col-sm-8\" >\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Gerenciador Financeiro - Cadastro</h5>\n        <div class=\"card-text\">\n          <form  [formGroup]=\"form\" (ngSubmit)=\"cadastrar()\" >\n            <div class=\"form-group\">\n              <label for=\"Email\">E-mail</label>\n              <input type=\"email\" class=\"form-control\" id=\"Email\" formControlName=\"Email\" placeholder=\"Informe o e-mail\" />\n              <app-form-field-error [form-control]=\"form.get('Email')\"></app-form-field-error>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"password\">Senha</label>\n              <input type=\"password\" class=\"form-control\" id=\"Password\" formControlName=\"Password\" placeholder=\"Senha\"/>\n              <app-form-field-error [form-control]=\"form.get('Password')\"></app-form-field-error>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"ConfirmPassword\">Confirmar Senha</label>\n                <input type=\"password\" class=\"form-control\" id=\"ConfirmPassword\" formControlName=\"ConfirmPassword\" placeholder=\"Confirmar Senha\"/>\n                <app-form-field-error [form-control]=\"form.get('ConfirmPassword')\"></app-form-field-error>\n              </div>\n            <button type=\"submit\" class=\"btn btn-primary btn-lg\" [disabled]=\"form.invalid || submitted\">Cadastrar</button>\n\n            <div class=\"card-text\">\n                Já é cadastrado?\n                <a routerLink=\"/login\">clique aqui para entrar</a>\n            </div>\n            \n          </form>\n        </div>\n        <div class=\"card-text\">\n          <app-server-error-messages [server-error-messages]=\"serverErrorMessages\"></app-server-error-messages>\n        </div>\n      </div>\n    </div>\n  </aside>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login/login.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"d-flex justify-content-center align-items-center\" style=\"height: 79vh\">\n  <aside class=\"col-sm-8\" >\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Gerenciador Financeiro - Entrar</h5>\n        <div class=\"card-text\">\n          <form [formGroup]=\"form\" (ngSubmit)=\"login()\">\n            <div class=\"form-group\">\n              <label for=\"exampleInputEmail1\">E-mail</label>\n              <input type=\"email\" class=\"form-control\" id=\"username\" formControlName=\"username\" placeholder=\"Informe o e-mail\"/>\n              <app-form-field-error [form-control]=\"form.get('username')\"></app-form-field-error>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"exampleInputPassword1\">Senha</label>\n              <input type=\"password\" class=\"form-control\" id=\"password\" formControlName=\"password\"  placeholder=\"Senha\" />\n              <app-form-field-error [form-control]=\"form.get('password')\"></app-form-field-error>\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary btn-lg\" [disabled]=\"form.invalid || submitted\">Entrar</button>\n\n            <div class=\"card-text\">\n                Se você não possui uma conta, \n                <a routerLink=\"/login/cadastro\">clique aqui</a>\n            </div>\n            \n          </form>\n        </div>\n        <div class=\"card-text\">\n          <app-server-error-messages [server-error-messages]=\"serverErrorMessages\"></app-server-error-messages>\n        </div>\n      </div>\n    </div>\n  </aside>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/pages/login/cadastro/cadastro.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/login/cadastro/cadastro.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2NhZGFzdHJvL2NhZGFzdHJvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/login/cadastro/cadastro.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/login/cadastro/cadastro.component.ts ***!
  \************************************************************/
/*! exports provided: CadastroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroComponent", function() { return CadastroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_servicos_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/servicos/auth.service */ "./src/app/core/servicos/auth.service.ts");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! toastr */ "./node_modules/toastr/toastr.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let CadastroComponent = class CadastroComponent {
    constructor(authService, formBuilder) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.serverErrorMessages = null;
        this.setupForm();
        this.submitted = false;
    }
    cadastrar() {
        this.authService.cadastrarForm(this.form.value).subscribe(response => {
            toastr__WEBPACK_IMPORTED_MODULE_3___default.a.success('Cadastro realizado com sucesso!');
            //Limpa token e volta para tela de login
            this.authService.logout();
        }, error => {
            this.serverErrorMessages = error.ModelState.erro;
            toastr__WEBPACK_IMPORTED_MODULE_3___default.a.error('Ocorreu um erro ao processar a sua solicitação!');
        });
    }
    validacaoExtra(form) {
        //Confirmação
        if (form.get('Password').dirty && form.get('Password').value === form.get('ConfirmPassword').value)
            form.get('ConfirmPassword').setErrors(null);
        else
            form.get('ConfirmPassword').setErrors({ 'mismatch': true });
        //Requisitos minimos para senha
        const regex = /^(?=(?:.*?[A-Z]){1})(?=(?:.*?[a-z]){1})(?=(?:.*?[0-9]){1})(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]*$/;
        if (!regex.exec(form.get('Password').value))
            form.get('Password').setErrors({ 'invalidPass': true });
    }
    setupForm() {
        this.form = this.formBuilder.group({
            Email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            Password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]],
            ConfirmPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        }, { validator: this.validacaoExtra });
    }
};
CadastroComponent.ctorParameters = () => [
    { type: _core_servicos_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
CadastroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cadastro',
        template: __webpack_require__(/*! raw-loader!./cadastro.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/cadastro/cadastro.component.html"),
        styles: [__webpack_require__(/*! ./cadastro.component.css */ "./src/app/pages/login/cadastro/cadastro.component.css")]
    })
], CadastroComponent);



/***/ }),

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/pages/login/login/login.component.ts");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "./src/app/pages/login/cadastro/cadastro.component.ts");





const routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'cadastro', component: _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_4__["CadastroComponent"] }
];
let LoginRoutingModule = class LoginRoutingModule {
};
LoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LoginRoutingModule);



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/pages/login/login/login.component.ts");
/* harmony import */ var _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cadastro/cadastro.component */ "./src/app/pages/login/cadastro/cadastro.component.ts");






let LoginModule = class LoginModule {
};
LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _cadastro_cadastro_component__WEBPACK_IMPORTED_MODULE_5__["CadastroComponent"]],
        imports: [
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"]
        ]
    })
], LoginModule);



/***/ }),

/***/ "./src/app/pages/login/login/login.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/login/login/login.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/login/login/login.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/login/login/login.component.ts ***!
  \******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_servicos_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/servicos/auth.service */ "./src/app/core/servicos/auth.service.ts");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! toastr */ "./node_modules/toastr/toastr.js");
/* harmony import */ var toastr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(toastr__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let LoginComponent = class LoginComponent {
    constructor(authService, formBuilder) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.serverErrorMessages = null;
        this.setupForm();
        this.submitted = false;
    }
    ngOnInit() {
        this.authService.logout();
    }
    login() {
        this.authService.loginForm(this.form.value).subscribe(response => {
            this.authService.setUser(response);
        }, error => {
            this.serverErrorMessages = [error.error_description];
            toastr__WEBPACK_IMPORTED_MODULE_3___default.a.error('Ocorreu um erro ao processar a sua solicitação!');
        });
    }
    setupForm() {
        this.form = this.formBuilder.group({
            username: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _core_servicos_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login/login.component.css")]
    })
], LoginComponent);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map