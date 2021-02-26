function helloWorld() {
    langChoice = prompt("Choose a preferred language -en-, -tag- or -som-")
    if(langChoice == "en"){
        alert("Hello Everyone")
    }else if(langChoice == "tag"){
        alert("kamusta ka")
    } else if(langChoice == "som"){
        alert("Se tahay")
    }
    else{
        alert('Hello Everyone')
    }
}
helloWorld()

