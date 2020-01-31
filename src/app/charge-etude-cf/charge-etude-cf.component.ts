import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../auth/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-charge-etude-cf',
  templateUrl: './charge-etude-cf.component.html',
  styleUrls: ['./charge-etude-cf.component.css']
})
export class ChargeEtudeCFComponent implements OnInit {

  private roles: string[];
  private authority: string;
  constructor(private tokenStorage: TokenStorageService, private router:Router) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'Chef_de_service') {
          this.authority = 'Chef_de_service';
          return false;
        } else if (role === 'Chef_de_division') {
          this.authority = 'Chef_de_division';
          return false;
        }
        else if (role === 'DRHE') {
          this.authority = 'DRHE';
          return false;
        }
        else if (role === 'Agent_de_saisie_ME') {
          this.authority = 'Agent_de_saisie_ME';

          

          return false;
        }
        else if (role === 'Chef_de_division_Fop') {
          this.authority = 'Chef_de_division_Fop';
          return false;
        }
        else if (role === 'Chef_de_service_Fop') {
          this.authority = 'Chef_de_service_Fop';
          return false;
        }
        else if (role === 'DRHE_Fop') {
          this.authority = 'DRHE_Fop';
          return false;
        }
        else if (role === 'Comptable_verificateur_Mef') {
          this.authority = 'Comptable_verificateur_Mef';
          return false;
        }
        else if (role === 'Chef_de_division_Mef') {
          this.authority = 'Chef_de_division_Mef';
          return false;
        }
        else if (role === 'Agent_de_saisi_FOP') {
          this.authority = 'Agent_de_saisi_FOP';

          

          return false;
        }
      });
      
    }
    else{
      this.router.navigate(['../auth/login']);
    }
  }

  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
  }

}
