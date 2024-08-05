import React, {useState} from "react";
import '../../css/ProfilePic.css';
import basicImage from '../../css/images/basicImage.jpg';
import {VscDiffRenamed} from "react-icons/vsc";
import {Link} from "react-router-dom";

const ProfilePic = () => {
    const defaultProfilePic = basicImage; // 디폴트 이미지 URL

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        birthDate: '',
        profilePic: '',
        gender: '',
        country: '',
        marketing: false,
        address1: '',
        address2: '',
        postalCode: '',
        agreePrivacy: false,
        agreeTerms: false,
        points: 0,
        regDate: new Date().toISOString().split('T')[0],
    });

    const handleChange = (e) => {
        const {name, files} = e.target;

        if (files && files[0]) {
            const file = files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePreview(reader.result);
            };
            reader.readAsDataURL(file);
            setFormData({...formData, [name]: file});
        }
    };

    const [profilePreview, setProfilePreview] = useState(defaultProfilePic);

    const handleSubmit = (e) => {
        e.preventDefault();
        const {password, confirmPassword, agreePrivacy, agreeTerms} = formData;
        if (password !== confirmPassword) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }
        if (!agreePrivacy || !agreeTerms) {
            alert('개인정보 처리 방침과 이용 약관에 동의해주세요.');
            return;
        }
        console.log('회원가입 정보:', formData);
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="profilepic__form">
                <div className="profilepic-background"></div>
                <div className="profilepic-container">
                    <div className="profilepic-item">
                        <h2><i>로고</i>사이트 이름</h2>
                        <div className="profilepic-text-item">
                            <h2>Welcome! to our site</h2>
                            <p>대충 사이트 소개글 소셜 연동 등등 사항</p>
                            <div className="profilepic-social-icon">
                                <a href="#"><i className='bx bxl-facebook'></i></a>
                                <a href="#"><i className='bx bxl-twitter'></i></a>
                                <a href="#"><i className='bx bxl-youtube'></i></a>
                                <a href="#"><i className='bx bxl-instagram'></i></a>
                                <a href="#"><i className='bx bxl-linkedin'></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="profilepic-section">
                        <div className="profilepic-form-box profilepic-login">
                            <form onSubmit={handleSubmit}>
                                <label>프로필 사진</label>
                                <div className="profilepic-input-box">
                                    <span className="profilepic-icon">
                                        <input
                                            className="profilepic-file-input"
                                            type="file"
                                            name="profilePic"
                                            accept="image/*"
                                            onChange={handleChange}
                                        />
                                    </span>
                                </div>
                                {profilePreview && (
                                    <img
                                        src={profilePreview}
                                        alt="Profile Preview"
                                        style={{width: '250px', height: '250px', borderRadius: '100%'}}
                                    />
                                )}
                                <button className="profilepic-btn" type="submit">회원가입</button>
                                <Link to="/" className="profilepic-back-link">뒤로가기</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default ProfilePic;