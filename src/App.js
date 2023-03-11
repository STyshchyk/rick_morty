import './App.scss';
import React from 'react';
import svgLogo from './UI/Logo.svg'
import CardList from "./Components/CardList";

function App() {
    const [search, setSearch] = React.useState("")

    function setQuery(e) {
        setSearch(prevState => prevState = e.target.value)
    }

    return (
        <div className="App">
            <div className={"container"}>
                <div className={"logo"}>
                    <img src={svgLogo} alt="Logo" width={300} height={100}/>
                </div>
                <div className="search">
                    <input
                        type="search"
                        placeholder={"Filter by name"}
                        onChange={setQuery}
                        value={search}
                    />
                </div>
                <CardList
                    filterQuery={search}
                />
            </div>
        </div>
    );
}

export default App;
