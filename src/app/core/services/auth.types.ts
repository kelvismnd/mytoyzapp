export enum AuthProvder {
  Email,
  Facebook
}

export interface User {
  name?: string;
  email: string;
  password: string;
}

export interface AuthOptions {
  isSignIn: boolean;
  provider: AuthProvder;
  user: User;
}
