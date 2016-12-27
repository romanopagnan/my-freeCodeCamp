$(document).ready(function() {

  const pickRGB = () => {return Math.floor(Math.random() * 255)};
  const randomColor = () => {return 'rgb(' + pickRGB() + ', ' + pickRGB() + ', ' + pickRGB() + ')'};
  const getQuote = () => {
    // use JSONP to get around cross-origin limitations.
    $.getJSON('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?',
    (quoteData) => {
      const currentColor = randomColor();
      $('body').css('background-color', currentColor);
      const currentQuote = quoteData[0];
      $('.quote-content').html(currentQuote.content);
      $('.quote-author').html('<strong>' + currentQuote.title + '</strong>').css('color', currentColor);
      $('button').css('color', currentColor);
      tweet = 'https://twitter.com/intent/tweet?text=' + '\"' + encodeURIComponent(currentQuote.content.slice(3, currentQuote.content.length - 5) + '\"'); //global
      $(".twitter").on('click', () => { window.open(tweet) });
    }); // end getJSON
  }; // end func


  getQuote();

  $('.new-quote').click(() => getQuote());



}); //end ready
