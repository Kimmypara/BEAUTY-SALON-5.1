console.log

function validate(){
  let errors = " ";

  let firstName = document.getElementById("firstName").value;
  //Condition
  if (firstName == " "){
    errors = errors + "<li>Please write your first name</li>";
    document.getElementById("firstName").classList.add("inputError");
  }
  else{
    document.getElementById("firstName").classList.remove("inputError");
  }
}







//let iconBag = document.getElementById("#shoppingBag");
//let closeBag = document.getElementById("#close-Bag");
//let body = document.querySelector('body');
//console.log



//function openIconBag(){
  //document.getElementById("shoppingBag").classList.toggle("showBag");
  //document.getElementById("closeBag").classList.toggle("hideBag");
//}
