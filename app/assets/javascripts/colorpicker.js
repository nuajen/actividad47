var color = [0,0,0]

document.addEventListener("turbolinks:load", function(){

    $(".dialr").knob({
        'min' : 0,
        'max' : 255,
        'fgcolor' : "#FF0000",
        'change' : function (r) { 
            console.log(parseInt(r));
            color[0] = parseInt(r);
            actualizar();           
            }
    });

    $(".dialg").knob({
        'min' : 0,
        'max' : 255,
        'fgcolor' : "#00FF00",
        'change' : function (g) { 
            
            console.log(parseInt(g));
            color[1] = parseInt(g);
            actualizar();
                        
            }
    });

    $(".dialb").knob({
        'min' : 0,
        'max' : 255,
        'fgcolor' : "#0000FF",
        'change' : function (b) {
             console.log(parseInt(b));
             color[2] = parseInt(b);
             actualizar();
            
            }
    });

})
function actualizar(){
    $(".cuadro").css("background-color","rgb("+color[0]+","+color[1]+","+color[2]+")");
}