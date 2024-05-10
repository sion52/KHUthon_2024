import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

function Login() {
  const [userid, setUserid] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  function handleUseridChange(e) {
    setUserid(e.target.value);
  };

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    // 로그인 처리 로직
    if (userid === 'admin' && password === 'password') {
      setLoggedIn(true);
    } else {
      alert('로그인 실패');
    }
  };

  function handleLogout() {
    setLoggedIn(false);
  };

  if (loggedIn) {
    return (
      <div>
        <p>로그인 성공!</p>
        <button onClick={handleLogout} className='btn_login'>로그아웃</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='user ID' value={userid} onChange={handleUseridChange} />
      <input type="password" placeholder="비밀번호" value={password} onChange={handlePasswordChange} className='input' />
      <button type="submit" className='btn_login'>로그인</button>
      <Link to='/login/signup'><button className='btn_login'>회원가입 하기</button></Link>
    </form>
  );
};

export default Login;
