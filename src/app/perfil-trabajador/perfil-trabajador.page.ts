import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrabajadorService } from '../services/trabajador.service';

@Component({
  selector: 'app-perfil-trabajador',
  templateUrl: './perfil-trabajador.page.html',
  styleUrls: ['./perfil-trabajador.page.scss'],
  providers: [TrabajadorService]
})
export class PerfilTrabajadorPage implements OnInit {

  usuario:any;
  id={ _idTrabajadores:0 };
  datos:any={
    foto:"./assets/img/perfil.png"
  };
  rubros=[];
  file:any;
  //imgUrl:any="./assets/img/add.jpg";
  error=false;
  success=false;
  loader=false;
  constructor(
    private router:Router,
    private _trabajadorService:TrabajadorService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.usuario=JSON.parse(localStorage.getItem('usuario_trabajador'));
    this.error=false;
    this.success=false;
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
          this.listarDatosTrabajador();
        }else{
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

  listarDatosTrabajador(){
    this.id._idTrabajadores=this.usuario.idTrabajadores;
    this._trabajadorService.listarDatosPrivados(this.id).then(
      response=>{
        var data_trabajador:any=response;
        if(data_trabajador.code==200){
          this.datos=data_trabajador.data[0];
          this.loader=false;
        }else{
          this.loader=false;
        }
      },
      error=>{
        console.log(<any>error);
      }
    )
  }

  onFileSelect(event) {
    this.loader=true;
    if(event.target.files.length > 0) {
      this.file = event.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (_event)=>{
        this.datos.foto = reader.result;
        this.loader=false;
      }
    }else{
      this.loader=false;
    }
  }

  actualizarDatos(){
    this.loader=true;
    this._trabajadorService.actualizar(this.file,this.datos.nombreRubro,this.usuario.idTrabajadores).subscribe(
      data=>{
        var response:any=data;
        if(response.code==200){
          this.success=true;
          this.error=false;
          this.loader=false;
        }else{
          this.success=false;
          this.error=true;
          this.loader=false;
        }
      },
      error=>{
        this.success=false;
        this.error=true;
        this.loader=false;
        console.log(<any>error);
      }
    )
  }

  goAgregarImagen(){
    this.router.navigate(['/agregar-imagen-trabajador']);
  }
  
  return(){
    this.router.navigate(['/home-trabajador']);
  }

}
