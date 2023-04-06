
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet, useNavigation } from 'react-router-dom'
import Loading from './components/Loading';

function App() {
  const navigation = useNavigation();
  return (
    <div >
      {/* header part */}
      <Header></Header>
      {/* main content */}
      <div>{ navigation.state === "loading" ? <Loading></Loading> : ""}</div>
      <Outlet></Outlet>
      {/* footer */}
      <Footer></Footer>
    </div>
  )
}

export default App
