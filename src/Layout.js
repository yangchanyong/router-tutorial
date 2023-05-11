import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const goArticle = () => navigate("articles", {replace: true}) // replace는 history상의 기록을 남기지 않음
  const goIndex = () => navigate("/")
  return (
    <div>
      <header style={{background: 'lightgray', padding: 16, fontSize: 24}}>
        {/* Header */}
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goArticle}>게시글 목록</button>
        <button onClick={goIndex}>홈으로</button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;