import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AdminGuard } from '../auth/admin.guard';
import { SharedModule } from '../shared/shared.module';
import { UserFormComponent } from './user-form/user-form.component';
const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: UserListComponent, canActivate: [AdminGuard] },
  { path: 'form', component: UserFormComponent },
  { path: ':id/edit', component: UserFormComponent }
];


@NgModule({
  declarations: [UserListComponent, UserFormComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  exports: [UserListComponent, UserFormComponent],
})
export class UserModule {}
