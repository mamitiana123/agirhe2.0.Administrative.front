import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Affectation } from '../model/affectation.model';
import { AffectationComponent } from '../affectation/affectation.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public host:string="http://localhost:8080";
  private Agent_de_saisie_MEUrl = 'http://localhost:8080/api/test/Agent_de_saisie_ME';
  private Chef_de_divisionUrl = 'http://localhost:8080/api/test/Chef_de_division';
  private Chef_de_serviceUrl = 'http://localhost:8080/api/test/Chef_de_service';
  private DRHEUrl = 'http://localhost:8080/api/test/DRHE';

  constructor(private http: HttpClient) { }

  getAgent_de_saisie_MEBoard(): Observable<string> {
    return this.http.get(this.Agent_de_saisie_MEUrl, { responseType: 'text' });
  }

  getChef_de_divisionBoard(): Observable<string> {
    return this.http.get(this.Chef_de_divisionUrl, { responseType: 'text' });
  }

  getChef_de_serviceBoard(): Observable<string> {
    return this.http.get(this.Chef_de_serviceUrl, { responseType: 'text' });
  }

  getDRHEBoard(): Observable<string> {
    return this.http.get(this.DRHEUrl, { responseType: 'text' });
  }

  getChef_de_division_FopBoard(): Observable<string> {
    return this.http.get(this.Agent_de_saisie_MEUrl, { responseType: 'text' });
  }

  getChef_de_service_FopBoard(): Observable<string> {
    return this.http.get(this.Chef_de_divisionUrl, { responseType: 'text' });
  }

  getDRHE_FopBoard(): Observable<string> {
    return this.http.get(this.Chef_de_serviceUrl, { responseType: 'text' });
  }

  getComptable_verificateur_MefBoard(): Observable<string> {
    return this.http.get(this.DRHEUrl, { responseType: 'text' });
  }

  getChef_de_division_MefBoard(): Observable<string> {
    return this.http.get(this.DRHEUrl, { responseType: 'text' });
  }

  public getAffectation(page:number,size:number){
    return this.http.get("http://localhost:8080/affectations");
  }

  public getAffectationByKeyword(mc:string,page:number,size:number){
    return this.http.get("http://localhost:8080/affectations/search/byNom?mc="+mc);
  }

  public getRoleAgentDeSaisie(page:number,size:number){
    return this.http.get("http://localhost:8080/affectations/search/byReferenceDossier?mc=1ère étape");
  }

  public getRoleChefdeDivision(page:number,size:number){
    return this.http.get("http://localhost:8080/affectations/search/byReferenceDossier?mc=2ème étape");
  }

  public getRoleChefdeService(page:number,size:number){
    return this.http.get("http://localhost:8080/affectations/search/byReferenceDossier?mc=3ème étape");
  }

  public getRoleDRHE(page:number,size:number){
    return this.http.get("http://localhost:8080/affectations/search/byReferenceDossier?mc=4ème étape");
  }

  public getRoleChefdeDivisionFop(page:number,size:number){
    return this.http.get("http://localhost:8080/affectations/search/byReferenceDossier?mc=5ème étape");
  }

  public getRoleChefdeServiceFop(page:number,size:number){
    return this.http.get("http://localhost:8080/affectations/search/byReferenceDossier?mc=6ème étape");
  }

  public getRoleDRHEFop(page:number,size:number){
    return this.http.get("http://localhost:8080/affectations/search/byReferenceDossier?mc=7ème étape");
  }

  public getRoleComptableVerificateurMef(page:number,size:number){
    return this.http.get("http://localhost:8080/affectations/search/byReferenceDossier?mc=8ème étape");
  }

  public getRoleChefdeDivisionMef(page:number,size:number){
    return this.http.get("http://localhost:8080/affectations/search/byReferenceDossier?mc=9ème étape");
  }

  public getRoleChefdeServiceMef(page:number,size:number){
    return this.http.get("http://localhost:8080/affectations/search/byReferenceDossier?mc=10ème étape");
  }

  public deleteResource(url){
    return this.http.delete(url); 
  }

  public saveResource(affectation: Affectation){
    return this.http.post("http://localhost:8080/NewAffectations", affectation) as Observable<Affectation>;
  }

  public getResource(url){
    return this.http.get(url) as Observable<Affectation>;
  }

  public updateResource(url,data){
    return this.http.put(url,data);
  }
}