let buttons = document.querySelectorAll('.container-cadeira button')
let acentos = document.querySelectorAll('.acentos')

console.lo;

acentos.forEach(element => {
    $(element).click(function(){
        
        if($(element).css("background-color") == "rgb(0, 255, 255)"){
        $(element).css({'background-color':'rgb(0, 0, 0, 0)'})
        }
        else{
            $(element).css({'background-color':'cyan'})
        }

    })
});



let companhia = document.querySelectorAll('.companhia')

console.lo;

companhia.forEach(element => {
    $(element).click(function(){
        
        if($(element).css("background-color") == "rgb(0, 255, 255)"){
        $(element).css({'background-color':'rgb(0, 0, 0, 0)'})
        }
        else{
            $(element).css({'background-color':'cyan'})
        }

    })
});
