import React, { Fragment, useState, useEffect } from 'react';


const Loader = () => {

    const [show, setShow] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShow(false);
        }, 1000);

        return () => {
            clearTimeout(timeout);
        };

    }, [show]);

    return (
        <Fragment>
            <div className={`loader-wrapper ${show ? '' : 'loderhide'}`}>
                <div className="theme-loader">
                        <div class="loader-box">
                            <div class="loader-15"></div>
                        </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Loader;