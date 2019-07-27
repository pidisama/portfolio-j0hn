function hover(description) {
    console.log(description);
	document.getElementById('percent').innerHTML = description;

	function constant (duration, range, current) {
	  return duration / range;
	}

	function animateValue(id, start, duration, easing) {
	  var end = parseInt(document.getElementById(id).textContent, 10);
	  var range = end - start;
	  var current = start;
	  var increment = end > start? 1 : -1;
	  var obj = document.getElementById(id);
	  var startTime = new Date();
	  var offset = 1;
	  var remainderTime = 0;
	  
	  var step = function() {
	    current += increment;
	    obj.innerHTML = current;
	    
	    if (current != end) {
	      setTimeout(step, easing(duration, range, current));
	    }
	    else {
	      // console.log('Easing: ', easing);
	      console.log('Elapsed time: ', new Date() - startTime)
	      console.log('');
	    }
	  };
	  
	  setTimeout(step, easing(duration, range, start));
	}

	animateValue("percent", 0, 1200, constant);
}


