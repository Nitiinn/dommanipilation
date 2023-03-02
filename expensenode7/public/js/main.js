async function singup(e){
    try{
        e.preventDefault();
        console.log(e.target.email.value);
        const singupDetails = {
            name : e.target.name,
            email : e.target.email,
            password : e.target.password
        }
        console.log("details",singupDetails);
        const res = await axios.get("http://localhost:3000/get/users/signup",singupDetails);
        console.log("new",res);

    }catch(err){
        document.body.innerHTML += `<div style = "color:red;">${err}</div>` 
    }
}