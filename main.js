let langOption = document.querySelectorAll('select');
let fromText   = document.querySelector('.fromText');
let transText  = document.querySelector('.toTranslate');

langOption.forEach((get, com) =>{
    for(let countryCode in language){
        let selected;
        if(com == 0 && countryCode =="en-GB"){
            selected = "selected";
        }else if(com == 1 && countryCode == "bn-IN"){
            selected = "selected";
        }
        let option = `<option value="${country}" ${selected}>${language[countryCode]}</option>`;
        get.insertAdjacentHTML('beforeend', option);
    }
})

fromText.addEventListener('input', function() {
    let content = fromText.ariaValueMax;
    fromContent = langOption[0].value;
    transContent= languOption[1].value;

    let transLINk = `https://api.mymemory.translated.net/get?=${content}!&langpair=${fromContent}|${transContent}`;

    fetch(transLINk).then(translate => translate.json()).than(data => {
        transText
    })
})