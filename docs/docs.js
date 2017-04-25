function display(markdown) {
  $('.markdown').html(new showdown.Converter().makeHtml(markdown));
  
  tocbot.init({
    tocSelector: '.toc',
    contentSelector: '.markdown',
    headingSelector: 'h1, h2, h3, h4, h5',
    positionFixedSelector: '.toc',
  });
}

$(function () {
  if (window.location.search) {
    $('#' + window.location.search.substr(1).replace('.', '\\.')).addClass('is-active');
    $.get({
      url: window.location.origin + '/docs/' + window.location.search.substr(1) + '.md',
      statusCode: {
        404: function () {
          window.location.replace('/404.html')
        },
      },
      error: function () {
        window.location.replace('/error.html')
      },
      success: display,
    });
  } else {
    $('#default').addClass('is-active');
    $.get({
      url: 'https://raw.githubusercontent.com/diamondpkg/diamond/master/README.md',
      error: function () {
        window.location.replace('/error.html')
      },
      success: display,
    });
  }
});