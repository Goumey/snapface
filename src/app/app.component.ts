import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  imports: [FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  myFaceSnap!: FaceSnap[];
  ngOnInit(): void {
    this.myFaceSnap = [
      new FaceSnap(
        'Mon premier FaceSnap',
        'Mon premier FaceSnap, voici une description',
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        20,
        new Date()
      ),
      new FaceSnap(
        'Mon deuxieme faceSnap',
        'Mon deuxieme FaceSnap, voici une description',
        'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg',
        254,
        new Date()
      ),
      new FaceSnap(
        'Mon dernier FaceSnap',
        'Mon dernier FaceSnap, voici une description',
        'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        345,
        new Date()
      ),
    ];
    this.myFaceSnap[1].setLocation('Paris');
  }
}
