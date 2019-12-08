import { CarrinhoPageModule } from './produtos/pages/carrinho/carrinho.module';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './auth/auth.module#AuthModule' },
  {
    path: 'produtos',
    loadChildren: './produtos/produtos.module#ProdutosModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'carrinho',
    loadChildren: './produtos/pages/carrinho/carrinho.module#CarrinhoPageModule',
    canLoad: [AuthGuard]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
