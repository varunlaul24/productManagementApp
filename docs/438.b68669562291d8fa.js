"use strict";(self.webpackChunkproductManagement=self.webpackChunkproductManagement||[]).push([[438],{8438:(F,p,a)=>{a.r(p),a.d(p,{AuthModule:()=>U});var m=a(6895),e=a(8256),c=a(384),r=a(433),d=a(2367);function h(o,l){1&o&&(e.TgZ(0,"small",9),e._uU(1," Enter a valid email address "),e.qZA())}function Z(o,l){1&o&&(e.TgZ(0,"p",10),e._uU(1,"Invalid email or password"),e.qZA())}let b=(()=>{class o{constructor(i){this.authService=i,this.userDetails={email:"",password:""},this.loginFailed=!1,this.errorMessage=""}onLogin(i){if(i.valid){const{email:t,password:n}=i.value;this.authService.login(t,n).subscribe({next:s=>{console.log("Login successful",s)},error:s=>{console.error("Login failed",s),this.loginFailed=!0,this.errorMessage="Login failed. Please check your credentials and try again."}})}}static#e=this.\u0275fac=function(t){return new(t||o)(e.Y36(c.e))};static#o=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-login"]],decls:21,vars:4,consts:[[3,"ngSubmit"],["loginForm","ngForm"],["for","email"],["type","email","id","email","name","email","required","",3,"ngModel","ngModelChange"],["class","text-danger",4,"ngIf"],["for","password"],["type","password","id","password","name","password","required","",3,"ngModel","ngModelChange"],["style","color: red;",4,"ngIf"],["routerLink","/auth/signup"],[1,"text-danger"],[2,"color","red"]],template:function(t,n){if(1&t){const s=e.EpF();e.TgZ(0,"h2"),e._uU(1,"Login"),e.qZA(),e.TgZ(2,"div")(3,"form",0,1),e.NdJ("ngSubmit",function(){e.CHM(s);const u=e.MAs(4);return e.KtG(n.onLogin(u))}),e.TgZ(5,"div")(6,"label",2),e._uU(7,"Email:"),e.qZA(),e.TgZ(8,"input",3),e.NdJ("ngModelChange",function(u){return n.userDetails.email=u}),e.qZA(),e.YNc(9,h,2,0,"small",4),e.qZA(),e.TgZ(10,"div")(11,"label",5),e._uU(12,"Password:"),e.qZA(),e.TgZ(13,"input",6),e.NdJ("ngModelChange",function(u){return n.userDetails.password=u}),e.qZA()(),e.TgZ(14,"button"),e._uU(15,"Login"),e.qZA()(),e.YNc(16,Z,2,0,"p",7),e.qZA(),e.TgZ(17,"p"),e._uU(18," Don't have an account ? "),e.TgZ(19,"a",8),e._uU(20,"Signup here"),e.qZA()()}if(2&t){const s=e.MAs(4);e.xp6(8),e.Q6J("ngModel",n.userDetails.email),e.xp6(1),e.Q6J("ngIf",(null==s.controls.email?null:s.controls.email.touched)&&s.controls.email.invalid),e.xp6(4),e.Q6J("ngModel",n.userDetails.password),e.xp6(3),e.Q6J("ngIf",n.loginFailed)}},dependencies:[m.O5,r._Y,r.Fj,r.JJ,r.JL,r.Q7,r.On,r.F,d.rH],styles:["form[_ngcontent-%COMP%]{margin:auto;max-width:30%;padding:10px;background-color:#f9f9f9;border-radius:5px;box-shadow:0 0 10px #010000}div[_ngcontent-%COMP%]{margin-bottom:10px}label[_ngcontent-%COMP%]{margin-bottom:5px;padding:5px;font-size:14px;width:100%}input[_ngcontent-%COMP%]{border:1px solid #cccccc;padding:5px;font-size:14px;width:100%;box-sizing:border-box;border-radius:5px}button[_ngcontent-%COMP%]{padding:7px;color:#fff;background-color:#007bff;border:none;border-radius:5px;cursor:pointer}button[_ngcontent-%COMP%]:hover{background-color:#0056b3}p[_ngcontent-%COMP%]{margin-top:10px;text-align:center;color:red}h2[_ngcontent-%COMP%]{padding:10px}"]})}return o})();function _(o,l){1&o&&(e.TgZ(0,"small"),e._uU(1," Username is required. "),e.qZA())}function v(o,l){1&o&&(e.TgZ(0,"small"),e._uU(1," Please enter a valid email. "),e.qZA())}function C(o,l){1&o&&(e.TgZ(0,"small"),e._uU(1," Password must be 8-16 characters long, contain at least one uppercase letter, one lowercase letter, and one number. "),e.qZA())}function T(o,l){1&o&&(e.TgZ(0,"small"),e._uU(1,"Passwords must match."),e.qZA())}function x(o,l){1&o&&(e.TgZ(0,"p",15),e._uU(1," Signup successful. Please login.\n"),e.qZA())}let M=(()=>{class o{constructor(i,t,n){this.fb=i,this.authService=t,this.router=n,this.signupSuccess=!1,this.registerForm=this.fb.group({username:["",r.kI.required],email:["",[r.kI.required,r.kI.email]],password:["",[r.kI.required]],confirmPassword:["",r.kI.required],avatar:["",r.kI.required]},{validator:this.passwordMatchValidator})}passwordMatchValidator(i){return i.get("password")?.value===i.get("confirmPassword")?.value?null:{mismatch:!0}}signup(){if(this.registerForm.valid){const{username:i,email:t,password:n,avatar:s}=this.registerForm.value;this.authService.register(i,t,n,s).subscribe(g=>{g&&(this.signupSuccess=!0,this.router.navigate(["/products/list"]))})}}static#e=this.\u0275fac=function(t){return new(t||o)(e.Y36(r.qu),e.Y36(c.e),e.Y36(d.F0))};static#o=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-registration"]],decls:35,vars:7,consts:[[3,"formGroup","ngSubmit"],["for","username"],["type","text","id","username","formControlName","username","required",""],[4,"ngIf"],["for","email"],["type","email","id","email","formControlName","email","required",""],["for","password"],["type","password","id","password","formControlName","password","required",""],["for","confirmPassword"],["type","password","id","confirmPassword","formControlName","confirmPassword","required",""],["for","avatar"],["type","text","id","avatar","formControlName","avatar"],["type","submit",3,"disabled"],["style","color: green",4,"ngIf"],["routerLink","/auth/login"],[2,"color","green"]],template:function(t,n){1&t&&(e.TgZ(0,"h2"),e._uU(1,"Sign up"),e.qZA(),e.TgZ(2,"form",0),e.NdJ("ngSubmit",function(){return n.signup()}),e.TgZ(3,"div")(4,"label",1),e._uU(5,"Username:"),e.qZA(),e._UZ(6,"input",2),e.YNc(7,_,2,0,"small",3),e.qZA(),e.TgZ(8,"div")(9,"label",4),e._uU(10,"Email:"),e.qZA(),e._UZ(11,"input",5),e.YNc(12,v,2,0,"small",3),e.qZA(),e.TgZ(13,"div")(14,"label",6),e._uU(15,"Password:"),e.qZA(),e._UZ(16,"input",7),e.YNc(17,C,2,0,"small",3),e.qZA(),e.TgZ(18,"div")(19,"label",8),e._uU(20,"Confirm Password:"),e.qZA(),e._UZ(21,"input",9),e.YNc(22,T,2,0,"small",3),e.qZA(),e.TgZ(23,"div")(24,"label",10),e._uU(25,"Avatar URL:"),e.qZA(),e._UZ(26,"input",11),e.qZA(),e.TgZ(27,"button",12),e._uU(28,"Sign Up"),e.qZA()(),e.YNc(29,x,2,0,"p",13),e.TgZ(30,"p"),e._uU(31,"Already have an account? "),e.TgZ(32,"a",14),e._uU(33,"Login here"),e.qZA(),e._uU(34,"."),e.qZA()),2&t&&(e.xp6(2),e.Q6J("formGroup",n.registerForm),e.xp6(5),e.Q6J("ngIf",n.registerForm.controls.username.invalid&&(n.registerForm.controls.username.dirty||n.registerForm.controls.username.touched)),e.xp6(5),e.Q6J("ngIf",n.registerForm.controls.email.invalid&&(n.registerForm.controls.email.dirty||n.registerForm.controls.email.touched)),e.xp6(5),e.Q6J("ngIf",n.registerForm.controls.password.invalid&&n.registerForm.controls.password.dirty&&n.registerForm.controls.password.touched),e.xp6(5),e.Q6J("ngIf",null==n.registerForm.errors?null:n.registerForm.errors.mismatch),e.xp6(5),e.Q6J("disabled",n.registerForm.invalid),e.xp6(2),e.Q6J("ngIf",n.signupSuccess))},dependencies:[m.O5,r._Y,r.Fj,r.JJ,r.JL,r.Q7,r.sg,r.u,d.rH],styles:["form[_ngcontent-%COMP%]{max-width:50%;margin:auto;padding:20px;background:#f9f9f9;border-radius:5px;box-shadow:0 0 10px #000}div[_ngcontent-%COMP%]{margin-bottom:10px}label[_ngcontent-%COMP%]{margin-bottom:5px;font-size:14px;display:block}input[_ngcontent-%COMP%]{border:1px solid #cccccc;padding:.5em;font-size:1em;width:100%;box-sizing:border-box;border-radius:5px}button[_ngcontent-%COMP%]{padding:10px;color:#fff;background-color:#007bff;border:none;border-radius:5px;cursor:pointer}button[_ngcontent-%COMP%]:hover{background-color:#0056b3}p[_ngcontent-%COMP%]{color:green;margin-top:10px;text-align:center}h2[_ngcontent-%COMP%]{padding:10px}"]})}return o})();var f=a(529),A=a(4466),w=a(2993);const q=[{path:"login",component:b},{path:"signup",component:M},{path:"",redirectTo:"login",pathMatch:"full"}];let U=(()=>{class o{static#e=this.\u0275fac=function(t){return new(t||o)};static#o=this.\u0275mod=e.oAB({type:o});static#n=this.\u0275inj=e.cJS({providers:[{provide:f.TP,useClass:w.e,multi:!0}],imports:[m.ez,r.u5,A.m,r.UX,f.JF,d.Bz.forChild(q)]})}return o})()}}]);