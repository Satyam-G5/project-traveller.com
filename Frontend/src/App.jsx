import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import Navbar from "./components/navbar"
import Content from "./components/content"
import Footer from "./components/footer"
import Login_page from "./components/login_page"
import Travelogue from './components/travelogue';
import Topdestination from './components/topdestination';
import GuideLogin from './components/guideLogin';
import SignIn from "./components/singIn";
import Profile from './components/profile';
import Hotels from './components/hotels';
import All_guide from './components/all_guide';
import Plans from './components/plans';
import GuideSignIn from './components/guideSignIn';
import Guide_page from './components/guide_page';

import { AuthProvider } from './context/AuthContext';

function App() {

  return (
    <>
      <AuthProvider>
        <Router>
          <div className="w-sreen min-h-screen bg-slate-900 flex-col ">

            <Routes>
              <Route path="/" element={<><Navbar /><Content /><Footer /></>} />

              <Route path="/User_login" element={<><Login_page /><Navbar /><Footer /></>} />

              <Route path="/User_signIn" element={<><SignIn /><Navbar /><Footer /></>} />

              <Route path="/travelogue" element={<><Travelogue /><Navbar /><Footer /></>} />

              <Route path="/hotels" element={<><Hotels /><Navbar /><Footer /></>} />

              <Route path="/plans" element={<><Plans /><Navbar /><Footer /></>} />

              <Route path="/guides" element={<><All_guide /><Navbar /><Footer /></>} />

              <Route path="/user_profile" element={<><Profile /><Navbar /><Footer /></>} />

              <Route path="/guide_login" element={<><GuideLogin /><Navbar /><Footer /></>} />

              <Route path="/guide_signIN" element={<><GuideSignIn /><Navbar /><Footer /></>} />

              <Route path="/guide_details" element={<><Guide_page /><Navbar /><Footer /></>} />

              <Route path="/top-destination" element={<><Topdestination /><Navbar /><Footer /></>} />


            </Routes>

          </div>
        </Router>
      </AuthProvider>
    </>



  )
}

export default App



//  key ID :  rzp_test_SzELy6av5lQSyI
//  Key Secret : qsXKVIwtYwuJOeRIUKyWXSow 