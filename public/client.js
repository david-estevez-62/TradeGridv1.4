$(function(){

var tabs = document.querySelector('paper-tabs');
	tabs.addEventListener('core-select', function() {
	console.log("Selected: " + tabs.selected);
});

})

// $(document).ready(function(){
// 	$('.chant1').on('click', function(){
// 		var postData = $(".input1").val();

// 		console.log(postData)

// 		$.post('/addChant', {postData:postData} , function(data){
// 			// console.log(data);
// 			console.log('test', data);

// 		});
// 	})
// });

		
	// $(".team1").on('click', function(e){

	// 	e.preventDefault();

	// 	Click btn will have team id attached to it. Once clicked send id and post it to database

	// 	$.post('/ideaPosted', {uniqueId:uniqueId, function(data){

	// 		$('#ideaPosted').text(data.posts);

	// 	});

	// 	$('.postinput').val('');


	// 	$(".ideaTable").prepend('<tr><td></td><td class="ideaBody"><h3>' + postData + '</h3></td><td><a class="delete">Remove</a></td></tr>');
	// });

	// $(".team2").on('click', function(e){

	// 	e.preventDefault();

	// 	// var postData = $(".postinput").val();
	// 	// // var postData2 = $('#upload').val();
	// 	// console.log(postData)

	// 	$('.postinput').removeClass('noborder');

	// 	console.log($('#addPost'));


	// 	$.post('/ideaPosted', {postData:postData, function(data){
	// 		// console.log(data);

	// 		$('#ideaPosted').text(data.posts);

	// 	});

	// 	$('.postinput').val('');


	// 	$(".ideaTable").prepend('<tr><td></td><td class="ideaBody"><h3>' + postData + '</h3></td><td><a class="delete">Remove</a></td></tr>');
	// });


