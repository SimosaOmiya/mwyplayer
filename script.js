function escapeHTML(string){
    return string.replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, "&#x27;");
}
function isSm() {
    return window.innerWidth >= 1024
};
window.onload = function(){
    submit = document.getElementById("urlsend");
    submit.addEventListener("click", () => {
        for(let i=1;i<=num;i++){
            url = escapeHTML(document.getElementById(`url${i}`).value);
            url_embed = url.replace("https://www.youtube.com/watch?v=","https://www.youtube.com/embed/").replace("https://youtu.be/","https://www.youtube.com/embed/")
            iframe = document.getElementById(`iframe${i}`);

            if((url != "") & (url != " ")){
                if (isSm()){
                    iframe.setAttribute("src", url_embed + "?autoplay=1&mute=1");
                }
                else{
                    iframe.setAttribute("src", url_embed);
                }
                sessionStorage.setItem(`iframe${i}`, url)
            }
        }
        // console.log(sessionStorage.getItem("iframe1"))
    });
    storageAccess = document.getElementById("storageAccess")
    storageAccess.addEventListener("click", () => {
    for(let i=1;i<=num;i++){
        document.getElementById(`url${i}`).value = sessionStorage.getItem(`iframe${i}`)
    }
    
})  
};