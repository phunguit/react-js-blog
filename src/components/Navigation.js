import React, { Component } from 'react';
import { Route, Link }          from 'react-router-dom';

var routesMenu = [
    {
        to: '',
        exact: true,
        name: 'Home'
    },
    {
        to: '/about',
        exact: true,
        name: 'About'
    },
    {
        to: '/blog',
        exact: true,
        name: 'Blog'
    },
    {
        to: '/contact',
        exact: true,
        name: 'Contact'
    }
];

const NavMenuLink = ({ menu }) => (
    <Route
        path={menu.to}
        exact={menu.exact}
        children={
            ({ match }) => {
                var classActive = match ? "active" : "";
                return (
                    <li className={`nav-item px-lg-4 ${classActive}`}>
                        <Link className='nav-link text-uppercase text-expanded' to={menu.to}>{menu.name}</Link>
                    </li>
            )}
        }
    />
);

class Navigation extends Component {
  render() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-faded py-lg-4">
                <div className="container">
                    <a className="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none" href="#">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav mx-auto">
                            { this.getNavMenu(routesMenu) }                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
  }

  getNavMenu(routesMenu) {
    return routesMenu.map((menu, index) => {
        return (
            <NavMenuLink key={ index } menu={ menu } />
        );
    });
  }
}

export default Navigation;