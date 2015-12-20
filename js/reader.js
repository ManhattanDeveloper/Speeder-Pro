var interval;
$("#resetBtn").hide();

$("#small").click(function(){
	$("h1").animate({"font-size":"26px"});
});

$("#medium").click(function(){
	$("h1").animate({"font-size":"56px"});
});

$("#large").click(function(){
	$("h1").animate({"font-size":"86px"});
});


$("#startBtn").click(function(){
	var text = $(".jumbotron textarea").val();
	$(".jumbotron textarea").hide();
	$("#startBtn").hide();
	$(".jumbotron").append(" ");
	$("#resetBtn").show();
	processString(text); 
});

$("#resetBtn").click(function(){
	$(".jumbotron h1").text(" ");
	$("#resetBtn").hide();
	$(".jumbotron textarea").show();
	$("#startBtn").show();
	clearInterval(interval);
});

function processString(t){
	var arr = t.match(/\S+/gi);
	var i=0;
	var wpm=260;
	var wpm = $("#speed").val();
	if(isNaN(wpm) || wpm==""){
		wpm=260;
	}
	var useSpeed = 60000/wpm;
	
	interval=setInterval(function() {
	      // Do something every x seconds
	      var use = i.toString();
	      $(".jumbotron h1").text(arr[i]);
	      i++;
	}, useSpeed);
} 



