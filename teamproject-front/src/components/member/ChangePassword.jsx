import React, { useState } from 'react';
import '../../css/ChangePassword.css';

const ChangePassword = () => {
    const [formData, setFormData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(preData => ({
            ...preData,
            [name]: value
        }));
    };

    const validation = () => {
        const newErrors = {};
        if (!formData.currentPassword) newErrors.currentPassword = '현재 비밀번호를 입력해주세요.';
        if (!formData.newPassword) newErrors.newPassword = '새 비밀번호를 입력해주세요.';
        if (formData.newPassword !== formData.confirmPassword) newErrors.confirmPassword = '새 비밀번호와 비밀번호 확인이 일치하지 않습니다.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validation()) return;

        try {
            // 실제 비밀번호 변경 API 호출을 위한 코드
            // const response = await axios.post('/api/change-password', formData);
            // if (response.data.success) {
            //     setSuccessMessage('비밀번호가 성공적으로 변경되었습니다.');
            // }

            // 테스트용 성공 메시지 설정
            setSuccessMessage('비밀번호가 성공적으로 변경되었습니다.');
        } catch (error) {
            console.error('비밀번호 변경 오류', error);
        }
    };

    return (
        <div className="changepw-container">
            <div className="changepw-background"></div>
            <div className="changepw-content">
                <div className="changepw-item">
                    <h2><i>로고</i>사이트 이름</h2>
                    <div className="changepw-text-item">
                        <h2>Welcome! to our site</h2>
                        <p>대충 사이트 소개글 소셜 연동 등등 사항</p>
                        <div className="changepw-social-icon">
                            <a href="#"><i className='bx bxl-facebook'></i></a>
                            <a href="#"><i className='bx bxl-twitter'></i></a>
                            <a href="#"><i className='bx bxl-youtube'></i></a>
                            <a href="#"><i className='bx bxl-instagram'></i></a>
                            <a href="#"><i className='bx bxl-linkedin'></i></a>
                        </div>
                    </div>
                </div>
                <div className="changepw-section">
                    <div className="changepw-form-box">
                        <div className="changepw-change-password-container">
                            <h2>비밀번호 변경</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="changepw-input-box">
                                    <label htmlFor="currentPassword">현재 비밀번호</label>
                                    <input
                                        type="password"
                                        id="currentPassword"
                                        name="currentPassword"
                                        value={formData.currentPassword}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.currentPassword &&
                                        <span className="changepw-error-message">{errors.currentPassword}</span>}
                                </div>
                                <div className="changepw-input-box">
                                    <label htmlFor="newPassword">새 비밀번호</label>
                                    <input
                                        type="password"
                                        id="newPassword"
                                        name="newPassword"
                                        value={formData.newPassword}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.newPassword && <span className="changepw-error-message">{errors.newPassword}</span>}
                                </div>
                                <div className="changepw-input-box">
                                    <label htmlFor="confirmPassword">새 비밀번호 확인</label>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.confirmPassword &&
                                        <span className="changepw-error-message">{errors.confirmPassword}</span>}
                                </div>
                                <button type="submit" className="changepw-btn">비밀번호 변경</button>
                                {successMessage && <p className="changepw-success-message">{successMessage}</p>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;