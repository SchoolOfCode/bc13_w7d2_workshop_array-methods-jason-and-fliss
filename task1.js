const cats = ["tony", "daisy", "socks", "rockie" ];

// PLAN 
// use .map to iterate through cats array 
// capitalise each string 
// return new string

const capitalisedCats = cats.map((name)=>{
    return name.toUpperCase();
   }); // your code here
 console.log(capitalisedCats);