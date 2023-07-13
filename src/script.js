

var audio = new Audio('src/lagu.mp3');
audio.autoplay = true;
audio.loop = true;
audio.currentTime = 43;

audio.addEventListener('canplaythrough', function() {
  audio.play();
});


// ganti backgournd
let body = document.body;
let background;
let i = 0, kata, j = 2;
let k1 = 'Selamat Ulang Tahun Elul...';
let k2 = 'HAPPY 19TH BIRTH DAY';
let k3 = 'Halooo El...';
let k4 = 'Selamat Ulang Tahun yaaa..';
let k5 = 'Semoga panjang umur, sehat dan lancar rezeki selalu yaa..';
let k6 = 'Semoga apa - apa yang di harapkan segera di dapatkan..';
let k7 = 'El ga boleh sedih ya..';
let k8 = 'El harus seneng teruss..'
let k9 = 'Aku tunggu kedatangannya di cikarang ya cantik..'
let k10 = 'Love You..'
let k11 = '';

kata = [k1, k2, k3, k4, k5, k6, k7, k8, k9, k10, k11];


setTimeout(()=>{
  background = body.style.backgroundColor = 'white';
  setTimeout(()=>{
    tampilkanDiv('.box2');
    mengetik('.greeting',k2);
    setTimeout(()=>{
      function tampilkanUcapan(){
        if(j< kata.length){
          setTimeout(()=>{
            
            document.querySelector('.ucapan').innerHTML = kata[j];
            document.querySelector('.ucapan').classList.add('fade-in-animation');
            j++;
            tampilkanUcapan();
          }, 7000 )
        }else {
          // Semua array telah dijalankan, mengubah class "el" menjadi flex
          document.querySelector('.el').classList.add('fade-in-animation');
          document.querySelector('.el').style.display = 'flex';
        }
      }
      tampilkanUcapan();
    }, 1000)
  }, 5000)
  sembunyikanDiv('.box');
  setInterval(createHeart, 200);
},10000);

// fungsi hide div dan child nya

function sembunyikanDiv(hide) {
  var div = document.querySelector(hide);
  div.classList.add('fade-out-animation');
  div.classList.add('hide');
}

function tampilkanDiv(visible) {
  var div = document.querySelector(visible);
  div.classList.remove('hide');
  div.classList.add('fade-in-animation');
}


sembunyikanDiv('.box2');


// }
//animasi mengetik

// function ketik(teks) {
  //   for(i = 0 ; i < kata.length; i++){
    //     document.querySelector(teks).innerHTML += kata.charAt(i);
    //     setTimeout(ketik,200);
    //   }
    // }

// ketik('.text');

function mengetik(selector, text) {
  var typedTextElement = document.querySelector(selector);
  var i = 0;
  
  function ketik() {
    if (i < text.length) {
      typedTextElement.innerHTML += text.charAt(i);
      i++;
      setTimeout(ketik, Math.floor(Math.random() * 200) + 100); // Waktu penundaan antara 100ms hingga 300ms
    }
  }
  
  ketik();
}
mengetik('.typed-text', k1);





function createHeart() {
  const heart = document.createElement("span");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  
  heart.style.left = x + "px";
  heart.style.top = y + "px";
  
  document.getElementById('container').appendChild(heart);
  
  setTimeout(() => {
    heart.remove();
  }, 3000);
}


























