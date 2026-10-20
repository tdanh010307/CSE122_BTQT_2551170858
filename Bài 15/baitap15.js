const nhappheptinhElement = document.getElementById('nhappheptinh');
const ketquaElement= document.getElementById('ketqua');

let currentInput='0';
let previousInput='';
let calculationFinished= false;

function updateDisplay(){
    ketquaElement.innerText=currentInput;
    nhappheptinhElement.innerText=previousInput;
    
}

function clearDisplay(){
    currentInput='0';
    previousInput='';
    calculationFinished=false;
    updateDisplay();
}

function appendCharacter(char){
    if (calculationFinished){
        if(!isNaN(char)|| char === '()'){
            currentInput=char;
             }
        else{
            currentInput=currentInput+ char;
        }
        calculationFinished = false;
    }
    if(currentInput ==='0' && !isNaN(char)){
        currentInput=char;
    }
    else{
        currentInput +=char;
    }
    updateDisplay();
}

function calculate(){
    try{
        previousInput=currentInput
        .replace(/\*/g,'×')
        .replace(/\//g,'÷');

        let evalString=currentInput
        .replace(/×/g,'*')
        .replace(/÷/g,'/');

        let result= eval(evalString);
        
        currentInput=parseFloat(result.toFixed(10)).toString();
        calculationFinished = true;
        updateDisplay();
    }
    catch(error){
        currentInput='Lỗi';
        calculationFinished=true;
        updateDisplay();
    
    }
}
    