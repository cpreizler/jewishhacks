window.onload = function () {  

    document.getElementById("goo").onclick = function(){
        window.location.replace('https://amzn.to/3psqgnp');
    }

    document.getElementById("carfill").onclick = function(){
        window.location.replace('https://amzn.to/2M1Tf2c');
    }

    document.getElementById("cutboard").onclick = function(){
        window.location.replace('https://amzn.to/2YlfT8O');
    }

    if(document.URL.indexOf("#goo") >= 0){ 
        document.getElementById("goo").click();
    }
    else if(document.URL.indexOf("#carfill") >= 0){ 
        document.getElementById("carfill").click();
    }
    else if(document.URL.indexOf("#cutboard") >= 0){ 
        document.getElementById("cutboard").click();
    }
    else if(document.URL.indexOf("#towelbar") >= 0){ 
        window.location.replace('https://amzn.to/3rgBaNx');
    }
}



/* if(document.URL.indexOf("#click_approved") >= 0){ 
    document.getElementById('amznlink').click();
} */