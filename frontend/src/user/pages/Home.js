
import { Header } from '../components/header'
import Banner from '../components/banner/Banner'
import { Footer } from '../components/footer/Footer';
import { JoinUs } from '../components/sections/JoinUs'
import { Categories } from '../components/sections/Categories';
import '../../style/custom-column.css'
import { ProfessionalServices } from '../components/sections/ProfessionalServices';
import { TradersServices } from '../components/sections/TradersServices';
import { FeaturedServices } from '../components/sections/FeaturedServices';
import SearchBar from '../components/banner/SearchBar';
export const Home = () => {
  return (
    <div className="">
      <SearchBar />
      <FeaturedServices />
      <ProfessionalServices />
      <TradersServices />
      <JoinUs />
    </div>
  );
}
