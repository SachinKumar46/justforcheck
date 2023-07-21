const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

function openNav() {
  // debugger;
  document.getElementById("mySidenav").style.cssText = "display:block;";
  // document.getElementById("mySidenav").style.width = "250px";
  // document.getElementById("mySidenav").style.display = "block";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// $(document).ready(function(){
//   $("#exampleModalCustmorrr").click(function(){
//     $("#exampleModalCustmor").show();
//   });
// });



