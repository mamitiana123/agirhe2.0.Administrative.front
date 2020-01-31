import { SituationRecrutement } from './SituationRecrutement';
import { Responsable } from './Responsable';



export class Interesse {

    idInteresse: number;
    nom: string;
    prenom: string;
    dateDeNaissance: string;
    lieuDeNaissance: string;
    cIN: number;
    dateCIN: string;
    lieuCIN: string;
    corps: string;
    codeCorpsSpecifique: string;
    grade: string;
    indice: string;
    situationMatrimoniale: string;
    diplome: string;
    numeroDiplome: string;
    dateDiplome: string;
    adresse: string;
    casierJudiciaire: string;
    ReferenceCasierJudiciaire: string;
    dateCasierJudiciaire: string;
    sexe: string;
    visiteMedicale: string;
    situationRecrutement: SituationRecrutement;
    idSituation: number;
    responsable: Responsable;
    dateEnregistrement: string;
    remarque: string;
    visaMEF: string;
    visaCF: string;
    im: number;
    etablissement: string;
    poste: string;
    montant: number;
    versement: string;
    nomBanque: string;
    numeroCompteBancaire: string;
    situationDossier: string;
    dossier: string;
    motifRejet:string;
    auteur:string;
    
}
