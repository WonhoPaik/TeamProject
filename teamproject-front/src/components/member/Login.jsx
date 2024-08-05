import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate를 사용하여 페이지 이동 처리
import { MdEmail, MdOutlinePassword } from "react-icons/md";
import '../../css/Login.css';
import axios from "axios";
import Popup from "./Popup.jsx";
import { useDispatch } from 'react-redux'; // useDispatch를 사용하여 Redux 액션 디스패치
import { login } from '../../slices/authSlice.jsx'; // login 액션 가져오기

const Login = ({ switchToSignup }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');
    const [isBusiness, setIsBusiness] = useState(false); // 사업자 로그인 여부 상태 관리, 기본값은 일반회원
    const dispatch = useDispatch(); // Redux dispatch 함수 가져오기
    const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate 사용

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('로그인 정보:', { email, password });

        try {
            const response = await axios.post('/api/login', { email, password });
            console.log('성공 응답:', response.data);

            // 성공적으로 로그인된 경우
            setMessage('로그인 성공');
            setMessageType('success');

            // 응답 데이터 처리 (예: 토큰 저장, 리디렉션 등)
            dispatch(login(response.data.token)); // Redux 상태 업데이트
            navigate('/home'); // 로그인 후 이동할 페이지
        } catch (err) {
            console.error('로그인 오류:', err);
            // 로그인 실패 시
            if (err.response && err.response.status === 401) {
                setMessage('이메일 또는 비밀번호가 잘못되었습니다.');
                setMessageType('error');
            } else if (err.response && err.response.status === 500) {
                setMessage('서버 오류가 발생했습니다. 나중에 다시 시도해 주세요.');
                setMessageType('error');
            } else {
                setMessage('알 수 없는 오류가 발생했습니다.');
                setMessageType('error');
            }
        }
    };

    const closePopup = () => {
        setMessage('');
        setMessageType('');
    };

    return (
        <>
            <div>
                <Popup message={message} type={messageType} onClose={closePopup} />
                <form onSubmit={handleSubmit} className="custom-login__form">
                    <div className="custom-background"></div>
                    <div className="custom-container">
                        <div className="custom-item">
                            <h2><i>로고</i>사이트 이름</h2>
                            <div className="custom-text-item">
                                <h2>Welcome! to our site</h2>
                                <p>대충 사이트 소개글 소셜 연동 등등 사항</p>
                                <div className="custom-social-icon">
                                    <a href="#"><i className='bx bxl-facebook'></i></a>
                                    <a href="#"><i className='bx bxl-twitter'></i></a>
                                    <a href="#"><i className='bx bxl-youtube'></i></a>
                                    <a href="#"><i className='bx bxl-instagram'></i></a>
                                    <a href="#"><i className='bx bxl-linkedin'></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="custom-login-section">
                            <div className="custom-form-box custom-login">
                                <div action="">
                                    <h2>{isBusiness ? '사업자 로그인' : '로그인'}</h2> {/* 사업자/일반 로그인 타이틀 */}
                                    <div className="custom-toggle-buttons">
                                        <button type="button" onClick={() => setIsBusiness(false)}
                                                className={!isBusiness ? 'active' : ''}>회원
                                        </button>
                                        <button type="button" onClick={() => setIsBusiness(true)}
                                                className={isBusiness ? 'active' : ''}>사업자
                                        </button>
                                    </div>
                                    <div className="custom-input-box">
                                        <span className="custom-icon">
                                            <i><MdEmail /></i>
                                        </span>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                        <label>Email</label>
                                    </div>
                                    <div className="custom-input-box">
                                        <span className="custom-icon">
                                            <i><MdOutlinePassword /></i>
                                        </span>
                                        <input
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                        <label>비밀번호</label>
                                    </div>
                                    <div className="custom-remember-password">
                                        <label><input type="checkbox" />로그인 상태 유지</label>
                                        <a href="#">아이디 찾기</a>
                                    </div>
                                    <button className="custom-btn">로그인</button>
                                    <div className="custom-create-account">
                                        <p>
                                            계정이 없으신가요?
                                            <a
                                                href="#"
                                                type="button"
                                                className="custom-register-link"
                                                onClick={switchToSignup}
                                            >
                                                회원가입
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;