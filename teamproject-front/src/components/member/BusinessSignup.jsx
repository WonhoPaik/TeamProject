import React, {useEffect, useState} from "react";
// import axios from "axios";
import '../../css/BusinessSignup.css';

const BusinessSignup = () => {
    const [formData, setFormData] = useState({
        businessNumber: '',
        businessName: '',
        address1: '',
        address2: '',
        email: '',
        phone: '',
        businessLicense: '',
        ceoName: '',
        password: '',
        passwordConfirm: '',
        regDate: new Date().toISOString().split('T')[0],
        postalCode: '',
        agreePrivacy: false,
        agreeTerms: false,
        agreeMarketing: false
    });

    // 오류 상태 객체로 변경/`errors`를 객체로 설정하여 다양한 오류 메시지를 관리할 수 있도록 수정했습니다.
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [preview, setPreview] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    // Daum PostCode API 스크립트 로드
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

    useEffect(() => {
        if (modalIsOpen && window.daum && window.daum.Postcode) {
            new window.daum.Postcode({
                oncomplete: handlePostcodeComplete,
                width: '100%',
                height: '100%'
            }).embed(document.getElementById('postcode-container'));
        }
    }, [modalIsOpen]);

    const handleChange = (e) => {
        const {name, value, type, checked, files} = e.target;
        if (type === 'file') {
            // 파일 입력 처리
            const file = files[0];
            if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setPreview(reader.result);
                };
                reader.readAsDataURL(file);
                setFormData(prevData => ({
                    ...prevData,
                    [name]: file
                }));
            }
        } else if (type === 'checkbox') {
            // 체크박스 입력 처리
            setFormData(prevData => ({
                ...prevData,
                [name]: checked
            }));
        } else {
            // 일반 텍스트 입력 처리
            setFormData(prevData => ({
                ...prevData,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 비밀번호 확인
        if (formData.password !== formData.passwordConfirm) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }
        // 체크박스 동의 확인
        if (!formData.agreePrivacy || !formData.agreeTerms) {
            setErrors(prevErrors => ({
                ...prevErrors,
                agreements: '개인정보 처리 방침 및 이용 약관에 동의해야 합니다.'
            }));
            return;
        }
        setLoading(true);
        const formDataToSend = new FormData();
        Object.keys(formData).forEach(key => {
            formDataToSend.append(key, formData[key]);
        });
        // axios.post('/api/business/signup', formDataToSend, {
        //     headers: {
        //         'Content-Type': 'multipart/form-data'
        //     }
        // })
        //     .then(response => {
        //         alert('사업자 회원가입이 완료되었습니다.');
        //         setLoading(false);
        //         // 추가 작업 (예: 리디렉션)
        //     })
        //     .catch(err => {
        //         setErrors({ ...errors, submit: '회원가입 중 오류가 발생했습니다.' });
        //         setLoading(false);
        //     });
    };

    const handlePostcode = () => {
        setModalIsOpen(true);
    };

    const handlePostcodeComplete = (data) => {
        // 주소와 우편번호 상태 업데이트
        setFormData(prevData => ({
            ...prevData,
            address1: data.roadAddress,
            postalCode: data.zonecode
        }));
        setModalIsOpen(false); // 모달 닫기
    };

    return (
        <div>
            <div className="business-signup-container">
                <h2>사업자 회원가입</h2>
                <form className="business-signup-form" onSubmit={handleSubmit}>
                    {errors.submit && <p className="error-message">{errors.submit}</p>}
                    <div className="form-group">
                        <label htmlFor="email">이메일:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">비밀번호:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordConfirm">비밀번호 확인:</label>
                        <input
                            type="password"
                            id="passwordConfirm"
                            name="passwordConfirm"
                            value={formData.passwordConfirm}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ceoName">CEO 이름:</label>
                        <input
                            type="text"
                            id="ceoName"
                            name="ceoName"
                            value={formData.ceoName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="businessNumber">사업자 등록번호:</label>
                        <input
                            type="text"
                            id="businessNumber"
                            name="businessNumber"
                            value={formData.businessNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="businessName">사업자명:</label>
                        <input
                            type="text"
                            id="businessName"
                            name="businessName"
                            value={formData.businessName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">전화번호:</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="postalCode">우편번호:</label>
                        <div className="post-input-btn">
                            <input
                                type="text"
                                id="postalCode"
                                name="postalCode"
                                value={formData.postalCode}
                                onChange={handleChange}
                                placeholder="우편번호"
                                readOnly
                            />
                            {modalIsOpen && <div id="postcode-container" style={{height: '500px'}}/>}

                            <button className="smallBtn" type="button" onClick={handlePostcode}>
                                우편번호 검색
                            </button>
                        </div>
                        {errors.postalCode && <span className="error-message">{errors.postalCode}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="address1">주소:</label>
                        <input
                            type="text"
                            id="address1"
                            name="address1"
                            value={formData.address1}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address2">상세주소:</label>
                        <input
                            type="text"
                            id="address2"
                            name="address2"
                            value={formData.address2}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="businessLicense">사업자 등록증 사본:</label>
                        <input
                            type="file"
                            id="businessLicense"
                            name="businessLicense"
                            accept="image/*"
                            onChange={handleChange}
                        />
                        {preview && <img src={preview} alt="Business License Preview"
                                         style={{width: '150px', height: '150px', marginTop: '10px'}}/>}
                    </div>
                    <div className="checkbox-group">
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
                                name="agreeMarketing"
                                checked={formData.agreeMarketing}
                                onChange={handleChange}
                            />
                            마케팅 동의
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="agreeTerms"
                                checked={formData.agreeTerms}
                                onChange={handleChange}
                                // disabled={!isEditing}
                            />
                            이용 약관 동의
                        </label>
                        {errors.agreements && <span className="error-message">{errors.agreements}</span>}
                    </div>
                    <button type="submit" disabled={loading}>
                        {loading ? '가입 중...' : '회원가입'}
                    </button>
                </form>
            </div>
        </div>
    );
};
export default BusinessSignup;