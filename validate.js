  function validate()
    {
        
        clearerrors();
        return validatePhoneNumber();
    }

    function validatePhoneNumber() {
var errors = document.querySelector("#error");
var input = document.form1.Phone.value.trim();
if(input.length!=12){
    errors.innerHTML+="<p>Enter 12 digits</p>";
   return false;

}
if(input[0]=='(' && input[4]==')' && input[8]=='-')
{
    for(var i =0; i<13;i++)
    {
        if(i!=0 && i!=4 && i!=8)
        {
            if(input[i].parseInt()!=input[i])
            {
                errors.innerHTML+="<p>Invalid Phone number</p>";
                 return false;

            }
        }
    }
}
else
{errors.innerHTML+="<p>Enter 13 digits</p>";
return false;
}

return true;
    }


    function clearerrors()
    {
        document.querySelector("#error").innerHTML = "";
    }
