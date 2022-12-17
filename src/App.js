import './style.css';
import { BrowserRouter , Routes , Route } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import Layout from './Layout';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Nopage from './Nopage';
import Blog from './Blog';
import Footer from './Footer';
import Collegedetail from './Collegedetail';
import Signupform from './Signupform';
import Events from './Events';
import Calculator from './Calculator';
import Usestatehook from './Usestatehook';
import Singleinputcontrolform from './Singleinputcontrolform';
import Bmr from './Bmr';
import UseState from './UseState';
import UseEffectfirst from './UseEffectfirst';
import API from './API';
import Insert from './Insert';
import Delete from './Delete';
import Edit from './Edit';
import Search from './Search';
import EditRecord from './EditRecord';

const App=()=>
{
	return(
		<>
		<BrowserRouter>
	     <Routes>
	       <Route path="/" element={<Layout />} >
	       <Route index element={<Home />} />
	       <Route path="About" element={<About />} />
	       <Route path="Collegedetail" element={<Collegedetail />} />
	       <Route path="Blog" element={<Blog />} />
	       <Route path="Footer" element={<Footer />} />
	       <Route path="Contact" element={<Contact />} />
	       <Route path="Signupform" element={<Signupform />} />
	       <Route path="Events" element={<Events />} />
	       <Route path="Calculator" element={<Calculator />} />
	       <Route path="Usestatehook" element={<Usestatehook />} />
	       <Route path="Singleinputcontrolform" element={<Singleinputcontrolform />} />
	       <Route path="Bmr" element={<Bmr />} />
	       <Route path="UseState" element={<UseState />} />
	       <Route path="UseEffectfirst" element={<UseEffectfirst />} />
	       <Route path="API" element={<API />} />
	       <Route path="Insert" element={<Insert />} />
	       <Route path="Delete" element={<Delete />} />
	       <Route path="Edit" element={<Edit />} />
	       <Route path="editrec/:id" element={<EditRecord />} />
	       <Route path="deleterec/:id" element={<Delete />} />
	       <Route path="Search" element={<Search />} />
	       <Route path="*" element={<Nopage />} />
           </Route>
	     </Routes>
          </BrowserRouter>
	</>
	);
  }
   
export default App;