function TestServlet() {
    var data={
        "username":document.getElementById("username").value,
        "password":document.getElementById("pwd").value,
        "email":document.getElementById("email").value,
        "name":document.getElementById("name").value,
        "surname":document.getElementById("surname").value,
        "gender":document.querySelector('input[name="gender"]:checked').value,
        "date":document.getElementById("date").value,
        "typeOfUser":document.getElementById("typeOfUser").value,
        "personalPage":document.getElementById("personalPage").value,
        "country":document.getElementById("country").value,
        "town":document.getElementById("town").value,
        "address":document.getElementById("address").value,
        "passDueDate":document.getElementById("passDueDate").value,
        "passStartDate":document.getElementById("passStartDate").value,
        "studies":document.getElementById("studies").value,
        "department":document.getElementById("department").value,
        "phoneNumber":document.getElementById("phoneNumber").value
    }
    console.log(JSON.stringify(data));
    var xhttp = new XMLHttpRequest(); // Step 1
    xhttp.onreadystatechange = function() { // Step 2 
        if (this.readyState == 4 && this.status == 200) { // Step 5
    //        const data =JSON.parse(this.response);
            document.getElementById('message').innerHTML = 
            this.responseText; 
        } 
        if(this.status==201){
            console.log("Success");
            document.getElementById('message').innerHTML = 
            this.responseText; 
        }
    };
//    var data;
//    xhttp.responseType='json';
    xhttp.open('POST' , 'http://localhost:8081/CS359_Project_war_exploded/MyServlet' , true); // Step 3
    xhttp.send(JSON.stringify(data)); // Step 4
    }

function CheckFields(){
    jQueryAsParameters();
    MapLocation();
    if(CheckRequiredFields()==1&&CheckPasswords()==1&&CheckEmail()==1&&CheckDate()==1){
        location.replace("https://www.google.com")
    }
}

function jQueryAsParameters(){
    var data={
        "username":document.getElementById("username").value,
        "password":document.getElementById("pwd").value,
        "email":document.getElementById("email").value,
        "name":document.getElementById("name").value,
        "surname":document.getElementById("surname").value,
        "gender":document.querySelector('input[name="gender"]:checked').value,
        "date":document.getElementById("date").value,
        "typeOfUser":document.getElementById("typeOfUser").value,
        "personalPage":document.getElementById("personalPage").value,
        "country":document.getElementById("country").value,
        "town":document.getElementById("town").value,
        "address":document.getElementById("address").value,
        "phoneNumber":document.getElementById("phoneNumber").value
    }
//    var data = JSON.parse(JSON.stringify( $('#myform').serializeArray() ));
    console.log(data);
    $("#message").append(data.password);
}

function CheckPasswords(){
    let Password = document.getElementById("pwd").value;
    let ConfirmPassword = document.getElementById("cnfpwd").value;
    let PasswordMessage=document.getElementById("pwdMessage");
    let ConfirmPasswordMessage=document.getElementById("cnfpwdMessage");
    ConfirmPasswordMessage.textContent="";
    if(document.getElementById("pwdMessage").textContent==="Weak Password"){
        return 0;
    }
    if(Password.length!=0){
        if(Password!=ConfirmPassword){
            ConfirmPasswordMessage.textContent="Passwords need to match"
        }else{
            ConfirmPasswordMessage.textContent="Passwords match"
            return 1;
        }
    }
}
function ShowPassword(){
    var Password = document.getElementById("pwd");
    if(Password.type == "password"){
        Password.type="text";
    }else{
        Password.type="password";
    }
}
function PasswordStrength(){
    let Password=document.getElementById("pwd").value;
    let Count=0;
    let Numbers=0;
    let Length=Password.length;
    document.getElementById("pwdMessage").textContent="";
    if(Password==="helmepa"||Password==="uoc"||Password==="tuc"){
        document.getElementById("pwdMessage").textContent="Invalid Password";
        return;
    }
    for(Count;Count<Length;Count++){
        if(Password[Count]==0||Password[Count]==1||Password[Count]==2||Password[Count]==3||Password[Count]==4
            ||Password[Count]==5||Password[Count]==6||Password[Count]==7||Password[Count]==8||Password[Count]==9){
            Numbers++;
        }
    }
    if(Numbers>Length/2){
        document.getElementById("pwdMessage").textContent="Weak Password";
        return;
    }
    if(Password.toUpperCase()!=Password&&Password.toLowerCase()!=Password){
        document.getElementById("pwdMessage").textContent="Strong Password";
        return;
    }
    document.getElementById("pwdMessage").textContent="Medium Password";
}

function CheckEmail(){
    let Email=document.getElementById("email").value;
    let StudentType=document.getElementById("studies").value;
    if(StudentType==="UOC"){
        if(Email[Email.length-6]==='u'&&Email[Email.length-5]==='o'&&Email[Email.length-4]==='c'){
            return 1;
        }
    }else if(StudentType==="TUC"){
        if(Email[Email.length-6]==='t'&&Email[Email.length-5]==='u'&&Email[Email.length-4]==='c'){
            return 1;
        }
    }else if(StudentType==="ELMEPA"){
        if(Email[Email.length-10]==='h'&&Email[Email.length-9]==='e'&&Email[Email.length-8]==='l'
        &&Email[Email.length-7]==='m'&&Email[Email.length-6]==='e'&&Email[Email.length-5]==='p'
        &&Email[Email.length-4]==='a'){
            return 1;
        }
    }
}

function CheckDate(){
    var StartingDate=new Date(document.getElementById("passStartDate").value);
    var DueDate=new Date(document.getElementById("passDueDate").value);
    var Type=document.getElementById("typeOfUser").value;
    var Years;
    if(typeOfUser=="undergraduate"){
        Years=6;
    }else if(typeOfUser=="postgraduate"){
        Years=5;
    }else{
        Years=2;
    }
    if(StartingDate.getFullYear()>DueDate.getFullYear()-Years){
        return 1;
    }else if(StartingDate.getFullYear()==DueDate.getFullYear()+Years){
        if(StartingDate.getMonth()>DueDate.getMonth()){
            return 1;
        }else if(StartingDate.getMonth()==DueDate.getMonth()){
            if(StartingDate.getDay()>=DueDate.getDay()){
                return 1;
            }
        }
    }
    return 0;
}

function HideStudent(){
    if(document.getElementById("typeOfUser").value==="supervisor"){
        document.getElementById("addressMessage").innerHTML="Library Address";
        document.getElementById("typeOfStudent").style.visibility='hidden';
        document.getElementById("passId").style.visibility='hidden';
        document.getElementById("passStartDate").style.visibility='hidden';
        document.getElementById("passDueDate").style.visibility='hidden';
        document.getElementById("studies").style.visibility='hidden';
        document.getElementById("department").style.visibility='hidden';
        document.getElementById("l1").style.visibility='hidden';
        document.getElementById("l2").style.visibility='hidden';
        document.getElementById("l3").style.visibility='hidden';
        document.getElementById("l4").style.visibility='hidden';
        document.getElementById("l5").style.visibility='hidden';
        document.getElementById("l6").style.visibility='hidden';
    }else{
        document.getElementById("addressMessage").innerHTML="Home Address";
        document.getElementById("typeOfStudent").style.visibility='visible';
        document.getElementById("passId").style.visibility='visible';
        document.getElementById("passStartDate").style.visibility='visible';
        document.getElementById("passDueDate").style.visibility='visible';
        document.getElementById("studies").style.visibility='visible';
        document.getElementById("department").style.visibility='visible';
        document.getElementById("l1").style.visibility='visible';
        document.getElementById("l2").style.visibility='visible';
        document.getElementById("l3").style.visibility='visible';
        document.getElementById("l4").style.visibility='visible';
        document.getElementById("l5").style.visibility='visible';
        document.getElementById("l6").style.visibility='visible';
    }
}

function CheckRequiredFields(){
    if(document.getElementById("username").value!=""&&document.getElementById("name").value!=""&&document.getElementById("surname").value!=""){
        if(document.getElementById("typeOfUser").value=="Student"){
            if(document.getElementById("passid").value!=""&&document.getElementById("department").value!="")
                return 1;
        }else{
            return 1;
        }
    }   
    return 0;
}

function MapLocation(){
    var address=document.getElementById("address").value;
    const data = null;
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            var json=JSON.parse(this.responseText);
            if(json[0]==null){
                document.getElementById("InvalidAddressMessage").innerHTML="invalid address";
            }else{
                if(json[0].display_name.includes('Crete')){
                    console.log(json[0].lat);
                    console.log(json[0].lon);
                    console.log(this.responseText);
                    map = new OpenLayers.Map("Map");
                    var mapnik = new OpenLayers.Layer.OSM();
                    var markers = new OpenLayers.Layer.Markers( "Markers" );
                    var position=setPosition(json[0].lat,json[0].lon);
                    map.addLayer(markers);
                    map.addLayer(mapnik)
                    const zoom = 11;
                    var position=setPosition(json[0].lat,json[0].lon);
                    var mar=new OpenLayers.Marker(position);
                    markers.addMarker(mar);
                    mar.events.register('mousedown', mar, function(evt) { 
                    handler(position,'Your Home address');}
                    );
                    var markers = new OpenLayers.Layer.Markers( "Markers" );
                    map.addLayer(markers);

                    map.setCenter(position, zoom);
                }else{
                    document.getElementById("InvalidAddressMessage").innerHTML="address not in Crete";
                }
            }
        }
    });
    
    xhr.open("GET", "https://forward-reverse-geocoding.p.rapidapi.com/v1/search?q="+address+"&accept-language=en&polygon_threshold=0.0");
    xhr.setRequestHeader("X-RapidAPI-Key", "1b5d3a400dmsha03962c812664a2p1473f9jsn7915c2b72495");
    xhr.setRequestHeader("X-RapidAPI-Host", "forward-reverse-geocoding.p.rapidapi.com");
    
    xhr.send(data);
}

function setPosition(lat, lon){
    var fromProjection = new OpenLayers.Projection("EPSG:4326"); 
    var toProjection = new OpenLayers.Projection("EPSG:900913"); 
    var position = new OpenLayers.LonLat(lon, lat).transform( fromProjection, 
    toProjection);
    return position;
}
function handler(position, message){
    var popup = new OpenLayers.Popup.FramedCloud("Popup", 
    position, null,
    message, null,
    true // <-- true if we want a close (X) button, false otherwise
    );
    map.addPopup(popup);
}
    
