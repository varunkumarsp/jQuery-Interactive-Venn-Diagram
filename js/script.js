/* Author: Reptar */

$(function() {
   $('#network').hover( function(){
      $(this).removeClass('network');
      $(this).addClass('hover');
	  $("#info1").animate({
	    width: "100%",
	    opacity: 1,	
	    marginLeft: "20px",
	  }, 100 );

   },
   function(){
      $(this).removeClass('hover'); 
      $(this).addClass('network');
	  $("#info1").animate({
	    width: "100%",
	    opacity: 0,
	    marginLeft: "20px",
	  }, 300 );
   });
});


$(function() {
   $('#context').hover( function(){
      $(this).removeClass('context');
      $(this).addClass('hover');
	  $("#info2").animate({
	    width: "100%",
	    opacity: 1,	
	    marginLeft: "20px",
	  }, 100 );
   },
   function(){
      $(this).removeClass('hover'); 
      $(this).addClass('context');
	  $("#info2").animate({
	    width: "100%",
	    opacity: 0,
	    marginLeft: "20px",
	  }, 300 );
   });
});


$(function() {
   $('#self').hover( function(){
      $(this).removeClass('self');
      $(this).addClass('hover');
	  $("#info3").animate({
	    width: "100%",
	    opacity: 1,	
	    marginLeft: "20px",
	  }, 300 );
   },
   function(){
      $(this).removeClass('hover'); 
      $(this).addClass('self');
	  $("#info3").animate({
	    width: "100%",
	    opacity: 0,
	    marginLeft: "20px",
	  }, 300 );
   });
});

