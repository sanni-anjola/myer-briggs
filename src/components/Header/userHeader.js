import React, {Component} from 'react';
import {ReactComponent as SemLogo} from "../../images/semfulllogo.svg";
class Header extends Component {
    render() {
        const {user} = this.props;
        return (
            <div className="container-fluid">
                <div className="row p-4 bg-white shadow-3">
                    <div className="col-md-9 mr-5 col-12">
                        <SemLogo width="220px"/>
                    </div>
                    <div className="names col-12 pr-5 col-md-2 text-md-right d-flex justify-content-end ">
                        <p className="dropdown-toggle mr-5 user-id text-md-right">Hello, skillz</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;