import React from 'react';
import {NavigationContainer ,
        NavStyle,
        NavigationContainerList} from './navigation.styles';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { ReactComponent as IconCheckOut} from '../../asset/svg/009-tray.svg';

const Navigation = () => {
    return (
        <NavigationContainer className=" mb-lg">
            <NavStyle to="/" >COWNUT</NavStyle>
            <NavigationContainerList>
                <li >
                    <NavStyle to="/" link="true">Home</NavStyle>
                </li>
                <li> 
                    <NavStyle to="/collection" link="true">Food</NavStyle>
                </li>
                <li>
                    <NavStyle to="/login" link="true">Login</NavStyle>
                </li>
                <li>
                    <NavStyle to="/checkout" icon="true" >
                        <span>0</span>
                        <IconCheckOut as="svg" />  
                    </NavStyle>
                </li>
                <CartDropDown/>
            </NavigationContainerList>
        </NavigationContainer>
    )
}
export default Navigation;