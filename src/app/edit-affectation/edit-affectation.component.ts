import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Affectation } from '../model/affectation.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit-affectation',
  templateUrl: './edit-affectation.component.html',
  styleUrls: ['./edit-affectation.component.css']
})
export class EditAffectationComponent implements OnInit {

  private currentAffectation: Affectation;
  private url: string;

  constructor(private router:Router, private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit() {
    this.url=atob(this.activatedRoute.snapshot.params.im);
    this.userService.getResource(this.url)
    .subscribe(data=>{
      this.currentAffectation=data;
    },err=>{
      console.log(err);
    })
  }

  onUpdtateAgent(value:any){
    this.userService.updateResource(this.url,value)
    .subscribe(data=>{
      alert("Mise a jour effectuée avec succès!")
      this.router.navigateByUrl("/Agent_de_saisie_ME/affectation");
    },err=>{
      console.log(err);
    })
  }

}
