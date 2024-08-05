import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './InquiryHistory.css';

const InquiryHistory = () => {
    const [inquiries, setInquiries] = useState([]);
    const nav = useNavigate();


    return (
        <div className="inquiry-history-container">
            <header className="inquiry-history-header">
                <button className="back-button" onClick={()=>{nav(-1)}}>←</button>
                <h1>내 문의 내역</h1>
                <button className="inquiry-button" onClick={()=>{nav("/csbridge/inquiry")}}>문의하기</button>
            </header>
            <nav className="inquiry-tabs">
                <button className="tab-button selected">항공</button>
                <button className="tab-button">숙소</button>
                <button className="tab-button">투어티켓</button>
                <button className="tab-button">서비스 일반</button>
            </nav>
            {inquiries.length > 0 ? (
                <div className="inquiry-list">
                    <ul>
                        {inquiries.map((inquiry, index) => (
                            <li key={index}>문의글 {index + 1}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div className="inquiry-empty-state">
                    <div className="empty-icon">✏️</div>
                    <p>문의하신 내역이 없습니다.</p>
                    <p>궁금한 내용은 상단의 문의하기를 클릭하여 문의해주세요.</p>
                </div>
            )}
        </div>
    );
};

export default InquiryHistory;
