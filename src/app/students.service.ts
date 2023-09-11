import { Student } from "./student";


export class StudentsService {
  //  totalMarks:number;
  students:Student[]=[

{name:'Zain Munir',course:'BCS',marks:520,DOB:new Date('01-23-2000'),gender:'male'},
{name:'Hamza',course:'BIT',marks:500    ,DOB:new Date('02-15-2000'),gender:'male'},
{name:'Ali',course:'BCS',marks:510,DOB:new Date('05-11-2000'),gender:'male'},
{name:'Saad',course:'BSE',marks:480,DOB:new Date('08-06-2000'),gender:'male'},
{name:'Ali',course:'BIT',marks:320,DOB:new Date('01-23-2000'),gender:'male'}
  ];
totalMarks:number=600;
}

