import { Component } from '@angular/core';
import { AgeService } from '../apis/age.service';
import { GenderService } from '../apis/gender.service';
import { NationalityService } from '../apis/nationality.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  name: string = "Elite";

  predicted_age: number = 0;
  predicted_gender: string = "";
  predicted_nationality: string = "";
  constructor(private age: AgeService, private gender: GenderService, private nationality: NationalityService) {}

  predict() {

    this.age.getAge(this.name).subscribe(response => this.predicted_age = response["age"]);
    this.gender.getGender(this.name).subscribe(response => this.predicted_gender = response["gender"]);
    this.nationality.getNationality(this.name).subscribe(response => this.predicted_nationality = response["country"].map((t: any) => t["country_id"]));

  }

}
