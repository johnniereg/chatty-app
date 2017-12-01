import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <nav className='navbar'>
                <a href='/' className='navbar-brand'>jChat</a>
                <span className='navbar-brand total-clients'> 
                    Total users online: {this.props.clients} 
                </span>
            </nav>
        )
    }

}

export default NavBar;