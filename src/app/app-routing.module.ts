import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AdminGuard } from './auth/admin.guard';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  // then() -> Attaches callbacks for the resolution and/or rejection of the Promise.
  { path: 'products', loadChildren: () => import('./product/product.module').then(m => m.ProductModule), canActivate:[AuthGuard] },
  { path: 'admin', loadChildren: () => import('./user/user.module').then(m => m.UserModule), canActivate:[AuthGuard, AdminGuard] },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // forRoot() -> Creates and configures a module with all the router providers and directives. Optionally sets up an application listener to perform an initial navigation.
  exports: [RouterModule]
})
export class AppRoutingModule { }
