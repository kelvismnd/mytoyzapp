import { Produto } from './../../models/produto.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-produto-item',
  templateUrl: './produto-item.component.html',
  styleUrls: ['./produto-item.component.scss']
})
export class ProdutoItemComponent {
  @Input() produto: Produto;
  @Output() update = new EventEmitter<Produto>();
  @Output() delete = new EventEmitter<Produto>();
}
