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
       collectYourCash();
    }
    checkLang();
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
// scipt for langugage 
let language = 'english';
const setLanguage = (lang)=>{
    language = lang;
    console.log(language)
}
let exitBtn = document.querySelectorAll('.exit');
let backBtn = document.querySelectorAll('.back');
let fastCashBtn = document.getElementById('fast-cash-btn');
let cWBtn = document.getElementById('c-w-btn');
let ftBtn = document.getElementById('f-t-btn');
let pinChangeBtn = document.getElementById('pin-change-btn');
let bEBtn = document.getElementById('b-e-btn');
let mSBtn = document.getElementById('m-s-btn');
let amountSelect = document.getElementById('amount-select');
let enterAmount = document.getElementById('enter-amount');
let enterPin = document.getElementById('enter-pin');
let viewAmount = document.getElementById('view-amount');
let pWait = document.getElementById('p-wait');
let tProcessing = document.getElementById('t-processing');

const checkLang = ()=>{
    if(language==='english'){
        exitBtn.forEach((item)=>{item.innerHTML='Exit'})
        backBtn.forEach((item)=>{item.innerHTML='Back'})
        fastCashBtn.innerHTML = 'Fast Cash';
        cWBtn.innerHTML = 'Cash Withdrawl';
        ftBtn.innerHTML = 'Fund Transfer';
        pinChangeBtn.innerHTML = 'Pin Change';
        bEBtn.innerHTML = 'Balance Enquiry';
        mSBtn.innerHTML = 'Mini Statement';
        amountSelect.innerHTML = 'Select the amount for your fast cash transaction';
        enterAmount.innerHTML = 'Enter the amount';
        enterPin.innerHTML = 'Enter the pin';
        viewAmount.innerHTML = 'Amount';
        pWait.innerHTML = 'Please wait..';
        tProcessing.innerHTML = 'Transaction is being processed';
    }else if(language==='hindi'){
        exitBtn.forEach((item)=>{item.innerHTML='बाहर निकलें'})
        backBtn.forEach((item)=>{item.innerHTML='पीछे जाएँ'})
        fastCashBtn.innerHTML = 'तेजी से नकदी';
        cWBtn.innerHTML = 'नकद निकासी';
        ftBtn.innerHTML = 'फंड ट्रांसफर';
        pinChangeBtn.innerHTML = 'पिन बदलें';
        bEBtn.innerHTML = 'बैलेंस जाँच';
        mSBtn.innerHTML = 'मिनी स्टेटमेंट';
        amountSelect.innerHTML = 'अपने तेज़ नकद लेनदेन के लिए राशि का चयन करें';
        enterAmount.innerHTML = 'राशि दर्ज करें';
        enterPin.innerHTML = 'पिन दर्ज करें';
        viewAmount.innerHTML = 'राशि';
        pWait.innerHTML = 'कृपया प्रतीक्षा कीजिये..';
        tProcessing.innerHTML = 'लेन-देन संसाधित किया जा रहा है';
    }else if(language==='urdu'){
        exitBtn.forEach((item)=>{item.innerHTML='باہر نکلیں'})
        backBtn.forEach((item)=>{item.innerHTML='پیچھے'})
        fastCashBtn.innerHTML = 'فاسٹ کیش';
        cWBtn.innerHTML = 'رقم نکلوانا';
        ftBtn.innerHTML = 'فنڈ ٹرانسفر';
        pinChangeBtn.innerHTML = 'پن کی تبدیلی';
        bEBtn.innerHTML = 'بیلنس انکوائری';
        mSBtn.innerHTML = 'منی بیان';
        amountSelect.innerHTML = 'اپنے تیز نقد لین دین کے لیے رقم منتخب کریں۔';
        enterAmount.innerHTML = 'رقم درج کریں';
        enterPin.innerHTML = 'پن درج کریں';
        viewAmount.innerHTML = 'رقم';
        pWait.innerHTML = '..برائے مہربانی انتظار کریں';
        tProcessing.innerHTML = 'لین دین پر کارروائی ہو رہی ہے';
    }
}
const collectYourCash = ()=>{
    setTimeout(()=>{
        let cCash = document.getElementById('collect-cash');
        if(language==='english'){
            cCash.innerHTML = "Please collect your cash";
        }else if(language==='hindi'){
            cCash.innerHTML = "कृपया अपना कैश प्राप्त करें";
        }else if(language==='urdu'){
            cCash.innerHTML = "براہ کرم اپنا نقد حاصل کریں";
        }
    }, 13000)
}
