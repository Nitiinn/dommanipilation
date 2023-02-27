async function login(e){
    
        e.preventDefault();
        console.log(e.target.email.value);
        const loginDetails = {
            email : e.target.email,
            password : e.target.password
        }
        console.log(loginDetails);
        const res = await axios.post("http://localhost:3000/users/login",loginDetails).then(res =>{
            alert(res.data.message);
        }).catch(err=>{
        document.body.innerHTML += `<div style = "color:red;">${err}</div>` 
    })
}