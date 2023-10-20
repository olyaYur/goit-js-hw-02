"use strict"; 

function formatMessage(message, maxLength) {
    let enterMessage = String(message);
    let enterMessageLength = enterMessage.length;

    
    if(enterMessageLength <= maxLength) {
        
        return enterMessage;
        
    } else if(enterMessageLength > maxLength)  {
        let cutEnterMessage = enterMessage.slice(0, maxLength);
        
        let cutEnterMessagePrint = cutEnterMessage + "...";
        
        return cutEnterMessagePrint;
    }
};

console.log(formatMessage("Curabitur ligula sapien", 16));
console.log(formatMessage("Curabitur ligula sapien", 23));
console.log(formatMessage("Vestibulum facilisis purus nec", 20));
console.log(formatMessage("Vestibulum facilisis purus nec", 30));
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));

