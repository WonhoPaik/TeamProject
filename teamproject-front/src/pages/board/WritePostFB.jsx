import React from 'react';
import './WritePostFB.css';
import {useNavigate} from "react-router-dom";

const WritePostFB = () => {
    const nav = useNavigate();


    return (
        <div className="write-post-container">
            <header className="write-post-header">
                <button className="back-button" onClick={() => {
                    nav(-1)
                }}>←
                </button>
                <h1>jeff93</h1>
                <button className="submit-button">등록</button>
            </header>
            <div className="profile-section">
                <img src="profile-picture-url" alt="Profile" className="profile-picture"/>
                <div className="profile-info">
                    <span className="profile-username">jeff93</span>
                    <span className="profile-location">23.10 오사카</span>
                </div>
            </div>
            <div className="tag-section">
                <button className="tag-button">동행</button>
                <button className="tag-button">날씨</button>
                <button className="tag-button">양도</button>
                <button className="tag-button">장소</button>
            </div>
            <div className="post-input-section">
                <input
                    type="text"
                    placeholder="제목을 입력해주세요"
                    className="post-title-input"
                />
                <div className="textarea-container">
                    <textarea
                        placeholder=""
                        className="post-content-input"
                    ></textarea>
                    <div className="textarea-placeholder">
                        · 다른 여행자들과 어떤 이야기를 나누고 싶으세요?<br/>
                        · 등록된 글은 검색엔진 결과에 노출될 수 있어요
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WritePostFB;
