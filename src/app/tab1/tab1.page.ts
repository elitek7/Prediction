import { Component } from '@angular/core';
import { DogService } from '../apis/dog.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  img_src = "https://ionicframework.com/docs/img/demos/card-media.png";
  constructor(private dog: DogService) {}

  ngOnInit() {

    this.dog.getDogPicture().subscribe(response => this.img_src = response["message"]);

  }

}
