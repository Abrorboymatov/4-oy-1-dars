// function decloration
// function getnames(a) {
//     console.log("names");
// }
// getnames(2)


// 2 function expression
// let getnames;
// getNames = function (a) {
//     console.log("names");  
// }
// getNames(2)
// console.log(typeof getNames)


// let res = 90;
// console.log(res.toFixed());


// Arrow function
// let res = () => {};
// function salom() {
//     let res = (par = "sizga")=>{
//     return "Jasur " + par;
// };
// console.log(res("")+ "salom ber");
// }
// salom();


// IIFE =>immediatelty invoked function 
// (function () {
//     console.log("hammaga salom");  
// })();



// new Date();
// let date = new Date();
// console.log(date);


// simple dom
// html elementlarini tanlash
let utcRejim = false; 

  function format(son) {
    return son < 10 ? '0' + son : son;
  }

  function soatniYangila() {
    const hozir = new Date();
    let soat, minut, soniya;

    if (utcRejim) {
      soat = format(hozir.getUTCHours());
      minut = format(hozir.getUTCMinutes());
      soniya = format(hozir.getUTCSeconds());
    } else {
      soat = format(hozir.getHours());
      minut = format(hozir.getMinutes());
      soniya = format(hozir.getSeconds());
    }

    document.getElementById('soat').textContent = `${soat}:${minut}:${soniya}`;
  }

  function rejimniAlmashtir() {
    utcRejim = !utcRejim;

    if (utcRejim) {
      document.getElementById('mode').textContent = "Ko‘rsatilayotgan vaqt: UTC";
      document.querySelector('button').textContent = "Mahalliyga o‘tish";
    } else {
      document.getElementById('mode').textContent = "Ko‘rsatilayotgan vaqt: Mahalliy";
      document.querySelector('button').textContent = "UTCga o‘tish";
    }

    soatniYangila(); 
  }
  setInterval(soatniYangila, 1000);
  soatniYangila();

