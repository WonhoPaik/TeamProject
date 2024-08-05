// 화면탈퇴 UI를 구성하는 컴포넌트입니다.
// 1.	상태 관리: showConfirmation 상태를 사용하여 확인 창의 표시 여부를 관리합니다.
// 2.	버튼 클릭 핸들러: handleDeleteClick 함수는 탈퇴 버튼 클릭 시 확인 창을 표시하고, handleCancel과 handleConfirm 함수는 각각 취소와 확인을 처리합니다.
// 3.	API 호출: 실제 API 호출을 통해 회원 탈퇴를 처리할 수 있으며, 현재는 테스트용으로 alert를 사용합니다.
// 4.	UI 구성: 회원 탈퇴 버튼과 확인 창을 포함하여 사용자에게 탈퇴를 확인하도록 합니다.
import React, {useState} from 'react';
import '../../css/DeleteAccount.css';

const DeleteAccount = () => {
    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleDeleteClick = () => {
        setShowConfirmation(true);
    }
    const handleCancel = () => {
        setShowConfirmation(false);
    }
    const handleConfirm = () => {
        // 실제 회원 탈퇴 API 호출을 위한 코드
        // axios.delete('/api/delete-account')
        //     .then(response => {
        //         console.log('회원 탈퇴 성공:', response);
        //         // 리디렉션 또는 상태 업데이트
        //     })
        //     .catch(error => {
        //         console.error('회원 탈퇴 오류:', error);
        //     });

        // 테스트용 성공 메시지 설정
        alert('회원 탈퇴가 완료되었습니다.');
        setShowConfirmation(false);
    }

    return (
        <div className="emailv__form">
            <div className="background"></div>
            <div className="container">
                <div className="item">
                    <h2><i>로고</i>사이트 이름</h2>
                    <div className="text-item">
                        <h2>Welcome! to our site</h2>
                        <p>대충 사이트 소개글 소셜 연동 등등 사항</p>
                        <div className="social-icon">
                            <a href="#"><i className='bx bxl-facebook'></i></a>
                            <a href="#"><i className='bx bxl-twitter'></i></a>
                            <a href="#"><i className='bx bxl-youtube'></i></a>
                            <a href="#"><i className='bx bxl-instagram'></i></a>
                            <a href="#"><i className='bx bxl-linkedin'></i></a>
                        </div>
                    </div>
                </div>
                <div className="emailv-section">
                    <div className="form-box emailv">
                        <div className="delete-account-container">
                            <h2>회원 탈퇴</h2>
                            <button className="delete-btn" onClick={handleDeleteClick}>
                                회원 탈퇴
                            </button>

                            {showConfirmation && (
                                <div className="confirmation-dialog">
                                    <p>정말로 회원 탈퇴를 진행하시겠습니까?</p>
                                    <div className="dialog-buttons">
                                        <button className="confirm-btn" onClick={handleConfirm}>확인</button>
                                        <button className="cancel-btn" onClick={handleCancel}>취소</button>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default DeleteAccount;