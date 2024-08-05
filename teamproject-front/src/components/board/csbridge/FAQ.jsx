import React, {useState} from 'react';
import './FAQ.css';
import {useNavigate} from "react-router-dom";

const FAQ = () => {
    const nav = useNavigate();
    const [activeTab, setActiveTab] = useState('BEST');
    const [expandedFaq, setExpandedFaq] = useState(null); // 추가: 확장된 FAQ 항목을 추적

    const faqList = [
        {
            category: 'BEST', questions: [
                {
                    question: '계정을 잃어버렸어요.',
                    answer: '예약취소는 앱/웹 > 예약내역에서 직접 가능합니다. 예약/결제 진행 당시 안내된 취소/환불 규정에 따라 처리되며, 취소수수료가 발생할 경우 취소수수료를 차감한 금액으로 환불 처리됩니다. 일부 숙소에 한해 취소가 가능한 시점이 앱/웹에서 취소가 불가할 수 있으니 이 경우에는 고객행복센터로 요청해 주시길 바랍니다.'
                },
                {question: '숙소 예약 내역은 어디서 확인하나요?', answer: '천재지변/감염병 관련 취소 안내'},
                {question: '기상 악화 결항 시 국내 항공권 취소 방법 및 취소수수료가 궁금해요.', answer: '예약대기 취소 안내'},
                {question: '체크인날짜/객실타입을 변경하고 싶어요.', answer: '날짜/객실타입 변경 안내'},
                {
                    question: '항공권을 예약했는데 포인트 적립이 안돼요.',
                    answer: '항공권 예약 포인트는 해당 비행기 탑승 완료 후 적립됩니다. (국내 항공은 편도당, 해외 항공은 예약당 포인트 적립) 예약하신 비행기 탑승 완료 이후에 포인트 적립 내역을 다시 한번 확인해 주세요. '
                },
            ]
        },
        {
            category: '항공', questions: [
                {question: '네이버/스카이스캐너를 통해 예약했습니다. 어디서 확인하나요?', answer: '이용문의 1 답변'},
                {question: '국내 항공 예약을 취소하고 싶어요', answer: '좌석 배정은 언제 받을 수 있나요?'},
                {question: '좌석 배정은 언제 받을 수 있나요?', answer: '좌석 배정은 언제 받을 수 있나요?'}
            ]
        },
        {
            category: '숙소', questions: [
                {question: '결제/영수증 1', answer: '결제/영수증 1 답변'},
                {question: '결제/영수증 2', answer: '결제/영수증 2 답변'},
                {question: '결제/영수증 3', answer: '결제/영수증 3 답변'}
            ]
        },
        {
            category: '서비스 일반', questions: [
                {question: '결제/영수증 4', answer: '결제/영수증 1 답변'},
                {question: '결제/영수증 5', answer: '결제/영수증 2 답변'},
                {question: '결제/영수증 6', answer: '결제/영수증 3 답변'}
            ]
        },
        {
            category: '결제/영수증', questions: [
                {question: '결제/영수증 12', answer: '결제/영수증 1 답변'},
                {question: '결제/영수증 22', answer: '결제/영수증 2 답변'},
                {question: '결제/영수증 33', answer: '결제/영수증 3 답변'}
            ]
        },
        {
            category: '공통', questions: [
                {question: '결제/영수증 122', answer: '결제/영수증 1 답변'},
                {question: '결제/영수증 222', answer: '결제/영수증 2 답변'},
                {question: '결제/영수증 322', answer: '결제/영수증 3 답변'}
            ]
        },
    ];

    const handleFaqClick = (index) => {
        setExpandedFaq(expandedFaq === index ? null : index); // 클릭된 항목을 토글
    };

    const renderFaqs = () => {
        const activeFaq = faqList.find(faq => faq.category === activeTab);
        return activeFaq ? activeFaq.questions.map((faq, index) => (
            <div key={index} className={`faq-item ${expandedFaq === index ? 'expanded' : ''}`}
                 onClick={() => handleFaqClick(index)}>
                <div className="faq-question">
                    <span>{faq.question}</span>
                </div>
                {expandedFaq === index && <div className="faq-answer">{faq.answer}</div>}
            </div>
        )) : null;
    };

    return (
        <div className="faq-container">
            <div className="faq-title">
                <h2>고객센터</h2>
            </div>
            <div className="faq-header">
                <div className="faq-notice-title" onClick={() => {
                    nav("/csbridge/notice")
                }}>공지
                </div>
                <div className="faq-notice" onClick={()=>{nav("/csbridge/notice")}}>트리플 항공권/상품 문제없이 이용 가능합니다.</div>
            </div>
            <div className="faq-content">
                <div className="faq-section">
                    <div>내 문의 내역</div>
                    <div>
                        <button className="checkmyinquiry-button" onClick={() => {
                            nav("/csbridge/inquiryhistory")
                        }}>→
                        </button>
                    </div>
                </div>
                <div className="faq-frequently-asked">
                    <div className="faq-frequently-asked-section">
                        <div>자주 묻는 질문</div>
                        <button className="faq-frequently-asked-section-update" onClick={()=>{nav("/admin/CheckPopasked/")}}>관리</button>
                    </div>
                    <div className="qnacs-tabs">
                        {faqList.map(faq => (
                            <button
                                key={faq.category}
                                className={`qnacs-tab ${activeTab === faq.category ? 'active' : ''}`}
                                onClick={() => setActiveTab(faq.category)}>
                                {faq.category}
                            </button>
                        ))}
                    </div>
                    <div className="qnacs-faq-list">
                        {renderFaqs()}
                    </div>
                </div>
            </div>
            <div className="faq-buttons">
                <button className="faq-button">항공 예약 문의</button>
                <button className="faq-button">숙소 예약 문의</button>
                <button className="faq-button">투어·티켓 문의</button>
                <button className="faq-button service-btn" onClick={() => {
                    nav("/csbridge/inquiry")
                }}>서비스 일반 문의
                </button>
            </div>
        </div>
    );
};

export default FAQ;
