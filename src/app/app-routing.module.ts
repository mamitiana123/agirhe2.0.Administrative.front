import { NgModule } from '@angular/core';
import { RouterModule, Routes, ChildrenOutletContexts } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './Agent_de_saisie_ME/user.component';
import { PmComponent } from './Chef_de_division/pm.component';
import { AdminComponent } from './Chef_de_service/admin.component';
import { AffectationComponent } from './affectation/affectation.component';
import { NewAffectationComponent } from './new-affectation/new-affectation.component';
import { EditAffectationComponent } from './edit-affectation/edit-affectation.component';
import { AffectationChefDivisionComponent } from './affectation-chef-division/affectation-chef-division.component';
import { AffectationDetailComponent } from './affectation-detail/affectation-detail.component';
import { AgentDeSaisieFopComponent } from './agent-de-saisie-fop/agent-de-saisie-fop.component';
import { NominationApresConcoursDirectComponent } from './nomination-apres-concours-direct/nomination-apres-concours-direct.component';
import { DRHEComponent } from './drhe/drhe.component';
import { NewNacdComponent } from './new-nacd/new-nacd.component';
import { NouveauNacdComponent } from './detail-nacd/nouveau-nacd.component';
import { ChefDeDivisionFopComponent } from './chef-de-division-fop/chef-de-division-fop.component';
import { ChefDeServiceFopComponent } from './chef-de-service-fop/chef-de-service-fop.component';
import { DrheFopComponent } from './drhe-fop/drhe-fop.component';
import { ComptableVerificateurMefComponent } from './comptable-verificateur-mef/comptable-verificateur-mef.component';
import { ChefDeDivisionMefComponent } from './chef-de-division-mef/chef-de-division-mef.component';
import { ChefDeServiceMefComponent } from './chef-de-service-mef/chef-de-service-mef.component';
import { ChefDeServiceCFComponent } from './chef-de-service-cf/chef-de-service-cf.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: "Agent_de_saisie_ME",
        component: UserComponent,
        children: [
            {
                path: '',
                redirectTo: 'nouveau-affectation',
                pathMatch: 'full'
            },
            {
                path: "affectation",
                component: AffectationComponent
            },
            {
                path: "nouveau-affectation",
                component: NewAffectationComponent
            },
            {
                path: "modif-affectation/:im",
                component: EditAffectationComponent
            }
            
        ]
    },
    {
        path: 'Chef_de_division',
        component: PmComponent,
        children: [
            {
                path: '',
                redirectTo: 'affectation',
                pathMatch: 'full'
            },
            {
                path: "affectation",
                component: AffectationComponent
            },
            {
                path: "detail-affectation-chef-division/:im",
                component: AffectationDetailComponent
            } 
        ]
    },
    {
        path: 'Chef_de_service',
        component: AdminComponent,
        children: [
            {
                path: '',
                redirectTo: 'affectation',
                pathMatch: 'full'
            },
            {
                path: "affectation",
                component: AffectationComponent
            },
            {
                path: "detail-affectation-chef-division/:im",
                component: AffectationDetailComponent
            } 
        ]
    },
    {
        path: 'DRHE',
        component: DRHEComponent,
        children: [
            {
                path: '',
                redirectTo: 'affectation',
                pathMatch: 'full'
            },
            {
                path: "affectation",
                component: AffectationComponent
            },
            {
                path: "detail-affectation-chef-division/:im",
                component: AffectationDetailComponent
            }, 
            {
                path: "nomination-apres-concours-direct",
                component: NominationApresConcoursDirectComponent,
            },
            {
                 path: "nouveau-nacd",
                component: NewNacdComponent,
            }
        ]
    },
    {
        path: 'Chef_de_division_Fop',
        component: ChefDeDivisionFopComponent,
        children: [
            {
                path: '',
                redirectTo: 'nomination-apres-concours-direct',
                pathMatch: 'full'
            },
            {
                path: "affectation",
                component: AffectationComponent
            },
            {
                path: "detail-affectation-chef-division/:im",
                component: AffectationDetailComponent
            },
            {
                path: "nomination-apres-concours-direct",
                component: NominationApresConcoursDirectComponent,
            },
            {
                path: "nouveau-nacd/:idInteresse",
               component: NouveauNacdComponent,
           } 
        ]
    },
    {
        path: 'Chef_de_service_Fop',
        component: ChefDeServiceFopComponent,
        children: [
            {
                path: '',
                redirectTo: 'nomination-apres-concours-direct',
                pathMatch: 'full'
            },
            {
                path: "affectation",
                component: AffectationComponent
            },
            {
                path: "detail-affectation-chef-division/:im",
                component: AffectationDetailComponent
            },
            {
                path: "nomination-apres-concours-direct",
                component: NominationApresConcoursDirectComponent,
            },
            {
                path: "nouveau-nacd/:idInteresse",
               component: NouveauNacdComponent,
           }  
        ]
    },
    {
        path: 'DRHE_Fop',
        component: DrheFopComponent,
        children: [
            {
                path: '',
                redirectTo: 'nomination-apres-concours-direct',
                pathMatch: 'full'
            },
            {
                path: "affectation",
                component: AffectationComponent
            },
            {
                path: "detail-affectation-chef-division/:im",
                component: AffectationDetailComponent
            },
            {
                path: "nomination-apres-concours-direct",
                component: NominationApresConcoursDirectComponent,
            },
            {
                path: "nouveau-nacd/:idInteresse",
               component: NouveauNacdComponent,
           }
        ]
    },
    {
        path: 'Secretaire_MEF',
        component: AdminComponent,
        children: [
            {
                path: '',
                redirectTo: 'nomination-apres-concours-direct',
                pathMatch: 'full'
            },
            {
                path: "nomination-apres-concours-direct",
                component: NominationApresConcoursDirectComponent,
            },
            {
                path: "nouveau-nacd/:idInteresse",
               component: NouveauNacdComponent,
           } 
        ]
    },
    {
        path: 'Comptable_verificateur_Mef',
        component: ComptableVerificateurMefComponent,
        children: [
            {
                path: '',
                redirectTo: 'nomination-apres-concours-direct',
                pathMatch: 'full'
            },
            {
                path: "affectation",
                component: AffectationComponent
            },
            {
                path: "detail-affectation-chef-division/:im",
                component: AffectationDetailComponent
            },
            {
                path: "nomination-apres-concours-direct",
                component: NominationApresConcoursDirectComponent,
            },
            {
                path: "nouveau-nacd/:idInteresse",
               component: NouveauNacdComponent,
           }
        ]
    },
    {
        path: 'Chef_de_division_Mef',
        component: ChefDeDivisionMefComponent,
        children: [
            {
                path: '',
                redirectTo: 'nomination-apres-concours-direct',
                pathMatch: 'full'
            },
            {
                path: "affectation",
                component: AffectationComponent
            },
            {
                path: "detail-affectation-chef-division/:im",
                component: AffectationDetailComponent
            },
            {
                path: "nomination-apres-concours-direct",
                component: NominationApresConcoursDirectComponent,
            },
            {
                path: "nouveau-nacd/:idInteresse",
               component: NouveauNacdComponent,
           }
        ]
    },
    {
        path: 'Chef_de_service_Mef',
        component: ChefDeServiceMefComponent,
        children: [
            {
                path: '',
                redirectTo: 'nomination-apres-concours-direct',
                pathMatch: 'full'
            },
            {
                path: "affectation",
                component: AffectationComponent
            },
            {
                path: "detail-affectation-chef-division/:im",
                component: AffectationDetailComponent
            },
            {
                path: "nomination-apres-concours-direct",
                component: NominationApresConcoursDirectComponent,
            },
            {
                path: "nouveau-nacd/:idInteresse", 
               component: NouveauNacdComponent,
           }
        ]
    },
    {
        path: 'Charge_d_Etudes_CF',
        component: ChefDeServiceMefComponent,
        children: [
            {
                path: '',
                redirectTo: 'nomination-apres-concours-direct',
                pathMatch: 'full'
            },
            {
                path: "nomination-apres-concours-direct",
                component: NominationApresConcoursDirectComponent,
            },
            {
                path: "nouveau-nacd/:idInteresse", 
               component: NouveauNacdComponent,
           }
        ]
    },
    {
        path: 'Directeur_ou_Chef_de_Service_CF',
        component: ChefDeServiceCFComponent,
        children: [
            {
                path: '',
                redirectTo: 'nomination-apres-concours-direct',
                pathMatch: 'full'
            },
            {
                path: "nomination-apres-concours-direct",
                component: NominationApresConcoursDirectComponent,
            },
            {
                path: "nouveau-nacd/:idInteresse", 
               component: NouveauNacdComponent,
           }
        ]
    },
    {
            path: 'agent-saisi-fop',
            component: AgentDeSaisieFopComponent,
            children: [
                {
                    path: '',
                    redirectTo: 'nomination-apres-concours-direct',
                    pathMatch: 'full'
                },
                {
                    path: "nomination-apres-concours-direct",
                    component: NominationApresConcoursDirectComponent,
                },
                {
                    path: 'nouveau-nacd/:idInteresse',
                     component: NouveauNacdComponent,
                },
                // {
                //   path: 'detailNACD/:idInteresse',
                //   component: DetailNACDComponent
                // },
                // {
                //   path: 'detailNacp/:idInteresse',
                //   component: DetailNacpComponent
                // },
                // {
                //   path: 'detailNacp/:idInteresse/:etat',
                //   component: DetailNacpComponent
                // },
                // {
                //   path: 'nomination-sur-titre',
                //   component: NominationSurTitreComponent,
                // },
                // {
                //   path: 'detailNst/:idInteresse',
                //   component: DetailNstComponent
                // },
                // {
                //   path: 'detailNst/:idInteresse/:etat',
                //   component: DetailNstComponent
                // },
                // {
                //   path: 'circuit-fop',
                //   component: CircuitFopComponent
                // },
                // {
                //   path: 'circuit-mef',
                //   component: CircuitMefComponent
                // },
                // {
                //   path: 'circuit-cf',
                //   component: CircuitCfComponent
                // },
                // {
                //   path: 'circuit-finition',
                //   component: CircuitFinitionComponent
                // },
                // {
                //   path: 'circuit-termines',
                //   component: CircuitTerminesComponent
                // },
                // {
                //   path: 'fop/:cas',
                //   component: FopComponent
                // },
                // {
                //   path: 'mef/:cas',
                //   component: MefComponent
                // },
                // {
                //   path: 'cf/:cas',
                //   component: CfComponent
                // },
                // {
                //   path: 'finition/:cas',
                //   component: FinitionComponent
                // },
                // {
                //   path: 'termines/:cas',
                //   component: TerminesComponent
                // },
                // {
                //   path: 'detail-en-general/:idInteresse',
                //   component: DetailEnGeneralComponent
                // },
            ],
    },
    {
        path: 'auth/login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: RegisterComponent
    },
    {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full'
    },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
