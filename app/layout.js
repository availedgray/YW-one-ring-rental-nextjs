// 'use client';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import "../styles/globals.css";
import Header from "./components/Header.js"
import Footer from "./components/Footer.js";
// import  HomePage  from "./page.js";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>One Ring Rentals - Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link href="https://fonts.googleapis.com/css?family=Raleway:300,500,900%7COpen+Sans:400,700,400italic" rel="stylesheet" type="text/css" />
        <link href="css/bootstrap.min.css" rel="stylesheet" />
        <link href="css/style.css" rel="stylesheet" />
        <script src="js/common/modernizr.js"></script>
  </head>

      <body>
        <Header />
        { children }
        <Footer />
      </body>

    </html>
  );
}
