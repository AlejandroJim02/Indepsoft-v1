import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-imagen',
  templateUrl: './ver-imagen.page.html',
  styleUrls: ['./ver-imagen.page.scss'],
})
export class VerImagenPage implements OnInit {

  url="";
  descripcion="";
  id=0;
  constructor(
    private route:ActivatedRoute,
    private router:Router,
  ) {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      if(params && params.url){
        if(params.id){
          this.id=params.id;
        }
        this.url=params.url;
        this.descripcion=params.descripcion;
      }
      else{
        localStorage.clear();
        this.router.navigate(['/switch']);
      }
    })
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    console.log("omaewa");
    console.log(this.url);
    console.log(this.descripcion);
  }

  return(){
    if(this.id!==0){
      this.router.navigate(['/ver-trabajador'],{ queryParams : {id:this.id}});
    }else{
      this.router.navigate(['/home-trabajador']);
    }
    
  }

}
