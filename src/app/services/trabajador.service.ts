import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GLOBAL } from '../services/global';

@Injectable({
  providedIn: 'root'
})
export class TrabajadorService {

  token=localStorage.getItem('token_trabajador');
  token_solicitante=localStorage.getItem('token_solicitante');
  url_trabajador=GLOBAL.url_trabajador;
  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  headers_form_token = new HttpHeaders({
    'auth-token': this.token
  });
  header_token=new HttpHeaders({
    'Content-Type': 'application/json',
    'auth-token': this.token
  });
  header_rubros=new HttpHeaders({
    'Content-Type': 'application/json',
    'auth-token': this.token
  });
  header_rubros_solicitante=new HttpHeaders({
    'Content-Type': 'application/json',
    'auth-token': this.token_solicitante
  });
  

  constructor(
    public http: HttpClient
  ) { }

  login(datos){
    return new Promise(resolve=>{
      this.http.post(this.url_trabajador+"login-trabajador",datos, {headers:this.headers, observe:'response'} ).subscribe((data)=>{
        if(data.headers.get('Auth-Token')){
          resolve([data ,data.headers.get('Auth-Token')]);
        }else{
          resolve(data);
        }
      },error=>{
        resolve(error);
      }
      )})
  }

  registrar(nombres,apepaterno, apematerno, dni, distrito, email, password, telefono, file){
    console.log(file);
    var formData = new FormData();

    formData.append('_nombre',nombres);
    formData.append('_apellidoPaterno',apepaterno);
    formData.append('_apellidoMaterno',apematerno);
    formData.append('_dni',dni);
    formData.append('_distrito',distrito);
    formData.append('_emailTrabajadores',email);
    formData.append('_password',password);
    formData.append('_telefono',telefono);
    formData.append('image',file, file.name);
    console.log(formData);
    return this.http.post(this.url_trabajador+"registro-trabajador",formData);

  }

  actualizar(file, rubro, id){
    var formDataUpdate = new FormData();
    formDataUpdate.append('_idTrabajadores',id);
    formDataUpdate.append('_nombreRubro',rubro);
    if(file){
      formDataUpdate.append('image',file, file.name);
    }
    console.log(formDataUpdate);
    return this.http.put(this.url_trabajador+"editar-perfil-trabajador",formDataUpdate, {headers:this.headers_form_token});
  }

  listarDatos(id){
    return new Promise(resolve=>{
      this.http.post(this.url_trabajador+"perfil-publico-trabajador",id,{headers:this.header_token}).subscribe(
        data=>{
          resolve(data);
        },
        error=>{
          resolve(error);
        }
      )
    })
  }

  listarDatosPrivados(id){
    return new Promise(resolve=>{
      this.http.post(this.url_trabajador+"perfil-privado-trabajador",id,{headers:this.header_token}).subscribe(
        data=>{
          resolve(data);
        },
        error=>{
          resolve(error);
        }
      )
    })
  }

  listarRubros(){
    if(this.token){
      return new Promise(resolve=>{
        this.http.get(this.url_trabajador+"listar-rubros",{headers:this.header_rubros}).subscribe(
          data=>{
            resolve(data);
          },
          error=>{
            resolve(error);
          }
        )
      })
    }else{
      return new Promise(resolve=>{
        this.http.get(this.url_trabajador+"listar-rubros",{headers:this.header_rubros_solicitante}).subscribe(
          data=>{
            resolve(data);
          },
          error=>{
            resolve(error);
          }
        )
      })
    }
  }

  subirImagenGaleria(id, descripcion, file){
    var formDataUploadImage = new FormData();
    formDataUploadImage.append('_idTrabajadores',id);
    formDataUploadImage.append('_descripcion',descripcion);
    formDataUploadImage.append('image',file, file.name);
    return this.http.post(this.url_trabajador+"subir-publicacion-galeria",formDataUploadImage, {headers:this.headers_form_token});
  }

  recuperarPasswordTrabajador(data){
    return new Promise(resolve=>{
      this.http.put(this.url_trabajador+"recuperar-contrasenia",data).subscribe(
        data=>{
          resolve(data);
        },
        error=>{
          resolve(error);
        }
      )
    })
  }

  cambiarPasswordTrabajador(data){
    return new Promise(resolve=>{
      this.http.put(this.url_trabajador+"cambiar-contrasenia-trabajador",data, {headers: this.header_token}).subscribe(
        data=>{
          resolve(data);
        },
        error=>{
          resolve(error);
        }
      )
    })
  }

}
