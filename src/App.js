import { useEffect, useState } from "react";
import { useRoutes } from "react-router";
import Header from "./components/Header/Header";
import GlobalStyle from "./globalStyles";
import Home from "./views/Home/Home";

const routes = [{ path: "/", element: <Home /> }];

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    console.log('ran');
    if (offset > 20) {
      setScrolled(true);
      console.log("yes");
    } else {
      setScrolled(false);
      console.log("no");
    }
  };

  useEffect(() => {
    console.log('hi');
    window.addEventListener("scroll", handleScroll);

  }, [scrolled]);

  const element = useRoutes(routes);
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{element}</main>
    </>
  );
};

export default App;
