import { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { getAds } from '../actions/product';
import { useSelector } from 'react-redux/es/exports';
import Navbar from '../components/Navbar';
import Ads from '../components/Ads';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAds());
  }, [dispatch]);

  const { AdsDetails, isLoading } = useSelector((state) => state.Ads);

  if (isLoading) {
    return <div className='text-center fs-3 fw-bold mt-5'>Loading...</div>;
  }

  if (!AdsDetails.length) {
    return (
      <>
        <div className='text-center fs-4 fw-bold mt-5'>No Data Found</div>
        <div className='text-center mt-5'>
          <button className=' btn btn-primary' onClick={() => navigate('/')}>
            Go Back
          </button>
        </div>
      </>
    );
  }

  return (
    <div>
      <Navbar />
      <div className='container pt-3 mb-5'>
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 mt-5'>
          {AdsDetails.map((ads) => {
            return <Ads ads={ads} key={ads._id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
