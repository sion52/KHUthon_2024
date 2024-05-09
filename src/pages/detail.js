import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
//import image1 from '../image/img1.jpg'
import './detail.css';

function Header(props) {
  return(
    <>
      <h1 style={{}}>{props.title}</h1>
    </>
  )
}

function Image() {
  return(
    <>
      <div className='detail_imagebox'>
        <img
          src= "../image/img1.jpg"
          alt= "image"
          className='main-image'
        />
      </div>
    </>
  )
}

function Fund(props) {
  var category= ''
  if(props.categories==='corporation') category= 'ESG 기업';
  else if(props.categories==='organization') category= '환경 단체';
  return(
    <>
      <h5>{category}</h5>
      <div>
        <h2 style={{display: "inline"}}>{props.amounts}원 </h2>
        <h5 style={{display: "inline"}}>펀딩 중</h5>
      </div>
      <div>
        <h5 style={{display: "inline"}}>남은 기간 </h5>
        <h3 style={{display: "inline"}}>{props.days}일</h3>
      </div>
      <div>
        <h5 style={{display: "inline"}}>참여자 </h5>
        <h3 style={{display: "inline"}}>{props.participants}명</h3>
      </div>
      <div>
        <Link to='/pay'><button className='button_fund'>펀딩 하기</button></Link>
        <button onClick={function() {
          //로그인 확인 기능 구현하기
          alert('관심 상품으로 표시했습니다');
        }} className='button_like'>❤︎</button>
      </div>
      <div><button className='button_about'>기업 정보 더보기</button></div>{/*기업페이지로 이동하기*/}
    </>
  )
}

function Detail() {
  const {id}= useParams();
  return(
    <div className= 'Detail'>

      <div className='detail_title'>
        <Header title= {'Detail Title'} />
      </div>

      <div className='detail_main'>
        <div className='detail_image'>
          <Image/>
        </div>

        <div className='detail_fund'>
          <Fund
            categories= {'corporation'}
            amounts= {'0'}
            days= {0}
            participants= {0}
          />
        </div>
      </div>

    </div>
  );
}

export default Detail;
