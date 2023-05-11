import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>소개</h1>
      <p>가장 먼저 보이는 페이지</p>
      <ul>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to='/profiles/velopert'>velopert의 프로필</Link>
        </li>
        <li>
          <Link to='/profiles/gildong'>gildong의 프로필</Link>
        </li>
        <li>
          <Link to='/profiles/void'>존재하지 않는 프로필</Link>
        </li>
        <li>
          <Link to='/articles'>articles</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;