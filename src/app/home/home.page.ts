import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { TrabajadorService } from '../services/trabajador.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers:[UsuarioService, TrabajadorService]
})
export class HomePage implements OnInit {

  lista=[1,2]
  estrellas=[1,2,3,4,5];
  oestrellas=[];
  rubros:any=[];
  trabajadores:any=[];
  data_rubro:any={}
  rubro_value="all";
  loader=false;

  constructor(
    private menu: MenuController,
    private router:Router,
    private _usuarioService:UsuarioService,
    private _trabajadorService:TrabajadorService
  ) {}
    
  ngOnInit(){
    console.log("init");
  }

  ionViewWillEnter(){
    this.rubros=[];
    this.trabajadores=[];
    this.rubro_value="all";
    this.listarRubros();
  }

  listarRubros(){
    this.loader=true;
    this._trabajadorService.listarRubros().then(
      response=>{
        var rubros_lista:any=response;
        if(rubros_lista.code==200){
          this.rubros=rubros_lista.data;
          for (let index = 0; index < this.rubros.length; index++) {
            if(this.rubros[index].nombreRubro=="Rubro"){
              this.rubros.splice(index,1);
            }
          }
          this.listarServicios();
        }else{
          console.log(response);
          localStorage.clear();
          this.loader=false;
          this.router.navigate(['/switch']);
        }
      },
      error=>{
        console.log(error);
      }
    )
  }

  listarServicios(){
    this.loader=true;
    this._usuarioService.listarServiciosAll().then(
      data=>{
        var response:any=data;
        if(response.code==200){
          this.trabajadores=response.data;
          this.loader=false;
        }else{
          console.log("error listando servicios");
          localStorage.clear();
          this.loader=false;
          this.router.navigate(['/switch']);
        }
        console.log(data);
      },
      error=>{
        localStorage.clear();
        this.loader=false;
        this.router.navigate(['/switch']);
        console.log(<any>error);
      }
    )
  }

  listarServiciosRubro(){
    if(this.rubro_value=="all"){
      this.listarServicios();
    }else{
      this.data_rubro._nombreRubro=this.rubro_value;
      this._usuarioService.listarServiciosRubro(this.data_rubro).then(
        data=>{
          console.log(data);
          var response:any=data;
          this.trabajadores=[];
          this.trabajadores=response.data;
          if(this.trabajadores.length==0){
            this.trabajadores=null;
          }
        },
        error=>{
          console.log(<any>error);
        }
      )
    }
  }

  openMenu() {
    this.menu.enable(true, 'sidemenu');
    this.menu.open('sidemenu');
  }

  goCambioPassword(){
    this.menu.close('sidemenu');
    this.router.navigate(['/cambiar-password']);
  }

  goPerfil(){
    this.menu.close('sidemenu');
    this.router.navigate(['/perfil-solicitante']);
  }

  goContratos(){
    this.menu.close('sidemenu');
    this.router.navigate(['/contratos-solicitante'])
  }

  goCerrarSesion(){
    this.menu.close('sidemenu');
    localStorage.clear();
    this.router.navigate(['/switch']);
  }

  goVista(id){
    this.router.navigate(['/ver-trabajador'],{ queryParams : {id:id}});
  }
  

}
