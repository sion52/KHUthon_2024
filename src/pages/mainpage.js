import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './mainpage.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Posts({ post,index }) {
  return (
    <Card style={{ width: '18rem' }} className='Card'>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{post.name}</Card.Title>
        <Card.Text>
          {post.data}
        </Card.Text>
        <Link to={`/detail/${index}`}>
          <Button variant="primary">자세히 보기</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

function Mainpage() {
  // NewPosts와 RecommendPosts를 useState 내부에서 초기화
  const [NewPosts, SetNewPosts] = useState([]);
  const [RecommendPosts, SetRecommendPosts] = useState([]);

  useEffect(() => {
    // data.js에서 데이터 가져와서 상태 업데이트
    fetch('url')
      .then(res => res.json()) // .json() 메서드 호출
      .then(data => {
        SetNewPosts(data); // 첫 번째 then 메서드에서 처리
        SetRecommendPosts(data); // 첫 번째 then 메서드에서 처리
      });
  }, []);

  let MainNewPosts = [];
  let MainRecommendPosts = [];

  [0, 1, 2, 3].forEach(index => {
    if (NewPosts[index]) {
      MainNewPosts.push(NewPosts[index]);
    }
  });

  [7, 6, 5, 4].forEach(index => {
    if (RecommendPosts[index]) {
      MainRecommendPosts.push(RecommendPosts[index]);
    }
  });

  return (
    <>
      <div className='Posts'>
        <p>&#x1F525;신규 기업 &gt;</p>
      </div>

      <div className="box">
        {MainNewPosts.map((post, index) => <Posts index={index} post={post} />)}
      </div>

      <div className='Posts'>
        <p>&#x1F50E;추천 기업 &gt;</p>
      </div>

      <div className="box">
        {MainRecommendPosts.map((post, index) => <Posts index={index} post={post} />)}
      </div>
    </>
  );
}

export default Mainpage;
