import React from 'react';
import svgLogo from '../Assets/Logo.svg'
import CardList from "../Components/CardList";
import {useAuth} from "../hooks/useAuth";

function Main() {
    const [search, setSearch] = React.useState("")
    const {isAuth,  email, handleLogin} = useAuth();
    function setQuery(e) {
        setSearch(prevState => prevState = e.target.value)
    }
    function debounce(func, timeout = 300) {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(this, args);
            }, timeout);
        };
    }

    let newQuery = debounce((e) => setQuery(e))


    return (
        <div className="main-page">
            <button
                onClick={handleLogin}
                className={"auth-btn"}
            >
                {isAuth ? "Log out" : "Sign in"}
            </button>
            <span
                className={"auth-info"}
            >
                {isAuth ? email : ""}
            </span>

            <div className={"container"}>
                <div className={"logo"}>
                    <img src={svgLogo} alt="Logo" width={300} height={100}/>
                </div>
                <div className="search">
                    <input
                        type="search"
                        placeholder={"Filter by name"}
                        onChange={newQuery}
                    />
                </div>
                <CardList
                    filterQuery={search}
                />
            </div>
        </div>
    );
}

export default Main;
