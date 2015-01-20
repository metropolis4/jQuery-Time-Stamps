$(document).on('ready', function() {
  $('#submit').click(function() {
        var add = $("input[name=message]").val();

    // Time Functions

        	var now = new Date($.now());
        	var hr = now.getHours();

        	var hr2 = hr;
        	var x = "am";
        	if (hr >= 12) {
        	    hr2 = hr-12;
        	    x = "pm";
        	}
        	if (hr2 === 0) {
        	    hr2 = 12;
        	}

        	var min = now.getMinutes();
        	min = min < 10 ? "0" + min : min;

        	var sec = now.getSeconds();
        	sec = sec < 10 ? "0" + sec : sec;

        	var dt = hr2 +':' + min +':' + sec + x;
        	var yr = now.getMonth() + '/' + now.getDate() + '/' + now.getFullYear();

        $('.userInput').append("<p>" + add + "   " + "<i>" + dt + "    " + yr + "</i>" + "</p>");
    });
});