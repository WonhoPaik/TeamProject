import React, {useState} from 'react';
import './NoticeBoard.css';
import {useNavigate} from "react-router-dom";

const NoticeBoard = () => {
    const nav = useNavigate()
    const [activeTab, setActiveTab] = useState('전체'); // 현재 활성화된 탭을 관리하는 상태
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 번호를 관리하는 상태
    const noticesPerPage = 5; // 한 페이지에 표시할 공지사항의 개수
    const pageNumbersPerGroup = 5; // 페이지 그룹당 표시할 페이지 번호 개수

    const notices = [
        {id: 1, category: '공지사항', title: '[항공] 제주항공 국대내선 시스템 점검 안내', date: '2024.07.30', isNew: true},
        {id: 2, category: '당첨자발표', title: '야놀자라이브 <에어프레미아> 이벤트 당첨자 발표', date: '2024.07.29', isNew: true},
        {id: 3, category: '당첨자발표', title: '야놀자라이브 <유탑 브랜드> 이벤트 당첨자 발표', date: '2024.07.26', isNew: true},
        {id: 4, category: '당첨자발표', title: '야놀자라이브 <휘닉스> 이벤트 당첨자 발표', date: '2024.07.25', isNew: true},
        {id: 5, category: '공지사항', title: '[항공] 제주항공 국대내선 시스템 점검 안내', date: '2024.07.30', isNew: true},
        {id: 6, category: '당첨자발표', title: '야놀자라이브 <에어프레미아> 이벤트 당첨자 발표', date: '2024.07.29', isNew: true},
        {id: 7, category: '당첨자발표', title: '야놀자라이브 <유탑 브랜드> 이벤트 당첨자 발표', date: '2024.07.26', isNew: true},
        {id: 8, category: '당첨자발표', title: '야놀자라이브 <휘닉스> 이벤트 당첨자 발표', date: '2024.07.25', isNew: true},
        {id: 9, category: '공지사항', title: '[항공] 제주항공 국대내선 시스템 점검 안내', date: '2024.07.30', isNew: true},
        {id: 10, category: '당첨자발표', title: '야놀자라이브 <에어프레미아> 이벤트 당첨자 발표', date: '2024.07.29', isNew: true},
        {id: 11, category: '당첨자발표', title: '야놀자라이브 <유탑 브랜드> 이벤트 당첨자 발표', date: '2024.07.26', isNew: true},
        {id: 12, category: '당첨자발표', title: '야놀자라이브 <휘닉스> 이벤트 당첨자 발표', date: '2024.07.25', isNew: true},
        {id: 13, category: '공지사항', title: '[항공] 제주항공 국대내선 시스템 점검 안내', date: '2024.07.30', isNew: true},
        {id: 14, category: '당첨자발표', title: '야놀자라이브 <에어프레미아> 이벤트 당첨자 발표', date: '2024.07.29', isNew: true},
        {id: 15, category: '당첨자발표', title: '야놀자라이브 <유탑 브랜드> 이벤트 당첨자 발표', date: '2024.07.26', isNew: true},
        {id: 16, category: '당첨자발표', title: '야놀자라이브 <휘닉스> 이벤트 당첨자 발표', date: '2024.07.25', isNew: true},
        {id: 17, category: '공지사항', title: '[항공] 제주항공 국대내선 시스템 점검 안내', date: '2024.07.30', isNew: true},
        {id: 18, category: '당첨자발표', title: '야놀자라이브 <에어프레미아> 이벤트 당첨자 발표', date: '2024.07.29', isNew: true},
        {id: 19, category: '당첨자발표', title: '야놀자라이브 <유탑 브랜드> 이벤트 당첨자 발표', date: '2024.07.26', isNew: true},
        {id: 20, category: '당첨자발표', title: '야놀자라이브 <휘닉스> 이벤트 당첨자 발표', date: '2024.07.25', isNew: true},
        {id: 21, category: '공지사항', title: '[항공] 제주항공 국대내선 시스템 점검 안내', date: '2024.07.30', isNew: true},
        {id: 22, category: '당첨자발표', title: '야놀자라이브 <에어프레미아> 이벤트 당첨자 발표', date: '2024.07.29', isNew: true},
        {id: 23, category: '당첨자발표', title: '야놀자라이브 <유탑 브랜드> 이벤트 당첨자 발표', date: '2024.07.26', isNew: true},
        {id: 24, category: '당첨자발표', title: '야놀자라이브 <휘닉스> 이벤트 당첨자 발표', date: '2024.07.25', isNew: true},
        {id: 25, category: '공지사항', title: '[항공] 제주항공 국대내선 시스템 점검 안내', date: '2024.07.30', isNew: true},
        {id: 26, category: '당첨자발표', title: '야놀자라이브 <에어프레미아> 이벤트 당첨자 발표', date: '2024.07.29', isNew: true},
        {id: 27, category: '당첨자발표', title: '야놀자라이브 <유탑 브랜드> 이벤트 당첨자 발표', date: '2024.07.26', isNew: true},
        {id: 28, category: '당첨자발표', title: '야놀자라이브 <휘닉스> 이벤트 당첨자 발표', date: '2024.07.25', isNew: true},
        {id: 29, category: '공지사항', title: '[항공] 제주항공 국대내선 시스템 점검 안내', date: '2024.07.30', isNew: true},
        {id: 30, category: '당첨자발표', title: '야놀자라이브 <에어프레미아> 이벤트 당첨자 발표', date: '2024.07.29', isNew: true},
        {id: 31, category: '당첨자발표', title: '야놀자라이브 <유탑 브랜드> 이벤트 당첨자 발표', date: '2024.07.26', isNew: true},
        {id: 32, category: '당첨자발표', title: '야놀자라이브 <휘닉스> 이벤트 당첨자 발표', date: '2024.07.25', isNew: true},
        // 추가 공지사항 데이터
    ];

    const filteredNotices = activeTab === '전체' ? notices : notices.filter(notice => notice.category === activeTab);

    const indexOfLastNotice = currentPage * noticesPerPage;
    const indexOfFirstNotice = indexOfLastNotice - noticesPerPage;
    const currentNotices = filteredNotices.slice(indexOfFirstNotice, indexOfLastNotice);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredNotices.length / noticesPerPage); i++) {
        pageNumbers.push(i);
    }

    const totalGroups = Math.ceil(pageNumbers.length / pageNumbersPerGroup);
    const currentGroup = Math.floor((currentPage - 1) / pageNumbersPerGroup);
    const startPage = currentGroup * pageNumbersPerGroup;
    const endPage = Math.min(startPage + pageNumbersPerGroup, pageNumbers.length);

    const nextPage = () => {
        if (currentPage < pageNumbers.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="notice-board-container">
            <header className="notice-board-header">
                <button className="back-button" onClick={()=>{nav(-1)}}>←</button>
                <h1>공지사항</h1>
                <button className="create-button" onClick={()=>{nav("/csbridge/writenotice")}}>작성</button>
            </header>
            <nav className="notice-board-tabs">
                {['전체', '공지사항', '당첨자발표'].map(tab => (
                    <button
                        key={tab}
                        className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => {
                            setActiveTab(tab);
                            setCurrentPage(1); // 탭을 변경할 때 페이지를 초기화
                        }}
                    >
                        {tab}
                    </button>
                ))}
            </nav>
            <div className="notice-list">
                {currentNotices.map(notice => (
                    <div key={notice.id} className="notice-item">
                        <div className="notice-title">
                            {notice.title}
                            {notice.isNew && <span className="new-badge">N</span>}
                        </div>
                        <div className="notice-date">{notice.date}</div>
                    </div>
                ))}
            </div>
            <nav className="pagination">
                <button
                    className="page-arrow"
                    onClick={() => paginate(1)}
                    disabled={currentPage === 1}
                >
                    ⏮️
                </button>
                <button
                    className="page-arrow"
                    onClick={prevPage}
                    disabled={currentPage === 1}
                >
                    ⬅️
                </button>
                {pageNumbers.slice(startPage, endPage).map(number => (
                    <button
                        key={number}
                        onClick={() => paginate(number)}
                        className={`page-number ${currentPage === number ? 'active' : ''}`}
                    >
                        {number}
                    </button>
                ))}
                <button
                    className="page-arrow"
                    onClick={nextPage}
                    disabled={currentPage === pageNumbers.length}
                >
                    ➡️
                </button>
                <button
                    className="page-arrow"
                    onClick={() => paginate(pageNumbers.length)}
                    disabled={currentPage === pageNumbers.length}
                >
                    ⏭️
                </button>
            </nav>
        </div>
    );
};

export default NoticeBoard;

