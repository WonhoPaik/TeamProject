import React, {useState, useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import '../../css/admin/BusinessDetail.css';

const BusinessDetail = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [business, setBusiness] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
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
        const foundBusiness = mockBusinesses.find(b => b.id === parseInt(id));
        if (foundBusiness) {
            setBusiness(foundBusiness);
        } else {
            setError('사업자를 찾을 수 없습니다.');
        }
        setLoading(false);
    }, [id]);

    if (loading) return <p>로딩 중...</p>;
    if (error) return <p>{error}</p>

    return (
        <div className="business-detail-container">
            <h2>사업자 상세 정보</h2>
            <div className="business-detail">
                <div className="info">
                    <p><strong>사업자명:</strong> {business.businessName}</p>
                    <p><strong>이메일:</strong> {business.email}</p>
                    <p><strong>전화번호:</strong> {business.phone}</p>
                    <p><strong>사업자 등록번호:</strong> {business.businessNumber}</p>
                    <p><strong>CEO 이름:</strong> {business.ceoName}</p>
                    <p><strong>등록일:</strong> {new Date(business.regDate).toLocaleDateString()}</p>
                    <p><strong>주소:</strong> {business.address1} {business.address2}</p>
                    <p><strong>우편번호:</strong> {business.postalCode}</p>
                    <p><strong>상태:</strong> {business.status}</p>
                    <p><strong>개인정보 처리 방침 동의:</strong> {business.agreePrivacy ? '예' : '아니오'}</p>
                    <p><strong>이용 약관 동의:</strong> {business.agreeTerms ? '예' : '아니오'}</p>
                </div>
                <button onClick={() => navigate('/business-management')}>뒤로가기</button>
            </div>
        </div>
    )
}
export default BusinessDetail;






























