import { Injectable } from "@angular/core";
import { Camera, CameraResultType,Photo, CameraSource }from "@capacitor/camera";
import { Preferences } from "@capacitor/preferences";

@Injectable({
  providedIn: "root"
})

export class PhotoService {
  constructor() {}
  public async addNewToGallery() {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,

    })
  }
}