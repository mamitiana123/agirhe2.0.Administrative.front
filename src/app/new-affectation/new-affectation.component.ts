import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { Affectation } from '../model/affectation.model';

@Component({
  selector: 'app-new-affectation',
  templateUrl: './new-affectation.component.html',
  styleUrls: ['./new-affectation.component.css']
})
export class NewAffectationComponent implements OnInit {
  
  private currentAffectation: Affectation;
  private mode: number=1;
  public size:number=4;
  public currentPage:number=0;

  constructor(private userService: UserService, private router:Router) { }

  ngOnInit() {
  }

  onSaveAgent(affectation:Affectation){
    this.userService.saveResource(affectation)
    .subscribe(res=>{
      //this.router.navigateByUrl("/affectation");
      this.currentAffectation=res;
      this.mode=2;
    },err=>{
      console.log(err);
    })
  }
  onNewAgent(){
    this.mode=1;
  }

}
