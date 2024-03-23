import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function RootLayout({children}) {
    return (
      <div className="">
        <div className="">
          <Header />
          <main>{children}</main>
          
        </div>
        {/* <Footer /> */}
      </div>
    );
  };