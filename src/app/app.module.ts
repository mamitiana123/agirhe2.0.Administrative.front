import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './Agent_de_saisie_ME/user.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './Chef_de_service/admin.component';
import { PmComponent } from './Chef_de_division/pm.component';
import { DataTablesModule } from 'angular-datatables';

import { httpInterceptorProviders } from './auth/auth-interceptor';
import { AffectationComponent } from './affectation/affectation.component';
import { NewAffectationComponent } from './new-affectation/new-affectation.component';
import { DRHEComponent } from './drhe/drhe.component';
import { EditAffectationComponent } from './edit-affectation/edit-affectation.component';
import { AffectationChefDivisionComponent } from './affectation-chef-division/affectation-chef-division.component';
import { AffectationDetailComponent } from './affectation-detail/affectation-detail.component';
import { ChefDeDivisionFopComponent } from './chef-de-division-fop/chef-de-division-fop.component';
import { ChefDeServiceFopComponent } from './chef-de-service-fop/chef-de-service-fop.component';
import { DrheFopComponent } from './drhe-fop/drhe-fop.component';
import { ComptableVerificateurMefComponent } from './comptable-verificateur-mef/comptable-verificateur-mef.component';
import { ChefDeDivisionMefComponent } from './chef-de-division-mef/chef-de-division-mef.component';
import { ChefDeServiceMefComponent } from './chef-de-service-mef/chef-de-service-mef.component';
import { AgentDeSaisieFopComponent } from './agent-de-saisie-fop/agent-de-saisie-fop.component';
import { NominationApresConcoursDirectComponent } from './nomination-apres-concours-direct/nomination-apres-concours-direct.component';
import { NewNacdComponent } from './new-nacd/new-nacd.component';
import { NouveauNacdComponent } from './detail-nacd/nouveau-nacd.component';
import { SercretaireMefComponent } from './sercretaire-mef/sercretaire-mef.component';
import { ChargeEtudeCFComponent } from './charge-etude-cf/charge-etude-cf.component';
import { ChefDeServiceCFComponent } from './chef-de-service-cf/chef-de-service-cf.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    PmComponent,
    AffectationComponent,
    NewAffectationComponent,
    DRHEComponent,
    EditAffectationComponent,
    AffectationChefDivisionComponent,
    AffectationDetailComponent,
    ChefDeDivisionFopComponent,
    ChefDeServiceFopComponent,
    DrheFopComponent,
    ComptableVerificateurMefComponent,
    ChefDeDivisionMefComponent,
    ChefDeServiceMefComponent,
    AgentDeSaisieFopComponent,
    NominationApresConcoursDirectComponent,
    NewNacdComponent,
    NouveauNacdComponent,
    SercretaireMefComponent,
    ChargeEtudeCFComponent,
    ChefDeServiceCFComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DataTablesModule,
    AngularFontAwesomeModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
