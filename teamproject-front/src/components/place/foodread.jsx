import './foodread.css';
import { useEffect, useState } from 'react';
import { useParams } from "react-router"; 

function useFetch(url) { 
  const [data, setData] = useState(null); 
  const [loading, setLoading] = useState(true); 
  
  useEffect(() => { 
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data);
        setData(data);
        setLoading(false);
      });
  }, [url]);  // url이 변경될 때마다 useEffect가 실행되도록 수정
  
  return [data, loading]; 
}

const FoodRead = () => {

const { NO } = useParams(); 
  const [data, loading] = useFetch('http://localhost:8080/restaurant/detail/' + NO); 
  
  if (loading) { 
    return (<div>Loading...</div>); 
  } else if (data) {  // data가 null이 아닌 경우에만 렌더링
    // 이미지 URL을 설정합니다.
    const titleImg = data.TITLEIMG ? `http://localhost:8080/static/images/${data.TITLEIMG}` : '';
    const sub1Img = data.SUB1IMG ? `http://localhost:8080/static/images/${data.SUB1IMG}` : '';
    const sub2TitleImg = data.SUB2TITLEIMG ? `http://localhost:8080/static/images/${data.SUB2TITLEIMG}` : '';
    const sub3TitleImg = data.SUB3TITLEIMG ? `http://localhost:8080/static/images/${data.SUB3TITLEIMG}` : '';
    const mapImg = data.MAPIMG ? `http://localhost:8080/static/images/${data.MAPIMG}` : '';
  return (
    <div className='foodread'>

    <div className='read'>
    <h1>{data.TITLE}</h1>
    <p>{data.ENGLISHTITLE}</p>
    {titleImg && <img src={titleImg} alt="Main" className='readImage' />}  
 

   
    </div>
 <h4>{data.TOPIC} </h4>
<h4>
대표메뉴
 </h4>
 <div className='foodImageMainGroup'>

 <div className='foodImageGroup1'>
 {sub1Img && <img src={sub1Img} alt="Main" className='foodImage1' />}  
 <div className='foodInfo'>

 {/* 음식 이름  */}
 <h4>{data.sub1Topic}</h4>
 {/* 음식 설명 */}
 <span>{data.sub1Content}</span>
 </div>
 </div>
 
 <div className='foodImageGroup2'>
 {sub2TitleImg && <img src={sub2TitleImg} alt="Main" className='foodImage2' />}
 <div className='foodInfo'>

{/* 음식 이름  */}
<h4>{data.sub2Topic}</h4>
{/* 음식 설명 */}
<span>{data.sub2Content}</span>
</div>
 </div>
 
 <div className='foodImageGroup3'>
 {sub3TitleImg && <img src={sub3TitleImg} alt="Main" className='foodImage3' />}  
 <div className='foodInfo'>

 {/* 음식 이름  */}
 <h4>{data.sub3Topic}</h4>
 {/* 음식 설명 */}
 <span>{data.sub3Content}</span>
 </div>
 </div>
         
 </div>
<br/>
<br/>
<div className='foodMap'>
<h3>기본정보</h3>
{mapImg && <img src={mapImg} alt="Main" className='foodMapImage' />}  
<div className='foodMapInfo'>

<p>{data.address}</p>
<p>{data.phoneNumber}</p>
</div>
</div>

  </div>

  
  );
}
}



export default FoodRead;
