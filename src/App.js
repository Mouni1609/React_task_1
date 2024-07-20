
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import image from './assests/sideimage2.jpg';
import profile from './assests/profile2.webp';
// const image
//   './assests/sideimage.jpg',
//   './assests/profile2.webp '
// ];


function App() {
  return (
    <>
      <div className='background'>
        <div className='row'>
          <img src={image} alt="diet" className='cus-shadow col-sm-6 image-size' />
          <div className='col-sm-6 detail'>
            <div class="d-flex flex-column justify-content-between h-100">
              <div>
                <div className=' d-flex align-item-center pb-10'>
                  <img src={profile} alt="profile" className="profile-size" />
                  <div className='padding-10'>
                    <div className='text-secondary pb-1'>Admin</div>
                    <div className='text-secondary'>May 16,2023<span className='font-size-18 px-2'>.</span> 2 min</div>
                  </div>
                </div>
                <div>
                  <div className='text-success font-size-30 pb-10'>Good fat vs, bad fat</div>
                  <div className='text-secondary font-size-24'>
                    Create a blog post subtitle that
                    <br />
                    summaries your post in a few short,
                    <br />
                    punchy sentences and entices your...
                  </div>
                </div></div>
              <div className='container'>
                <div className='card-footer'></div>
                <div className='d-flex align-iteam-center justify-content-between'>
                  <div className='d-flex align-item-center pt-1'>
                    <div className='pe-5'>0 views</div>
                    <div>0 comments</div>
                  </div>
                  <div className='pt-1'>
                    <i className='like-icon fa-regular fa-heart'></i>
                  </div>
                </div>
              </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
