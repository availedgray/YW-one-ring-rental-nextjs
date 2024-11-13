import Header from "../components/Header.js"
import Footer from "../components/Footer.js";


export default function HomePage() {
  return (
    <div id="wrapper">
      <Header />
        <Carousel />
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

      <Footer />
    </div>
    
  );
}
