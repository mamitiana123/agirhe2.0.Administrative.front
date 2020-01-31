import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-sercretaire-mef',
  templateUrl: './sercretaire-mef.component.html',
  styleUrls: ['./sercretaire-mef.component.css']
})
export class SercretaireMefComponent implements OnInit {

  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit() {
  }
  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
  }

}
