import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import '../../css/admin/AdminLogin.css';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/admin/login', {email, password});
            // 로그인 성공 시
            setMessage('로그인 성공');
            setMessageType('success');
            // 토큰 저장 및 리디렉션
            localStorage.setItem('adminToken', response.data.token);
            navigate('/admin/dashboard');
        } catch (err) {
            setMessage('로그인 실패: 이메일 또는 비밀번호가 잘못되었습니다.');
            setMessageType('error');
        }
    };

    return (
        <div className="admin-login-container">
            <h2>관리자 로그인</h2>
            <form className="admin-login-form" onSubmit={handleSubmit}>
                {message && <p className={`message ${messageType}`}>{message}</p>}
                <div className="form-group">
                    <label htmlFor="email">이메일:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">비밀번호:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">로그인</button>
            </form>
        </div>
    );
};

export default AdminLogin;