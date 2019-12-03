import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutosListPageRoutingModule } from './produtos-list-routing.module';

import { ProdutosListPage } from './produtos-list.page';
@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ProdutosListPageRoutingModule],
  declarations: [ProdutosListPage]
})
export class ProdutosListPageModule {}
