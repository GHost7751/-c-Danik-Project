import React from 'react';
import TransferImg from '../Components/TransferPage/TransferGallery';

import TransferPageNavBar from '../Components/TransferPage/TransferPageNavBar';

const TransferPage = () => {
    return (
        <>
        <div className='content container'>
            <TransferPageNavBar />
            <TransferImg />
        </div>
        </>
    );
};

export default TransferPage;