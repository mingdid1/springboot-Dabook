import Header from "./Header";


const Main = ({ isLogin, logout, no }) => {

    return (
        <>
            <Header isLogin={isLogin} logout={logout} />
        </>
    );
};

export default Main;