const form = document.getElementById('form')
const email = document.getElementById('email')
const password = document.getElementById('password')

form.addEventListener('submit',async(e)=>{
    e.preventDefault()
    const emailValue=email.value.trim()
    const passwordValue=password.value.trim()
    if(passwordValue.length<6){
        setErrorFor(password,'Minimum 6 character')
 
    }else{
        setSuccessFor(password)

        const data={
            'email':emailValue,
                'password':passwordValue

        }
        const jsonData=JSON.stringify(data)
        // const xhr =new XMLHttpRequest()
        // xhr.open('POST','http://localhost/loginback/api/login.php')
        // xhr.setRequestHeader("Content-Type","application/json")
        // xhr.send(jsonData)
        
        let response =await fetch('http://localhost/loginback/api/login.php',{
            'method':'POST',
            'body':jsonData
        })
        let resData=await response.json()
        console.log(resData);
        if(resData.status){
            window.location.replace(`profile.html?userId=${resData.data.userId}`);
            
        }
        

    }
})
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