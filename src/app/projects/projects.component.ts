import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import Projects from "../../assets/data/projects.json";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: any[] = [];
  projectsShow: any[] = [];
  projectSelected: any;

  posicionRight: number = 3;
  posicionLeft: number = 0;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.projects = Projects;
    Projects.forEach(e => {
      this.projectsShow.push(e);  
    })
    if (this.projectsShow.length > 3) {
      this.projectsShow.length = 3;
    }
  }

  control(action: string){
    if (action == 'left') {
      if (this.posicionLeft != 0) {
        this.posicionLeft--;
        this.posicionRight--;
        this.projectsShow.pop();
        this.projectsShow.unshift(this.projects[this.posicionLeft]); 
      }
    }
    if (action == 'right') {
      if (this.posicionRight < this.projects.length) {
        this.projectsShow.shift();
        this.projectsShow.push(this.projects[this.posicionRight++]); 
        this.posicionLeft++;
      }
    }
    console.log(this.posicionLeft, this.posicionRight);
  }

  openInfo(content: any, project: any){
    this.projectSelected = project;
    this.modalService.open(content, {centered: true, size: 'lg'});
  }

  openProjects(content: any){
    this.modalService.open(content, {scrollable: true});
  }

  close(){
    this.modalService.dismissAll();
  }

}
