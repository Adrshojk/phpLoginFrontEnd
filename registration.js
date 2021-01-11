const form = document.getElementById('form')
const email = document.getElementById('email')
const password = document.getElementById('password')
const username = document.getElementById('name')
const cpassword = document.getElementById('cpassword')


form.addEventListener('submit',(e)=>{
    e.preventDefault()
    validate()
    console.log({e});
})


 validate=()=>{
   const userNameValue = username.value.trim();
   const emailValue = email.value.trim();
   const passwordValue = password.value.trim();
   const cpasswordValue = cpassword.value.trim();
   let u,p,c=false;
   setSuccessFor(email)
   if(userNameValue.length<3){
       setErrorFor(username,'Minimum 3 character')
    }else{
        setSuccessFor(username)
        u=true
    }
    if(passwordValue.length<6){
       setErrorFor(password,'Minimum 6 character')

   }else{
       setSuccessFor(password)
       p=true
   }
   if(passwordValue!=cpasswordValue){
       setErrorFor(cpassword,'Password Not Match')
   }else{
       setSuccessFor(cpassword)
       c=true
   }
   if(u&&p&&c){
    const data={
        'name':userNameValue,
        'email':emailValue,
            'password':passwordValue

    }
    const jsonData=JSON.stringify(data)
    fetch('http://localhost/loginback/api/register.php',{
            'method':'POST',
            'body':jsonData
        }).then(res=>{
            console.log(res);
        }).catch(err=>{
            console.log({err});
        })
   }

}

setErrorFor=(input,message)=>{
    const formControl = input.parentElement;
    formControl.className='form-control error'
    const small= formControl.querySelector('small')
    small.innerText=message
}
setSuccessFor=(input)=>{
    const formControl = input.parentElement;
    formControl.className='form-control success'   
}