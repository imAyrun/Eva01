import { Component, OnInit } from '@angular/core';
import { RedirectCommand, Router } from '@angular/router'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cambpassword',
  templateUrl: './cambpassword.page.html',
  styleUrls: ['./cambpassword.page.scss'],
})
export class CambpasswordPage implements OnInit {

  constructor( private router: Router, private alertController: AlertController) { }

  ngOnInit() {

  }
async funcionCambio()
{
const alerta = await this.alertController.create (
    {
      header: "Cambio de Contraseña",
      message: "Contraseña cambiada con exito :D",
      buttons: ['OK']
    }
    
  )
  await alerta.present();
}
}


