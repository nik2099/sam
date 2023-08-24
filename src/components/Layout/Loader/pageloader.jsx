import React, { Fragment, useState, useEffect } from 'react';


const Pageloader = () => {

    const [show, setShow] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShow(false);
        }, 100);

        return () => {
            clearTimeout(timeout);
        };

    }, [show]);

    return (
        <Fragment>
            <div className={`loader-wrapper pageloader ${show ? '' : 'loderhide'}`}>
                <div className="theme-loader">
                        <div className="loader-box">
                            <div className="loader-6"></div>
                        </div>
                </div>
              
            </div>
        </Fragment>
    );
};

export default Pageloader;