window.onload = function () {
    
    Notification.requestPermission().then(()=>{
            const btn = document.getElementById("btn")
            btn.addEventListener("click",()=>{
                let options = {
                    body : "Ola mundo!"
                }
                new Notification("Ola mundo!",options)
            })
    }).catch((er)=>{
        console.log(er)
    })
}