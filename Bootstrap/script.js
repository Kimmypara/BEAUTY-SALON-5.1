function validate(){
  let errors = " ";
//Get the value of the user input and copy it into variable
  let firstName = document.getElementById("firstName").value;
//Condition 
  if(firstName == ""){  
errors = errors +"<li>Please enter First Name</li>";
document.getElementById("firstName").classList.add("inputError");
  }
  else{
      document.getElementById("firstName").classList.remove("inputError");
  }

  let lastName = document.getElementById("lastName").value;
  //Condition 
    if(lastName == ""){  
  errors = errors +"<li>Please enter Last Name</li>";
  document.getElementById("lastName").classList.add("inputError");
    }
    else{
        document.getElementById("lastName").classList.remove("inputError");
    }

    let contactNumber = document.getElementById("contactNumber").value;
    //Condition 
      if(contactNumber == ""){  
    errors = errors +"<li>Please enter Telephone number</li>";
    document.getElementById("contactNumber").classList.add("inputError");
      }
      else{
          document.getElementById("contactNumber").classList.remove("inputError");
      }

      
        var subject = document.getElementById("subject");
        if (subject.value == "") {
            //If the "Please Select" option is selected display error.
            errors = errors +"<li>Please selet a subject</li>";
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
    return false;
}
//if user has no errors, hide the errorList again
else{
    document.getElementById("errorList").classList.add("hidden");
    return true;
}
}




function swapStyleSheet(sheet){
  document.getElementById('styleLight').setAttribute('href', sheet);
}






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