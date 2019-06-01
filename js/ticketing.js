
/* 영화 26개의 각 정보를 일단 전역 배열 변수로 선언해둡니다. */
/* 영화제목 (26개) */
var mTitle = ['뽀로로극장판공룡섬대모험','스타워즈-라스트제다이','메리와마녀의꽃','꾼','오리엔트특급살인','라라랜드','어쌔신-더비기닝','강철비','러빙빈센트','반드시잡는다','기억의밤','튤립피버','안녕나의소울메이트','토르-라그나로크','스테이션7','버킷리스트죽기전에꼭하고싶은것들','러브레터','저스티스리그','러브액츄얼리','패터슨','세번째살인','행복을찾아서','초행','우리는같은꿈을꾼다','스쿨오브락','메리크리스마스미스터모'];

/* 26개의 각 영화 등급 : all(전체관람가), pg(청소년관람가), adult(청소년불가)*/
var mRate = ['all','pg','all','adult','all','all','pg','pg','all','adult','all','all','all','pg','all','all','all','all','all','all','adult','all','all','all','all','all'];

/* 26개 각 영화의 감독 */
var mDirector = [
    '김현호', '라이언 존슨', '요네바야시 히로마사', '장창원','케네스 브래너','데이미언 셔젤','마이클 쿠에스타', '양우석','도로타 코비엘라', '김홍선','장항준','저스틴 채드윅','증국상','타이카 와이티티','클림 시펜코','로브 라이너','이와이 슌지','잭 스나이더','리차드 커티스','짐 자무쉬','고레에다 히로카즈','가브리엘 무치노','김대환','일디코 엔예디','리처드 링클레이터','임대형']; 

/* 위 3속성(제목, 등급, 감독)을 가지는 영화객체 26개를 저장할 배열 */
var movieObjArray = [];

/* onload() 시 이 함수를 불러서 데이터를 만듭니다. */
function dataLoad() {
    
    /* 영화 객체 26개 생성 */
    for(var i=0; i<mTitle.length; i++) {
        movieObjArray[i] = new Movie(mTitle[i], mDirector[i], mRate[i]); //각 속성을 파라미터로 넘겨서 객체 생성
    }
    
    /* ticketing.html에 출력할 영화리스트, <li> 코드 만들어주는 함수를 영화객체 배열을 넘겨 호출합니다. */
    makeMoiveList(movieObjArray);
}

/* 예매 페이지에서 영화 리스트를 출력합니다.
 * parameter: 영화 객체 배열 (크기 26)
 * <li id="movieIten숫자 class="등급">영화제목</li> 형태의 코드 26줄을 만듭니다.
 */
function makeMoiveList(movieObjs) {
    var liList = "";
    for(var i=0; i<movieObjs.length; i++) {
        liList += '<div><li id="'+i+'" class="'+movieObjs[i].rate+'" onclick="selectMovie('+i+');"'+'><a href="#">'+movieObjs[i].title+'</a></li></div>';
    }

    document.getElementById('movies').innerHTML = liList;
}

/* 영화 객체 생성자 함수 
 * parameter: 제목, 감독, 등급
 */
function Movie(title, director, rate) {
    this.title = title;
    this.director = director;
    this.rate=rate;
}

/* 예매창에서 영화 선택 시 호출되는 함수 */
function selectMovie(indexNumber) {    
    /* 선택한 영화 이름을 맨 아래 화면에 띄워주기*/
    getTitle(movieObjArray[indexNumber]);
    /* 영화가 선택되면, 영화관 창이 활성화 됨 */
    document.getElementById('movieSelected').style.display="block";
    document.getElementById('noMovieSelected').style.display="none";
}

/* 극장 표시 */
function selectCinema() {
    /* 라디오버튼으로 선택된 영화관을 가져온다. */
    var cinemas = document.getElementsByName('cinemaSelected');
    /* for문을 돌며 체크여부를 본 후 해당 영화관 가져오기 */
    for(var i=0; i<cinemas.length; i++) {
        if (cinemas[i].checked == true)
            getCinema(cinemas[i].value);
    }

    /* 영화관이 선택되면 날짜를 입력받는 창이 활성화 */
    document.getElementById('cinemaSelected').style.display="block";
    document.getElementById('noCinemaSelected').style.display="none";
}

/* 선택된 영화 표시 */
function selectedMovieInfo() {
    document.getElementById('selectedMovieInfo').style.visibility="visible";
}

/* 날짜 입력받고, 극장 시간표 출력 */
function getDate() {
    var selectedDate = document.getElementById('cinemaDate').value;
    getDay(selectedDate);
    if(selectedDate !== null) {
        document.getElementById('cinemaTime').style.display="block";
    }
}

/* 선택된 영화의 제목, 감독, 등급을 화면에 표시하는 함수 */
function getTitle(movieObj) {
    document.getElementById('selectedTitle').innerHTML = movieObj.title;
    document.getElementById('selectedRate').innerHTML = ' <img src="./img/'+movieObj.rate+'.png"/>';
    document.getElementById('selectedDirector').innerHTML = movieObj.director;

    /* 해당 영화포스터 화면에 표시하기*/
    document.getElementById('poster').setAttribute('src', './img/'+movieObj.title+'.jpg ');
    document.getElementById('poster').setAttribute('width', 200);
    document.getElementById('poster').setAttribute('height', 300);
    document.getElementById('poster').setAttribute('alt', movieObj.title);
}

//선택된 영화관 설정
function getCinema(cinema) {
    document.getElementById('selectedCinema').innerHTML = cinema;
}

//선택된 영화 날짜 설정
function getDay(selectedDate) {
    document.getElementById('selectedDay').innerHTML = selectedDate;
}

//선택된 영화 시간 설정
function getTime(selectedT) {
    document.getElementById('selectedTime').innerHTML = selectedT;
    selectedMovieInfo();
}


//달력의 날짜를 오늘 날짜로 세팅, 지난날의 영화는 예매 불가.
function getToday() {
    var today = new Date();
    var todayStr = today.getFullYear()+'-'+today.getMonth()+'-'+today.getDate();
    document.getElementById('cinemaDate').setAttribute('min','todayStr');
}

/* 예매할지 여부를 묻는 팝업창을 띄움 */
function getTicket() {    
    if (confirm("예매하시겠습니까?") == true) {
        alert("예매가 완료되었습니다.");
        //메인화면으로 보내기 -- 일단 임시로 예매2로 보냄
        location.href="main.html";
    }
    else {
        //취소할 때는 아무것도 안함
    }
}