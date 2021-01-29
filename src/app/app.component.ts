import {Component} from '@angular/core';
import {AuthService} from './core/services/auth.service';
import {SessionService} from './core/services/session.service';
import {Router} from '@angular/router';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private sessionService: SessionService,
    private router: Router,
    private matSnackBar: MatSnackBar
  ) {
  }

  get isSignedIn(): boolean {
    return AuthService.isSignedIn;
  }

  signout(): void {
    AuthService.user = null;
    this.sessionService.clear();
    this.matSnackBar.open('À bientôt !', null, {
      duration: 5000,
    });
    this.router.navigate(['/']);
  }

  get isAdmin(): boolean {
    if (this.isSignedIn) {
      return AuthService.isAdmin;
    } else {
      return false;
    }
  }

}
