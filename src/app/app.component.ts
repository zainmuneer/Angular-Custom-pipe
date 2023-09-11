import { Component, OnInit } from '@angular/core';
import { StudentsService } from './students.service';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[StudentsService]
})
export class AppComponent implements OnInit {
title = 'my-app';
students:Student[];
totalMarks:number;
_filterText:string='';
filteredStudents:Student[];
totalStudents=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve(this.filteredStudents.length);
  },2000);
})
get filterText(){
  return this._filterText;
}
set  filteredText(value:string){
  this._filterText=value;
  this.filteredStudents=this.filteredStudentByGender(value);
}

constructor(private studentsService:StudentsService){

}
ngOnInit() {
  this.students=this.studentsService.students;
  this.totalMarks=this.studentsService.totalMarks;
  this.filteredStudents=this.students;
}
AddStudent(){
  this.students.push({name:'Zain',course:'BSE',marks:520,DOB: new Date(),gender:'Male'});
  this.filteredStudents=this.filteredStudentByGender(this._filterText);
}
ChangeGender(){
  this.students[0].gender = 'Female';
  this.filteredStudents = this.filteredStudentByGender(this._filterText);
}

onMouseMove(){}

filteredStudentByGender(filterTerm:string){
    if(this.students.length ===0||this.filterText ===''){
      return this.students;
    }else{
      return this.students.filter((student)=>{
        return student.gender.toLowerCase()===filterTerm.toLowerCase();
      })
    }
  }
}

