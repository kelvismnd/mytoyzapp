import { AuthService } from './../../../core/services/auth.service';
import { CarrinhoPage } from './../carrinho/carrinho.page';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.page.html',
  styleUrls: ['./produtos-list.page.scss']
})
export class ProdutosListPage implements OnInit {
  constructor(private navCtrl: NavController, private authService: AuthService) {}

  ngOnInit() {}

  comprar(): void {
    this.navCtrl.navigateRoot('/carrinho');
  }
  logout(): void {
    console.log('saiu');
    this.authService.logout();
    this.navCtrl.navigateRoot('');
  }
}
