ison=false

function GetTextContent(){
    return document.getElementById("ecran-content").textContent
}

function SetTextContent(txt){
    return document.getElementById("ecran-content").textContent=txt
}

function OnOff(){
    ison = !ison; const buttons=document.querySelectorAll("#touches div:not(:first-child)");
    if (ison){
        document.getElementById("ecran").style.backgroundColor="white";
        document.getElementById("ecran").style.color="black";
        for (ele of buttons){
            ele.classList.remove("disabled");
        }            
    }
    else{
        SetTextContent(''); document.getElementById("resultat").textContent='';
        document.getElementById("ecran").style.backgroundColor="";
        for (ele of buttons){
            ele.classList.add("disabled");
        }
        // for (ele of buttons){
        //     ele.classList.add("disabled");
        //     ele.classList.remove("touches > div:hover");
        // }
    }
}

function AddOnScreen(txt){
    if (ison==true)
        SetTextContent(GetTextContent() + txt);
}

function SupOnScreen(){
    if (ison==true) 
        SetTextContent(GetTextContent().substring(0,GetTextContent().length-1));
}

function Clear(){
    if (ison==true)
        SetTextContent('');
}

function Calculate(){
    if (ison=true){
        liste=[];
        liste.push(GetTextContent());
        SetResult(eval(GetTextContent()));
    }
}

function SetResult(txt){
    if (ison==true)
        document.getElementById("resultat").textContent=txt;
}