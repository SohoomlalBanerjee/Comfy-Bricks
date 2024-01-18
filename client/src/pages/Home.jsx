import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { Swiper, SwiperSlide } from 'swiper/react';
import cover from '../assets/Cover.jpg'
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';
import './Home.css'
import  { FaInstagram,FaLinkedin,FaTwitter } from 'react-icons/fa';

//Sohoomlal Banerjee

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  console.log(offerListings);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        log(error);
      }
    };
    fetchOfferListings();
  }, []);
  return (
    <div  style={{backgroundImage: `url(${cover})`}} className='home'>
      {/* top */}
      <div   className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto '>
        <h1 className='text-white font-bold text-3xl lg:text-6xl'>
          Open your doors to 
          <p > <span className='text-yellow-500'> Extraordinary</span> </p>
          living.
        </h1>
        <div className='text-white text-xs sm:text-sm'>
          ComfyBricks is the best place to find your next perfect place to
          live.
          <br />
          We have a wide range of properties for you to choose from.
        </div>
        <br />
        <Link
          to={'/search'}
          
        >
          <a style={{borderRadius:'20px'}} href="#_" class="bg-white relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 hover:text-white group hover:bg-gray-50">
<span class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
<span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="relative">Lets get started...</span>
</a>
        </Link>
      </div>
      {/* Lets get started... */}


      <div style={{borderRadius:'10px'}} className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10 mt-120vh bg-white '>
        {offerListings && offerListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent offers</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>Show more offers</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent places for rent</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>Show more places for rent</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent places for sale</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=sale'}>Show more places for sale</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
      <footer style={{  textAlign: 'center', padding: '20px' }} className='bg-slate-300'>
      

      
      <ul style={{ listStyle: 'none', padding: 0, margin: '10px 0' }}>
        <li style={{ display: 'inline-block', marginRight: '10px' }}><a href="https://www.instagram.com/jachhe.tai?igsh=bGMydzdvbGxrNHFs" target="_blank" rel="noopener noreferrer"><FaInstagram/>  </a></li>
        <li style={{ display: 'inline-block', marginRight: '10px' }}><a href="https://www.linkedin.com/in/sohoomlal-banerjee-689860254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer"><FaLinkedin/> </a></li>
        <li style={{ display: 'inline-block', marginRight: '10px' }}><a href="https://x.com/jachhe_tai?t=xPqjeqY13pCzychF2uHmUw&s=09" target="_blank" rel="noopener noreferrer"><FaTwitter/> </a></li>
      
      </ul>

      &copy; 2024 Sohoomlal Banerjee. All rights reserved.
    </footer>
    </div>
  );
}
