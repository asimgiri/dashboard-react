import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Dashboard from '../containers/Dashboard';
import Customers from '../containers/Customers';
import Services from '../containers/Services';
import Authentication from '../containers/Authentication';
import Settings from '../containers/Settings';

export default function Menu() {
    return (
        <Router>
            <div className="columns">
                <div className="column is-narrow">
                    <aside className="menu">
                        <ul className="menu-list">
                            <li><NavLink to="/"><i className="fas fa-home"></i> Dashboard</NavLink></li>
                            <li><NavLink to="/customers" ><i className="fas fa-users"></i> Customers</NavLink></li>
                            <li>
                                <NavLink to="/services" className=""><i className="fas fa-window-restore"></i> Services</NavLink>
                                <ul className="nested">
                                    <li><a><i className="fas fa-chevron-right"></i> Members</a></li>
                                    <li><a><i className="fas fa-chevron-right"></i> Plugins</a></li>
                                    <li><a><i className="fas fa-chevron-right"></i> Add a member</a></li>
                                </ul>
                            </li>
                            <li><NavLink to="/authentication"><i className="fas fa-check-circle"></i>Authentication</NavLink></li>
                            <li><NavLink to="/settings"><i className="fas fa-cog"></i> Settings</NavLink></li>
                        </ul>
                    </aside>
                </div>

                <div className="column containers-column">

                    <Route exact path="/" component={Dashboard} />
                    <Route path="/customers" component={Customers} />
                    <Route path="/services" component={Services} />
                    <Route path="/authentication" component={Authentication} />
                    <Route path="/settings" component={Settings} />


                </div>

            </div>
        </Router>
    )
}