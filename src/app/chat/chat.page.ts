import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  id;
  mensaje:any={};
  texto1="";
  texto2="";
  mensajes=[];
  currentUser='';
  usuario:any;
  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private _usuarioService:UsuarioService,
    private socket:Socket
  ) {
    this.route.queryParams.subscribe(params => {
      if(params && params.id){
        this.id=params.id;
      }
      else{
        this.router.navigate(['/switch']);
      }
    })
  }

  ngOnInit() {
    //this.socket.connect();
    /*this.socket.fromEvent('sended-message').subscribe(
      data=>{
        console.log("sucx")
        console.log(data);
      },
      error=>{
        console.log("error");
        console.log(<any>error);
      }
    )*/
  }

  ionViewWillEnter(){
    this.usuario=JSON.parse(localStorage.getItem('usuario_solicitante'));
    this.mensajes=[];
    this.texto1="";
    this.texto2="";
    this.socket.fromEvent('mensaje-usuario').subscribe(
      data=>{
        console.log(data);
        console.log("mensaje entrante");
      },
      error=>{
        console.log(<any>error);
      }
    )
  }

  enviarMensaje(){
    /*this.mensaje.from='user';
    this.mensaje.texto=this.texto1;
    this.mensajes.push(this.mensaje);
    this.mensaje={};
    this.texto1="";
    console.log(this.mensajes);*/
    /*this.socket.emit('mensaje',{
      _idSolicitantes:this.usuario.idSolicitantes,
      _idTrabajadores:this.id,
      _mensaje:this.texto1,
      _nombre: 'Hola'
    });*/
  }

  return(){
    this.router.navigate(['/ver-trabajador'],{ queryParams : {id:this.id}})
  }

}
