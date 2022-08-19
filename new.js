console.log("hello");
var httpRequest;

function makeRequest()
{
    var url = "https://reqres.in/api/users?page=1";
    httpRequest = new XMLHttpRequest();

    if(!httpRequest)
    {
        alert('Cannot create an XMLHTTP instance');
        return false;
    }
    console.log("Request done");
    httpRequest.onreadystatechange = showContents;
    httpRequest.open("Get", url);
    httpRequest.send();
}

function showContents()
{
if(httpRequest.readyState === 4) {

    if(httpRequest.status === 200) {
        var jsObj = JSON.parse(httpRequest.responseText);

        console.log("The fetched data: ",jsObj);
        console.log(jsObj.data.length);
        var ele = document.getElementById("main");
        console.log(jsObj.data[0].avatar);
        

        for(var i=0;i<jsObj.data.length;i++)
        {
            /*if(i==0 || i==3)
            {

                var row =  document.createElement('row');
            }*/
            var div = document.createElement('div');
              
            var n =  document.createElement("h3");
            n.innerHTML = jsObj.data[i].first_name +" " + jsObj.data[i].last_name;
            var img = document.createElement("img");
            var email = document.createElement("p");
            var e = document.createElement("p");
            e.innerHTML = "<b/>"+"Email:";
           email.innerHTML = jsObj.data[i].email;
            
            img.setAttribute('src',jsObj.data[i].avatar);
            img.setAttribute('alt',jsObj.data[i].id);
            
          
            div.appendChild(n);
            div.appendChild(img);
            div.appendChild(e);
            div.appendChild(email);
            ele.appendChild(div);
            

        }
    }
}
}

window.onload = function()
{
    makeRequest();

}
