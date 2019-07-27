

// $(document).ready(function() {
//   $('#freeze').click(function(e) {
//     e.preventDefault();
//     var $a = $(this).addClass('clicked');
//     setTimeout(function() {
//       window.location.assign($a.attr('href'));
//        // window.location.href = self.href;
//     }, 300);
//   });
// });

var delay;

$('a.foo').click(function(e) {
	e.preventDefault();
  delay = 0;
  
  if ($(this).attr('href').split('#')[1] === 'freeze') {
  	delay = 3000;
  }
  
  setTimeout(function() {
  	alert('Still good.');
  	window.location.href = 'Index.html#freeze';
  },delay);
});
