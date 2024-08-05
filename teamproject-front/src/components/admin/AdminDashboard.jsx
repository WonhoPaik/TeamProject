// 관리자 대시보드 ui : 직관적이고 사용하기 편하기 디자인되어야함/ 주요기능을 한눈에 볼 수 있는 위젯과 그래프, 리스트 등이 포함될 수 있음
// AdminDashboard 컴포넌트는 관리자 대시보드의 전체적인 레이아웃을 담당하며, 다음과 같은 컴포넌트들을 포함해야함
import React from 'react';
import '../../css/admin/AdminDashboard.css';
import {Link} from "react-router-dom";

const AdminDashboard = () => {
    return (
        <div className="admin-dashboard">
            <header className="dashboard-header">
                <h1>관리자 대시보드</h1>
            </header>
            <div className="dashboard-content">
                <div className="dashboard-widget">
                    <Link to="/user-management">
                        <button>사용자 관리</button>
                    </Link>
                </div>
                <div className="dashboard-widget">
                    <Link to="/business-management">
                        <button>사업자 관리</button>
                    </Link>
                </div>
                <div className="dashboard-widget">
                    <Link to="/statistics-reports">
                        <button>통계 및 보고서</button>
                    </Link>
                </div>
                <div className="dashboard-widget">
                    <Link to="/content-management">
                        <button>게시판 관리</button>
                    </Link>
                </div>
                <div className="dashboard-widget">
                    <Link to="/system-settings">
                        <button>시스템 설정</button>
                    </Link>
                </div>
                <div className="dashboard-widget">
                    <Link to="/notification-management">
                        <button>알림 관리</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;