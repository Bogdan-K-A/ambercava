import { Raleway } from "next/font/google";
import "./style/globals.scss";
import "./style/modernNormalize.scss";
import Footer from "./coponents/Footer/Footer";
import Header from "./coponents/Header/Header";

const raleway = Raleway({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Ambercava",
  description: "Етот проект создан с помошью Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
