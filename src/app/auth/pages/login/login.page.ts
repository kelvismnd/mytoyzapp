import { OverlayService } from './../../../core/services/overlay.service';
import { AuthService } from './../../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthProvider } from 'src/app/core/services/auth.types';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  authProviders = AuthProvider;

  authForm: FormGroup;

  configs = {
    isSignIn: true,
    action: 'Entrar',
    actionChange: 'Cadastre-se',
    actionChangeComplemento: 'novo na loja?'
  };

  private nameControl = new FormControl('', [Validators.required, Validators.minLength(3)]);

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private overlayService: OverlayService,
    private authService: AuthService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm(): void {
    this.authForm = this.fb.group({
      email: ['kelvismendes@gmail.com', [Validators.required, Validators.email]],
      password: ['4k2fadner', [Validators.minLength(3), Validators.required]]
    });
  }

  get email(): FormControl {
    return <FormControl>this.authForm.get('email');
  }

  get password(): FormControl {
    return <FormControl>this.authForm.get('password');
  }

  changeAuthAction(): void {
    this.configs.isSignIn = !this.configs.isSignIn;
    const { isSignIn } = this.configs;

    this.configs.action = isSignIn ? 'Entrar' : 'Cadastrar';
    this.configs.actionChange = isSignIn ? 'Criar Conta' : 'Entre';
    this.configs.actionChangeComplemento = isSignIn ? 'Novo na loja?' : 'Voce ja possui uma conta?';
    !isSignIn
      ? this.authForm.addControl('name', this.nameControl)
      : this.authForm.removeControl('name');
  }

  async onSubmit(provider: AuthProvider): Promise<void> {
    const loading = await this.overlayService.loading();

    try {
      const credentials = await this.authService.authenticate({
        isSignIn: this.configs.isSignIn,
        user: this.authForm.value,
        provider
      });
      this.navCtrl.navigateForward(
        this.route.snapshot.queryParamMap.get('redirect') || '/produtos'
      );
    } catch (e) {
      console.log('Error ao autenticar', e);
      await this.overlayService.toast({
        message: e.message
      });
    } finally {
      loading.dismiss();
    }
  }
}
