import React, {useState, useEffect} from 'react';
import '../../css/BusinessProfile.css';

const BusinessProfile = () => {
    const [formData, setFormData] = useState({
        businessNumber: '',
        businessName: '',
        address1: '',
        address2: '',
        email: '',
        phone: '',
        businessLicense: '',
        ceoName: '',
        regDate: new Date().toISOString().split('T')[0],
        postalCode: '',
        agreePrivacy: false,
        agreeTerms: false
    })
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [preview, setPreview] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

//     Daum Postcode API 스크립트를 동적으로 로드합니다.
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


    // 초기 로딩 시 사업자 프로필 정보 가져오기(api 호출 필요) - 현재 임시데이터
    useEffect(() => {
        // 초기 로딩 시 사업자 프로필 정보 가져오기
        const fetchBusinessProfile = () => {
            setLoading(true);
            // 임시 데이터 설정
            const mockData = {
                businessNumber: '123-45-67890',
                businessName: 'Mock Business',
                address1: '123 Mock Street',
                address2: 'Suite 456',
                email: 'mockbusiness@example.com',
                phone: '010-1234-5678',
                businessLicense: '', // 실제 URL로 대체
                ceoName: 'John Doe',
                regDate: '2022-01-01T00:00:00Z',
                postalCode: '12345',
                agreePrivacy: true,
                agreeTerms: true
            };
            setFormData(mockData);
            setPreview(mockData.businessLicense);
            setLoading(false);
        };
        fetchBusinessProfile();
    }, []);

    // hadleChange 함수 : 입력 필드의 값이 변경될 때 호출되어 상태를 업데이트합니다.
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

    // handleSave 함수 : 프로필 정보를 저장합니다.
    const handleSave = (e) => {
        /* e.preventDefault();
         // 유효성 검사
         if (!formData.agreePrivacy || !formData.agreeTerms) {
             setErrors(prevErrors => ({
                 ...prevErrors,
                 agreements: '개인정보 처리 방침 및 이용 약관에 동의해야 합니다.'
             }));
             return;
         }
         setLoading(true);
         // 임시로 저장된 데이터를 콘솔에 출력
         console.log('저장된 데이터:', formData);
         alert('프로필 정보가 업데이트되었습니다.');
         setIsEditing(false);
         setLoading(false);*/
        setIsEditing(false);
        alert('프로필 정보가 업데이트되었습니다.');
    };

    // handlePostcode 함수 : 우편번호 검색 모달을 엽니다.
    const handlePostcode = () => {
        setModalIsOpen(true);
    };

    // handlePostcodeComplete 함수 : 우편번호 검색이 완료되면 호출됩니다.
    const handlePostcodeComplete = (data) => {
        // 주소와 우편번호 상태 업데이트
        setFormData(prevData => ({
            ...prevData,
            address1: data.roadAddress,
            postalCode: data.zonecode
        }));
        setModalIsOpen(false); // 모달 닫기
    };

    const handleDeleteAccount = async () => {
        if (window.confirm('정말로 회원 탈퇴를 하시겠습니까?')) {
            alert('회원 탈퇴가 완료되었습니다.');
        }
    };


    if (loading) return <p>로딩 중...</p>;
    // 위의 오류는 React에서 객체를 자식으로 렌더링하려고 할 때 발생합니다. 일반적으로, 이 문제는 컴포넌트가 렌더링할 수 없는 데이터를 반환하거나, errors 객체를 직접 렌더링하려고 할 때 발생합니다.
    // 1.	errors가 객체로 렌더링되지 않도록 하고, 대신 문자열 또는 배열로 렌더링되도록 수정합니다.
    // 2.	errors가 객체로 렌더링되어야 하는 경우, 해당 객체를 렌더링할 수 있는 방법을 찾아야 합니다.
    if (errors && typeof errors === 'string') return <p>{errors}</p>; // 에러가 문자열일 경우만 렌더링


    return (
        <div>
            <div className="business-profile-container">
                <h2>사업자 프로필</h2>
                <form className="business-profile-form" onSubmit={handleSave}>
                    {errors.submit && <p className="business-profile-error-message">{errors.submit}</p>}
                    <div className="business-profile-form-group">
                        <label htmlFor="email">이메일:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled={!isEditing}
                        />
                    </div>
                    <div className="business-profile-form-group">
                        <label htmlFor="ceoName">CEO 이름:</label>
                        <input
                            type="text"
                            id="ceoName"
                            name="ceoName"
                            value={formData.ceoName}
                            onChange={handleChange}
                            required
                            disabled={!isEditing}
                        />
                    </div>
                    <div className="business-profile-form-group">
                        <label htmlFor="businessNumber">사업자 등록번호:</label>
                        <input
                            type="text"
                            id="businessNumber"
                            name="businessNumber"
                            value={formData.businessNumber}
                            onChange={handleChange}
                            required
                            disabled={!isEditing}
                        />
                    </div>
                    <div className="business-profile-form-group">
                        <label htmlFor="businessName">사업자명:</label>
                        <input
                            type="text"
                            id="businessName"
                            name="businessName"
                            value={formData.businessName}
                            onChange={handleChange}
                            required
                            disabled={!isEditing}
                        />
                    </div>
                    <div className="business-profile-form-group">
                        <label htmlFor="phone">전화번호:</label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            disabled={!isEditing}
                        />
                    </div>
                    <div className="business-profile-form-group">
                        <label htmlFor="postalCode">우편번호:</label>
                        <div className="business-profile-post-input-btn">
                            <input
                                type="text"
                                id="postalCode"
                                name="postalCode"
                                value={formData.postalCode}
                                onChange={handleChange}
                                placeholder="우편번호"
                                readOnly={!isEditing}
                            />
                            {modalIsOpen && <div id="postcode-container" style={{height: '500px'}}/>}
                            <button className="business-profile-smallBtn" type="button" onClick={handlePostcode}
                                    disabled={!isEditing}>
                                우편번호 검색
                            </button>
                        </div>
                        {errors.postalCode &&
                            <span className="business-profile-error-message">{errors.postalCode}</span>}
                    </div>
                    <div className="business-profile-form-group">
                        <label htmlFor="address1">주소:</label>
                        <input
                            type="text"
                            id="address1"
                            name="address1"
                            value={formData.address1}
                            onChange={handleChange}
                            required
                            disabled={!isEditing}
                        />
                    </div>
                    <div className="business-profile-form-group">
                        <label htmlFor="address2">상세주소:</label>
                        <input
                            type="text"
                            id="address2"
                            name="address2"
                            value={formData.address2}
                            onChange={handleChange}
                            disabled={!isEditing}
                        />
                    </div>
                    <div className="business-profile-form-group">
                        <label htmlFor="businessLicense">사업자 등록증 사본:</label>
                        <input
                            type="file"
                            id="businessLicense"
                            name="businessLicense"
                            accept="image/*"
                            onChange={handleChange}
                            disabled={!isEditing}
                        />
                        {preview && (
                            <img
                                src={preview}
                                alt="Business License Preview"
                                style={{width: '150px', height: '150px', marginTop: '10px'}}
                            />
                        )}
                    </div>
                    <div className="business-profile-checkbox-group">
                        <label>
                            <input
                                type="checkbox"
                                name="agreePrivacy"
                                checked={formData.agreePrivacy}
                                onChange={handleChange}
                                disabled={!isEditing}
                            />
                            개인정보 처리 방침 동의
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="agreeTerms"
                                checked={formData.agreeTerms}
                                onChange={handleChange}
                                disabled={!isEditing}
                            />
                            이용약관 동의
                        </label>
                    </div>
                    <div className="business-profile-form-actions">
                        {isEditing ? (
                            <>
                                <button type="button" onClick={handleSave}>저장</button>
                                <button type="button" onClick={() => setIsEditing(false)}>취소</button>
                            </>
                        ) : (
                            <button type="button" onClick={() => setIsEditing(true)}>수정</button>
                        )}
                        <button className="business-profile-delete-button" onClick={handleDeleteAccount}>회원 탈퇴</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default BusinessProfile;