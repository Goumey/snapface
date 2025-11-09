import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  LowerCasePipe,
  NgClass,
  NgStyle,
  PercentPipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';

@Component({
  selector: 'app-face-snap',
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DatePipe,
    DecimalPipe,
    PercentPipe,
    CurrencyPipe,
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent {
  hasSnapped: boolean = false;
  userHasSnapped: boolean = false;
  myNumberTest: number = 0.564;
  myPriceTest: number = 1999.99;
  @Input() faceSnap!: FaceSnap;

  onSnap(): void {
    if (this.hasSnapped) {
      this.faceSnap.onRemoveSnap();
    } else {
      this.faceSnap.onAddSnap();
    }
    this.hasSnapped = !this.hasSnapped;
  }
}
