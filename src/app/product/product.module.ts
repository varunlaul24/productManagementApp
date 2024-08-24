import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from '../auth/auth.guard';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ProductListComponent, canActivate: [AuthGuard] },
  { path: 'create', component: ProductFormComponent, canActivate: [AuthGuard] },
  { path: ':id', component: ProductDetailsComponent, canActivate: [AuthGuard] },
  {
    path: ':id/edit',
    component: ProductFormComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class ProductModule {}