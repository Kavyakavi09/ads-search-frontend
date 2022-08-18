import React from 'react';

function Ads({ ads }) {
  return (
    <div className='col pt-5'>
      <div class='card' style={{ maxWidth: '540px' }}>
        <div class='row g-0'>
          <div class='col-md-4'>
            <img
              src={ads.image}
              class='image-fluid rounded-start image'
              alt={ads.name}
            />
          </div>
          <div class='col-md-8'>
            <div class='card-body text-center'>
              <h5 class='card-title mb-3'>{ads.name}</h5>
              <h6 class='card-title'>{ads.title}</h6>
              <p class='card-text'>{ads.description}</p>
              <a
                href={ads.companyUrl}
                class='btn btn-warning'
                target={'_blank'}>
                Visit Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ads;
