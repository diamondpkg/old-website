function display(markdown) {
  $('.markdown').html(new showdown.Converter().makeHtml(markdown));
  
  $('progress').attr('value', 90)
  $('progress').text(90 + '%');

  tocbot.init({
    tocSelector: '.toc',
    contentSelector: '.markdown',
    headingSelector: 'h1, h2, h3, h4, h5',
    positionFixedSelector: '.toc',
  });

  $('progress').attr('value', 100)
  $('progress').text(100 + '%');

  setTimeout(function () {
    $('progress').addClass('hidden');
  }, 500)

  $('.footer').toggleClass('hidden');
}

function xhr() {
  var xhr = new window.XMLHttpRequest();
  xhr.addEventListener("progress", function (evt) {
    $('progress').attr('value', (evt.loaded / evt.total) * 80)
    $('progress').text((evt.loaded / evt.total) * 80 + '%');
  }, false);
  return xhr;
}

$(function () {
  if (window.location.search) {
    $('#' + window.location.search.substr(1).replace('.', '\\.')).addClass('is-active');
    $.get({
      url: 'https://raw.githubusercontent.com/diamondpkg/diamond/master/docs/' + window.location.search.substr(1) + '.' + localStorage.locale + '.md',
      statusCode: {
        404: function () {
          window.location.replace('/404.html')
        },
      },
      error: function () {
        window.location.replace('/error.html')
      },
      xhr: xhr,
      success: display,
    });
  } else {
    $('#default').addClass('is-active');
    $.get({
      url: 'https://raw.githubusercontent.com/diamondpkg/diamond/master/README.md',
      error: function () {
        window.location.replace('/error.html')
      },
      xhr: xhr,
      success: display,
    });
  }
});