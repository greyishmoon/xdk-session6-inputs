
function onAppReady() {
    if( navigator.splashscreen && navigator.splashscreen.hide ) {   // Cordova API detected
        navigator.splashscreen.hide() ;
    }
    
    $('#submitButton').on("click", function(){
        submitText();
    });  
    
}
document.addEventListener("app.Ready", onAppReady, false) ;
// document.addEventListener("deviceready", onAppReady, false) ;
// document.addEventListener("onload", onAppReady, false) ;


function submitText() {
	var text = $('#textinput').val();
    storeValue("textinput", text);
	alert("textinput stored as: " + window.localStorage.getItem("textinput"));
}

function storeValue(key, value) {
	window.localStorage.setItem( key, value );
}
