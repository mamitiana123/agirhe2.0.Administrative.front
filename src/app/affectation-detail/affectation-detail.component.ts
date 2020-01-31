import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Affectation } from '../model/affectation.model';
import { UserService } from '../services/user.service';
import { TokenStorageService } from '../auth/token-storage.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-affectation-detail',
  templateUrl: './affectation-detail.component.html',
  styleUrls: ['./affectation-detail.component.css']
})
export class AffectationDetailComponent implements OnInit {

  private currentAffectation: Affectation;
  private url: string;
  private mode: number=1;
  private roles: string[];
  private authority: string;

  constructor(private router:Router, private activatedRoute: ActivatedRoute, private userService: UserService,private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'Chef_de_service') {
          this.authority = 'Chef_de_service';

          this.url=atob(this.activatedRoute.snapshot.params.im);
          this.userService.getResource(this.url)
          .subscribe(data=>{
          this.currentAffectation=data;
          this.mode=1;
          },err=>{
            console.log(err);
          })


          return false;
        } else if (role === 'Chef_de_division') {
          this.authority = 'Chef_de_division';

          this.url=atob(this.activatedRoute.snapshot.params.im);
          this.userService.getResource(this.url)
          .subscribe(data=>{
          this.currentAffectation=data;
          this.mode=1;
          },err=>{
            console.log(err);
          })


          return false;
        }
        else if (role === 'DRHE') {
          this.authority = 'DRHE';

          this.url=atob(this.activatedRoute.snapshot.params.im);
          this.userService.getResource(this.url)
          .subscribe(data=>{
          this.currentAffectation=data;
          this.mode=1;
          },err=>{
            console.log(err);
          })

          return false;
        }
        else if (role === 'Agent_de_saisie_ME') {
          this.authority = 'Agent_de_saisie_ME';


          this.url=atob(this.activatedRoute.snapshot.params.im);
          this.userService.getResource(this.url)
          .subscribe(data=>{
          this.currentAffectation=data;
          this.mode=1;
          },err=>{
            console.log(err);
          })


          return false;
        }
        else if (role === 'Chef_de_division_Fop') {
          this.authority = 'Chef_de_division_Fop';


          this.url=atob(this.activatedRoute.snapshot.params.im);
          this.userService.getResource(this.url)
          .subscribe(data=>{
          this.currentAffectation=data;
          this.mode=1;
          },err=>{
            console.log(err);
          })


          return false;
        }
        else if (role === 'Chef_de_service_Fop') {
          this.authority = 'Chef_de_service_Fop';


          this.url=atob(this.activatedRoute.snapshot.params.im);
          this.userService.getResource(this.url)
          .subscribe(data=>{
          this.currentAffectation=data;
          this.mode=1;
          },err=>{
            console.log(err);
          })


          return false;
        }

        else if (role === 'DRHE_Fop') {
          this.authority = 'DRHE_Fop';


          this.url=atob(this.activatedRoute.snapshot.params.im);
          this.userService.getResource(this.url)
          .subscribe(data=>{
          this.currentAffectation=data;
          this.mode=1;
          },err=>{
            console.log(err);
          })


          return false;
        }
        else if (role === 'Comptable_verificateur_Mef') {
          this.authority = 'Comptable_verificateur_Mef';


          this.url=atob(this.activatedRoute.snapshot.params.im);
          this.userService.getResource(this.url)
          .subscribe(data=>{
          this.currentAffectation=data;
          this.mode=1;
          },err=>{
            console.log(err);
          })


          return false;
        }
        else if (role === 'Chef_de_division_Mef') {
          this.authority = 'Chef_de_division_Mef';


          this.url=atob(this.activatedRoute.snapshot.params.im);
          this.userService.getResource(this.url)
          .subscribe(data=>{
          this.currentAffectation=data;
          this.mode=1;
          },err=>{
            console.log(err);
          })


          return false;
        }
        else if (role === 'Chef_de_service_Mef') {
          this.authority = 'Chef_de_service_Mef';


          this.url=atob(this.activatedRoute.snapshot.params.im);
          this.userService.getResource(this.url)
          .subscribe(data=>{
          this.currentAffectation=data;
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

          this.userService.updateResource(this.url,value)
          .subscribe(data=>{
            alert("Mise a jour effectuée avec succès!")
            this.router.navigateByUrl("/Chef_de_service/affectation");
          },err=>{
            console.log(err);
          })


          return false;
        } else if (role === 'Chef_de_division') {
          this.authority = 'Chef_de_division';


          this.userService.updateResource(this.url,value)
          .subscribe(data=>{
            alert("Mise a jour effectuée avec succès!")
            this.router.navigateByUrl("/Chef_de_division/affectation");
          },err=>{
            console.log(err);
          })


          return false;
        }
        else if (role === 'DRHE') {
          this.authority = 'DRHE';


          this.userService.updateResource(this.url,value)
          .subscribe(data=>{
            alert("Mise a jour effectuée avec succès!")
            this.router.navigateByUrl("/DRHE/affectation");
          },err=>{
            console.log(err);
          })


          return false;
        }
        else if (role === 'Agent_de_saisie_ME') {
          this.authority = 'Agent_de_saisie_ME';


          this.userService.updateResource(this.url,value)
          .subscribe(data=>{
            alert("Mise a jour effectuée avec succès!")
            this.router.navigateByUrl("/Agent_de_saisie_ME/affectation");
          },err=>{
            console.log(err);
          })


          return false;
        }
        else if (role === 'Chef_de_division_Fop') {
          this.authority = 'Chef_de_division_Fop';


          this.userService.updateResource(this.url,value)
          .subscribe(data=>{
            alert("Mise a jour effectuée avec succès!")
            this.router.navigateByUrl("/Chef_de_division_Fop/affectation");
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
            this.router.navigateByUrl("/Chef_de_service_Fop/affectation");
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
            this.router.navigateByUrl("/DRHE_Fop/affectation");
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
            this.router.navigateByUrl("/Comptable_verificateur_Mef/affectation");
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
            this.router.navigateByUrl("/Chef_de_division_Mef/affectation");
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
            this.router.navigateByUrl("/Chef_de_service_Mef/affectation");
          },err=>{
            console.log(err); 
          })


          return false;
        }
      });
      
    }


    
  }
  onRejetAffectation(){
    this.mode=2;
  }
}
