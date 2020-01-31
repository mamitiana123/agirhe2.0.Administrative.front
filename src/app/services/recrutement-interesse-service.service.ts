import { SituationRecrutement } from '../model/SituationRecrutement';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecrutementInteresseServiceService {

  private baseUrl = 'http://localhost:8080/agirhe/recrutements';
  private userUrl = 'http://localhost:8080/api/auth/users/byIntitule';
  private situationRecrutementUrl = 'http://localhost:8080/agirhe/situationRecrutement';

  constructor(private http: HttpClient) { }

  getInteresse(idInteresse: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${idInteresse}`);
  }

  recrutementEtape1(Interesse: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`, Interesse);
  }

  updateInteresse(idInteresse: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/${idInteresse}`, value);
  }

  deleteInteresse(idInteresse: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${idInteresse}`, { responseType: 'text' });
  }

  getInteresseList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getResponsable(username: string): Observable<any> {
    return this.http.get(`${this.userUrl}/${username}`);
  }

  getSituationRecrutement(idSituationRecrutement: number): Observable<any> {
    return this.http.get(`${this.situationRecrutementUrl}/${idSituationRecrutement}`);
  }

  getListeRecrutement(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getListeRecrutementBySituation(idSituationRecrutement: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/bySituation/${idSituationRecrutement}`);
  }

  modifierSituationRecrutement(idInteresse: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/${idInteresse}`, value);
  }

  rectifierRecrutement(idInteresse: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/${idInteresse}`, value);
  }
}
