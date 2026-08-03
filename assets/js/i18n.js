import en from "../lang/en.js";
import id from "../lang/id.js";


const dictionaries = {

    en,
    id

};


let currentLanguage =
localStorage.getItem("geoland_language") || "en";



export function getLanguage(){

    return currentLanguage;

}



export function setLanguage(lang){


    if(!dictionaries[lang]) return;


    currentLanguage = lang;


    localStorage.setItem(
        "geoland_language",
        lang
    );


    applyTranslations();


    updateLanguageButton();

}



export function t(key){


    return dictionaries[currentLanguage][key] || key;


}



export function applyTranslations(){


    document
    .querySelectorAll("[data-i18n]")
    .forEach(el=>{


        const key =
        el.dataset.i18n;



        if(dictionaries[currentLanguage][key]){


            el.innerHTML =
            dictionaries[currentLanguage][key];


        }


    });


}



function updateLanguageButton(){


const btnId =
document.getElementById("lang-id");


const btnEn =
document.getElementById("lang-en");



    if(!btnId || !btnEn)
        return;



    btnId.classList.remove(
        "active-lang"
    );


    btnEn.classList.remove(
        "active-lang"
    );



    if(currentLanguage==="id"){


        btnId.classList.add(
            "active-lang"
        );


    }else{


        btnEn.classList.add(
            "active-lang"
        );


    }


}



export function initI18n(){


    applyTranslations();


    updateLanguageButton();


}



// expose untuk tombol HTML
window.changeLanguage = setLanguage;