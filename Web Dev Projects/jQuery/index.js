// Adding class to the h1
$('h1').addClass('big-title margin-50');



// removing class from the h1

// setTimeout(function() {
//     $('h1').removeClass('big-title margin-50');
//     $('h1').text("Byy")
// }, 1000);


// Adding event listner to the code 
$('button').on('mouseenter', function() {
    $(this).css('color', 'purple');
}).on('mouseleave', function() {
    // Reset the color when the hover ends
    $(this).css('color', '');
});


var mainText = $('h1').text()
$('input').on('input',function(){
    var vaL =  this.value;
    $('h1').text(vaL===''? mainText:vaL);
});

