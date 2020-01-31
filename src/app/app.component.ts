import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './auth/token-storage.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[];
  private authority: string;
  info: any;

  constructor(private tokenStorage: TokenStorageService, private router:Router) { }

  ngOnInit() {
    this.info = {
      token: this.tokenStorage.getToken(),
      username: this.tokenStorage.getUsername(),
      authorities: this.tokenStorage.getAuthorities()
    };
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
        else if (role === 'Chef_de_service_Mef') {
          this.authority = 'Chef_de_service_Mef';
          return false;
        }
        else if (role === 'Agent_de_saisi_FOP') {
          this.authority = 'Agent_de_saisi_FOP';
          return false;
        }
        else if (role === 'Directeur_FOP') {
          this.authority = 'Directeur_FOP';
          return false;
        } 
        else if (role === 'Charge_d_etude_niveau_division_FOP') {
          this.authority = 'Charge_d_etude_niveau_division_FOP';
          return false;
        } 
        else if (role === 'Secretaire_MEF') {
          this.authority = 'Secretaire_MEF';
          return false;
        }
        else if (role === 'Charge_d_Etudes_CF') {
          this.authority = 'Charge_d_Etudes_CF';
          return false;
        } 
        else if (role === 'Directeur_ou_Chef_de_Service_CF') {
          this.authority = 'Directeur_ou_Chef_de_Service_CF';
          return false;
        }
        else if (role === 'Primature') {
          this.authority = 'Primature';
          return false;
        }
      });
      
    }
  }
  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
  }
}
