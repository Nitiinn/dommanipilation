class student{

     static count=0;  

     

    constructor(name,age,ph_no,marks){

        this.name=name;

        this.age=age;

        this.ph_no=ph_no;

        this.marks=marks;

        student.countStudent();

    }

    static countStudent(){

        

        return(student.count++);     //this is how u access static variable

    }

    eligible(){

        if(this.marks >=40){

            console.log(`${this.name} age ${this.age} is eligible`);

        }

        else if(this.marks<40){

            console.log(`${this.name} age ${this.age} is not eligible`);

        }

    }







    

}

const tanya=new student('tanya',18,1234,34);

const radhika=new student('radhika',15,2345,35);

const ishika=new student('ishika',16,4567,60);

const anmol=new student('anmol',17,7891,70);

const anchal=new student('anchal',19,3456,80);

console.log(student.countStudent());

tanya.eligible();

radhika.eligible();

ishika.eligible();

anmol.eligible();

anchal.eligible();