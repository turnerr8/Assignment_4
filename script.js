$(document).ready(function() {

    //DESCRIPTION JS
    $("#description").hide();
    $("#description-button").click(function () { 
        $("#description").toggle();
    });
    
    //QUOTE JS
    let quoteCounter = 0;
    const quotes = [
        "\"I want you to be the very best version of yourself that you can be.\"",
        "\" We’re afraid that we will never escape our past. We’re afraid of what the future will bring. We’re afraid we won’t be loved, we won’t be liked. And we won’t succeed.\""
    ];
    
    $(".q-text").text(quotes[0]);
    $("#quote").click(function(){
        if(quoteCounter==0) {
            $(".q-text").text(quotes[1]);
            quoteCounter=1;
        } else {
            $(".q-text").text(quotes[0]);
            quoteCounter=0;
        }
    })


    //PICTURE L JS
    let leftCounter = 0;
    const pictureL = $("#img-left");
    pictureL.mouseout(function() {
        if(leftCounter==0) {
            pictureL.css('background-image', 'url(./img/sad1.jpeg)');
            leftCounter++;
        } else {
            pictureL.css('background-image', 'url(./img/happy2.jpeg)');
            leftCounter=0;
        }
    });


    //PICTURE R JS
    let rightCounter = 0;
    const pictureR = $("#img-right");
    pictureR.mouseout(function() {
        if(rightCounter==0) {
            pictureR.css('background-image', 'url(./img/sad2.jpeg)');
            pictureR.css('background-position', '-23em')
            rightCounter++;
        } else {
            pictureR.css('background-image', 'url(./img/happy1.jpeg)');
            rightCounter=0;
        }
    })

    //DARK MODE
    let dark = false;
    const body = $(".container");
    const title = $('#title');
    const descr = $("#description");
    title.click(function() {
        if(dark==false) {
            body.css('background-color', 'black');
            body.css('color', 'white');
            descr.css('background-color', 'darkgray');
            dark=true;
        } else {
            body.css('background-color', 'white');
            body.css('color', 'black');
            descr.css('background-color', 'whitesmoke');
            dark=false;
        }
    });
});