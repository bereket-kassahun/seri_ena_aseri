
import { Header } from '../components/header'
import Banner from '../components/banner/Banner'
import { Footer } from '../components/footer/Footer';
import { JoinUs } from '../components/sections/JoinUs'
import { Categories } from '../components/sections/Categories';
import '../style/custom-column.css'
const Home = () => {
  return (
    <div className="">
      <Header/>
      <Banner />
      <Categories />
      <JoinUs />
      <Footer/>
    </div>
  );
}

export default Home;
