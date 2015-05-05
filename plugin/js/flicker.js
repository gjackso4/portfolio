$(document).ready(function(){
	$('form').submit(function(evt){
		evt.preventDefault();
		var search = $('#search').val();
		var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
		var flickerOptions = { 
			tags: search,
			format: "json"
		};
		function displayPhotos(data) {
			var photoHTML = "<ul>";
			$.each(data.items, function(i, photo){
				photoHTML += "<li>";
				photoHTML += "<a href='" + photo.link + "'>";
				photoHTML += "<img src='" + photo.media.m + "'></a></li>";
			});
			photoHTML += "</ul>";
			$('#photos').html(photoHTML);
		} 
		$.getJSON(flickerAPI, flickerOptions, displayPhotos);
	});

}); // end ready