 
function init(){
  document.getElementById("form1").style.display='none';
}



function SimpanForm(){
 
// variable output
  let nama = document.querySelector(".nama");
  let jabatan = document.querySelector(".bidang");
  let av = document.querySelector(".avail");
  let us = document.querySelector(".usia");
  let lok = document.querySelector(".lokasi");
  let pengalaman = document.querySelector(".pengalaman");
  let email = document.querySelector(".email");

  // letiabel form
  let nama_input = document.querySelector(".form1").nama_input.value;
  let jabatan_input = document.querySelector(".form1").role_input.value;
  let av_input = document.querySelector(".form1").avail_input.value;
  let us_input = document.querySelector(".form1").umur_input.value;
  let lok_input = document.querySelector(".form1").lokasi_input.value;
  let pengalaman_input = document.querySelector(".form1").pengalaman_input.value;
  let email_input = document.querySelector(".form1").email_input.value;

  // pemberian nilai sesuai inputan
  nama.innerHTML=nama_input;
  jabatan.innerHTML=jabatan_input;
  av.innerHTML=av_input;
  us.innerHTML=us_input+" Tahun";
  lok.innerHTML=lok_input;
  pengalaman.innerHTML=pengalaman_input+" Tahun";
  email.innerHTML=email_input;
  
  console.log(nama_input)
  console.log(role_input)
  console.log(av_input)
  console.log(us_input)
  console.log(lok_input)
  console.log(pengalaman_input)
  console.log(email_input)
  
  document.getElementById("form1").style.display='none';
  document.getElementById("profil").style.display='inline';  
}
function showForm(){
  document.getElementById("form1").style.display='inline';  
  document.getElementById("profil").style.display='none';  
}