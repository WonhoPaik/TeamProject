import React, {useState, useEffect} from 'react';
import '../../css/Profile.css';
import {MdEmail, MdDriveFileRenameOutline} from 'react-icons/md';
import {FaPhone, FaAddressBook} from 'react-icons/fa';

const Profile = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        birthDate: '',
        gender: '',
        address1: '',
        address2: '',
        postalCode: '',
        profilePic: '',
        country: '',
        marketing: false,
        agreePrivacy: false,
        agreeTerms: false
    });
    const [isEditing, setIsEditing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);
    const [profilePreview, setProfilePreview] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        // 임시 데이터 사용
        const mockUserData = {
            name: '홍길동',
            email: 'hong@example.com',
            phone: '010-1234-5678',
            birthDate: '1990-01-01',
            gender: '남성',
            address1: '서울특별시 강남구',
            address2: '역삼동 123-45',
            postalCode: '12345',
            profilePic: 'profile-pic-url', // 실제 URL로 대체
            country: '한국',
            marketing: true,
            agreePrivacy: true,
            agreeTerms: true
        };
        setFormData(mockUserData);
        setProfilePreview(mockUserData.profilePic);
        setLoading(false);
    }, []);

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
            const file = files[0];
            if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setProfilePreview(reader.result);
                };
                reader.readAsDataURL(file);
                setFormData((prevData) => ({
                    ...prevData,
                    [name]: file
                }));
            }
        } else if (type === 'checkbox') {
            setFormData((prevData) => ({
                ...prevData,
                [name]: checked
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        }
    };

    const handleSave = async (e) => {
        e.preventDefault();
        setIsEditing(false);
        alert('프로필 정보가 업데이트되었습니다.');
        // 실제 API 호출로 대체 필요
    };

    const handlePostcode = () => {
        setModalIsOpen(true);
    };

    const handlePostcodeComplete = (data) => {
        setFormData((prevData) => ({
            ...prevData,
            address1: data.roadAddress,
            postalCode: data.zonecode
        }));
        setModalIsOpen(false);
    };

    const handleDeleteAccount = async () => {
        if (window.confirm('정말로 회원 탈퇴를 하시겠습니까?')) {
            alert('회원 탈퇴가 완료되었습니다.');
            // 로그아웃 처리 또는 홈 화면으로 이동 등 추가 작업
        }
    };

    if (loading) return <p>로딩 중...</p>;
    if (errors) return <p>{errors}</p>;

    return (
        <div className="profile-container">
            <h2>프로필 수정</h2>
            <form className="profile-form" onSubmit={handleSave}>
                {errors && <p className="profile-error-message">{errors}</p>}
                <div className="profile-form-group">
                    <label htmlFor="email">이메일:</label>
                    <div className="profile-input-with-icon">
                        <MdEmail className="profile-icon"/>
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
                </div>
                <div className="profile-form-group">
                    <label htmlFor="name">이름:</label>
                    <div className="profile-input-with-icon">
                        <MdDriveFileRenameOutline className="profile-icon"/>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            disabled={!isEditing}
                        />
                    </div>
                </div>
                <div className="profile-form-group">
                    <label htmlFor="phone">전화번호:</label>
                    <div className="profile-input-with-icon">
                        <FaPhone className="profile-icon"/>
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
                </div>
                <div className="profile-form-group">
                    <label>생년월일</label>
                    <input
                        type="date"
                        name="birthDate"
                        value={formData.birthDate}
                        onChange={handleChange}
                        disabled={!isEditing}
                    />
                    {errors && errors.birthDate && <span className="profile-error-message">{errors.birthDate}</span>}
                </div>

                <div className="profile-form-group">
                    <label>성별</label>
                    <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        disabled={!isEditing}
                    >
                        <option value="">선택하세요</option>
                        <option value="male">남성</option>
                        <option value="female">여성</option>
                        <option value="other">기타</option>
                    </select>
                    {errors && errors.gender && <span className="profile-error-message">{errors.gender}</span>}
                </div>
                <div className="profile-form-group">
                    <label htmlFor="postalCode">우편번호:</label>
                    <div className="profile-input-with-icon">
                        <input
                            type="text"
                            id="postalCode"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleChange}
                            placeholder="우편번호"
                            readOnly={!isEditing}
                        />
                        <button
                            className="profile-smallBtn"
                            type="button"
                            onClick={handlePostcode}
                            disabled={!isEditing}
                        >
                            우편번호 검색
                        </button>
                    </div>
                    {errors && errors.postalCode && <span className="profile-error-message">{errors.postalCode}</span>}
                </div>
                <div className="profile-form-group">
                    <label htmlFor="address1">주소:</label>
                    <div className="profile-input-with-icon">
                        <FaAddressBook className="profile-icon"/>
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
                </div>
                <div className="profile-form-group">
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
                <div className="profile-form-group">
                    <label htmlFor="profilePic">프로필 사진:</label>
                    <input
                        type="file"
                        id="profilePic"
                        name="profilePic"
                        accept="image/*"
                        onChange={handleChange}
                        disabled={!isEditing}
                    />
                    {profilePreview && (
                        <img
                            src={profilePreview}
                            alt="Profile Preview"
                            style={{width: '250px', height: '250px', borderRadius: '100%'}}
                        />
                    )}
                </div>
                <div className="profile-checkbox-group">
                    <label>
                        <input
                            type="checkbox"
                            name="marketing"
                            checked={formData.marketing}
                            onChange={handleChange}
                            disabled={!isEditing}
                        />
                        마케팅 동의
                    </label>
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
                        이용 약관 동의
                    </label>
                </div>
                <button
                    className="profile-btn"
                    type="button"
                    onClick={isEditing ? handleSave : () => setIsEditing(true)}
                >
                    {isEditing ? '저장' : '수정'}
                </button>
                {isEditing && (
                    <button
                        className="profile-btn profile-btn-cancel"
                        type="button"
                        onClick={() => setIsEditing(false)}
                    >
                        취소
                    </button>
                )}
                <button
                    className="profile-btn profile-btn-delete"
                    type="button"
                    onClick={handleDeleteAccount}
                >
                    회원 탈퇴
                </button>
            </form>
            {modalIsOpen && (
                <div className="signup-postcode-modal">
                    <div id="postcode-container" style={{height: '100%', width: '100%'}}></div>
                    <button className="signup-modal-close-btn" onClick={() => setModalIsOpen(false)}>
                        닫기
                    </button>
                </div>
            )}
        </div>
    );
};

export default Profile;