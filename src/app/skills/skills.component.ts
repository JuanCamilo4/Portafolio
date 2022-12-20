import { Component, OnInit } from '@angular/core';

import Skills from "../../assets/data/skills.json";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: any;

  constructor() { }

  ngOnInit(): void {
    this.skills = Skills;
  }

}
