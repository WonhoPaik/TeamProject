import React, {useState, useEffect} from 'react';
import '../../css/admin/StatisticsReports.css';
import {Chart, registerables} from 'chart.js';
import {Line, Pie} from 'react-chartjs-2';

// Chart.js 구성 요소 등록
Chart.register(...registerables);

const StatisticReports = () => {
    const [stats, setStats] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const mockStats = {
            totalUsers: 150,
            totalBusinesses: 50,
            newUsersToday: 5,
            newBusinessesToday: 2,
            totalRevenue: 1000000,
            monthlyRevenue: 50000,
            userGrowth: [100, 200, 300, 400, 500, 600, 700],
            businessGrowth: [50, 100, 150, 200, 250, 300, 350],
            revenueByCategory: {
                Direct: 300000,
                Referral: 200000,
                Organic: 250000,
                Paid: 250000
            },
            deviceUsage: {
                Desktop: 60,
                Mobile: 30,
                Tablet: 10
            }
        };

        setStats(mockStats);
        setLoading(false);
    }, []);

    if (loading) return <p>로딩 중...</p>;
    if (error) return <p>오류 발생: {error}</p>;

    const userGrowthData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
            {
                label: 'User Growth',
                data: stats.userGrowth,
                borderColor: '#4BC0C0',
                backgroundColor: 'rgba(75,192,192,0.2)',
                fill: true,
            },
        ],
    };

    const businessGrowthData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
            {
                label: 'Business Growth',
                data: stats.businessGrowth,
                borderColor: '#FF6384',
                backgroundColor: 'rgba(255,99,132,0.2)',
                fill: true,
            },
        ],
    };

    const revenueByCategoryData = {
        labels: Object.keys(stats.revenueByCategory),
        datasets: [
            {
                label: 'Revenue by Category',
                data: Object.values(stats.revenueByCategory),
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
            },
        ],
    };

    const deviceUsageData = {
        labels: Object.keys(stats.deviceUsage),
        datasets: [
            {
                label: 'Device Usage',
                data: Object.values(stats.deviceUsage),
                backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
                hoverBackgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
            },
        ],
    };

    return (
        <div className="statistics-dashboard-container">
            <div className="statistics-sidebar">
                <h3>대시보드</h3>
                <ul>
                    <li>홈</li>
                    <li>내 대시보드</li>
                </ul>
            </div>
            <div className="statistics-content">
                <h2>통계 및 보고서</h2>
                <div className="statistics-stats-grid">
                    <div className="statistics-stat-card">
                        <h3>총 사용자 수</h3>
                        <p>{stats.totalUsers}</p>
                    </div>
                    <div className="statistics-stat-card">
                        <h3>총 사업자 수</h3>
                        <p>{stats.totalBusinesses}</p>
                    </div>
                    <div className="statistics-stat-card">
                        <h3>오늘 가입한 사용자 수</h3>
                        <p>{stats.newUsersToday}</p>
                    </div>
                    <div className="statistics-stat-card">
                        <h3>오늘 가입한 사업자 수</h3>
                        <p>{stats.newBusinessesToday}</p>
                    </div>
                    <div className="statistics-stat-card">
                        <h3>총 수익</h3>
                        <p>{stats.totalRevenue.toLocaleString()}원</p>
                    </div>
                    <div className="statistics-stat-card">
                        <h3>이번 달 수익</h3>
                        <p>{stats.monthlyRevenue.toLocaleString()}원</p>
                    </div>
                </div>
                <div className="statistics-charts-grid">
                    <div className="statistics-chart-card">
                        <h3>사용자 성장 추이</h3>
                        <Line data={userGrowthData}/>
                    </div>
                    <div className="statistics-chart-card">
                        <h3>사업자 성장 추이</h3>
                        <Line data={businessGrowthData}/>
                    </div>
                    <div className="statistics-chart-card">
                        <h3>카테고리별 수익</h3>
                        <Pie data={revenueByCategoryData}/>
                    </div>
                    <div className="statistics-chart-card">
                        <h3>기기 사용률</h3>
                        <Pie data={deviceUsageData}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatisticReports;