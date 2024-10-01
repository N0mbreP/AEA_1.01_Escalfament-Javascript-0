function comparaNumeros(a,b) {
   
    if(a>b){
        console.log(a);
    }else console.log(b);
}

function suma1a100() {
    let final=1;
    for(let i=2; i<101;i++){
        final+=i;
    }
    console.log(final);
}

function PedraPaper() {
    let resul;
    for(let i=1; i<21; i++){
        if (i%3==0 && i%5==0){
            console.log("Tisores");
        }else if(i%3==0){
            console.log("Pedra");
        }else if(i%5==0){
            console.log("Paper");
        }else console.log(i)
    }
}

function esParell(num) {
    if(num%2==0){
        console.log("Parell");
    }else console.log("senar");
}

function revertirCadena(cadena) {
    let resul="";
    for(let i=cadena.length; i>-1; i--){
        resul+=cadena.charAt(i);
    }
    console.log(resul);
}

function factorial(n) {
    let result=1;
    for(let i=2; i<n+1; i++){
        result*=i;
    }
    console.log(result);
}


function filtrarPositius(array) {
    let result= [];
    for(let i=0; i<array.length; i++){
        if(array[i]%2==0){
            result.push(array[i]);
        }
    }
    console.log(result);

}
