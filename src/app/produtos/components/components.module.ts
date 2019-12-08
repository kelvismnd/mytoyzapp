import { ProdutoItemComponent } from './produto-item/produto-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  declarations: [ProdutoItemComponent],
  imports: [CommonModule, SharedModule],
  exports: [ProdutoItemComponent]
})
export class ComponentsModule {}
