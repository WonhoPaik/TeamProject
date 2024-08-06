import { useState } from 'react';
import axios from 'axios';
import './ReviewMDForm.css';

const ReviewMDForm = () => {
    // 각 입력 필드에 대한 상태 설정
    const [title, setTitle] = useState('');
    const [content1, setContent1] = useState('');
    const [infotitle, setInfotitle] = useState('');
    const [subImageTitle1, setSubImageTitle1] = useState('');
    const [subImageTitle2, setSubImageTitle2] = useState('');
    const [content2, setContent2] = useState('');
    const [content3, setContent3] = useState('');
    const [mainPhoto, setMainPhoto] = useState(null);
    const [subPhoto1, setSubPhoto1] = useState(null);
    const [subPhoto2, setSubPhoto2] = useState(null);

    const handlePhotoChange = (e, setPhoto) => {
        setPhoto(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('title', title);
        formData.append('infotitle', infotitle);
        formData.append('subImageTitle1', subImageTitle1);
        formData.append('subImageTitle2', subImageTitle2);
        formData.append('content1', content1);
        formData.append('content2', content2);
        formData.append('content3', content3);
        formData.append('mainPhoto', mainPhoto);
        formData.append('subPhoto1', subPhoto1);
        formData.append('subPhoto2', subPhoto2);

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
        <div className='ReviewMDForm'>
            <div className="form-container">
                <h2>게시글 등록</h2>
                <form >
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

                    <div className="form-group">
                        <label>내용:</label>
                        <textarea
                            value={content1}
                            onChange={(e) => setContent1(e.target.value)}
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
                                    value={content2}
                                    onChange={(e) => setContent2(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="subshowlist2">
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
                                    value={content3}
                                    onChange={(e) => setContent3(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div className='button'>
                    <button className="custom-button">홈으로 가기</button>
                    <button className="custom-button">수정</button>
                    <button className="custom-button">삭제</button>
                    </div>
                </form>

              
            </div>
        </div>
    );
};

export default ReviewMDForm;
