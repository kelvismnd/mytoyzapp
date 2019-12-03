import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutosListPage } from './produtos-list.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutosListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutosListPageRoutingModule {}
