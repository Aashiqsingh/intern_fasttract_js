var language = ["hindi","english","french","bengali","punjabi","marathi","gujarati","malayalam"];

// const deleteLang = (langName)=>{

//     let x = language.filter((lang)=>{
//         return lang != langName
//     })

//     // console.log(x);
//     return x;
    
// }

// let x = deleteLang("punjabi")
// console.log(x);


// const deleteLang = (langName)=>{

//     return language.filter((lang)=>{
//         return lang != langName
//     })

//     // console.log(x);
   
    
// }

// let x = deleteLang("punjabi")
// console.log(x);


// const deleteLang = (langName)=>{

//     return language.filter((lang)=> lang != langName)

//     // console.log(x);
   
    
// }

// let x = deleteLang("bengali")
// console.log(x);

const deleteLang = (langName)=> language.filter((lang)=> lang != langName)
let x = deleteLang("french")
console.log(x);









// var x = language.filter((lang)=>{
//     return lang != "french"
// })

// console.log(x);


// const deleteLang = (langName)=>{

//     let x = language.filter((lang)=>{
//         return lang != langName
//     })

//     console.log(x);
    
// }

// deleteLang("marathi")


