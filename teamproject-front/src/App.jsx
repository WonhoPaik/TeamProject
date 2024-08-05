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


function App() {

  return (
      <>
        <Header/>
        <div className="app">
          <section>
            <Routes>
              <Route path="/" element={<ScheduleCalendar/>}/>
              <Route path="/schedule" element={<Schedule/>}/>
              <Route path="/add-place" element={<AddPlace places={places} />} />
              <Route path="/budget" element={<BudgetPage/>}/>
              <Route path="/add-expense" element={<ExpensePage/>}/>
              <Route path="/edit-expense" element={<ExpensePage/>}/>
              <Route path="/budget-static" element={<BudgetStatic/>}/>
            </Routes>
          </section>
        </div>
        <Footer/>
      </>
  );
}

export default App;
