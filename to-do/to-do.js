alert("Instructions: Kendi to-do'nuzu yazın ve 'enter' basın!")

//belirli işler

$("ul").on("click", "li", (function(){

	$(this).toggleClass("completed")

}));

//todo list temizleme

$("ul").on("click", "span", (function(event){

	$(this).parent().fadeOut(500, function(){

		$(this).remove();
	});

	event.stopPropagation();

}));

//todo ekleme

$("input[type='text']").keypress(function(event){

	if(event.which === 13){
		var newTodo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + newTodo + "</li>");

	}
});

$("input[type='text']").on("click", function(event){

	$(this).val("");
});


$(".fa-edit").click(function(){

	$("input[type='text']").fadeToggle();

})



