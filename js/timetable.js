//영화관 클릭 시 하단의 영화 상영시간표 날짜 부분 클릭에 대한 제이쿼리 
//https://codepen.io/Deeptronos/pen/zvXagJ 참고
$(document).ready(function() {
  
  $('.tab-content>div:not(":first-of-type")').hide();
  $('<div class="line"></div>').appendTo('.tab-menu li');
  $('.tab-menu li:first-of-type').find(':first').width('100%')
  
  $('.tab-menu li').each(function(i) {
    $(this).attr('data-tab', 'tab'+i);
  });
  
  $('.tab-content>div').each(function(i) {
    $(this).attr('data-tab', 'tab'+i);
  });
  
  $('.tab-menu li').on('click', function() {
    
    var dataTab = $(this).data('tab');
    var getWrapper = $(this).closest('.tab-wrapper');
    var line = $(this).find('.line');
    
    getWrapper.find('.tab-menu li').removeClass('active');
    $(this).addClass('active');
    
    getWrapper.find('.line').width(0);
    //라인에 애니메이션 주기 
    line.animate({'width':'100%'}, 'fast');
    getWrapper.find('.tab-content>div').hide();
    getWrapper.find('.tab-content>div[data-tab='+dataTab+']').show();
  });

});//end ready