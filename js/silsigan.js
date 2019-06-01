//실시간 영화 순위에 대한 부분
//http://www.joshi.co.kr/index.php?document_srl=364&mid=board_XbwP90 참고
$(function() {
    var count = $('#rank-list li').length;
    var height = $('#rank-list li').height();

    function step(index) {
    	//2초마다 애니메이션 딜레이시켜 움직여줌
        $('#rank-list ol').delay(2000).animate({
            top: -height * index,
        }, 500, function() {
            step((index + 1) % count);
        });
    }

    step(1);
});



//상영 예정작에 대한 슬라이더(이미지 자동 롤링되게)
//http://mylko72.maru.net/jquerylab/study/img-auto-rolling.html 참고
var $list = $('ul.album');
	var size = $list.children().outerWidth();
	var len =  $list.children().length;
	var speed = 2000; //2초마다
	var timer = null; 
	var auto = true; 
	var cnt = 1;

	$list.css('width',len*size);
	//인터벌 줘서 자동으로 바뀌게
	if(auto) timer = setInterval(autoSlide, speed);

	$list.children().bind({
		'mouseenter': function(){
			if(!auto) return false;
			clearInterval(timer);
			auto = false;
		},
		'mouseleave': function(){
			timer = setInterval(autoSlide, speed);
			auto = true;
		}
	})

	$('.bt-roll').children().bind({
		'click': function(){
			var idx = $('.bt-roll').children().index(this);
			cnt = idx;
			autoSlide();
			return false;
		},
		//마우스 커서 올리면 타이머 없어지게(슬라이더 멈춤)
		'mouseenter': function(){
			if(!auto) return false;
			clearInterval(timer);
			auto = false;
		},
		//마우스 떠나면 셋인터벌 다시 생겨서 슬라이더 움직임
		'mouseleave': function(){
			timer = setInterval(autoSlide, speed);
			auto = true;
		}
	});		

	function autoSlide(){
		if(cnt>len-1){
			cnt = 0;
		}

		$list.animate({'left': -(cnt*size)+'px' },'normal');

		var source2 = $('.bt-roll').children().find('img').attr('src').replace('_.png','.png');
		$('.bt-roll').children().find('img').attr('src',source2);

		var source = $('.bt-roll').children().find('img').attr('src').replace('.png','_.png');
		$('.bt-roll').children().eq(cnt).find('img').attr('src',source);

		cnt++;
	}