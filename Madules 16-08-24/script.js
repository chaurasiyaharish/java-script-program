// tpye of named export, default export


// named export 

// const name = "john";
// const age = 30;
//  export{ name,age};

 // default export 
// only 
 const name = "john";
 const age = 30;
 const data = () =>{
    let firstName = "harish";
    let lastName = " chaurasiya";

    return firstName + " "+lastName
 }
 const message = () => {
    console.log("helo")
 } 
  export{ name,age,message}
     export default data;
