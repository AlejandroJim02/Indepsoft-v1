import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrabajadorService } from '../services/trabajador.service';

@Component({
  selector: 'app-agregar-imagen-trabajador',
  templateUrl: './agregar-imagen-trabajador.page.html',
  styleUrls: ['./agregar-imagen-trabajador.page.scss'],
  providers:[TrabajadorService]
})
export class AgregarImagenTrabajadorPage implements OnInit {

  foto_galeria:any="./assets/img/add-image.png";
  descripcion_galeria="";
  usuario:any;
  id={ _idTrabajadores:0 };
  blank_image=false;
  success_add=false;
  success_remove=false;
  exist_image=false;
  exist_descripcion=false;
  datos:any={
    foto:"./assets/img/perfil.png"
  };
  file:any;
  loader=false;
  can_add=false;
  constructor(
    private router:Router,
    private _trabajadorService:TrabajadorService
  ) { }

  ngOnInit() {
  }
  
  ionViewWillEnter(){
    this.usuario=JSON.parse(localStorage.getItem('usuario_trabajador'))
    this.listarDatosTrabajador();
  }

  listarDatosTrabajador(){
    this.loader=true;
    this.id._idTrabajadores=this.usuario.idTrabajadores;
    this._trabajadorService.listarDatos(this.id).then(
      response=>{
        var data_trabajador:any=response;
        console.log(data_trabajador);
        if(data_trabajador.code==200){
          this.datos=data_trabajador.perfil;
          console.log(this.datos);
          this.loader=false;
        }else{
          localStorage.clear();
          this.router.navigate(['/switch']);
          this.loader=false;
        }
      },
      error=>{
        console.log(<any>error);
      }
    )
  }

  seleccionarImagen(url, descripcion){
    this.deleteAllMessages();
    this.can_add=false;
    this.foto_galeria=url;
    this.descripcion_galeria=descripcion;
  }

  onFileSelect(event) {
    this.deleteAllMessages();
    this.loader=true;
    if(event.target.files.length > 0) {
      this.file = event.target.files[0];
      //this.flag_img=true;
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (_event)=>{
        this.foto_galeria = reader.result;
        this.can_add=true;
        this.loader=false;
      }
    }else{
      this.loader=false;
    }
  }

  subirImagen(){
    if(this.can_add){
      if(this.descripcion_galeria!==""){
        this.deleteAllMessages();
        this._trabajadorService.subirImagenGaleria(this.usuario.idTrabajadores,this.descripcion_galeria,this.file).subscribe(
          data=>{
            console.log(data);
            var response:any=data;
            if(response.code==200){
              this.listarDatosTrabajador();
              this.descripcion_galeria="";
              this.can_add=false;
              this.foto_galeria="./assets/img/add-image.png";
              this.success_add=true;
            }else{
              console.log("error subiendo imagen");
            }
          },
          error=>{
            console.log(<any>error);
          }
        )
      }else{
        this.exist_descripcion=true;
      }
    }else{
      this.exist_image=true;
    }
  }

  deleteAllMessages(){
    this.blank_image=false;
    this.exist_image=false;
    this.success_add=false;
    this.success_remove=false;
    this.exist_descripcion=false;
  }

  return(){
    this.router.navigate(['/perfil-trabajador']);
  }

}
