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
import FoodRead from "./components/place/foodread.jsx";
import E_section from "./components/place/E_section.jsx";
import FAQ from "./components/board/csbridge/FAQ.jsx";
import TripRead from "./components/place/tripread.jsx";
import UserReview from "./components/review/userReview.jsx";
import TripReadCreateForm from "./components/place/TripReadCreateForm.jsx";
import FoodReadCreateForm from "./components/place/FoodReadCreateForm.jsx";
import ReviewCreateForm from "./components/review/ReviewCreateForm.jsx";
import ReviewMDForm from "./components/review/ReviewMDForm.jsx";






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
              <Route path="/login/admin" element={<AdminLoginForm/>}/> {/* UserDetail 경로 추가 */}
              <Route path="/signup" element={<SignupForm/>}/>
              <Route path="/signup/business" element={<BusinessSignupForm/>}/>
              <Route path="/signup/profilePic" element={<ProfilePicForm/>}/>
              {/*<Route path="/emailv" element={<EmailVerificationForm/>}/>*/}
              {/*<Route path="/verify-email/:token" element={<VerifyEmailForm/>}/>*/}
              {/*<Route path="/resend" element={<ResendVerificationEmailForm/>}/>*/}
              <Route path="/member/change" element={<ChangePasswordForm/>}/>
              <Route path="/member/modify" element={<ProfileForm/>}/>
              {/*<Route path="/delete" element={<DeleteAccountForm/>}/>*/}
              <Route path="/admin" element={<AdminDashboardForm/>}/>
              <Route path="/admin/usermanagement" element={<UserManagement/>}/>
              <Route path="/admin/businessmanagement" element={<BusinessManagement/>}/>
              <Route path="/admin/statisticsreports" element={<StatisticsReports/>}/>
              <Route path="/admin/contentmanagement" element={<ContentManagement/>}/>
              <Route path="/admin/systemsettings" element={<SystemSettings/>}/>
              <Route path="/admin/notificationmanagement" element={<NotificationManagement/>}/>
              <Route path="/admin/usermanagement/:id" element={<UserDetail/>}/> {/* UserDetail 경로 추가 */}
              <Route path="/admin/businessmanagement/:id" element={<BusinessDetail/>}/> {/* UserDetail 경로 추가 */}
              <Route path="/admin/statistic" element={<StatisticsReportsForm/>}/> {/* UserDetail 경로 추가 */}
              <Route path="/business/businessmodify" element={<BusinessProfileForm/>}/> {/* UserDetail 경로 추가 */}
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
              <Route path="/member/calendar" element={<ScheduleCalendar/>}/>
              <Route path="/member/schedule" element={<Schedule/>}/>
              <Route path="/member/add-place" element={<AddPlace places={places} />} />
              <Route path="/member/budget" element={<BudgetPage/>}/>
              <Route path="/member/add-expense" element={<ExpensePage/>}/>
              <Route path="/member/edit-expense" element={<ExpensePage/>}/>
              <Route path="/member/budget-static" element={<BudgetStatic/>}/>
              {/*우경 정보 및 예약*/}
              {/*호텔/객실*/}
              <Route path="/hotel/list" element={<HotelListMain/>}/>
              <Route path="/hotel/info" element={<HotelInfo/>}/>
              <Route path="/hotel/roominfo" element={<RoomInfo/>}/>
              <Route path="/member/hotel/bookingform" element={<HotelBookingForm/>}/>
              {/*항공*/}
              <Route path={"/flight"} element={<FlightSelection/>}/>
              <Route path={"/member/flight/bookingform"} element={<FlightBookingForm/>}/>
              {/*사업자회원 호텔/객실 (등록/수정/삭제)*/}
              <Route path="/business/hotel/new" element={<HotelRegistrationForm/>}/>
              <Route path="/business/rooms/new" element={<RoomRegistrationForm/>}/>
              {/*준호 게시판*/}
              {/*자유게시판(배낭톡)*/}
              <Route path="/freeboard" element={<FreeBoard/>}/>
              <Route path="/readpost/:id" element={<ReadPost/>}/>
              <Route path="/member/writepostfb" element={<WritePostFB/>}/>
              {/*고객센터 */}
              <Route path="/admin/writepopasked" element={<CreatePopasked/>}/>
              <Route path="/admin/checkpopasked" element={<CheckPopasked/>}/>
              <Route path="/member/inquiry" element={<Inquiry/>}/>
              <Route path="/member/inquiryHistory" element={<InquiryHistory/>}/>
              <Route path="/faq" element={<FAQ/>}/>
              <Route path="/notice" element={<NoticeBoard/>}/>
              <Route path="/admin/writenotice" element={<Writenotice/>}/>
              {/*곽기명*/}
              {/*관광지,맛집,리뷰게시판*/}
              <Route path="/E_Section" element={<E_section />}/>
              <Route path="/trip/detail/:NO" element={<TripRead />} />
              <Route path="/restaurant/detail/:NO" element={<FoodRead />}/>
              <Route path="/userReview" element={<UserReview />}/>
              <Route path="/admin/tripReadCreateForm" element={<TripReadCreateForm />}/>
              <Route path="/admin/foodReadCreateForm" element={<FoodReadCreateForm />}/>
              <Route path="/member/reviewCreateForm" element={<ReviewCreateForm />}/>
              <Route path="/member/reviewMDForm" element={<ReviewMDForm />}/>
            </Routes>
          </section>
        </div>
        <Footer/>
      </>
  );
}

export default App;
