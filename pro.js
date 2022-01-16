console.log("welcome to the vicu");

const  name = document.getElementById('name');
const  email = document.getElementById('email');
const  phone  = document.getElementById('phone');

// console.log(name, email, phone);
name.addEventListner('blur', ()=>{
    console.log("name is blured")
})

email.addEventListner('blur', ()=>{
    console.log("email is blured")
})

phone.addEventListner('blur', ()=>{
    console.log("phone is blured")
})



