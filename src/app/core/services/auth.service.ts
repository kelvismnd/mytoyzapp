import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { User, AuthProvider, AuthOptions } from './auth.types';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  authenticate({ isSignIn, provider, user }: AuthOptions): Promise<auth.UserCredential> {
    let operation: Promise<auth.UserCredential>;
    if (provider !== AuthProvider.Email) {
      operation = this.signInWithPopup(provider);
    } else {
      operation = isSignIn ? this.signInEmail(user) : this.signUpWithEmailPassowrd(user);
    }
    return operation;
  }

  private signInEmail({ email, password }: User): Promise<auth.UserCredential> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  private signUpWithEmailPassowrd({ password, email, name }: User): Promise<auth.UserCredential> {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(credencials =>
        credencials.user
          .updateProfile({ displayName: name, photoURL: null })
          .then(() => credencials)
      );
  }

  private signInWithPopup(provider: AuthProvider): Promise<auth.UserCredential> {
    let signInProvider = null;

    switch (provider) {
      case AuthProvider.Facebook:
        signInProvider = new auth.FacebookAuthProvider();
        break;
    }
    return this.afAuth.auth.signInWithPopup(signInProvider);
  }
}
