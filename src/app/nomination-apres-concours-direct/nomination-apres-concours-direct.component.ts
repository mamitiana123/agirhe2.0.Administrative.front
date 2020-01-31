import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { RouterModule, Routes, ChildrenOutletContexts } from '@angular/router';
import { TokenStorageService } from '../auth/token-storage.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { RecrutementService } from '../services/recrutement.service';

@Component({
  selector: 'app-nomination-apres-concours-direct',
  templateUrl: './nomination-apres-concours-direct.component.html',
  styleUrls: ['./nomination-apres-concours-direct.component.css']
})


export class NominationApresConcoursDirectComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  @ViewChild(DataTableDirective) dtElement: DataTableDirective;

  //@ViewChild('dataTable') table: ElementRef;
  public recrutement:any;
  public size:number=4;
  public currentPage:number=0;
  public totalPages:number;
  public pages:Array<number>;
  private roles: string[];
  private authority: string;

  constructor(private userService: RecrutementService, private router:Router, private tokenStorage: TokenStorageService) { }

  ngOnInit(){ 

    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'DRHE') {
          this.authority = 'DRHE';

          this.userService.getRoleDRHME(this.currentPage,this.size)
          .subscribe(data=>{
          this.recrutement=data;
          this.dtTrigger.next();
          },err=>{
            console.log(err);
          });
          return false;
         
        } else if (role === 'Agent_de_saisi_FOP') {
          this.authority = 'Agent_de_saisi_FOP';


          //this.dataTable=$(this.table.nativeElement);
          //this.dataTable.dataTable();
            this.userService.getRoleAgentdeSaisiFop(this.currentPage,this.size)
            .subscribe(data=>{
            this.recrutement=data;
            this.dtTrigger.next();
            },err=>{
              console.log(err);
            });

            

          return false;
        }
        else if (role === 'Chef_de_division_Fop') {
          this.authority = 'Chef_de_division_Fop';

          this.userService.getRoleChefdeDivisionFop(this.currentPage,this.size)
          .subscribe(data=>{
            this.recrutement=data;
          this.dtTrigger.next();
          },err=>{
            console.log(err);
          });


          return false;
        }
        else if (role === 'Chef_de_service_Fop') {
          this.authority = 'Chef_de_service_Fop';

          this.userService.getRoleChefdeServiceFop(this.currentPage,this.size)
          .subscribe(data=>{
          this.recrutement=data;
          this.dtTrigger.next();
          },err=>{
          console.log(err);
          });


          return false;
        }
        else if (role === 'DRHE_Fop') {
          this.authority = 'DRHE_Fop';

          this.userService.getRoleDRHEFop(this.currentPage,this.size)
          .subscribe(data=>{
          this.recrutement=data;
          this.dtTrigger.next();
          },err=>{
          console.log(err);
          });


          return false;
        }
        else if (role === 'Secretaire_MEF') {
          this.authority = 'Secretaire_MEF';

          this.userService.getRoleSecretaireMef(this.currentPage,this.size)
          .subscribe(data=>{
          this.recrutement=data;
          this.dtTrigger.next();
          },err=>{
          console.log(err);
          });


          return false;
        }

        else if (role === 'Comptable_verificateur_Mef') {
          this.authority = 'Comptable_verificateur_Mef';

          this.userService.getRoleComptableVerificateurMef(this.currentPage,this.size)
          .subscribe(data=>{
          this.recrutement=data;
          this.dtTrigger.next();
          },err=>{
          console.log(err);
          });


          return false;
        }

        else if (role === 'Chef_de_division_Mef') {
          this.authority = 'Chef_de_division_Mef';

          this.userService.getRoleChefdeDivisionMef(this.currentPage,this.size)
          .subscribe(data=>{
          this.recrutement=data;
          this.dtTrigger.next();
          },err=>{
          console.log(err);
          });


          return false;
        }
        else if (role === 'Chef_de_service_Mef') {
          this.authority = 'Chef_de_service_Mef';

          this.userService.getRoleChefdeServiceMef(this.currentPage,this.size)
          .subscribe(data=>{
          this.recrutement=data;
          this.dtTrigger.next();
          },err=>{
          console.log(err);
          });


          return false;
        }
        else if (role === 'Charge_d_Etudes_CF') {
          this.authority = 'Charge_d_Etudes_CF';

          this.userService.getRoleChargerEtudeCF(this.currentPage,this.size)
          .subscribe(data=>{
          this.recrutement=data;
          this.dtTrigger.next();
          },err=>{
          console.log(err);
          });


          return false;
        }

        else if (role === 'Chef_de_division_Control_Financier') {
          this.authority = 'Chef_de_division_Control_Financier';

          this.userService.getRoleChefdeDivisionCF(this.currentPage,this.size)
          .subscribe(data=>{
          this.recrutement=data;
          this.dtTrigger.next();
          },err=>{
          console.log(err);
          });


          return false;
        }

        else if (role === 'Directeur_ou_Chef_de_Service_CF') {
          this.authority = 'Directeur_ou_Chef_de_Service_CF';

          this.userService.getRoleChefdeServiceCF(this.currentPage,this.size)
          .subscribe(data=>{
          this.recrutement=data;
          this.dtTrigger.next();
          },err=>{
          console.log(err);
          });


          return false;
        }
      });
      
    }
    else{
      this.router.navigate(['../auth/login']);
    }

    this.dtOptions = {
      language: {
        processing: 'En cours de traitement...',
        search: 'Chercher:',
        lengthMenu: 'Afficher _MENU_ &eacute;l&eacute;ments',
        info: 'Affichage de _START_ au _END_ de _TOTAL_ elements',
        infoEmpty: 'Ne montrer aucun article.',
        infoFiltered: '(fuite _MAX_ total des articles)',
        infoPostFix: '',
        loadingRecords: 'Chargement des enregistrements ...',
        zeroRecords: 'Aucun enregistrement trouvé',
        emptyTable: 'Aucune donnée disponible dans le tableau',
        paginate: {
          first: 'Premier',
          previous: 'Précédent',
          next: 'Suivant',
          last: 'Dernier'
        },
        aria: {
          sortAscending: ': Activer pour trier la table par ordre croissant',
          sortDescending: ': Activer pour trier le tableau par ordre décroissant'
        }
      }
    };
  }

  onGetRecrutement() {
    this.userService.getRecrutement(this.currentPage,this.size)
      .subscribe(data=>{
      //this.totalPages=data['page'].totalPages;
      //this.pages=new Array<number>(this.totalPages);
      this.recrutement=data;
      this.dtTrigger.next();
    },err=>{
      console.log(err);
    });
    // this.dtTrigger.next();
  }

  // onChercher(form: any){
  //   this.userService.getAffectationByKeyword(form.motCle,this.currentPage,this.size)
  //     .subscribe(data=>{
  //     //this.totalPages=data['page'].totalPages;
  //     //this.pages=new Array<number>(this.totalPages);
  //     this.affectation=data;
  //   },err=>{
  //     console.log(err);
  //   });
  // }

  onDeleteAgent(a){
    let conf=confirm("Etes vous sur?");
    if(conf){
      this.userService.deleteResource(a._links.self.href)
      .subscribe(data=>{
        this.ngOnInit();
      },err=>{
        console.log(err);
      })
    }
  }

  onEditAgent(a){

    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'DRHE') {
          this.authority = 'DRHE';

          let url=a._links.self.href;

          this.router.navigateByUrl('DRHE/nouveau-nacd/'+btoa(url));

          return false;
        } else if (role === 'Chef_de_division') {
          this.authority = 'Chef_de_division';

          let url=a._links.self.href;

          this.router.navigateByUrl('Chef_de_division/nouveau-nacd/'+btoa(url));

          return false;
        }
        else if (role === 'Agent_de_saisi_FOP') {
          this.authority = 'Agent_de_saisi_FOP';

          let url=a._links.self.href;

          this.router.navigateByUrl('agent-saisi-fop/nouveau-nacd/'+btoa(url));

          return false;
        }
        else if (role === 'Agent_de_saisie_ME') {
          this.authority = 'Agent_de_saisie_ME';

          let url=a._links.self.href;

          this.router.navigateByUrl('Agent_de_saisie_ME/modif-affectation/'+btoa(url));

          return false;
        }
        else if (role === 'Chef_de_division_Fop') {
          this.authority = 'Chef_de_division_Fop';

          let url=a._links.self.href;

          this.router.navigateByUrl('Chef_de_division_Fop/nouveau-nacd/'+btoa(url));

          return false;
        }
        else if (role === 'Chef_de_service_Fop') {
          this.authority = 'Chef_de_service_Fop';

          let url=a._links.self.href;

          this.router.navigateByUrl('Chef_de_service_Fop/nouveau-nacd/'+btoa(url));

          return false;
        }
        else if (role === 'DRHE_Fop') {
          this.authority = 'DRHE_Fop';

          let url=a._links.self.href;

          this.router.navigateByUrl('DRHE_Fop/nouveau-nacd/'+btoa(url));

          return false;
        }
        else if (role === 'Comptable_verificateur_Mef') {
          this.authority = 'Comptable_verificateur_Mef';

          let url=a._links.self.href;

          this.router.navigateByUrl('Comptable_verificateur_Mef/nouveau-nacd/'+btoa(url));

          return false;
        }
        else if (role === 'Chef_de_division_Mef') {
          this.authority = 'Chef_de_division_Mef';

          let url=a._links.self.href;

          this.router.navigateByUrl('Chef_de_division_Mef/nouveau-nacd/'+btoa(url));

          return false;
        }
        else if (role === 'Chef_de_service_Mef') {
          this.authority = 'Chef_de_service_Mef';

          let url=a._links.self.href;

          this.router.navigateByUrl('Chef_de_service_Mef/nouveau-nacd/'+btoa(url));

          return false;
        }
        else if (role === 'Secretaire_MEF') {
          this.authority = 'Secretaire_MEF';

          let url=a._links.self.href;

          this.router.navigateByUrl('Secretaire_MEF/nouveau-nacd/'+btoa(url));

          return false;
        }
        else if (role === 'Charge_d_Etudes_CF') {
          this.authority = 'Charge_d_Etudes_CF';

          let url=a._links.self.href;

          this.router.navigateByUrl('Charge_d_Etudes_CF/nouveau-nacd/'+btoa(url));

          return false;
        }
        else if (role === 'Directeur_ou_Chef_de_Service_CF') {
          this.authority = 'Directeur_ou_Chef_de_Service_CF';

          let url=a._links.self.href;

          this.router.navigateByUrl('Directeur_ou_Chef_de_Service_CF/nouveau-nacd/'+btoa(url));

          return false;
        }
      });
      
    }

    
  }

  rerender(): void {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.dtTrigger.next();
    });
  }


}
