import React, {ReactElement} from 'react'
import {Nav, Footer} from './index'

const Layout: React.FC<LayoutInterface> = ({children}) => {
    return (
        <div>
            <Nav/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout

interface LayoutInterface {
    children: ReactElement
}