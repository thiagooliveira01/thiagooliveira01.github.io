(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"1Vyx":function(e,r,t){"use strict";t.d(r,"a",(function(){return a}));var s=t("s7LF"),i=t("iInd"),o=t("eIep"),c=t("hUol"),u=t.n(c);class a{constructor(e,r,t,o){this.injector=e,this.resource=r,this.resourceService=t,this.jsonDataToResourceFn=o,this.serverErrorMessages=null,this.submittingForm=!1,this.route=this.injector.get(i.a),this.router=this.injector.get(i.k),this.formBuilder=this.injector.get(s.FormBuilder)}ngOnInit(){this.setCurrentAction(),this.buildResourceForm(),this.loadResource()}ngAfterContentChecked(){this.setPageTitle()}submitForm(){this.submittingForm=!0,"new"==this.currentAction?this.createResource():this.updateResource()}setCurrentAction(){this.currentAction="new"==this.route.snapshot.url[0].path?"new":"edit"}buildResource(){}loadResource(){"edit"==this.currentAction&&this.route.paramMap.pipe(Object(o.a)(e=>this.resourceService.getById(+e.get("id")))).subscribe(e=>{this.resource=e,this.resourceForm.patchValue(e)},e=>alert("Ocorreu um erro no servidor."))}setPageTitle(){this.pageTitle="new"==this.currentAction?this.creationPageTitle():this.editionPageTitle()}creationPageTitle(){return"Novo"}editionPageTitle(){return"Edi\xe7\xe3o"}createResource(){const e=this.jsonDataToResourceFn(this.resourceForm.value);this.resourceService.create(e).subscribe(e=>this.actionsForSuccess(e),e=>this.actionsForError(e))}updateResource(){const e=this.jsonDataToResourceFn(this.resourceForm.value);this.resourceService.update(e).subscribe(e=>this.actionsForSuccess(e),e=>this.actionsForError(e))}actionsForSuccess(e){u.a.success("Solicita\xe7\xe3o processada com sucesso!");const r=this.route.snapshot.parent.url[0].path;this.router.navigateByUrl(r,{skipLocationChange:!0}).then(()=>this.router.navigate([r,e.id,"edit"]))}actionsForError(e){u.a.error("Ocorreu um erro ao processar a sua solicita\xe7\xe3o!"),this.submittingForm=!1,this.serverErrorMessages=422===e.status?JSON.parse(e._body).errors:["Falha na comunica\xe7\xe3o com o servidor. Tente mais tarde."]}}},"1iWG":function(e,r,t){"use strict";t.d(r,"a",(function(){return s}));class s{constructor(e){this.resourceService=e,this.resources=[]}ngOnInit(){this.resourceService.getall().subscribe(e=>this.resources=e.sort((e,r)=>r.id-e.id),e=>alert("Erro ao carregar a lista"))}deleteResource(e){confirm("Deseja realmente excluir este item?")&&this.resourceService.delete(e.id).subscribe(()=>this.resources=this.resources.filter(r=>r!=e),()=>alert("Erro ao tentar excluir"))}}}}]);