import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

import { TokenStorageService } from './core/service/TokenStorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'gestion-formation-fo';
  constructor(
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        console.log(event.url);
      }
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
  }

  ngOnInit(): void {
    window.addEventListener(
      'storage',
      (event: StorageEvent) => {
        if (event.storageArea === localStorage) {
          const token = this.tokenStorage.getToken();
          if (token) {
            this.router.navigate(['secure']);
          } else {
            this.router.navigate(['public']);
          }
        }
      },
      false
    );
  }
}
