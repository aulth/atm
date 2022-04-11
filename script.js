const goToNext = (current, next)=>{
    document.getElementById('key').play();
    let nextScreen = document.getElementById(next);
    nextScreen.style.left = 0;
    let previousScreen = document.getElementById(current);
    previousScreen.style.position = 'fixed';
    previousScreen.style.right = '-100%'
    if(current==='c-w-screen'){
        document.getElementById('amount').innerHTML = document.getElementById('money').value;
    }
    if(next==='final-screen'){
        document.getElementById('withdraw').play();
       setTimeout(()=>{
           document.getElementById('collect-cash').innerHTML = 'Please collect your cash'
       }, 13000)
    }
}
const goToHome = (current)=>{
    document.getElementById('key').play();
    let currentScreen = document.getElementById(current);
    currentScreen.style.position = 'fixed';
    currentScreen.style.left = '-100%';
    document.getElementById('transaction-screen').style.left = '-100%';
    document.getElementById('lang-screen').style.left = '-100%';
    document.getElementById('fast-cash-screen').style.left = '-100%';
    document.getElementById('c-w-screen').style.left = '-100%';
    document.getElementById('final-screen').style.left = '-100%';
}
const goToBack = (current, back)=>{
    document.getElementById('key').play();
    let currentScreen = document.getElementById(current);
    let backScreen = document.getElementById(back);
    backScreen.style.right = 0;
    currentScreen.style.left = '-100%'
}
let money = '';
let pin ='';
const typeNumber = (screen, number)=>{
    document.getElementById('key').play();
    let keyboardScreen = document.getElementById(screen);
    if(screen==='money'){
        keyboardScreen.value = money += number;
    }else{
        keyboardScreen.value = pin += number;
    }

}
const deleteNumber = (screen)=>{
    document.getElementById('key').play();
    let keyboardScreen = document.getElementById(screen);
    if(screen==='money'){
        keyboardScreen.value = money = money.slice(0, -1);
    }else{
        keyboardScreen.value = pin = pin.slice(0, -1);
    }
}
const fastCash = (amount)=>{
    document.getElementById('key').play();
    goToNext('fast-cash-screen', 'pin-screen')
    document.getElementById('amount').innerHTML = amount;
}