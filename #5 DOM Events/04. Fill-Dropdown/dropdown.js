function addItem() {

  let itemTextElRef = document.getElementById("newItemText");
  let itemValueElRef  = document.getElementById("newItemValue");
  let menuEl = document.getElementById("menu");
  
  let text = itemTextElRef.value;
  let value = itemValueElRef.value;

  let optionEl = document.createElement("option");
  optionEl.value = value;
  optionEl.textContent = text;

  itemTextElRef.value ="";
  itemValueElRef.value ="";

  menuEl.appendChild(optionEl);



}