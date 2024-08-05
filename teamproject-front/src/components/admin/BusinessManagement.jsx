// 사업자 관리 페이지 컴포넌트입니다.
// 등록된 사업자 목록 조회/사업자 상세 정보 조회/사업자 승인,거절 처리/사업자 삭제 및 차단
import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import '../../css/admin/BusinessManagement.css';

const BusinessManagement = () => {
    const [businesses, setBusinesses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // 임시 사업자 데이터
        const mockBusinesses = [
            {
                id: 1,
                businessNumber: '123-45-67890',
                businessName: 'Mock Business 1',
                address1: '123 Mock Street',
                address2: 'Suite 456',
                email: 'mock1@example.com',
                phone: '010-1234-5678',
                businessLicense: 'license-url-1', // 실제 URL로 대체
                ceoName: 'John Doe',
                regDate: '2022-01-01T00:00:00Z',
                postalCode: '12345',
                agreePrivacy: true,
                agreeTerms: true,
                status: 'pending' // 상태: pending, approved, rejected
            },
            {
                id: 2,
                businessNumber: '223-45-67891',
                businessName: 'Mock Business 2',
                address1: '456 Mock Avenue',
                address2: 'Apt 789',
                email: 'mock2@example.com',
                phone: '010-8765-4321',
                businessLicense: 'license-url-2', // 실제 URL로 대체
                ceoName: 'Jane Doe',
                regDate: '2023-01-01T00:00:00Z',
                postalCode: '67890',
                agreePrivacy: false,
                agreeTerms: true,
                status: 'pending' // 상태: pending, approved, rejected

            }, {
                id: 3,
                businessNumber: '323-45-67892',
                businessName: 'Mock Business 3',
                address1: '789 Mock Boulevard',
                address2: 'Floor 10',
                email: 'mock3@example.com',
                phone: '010-2345-6789',
                businessLicense: 'license-url-3', // 실제 URL로 대체
                ceoName: 'Alice Smith',
                password: 'password3',
                regDate: '2021-05-15T00:00:00Z',
                postalCode: '13579',
                agreePrivacy: true,
                agreeTerms: true,
                status: 'approved' // 상태: pending, approved, rejected
            },
            {
                id: 4,
                businessNumber: '423-45-67893',
                businessName: 'Mock Business 4',
                address1: '101 Mock Lane',
                address2: 'Unit 20',
                email: 'mock4@example.com',
                phone: '010-3456-7890',
                businessLicense: 'license-url-4', // 실제 URL로 대체
                ceoName: 'Bob Johnson',
                password: 'password4',
                regDate: '2020-11-30T00:00:00Z',
                postalCode: '24680',
                agreePrivacy: false,
                agreeTerms: false,
                status: 'rejected' // 상태: pending, approved, rejected
            },
            {
                id: 5,
                businessNumber: '523-45-67894',
                businessName: 'Mock Business 5',
                address1: '202 Mock Street',
                address2: 'Suite 50',
                email: 'mock5@example.com',
                phone: '010-4567-8901',
                businessLicense: 'license-url-5', // 실제 URL로 대체
                ceoName: 'Charlie Brown',
                password: 'password5',
                regDate: '2019-07-21T00:00:00Z',
                postalCode: '97531',
                agreePrivacy: true,
                agreeTerms: true,
                status: 'pending' // 상태: pending, approved, rejected
            },
            {
                id: 6,
                businessNumber: '623-45-67895',
                businessName: 'Mock Business 6',
                address1: '303 Mock Avenue',
                address2: 'Apt 10',
                email: 'mock6@example.com',
                phone: '010-5678-9012',
                businessLicense: 'license-url-6', // 실제 URL로 대체
                ceoName: 'David Lee',
                password: 'password6',
                regDate: '2022-03-03T00:00:00Z',
                postalCode: '86420',
                agreePrivacy: false,
                agreeTerms: true,
                status: 'approved' // 상태: pending, approved, rejected
            },
            {
                id: 7,
                businessNumber: '723-45-67896',
                businessName: 'Mock Business 7',
                address1: '404 Mock Drive',
                address2: 'Floor 5',
                email: 'mock7@example.com',
                phone: '010-6789-0123',
                businessLicense: 'license-url-7', // 실제 URL로 대체
                ceoName: 'Eva Green',
                password: 'password7',
                regDate: '2021-09-09T00:00:00Z',
                postalCode: '75319',
                agreePrivacy: true,
                agreeTerms: true,
                status: 'rejected' // 상태: pending, approved, rejected
            },
            {
                id: 8,
                businessNumber: '823-45-67897',
                businessName: 'Mock Business 8',
                address1: '505 Mock Court',
                address2: 'Unit 2',
                email: 'mock8@example.com',
                phone: '010-7890-1234',
                businessLicense: 'license-url-8', // 실제 URL로 대체
                ceoName: 'Frank Wright',
                password: 'password8',
                regDate: '2020-05-05T00:00:00Z',
                postalCode: '15937',
                agreePrivacy: true,
                agreeTerms: false,
                status: 'pending' // 상태: pending, approved, rejected
            },
            {
                id: 9,
                businessNumber: '923-45-67898',
                businessName: 'Mock Business 9',
                address1: '606 Mock Road',
                address2: 'Apt 30',
                email: 'mock9@example.com',
                phone: '010-8901-2345',
                businessLicense: 'license-url-9', // 실제 URL로 대체
                ceoName: 'Grace Kim',
                password: 'password9',
                regDate: '2019-11-11T00:00:00Z',
                postalCode: '64297',
                agreePrivacy: true,
                agreeTerms: true,
                status: 'approved' // 상태: pending, approved, rejected
            },
            {
                id: 10,
                businessNumber: '1023-45-67899',
                businessName: 'Mock Business 10',
                address1: '707 Mock Park',
                address2: 'Suite 100',
                email: 'mock10@example.com',
                phone: '010-9012-3456',
                businessLicense: 'license-url-10', // 실제 URL로 대체
                ceoName: 'Hannah Davis',
                password: 'password10',
                regDate: '2018-02-02T00:00:00Z',
                postalCode: '75348',
                agreePrivacy: false,
                agreeTerms: true,
                status: 'pending' // 상태: pending, approved, rejected
            },
            {
                id: 11,
                businessNumber: '1123-45-67900',
                businessName: 'Mock Business 11',
                address1: '808 Mock Lane',
                address2: 'Apt 200',
                email: 'mock11@example.com',
                phone: '010-0123-4567',
                businessLicense: 'license-url-11', // 실제 URL로 대체
                ceoName: 'Ian Black',
                password: 'password11',
                regDate: '2017-03-03T00:00:00Z',
                postalCode: '46295',
                agreePrivacy: true,
                agreeTerms: false,
                status: 'rejected' // 상태: pending, approved, rejected
            },
            {
                id: 12,
                businessNumber: '1223-45-67901',
                businessName: 'Mock Business 12',
                address1: '909 Mock Street',
                address2: 'Suite 300',
                email: 'mock12@example.com',
                phone: '010-1234-5678',
                businessLicense: 'license-url-12', // 실제 URL로 대체
                ceoName: 'Jack White',
                password: 'password12',
                regDate: '2016-04-04T00:00:00Z',
                postalCode: '75396',
                agreePrivacy: true,
                agreeTerms: true,
                status: 'pending' // 상태: pending, approved, rejected
            }
            // 추가 사업자 데이터...
        ];
        setBusinesses(mockBusinesses);
        setLoading(false);
    }, []);

    // 사업자 삭제 핸들러 함수
    const handleDelete = (id) => {
        if (window.confirm('정말로 이 사업자를 삭제하시겠습니까?')) {
            setBusinesses(businesses.filter(business => business.id !== id));
        }
    }

    const handleApprove = (id) => {
        // 사업자 승인 처리
        if (window.confirm('이 사업자를 승인하시겠습니까?')) {
            setBusinesses(businesses.map(business =>
                business.id === id ? {...business, status: 'approved'} : business
            ));
        }
    };

    const handleReject = (id) => {
        // 사업자 거절 처리
        if (window.confirm('이 사업자를 거절하시겠습니까?')) {
            setBusinesses(businesses.map(business =>
                business.id === id ? {...business, status: 'rejected'} : business
            ));
        }
    }

    if (loading) return <p>로딩 중...</p>;
    if (error) return <p>에러 발생! : {error}</p>;

    return (
        <div className="business-management">
            <h2>등록된 사업자 목록</h2>
            <table>
                <thead>
                <tr>
                    <th>사업자 등록번호</th>
                    <th>사업자명</th>
                    {/*<th>주소</th>*/}
                    <th>이메일</th>
                    <th>전화번호</th>
                    {/*<th>사업자 등록증</th>*/}
                    {/*<th>CEO 이름</th>*/}
                    {/*<th>우편번호</th>*/}
                    {/*<th>개인정보 처리 방침 동의</th>*/}
                    {/*<th>이용 약관 동의</th>*/}
                    <th>상세 정보</th>
                    <th>상태</th>
                    <th>승인</th>
                    <th>거절</th>
                    <th>등록일</th>
                    <th>삭제</th>
                </tr>
                </thead>
                <tbody>
                {businesses.map((business) => (
                    <tr key={business.id}>
                        <td>{business.businessNumber}</td>
                        <td>{business.businessName}</td>
                        {/*<td>{business.address1} {business.address2}</td>*/}
                        <td>{business.email}</td>
                        <td>{business.phone}</td>
                        {/*<td><a href={business.businessLicense} target="_blank" rel="noopener noreferrer">보기</a></td>*/}
                        {/*<td>{business.ceoName}</td>*/}
                        {/*<td>{business.postalCode}</td>*/}
                        {/*<td>{business.agreePrivacy ? '예' : '아니오'}</td>*/}
                        {/*<td>{business.agreeTerms ? '예' : '아니오'}</td>*/}
                        <td>
                            <button onClick={() => navigate(`/business-management/${business.id}`)}>상세 정보</button>
                        </td>
                        <td>{business.status === 'pending' ? '대기 중' : business.status === 'approved' ? '승인됨' : '거절됨'}</td>
                        <td>
                            <button onClick={() => handleApprove(business.id)}
                                    disabled={business.status !== 'pending'}>승인
                            </button>
                        </td>
                        <td>
                            <button onClick={() => handleReject(business.id)}
                                    disabled={business.status !== 'pending'}>거절
                            </button>
                        </td>
                        <td>{new Date(business.regDate).toLocaleDateString()}</td>
                        <td>
                            <button onClick={() => handleDelete(business.id)}>삭제</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default BusinessManagement;