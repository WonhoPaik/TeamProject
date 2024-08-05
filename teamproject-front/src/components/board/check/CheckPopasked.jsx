import React, {useState} from 'react';
import './CheckPopasked.css';
import {useNavigate} from 'react-router-dom';

const CheckPopasked = () => {
    const [activeTab, setActiveTab] = useState('전체');
    const [selectedPosts, setSelectedPosts] = useState([]);
    const [searchType, setSearchType] = useState('title');
    const [searchQuery, setSearchQuery] = useState('');
    const postList = [
        // 게시글 데이터
        {id: 1, category: '공통', title: '계정을 잃어버렸어요.', author: '관리자'},
        {id: 2, category: '숙소', title: '숙소 예약 내역은 어디서 확인하나요?', author: '관리자'},
        {id: 3, category: '항공', title: '네이버/스카이스캐너를 통해 예약했습니다.', author: '관리자'},
        {id: 4, category: '숙소', title: '결제/영수증 1', author: '관리자'},
        {id: 5, category: '서비스 일반', title: '결제/영수증 4', author: '관리자'},
        {id: 6, category: '공통', title: '결제/영수증 122', author: '관리자'},
        // 추가 데이터
    ];

    const nav = useNavigate();

    const handleTabClick = (category) => {
        setActiveTab(category);
    };

    const handleCheckboxChange = (postId) => {
        setSelectedPosts(prevSelected =>
            prevSelected.includes(postId)
                ? prevSelected.filter(id => id !== postId)
                : [...prevSelected, postId]
        );
    };

    const handleDeleteSelected = () => {
        // 선택된 게시글 삭제 로직
        alert('선택된 게시글이 삭제되었습니다.');
        setSelectedPosts([]);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        // 검색 로직
        alert(`Searching for ${searchQuery} in ${searchType}`);
    };

    const filteredPosts = postList.filter(post =>
        activeTab === '전체' || post.category === activeTab
    ).filter(post =>
        searchType === 'title'
            ? post.title.includes(searchQuery)
            : post.author.includes(searchQuery)
    );

    return (
        <div className="admin-board-container">
            <header className="admin-board-header">
                <button className="back-button" onClick={() => {
                    nav(-1)
                }}>←
                </button>
                <h1>자주 묻는 질문 관리</h1>
                <form className="search-form" onSubmit={handleSearch}>
                    <select
                        value={searchType}
                        onChange={(e) => setSearchType(e.target.value)}
                    >
                        <option value="title">제목</option>
                        <option value="author">작성자</option>
                    </select>
                    <input
                        type="text"
                        placeholder="검색어를 입력하세요"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button type="submit">검색</button>
                </form>
            </header>
            <div className="admin-board-tabs">
                {['전체', 'BEST', '항공', '숙소', '서비스 일반', '결제/영수증', '공통'].map(category => (
                    <button
                        key={category}
                        className={`admin-board-tab ${activeTab === category ? 'active' : ''}`}
                        onClick={() => handleTabClick(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="admin-board-actions">
                <button className="create-popasked-button" onClick={() => {
                    nav("/admin/createpopasked")
                }}>작성</button>
                <button onClick={handleDeleteSelected}>삭제</button>
            </div>
            <div className="admin-board-posts">
                {filteredPosts.map(post => (
                    <div key={post.id} className="admin-board-post">
                        <input
                            type="checkbox"
                            checked={selectedPosts.includes(post.id)}
                            onChange={() => handleCheckboxChange(post.id)}
                        />
                        <span>{post.title}</span>
                        <button onClick={() => navigate(`/admin/editpopasked/${post.id}`)}>수정</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CheckPopasked;
