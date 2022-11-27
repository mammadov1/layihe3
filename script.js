let oneBox = document.querySelectorAll(".box-one button");
let twoBox = document.querySelectorAll(".box-two button");

let fromOne = document.querySelector(".from-input-one");
let fromTwo = document.querySelector(".from-input-two");

let oneNum = document.querySelector(".number-one");
let twoNum = document.querySelector(".number-two");

let url = "https://api.exchangerate.host/latest?";
let base = "RUB";
let symbols = "USD";


FechTwo(base, symbols)
 var numberMask = IMask(fromOne, {
    mask: Number,
     signed: false,           
     scale: 10,
    thousandsSeparator: " ",
    padFractionalZeros: false,
    normalizeZeros: true,
    radix: ".",
    mapToRadix: [","],
  });
function decPlay() {
  oneBox.forEach((item) => {
    item.addEventListener("click", function () {
      oneBox.forEach((item) => {item.classList.remove("money-start");
      });
      base = this.innerHTML;

      api(this.parentElement.classList[0]);
    });
    item.addEventListener("click", () => {item.classList.add("money-start");
    });
  });

  twoBox.forEach((item) => {
    item.addEventListener("click", function () {
      twoBox.forEach((item) => {item.classList.remove("money-start");
      });
      symbols = this.innerHTML;

      api(this.parentElement.classList[0]);
    });
    item.addEventListener("click", () => {
                 item.classList.add("money-start");
    });
  });
}
decPlay();
function FechOne(baseNumber, symbolsNumber) {
  if (baseNumber != symbolsNumber) {
    fetch(`${url}base=${symbolsNumber}&symbols=${baseNumber}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        fromOne.value =Number(fromTwo.value.replace(/\s+/g, "")) * data.rates[`${baseNumber}`];

          twoNum.innerHTML = `1${data.base}=${data.rates[`${baseNumber}`]}${baseNumber}`;

        fetch(`${url}base=${baseNumber} & symbols=${symbolsNumber}`)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            oneNum.innerHTML = `1${data.base}=${data.rates[`${symbolsNumber}`]}${symbolsNumber}`;
          });
      });
  }   else {fromOne.value = fromTwo.value; oneNum.innerHTML = `1${base}=1${base}`; twoNum.innerHTML = `1${base}=1${base}`;
  }
}
fromOne.value = 1;
function fromNumber() {
  fromOne.addEventListener("input", () => {
    if (fromOne.value == "") { fromTwo.value = ""; oneNum.innerHTML = ""; twoNum.innerHTML = "";}
     else {
      fromOne.addEventListener('input',()=>{
      });
      FechTwo(base, symbols);
    }
    if(fromOne.value=="0"){
      fromOne.addEventListener('input', decOne, true);
      
    }
  });
  fromTwo.addEventListener("input", () => {
    if (fromTwo.value == "") { fromOne.value = ""; oneNum.innerHTML = ""; twoNum.innerHTML = "";} 
    else {
      FechOne(base, symbols);
    }
    if(fromTwo.value=="0"){
      fromTwo.addEventListener('input', decTwo, true);
    }
  });
}
fromNumber();
function api(boxname) {
  if (boxname == "box-two") {
    FechTwo(base, symbols);
  }
     if (boxname == "box-one") {
              FechOne(base, symbols);
  }
}
function decOne(){
if(fromOne.value[0] == 0 && fromOne.value.length > 1){
  fromOne.value=fromOne.value[1]
}
}
function decTwo(){
if(fromTwo.value[0] == 0 && fromTwo.value.length > 1){
  fromTwo.value=fromTwo.value[1]
  FechOne(base, symbols);
}
}
function FechOne(baseNumber, symbolsNumber) {
  if (baseNumber != symbolsNumber) {
    fetch(`${url}base=${symbolsNumber}&symbols=${baseNumber}`)

      .then((res) => {
        return res.json();
      })
      .then((data) => {
        fromOne.value =
          Number(fromTwo.value.replace(/\s+/g, "")) * data.rates[`${baseNumber}`];

          twoNum.innerHTML = `1${data.base}=${data.rates[`${baseNumber}`]}${baseNumber}`;

        fetch(`${url}base=${baseNumber} & symbols=${symbolsNumber}`)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            oneNum.innerHTML = `1${data.base}=${data.rates[`${symbolsNumber}`]}${symbolsNumber}`;
          });
      });
  }   else {fromOne.value = fromTwo.value; oneNum.innerHTML = `1${base}=1${base}`; twoNum.innerHTML = `1${base}=1${base}`;
  }
}
function FechTwo(baseNumber, symbolsNumber) {
  if (baseNumber != symbolsNumber) {
    fetch(`${url}base=${baseNumber}&symbols=${symbolsNumber}`)

      .then((res) => {
        return res.json();
      })
      .then((data) => {
        fromTwo.value = fromOne.value.replace(/\s+/g, "") * data.rates[`${symbolsNumber}`]; oneNum.innerHTML = `1${data.base}=${data.rates[`${symbolsNumber}`]}${symbolsNumber}`;
          
        fetch(`${url}base=${symbolsNumber} & symbols=${baseNumber}`)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            twoNum.innerHTML = `1${data.base}=${data.rates[`${baseNumber}`]}${baseNumber}`;
          });
      });
  } 
  else {
    fromTwo.value = fromOne.value; oneNum.innerHTML = `1${base}=1${base}`; twoNum.innerHTML = `1${base}=1${base}`;
  }
}
 var numberMask = IMask(fromTwo, {
    mask: Number,
    signed: false,           
    scale: 10,
    thousandsSeparator: " ",
    padFractionalZeros: false,
    normalizeZeros: true,
    radix: ".",
    mapToRadix: [","],
  });
 

 

