import './App.css';
import {Route, Routes} from "react-router-dom";
import Schedule from "./pages/schedule/Schedule.jsx";
import ScheduleCalendar from "./pages/schedule/ScheduleCalendar.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import AddPlace from "./pages/schedule/AddPlace.jsx";
import BudgetPage from "./pages/schedule/budget/BudgetPage.jsx";
import ExpensePage from "./pages/schedule/budget/ExpensePage.jsx";
import BudgetStatic from "./pages/schedule/budget/BudgetStatic.jsx";
import LoginForm from "./pages/member/LoginForm.jsx";
import SignupForm from "./pages/member/SignupForm.jsx";
import ProfilePicForm from "./pages/member/ProfilePicForm.jsx";
import ChangePasswordForm from "./pages/member/ChangePasswordForm.jsx";
import ProfileForm from "./pages/member/ProfileForm.jsx";
import BusinessSignupForm from "./pages/member/BusinessSignupForm.jsx";
import AdminDashboardForm from "./pages/admin/AdminDashboardForm.jsx";
import UserManagement from "./components/admin/UserManagement.jsx";
import BusinessManagement from "./components/admin/BusinessManagement.jsx";
import StatisticsReports from "./components/admin/StatisticsReports.jsx";
import ContentManagement from "./components/admin/ContentManagement.jsx";
import SystemSettings from "./components/admin/SystemSettings.jsx";
import NotificationManagement
  from "./components/admin/NotificationManagement.jsx";
import UserDetail from "./components/admin/UserDetail.jsx";
import BusinessProfileForm from "./pages/member/BusinessProfileForm.jsx";
import AdminLoginForm from "./pages/admin/AdminLoginForm.jsx";
import BusinessDetail from "./components/admin/BusinessDetail.jsx";
import StatisticsReportsForm from "./pages/member/StatisticsReportsForm.jsx";
import {useState} from "react";
import Login from "./components/member/Login.jsx";
import Signup from "./components/member/Signup.jsx";
import RoomRegistrationForm
  from "./pages/booking/hotel/RoomRegistrationForm.jsx";
import HotelListMain from "./pages/booking/hotel/HotelListMain.jsx";
import HotelInfo from "./pages/booking/hotel/HotelInfo.jsx";
import RoomInfo from "./pages/booking/hotel/RoomInfo.jsx";
import HotelBookingForm from "./pages/booking/hotel/HotelBookingForm.jsx";
import FlightSelection from "./pages/booking/flight/FlightSelection.jsx";
import FlightBookingForm from "./pages/booking/flight/FlightBookingForm.jsx";
import HotelRegistrationForm
  from "./pages/booking/hotel/HotelRegistrationForm.jsx";
import CreatePopasked from "./components/board/check/CreatePopasked.jsx";
import FreeBoard from "./pages/board/FreeBoard.jsx";
import WritePostFB from "./pages/board/WritePostFB.jsx";
import ReadPost from "./pages/board/ReadPost.jsx";
import QnaCS from "./pages/board/QnaCS.jsx";
import CheckPopasked from "./components/board/check/CheckPopasked.jsx";
import Writenotice from "./components/board/csbridge/Writenotice.jsx";
import NoticeBoard from "./components/board/csbridge/NoticeBoard.jsx";
import InquiryHistory from "./components/board/csbridge/InquiryHistory.jsx";
import Inquiry from "./components/board/csbridge/Inquiry.jsx";

const places = [
  {
    no: 1,
    name: '해운대 해수욕장',
    type: '관광명소',
    location: '부산(해운대)',
    image: 'https://via.placeholder.com/150'
  },
  {
    no: 2,
    name: '한라산 국립 공원',
    type: '관광명소',
    location: '제주',
    image: 'https://via.placeholder.com/150'
  },
  {
    no: 3,
    name: '독도',
    type: '관광명소',
    location: '울릉도',
    image: 'https://via.placeholder.com/150'
  }
];

function Entry() {
  return null;
}

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const switchToSignup = () => {
    setIsLogin(false);
  };

  const switchToLogin = () => {
    setIsLogin(true);

  };
  return (
      <>
        <Header/>
        <div className="app">
          <section>
            <Routes>
              {/*명연로그인*/}
              <Route path="/login" element={<LoginForm/>}/>
              <Route path="/signup" element={<SignupForm/>}/>
              <Route path="/profilePic" element={<ProfilePicForm/>}/>
              {/*<Route path="/emailv" element={<EmailVerificationForm/>}/>*/}
              {/*<Route path="/verify-email/:token" element={<VerifyEmailForm/>}/>*/}
              {/*<Route path="/resend" element={<ResendVerificationEmailForm/>}/>*/}
              <Route path="/change" element={<ChangePasswordForm/>}/>
              {/*<Route path="/delete" element={<DeleteAccountForm/>}/>*/}
              <Route path="/modify" element={<ProfileForm/>}/>
              <Route path="/business" element={<BusinessSignupForm/>}/>
              <Route path="/admin" element={<AdminDashboardForm/>}/>
              <Route path="/usermanagement" element={<UserManagement/>}/>
              <Route path="/businessmanagement" element={<BusinessManagement/>}/>
              <Route path="/statisticsreports" element={<StatisticsReports/>}/>
              <Route path="/contentmanagement" element={<ContentManagement/>}/>
              <Route path="/systemsettings" element={<SystemSettings/>}/>
              <Route path="/notificationmanagement" element={<NotificationManagement/>}/>
              <Route path="/usermanagement/:id" element={<UserDetail/>}/> {/* UserDetail 경로 추가 */}
              <Route path="/businessmodify" element={<BusinessProfileForm/>}/> {/* UserDetail 경로 추가 */}
              <Route path="/adminlogin" element={<AdminLoginForm/>}/> {/* UserDetail 경로 추가 */}
              <Route path="/businessmanagement/:id" element={<BusinessDetail/>}/> {/* UserDetail 경로 추가 */}
              <Route path="/statistic" element={<StatisticsReportsForm/>}/> {/* UserDetail 경로 추가 */}
              <Route
                  path="/"
                  element={
                    isLogin ? (
                        <Login switchToSignup={switchToSignup}/>
                    ) : (
                        <Signup switchToLogin={switchToLogin}/>
                    )
                  }
              />
              {/*원호 일정*/}
              <Route path="/calendar" element={<ScheduleCalendar/>}/>
              <Route path="/schedule" element={<Schedule/>}/>
              <Route path="/add-place" element={<AddPlace places={places} />} />
              <Route path="/budget" element={<BudgetPage/>}/>
              <Route path="/add-expense" element={<ExpensePage/>}/>
              <Route path="/edit-expense" element={<ExpensePage/>}/>
              <Route path="/budget-static" element={<BudgetStatic/>}/>
              {/*우경 정보 및 예약*/}
              {/*호텔/객실*/}
              <Route path="/booking/hotel/list" element={<HotelListMain/>}/>
              <Route path="/booking/hotel/info" element={<HotelInfo/>}/>
              <Route path="/booking/hotel/roominfo" element={<RoomInfo/>}/>
              <Route path="/booking/hotel/bookingform" element={<HotelBookingForm/>}/>
              {/*항공*/}
              <Route path={"/booking/flight"} element={<FlightSelection/>}/>
              <Route path={"/booking/flight/bookingform"} element={<FlightBookingForm/>}/>
              {/*사업자회원 호텔/객실 (등록/수정/삭제)*/}
              <Route path="/business/hotel/new" element={<HotelRegistrationForm/>}/>
              <Route path="/business/rooms/new" element={<RoomRegistrationForm/>}/>
              {/*준호 게시판*/}
              <Route path="/page/freeboard" element={<FreeBoard/>}/>
              <Route path="/page/writepostfb" element={<WritePostFB/>}/>
              <Route path="/page/readpost/:id" element={<ReadPost/>}/>
              <Route path="/page/qnacs" element={<QnaCS/>}/>
              <Route path="/csbridge/faq" element={<Entry/>}/>
              <Route path="/csbridge/inquiry" element={<Inquiry/>}/>
              <Route path="/csbridge/inquiryHistory" element={<InquiryHistory/>}/>
              <Route path="/csbridge/notice" element={<NoticeBoard/>}/>
              <Route path="/csbridge/writenotice" element={<Writenotice/>}/>
              <Route path="/admin/checkpopasked" element={<CheckPopasked/>}/>
              <Route path="/admin/createpopasked" element={<CreatePopasked/>}/>
            </Routes>
          </section>
        </div>
        <Footer/>
      </>
  );
}

export default App;
