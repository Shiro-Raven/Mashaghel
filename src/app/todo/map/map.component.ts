import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent  {
  lat = 30.0560109;
  lng = 31.2221738;
  zoom = 14.24;
  constructor(
    public dialogRef: MatDialogRef<MapComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.lat = parseFloat(data.lat);
      this.lng = parseFloat(data.lng);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
