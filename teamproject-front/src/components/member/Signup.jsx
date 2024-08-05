import React, {useState, useEffect} from 'react';
import '../../css/Signup.css';
import {VscDiffRenamed} from "react-icons/vsc";
import {useNavigate} from 'react-router-dom';
import {MdDriveFileRenameOutline, MdEmail, MdOutlinePassword} from "react-icons/md";
import {FaPhone, FaAddressBook} from "react-icons/fa";
import {FaArrowRight} from "react-icons/fa6";
import axios from 'axios';
import EmailVerificationModal from './EmailVerificationModal.jsx';

const Signup = ({switchToLogin}) => {
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

    const [errors, setErrors] = useState({});
    const [profilePreview, setProfilePreview] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [emailVerificationOpen, setEmailVerificationOpen] = useState(false);
    const [emailVerified, setEmailVerified] = useState(false);
    const [emailButtonText, setEmailButtonText] = useState('이메일 인증'); // 새로운 상태 추가
    const navigate = useNavigate();

    useEffect(() => {
        if (!window.daum || !window.daum.Postcode) {
            const script = document.createElement('script');
            script.src = '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
            script.async = true;
            script.onload = () => {
                console.log('Daum Postcode API 로드 완료');
            };
            script.onerror = () => {
                console.error('Daum Postcode API 로드 실패');
            };
            document.body.appendChild(script);
        }
    }, []);

    const handleChange = (e) => {
        const {name, value, type, checked, files} = e.target;

        if (type === 'checkbox') {
            setFormData({...formData, [name]: checked});
        } else if (type === 'file') {
            const file = files[0];
            if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setProfilePreview(reader.result);
                };
                reader.readAsDataURL(file);
                setFormData({...formData, [name]: file});
            }
        } else {
            setFormData({...formData, [name]: value});
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const {
            name, email, phone, birthDate, gender,
            address1, address2, postalCode, password,
            confirmPassword, agreePrivacy, agreeTerms
        } = formData;

        let validationErrors = {};
        if (!name.trim()) validationErrors.name = '이름을 입력해 주세요.';
        if (!email.trim()) validationErrors.email = '이메일을 입력해 주세요.';
        if (!password.trim()) validationErrors.password = '비밀번호를 입력해 주세요.';
        if (!phone.trim()) validationErrors.phone = '전화번호를 입력해 주세요.';
        if (!birthDate.trim()) validationErrors.birthDate = '생년월일을 입력해 주세요.';
        if (!gender.trim()) validationErrors.gender = '성별을 선택해 주세요.';
        if (!address1.trim()) validationErrors.address1 = '주소를 입력해 주세요.';
        if (!postalCode.trim()) validationErrors.postalCode = '우편번호를 입력해 주세요.';
        if (!address2.trim()) validationErrors.address2 = '상세주소를 입력해 주세요.';
        if (password !== confirmPassword) validationErrors.confirmPassword = '비밀번호가 일치하지 않습니다.';
        if (!agreePrivacy || !agreeTerms) validationErrors.agreements = '개인정보 처리 방침과 이용 약관에 동의해주세요';

        if (Object.keys(validationErrors).length) {
            setErrors(validationErrors);
            return;
        }

        console.log('회원가입 정보:', formData);
        // API 호출 로직 추가
    };

    const handlePostcode = () => {
        setModalIsOpen(true);
    };

    const handleNextStep = () => {
        if (emailVerified) {
            navigate('/profilePic');
        } else {
            alert('이메일 인증을 완료해주세요.');
        }
    };

    const handlePostcodeComplete = (data) => {
        setFormData({
            ...formData,
            address1: data.roadAddress,
            postalCode: data.zonecode,
        });
        setModalIsOpen(false);
    };

    const handleEmailVerification = () => {
        // 여기에 이메일 인증 요청 로직 추가 (예: 이메일로 인증 코드 전송)
        setEmailVerificationOpen(true);
    };

    const handleVerifyCode = (code) => {
        // 여기에 인증 코드 검증 로직 추가
        if (code === '123456') { // 예시: 인증 코드가 '123456'인 경우
            setEmailVerified(true);
            setEmailButtonText('이메일 인증 완료'); // 인증 완료 후 텍스트 변경
            setEmailVerificationOpen(false);
            alert('이메일 인증이 완료되었습니다.');
        } else {
            alert('인증 코드가 올바르지 않습니다.');
        }
    };

    useEffect(() => {
        if (modalIsOpen && window.daum && window.daum.Postcode) {
            new window.daum.Postcode({
                oncomplete: handlePostcodeComplete,
                width: '100%',
                height: '100%'
            }).embed(document.getElementById('postcode-container'));
        }
    }, [modalIsOpen]);

    return (
        <>
            <div className="signup-background"></div>
            <div className="signup-container">
                <div className="signup-item">
                    <h2><i>로고</i>사이트 이름</h2>
                    <div className="signup-text-item">
                        <h2>회원가입 페이지</h2>
                        <p>사이트 소개글 및 소셜 미디어 링크 등</p>
                        <div className="signup-social-icon">
                            <a href="#"><i className='bx bxl-facebook'></i></a>
                            <a href="#"><i className='bx bxl-twitter'></i></a>
                            <a href="#"><i className='bx bxl-youtube'></i></a>
                            <a href="#"><i className='bx bxl-instagram'></i></a>
                            <a href="#"><i className='bx bxl-linkedin'></i></a>
                        </div>
                    </div>
                </div>
                <div className="signup-section">
                    <div className="signup-form-box">
                        <form onSubmit={handleSubmit}>
                            <h2>회원가입</h2>
                            <div className="signup-input-box">
                                <div className={"signup-post-input-btn"}>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    <button type="button" className="signup-smallBtn-postal"
                                            onClick={handleEmailVerification}>
                                        {emailButtonText} {/* 버튼 텍스트 동적 변경 */}
                                    </button>
                                    <label>Email</label>
                                </div>
                                {errors.email && <span className="signup-error-message">{errors.email}</span>}
                            </div>
                            <div className="signup-input-box">
                                <span className="signup-icon">
                                    <i><MdOutlinePassword/></i>
                                </span>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                <label>비밀번호</label>
                                {errors.password && <span className="signup-error-message">{errors.password}</span>}
                            </div>
                            <div className="signup-input-box">
                                <span className="signup-icon">
                                    <i><MdOutlinePassword/></i>
                                </span>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                />
                                <label>비밀번호 확인</label>
                                {errors.confirmPassword &&
                                    <span className="signup-error-message">{errors.confirmPassword}</span>}
                            </div>
                            <div className="signup-input-box">
                                <span className="signup-icon">
                                    <i><MdDriveFileRenameOutline/></i>
                                </span>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <label>이름</label>
                                {errors.name && <span className="signup-error-message">{errors.name}</span>}
                            </div>
                            <div className="signup-input-box">
                                <span className="signup-icon">
                                    <i><FaPhone/></i>
                                </span>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                                <label>전화번호</label>
                                {errors.phone && <span className="signup-error-message">{errors.phone}</span>}
                            </div>
                            <div className="signup-input-box">
                                <input
                                    type="date"
                                    name="birthDate"
                                    value={formData.birthDate}
                                    onChange={handleChange}
                                />
                                <label>생년월일</label>
                                {errors.birthDate && <span className="signup-error-message">{errors.birthDate}</span>}
                            </div>
                            <div className="signup-input-box-gender">
                                <label>성별</label>
                                <select
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    className="signup-smallBtn"
                                >
                                    <option value="">선택하세요</option>
                                    <option value="male">남성</option>
                                    <option value="female">여성</option>
                                    <option value="other">기타</option>
                                </select>
                                {errors.gender && <span className="signup-error-message">{errors.gender}</span>}
                            </div>
                            <div className="signup-input-box">
                                <div className="signup-post-input-btn">
                                    <input
                                        type="text"
                                        name="postalCode"
                                        value={formData.postalCode}
                                        onChange={handleChange}
                                        placeholder="우편번호"
                                        readOnly
                                    />
                                    <button className="signup-smallBtn-postal" type="button" onClick={handlePostcode}>
                                        우편번호 검색
                                    </button>
                                </div>
                                {errors.postalCode && <span className="signup-error-message">{errors.postalCode}</span>}
                            </div>
                            <div className="signup-input-box">
                                <span className="signup-icon">
                                    <i><FaAddressBook/></i>
                                </span>
                                <input
                                    type="text"
                                    name="address1"
                                    value={formData.address1}
                                    onChange={handleChange}
                                    placeholder="주소"
                                    readOnly
                                />
                                {errors.address1 && <span className="signup-error-message">{errors.address1}</span>}
                            </div>
                            <div className="signup-input-box">
                                <input
                                    type="text"
                                    name="address2"
                                    value={formData.address2}
                                    onChange={handleChange}
                                    placeholder="상세주소"
                                />
                                {errors.address2 && <span className="signup-error-message">{errors.address2}</span>}
                            </div>
                            <div className="signup-checkbox-group">
                                <label>
                                    <input
                                        type="checkbox"
                                        name="agreePrivacy"
                                        checked={formData.agreePrivacy}
                                        onChange={handleChange}
                                    />
                                    개인정보 처리 방침 동의
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="agreeTerms"
                                        checked={formData.agreeTerms}
                                        onChange={handleChange}
                                    />
                                    이용 약관 동의
                                </label>
                                {errors.agreements && <span className="signup-error-message">{errors.agreements}</span>}
                            </div>
                            <button className="signup-btn" type="submit" onClick={handleNextStep}>다음 단계로</button>
                            <div className="signup-login-link">
                                <p>
                                    이미 계정이 있으신가요?
                                    <a
                                        href="#"
                                        type="button"
                                        className="signup-login-link"
                                        onClick={switchToLogin}
                                    >
                                        로그인
                                    </a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
                {modalIsOpen && (
                    <div className="signup-postcode-modal">
                        <div id="postcode-container" style={{height: '100%', width: '100%'}}></div>
                        <button className="signup-modal-close-btn" onClick={() => setModalIsOpen(false)}>
                            닫기
                        </button>
                    </div>
                )}
                {emailVerificationOpen && (
                    <EmailVerificationModal
                        onClose={() => setEmailVerificationOpen(false)}
                        onVerify={handleVerifyCode}
                    />
                )}
            </div>
        </>
    );
};

export default Signup;
