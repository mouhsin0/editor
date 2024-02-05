// ==================== variables ================================
var text = document.getElementById("text"),
    run = document.getElementById("run"),
    clear = document.getElementById("clear"),
    result = document.getElementById("result");
// ============= event click =================
run.addEventListener("click", ()=>{
    result.innerHTML = text.value;
    // session storage
    sessionStorage.setItem("data", text.value)
})
clear.onclick = ()=>{
    result.innerHTML = "";
    // session storage
    sessionStorage.setItem("data", text.value)
}
onload = ()=>{
    text.innerHTML = sessionStorage.getItem("data");
}

