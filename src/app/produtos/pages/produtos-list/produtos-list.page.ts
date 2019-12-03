import { CarrinhoPage } from './../carrinho/carrinho.page';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.page.html',
  styleUrls: ['./produtos-list.page.scss']
})
export class ProdutosListPage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  comprar(): void {
    this.navCtrl.navigateRoot('/carrinho');
  }
}
