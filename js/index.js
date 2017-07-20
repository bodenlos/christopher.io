
window.onload = function() {

    coded = "39ddc@I3Drz0cE39D.rc"
    key = "YznZ4P8SqcdTQwm6r7thuH2XjCWeVIMgBOpbDN03ykJsFfR9GKaol1E5vUiLxA"
    shift=coded.length
    link=""
    for (i=0; i<coded.length; i++) {
        if (key.indexOf(coded.charAt(i))==-1) {
          ltr = coded.charAt(i)
          link += (ltr)
        }
        else {     
          ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
          link += (key.charAt(ltr))
        }
    }
    
    document.getElementById("email").href="mailto:"+link;
    document.getElementById("email_footer").href="mailto:"+link;

}



