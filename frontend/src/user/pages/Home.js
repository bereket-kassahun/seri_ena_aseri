
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
import Presentation from '../components/presentation';
import { Carousel } from '../components/carousel';
import { useEffect } from 'react';
import { WorkWithUs } from '../components/sections/WorkWithUs';
import { Marketing } from '../components/sections/Marketing';
export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="">
      {/* <SearchBar /> */}
      <Presentation/>
      <JoinUs />
      <Carousel/>
      <FeaturedServices />
      {/* <ProfessionalServices /> */}
      {/* <TradersServices /> */}
      <WorkWithUs/>
      {/* <Marketing/> */}
    </div>
  );
}
