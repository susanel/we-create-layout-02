//adds animation to navigation bar
$('nav a').on('click', function () {
  const target = `[data-section='${$(this).attr('id')}']`;
  $('body, html').animate({
    scrollTop: $(target).offset().top
  }, 600)
})