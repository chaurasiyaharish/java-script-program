let person = {
    name:"harish",
    age:23,
}
let harishperson = JSON.stringify(person);
 localStorage.setItem("person", harishperson);
 let data = localStorage.getItem("person");
 let newdata = JSON.parse(data);
 alert(newdata.name+" "+ newdata.age);