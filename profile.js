const form = document.getElementById("form");
const age = document.getElementById("age");
const dob = document.getElementById("dob");
const contact = document.getElementById("contact");
let params = new URLSearchParams(location.search);
const userId = params.get("userId");

fetchData=async()=>{

    const data={
            'userId':userId,
            'type':'get'
    }
    const jsonData=JSON.stringify(data)
    let response =await fetch('http://localhost/loginback/api/userDetails.php',{
            'method':'POST',
            'body':jsonData
        }).catch(err=>console.log(err))
        let resData=await response.json()
        console.log(resData);
        if(resData.data){
            age.value=resData.data.age
            dob.value=resData.data.dob
            contact.value=resData.data.contact
        }
}

fetchData()

form.addEventListener("submit",async (e) => {
  e.preventDefault();
  const contactValue = contact.value.trim();
  const ageValue = age.value.trim();
  const dobValue = dob.value;
  console.log({ e });
  // update user details
  const data = {
    type:'update',
    age: ageValue,
    dob: dobValue,
    contact: contactValue,
    userId: userId,
  };
  const jsonData = JSON.stringify(data);
  let response = await fetch("http://localhost/loginback/api/userDetails.php", {
    method: "POST",
    body: jsonData,
  });
  let resData = await response.json();
  console.log(resData);
  if (resData.status) {
    alert("Profile Updated");
  }
});

setErrorFor = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
};
setSuccessFor = (input) => {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
};
