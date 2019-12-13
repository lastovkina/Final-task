function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }


var elementExists = document.getElementById("defaultOpen");
if (typeof(elementExists) != 'undefined' && elementExists != null)
{
  document.getElementById("defaultOpen").click();
}

 
 var password = document.getElementById("InputPassword")
  , confirm_password = document.getElementById("InputPassword2");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;


function sutit(){
            // Selecting the input element and get its value 
            var usernameVal = document.getElementById("username3").value;
            var messageVal = document.getElementById("message3").value;
                        
            var zina = document.createElement("P");                
            zina.innerHTML = "<strong>"+usernameVal+"</strong> <small>"+Date()+"</small>";              
            document.getElementById("zinas").appendChild(zina);
            var zina = document.createElement("P");                
            zina.innerHTML = messageVal;              
            document.getElementById("zinas").appendChild(zina);
            var zina = document.createElement("HR");                            
            document.getElementById("zinas").appendChild(zina);
        }