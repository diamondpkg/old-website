if (!localStorage.locale || !['en-us', 'pt-br'].includes(localStorage.locale)) localStorage.locale = 'en-us';

$(function () {
  $('.lang-select').val(localStorage.locale);
  $('.lang-select').change(function () {
    localStorage.locale = $('.lang-select').val();
    window.location.reload(true);
  });
});