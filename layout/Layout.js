import Header from "./header/Header";

const Layout = ({ children }) => {
  return (
    <div id="main-wrapper">
      <Header />
      <div className="page-wrapper">
        <div className="container-fluid">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
