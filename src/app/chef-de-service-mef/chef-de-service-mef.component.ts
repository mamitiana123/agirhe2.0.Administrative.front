import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chef-de-service-mef',
  templateUrl: './chef-de-service-mef.component.html',
  styleUrls: ['./chef-de-service-mef.component.css']
})
export class ChefDeServiceMefComponent implements OnInit {

  board: string;
  errorMessage: string;
  private roles: string[];
  private authority: string;

  constructor(private userService: UserService, private tokenStorage: TokenStorageService, private router:Router) { }

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
        else if (role === 'Chef_de_service_Mef') {
          this.authority = 'Chef_de_service_Mef';
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
