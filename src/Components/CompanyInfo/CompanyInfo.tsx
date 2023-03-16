import React from 'react';
import CompanyGallery from './CompanyGallery';
import './CompanyInfo.css'
import CompanyMain from './CompanyMain';
import CompanyRec from './CompanyRec';

const CompanyInfo = () => {
    return (
        <>
        <h1 className='companyTitle'>О Компании</h1>
            <div className='company'>
                <CompanyMain />
                <CompanyRec />

            </div>
        <CompanyGallery />
        </>
    );
};

export default CompanyInfo;