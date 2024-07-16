const input= document.getElementById("input")

function reverse(str){
    return str.split("").reverse().join("");
}

function check(){
    const value=input.value
    const reverseStr=reverse(value);
    if(value===reverseStr)
    alert("Palindrome");
    else
    alert("Not a Palindrome")

    input.value="";
}



input.value="";