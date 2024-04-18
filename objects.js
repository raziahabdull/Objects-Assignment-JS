question1
   function peopleArray(arr){
    people.map(people=>{
        console.log(people);

         if(age >=18){
            console.log(people.name,age);
         }
     });
 
  };

  const people= [
     {name:'Alice',  age:17},
     {name:'Eunice',age :22},
      {name:'Charlie', age:14},
      {name:'Max',age:19}
    
  ];
  peopleArray(arr)

 //question2
 function groupedCategories(products){
   let prodcuts= Object.groupBy(products, prop  => prop.category)
   console.log(prodcuts);
 }
     
 

const products = [
    {name:'laptop',price:1200,category:'electronics'},
    {name:'shirt',price:25,category:'clothing'},
    {name:'headphones',price:80,category:'electronics'},
    {name:'shoes',price:60,category:'clothing'}
];
groupedCategories(products)
    



//  //question3

function averageOfProperty(students){
    students.map(student =>{
     console.log(student);

    const studentScores =student.scores
    console.log(studentScores);

     const sum = studentScores.reduce((acc,curr)=>acc+curr)
     console.log(sum);

     const average = sum / studentScores.length
    console.log(average);

      if (average >=85){
         console.log(student.name,average);
      }

    })
 }

 const students =[
     {name:'John', scores:[90,80,85]},
     {name:'Jane', scores:[95,92,88]},
     {name:'Jim',scores:[70,80,75]},
     {name:'Jill',scores:[85,90,84]},

 ];

 averageOfProperty(students)

 //question4
 const car ={
     make:'Ford',
     model:'Ranger',
    year:2023,
     
};
 function addProperty(car){
     car.age = function(){
         console.log(`Make:${this.make},Model:${this.model},year:${this.year},age:${this.year}`);
 }
 };


    