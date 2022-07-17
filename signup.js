
function validateForm() 
{
  var x = document.getElementById("name").value;
  var alp = /^[0-9A-Za-z]+$/;
  if (x == "") 
  {
    alert("Please Fill The UserName");
    return false;  
  }
  if (x.length<5) 
  {
    alert("Name must be more than 5 character");
    return false;
  }
 if (x.length>10) 
  {
    alert("Username must not be more than 10 character");
    return false;
  }

  var e = document.getElementById("email").value; 
  if (e.indexOf('@')<=0) 
  {
    alert("Invalid Email");
    return false;
  }
  
    var b = document.getElementById("pass1").value;
	var c = document.getElementById("pass2").value;

	if (b=="") 
	{
       alert("Please Fill The Password");
       return false;
	}

	if (b.length<5) 
	{
		alert("password must more of 5 character");
		return false;
	}
  if (c.length<5) 
  {
    alert("password must more of 5 character");
    return false;
  }

	if (b.length>20) 
	{
		alert("password must less than 20");
        return false;
	}

	if (b!=c) 
	{
       alert("Password must be same");
       return false;
	}
}

