import { useState } from 'react';
import axios from 'axios';
import './FoodReadMDForm.css';

const FoodReadMDForm = () => {
    // 각 입력 필드에 대한 상태 설정
    const [title, setTitle] = useState('');
    const [englishTitle, setEnglishTitle] = useState('');
    const [infotitle, setInfotitle] = useState('');
    const [subImageTitle1, setSubImageTitle1] = useState('');
    const [subImageTitle2, setSubImageTitle2] = useState('');
    const [subImageTitle3, setSubImageTitle3] = useState('');
    const [readContent1, setReadContent1] = useState('');
    const [readContent2, setReadContent2] = useState('');
    const [readContent3, setReadContent3] = useState('');
    const [mainPhoto, setMainPhoto] = useState(null);
    const [subPhoto1, setSubPhoto1] = useState(null);
    const [subPhoto2, setSubPhoto2] = useState(null);
    const [subPhoto3, setSubPhoto3] = useState(null);
    const [subPhoto4, setSubPhoto4] = useState(null);
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const handlePhotoChange = (e, setPhoto) => {
        setPhoto(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('title', title);
        formData.append('englishTitle', englishTitle);
        formData.append('infotitle', infotitle);
        formData.append('subImageTitle1', subImageTitle1);
        formData.append('subImageTitle2', subImageTitle2);
        formData.append('subImageTitle3', subImageTitle3);
        formData.append('readContent1', readContent1);
        formData.append('readContent2', readContent2);
        formData.append('readContent3', readContent3);
        formData.append('mainPhoto', mainPhoto);
        formData.append('subPhoto1', subPhoto1);
        formData.append('subPhoto2', subPhoto2);
        formData.append('subPhoto3', subPhoto3);
        formData.append('subPhoto4', subPhoto4);
        formData.append('address', address);
        formData.append('phone', phone);

        try {
            const response = await axios.post('/api/board', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('게시글 등록 성공:', response.data);
        } catch (error) {
            console.error('게시글 등록 실패:', error);
        }
    };

    return (
        <div className='FoodReadMDForm'>
            <div className="form-container">
                <h2>게시글 등록</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>제목:</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>제목(영어로):</label>
                        <input
                            type="text"
                            value={englishTitle}
                            onChange={(e) => setEnglishTitle(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>대표사진:</label>
                        <input
                            type="file"
                            onChange={(e) => handlePhotoChange(e, setMainPhoto)}
                            accept="image/*"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>내용 제목:</label>
                        <input
                            type="text"
                            value={infotitle}
                            onChange={(e) => setInfotitle(e.target.value)}
                            required
                        />
                    </div>

                    <h3>주요 볼거리</h3>
                    <div className="subImageGroup">
                        <div className="subshowlist">
                            <div className="form-group">
                                <label>서브사진1:</label>
                                <input
                                    type="file"
                                    onChange={(e) => handlePhotoChange(e, setSubPhoto1)}
                                    accept="image/*"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>제목:</label>
                                <input
                                    type="text"
                                    value={subImageTitle1}
                                    onChange={(e) => setSubImageTitle1(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>내용:</label>
                                <textarea
                                    value={readContent1}
                                    onChange={(e) => setReadContent1(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="subshowlist">
                            <div className="form-group">
                                <label>서브사진2:</label>
                                <input
                                    type="file"
                                    onChange={(e) => handlePhotoChange(e, setSubPhoto2)}
                                    accept="image/*"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>제목:</label>
                                <input
                                    type="text"
                                    value={subImageTitle2}
                                    onChange={(e) => setSubImageTitle2(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>내용:</label>
                                <textarea
                                    value={readContent2}
                                    onChange={(e) => setReadContent2(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="subshowlist">
                            <div className="form-group">
                                <label>서브사진3:</label>
                                <input
                                    type="file"
                                    onChange={(e) => handlePhotoChange(e, setSubPhoto3)}
                                    accept="image/*"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>제목:</label>
                                <input
                                    type="text"
                                    value={subImageTitle3}
                                    onChange={(e) => setSubImageTitle3(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>내용:</label>
                                <textarea
                                    value={readContent3}
                                    onChange={(e) => setReadContent3(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <h3>기본정보</h3>
                    <div className="form-group">
                        <label>사진:</label>
                        <input
                            type="file"
                            onChange={(e) => handlePhotoChange(e, setSubPhoto4)}
                            accept="image/*"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>주소:</label>
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>전화번호:</label>
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="submit-button">제출</button>
                </form>
                
                {/* 추가: 버튼 추가 */}
                <div className="button-group">
                    <button className="custom-button">홈으로 가기</button>
                    <button className="custom-button">수정</button>
                    <button className="custom-button">삭제</button>
                </div>
            </div>
        </div>
    );
};

export default FoodReadMDForm;
