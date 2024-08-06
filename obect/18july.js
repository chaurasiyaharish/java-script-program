let ob ={
    name: "harish",
    age:23
}

let ob1={
    location:"ind"
}
Object.assign(ob,ob1)
console.log(ob);


delete ob.age;
console.log(ob)

ob.designation="manager";
console.log(ob);
document.write(ob.age.name)