import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { RouterModule, Routes, ChildrenOutletContexts } from '@angular/router';
import { TokenStorageService } from '../auth/token-storage.service';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-affectation',
  templateUrl: './affectation.component.html',
  styleUrls: ['./affectation.component.css']
})
export class AffectationComponent implements OnInit { 

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  @ViewChild(DataTableDirective) dtElement: DataTableDirective;

  //@ViewChild('dataTable') table: ElementRef;
  public affectation:any;
  public size:number=4;
  public currentPage:number=0;
  public totalPages:number;
  public pages:Array<number>;
  private roles: string[];
  private authority: string;

  constructor(private userService: UserService, private router:Router, private tokenStorage: TokenStorageService) { }

  ngOnInit(){ 

    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'Chef_de_service') {
          this.authority = 'Chef_de_service';

          this.userService.getRoleChefdeService(this.currentPage,this.size)
          .subscribe(data=>{
          this.affectation=data;
          this.dtTrigger.next();
          },err=>{
            console.log(err);
          });
          return false;
         
        } else if (role === 'Chef_de_division') {
          this.authority = 'Chef_de_division';


          //this.dataTable=$(this.table.nativeElement);
          //this.dataTable.dataTable();
            this.userService.getRoleChefdeDivision(this.currentPage,this.size)
            .subscribe(data=>{
            this.affectation=data;
            this.dtTrigger.next();
            },err=>{
              console.log(err);
            });

            

          return false;
        }
        else if (role === 'DRHE') {
          this.authority = 'DRHE';

          this.userService.getRoleDRHE(this.currentPage,this.size)
          .subscribe(data=>{
          this.affectation=data;
          this.dtTrigger.next();
          },err=>{
            console.log(err);
          });


          return false;
        }
        else if (role === 'Agent_de_saisie_ME') {
          this.authority = 'Agent_de_saisie_ME';

          this.userService.getRoleAgentDeSaisie(this.currentPage,this.size)
          .subscribe(data=>{
          this.affectation=data;
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
          this.affectation=data;
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
          this.affectation=data;
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
          this.affectation=data;
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
          this.affectation=data;
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
          this.affectation=data;
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
          this.affectation=data;
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

  onGetAffectation() {
    this.userService.getAffectation(this.currentPage,this.size)
      .subscribe(data=>{
      //this.totalPages=data['page'].totalPages;
      //this.pages=new Array<number>(this.totalPages);
      this.affectation=data;
      this.dtTrigger.next();
    },err=>{
      console.log(err);
    });
    // this.dtTrigger.next();
  }

  onChercher(form: any){
    this.userService.getAffectationByKeyword(form.motCle,this.currentPage,this.size)
      .subscribe(data=>{
      //this.totalPages=data['page'].totalPages;
      //this.pages=new Array<number>(this.totalPages);
      this.affectation=data;
    },err=>{
      console.log(err);
    });
  }

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
        if (role === 'Chef_de_service') {
          this.authority = 'Chef_de_service';

          let url=a._links.self.href;

          this.router.navigateByUrl('Chef_de_service/detail-affectation-chef-division/'+btoa(url));

          return false;
        } else if (role === 'Chef_de_division') {
          this.authority = 'Chef_de_division';

          let url=a._links.self.href;

          this.router.navigateByUrl('Chef_de_division/detail-affectation-chef-division/'+btoa(url));

          return false;
        }
        else if (role === 'DRHE') {
          this.authority = 'DRHE';

          let url=a._links.self.href;

          this.router.navigateByUrl('DRHE/detail-affectation-chef-division/'+btoa(url));

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

          this.router.navigateByUrl('Chef_de_division_Fop/detail-affectation-chef-division/'+btoa(url));

          return false;
        }
        else if (role === 'Chef_de_service_Fop') {
          this.authority = 'Chef_de_service_Fop';

          let url=a._links.self.href;

          this.router.navigateByUrl('Chef_de_service_Fop/detail-affectation-chef-division/'+btoa(url));

          return false;
        }
        else if (role === 'DRHE_Fop') {
          this.authority = 'DRHE_Fop';

          let url=a._links.self.href;

          this.router.navigateByUrl('DRHE_Fop/detail-affectation-chef-division/'+btoa(url));

          return false;
        }
        else if (role === 'Comptable_verificateur_Mef') {
          this.authority = 'Comptable_verificateur_Mef';

          let url=a._links.self.href;

          this.router.navigateByUrl('Comptable_verificateur_Mef/detail-affectation-chef-division/'+btoa(url));

          return false;
        }
        else if (role === 'Chef_de_division_Mef') {
          this.authority = 'Chef_de_division_Mef';

          let url=a._links.self.href;

          this.router.navigateByUrl('Chef_de_division_Mef/detail-affectation-chef-division/'+btoa(url));

          return false;
        }
        else if (role === 'Chef_de_service_Mef') {
          this.authority = 'Chef_de_service_Mef';

          let url=a._links.self.href;

          this.router.navigateByUrl('Chef_de_service_Mef/detail-affectation-chef-division/'+btoa(url));

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
