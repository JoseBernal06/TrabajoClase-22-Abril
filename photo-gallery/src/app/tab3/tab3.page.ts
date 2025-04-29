import { Component } from '@angular/core';
import {PhotoService} from '../services/photo.service'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {

  constructor(public photoService:PhotoService) {}

  async loadPhotos() {
    // Cargar fotos desde el almacenamiento sin sobrescribir las existentes
    await this.photoService.moveTempPhotosToGallery();
    await this.photoService.loadSaved();
  }


}
