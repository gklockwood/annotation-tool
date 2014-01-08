//js for button toggle
 $(document).ready(function(){
      $("button.toggler").click(function(){
        $("#clicktotoggle").toggleClass("maximize");
        $(this).html($(this).html() == "Show Annotation" ? "Hide Annotation" : "Show Annotation");
      });
      function onFrame(event){
    if(clearCanvas && project.activeLayer.hasChildren()){
        project.activeLayer.removeChildren();
        clearCanvas = false;
    }
}
 });
// end of js for button toggle

// js for div toggle
$(document).ready(function(){
  $("#clicktotoggle").click(function(){
    $(".display").toggle();
  });
});

// js for dragging div
$(function() {
$( "#draggable" ).draggable();
});
//end js for div toggle