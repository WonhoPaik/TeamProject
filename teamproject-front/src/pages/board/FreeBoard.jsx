// import React from 'react';
// import './FreeBoard.css';
// import {useNavigate} from "react-router-dom";
//
//
// const FreeBoard = () => {
//     const nav = useNavigate();
//     const posts = [
//         {
//             id: 1,
//             author: '정우경',
//             date: '24.09-24.10 오사카',
//             title: '남바지역 4명이서 묵을 러브호텔 추천좀 해주세요 ~ㅜㅜ',
//             content: '성인남자 4명인데 회사동료라 어디서 자야할지 모르겠네요',
//             timeAgo: '2시간전',
//             likes: 0,
//             comments: 0,
//         },
//         {
//             id: 2,
//             author: '이스코',
//             date: '24.07-24.08 후쿠오카',
//             title: '후쿠오카 도착',
//             content: '날씨 정말 장난 아니네요 ㅋㅋ 낮에는 실내위주로만 다녀야겠어요 ㅠㅠ',
//             timeAgo: '2시간전',
//             likes: 0,
//             comments: 0,
//             image: 'https://via.placeholder.com/150',
//         },
//         {
//             id: 3,
//             author: '윤준호상',
//             date: '24.08 오사카',
//             title: '일본천황폐하 만세!!!',
//             content: '친일만세!!!!',
//             timeAgo: '1분전',
//             likes: 0,
//             comments: 1,
//         },
//         {
//             id: 4,
//             author: '이석진',
//             date: '24.08 오사카',
//             title: '혀어어어엉!!!',
//             content: '우리 어떠캄니까 시발 망나니들',
//             timeAgo: '1분전',
//             likes: 0,
//             comments: 1,
//         },
//     ];
//
//     return (
//         <div className="freeboard-container">
//             <header className="freeboard-header">
//                 <button className="back-button">←</button>
//                 <h1>자유게시판</h1>
//                 <button className="write-button" onClick={() => {
//                     nav("/page/writepostfb")
//                 }}>글쓰기
//                 </button>
//             </header>
//             <div className="filters">
//                 <select className="select-location">
//                     <option value="entire-city">도시전체</option>
//                     <option value="seogwipo-si">서귀포시</option>
//                     <option value="jeju-si">제주시</option>
//                 </select>
//                 <select className="select-topic">
//                     <option value="">주제</option>
//                     <option value="">동행</option>
//                     <option value="">날씨</option>
//                     <option value="">장소</option>
//                     <option value="">기타</option>
//                 </select>
//                 <button className="check-mypost">내 게시글</button>
//             </div>
//
//             <div className="posts-list">
//                 {posts.map(post => (
//                     <div key={post.id} className="post">
//                         <div className="post-header">
//                             <div className="post-author">{post.author}</div>
//                             <div className="post-date">{post.date}</div>
//                         </div>
//                         <div className="post-content">
//                             <h4>{post.title}</h4>
//                             <p>{post.content}</p>
//                             {post.image && <img src={post.image} alt="Post" className="post-image"/>}
//                         </div>
//                         <div className="post-footer">
//                             <span className="post-time">{post.timeAgo}</span>
//                             <div className="post-reactions">
//                                 <span>👍 {post.likes}</span>
//                                 <span>💬 {post.comments}</span>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };
//
// export default FreeBoard;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FreeBoard.css';

const FreeBoard = () => {
    const nav = useNavigate();

    const posts = [
        { postId: 1, author: 'jeff93', date: '23.10 오사카', title: '오사카', content: '오사카', timeAgo: '15분전', likes: 1, comments: 1 },
        { postId: 2, author: 'jeff93', date: '23.10 오사카', title: '오사카', content: '오사카', timeAgo: '15분전', likes: 1, comments: 1 },
        { postId: 3, author: 'jeff93', date: '23.10 오사카', title: '오사카', content: '오사카', timeAgo: '15분전', likes: 1, comments: 1 },
        { postId: 4, author: 'jeff93', date: '23.10 오사카', title: '오사카', content: '오사카', timeAgo: '15분전', likes: 1, comments: 1 },
        { postId: 5, author: 'jeff93', date: '23.10 오사카', title: '오사카', content: '오사카', timeAgo: '15분전', likes: 1, comments: 1 },
        { postId: 6, author: 'jeff93', date: '23.10 오사카', title: '오사카', content: '오사카', timeAgo: '15분전', likes: 1, comments: 1 },
        // 추가 게시글 데이터
    ];

    const handlePostClick = (id) => {
        nav(`/readpost/${id}`);
    };

    return (
        <div className="freeboard-container">
            <header className="freeboard-header">
                <button className="back-button">←</button>
                <h1>제주도 전체</h1>
                <button className="write-button" onClick={()=>{nav("/page/writepostfb")}}>✏️</button>
            </header>
            <div className="filters">
                <button className="select-location">도시전체 ⌄</button>
                <button className="select-topic">여행시기 ⌄</button>
                <button className="select-topic">주제 ⌄</button>
                <label className="check-mypost">
                    <input type="checkbox" /> 여행중인 사람만
                </label>
            </div>
            <div className="posts-list">
                {posts.map(post => (
                    <div className="post" key={post.postId} onClick={() => handlePostClick(post.postId)}>
                        <div className="post-header">
                            <span className="post-author">{post.author}</span>
                            <span className="post-date">{post.timeAgo}</span>
                        </div>
                        <div className="post-content">
                            <h4>{post.title}</h4>
                            <p>{post.content}</p>
                        </div>
                        <div className="post-footer">
              <span className="post-reactions">
                <span>👍 {post.likes}</span>
                <span>💬 {post.comments}</span>
              </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FreeBoard;
