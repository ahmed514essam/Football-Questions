import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import FontAwesomeConfig from "./fontawesome";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <FontAwesomeConfig/>
      </head>
      <body style={{ minHeight: "100vh" }}>
        <Header/>
      {children}
        <Footer/>
      </body>
    </html>
  );
}
