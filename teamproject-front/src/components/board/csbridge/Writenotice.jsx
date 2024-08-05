import React from 'react';
import './Writenotice.css';
import {useNavigate} from "react-router-dom";

const WriteNotice = () => {
    const nav = useNavigate();
    return (
        <div className="writenotice-container">
            <header className="writenotice-header">
                <button className="back-button" onClick={()=>{nav(-1)}}>←</button>
                <h1>공지 사항</h1>
            </header>
            <form className="writenotice-form">

                <label htmlFor="writenotice-title" className="form-label">문의 내용 <span className="required">*</span></label>
                <input type="text" id="writenotice-title" className="form-input" placeholder="제목을 입력하세요 (최대 255자)" maxLength="255" required />

                <textarea id="writenotice-content" className="form-textarea" placeholder="문의내용을 입력해주세요" rows="10" required></textarea>

                <div className="file-upload-section">
                    <label className="form-label">첨부파일</label>
                    <div className="file-upload">
                        <input type="file" id="file-upload" className="file-input" multiple />
                        <div className="file-upload-info">
                            <span>10MB 이내 모든 이미지 및 허용된 문서 (MS office, pdf, txt)와 zip파일을 5개까지 첨부가능합니다.</span>
                            <span className="file-upload-count">0 / 5</span>
                        </div>
                    </div>
                </div>

                {/*<div className="terms">*/}
                {/*    <p>트리플 고객센터 정보수집 규정을 모두 읽었으며 이에 동의합니다.</p>*/}
                {/*    <div className="terms-links">*/}
                {/*        <label><input type="checkbox" required /> 개인정보 수집 및 활용에 동의합니다.</label>*/}
                {/*        <label><input type="checkbox" required /> 개인정보 제3자(토스트) 제공에 동의합니다.</label>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <button type="submit" className="submit-button">등록하기</button>
            </form>
        </div>
    );
};

export default WriteNotice;
