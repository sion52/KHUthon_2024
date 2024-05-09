import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  };

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    // 로그인 처리 로직
    if (username === 'admin' && password === 'password') {
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
        <button onClick={handleLogout}>로그아웃</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="사용자 이름" value={username} onChange={handleUsernameChange} />
      <input type="password" placeholder="비밀번호" value={password} onChange={handlePasswordChange} />
      <button type="submit">로그인</button>
    </form>
  );
};

export default Login;
