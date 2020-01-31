import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Recrutement } from '../model/Recrutement';
import { RecrutementService } from '../services/recrutement.service';
import { Interesse } from '../model/Interesse';
import { TokenStorageService } from '../auth/token-storage.service';
@Component({
  selector: 'app-nouveau-nacd',
  templateUrl: './nouveau-nacd.component.html',
  styleUrls: ['./nouveau-nacd.component.css']
})
export class NouveauNacdComponent implements OnInit {

  private currentRecrutement: Interesse;
  private url: string;
  private roles: string[];
  private authority: string;
  private mode: number=1;

  constructor(private router:Router, private activatedRoute: ActivatedRoute, private userService: RecrutementService, private tokenStorage: TokenStorageService) { }

  ngOnInit() {

    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'Chef_de_service') {
          this.authority = 'Chef_de_service';

          this.url=atob(this.activatedRoute.snapshot.params.idInteresse);
          this.userService.getResource(this.url)
          .subscribe(data=>{
            this.currentRecrutement=data;
            this.mode=1;
          },err=>{
            console.log(err);
          })

          return false;
        } else if (role === 'Chef_de_division') {
          this.authority = 'Chef_de_division';

          this.url=atob(this.activatedRoute.snapshot.params.idInteresse);
          this.userService.getResource(this.url)
          .subscribe(data=>{
            this.currentRecrutement=data;
            this.mode=1;
          },err=>{
            console.log(err);
          })

          return false;
        }
        else if (role === 'DRHE') {
          this.authority = 'DRHE';

          this.url=atob(this.activatedRoute.snapshot.params.idInteresse);
          this.userService.getResource(this.url)
          .subscribe(data=>{
            this.currentRecrutement=data;
            this.mode=1;
          },err=>{
            console.log(err);
          })

          return false;
        }
        else if (role === 'Agent_de_saisie_ME') {
          this.authority = 'Agent_de_saisie_ME';

          this.url=atob(this.activatedRoute.snapshot.params.idInteresse);
          this.userService.getResource(this.url)
          .subscribe(data=>{
            this.currentRecrutement=data;
            this.mode=1;
          },err=>{
            console.log(err);
          })

          return false;
        }
        else if (role === 'Chef_de_division_Fop') {
          this.authority = 'Chef_de_division_Fop';

          this.url=atob(this.activatedRoute.snapshot.params.idInteresse);
          this.userService.getResource(this.url)
          .subscribe(data=>{
            this.currentRecrutement=data;
            this.mode=1;
          },err=>{
            console.log(err);
          })

          return false;
        }
        else if (role === 'Chef_de_service_Fop') {
          this.authority = 'Chef_de_service_Fop';

          this.url=atob(this.activatedRoute.snapshot.params.idInteresse);
          this.userService.getResource(this.url)
          .subscribe(data=>{
            this.currentRecrutement=data;
            this.mode=1;
          },err=>{
            console.log(err);
          })

          return false;
        }
        else if (role === 'DRHE_Fop') {
          this.authority = 'DRHE_Fop';

          this.url=atob(this.activatedRoute.snapshot.params.idInteresse);
          this.userService.getResource(this.url)
          .subscribe(data=>{
            this.currentRecrutement=data;
          },err=>{
            console.log(err);
          })

          return false;
        }
        else if (role === 'Comptable_verificateur_Mef') {
          this.authority = 'Comptable_verificateur_Mef';

          this.url=atob(this.activatedRoute.snapshot.params.idInteresse);
          this.userService.getResource(this.url)
          .subscribe(data=>{
            this.currentRecrutement=data;
            this.mode=1;
          },err=>{
            console.log(err);
          })

          return false;
        }
        else if (role === 'Chef_de_division_Mef') {
          this.authority = 'Chef_de_division_Mef';

          this.url=atob(this.activatedRoute.snapshot.params.idInteresse);
          this.userService.getResource(this.url)
          .subscribe(data=>{
            this.currentRecrutement=data;
            this.mode=1;
          },err=>{
            console.log(err);
          })

          return false;
        }
        else if (role === 'Chef_de_service_Mef') {
          this.authority = 'Chef_de_service_Mef';

          this.url=atob(this.activatedRoute.snapshot.params.idInteresse);
          this.userService.getResource(this.url)
          .subscribe(data=>{
            this.currentRecrutement=data;
            this.mode=1;
          },err=>{
            console.log(err);
          })

          return false;
        }
        else if (role === 'Agent_de_saisi_FOP') {
          this.authority = 'Agent_de_saisi_FOP';

          this.url=atob(this.activatedRoute.snapshot.params.idInteresse);
          this.userService.getResource(this.url)
          .subscribe(data=>{
            this.currentRecrutement=data;
            this.mode=1;
          },err=>{
            console.log(err);
          })

          return false;
        }
        else if (role === 'Directeur_FOP') {
          this.authority = 'Directeur_FOP';

          this.url=atob(this.activatedRoute.snapshot.params.idInteresse);
          this.userService.getResource(this.url)
          .subscribe(data=>{
            this.currentRecrutement=data;
            this.mode=1;
          },err=>{
            console.log(err);
          })

          return false;
        } 
        else if (role === 'Charge_d_etude_niveau_division_FOP') {
          this.authority = 'Charge_d_etude_niveau_division_FOP';

          this.url=atob(this.activatedRoute.snapshot.params.idInteresse);
          this.userService.getResource(this.url)
          .subscribe(data=>{
            this.currentRecrutement=data;
            this.mode=1;
          },err=>{
            console.log(err);
          })

          return false;
        } 
        else if (role === 'Secretaire_MEF') {
          this.authority = 'Secretaire_MEF';

          this.url=atob(this.activatedRoute.snapshot.params.idInteresse);
          this.userService.getResource(this.url)
          .subscribe(data=>{
            this.currentRecrutement=data;
            this.mode=1;
          },err=>{
            console.log(err);
          })

          return false;
        }
        else if (role === 'Charge_d_Etudes_CF') {
          this.authority = 'Charge_d_Etudes_CF';

          this.url=atob(this.activatedRoute.snapshot.params.idInteresse);
          this.userService.getResource(this.url)
          .subscribe(data=>{
            this.currentRecrutement=data;
            this.mode=1;
          },err=>{
            console.log(err);
          })

          return false;
        } 
        else if (role === 'Directeur_ou_Chef_de_Service_CF') {
          this.authority = 'Directeur_ou_Chef_de_Service_CF';

          this.url=atob(this.activatedRoute.snapshot.params.idInteresse);
          this.userService.getResource(this.url) 
          .subscribe(data=>{
            this.currentRecrutement=data;
            this.mode=1;
          },err=>{
            console.log(err);
          })

          return false;
        }
        else if (role === 'Primature') {
          this.authority = 'Primature';

          this.url=atob(this.activatedRoute.snapshot.params.idInteresse);
          this.userService.getResource(this.url)
          .subscribe(data=>{
            this.currentRecrutement=data;
            this.mode=1;
          },err=>{
            console.log(err);
          })

          return false;
        }
      });
      
    }
  }

  onUpdtateAgent(value:any){

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

          this.userService.updateResource(this.url,value)
          .subscribe(data=>{
            alert("Mise a jour effectuée avec succès!")
            this.router.navigateByUrl("/Chef_de_division_Fop/nomination-apres-concours-direct");
          },err=>{
            console.log(err);
          })

          return false;
        }
        else if (role === 'Chef_de_service_Fop') {
          this.authority = 'Chef_de_service_Fop';

          this.userService.updateResource(this.url,value)
          .subscribe(data=>{
            alert("Mise a jour effectuée avec succès!")
            this.router.navigateByUrl("/Chef_de_service_Fop/nomination-apres-concours-direct");
          },err=>{
            console.log(err);
          })

          return false;
        }
        else if (role === 'DRHE_Fop') {
          this.authority = 'DRHE_Fop';

          this.userService.updateResource(this.url,value)
          .subscribe(data=>{
            alert("Mise a jour effectuée avec succès!")
            this.router.navigateByUrl("/DRHE_Fop/nomination-apres-concours-direct");
          },err=>{
            console.log(err);
          })

          return false;
        }
        else if (role === 'Comptable_verificateur_Mef') {
          this.authority = 'Comptable_verificateur_Mef';

          this.userService.updateResource(this.url,value)
          .subscribe(data=>{
            alert("Mise a jour effectuée avec succès!")
            this.router.navigateByUrl("/Comptable_verificateur_Mef/nomination-apres-concours-direct");
          },err=>{
            console.log(err);
          })

          return false;
        }
        else if (role === 'Chef_de_division_Mef') {
          this.authority = 'Chef_de_division_Mef';

          this.userService.updateResource(this.url,value)
          .subscribe(data=>{
            alert("Mise a jour effectuée avec succès!")
            this.router.navigateByUrl("/Chef_de_division_Mef/nomination-apres-concours-direct");
          },err=>{
            console.log(err);
          })

          return false;
        }
        else if (role === 'Chef_de_service_Mef') {
          this.authority = 'Chef_de_service_Mef';

          this.userService.updateResource(this.url,value)
          .subscribe(data=>{
            alert("Mise a jour effectuée avec succès!")
            this.router.navigateByUrl("/Chef_de_service_Mef/nomination-apres-concours-direct");
          },err=>{
            console.log(err);
          })

          return false;
        }
        else if (role === 'Agent_de_saisi_FOP') {
          this.authority = 'Agent_de_saisi_FOP';

          this.userService.updateResource(this.url,value)
          .subscribe(data=>{
            alert("Mise a jour effectuée avec succès!")
            this.router.navigateByUrl("/agent-saisi-fop/nomination-apres-concours-direct");
          },err=>{
            console.log(err);
          })

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

          this.userService.updateResource(this.url,value)
          .subscribe(data=>{
            alert("Mise a jour effectuée avec succès!")
            this.router.navigateByUrl("/Secretaire_MEF/nomination-apres-concours-direct");
          },err=>{
            console.log(err);
          })

          return false;
        }
        else if (role === 'Charge_d_Etudes_CF') {
          this.authority = 'Charge_d_Etudes_CF';

          this.userService.updateResource(this.url,value)
          .subscribe(data=>{
            alert("Mise a jour effectuée avec succès!")
            this.router.navigateByUrl("/Charge_d_Etudes_CF/nomination-apres-concours-direct");
          },err=>{
            console.log(err);
          })

          return false;
        } 
        else if (role === 'Directeur_ou_Chef_de_Service_CF') {
          this.authority = 'Directeur_ou_Chef_de_Service_CF';

          this.userService.updateResource(this.url,value)
          .subscribe(data=>{
            alert("Mise a jour effectuée avec succès!")
            this.router.navigateByUrl("/Directeur_ou_Chef_de_Service_CF/nomination-apres-concours-direct");
          },err=>{
            console.log(err);
          })

          return false;
        }
        else if (role === 'Primature') {
          this.authority = 'Primature';
          return false;
        }
      });
      
    }

    
  }

  onRejetRecrutement(){
    this.mode=2;
  }

}
