function create(words) {
   const contentElement = document.getElementById("content");
   //create div on every word 
   words.forEach(word => {
      let div = document.createElement("div");
      let p = document.createElement("p");
      p.textContent = word;
      p.style.display = "none";
      //attach p to div parent element
      div.appendChild(p);
      //append to content section
      contentElement.appendChild(div);
      //display text content
      div.addEventListener("click",displayHiddenParaHandler)
        
      function displayHiddenParaHandler(e){
         let p = e.currentTarget.children[0];
         let currentDisplay = p.style.display;
        p.style.display = currentDisplay === "block" ? "none" : "block";
      }
      
   })
   
 
   
}