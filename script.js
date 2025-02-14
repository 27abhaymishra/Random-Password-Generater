const Password = document.getElementById("Password");

      function pass() {
        
        const firstname = document.getElementById("fname").value;
        const lastname = document.getElementById("lname").value;
        const number = document.getElementById("number").value;
        let passw = "";

        
        const symbol = "@#%$/";

        // passw += firstname[Math.floor(Math.random() * firstname.length)];
        // passw += firstname[Math.floor(Math.random() * firstname.length)];
        // passw += firstname[Math.floor(Math.random() * firstname.length)];
        // passw += firstname[Math.floor(Math.random() * firstname.length)];
        // passw += firstname[Math.floor(Math.random() * firstname.length)];
        for(let i=1; i<=12; i++){
          if(i<=5){
            passw += firstname[Math.floor(Math.random() * firstname.length)];
          }else if(i<=7){
            passw += lastname[Math.floor(Math.random() * lastname.length)];
          }else if(i==8){
            passw += symbol[Math.floor(Math.random() * symbol.length)];
          }else{
            passw += number[Math.floor(Math.random() * number.length)];
          }
          
        }

        Password.value = passw;
        // passw += lastname[Math.floor(Math.random() * lastname.length)];
        // passw += lastname[Math.floor(Math.random() * lastname.length)];

        // passw += symbol[Math.floor(Math.random() * symbol.length)];

        // passw += number[Math.floor(Math.random() * number.length)];
        // passw += number[Math.floor(Math.random() * number.length)];
        // passw += number[Math.floor(Math.random() * number.length)];
        // passw += number[Math.floor(Math.random() * number.length)];

      }