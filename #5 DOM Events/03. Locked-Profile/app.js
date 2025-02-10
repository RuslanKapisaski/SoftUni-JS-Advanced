
function lockedProfile() {
    const showMoreButtons = document.querySelectorAll("button");

    showMoreButtons.forEach(btn => btn.addEventListener("click",showMore))
    function showMore(e){
        let profile = e.currentTarget.parentElement;
       let radioBtn = profile.children[2];

       if(!radioBtn.checked){
        console.log(radioBtn.value);
        let hiddenDiv = profile.children[9];
        console.log(hiddenDiv);
       
        let hiddenData = hiddenDiv.querySelectorAll("input[disabled]")

        for (const row of hiddenData) {
   
            row.disabled = false;  
            console.log(row);
        }
        hiddenDiv.style.display = "block";
        btn.value = 'Hide it';
        btn.style.disabled = true;
   
     
        
        
       }
        

       }
        
        }
      
    

