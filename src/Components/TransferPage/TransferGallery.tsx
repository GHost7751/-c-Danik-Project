import React from 'react';

const TransferImg = () => {
    return (
        <div className='photo'>
            <figure>
          <img src={process.env.PUBLIC_URL + 'assets/Transfer/1.jpg'} alt='222' className='company_img' />
        </figure>
        <figure>
          <img src={process.env.PUBLIC_URL + 'assets/Transfer/2.jpg'} alt='222' className='company_img' />
        </figure>
        <figure>
          <img src={process.env.PUBLIC_URL + 'assets/Transfer/3.jpg'} alt='222' className='company_img' />
        </figure>
        <figure>
          <img src={process.env.PUBLIC_URL + 'assets/Transfer/4.jpg'} alt='222' className='company_img' />
        </figure>
        <figure>
          <img src={process.env.PUBLIC_URL + 'assets/Transfer/5.jpg'} alt='222' className='company_img' />
        </figure>
        <figure>
          <img src={process.env.PUBLIC_URL + 'assets/Transfer/6.jpg'} alt='222' className='company_img' />
        </figure>
        </div>
    );
};

export default TransferImg;