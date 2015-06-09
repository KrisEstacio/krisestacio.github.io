var checkClass = function() {
  
  // Remove Existing Hide 
  if ( $('img').hasClass('hide') ) {
    $('img').removeClass('hide'); 
  }
  
};

// Click Photography
$('#photo').click( function() {
  
  // Check Class
  checkClass();
  
  // Hide Other Stuff
  $('img:not(.photo)').toggleClass('hide');

});

// Click Illustration
$('#poster').click( function() {
  
    checkClass();
    $('img:not(.poster)').toggleClass('hide');
  
});

// Click Logo
$('#mixed-media').click( function() {
 
    checkClass();
    $('img:not(.mixed-media)').toggleClass('hide');
  
});

// Show All 
$('#all').click( function() {
  
  checkClass();
  
});


