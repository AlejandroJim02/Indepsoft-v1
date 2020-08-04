import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.page.html',
  styleUrls: ['./alert-modal.page.scss'],
})
export class AlertModalPage implements OnInit {

  usuario:any;
  constructor(
    private modalController:ModalController,
    private socket:Socket
  ) { }

  @Input() public idTrabajador:number;

  ngOnInit() {
  }

  ionViewWillEnter(){
    
    this.socket.connect();
    console.log(this.idTrabajador);
    this.usuario=JSON.parse(localStorage.getItem('usuario_solicitante'))
    this.socket.emit('contrato', {
      _idSolicitantes: this.usuario.idSolicitantes,
      _idTrabajadores:this.idTrabajador
    });

  }

  async closeModal(){
    await this.modalController.dismiss();
  }

}
