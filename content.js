window.onload = ()=>{

    if(document.location.href.includes("morganstanley")){
        console.log("morganstanley window. making changes.")
        let refresh = ()=>{
            window.location.reload();   
        }
        let interval =  setInterval(refresh, 120000);
    }

}