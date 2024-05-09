import React, { useState } from 'react';

function Signup({ onSignup }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  };

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  };

  function onSignup(username, password) {
    // 여기에서 회원가입 처리 로직을 작성합니다.
    alert(`회원가입 성공! 사용자 이름: ${username}, 비밀번호: ${password}`);
  };

  function handleSubmit(e) {
    e.preventDefault();
    // 회원가입 처리 로직
    onSignup(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="사용자 이름" value={username} onChange={handleUsernameChange} />
      <input type="password" placeholder="비밀번호" value={password} onChange={handlePasswordChange} />
      <button type="submit">회원가입</button>
    </form>
  );
};

export default Signup;