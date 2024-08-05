import React, {useState} from 'react';
import '../../css/EmailVerificationModal.css';

const EmailVerificationModal = ({onClose, onVerify}) => {
    const [verificationCode, setVerificationCode] = useState('');

    const handleChange = (e) => {
        setVerificationCode(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onVerify(verificationCode);
    };

    return (
        <div className="emailv-modal-background">
            <div className="emailv-modal-container">
                <h2>이메일 인증</h2>
                <form onSubmit={handleSubmit}>
                    <div className="emailv-input-box">
                        <input
                            type="text"
                            name="verificationCode"
                            value={verificationCode}
                            onChange={handleChange}
                            required
                        />
                        <label>인증 코드</label>
                    </div>
                    <button className="emailv-btn" type="submit">확인</button>
                    <button className="emailv-btn" type="button" onClick={onClose}>닫기</button>
                </form>
            </div>
        </div>
    );
};

export default EmailVerificationModal;