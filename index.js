let sidebar=document.querySelector(".sidebar");
let cross=document.querySelector(".cross");
let ham=document.querySelector(".ham")
let sidebar_go=document.querySelector(".sidebar_go");

// console.log(document.querySelector(".sidebar"))
cross.style.display="none";
ham.style.display="block";
ham.onclick=()=>{
    ham.style.display='none';
    setTimeout(() => {
    cross.style.display='block';
    }, 300);
    // sidebar.style.display='block
    document.querySelector(".sidebar").classList.toggle('sidebar_go');

}
cross.onclick=()=>{
    ham.style.display='block';
    cross.style.display='none';
    // sidebar.style.display='block
    document.querySelector(".sidebar").classList.toggle('sidebar_go');

}
// sidebar.style.display="none";
// cross.onclick=function(){
//     ham.style.display="block"
//     sidebar.style.display="none";
//     cross.style.display="none";
// }
// ham.onclick=function(){
//     sidebar.style.display="block";
//     ham.style.display="none";
//     cross.style.display="block";

// }

