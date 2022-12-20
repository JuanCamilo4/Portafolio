import { Component, OnInit } from '@angular/core';
import Experience from "../../assets/data/experience.json";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experience: any = [];

  constructor() { }

  ngOnInit(): void {
    this.experience = Experience;
    this.experience.forEach((e: any) => {
      if (e.end) e.time = new Date(e.end).getMonth() - new Date(e.begin).getMonth()+1;
      else e.time = new Date().getMonth() - new Date(e.begin).getMonth()+1;
    });
  }

}
