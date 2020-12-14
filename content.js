window.onload = ()=>{

    if(document.location.href.includes("tiaa-cref")){
        console.log("Tiaa-cref window. making changes.")
        let refresh = ()=>{let msba = document.querySelectorAll(".messageBoxAction");
        msba.forEach(ms=>{ms.querySelectorAll(".default").forEach(d=>d.click());})}
        let interval =  setInterval(refresh, 10000);
    }

}