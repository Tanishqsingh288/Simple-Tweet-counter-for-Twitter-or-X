function showResult(){
    event.preventDefault();
    var name = document.getElementById("input").value;
    var count=0;
    for(let i=0;i<name.length;i++){
        if(name[i]==" "){
            continue;
        }else{
            count+=1
        }
    }
    document.getElementById("res").innerHTML="Total Charachters entered is "+count;
    
    document.getElementById("submitbtn").onclick = null;
    document.getElementById('submitbtn').innerText="Check again?";
    document.getElementById("submitbtn").addEventListener("click", refresh);
    return false;
}

function refresh(){
    // Do nothing, or add your own logic here
    console.log("Refresh called, but not reloading!");
}