import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ver-trabajador',
  templateUrl: './ver-trabajador.page.html',
  styleUrls: ['./ver-trabajador.page.scss'],
  providers: [UsuarioService]
})
export class VerTrabajadorPage implements OnInit {

  id;
  usuario:any={
    foto: "./assets/img/perfil.png"
  };
  send_id:any={};
  loader=false;
  flag_publicaciones=false;
  publicaciones=[];

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private _usuarioService:UsuarioService
    ) {
    this.route.queryParams.subscribe(params => {
      if(params && params.id){
        this.id=params.id;
      }
      else{
        localStorage.clear();
        this.router.navigate(['/switch']);
      }
    })
  }

  numbers=[1,2,3,1,2,3,1,2]

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.listarDatos();
  }

  listarDatos(){
    this.loader=true;
    this.send_id._idTrabajadores=parseInt(this.id);
    this._usuarioService.listarDatosTrabajador(this.send_id).then(
      data=>{
        console.log(data);
        var response:any=data;
        if(response.code==200){
          this.usuario=response.perfil;
          if(response.perfil.publicaciones){
            this.publicaciones=response.perfil.publicaciones;
            this.flag_publicaciones=true;
          }else{
            this.flag_publicaciones=false;
          }
          this.loader=false;
        }else{
          localStorage.clear();
          this.loader=false;
          this.router.navigate(['/switch']);
        }
      },
      error=>{
        console.log(<any>error);
      }
    )
  }

  verImagen(url, descripcion){
    console.log(url);
    console.log(descripcion);
    this.router.navigate(['/ver-imagen'],{ queryParams : {url:url, descripcion:descripcion, id:this.id}});
  }

  return(){
    this.router.navigate(['/home']);
  }

  contrato(){
    console.log("solicitar contrato");
  }

  goChat(){
    console.log("chat");
    //this.router.navigate(['/chat'],{ queryParams : {id:this.id}});
  }

}
