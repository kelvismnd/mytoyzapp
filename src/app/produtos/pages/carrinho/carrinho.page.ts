import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.page.html',
  styleUrls: ['./carrinho.page.scss']
})
export class CarrinhoPage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}
  voltar(): void {
    this.navCtrl.navigateBack('/produtos');
  }
}
