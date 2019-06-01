/* 
* 2015111607 콘텐츠디자인 윤희림 작성
* 이 자바스크립트파일은 movies.html에 사용됩니다.
* 영화 포스터를 일정하게 반복적으로 출력하기 위해 만들었습니다.
*/

/* 위 4개, 아래 4개, 총 8개의 포스터에 대한 영화 제목 */
var mTitle1 = ['뽀로로극장판공룡섬대모험','스타워즈-라스트제다이','메리와마녀의꽃','꾼'];
var mTitle2 = ['러빙빈센트','반드시잡는다','기억의밤','튤립피버','안녕나의소울메이트','토르-라그나로크'];

/* 영화 포스터 반복적으로 출력하기 */
/* 화면이 뜸과 동시에 출력하기 위해 onload()에서 호출합니다. */
function showPoster() {
    
    /* 위, 아래쪽 각각에 대한 html코드를 담을 변수 */
    var movieList1 = "";
    var movieList2 = "";
    
    /* 배열만큼 돌면서 영화 제목과 같은 포스터.jpg파일을 가져온다. 그리고 html코드를 작성함 */
    for(var i=0; i<mTitle1.length; i++) {
        movieList1 += '<td><div class="items"><div class="container1"><img src="./img/'+mTitle1[i]+'.jpg" alt="'+mTitle1[i]+'" '+' class="image" style="width:235px; height="300px"><div class="middle"><div class="text" onclick="goTicket();">예매하기</div><br/><div class="text" onclick="goInfo();">상세보기</div></div></div></div></td>';
        
        movieList2 += '<td><div class="items"><div class="container1"><img src="./img/'+mTitle2[i]+'.jpg" alt="'+mTitle2[i]+'" '+'class="image" style="width:235px; height="300px"><div class="middle"><div class="text" onclick="goTicket();">예매하기</div><br/><div class="text" onclick="goInfo();">상세보기</div></div></div></div></td>';
    }
    
    /* for문을 통해 덧붙여진 코드로 화면에 출력 */
    document.getElementById('movieSection1').innerHTML = movieList1;
    document.getElementById('movieSection2').innerHTML = movieList2;
}

/* 예매하기 버튼을 누르면 */
function goTicket() {
    //예매 페이지로 보내줌
    location.href="ticketing.html";
}

/* 상세보기 버튼을 누르면 */
function goInfo() {
    //상세 영화 페이지로 보냄
    location.href="movieDetail.html";
}