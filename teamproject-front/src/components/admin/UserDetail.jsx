// 일단 보류 페이지 상세페이지 쓸지 없앨지 고민중
import React, {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import '../../css/admin/UserDetail.css';

const UserDetail = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // 여기서는 임의의 사용자 데이터를 사용하지만, 실제로는 API 호출을 통해 데이터를 가져와야 합니다.
        const mockUsers = [
            {
                id: 1,
                name: '홍길동',
                email: 'hong@example.com',
                password: 'password123',
                confirmPassword: 'password123',
                phone: '010-1234-5678',
                birthDate: '1990-01-01',
                profilePic: 'profile-pic-url', // 실제 URL로 대체
                gender: '남성',
                country: '한국',
                marketing: true,
                address1: '서울특별시 강남구',
                address2: '역삼동 123-45',
                postalCode: '12345',
                agreePrivacy: true,
                agreeTerms: true,
                points: 1000,
                regDate: '2022-01-01T00:00:00Z'
            }, {
                id: 2,
                name: '김철수',
                email: 'kim@example.com',
                password: 'password456',
                confirmPassword: 'password456',
                phone: '010-8765-4321',
                birthDate: '1985-05-05',
                profilePic: 'profile-pic-url', // 실제 URL로 대체
                gender: '남성',
                country: '한국',
                marketing: false,
                address1: '서울특별시 서초구',
                address2: '서초동 678-90',
                postalCode: '67890',
                agreePrivacy: true,
                agreeTerms: false,
                points: 500,
                regDate: '2023-01-01T00:00:00Z'
            },
            {
                id: 3,
                name: '이영희',
                email: 'lee@example.com',
                password: 'password789',
                confirmPassword: 'password789',
                phone: '010-2345-6789',
                birthDate: '1992-02-02',
                profilePic: 'profile-pic-url', // 실제 URL로 대체
                gender: '여성',
                country: '한국',
                marketing: true,
                address1: '서울특별시 마포구',
                address2: '합정동 101-11',
                postalCode: '11111',
                agreePrivacy: true,
                agreeTerms: true,
                points: 800,
                regDate: '2021-01-01T00:00:00Z'
            },
            {
                id: 4,
                name: '박영수',
                email: 'park@example.com',
                password: 'password012',
                confirmPassword: 'password012',
                phone: '010-3456-7890',
                birthDate: '1988-03-03',
                profilePic: 'profile-pic-url', // 실제 URL로 대체
                gender: '남성',
                country: '한국',
                marketing: false,
                address1: '서울특별시 송파구',
                address2: '잠실동 202-22',
                postalCode: '22222',
                agreePrivacy: true,
                agreeTerms: true,
                points: 200,
                regDate: '2020-01-01T00:00:00Z'
            },
            {
                id: 5,
                name: '최수지',
                email: 'choi@example.com',
                password: 'password345',
                confirmPassword: 'password345',
                phone: '010-4567-8901',
                birthDate: '1995-04-04',
                profilePic: 'profile-pic-url', // 실제 URL로 대체
                gender: '여성',
                country: '한국',
                marketing: true,
                address1: '서울특별시 강서구',
                address2: '화곡동 303-33',
                postalCode: '33333',
                agreePrivacy: true,
                agreeTerms: true,
                points: 900,
                regDate: '2019-01-01T00:00:00Z'
            },
            {
                id: 6,
                name: '정우성',
                email: 'jung@example.com',
                password: 'password678',
                confirmPassword: 'password678',
                phone: '010-5678-9012',
                birthDate: '1980-05-05',
                profilePic: 'profile-pic-url', // 실제 URL로 대체
                gender: '남성',
                country: '한국',
                marketing: false,
                address1: '서울특별시 영등포구',
                address2: '여의도동 404-44',
                postalCode: '44444',
                agreePrivacy: true,
                agreeTerms: true,
                points: 300,
                regDate: '2018-01-01T00:00:00Z'
            },
            {
                id: 7,
                name: '이효리',
                email: 'lee2@example.com',
                password: 'password901',
                confirmPassword: 'password901',
                phone: '010-6789-0123',
                birthDate: '1984-06-06',
                profilePic: 'profile-pic-url', // 실제 URL로 대체
                gender: '여성',
                country: '한국',
                marketing: true,
                address1: '서울특별시 성동구',
                address2: '성수동 505-55',
                postalCode: '55555',
                agreePrivacy: true,
                agreeTerms: true,
                points: 600,
                regDate: '2017-01-01T00:00:00Z'
            },
            {
                id: 8,
                name: '송중기',
                email: 'song@example.com',
                password: 'password234',
                confirmPassword: 'password234',
                phone: '010-7890-1234',
                birthDate: '1989-07-07',
                profilePic: 'profile-pic-url', // 실제 URL로 대체
                gender: '남성',
                country: '한국',
                marketing: false,
                address1: '서울특별시 중구',
                address2: '소공동 606-66',
                postalCode: '66666',
                agreePrivacy: true,
                agreeTerms: true,
                points: 700,
                regDate: '2016-01-01T00:00:00Z'
            },
            {
                id: 9,
                name: '장나라',
                email: 'jang@example.com',
                password: 'password567',
                confirmPassword: 'password567',
                phone: '010-8901-2345',
                birthDate: '1983-08-08',
                profilePic: 'profile-pic-url', // 실제 URL로 대체
                gender: '여성',
                country: '한국',
                marketing: true,
                address1: '서울특별시 동대문구',
                address2: '청량리동 707-77',
                postalCode: '77777',
                agreePrivacy: true,
                agreeTerms: true,
                points: 400,
                regDate: '2015-01-01T00:00:00Z'
            },
            {
                id: 10,
                name: '신동엽',
                email: 'shin@example.com',
                password: 'password890',
                confirmPassword: 'password890',
                phone: '010-9012-3456',
                birthDate: '1979-09-09',
                profilePic: 'profile-pic-url', // 실제 URL로 대체
                gender: '남성',
                country: '한국',
                marketing: false,
                address1: '서울특별시 종로구',
                address2: '종로1가 808-88',
                postalCode: '88888',
                agreePrivacy: true,
                agreeTerms: true,
                points: 500,
                regDate: '2014-01-01T00:00:00Z'
            },
            {
                id: 11,
                name: '아이유',
                email: 'iu@example.com',
                password: 'password1234',
                confirmPassword: 'password1234',
                phone: '010-0123-4567',
                birthDate: '1993-05-16',
                profilePic: 'profile-pic-url', // 실제 URL로 대체
                gender: '여성',
                country: '한국',
                marketing: true,
                address1: '서울특별시 강남구',
                address2: '압구정동 909-99',
                agreePrivacy: true,
                agreeTerms: true,
                points: 600,
                regDate: '2013-01-01T00:00:00Z'
            }
        ];

        const user = mockUsers.find(user => user.id === parseInt(id));
        if (user) {
            setUser(user);
        } else {
            setError('사용자를 찾을 수 없습니다.');
        }
        setLoading(false);
    }, [id]);

    if (loading) return <p>로딩 중...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="user-detail-container">
            <h2>사용자 상세 정보</h2>
            <div className="user-detail">
                <div className="profile-pic">
                    <img src={user.profilePic} alt="Profile"/>
                </div>
                <div className="info">
                    <p><strong>이름:</strong> {user.name}</p>
                    <p><strong>이메일:</strong> {user.email}</p>
                    <p><strong>비밀번호:</strong> {user.password}</p>
                    <p><strong>전화번호:</strong> {user.phone}</p>
                    <p><strong>생년월일:</strong> {user.birthDate}</p>
                    <p><strong>성별:</strong> {user.gender}</p>
                    <p><strong>국가:</strong> {user.country}</p>
                    <p><strong>주소:</strong> {user.address1} {user.address2}</p>
                    <p><strong>우편번호:</strong> {user.postalCode}</p>
                    <p><strong>마케팅 동의:</strong> {user.marketing ? '예' : '아니오'}</p>
                    <p><strong>개인정보 처리 방침 동의:</strong> {user.agreePrivacy ? '예' : '아니오'}</p>
                    <p><strong>이용 약관 동의:</strong> {user.agreeTerms ? '예' : '아니오'}</p>
                    <p><strong>포인트:</strong> {user.points}</p>
                    <p><strong>가입일:</strong> {new Date(user.regDate).toLocaleDateString()}</p>
                </div>
                <button onClick={() => navigate('/user-management')}>뒤로가기</button>
            </div>
        </div>
    );
};

export default UserDetail;