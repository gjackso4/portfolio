var packeryEnabled = 1;
var photoLinks = 0;
var debug = 1;
var tag = "";
var count = 15;
var access_token = '188256414.aa0b59c.1de300dd6a164d008f932a3299fb3e15';
var access_parameters = {access_token:access_token};
var search = "eprize";
	
var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
var flickerOptions = { 
	tags: search,
	format: "json"
};

function shuffle( a ){
    for(var j, x, i = a.length; i; j = Math.floor( Math.random() * i ), x = a[--i], a[i] = a[j], a[j] = x );
    return a;
};

function grabImages(parameters) {
  var instagramUrl = 'https://api.instagram.com/v1/tags/' + search + '/media/recent?callback=?&count='+ count;
  $.getJSON(instagramUrl, access_parameters, onDataLoaded);
}

function loadPackery() {
	setTimeout(function(){
		var $container = $('.container').packery({
		  columnWidth: 0,
	  	  rowHeight: 0
		});
		$container.find('.element-item').each( function( i, itemElem ) {
		  // make element draggable with Draggabilly
		  var draggie = new Draggabilly( itemElem );
		  // bind Draggabilly events to Packery
		  $container.packery( 'bindDraggabillyEvents', draggie );
		});
	}, 500);
	shuffle( ".element-item" );

};

function displayPhotos(data) {
	var photoHTML2 = "";
	$.each(data.items, function(i, photo){
		photoHTML2 += "<div class='element-item flickr ' data-category='flickr'>";
		if(photoLinks) {
			photoHTML2 += "<a href='" + photo.link + "'><img class='post' src='" + photo.media.m + "'></a></div>";
		} else {
			photoHTML2 += "<img class='post' src='" + photo.media.m + "'>";
		}
		photoHTML2 += photo.tags + "</div>"
		if(debug){console.log(photo)};
	});
	$('.container').append(photoHTML2);
} 


function onDataLoaded(data) {
		var photoHTML = "";
	 //  	console.log(data);
	  	$.each(data.data, function(i, photo){
	  		photoHTML += "<div class='element-item instagram ' data-category='instagram'><div class='author'><img src='" + photo.user.profile_picture + "'><span>" + photo.user.username + "</span></div>";
	  		if(photoLinks) {
	  			photoHTML += "<a target='_blank' href='" + photo.link + "'><img class='post' src='" + photo.images.low_resolution.url + "'><img class='icon' src='images/instagram_icon.png'></a>";
	  		} else {
	  			photoHTML += "<img class='post' src='" + photo.images.low_resolution.url + "'><img class='icon' src='images/instagram_icon.png'>";
	  		}
	  		photoHTML += "<p>" + photo.caption.text + "</p>";
	  		photoHTML += "</div>";
	  		if(debug){console.log(photo)};		
	  	});
	  	$('.container').append(photoHTML);
}


$(function() {
	JQTWEET = {
	     
	    // You need to clear tweet-date.txt before toggle between hash and user
	    // hash: '%23jquery OR %23css'			    
	    search: search, //leave this blank if you want to show user's tweet
	    user: '', //username
	    numTweets: 15, //number of tweets
	     
	    // core function of jqtweet
	    // https://dev.twitter.com/docs/using-search
	    loadTweets: function() {

	        var request;
	         
	        // different JSON request {hash|user}
	        if (JQTWEET.search) {
            request = {
                q: JQTWEET.search,
                count: JQTWEET.numTweets,
                api: 'search_tweets'
            }
	        } else {
            request = {
                q: JQTWEET.user,
                count: JQTWEET.numTweets,
                api: 'statuses_userTimeline'
            }
	        }

	        $.ajax({
	            url: 'http://gregoryljackson.com/labs/grabtweets.php', // Change this line to ur server address where grabtweets lives.
	            type: 'POST',
	            dataType: 'json',
	            data: request,
	            success: function(data, textStatus, xhr) {
		            
		            if (data.httpstatus == 200) {
		            	if (JQTWEET.search) data = data.statuses;

	                var text, name, photoHTML3;
	                	                

	                  // append tweets into page
	                  for (var i = 0; i < JQTWEET.numTweets; i++) {		
	                  
	                    url = 'http://twitter.com/' + data[i].user.screen_name + '/status/' + data[i].id_str;
	                  	console.log(data[i]);
	                  	photoHTML3 += "<div class='element-item twitter ' data-category='twitter'>";
	                  	photoHTML3 += "<div class='author'><img src='" + data[i].user.profile_image_url + "'><span>" + data[i].user.name + "</span></div>"
	                  	try {
	                      if (data[i].entities['media']) {
	                      	photoHTML3 += '<img class="post" src="' + data[i].entities['media'][0].media_url + '" />';
	                      }
	                    } catch (e) {  
	                      //no media
	                    }
	                    photoHTML3 += "<p>" + data[i].text + "</p>" 
	                    photoHTML3 += "</div>"
	           

	                  }
                  
	                  $('.container').append(photoHTML3);                 
	                  if(packeryEnabled){loadPackery();$('.element-item').css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0});};
	               } else alert('no data returned');console.log(search);
	             
	            }   
	 
	        });
	 
	    }, 
	     
	         
	    /**
	      * relative time calculator FROM TWITTER
	      * @param {string} twitter date string returned from Twitter API
	      * @return {string} relative time like "2 minutes ago"
	      */
	    timeAgo: function(dateString) {
	        var rightNow = new Date();
	        var then = new Date(dateString);
	         
	        if ($.browser.msie) {
	            // IE can't parse these crazy Ruby dates
	            then = Date.parse(dateString.replace(/( \+)/, ' UTC$1'));
	        }
	 
	        var diff = rightNow - then;
	 
	        var second = 1000,
	        minute = second * 60,
	        hour = minute * 60,
	        day = hour * 24,
	        week = day * 7;
	 
	        if (isNaN(diff) || diff < 0) {
	            return ""; // return blank string if unknown
	        }
	 
	        if (diff < second * 2) {
	            // within 2 seconds
	            return "right now";
	        }
	 
	        if (diff < minute) {
	            return Math.floor(diff / second) + " seconds ago";
	        }
	 
	        if (diff < minute * 2) {
	            return "about 1 minute ago";
	        }
	 
	        if (diff < hour) {
	            return Math.floor(diff / minute) + " minutes ago";
	        }
	 
	        if (diff < hour * 2) {
	            return "about 1 hour ago";
	        }
	 
	        if (diff < day) {
	            return  Math.floor(diff / hour) + " hours ago";
	        }
	 
	        if (diff > day && diff < day * 2) {
	            return "yesterday";
	        }
	 
	        if (diff < day * 365) {
	            return Math.floor(diff / day) + " days ago";
	        }
	 
	        else {
	            return "over a year ago";
	        }
	    }, // timeAgo()
	     
	     
	    /**
	      * The Twitalinkahashifyer!
	      * http://www.dustindiaz.com/basement/ify.html
	      * Eg:
	      * ify.clean('your tweet text');
	      */
	    ify:  {
	      link: function(tweet) {
	        return tweet.replace(/\b(((https*\:\/\/)|www\.)[^\"\']+?)(([!?,.\)]+)?(\s|$))/g, function(link, m1, m2, m3, m4) {
	          var http = m2.match(/w/) ? 'http://' : '';
	          return '<a class="twtr-hyperlink" target="_blank" href="' + http + m1 + '">' + ((m1.length > 25) ? m1.substr(0, 24) + '...' : m1) + '</a>' + m4;
	        });
	      },
	 
	      at: function(tweet) {
	        return tweet.replace(/\B[@＠]([a-zA-Z0-9_]{1,20})/g, function(m, username) {
	          return '<a target="_blank" class="twtr-atreply" href="http://twitter.com/intent/user?screen_name=' + username + '">@' + username + '</a>';
	        });
	      },
	 
	      list: function(tweet) {
	        return tweet.replace(/\B[@＠]([a-zA-Z0-9_]{1,20}\/\w+)/g, function(m, userlist) {
	          return '<a target="_blank" class="twtr-atreply" href="http://twitter.com/' + userlist + '">@' + userlist + '</a>';
	        });
	      },
	 
	      hash: function(tweet) {
	        return tweet.replace(/(^|\s+)#(\w+)/gi, function(m, before, hash) {
	          return before + '<a target="_blank" class="twtr-hashtag" href="http://twitter.com/search?q=%23' + hash + '">#' + hash + '</a>';
	        });
	      },
	 
	      clean: function(tweet) {
	        return this.hash(this.at(this.list(this.link(tweet))));
	      }
	    } // ify
	 
	     
	};		
	
});

