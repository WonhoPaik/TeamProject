import "./QnaCS.css";
import React, { useState } from 'react';

const QnaCS = () => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('예약');
    const [content, setContent] = useState('');
    const [error, setError] = useState('');
    const [activeTab, setActiveTab] = useState('TOP7');
    const [expandedFaq, setExpandedFaq] = useState(null); // 추가: 확장된 FAQ 항목을 추적

    const [faqList, setFaqList] = useState([
        { category: 'TOP7', questions: [
                { question: '예약을 취소하고 싶어요.', answer: '예약취소는 앱/웹 > 예약내역에서 직접 가능합니다. 예약/결제 진행 당시 안내된 취소/환불 규정에 따라 처리되며, 취소수수료가 발생할 경우 취소수수료를 차감한 금액으로 환불 처리됩니다. 일부 숙소에 한해 취소가 가능한 시점이 앱/웹에서 취소가 불가할 수 있으니 이 경우에는 고객행복센터로 요청해 주시길 바랍니다.' },
                { question: '천재지변/감염병으로 인한 예약취소는 어떻게 하나요?', answer: '천재지변/감염병 관련 취소 안내' },
                { question: '예약대기 건 예약취소하고 싶어요.', answer: '예약대기 취소 안내' },
                { question: '체크인날짜/객실타입을 변경하고 싶어요.', answer: '날짜/객실타입 변경 안내' },
                { question: '현금영수증 발급받고 싶어요.', answer: '현금영수증 발급 안내' },
                { question: '영수증/거래내역서 발급받고 싶어요.', answer: '영수증/거래내역서 발급 안내' },
                { question: '상품을 결제했는데 이용 횟수가 올라가지 않아요.', answer: '이용 횟수 안내' }
            ]},
        { category: '이용문의', questions: [
                { question: '이용문의 1', answer: '이용문의 1 답변' },
                { question: '이용문의 2', answer: '이용문의 2 답변' },
                { question: '이용문의 3', answer: '이용문의 3 답변' }
            ]},
        { category: '결제/영수증', questions: [
                { question: '결제/영수증 1', answer: '결제/영수증 1 답변' },
                { question: '결제/영수증 2', answer: '결제/영수증 2 답변' },
                { question: '결제/영수증 3', answer: '결제/영수증 3 답변' }
            ]},
        // 다른 카테고리도 여기에 추가
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !content) {
            setError('Both fields are required');
            return;
        }
        setError('');
        // 여기에 제출 로직 추가
        console.log('Category:', category);
        console.log('Title:', title);
        console.log('Content:', content);
        // 폼 초기화
        setTitle('');
        setCategory('예약');
        setContent('');
    };

    const handleFaqClick = (index) => {
        setExpandedFaq(expandedFaq === index ? null : index); // 클릭된 항목을 토글
    };

    const renderFaqs = () => {
        const activeFaq = faqList.find(faq => faq.category === activeTab);
        return activeFaq ? activeFaq.questions.map((faq, index) => (
            <div key={index} className={`faq-item ${expandedFaq === index ? 'expanded' : ''}`} onClick={() => handleFaqClick(index)}>
                <div className="faq-question">
                    <span>{faq.question}</span>
                </div>
                {expandedFaq === index && <div className="faq-answer">{faq.answer}</div>}
            </div>
        )) : null;
    };

    return (
        <>
            <div className="qnacs-container-main">
                <div className="qnacs-navbar-frame">
                    <div className="qnacs-sub">1:1 문의</div>
                </div>
                <div className="qnacs-tabs">
                    {faqList.map(faq => (
                        <button
                            key={faq.category}
                            className={`qnacs-tab ${activeTab === faq.category ? 'active' : ''}`}
                            onClick={() => setActiveTab(faq.category)}
                        >
                            {faq.category}
                        </button>
                    ))}
                </div>
                <div className="qnacs-faq-list">
                    {renderFaqs()}
                </div>
                <div className="qnacs-container-mid">
                    <form onSubmit={handleSubmit} className="qnacs-form">
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <div className="qnacs-form-header">
                            <button type="submit" className="qnacs-button">Post</button>
                            <span className="qnacs-header-text">게시글 작성하기</span>
                        </div>
                        <div className="qnacs-form-row">
                            <div className="qnacs-form-group small">
                                <label htmlFor="category" className="qnacs-label">문의 내용</label>
                                <select
                                    id="category"
                                    name="questions"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="qnacs-select"
                                >
                                    <option value="예약">예약</option>
                                    <option value="숙소">숙소</option>
                                    <option value="항공">항공</option>
                                    <option value="취소및환불">취소 및 환불</option>
                                    <option value="기타">기타</option>
                                </select>
                            </div>
                            <div className="qnacs-form-group large">
                                <label htmlFor="title" className="qnacs-label">제목:</label>
                                <input
                                    type="text"
                                    id="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="qnacs-input"
                                />
                            </div>
                        </div>
                        <div className="qnacs-form-group">
                            <label htmlFor="content" className="qnacs-label">내용:</label>
                            <textarea
                                id="content"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                className="qnacs-textarea"
                            ></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default QnaCS;
