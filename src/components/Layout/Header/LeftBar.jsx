import React, { useContext, useState, Fragment } from 'react';
import { AlignCenter } from 'react-feather';
import Link from 'next/link';
// import Image from 'next/image'
import { Image } from '../../AbstractElements';
import CheckContext from '../../../_helper/Customizer';

const Leftbar = () => {

    const { mixLayout, toggleSidebar, toggleIcon } = useContext(CheckContext);
    const [toggle, setToggle] = useState(false);

    const openCloseSidebar = () => {
        setToggle(!toggle);
        console.log(100)
        toggleSidebar(toggle);
    };

    return (
        <Fragment>
            
            <div className="main-header-left">
                {mixLayout ?
                    <div className="logo-wrapper">
                        <Link href={`/campaigns`}>
                            <img src={'/assets/img/logo.svg'} className="img-fluid d-inline"  width="100" height="50" alt="" />
                        </Link>
                    </div>
                    :
                    <div className="logo-wrapper">
                        <Link href={`/campaigns`}>
                             <img src={'/assets/img/logo.svg'} className="img-fluid" width="100" height="50" alt="" />
                        </Link>
                    </div>
                }
                <div className="toggle-sidebar" onClick={() => openCloseSidebar()}>
                    <AlignCenter className="status_toggle middle" id="sidebar-toggle" />
                </div>
            </div>
        </Fragment >
    );
};

export default Leftbar;