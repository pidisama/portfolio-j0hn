var delay;

$('a.foo').click(function(e) {
	e.preventDefault();
  delay = 0;
  
  if ($(this).attr('href').split('#')[1] === 'freeze') {
  	delay = 3000;
  }
  
  setTimeout(function() {
  	alert('Still good.');
  	window.location.href = '#freeze';
  },delay);
});
