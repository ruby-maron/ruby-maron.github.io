$(function(){
  // faqのアコーディオンメニュー用
  $( ".fq-wrap" ).click( function(){
    $( this ).find( ".answer" ).slideToggle();
    if( $( this ).hasClass( "open" ) ){
      $( this ).find( ".yazirushi" ).css( "transform", "rotate( 45deg )" );
      $( this ).removeClass( "open" );
      $(this).find("h4").css("border-bottom","none");
    } else {
      $( this ).find( ".yazirushi" ).css( "transform", "rotate( 225deg )" );
      $( this ).addClass( "open" );
      $(this).find("h4").css("border-bottom","2px solid black");
    }
  });
$(".fq-wrap").eq( 0 ).click(); // ★← 定義済みの上のクリックイベントの内容で、あらかじめクリックした状態に。

// attendのアコーディオンメニュー用 767px以下限定！！

var windowWidth = $(window).width();
var windowSm = 767;
if (windowWidth <= windowSm){
  $( ".attend-contents" ).click( function(){
    $( this ).find( ".attend-text" ).slideToggle();
    if( $( this ).hasClass( "open" ) ){
      $( this ).find( ".yazirushi2" ).css( "transform", "rotate( 45deg )" );
      $( this ).removeClass( "open" );
      $(this).find(".attend-tittle").css("border-bottom","none");
    } else {
      $( this ).find( ".yazirushi2" ).css( "transform", "rotate( 225deg )" );
      $( this ).addClass( "open" );
      $(this).find(".attend-tittle").css("border-bottom","2px solid black");
    }
  });
$(".attend-contents").eq( 0 ).click(); // ★← 定義済みの上のクリックイベントの内容で、あらかじめクリックした状態に。

};



});
