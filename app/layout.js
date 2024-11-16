// 'use client';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import "../styles/globals.css";
import Header from "./components/Header.js"
import Footer from "./components/Footer.js";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>One Ring Rentals - Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link href="https://fonts.googleapis.com/css?family=Raleway:300,500,900%7COpen+Sans:400,700,400italic" rel="stylesheet" type="text/css" />
        <link href="css/bootstrap.min.css" rel="stylesheet" />
        <link href="css/style.css" rel="stylesheet" />
        <script src="js/common/modernizr.js"></script>
      </head>

      <body>
        <div id="wrapper">
        <Header />
        { children }
        <Footer />
        </div>

        <script src="js/common.js"></script>
        <script type="text/javascript" src="js/common/jquery-1.11.1.min.js"></script>
        <script type="text/javascript" src="js/common/bootstrap.min.js"></script>
        <script type="text/javascript" src="js/common/bootstrap-datepicker.js"></script>
        <script type="text/javascript" src="js/common/chosen.min.js"></script>
        <script type="text/javascript" src="js/common/bootstrap-checkbox.js"></script>
        <script type="text/javascript" src="js/common/jquery-browser.js"></script>
        <script type="text/javascript" src="js/scripts.js"></script>


      </body>

    </html>
  );
}
