import React, {useState} from 'react';
import './CreatePopasked.css';
import {useNavigate} from 'react-router-dom';

const CreatePopasked = () => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('BEST');
    const [content, setContent] = useState('');
    const [file, setFile] = useState(null);
    const [termsAgreed, setTermsAgreed] = useState(false);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!title || !content) {
            alert('제목과 내용을 입력해주세요.');
            return;
        }
        // 제출 로직 추가
        alert('제출되었습니다.');
    };

    return (
        <div className="create-popasked-container">
            <header className="create-popasked-header">
                <button className="back-button" onClick={() => window.history.back()}>←</button>
                <h1>자주 묻는 질문 작성</h1>
            </header>
            <form className="create-popasked-form" onSubmit={handleSubmit}>
                <label className="form-label">
                    제목<span className="required">*</span>
                </label>
                <input
                    type="text"
                    className="form-input"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <label className="form-label">
                    유형<span className="required">*</span>
                </label>
                <select
                    className="form-input"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                >
                    <option value="BEST">BEST</option>
                    <option value="항공">항공</option>
                    <option value="숙소">숙소</option>
                    <option value="서비스 일반">서비스 일반</option>
                    <option value="결제/영수증">결제/영수증</option>
                    <option value="공통">공통</option>
                </select>
                <label className="form-label">
                    내용<span className="required">*</span>
                </label>
                <textarea
                    className="form-textarea"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                ></textarea>
                <div className="file-upload-section">
                    <div className="file-upload">
                        <input
                            type="file"
                            className="file-input"
                            onChange={handleFileChange}
                        />
                        <div className="file-upload-info">
                            <span>10MB 이내 모든 이미지 및 허용된 문서 (MS office, pdf, txt)와 zip 파일을 5개까지 첨부 가능합니다.</span>
                            {file && <span className="file-upload-count">{file.name}</span>}
                        </div>
                    </div>
                </div>
                <button type="submit" className="submit-button">등록</button>
            </form>
        </div>
    );
};

export default CreatePopasked;
