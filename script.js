//display function
function display(val){ 
    document.getElementById('result').value += val;

    return val;
}

//logique principale
function solve(){
    let x = document.getElementById('result').value

    let y = eval(x);
    document.getElementById('result').value = y;

    return y;
}

//Effacer
function clearScreen() {
    document.getElementById('result').value = ''
}