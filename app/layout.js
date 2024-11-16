// import 'bootstrap/dist/css/bootstrap.min.css';
// import "../styles/globals.css";
import Header from "./components/Header.js"
import Footer from "./components/Footer.js";

export const metadata = {
  title: "One Ring Rentals - Home",
  description: "One Ring Rentals site built with Next.js",
  openGraph: {
    title: `One Ring Rentals - Home`,
    description: "A modern web application built with Next.js",
    siteName: "One Ring Rentals",
  },
};

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
      </head>

      <body>
        <div id="wrapper">
        <Header />
        { children }
        <Footer />
        </div>

      </body>

    </html>
  );
}
