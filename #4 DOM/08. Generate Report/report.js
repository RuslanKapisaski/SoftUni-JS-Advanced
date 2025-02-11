function generateReport() {
    const table =  document.querySelector("table tbody");  
    const inputElements = document.querySelectorAll("table thead tr th input");
    const outputElement = document.querySelector("#output");
    const resultArr = [];
    const checked = [];
    let locations = [];
    let dataObject = {};
    let index = 0;

    for (const checkbox of inputElements) {
        
        if (checkbox.checked) {
            checked.push(checkbox);
            locations.push(index);
        }
        index++;
    }

        for (let col = 0; col < checked.length; col++) {
            if (col === locations[col]) {
        
            for (let row = col; row < table.rows.length; row++) {

                for (let cell = 0; cell < locations.length; cell++) {
                    let propertyKey = checked[cell].name; //department
                    let propertyValue = table.rows[row].cells[locations[cell]].textContent;
                    dataObject[propertyKey] = propertyValue;
                }
                resultArr.push(JSON.stringify(dataObject));
                dataObject = {};
               }
        }

        }

        outputElement.append(resultArr)
    }