import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { RouterModule, Routes, ChildrenOutletContexts } from '@angular/router';

@Component({
  selector: 'app-affectation-chef-division',
  templateUrl: './affectation-chef-division.component.html',
  styleUrls: ['./affectation-chef-division.component.css']
})
export class AffectationChefDivisionComponent implements OnInit {

  public affectation:any;
  public size:number=4;
  public currentPage:number=0;
  public totalPages:number;
  public pages:Array<number>;

  constructor(private userService: UserService, private router:Router) { }

  ngOnInit() {
    this.userService.getRoleChefdeDivision(this.currentPage,this.size)
    .subscribe(data=>{
      this.affectation=data;
    },err=>{
      console.log(err);
    });
  }

  onGetAffectation() {
    this.userService.getAffectation(this.currentPage,this.size)
      .subscribe(data=>{
      //this.totalPages=data['page'].totalPages;
      //this.pages=new Array<number>(this.totalPages);
      this.affectation=data;
    },err=>{
      console.log(err);
    });
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

  onDetailAgent(a){
    let url=a._links.self.href;

    this.router.navigateByUrl('Chef_de_division/detail-affectation-chef-division/'+btoa(url));
  }
}
