$(document).ready(function(){
	$(".ryu").mouseenter(function(){
		$(".ryu-still").hide();
		$(".ryu-ready").show();
	})
	.mouseleave(function(){
		$(".ryu-still").show();
		$(".ryu-ready").hide();
	})
	.mousedown(function(){
		playHadouken();
		$(".ryu-throwing").show();
		$(".ryu-still").hide();
		$(".hadouken").finish().show().animate({'left': '1020px'},
			300, 
			function(){
				$(this).hide();
				$(this).css('left', '520px');
			});
		$(".ryu-ready").hide();
	})
	.mouseup(function(){
		$(".ryu-throwing").hide();
		$(".ryu-ready").show();
	});

	$("body").keydown(function(event){
		if(event.which == 88) {
          $(".ryu-cool").show();
		}
	}).keyup(function(event){
		console.log("The x key was released");
		if(event.which == 88){
          $(".ryu-cool").hide();
      }
	});

	function playHadouken() {
		$("#hadouken-sound")[0].volume = 0.5;
		$("#hadouken-sound")[0].load();
		$("#hadouken-sound")[0].play();
	}

});