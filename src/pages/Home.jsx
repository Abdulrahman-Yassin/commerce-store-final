/*eslint-disable */

// import { Outlet } from "react-router-dom";
import AdAndCategories from "../components/AdAndCategories"
import FlashSalesCount from "../components/FlashSalesCount"
import ListSlider from "../components/ListSlider"
import Section from "../components/Section"
// import Categories from "../components/Categories"
import ThisMonth from "../components/ThisMonth"
import Ad from '../components/Ad'
import OurProducts from '../components/OurProducts'
import Featured from '../components/Featured'

function Home() {

  return(
      <>
          <AdAndCategories />
          <FlashSalesCount />
          <ListSlider/>
          <Section
          title1="This Month"
          title2="Best Selling Products"
          />
          <ThisMonth/>
          <Ad/>
          <Section
          title1="Our Products"
          title2="Explore Our Products"
          />
          <OurProducts/>
          <Section
          title1="Featured"
          title2="New Arrival"
          />
          <Featured/>
      </>
  )
}

export default Home