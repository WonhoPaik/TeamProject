import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import '../../css/admin/UserManagement.css';

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const mockUsers = [
            {
                id: 1,
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
                agreeTerms: true,
                points: 1000,
                regDate: '2022-01-01T00:00:00Z'
            },
            {
                id: 2,
                name: '김철수',
                email: 'kim@example.com',
                phone: '010-8765-4321',
                birthDate: '1985-05-05',
                gender: '남성',
                address1: '서울특별시 서초구',
                address2: '서초동 678-90',
                postalCode: '67890',
                profilePic: 'profile-pic-url', // 실제 URL로 대체
                country: '한국',
                marketing: false,
                agreePrivacy: true,
                agreeTerms: false,
                points: 500,
                regDate: '2023-01-01T00:00:00Z'
            },
            {
                id: 3,
                name: '이영희',
                email: 'lee@example.com',
                phone: '010-2345-6789',
                birthDate: '1992-02-02',
                gender: '여성',
                address1: '서울특별시 마포구',
                address2: '합정동 101-11',
                postalCode: '11111',
                profilePic: 'profile-pic-url', // 실제 URL로 대체
                country: '한국',
                marketing: true,
                agreePrivacy: true,
                agreeTerms: true,
                points: 800,
                regDate: '2021-01-01T00:00:00Z'
            },
            {
                id: 4,
                name: '박영수',
                email: 'park@example.com',
                phone: '010-3456-7890',
                birthDate: '1988-03-03',
                gender: '남성',
                address1: '서울특별시 송파구',
                address2: '잠실동 202-22',
                postalCode: '22222',
                profilePic: 'profile-pic-url', // 실제 URL로 대체
                country: '한국',
                marketing: false,
                agreePrivacy: true,
                agreeTerms: true,
                points: 200,
                regDate: '2020-01-01T00:00:00Z'
            },
            {
                id: 5,
                name: '최수지',
                email: 'choi@example.com',
                phone: '010-4567-8901',
                birthDate: '1995-04-04',
                gender: '여성',
                address1: '서울특별시 강서구',
                address2: '화곡동 303-33',
                postalCode: '33333',
                profilePic: 'profile-pic-url', // 실제 URL로 대체
                country: '한국',
                marketing: true,
                agreePrivacy: true,
                agreeTerms: true,
                points: 900,
                regDate: '2019-01-01T00:00:00Z'
            },
            {
                id: 6,
                name: '정우성',
                email: 'jung@example.com',
                phone: '010-5678-9012',
                birthDate: '1980-05-05',
                gender: '남성',
                address1: '서울특별시 영등포구',
                address2: '여의도동 404-44',
                postalCode: '44444',
                profilePic: 'profile-pic-url', // 실제 URL로 대체
                country: '한국',
                marketing: false,
                agreePrivacy: true,
                agreeTerms: true,
                points: 300,
                regDate: '2018-01-01T00:00:00Z'
            },
            {
                id: 7,
                name: '이효리',
                email: 'lee2@example.com',
                phone: '010-6789-0123',
                birthDate: '1984-06-06',
                gender: '여성',
                address1: '서울특별시 성동구',
                address2: '성수동 505-55',
                postalCode: '55555',
                profilePic: 'profile-pic-url', // 실제 URL로 대체
                country: '한국',
                marketing: true,
                agreePrivacy: true,
                agreeTerms: true,
                points: 600,
                regDate: '2017-01-01T00:00:00Z'
            },
            {
                id: 8,
                name: '송중기',
                email: 'song@example.com',
                phone: '010-7890-1234',
                birthDate: '1989-07-07',
                gender: '남성',
                address1: '서울특별시 중구',
                address2: '소공동 606-66',
                postalCode: '66666',
                profilePic: 'profile-pic-url', // 실제 URL로 대체
                country: '한국',
                marketing: false,
                agreePrivacy: true,
                agreeTerms: true,
                points: 700,
                regDate: '2016-01-01T00:00:00Z'
            },
            {
                id: 9,
                name: '장나라',
                email: 'jang@example.com',
                phone: '010-8901-2345',
                birthDate: '1983-08-08',
                gender: '여성',
                address1: '서울특별시 동대문구',
                address2: '청량리동 707-77',
                postalCode: '77777',
                profilePic: 'profile-pic-url', // 실제 URL로 대체
                country: '한국',
                marketing: true,
                agreePrivacy: true,
                agreeTerms: true,
                points: 400,
                regDate: '2015-01-01T00:00:00Z'
            },
            {
                id: 10,
                name: '신동엽',
                email: 'shin@example.com',
                phone: '010-9012-3456',
                birthDate: '1979-09-09',
                gender: '남성',
                address1: '서울특별시 종로구',
                address2: '종로1가 808-88',
                postalCode: '88888',
                profilePic: 'profile-pic-url', // 실제 URL로 대체
                country: '한국',
                marketing: false,
                agreePrivacy: true,
                agreeTerms: true,
                points: 500,
                regDate: '2014-01-01T00:00:00Z'
            },
            {
                id: 11,
                name: '아이유',
                email: 'iu@example.com',
                phone: '010-0123-4567',
                birthDate: '1993-05-16',
                gender: '여성',
                address1: '서울특별시 강남구',
                address2: '압구정동 909-99',
                postalCode: '12345',
                profilePic: 'profile-pic-url', // 실제 URL로 대체
                country: '한국',
                marketing: true,
                agreePrivacy: true,
                agreeTerms: true,
                points: 600,
                regDate: '2013-01-01T00:00:00Z',
                role: '사용자' // 사용자 권한
            }
            // Mock user data here
        ];
        setUsers(mockUsers);
        setLoading(false);
    }, []);

    const handleDelete = (id) => {
        if (window.confirm('정말로 이 사용자를 삭제하시겠습니까?')) {
            setUsers(users.filter(user => user.id !== id));
        }
    }

    const handleBlock = (id) => {
        if (window.confirm('정말로 이 사용자를 차단하시겠습니까?')) {
            setUsers(users.map(user => user.id === id ? {...user, blocked: true} : user));
        }
    }

    const handleRoleChange = async (id, newRole) => {
        setUsers(prevUsers => prevUsers.map(user => user.id === id ? {...user, role: newRole} : user));
    }

    if (loading) return <p>로딩 중...</p>
    if (error) return <p>오류 발생: {error}</p>

    return (
        <div className="usermgmt-widget">
            <h2>사용자 관리</h2>
            <table className="usermgmt-table">
                <thead>
                <tr>
                    <th>이름</th>
                    <th>이메일</th>
                    <th>권한</th>
                    <th>전화번호</th>
                    <th>생년월일</th>
                    <th>성별</th>
                    <th>이용 약관 동의</th>
                    <th>상세 정보</th>
                    <th>삭제</th>
                    <th>차단</th>
                    <th>가입일</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <select
                                value={user.role}
                                onChange={e => handleRoleChange(user.id, e.target.value)}
                                className="usermgmt-select"
                            >
                                <option value="사용자">사용자</option>
                                <option value="관리자">관리자</option>
                                <option value="사업자">사업자</option>
                            </select>
                        </td>
                        <td>{user.phone}</td>
                        <td>{new Date(user.birthDate).toLocaleDateString()}</td>
                        <td>{user.gender}</td>
                        <td>{user.agreeTerms ? '예' : '아니오'}</td>
                        <td>
                            <button className="usermgmt-button"
                                    onClick={() => navigate(`/user-management/${user.id}`)}>상세 정보
                            </button>
                        </td>
                        <td>
                            <button className="usermgmt-button" onClick={() => handleDelete(user.id)}>삭제</button>
                        </td>
                        <td>
                            <button className="usermgmt-button" onClick={() => handleBlock(user.id)}>차단</button>
                        </td>
                        <td>{new Date(user.regDate).toLocaleDateString()}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};
export default UserManagement;