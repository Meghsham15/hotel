$("button").click(function(){
    $(".items a").slideToggle();
    $(".lines").css("background","white")
    setTimeout(function(){
        $(".lines").css("background","darkblue")
    },300);
    
});

let newdate = new Date();

console.log(newdate);

setInterval(function(){
    tdt.innerHTML = new Date();
    console.log(newdate);
},1000);



// var info = $(".container1").html();

// var here = $("#stay").html(``);



// $("#stt").click(function(){
//     $(".container1").html(here);
// });

// $("#hm").click(function(){
//     $(".container1").html(info);
// })

