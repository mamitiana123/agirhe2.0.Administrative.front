import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recrutement } from '../model/Recrutement';
import { Interesse } from '../model/Interesse';

@Injectable({
  providedIn: 'root'
})
export class RecrutementService {

  constructor(private http: HttpClient) { }

  public getRecrutement(page:number,size:number){
    return this.http.get("http://localhost:8080/interesses");
  }
  // public getRecrutementByKeyword(mc:string,page:number,size:number){
  //   return this.http.get("http://localhost:8080/interesses/search/byNom?mc="+mc);
  // }

  public getRoleDRHME(page:number,size:number){
    return this.http.get("http://localhost:8080/interesses/search/bySituationDossier?mc=1ère étape");
  }

  public getRoleAgentdeSaisiFop(page:number,size:number){
    return this.http.get("http://localhost:8080/interesses/search/bySituationDossier?mc=2ème étape");
  }

  public getRoleChefdeDivisionFop(page:number,size:number){
    return this.http.get("http://localhost:8080/interesses/search/bySituationDossier?mc=3ème étape");
  }

  public getRoleChefdeServiceFop(page:number,size:number){
    return this.http.get("http://localhost:8080/interesses/search/bySituationDossier?mc=4ème étape");
  }

  public getRoleDRHEFop(page:number,size:number){
    return this.http.get("http://localhost:8080/interesses/search/bySituationDossier?mc=5ème étape");
  }

  public getRoleSecretaireMef(page:number,size:number){
    return this.http.get("http://localhost:8080/interesses/search/bySituationDossier?mc=6ème étape");
  }

  public getRoleComptableVerificateurMef(page:number,size:number){
    return this.http.get("http://localhost:8080/interesses/search/bySituationDossier?mc=7ème étape");
  }

  public getRoleChefdeDivisionMef(page:number,size:number){
    return this.http.get("http://localhost:8080/interesses/search/bySituationDossier?mc=8ème étape");
  }

  public getRoleChefdeServiceMef(page:number,size:number){
    return this.http.get("http://localhost:8080/interesses/search/bySituationDossier?mc=9ème étape");
  }

  public getRoleChargerEtudeCF(page:number,size:number){
    return this.http.get("http://localhost:8080/interesses/search/bySituationDossier?mc=10ème étape");
  }

  public getRoleChefdeDivisionCF(page:number,size:number){
    return this.http.get("http://localhost:8080/interesses/search/bySituationDossier?mc=11ème étape");
  }

  public getRoleChefdeServiceCF(page:number,size:number){
    return this.http.get("http://localhost:8080/interesses/search/bySituationDossier?mc=12ème étape");
  }

  public deleteResource(url){
    return this.http.delete(url); 
  }

  public saveResource(interesse: Interesse){
    return this.http.post("http://localhost:8080/recrutements", interesse) as Observable<Interesse>;
  }

  public getResource(url){
    return this.http.get(url) as Observable<Recrutement>;
  }

  public updateResource(url,data){ 
    return this.http.put(url,data);  
  }
}
