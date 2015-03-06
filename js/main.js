function prepareHeadline($selector){
    //get the contents of the headline and wrap every character with a span tag
    var headingText = $selector.text();
    var wrappedHeadline = headingText.split('').map(function(element){
        return "<span class=\"hide\">" + element + "</span>";
    });
    $selector.html(wrappedHeadline.join(''));
}

function shuffle(array) {
  var currentIndex = array.length; 
  var temporaryValue;
  var randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function animateHeadline($selector, delay){
    $selector.removeClass('hide');
    var $spans = $selector.children();
    var indices = [];
    for(var i = 0; i < $spans.length; i++){
        indices[i] = i;
    }
    shuffle(indices);
    
    var index = 0;
    //this interval allows us to step over the letters one at a time
    var animationInterval = setInterval(function(){
        if(index < $spans.length){
            // console.log($spans.eq(index));
            $spans.eq(indices[index]).removeClass('hide');
            //while we're marching ahead 1 by 1, we've shuffled the indices
            //so the numbers fade in at random
            index++;
        }else{
            clearInterval(animationInterval);
        }
    }, delay);

}

var $headline = $('h1');
prepareHeadline($headline);
animateHeadline($headline, 100);


$('h1').mouseenter(function(){
    prepareHeadline($headline);
    animateHeadline($headline, 50);
});


//smooth-scrolling via http://css-tricks.com/snippets/jquery/smooth-scrolling/
var dividerByName; 
var dividerOffset;
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
                //find the id of the link that just got clicked - works!
                dividerByName = $(this).attr('href');
                // dividerByName = $(dividerByName).outerHTML;
                //find the height of the nav in pixels ()
                dividerOffset = $('#design .divider').outerHeight();
                //add or subtract that height from target.offset().top below
             $('html,body').animate({
                 scrollTop: target.offset().top - $('#nav-wrapper').outerHeight() + dividerOffset
            }, 1000);
            return false;
        }
    }
});

$("#emailMeButton").click(function(){
    $("#contact-wrapper").toggle();
});


                
