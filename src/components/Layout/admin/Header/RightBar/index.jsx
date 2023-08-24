
import React, { Fragment } from 'react';
import { Maximize } from 'react-feather';
import { LI, UL } from '../../../../AbstractElements';
import CustomizerContext from '../../../../../_helper/Customizer';
import LanguageClass from './Language';
import ProfileClass from './profile';
import MoonLight from './MoonLight';
import { useContext, useState, useEffect} from 'react';
import { toast } from 'react-toastify';

const Rightbar = () => {

     
    const { sidebarResponsive } = useContext(CustomizerContext);
    //full screen function
    function goFull() {
        if ((document.fullScreenElement && document.fullScreenElement !== null) ||
            (!document.mozFullScreen && !document.webkitIsFullScreen)) {
            if (document.documentElement.requestFullScreen) {
                document.documentElement.requestFullScreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullScreen) {
                document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
        }
    }

    
    return (
        <Fragment>
            <div className="nav-right col pull-right right-menu p-0">
                <UL attrUL={{ className: `simple-list d-flex flex-row nav-menus ${sidebarResponsive ? 'open' : ''}` }}>
                    <LI><a className="text-dark" href="#javascript" onClick={goFull}>
                        <Maximize />
                    </a></LI>
                    {/* <MoonLight /> */}
                    <LanguageClass />
                    <ProfileClass/>
                </UL>
            </div>
        </Fragment >
    );
};

export default Rightbar;