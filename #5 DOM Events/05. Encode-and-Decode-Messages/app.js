function encodeAndDecodeMessages() {
    const encodeButton = document.querySelectorAll("button")[0];
    const decodeButton = document.querySelectorAll("button")[1];

    const encodeTextArea = document.querySelectorAll("textarea")[0];
    const decodeTextArea = document.querySelectorAll("textarea")[1];

    encodeButton.addEventListener("click",encode)
    decodeButton.addEventListener("click",decode)

    function encode(e){

        const encodedDiv = e.currentTarget.parentElement;
        const textarea = encodedDiv.children[1];
        const message = textarea.value;
        let encreptedMessage = "";
        for (let i = 0; i < message.length; i++) {
                          let asciCode =  message[i].charCodeAt(0);
                let asciChar = String.fromCharCode(asciCode+1)
                encreptedMessage+= asciChar;

        }
        
        decodeTextArea.textContent = encreptedMessage;
        textarea.value = "";
    }
   
    function decode(e){
        const decodedDiv = e.currentTarget.parentElement;
        const textarea = decodedDiv.children[1];
        const message = textarea.value;
        
        let decreptedMessage = '';
       
        for (let i = 0; i < message.length; i++) {
                let asciCode =  message[i].charCodeAt(0);
                let char = String.fromCharCode(asciCode - 1) ;
                decreptedMessage+=char;
       }

        decodeTextArea.textContent = decreptedMessage;
    }

 }


