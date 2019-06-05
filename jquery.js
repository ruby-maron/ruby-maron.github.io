$(function(){

  $(".fq-wrap").click(function(){
    var $answer = $(this).find(".answer");
    if($answer.hasClass("open")){
      $answer.removeClass("open");
      $answer.slideUp();
      $(this).find(".yazirushi").css("transform","rotate(45deg)")
    }else{
      $answer.addClass('open');
      $answer.slideDown();
      $(this).find(".yazirushi").css("transform","rotate(225deg)")
    }

  });

  $(".fq-wrap").hover(
    function(){
      $(this).find("h4").css("border-bottom","2px solid black");
    },
    function(){
      $(this).find("h4").css("border-bottom","none");
    }
  );



});
