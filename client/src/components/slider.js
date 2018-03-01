import $ from 'jquery';

$(document).ready(function(){

  var total = // 
  var current = // the clicked item
  arrows(current)    
      
  $(".right").click(function(){
  
    if(current<total){
        $(".sliderbox").animate({left:"-=1040"},500)
        current = current+1
        arrows(current)
    }
  
  })
   
  $(".left").click(function(){
  
    if(current>1){
      $(".sliderbox").animate({left:"+=1040"},500)
      current = current-1  //current--
      arrows(current)
    }
  })
   
  function arrows(slide){
    $(".right").show()
    $(".left").show()
  }
  
      
  })//end doc ready