import React, { Fragment, useState } from 'react';
import { LI } from '../../../../AbstractElements';

const LanguageClass = () => {
   
    return (
        <Fragment>
              <LI>
            
                <select className="form-select digits" id="langSwitch">
                    <option>DE</option>
                    <option>EN</option>
                </select>
              </LI>
        </Fragment>
    );
};

export default LanguageClass;