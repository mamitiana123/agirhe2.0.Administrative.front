import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { Recrutement } from '../model/Recrutement';
import { RecrutementService } from '../services/recrutement.service';
import { Interesse } from '../model/Interesse';

@Component({
  selector: 'app-new-nacd',
  templateUrl: './new-nacd.component.html',
  styleUrls: ['./new-nacd.component.css']
})
export class NewNacdComponent implements OnInit {
  private currentRecrutement: Recrutement;
  private mode: number=1;
  public size:number=4;
  public currentPage:number=0;
  
  constructor(private userService: RecrutementService, private router:Router) { }

  ngOnInit() { 
    
  }

  onSaveAgent(interesse:Interesse){
    this.userService.saveResource(interesse)
    .subscribe(res=>{
      //this.router.navigateByUrl("/affectation");
      this.currentRecrutement=res;
      this.mode=2;
    },err=>{
      console.log(err);
    })
  }
  onNewAgent(){
    this.mode=1;
  }

}
