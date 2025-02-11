function solution() {

  let micros = {
    protein:0,
    carbohydrate:0,
    fat:0,
    flavour:0,
  }

  let recipeLibrary = [
    {
     apple: {
       micros:{
        carbohydrate:1,
        flavour:2,
       }
      },
    },
    {
     lemonade: {
        micros:{
        carbohydrate:10,
        flavour:20,
       }
      },
    },
    {
      burger: {
        micros:{
        carbohydrate:5,
        fat:1,
        flavour:3,
       }
        
      },
    },
    {
      eggs: {
        micros:{
        protein:5,
        fat:1,
        flavour:1,
       }
      },
    },
    {
      turkey: {
        micros:{
        protein:10,
        carbohydrate:10,
        flavour:10,
       }
      },
    },
  ];

  return function manager(data){
    let tokens = data.split(' ');
    let command =tokens[0];
     switch(command){
      case 'restock':restock(tokens[1],tokens[2])
      break;
      case 'prepare': prepare(tokens[1],tokens[2])
      break;
      case 'report':report()
      break;
      default:"Invalid command!"
      break;
     }


  function restock(microelement,qqty){
    if(micros.hasOwnProperty(microelement)){
      micros[microelement] += Number(qqty);
      console.log("Success");
    }
  }

  function prepare(recipe, qqty) {
    let doesExist = 0;
    recipeLibrary.forEach(el =>{if(el.hasOwnProperty(recipe)){doesExist = 1;}});
    //Check for enough qqty
    if (doesExist) {
      for (let key in micros) {
        if (Object.values(key) * qtty >= Number(qqty)) {
            Object.values(key) -= Number(qqty);
            console.log("success");
            break;
        }
        else{
            console.log(`Error: not enough ${key} in stock`);
            break;
        }
      }
    }
  }

 function report() {
  console.log(`protein=${micros.protein} carbohydrate=${micros.carbohydrate} fat=${micros.fat} flavour=${micros.flavour} `);
  
 }

}

}
let manager = solution (); 
console.log (manager ("restock flavour 50")); 
console.log (manager ("prepare lemonade 4"));
// 