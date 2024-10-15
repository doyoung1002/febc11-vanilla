'use strict'
import axios from 'axios';

// API 서버에서 게시물 목록 조회
async function getList() {
  const res = await axios.get('https://11.fesp.shop/posts', {
    params: { type: 'test', page: 1, limit: 30 } // data 보낼때, params로
  });
  console.log(res);
  return res.data;
}

// 조회한 게시물 목록으로 화면에 출력
async function renderList() {
  const list = await getList();
  const liList = list.item.map((post) => {
    return `
    <li>
      <h2>${post._id} ${post.title}</h2>
        <p>날짜: ${post.createdAt}</p>
        <span>조회수: ${post.views}</span>
        <p>${post.content}</p>
      </li>
      <hr />`
  });
  document.querySelector('#postList').innerHTML = liList.join('');
}

renderList();
