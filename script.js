alert("Hozir sizga random sonlar chiqadi.")
let randomSon = Math.ceil(Math.random()  * 100) + 1;
alert ("Random son: " + randomSon);
let tasdiq = confirm("Hozir bu sonni 2 ga bo'lamiz va ko'paytiramiz.");
if (tasdiq) {
    let kopaytma = randomSon * 2;
    let bolinma = randomSon / 2; 
    let qoldiq = randomSon % 3;
    
    alert ("Random orqali chiqgan son: " +randomSon+ " edi.\n" + 
        "Biz uni 2 ga ko'paytirib " +kopaytma+ " sonini chiqardik.\n" +
        "Va biz uni 2 ga bo'lib " +bolinma+ " sonini chiqardik.\n" + 
        "Biz shu sonni 3 ga bo'lib uning qoldig'i " +qoldiq+ " ekanligini topdik."
    ); 
} else {
    alert ("Siz amalni bekor qildingiz! :^")
}