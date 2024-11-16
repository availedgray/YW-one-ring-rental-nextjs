"use client";

import ControlledCarousel from "./components/Carousel";
import HomeAdvancedSearch from "./components/HomeAdvancedSearch.js";
import FeaturedProperties from "./components/FeaturedProperties.js";
import PopularRegions from "./components/PopularRegions.js";
import RecentArticle from "./components/RecentArticle.js";
import LastMinuteDeals from "./components/LastMinuteDeals.js";
import Activity from "./components/Activity.js";

// import 'bootstrap/dist/css/bootstrap.min.css';

export default function HomePage() {
  return (
    <>

        <ControlledCarousel />
        <HomeAdvancedSearch />
            <div className="content">
                <div className="container">
                    <div className="row">

                        {/* main content */}
                        <div className="main col-sm-8">
                            <FeaturedProperties />
                            <PopularRegions />
                            <RecentArticle />
                        </div>

                        {/* sidebar */}
                        <div className="sidebar col-sm-4">
                            <LastMinuteDeals />
                            <Activity />
                        </div>                 
                    </div>
                </div>
            </div>       

    </>
    
  );
}
