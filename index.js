//$( "button.anatomy" ).html( "" )

var hiddenBox = $( ".anatomy-content" );
$( ".anatomy button" ).on( "click", function( event ) {
  hiddenBox.show();
});
