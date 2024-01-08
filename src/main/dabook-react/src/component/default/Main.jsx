import Header from "./Header";
import Footer from "./Footer";


const Main = ({ isLogin, logout, no }) => {

    return (
        <>
            <Header isLogin={isLogin} logout={logout} />
            <Footer />
        </>
    );
};

export default Main;