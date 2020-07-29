import React from 'react'
import classNames from 'classnames'
import {Link} from 'react-router-dom'

const HeaderNav = ({
    className,
    topDivider,
    ...props
}) => {
    
    const classes = classNames(
        'header-nav' ,
        topDivider && 'has-top-divider',
        className
    )

    return( 
        <nav
            {...props}
            className={classes}
        >
            <ul className="list-reset text-xs">
                <li>
                    <Link to="#0">Contact</Link>
                </li>
                <li>
                    <Link to="#0">About us</Link>
                </li>
                <li>
                    <Link to="#0">FAQ's</Link>
                </li>
                <li>
                    <Link to="#0">Support</Link>
                </li>
            </ul>


        </nav>
    )

}

export default HeaderNav