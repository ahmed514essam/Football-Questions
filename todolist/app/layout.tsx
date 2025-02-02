
export const metadata = {
  title: "Football Quiz",
  icons: {
    icon: "/favicon.png", // Correct path (without "public/")
  },
};


import Footer from "./Components/Footer/Footer";
import FontAwesomeConfig from "./fontawesome";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.png" type="image/png" />
        <FontAwesomeConfig/>
      </head>
      <body style={{ minHeight: "100vh" , width: "100%" , margin: "0" , padding: "0"  }}>
        
      {children}
        <Footer/>
      </body>
    </html>
  );
}
