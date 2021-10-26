function sortear(){
    let np = 60;
    let ns = Math.round(Math.random() * np);
    document.getElementById("d").innerHTML = ns;
    console.log(ns);
}