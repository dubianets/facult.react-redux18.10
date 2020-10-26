import React from "react";
import AddCArd from "./AddCard";
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./Home";
import  {BrowserRouter , Switch, Route} from "react-router-dom";



function Header(props) {
    return (
        <>

            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <a className="navbar-brand" href='/'> <img
                    src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png'}
                    height='30'
                    width='40'
                    className='d-inline-block align-top'
                    alt='Logo'
                />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">+++</span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Home">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown link
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <AddCArd columns={props.columns} />
            </nav>

            <BrowserRouter>

                <Switch>

                    <Route exact path='/' component={Home}/>

                </Switch>

            </BrowserRouter>

        </>
    )
}

export default Header;