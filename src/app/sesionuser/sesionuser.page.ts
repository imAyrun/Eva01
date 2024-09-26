import { Component, OnInit } from '@angular/core';
import { RedirectCommand, Router } from '@angular/router'
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-sesionuser',
  templateUrl: './sesionuser.page.html',
  styleUrls: ['./sesionuser.page.scss'],
})
export class SesionuserPage implements OnInit {
user    : String;
password: String;
  
  constructor( private router: Router, private alertController: AlertController) {
    this.user = '';
    this.password = '';
   }

  ngOnInit() {
  }

async funcionIngresar()
{
  if ( this.user == "Usuario1" && this.password == "MiClav3")
  {
    this.router.navigate(['/inicio'])
  }
  else
  {
    const alerta = await this.alertController.create (
      {
        header: "Credencial Incorrecta",
        message: "Credencial ingresada incorrecta, verifique su Usuario y Contraseña.",
        buttons: ['OK']
      }
    )
    await alerta.present();
  }
}

}
