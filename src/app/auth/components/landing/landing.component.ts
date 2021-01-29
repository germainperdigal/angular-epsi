import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../core/services/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  avantages: { title: string, icon: string, content: string }[] = [
    {
      title: 'Une grande communauté',
      icon: 'fas fa-users',
      content: 'Rejoignez une communauté de plus de 100 utilisateurs !',
    },
    {
      title: 'Une variété de centres d\'intérêts',
      icon: 'fas fa-handshake',
      content: 'Vous trouverez à coup sur vos centres d\'intérêts ici !',
    },
    {
      title: 'Et c\'est gratuit',
      icon: 'fas fa-euro-sign',
      content: 'Pourquoi payer pour rencontrer du monde ?',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  get isSignedIn(): boolean {
    return AuthService.isSignedIn;
  }

  get isAdmin(): boolean {
    return AuthService.isAdmin;
  }

}
