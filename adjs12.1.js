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

   setPlacementAge(minPlacementAge) {
    return (minMarks) => {
    if(this.marks > minMarks && this.age > minPlacementAge) {
    console.log(this.name + "is ready for placements");
    } else {
    console.log(this.name + "is not ready for placements");
    }
}
   }







   

}

const tanya=new student('tanya',18,1234,34);



console.log(student.countStudent());

tanya.setPlacementAge(18)(40);

