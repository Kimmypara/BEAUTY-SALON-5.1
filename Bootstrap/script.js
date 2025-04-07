function validate(){
  let errors = "";
//Get the value of the user input and copy it into variable
  let firstName = document.getElementById("firstName").value;
//Condition 
  if(firstName == ""){  
errors = errors +"<li>Please enter your First Name</li>";
document.getElementById("firstName").classList.add("inputError");
  }
  else{
      document.getElementById("firstName").classList.remove("inputError");
      
  }

  let lastName = document.getElementById("lastName").value;
  //Condition 
    if(lastName == ""){  
  errors = errors +"<li>Please enter your Last Name</li>";
  document.getElementById("lastName").classList.add("inputError");
    }
    else{
        document.getElementById("lastName").classList.remove("inputError");
        
    }

    let contactNumber = document.getElementById("contactNumber").value;
    //Condition 
      if(contactNumber == ""){  
    errors = errors +"<li>Please enter the Telephone number</li>";
    document.getElementById("contactNumber").classList.add("inputError");
      }
      else{
          document.getElementById("contactNumber").classList.remove("inputError");
          
      }

      
        var subject = document.getElementById("subject");
        if (subject.value == "") {
            //If the "Please Select" option is selected display error.
            errors = errors +"<li>Please select a subject</li>";
            document.getElementById("subject").classList.add("optionError") ;
            
        }
        else{
          document.getElementById("subject").classList.remove("optionError") ;
          
      }

      
    

    let email = document.getElementById("email").value;

    if (email == ""){
        errors = errors + "<li>Please enter your email address</li>";
        document.getElementById("email").classList.add("inputError");
      }
      else{
          document.getElementById("email").classList.remove("inputError");
        
      }

    
    let message = document.getElementById("message").value;

    if (message == ""){
        errors = errors + "<li>Please write your message</li>";
        document.getElementById("message").classList.add("inputError");
      }
      else{
          document.getElementById("message").classList.remove("inputError");
         
      }
      

  //If errors are not empty, meaning if we have errors, add them to the HTML list and show it
  if(errors != ""){
    document.getElementById("errorList").innerHTML = errors;
    document.getElementById("errorList").classList.remove("hidden");
    console.log(errors);
    return false;
}
//if user has no errors, hide the errorList again
else{
    document.getElementById("errorList").classList.add("hidden");
    console.log('2');
    return true;
    
} 


}


//darkmode
function swapStyleSheet(sheet) {
  document.getElementById("styleLight").setAttribute("href", sheet);
  localStorage.setItem("theme", sheet);
}
window.onload = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) swapStyleSheet(savedTheme);
};




//Cart
/*let body = document.querySelector('body');
let listProductHTML = document.querySelector(".listProducts");

let listProducts = [];

const addDataToHTML = () => {
  listProductHTML.innerHTML = '';
  if(listProducts.length > 0){
    listProducts.forEach(product =>{
      let newProduct = document.createElement('div');
      newProduct.classList.add('items');
      newProduct.dataset.id = product.id;
      newProduct.innerHTML = `
      <div class="card h-100 " style="width: 100%;" >
            <a href="DIVA-Collection.html"><img src="${product.image}" class="card-img-top" alt="DIVA Collection : 149, 150, 151, 152, 153"></a>
            <div class="card-body d-flex flex-column">
              <p class="card-title">${product.name}</p>
              <p class="code">${product.code}</p>
              <p class="card-text">
              ${product.price}
              </p>
              <a href="" class="button btn  btn4 mt-auto mb-1">Add to Bag</a>
            </div>
          </div>
      `;
      listProductHTML.appendChild(newProduct);
    })
  }
}

listProductHTML.addEventListener('click', (event) =>{
  let positionClick = event.target;
  if (positionClick.classList.contains('btn4')){
    
    alert('1');
  }
})


const initApp = () => {
//get data from json
fetch ('products.json')
.then (response => response.json())
.then (data => {
  addToBag = data;
  addDataToHTML();
  console.log(addToBag);
})
}
initApp();


/*

var size = 20;
    function setFontSize(s) {
        size = s;
        $('#sidebar-menu').css('font-size', '' + size + 'px');
        $('#content').css('font-size', '' + size + 'px');
    }
    function increaseFontSize() {
        setFontSize(size + 5);
    }
    function decreaseFontSize() {
        if(size > 5)
            setFontSize(size - 5);
    }

    $('#inc').click(increaseFontSize);
    $('#dec').click(decreaseFontSize);
    setFontSize(size);*/