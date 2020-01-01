import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; //“connect” is a higher order component that lets us modify component to have access to redux

import { auth } from '../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';

const Header = ( {currentUser} ) => (

    <div className='header'>

        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>

        <div className='options'>

            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {   
                currentUser ? 
                <div className='option' onClick= {() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin'> SIGN IN </Link>
            }
        </div>

    </div>
);

const mapStateToProps = state => ({
    currentUser : state.user.currentUser        //here the state is rootreducer, user will be userreducer(from root-reducer.js) and currentuser will be null(as its intial value)
});

export default connect(mapStateToProps)(Header);

//In the above line the first argument mapStateToProps is a function that will allow us to access the state, 2nd argument is optional(not mentioned in the above line)
//And state is the root reducer.