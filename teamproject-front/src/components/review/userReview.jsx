
import './userReview.css';

const UserReview = () => {

  

 

  return (
    <div className='userReview'>

    <div className='read'>
    <h1>홍콩 이열치열 여행기</h1>
    <img src='https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/912b0763-fd94-49f5-b9ca-330b4db5ffbb.jpeg' className='readImage'>
    </img>
   
 
   
  
 <h2>곳곳 숨은 명소와 맛집 찾기 </h2>
<h5>
리스보아팰리스는 무료셔틀을 운영해서
코타이, 스튜디오시티, 마카오반도 소피텔까지 이동할 수 있어요 ㅎㅎㅎ
코타이 지역은 정말 라스베가스처럼 화려했고, 구경거리가 가득했어요!!!
대부분 다 실내로 연결되어있어 정말 시원해서 이동하기도 편했어요~
스튜디오시티는 산리오&헬로키티로 전부 꾸며져있어 너무귀여웠고요! 안에 돈키호테도 있어서 쇼핑하기좋아요!
타이파빌리지 & 마카오 반도는 걸어다니며 곳곳 구경하기에 좋고, 마카오 로컬 느낌이라 좋았어요! 

 </h5>
          <h3>추천 메뉴 나 장소</h3>
          <div className='subImageGroup'>

          <div className='subshowlist'>
            <img src='https://media.triple.guide/triple-cms/c_limit,f_auto,h_1280,w_1280/fb0a8a93-b5a8-407e-a617-74f98ee387bc.jpeg' className='subImage'>
            </img>
            <div className='reviewInfo'>

              <h4>황금 제단</h4>
            <p>
              예수의 삶을 36개의 장면으로 묘사한 성화(聖畫)와
              1.5톤의 황금 예수상이 자리한 제단
              </p>
            </div>
          </div>
          <div className='subshowlist2'>
            <img src='https://media.triple.guide/triple-cms/c_limit,f_auto,h_1280,w_1280/a6a7f241-e4d1-465f-b241-98994ee42952.jpeg' className='subImage2'></img>
            <div className='reviewInfo'>
            <h4>콜럼버스의 관</h4>
            <span>
            스페인을 통치한 네 명의 왕이 떠받들고 있는 이탈리아 
            탐험가 크리스토퍼 콜럼버스의 관
            </span>
            </div>
          </div>

          </div>
            

    </div>
    </div>
  );
};



export default UserReview;
