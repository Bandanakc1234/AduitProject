import React, { useEffect } from 'react'

import Navbar from '../../layout/Navbar'
import Footer from '../../layout/Footer'
import './home.css'
import Aos from "aos";
import 'aos/dist/aos.css'
import team from './../../assets/images/team.jpg'
import international from './../../assets/images/international.jpg'
import company from './../../assets/images/company.jpeg'
import Nepal from './../../assets/images/Nepal.jpg'
import merge from './../../assets/images/merge.jpg'
import aduit from './../../assets/images/aduit.jpg'
import consulting from './../../assets/images/consulting.jpeg'
import tax from './../../assets/images/tax.jpg'
import merger from './../../assets/images/merger.jpg'

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaChevronRight } from 'react-icons/fa';
const Home = () => {
  useEffect(() => {
    Aos.init()
  })

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: dots => (
      <div style={{ position: 'relative', top: '-50px' }}>
        <ul style={{ margin: 0 }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className="custom-dot" style={{
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        border: "2px solid white"
      }}
      />
    ),
    dotsClass: "slick-dots custom-dots"
  };


  return (
    <>
      <Navbar />
      <div>
        <div className="image text-white lg:p-10 h-[70vh] sm:h-[30vh] md:h-[40vh] lg:h-40vh xl:h-50vh 2xl:h-50vh">
          {/* <div className="home lg:p-20 lg:text-xl lg:w-3/5  md:p-10 md:text-base md:w-5/6 p-3 text-sm text-white"> */}
          {/* <img src={image1} alt="Description of image" className="your-image-class" /> */}
          <h1 className='uppercase pt-16 xl:text-6xl lg:text-3xl w-1/3 font-semibold'>Nepal Budget 2081/82 | Highlights from Tax Perspective</h1>
          <p className='pt-10 w-1/2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, voluptatem provident. Corporis
            dolores nisi cupiditate sunt minus voluptas molestiae necessitatibus voluptates, consequuntur,
            non rem optio nemo quam sit quis accusantium quas omnis. Molestiae voluptatem officia nesciunt,
            blanditiis aperiam eligendi adipisci.</p>
          <div className="pt-6">
            <button className="bg-white h-9 text-lg rounded-md cursor-pointer text-black hover:bg-blue-900 hover:text-white" data-aos="zoom-in" data-aos-duration="1000"><a href="/contact" className="p-3">Contact Us</a></button>
          </div>
        </div>

        {/* start */}
        <div className="body_mid h-auto bg-blue text-black w-full md:p-9  lg:flex lg:justify-between ">
          <div className="left lg:w-1/2 md:w-full sm:w-full" data-aos="fade-up" data-aos-duration="2000">
            <h1 className="line-after uppercase text-blue-800 lg:text-xl font-semibold text-xl md:pt-5 pt-3">Publication</h1>
            <p className="lg:pt-16 lg:text-3xl font-semibold lg:w-full md:text-base md:w-5/6 md:pt-10 pt-3 text-sm w-full">
              Handbook on Procedure & Compliance - Foreign Company Registration in Nepal</p>
            <p className=" pt-10 lg:w-full md:w-5/6 text-xl w-full">
              A Foreign investor can invest or operate a business in Nepal (i) by incorporating a limited liability company in Nepal, (ii) by acquiring shares of a limited liability company already in existence.</p>

            <div className="cn">
              <button className="h-10 text-lg border-2 border-blue-800 text-blue-800 cursor-pointer mt-10 hover:bg-blue-800 hover:text-white "><a href="/about" className="md:p-5 p-2 uppercase">read more</a></button>
            </div>
          </div>
          <div className="m-3 lg:w-1/2">
            <img src={international} alt="" className="w-10/12 h-5/6 shadow-lg duration-300 ease-in-out hover:scale-90 mt-10 ml-10" />
          </div>
        </div>

        <div className="h-auto bg-blue text-black w-full lg:flex lg:justify-between ">
          <div className=" lg:w-1/2">
            <img src={company} alt="" className="w-10/12 h-5/6 shadow-lg duration-300 ease-in-out hover:scale-90 mt-10 ml-10" />
          </div>
          <div className="left lg:w-1/2 md:w-full sm:w-full" data-aos="fade-up" data-aos-duration="2000">
            <h1 className="line-after uppercase text-blue-800 lg:text-xl font-semibold text-xl md:pt-5 pt-3">Publication</h1>
            <p className="lg:pt-16 lg:text-3xl font-semibold lg:w-full md:text-base md:w-5/6 md:pt-10 pt-3 text-sm w-full">
              Digital Service Tax - Introduced by Finance Act 2079/80</p>
            <p className=" pt-10 lg:w-full md:w-5/6 text-xl w-full">
              Finance Act 2079/80 (2022/23) has introduced Digital Service Tax on Digital Services provided by Non Resident Person to the Resident Consumers.</p>
            <div className="\">
              <button className="h-10 text-lg border-2 border-blue-800 text-blue-800 cursor-pointer mt-10 hover:bg-blue-800 hover:text-white "><a href="/about" className="md:p-5 p-2 uppercase">read more</a></button>
            </div>
          </div>
        </div>

        <div className="body_mid h-auto bg-blue text-black w-full md:p-9  lg:flex lg:justify-between ">
          <div className="left lg:w-1/2 md:w-full sm:w-full" data-aos="fade-up" data-aos-duration="2000">
            <h1 className="line-after uppercase text-blue-800 lg:text-xl font-semibold text-xl md:pt-5 pt-3">Publication</h1>
            <p className="lg:pt-16 lg:text-3xl font-semibold lg:w-full md:text-base md:w-5/6 md:pt-10 pt-3 text-sm w-full">
              Highlights of Monetary Policy 2079/80 (2022/23)</p>
            <p className=" pt-10 lg:w-full md:w-5/6 text-xl w-full">
              Central Bank of Nepal unvealed it's Monetary Policy on July 22, 2022 for the Fiscal Year 2079/80 (2022/23). Governor Mr. Maha Prasad Adhikari through the annual monetary policy attempts to control the inflation.</p>
            <div className="cn">
              <button className="h-10 text-lg border-2 border-blue-800 text-blue-800 cursor-pointer mt-10 hover:bg-blue-800 hover:text-white "><a href="/about" className="md:p-5 p-2 uppercase">read more</a></button>
            </div>
          </div>
          <div className="m-3 lg:w-1/2">
            <img src={Nepal} alt="" className="w-10/12 h-5/6 shadow-lg duration-300 ease-in-out hover:scale-90 mt-10 ml-10" />
          </div>
        </div>



        {/* third content start */}
        <div className="bg-blue-900 text-white md:p-8 p-3"></div>

        <div className="bg-gray-100">
          <div className='flex justify-between'>
            <div className="lg:text-3xl font-bold text-2xl pt-10 pl-10">What we do</div>
            <div className='underline pt-10 pr-10'>View All</div>
          </div>
          <div className='pb-10'>
            <div className='flex justify-around gap-10 p-10'>
              <div className="w-1/4 rounded-md shadow-2xl h-2/3" data-aos="zoom-in" data-aos-duration="1000">
                <img src={tax} alt="" className="w-full h-60 shadow-lg duration-300 ease-in-out hover:scale-90" />
                <div className='p-3 text-blue-800'>
                  <h2 className="text-xl font-semibold">Tax Advisory</h2>
                  <li className='flex py-2'>
                    <a href="/about" className='text-md'>Read More</a>
                    <FaChevronRight size={12} className='mt-2 ml-1' />
                  </li>
                </div>
              </div>

              <div className="w-1/4 rounded-md shadow-2xl h-2/3" data-aos="zoom-in" data-aos-duration="1000">
                <img src={consulting} alt="" className="w-full h-60 shadow-lg duration-300 ease-in-out hover:scale-90" />
                <div className='p-3 text-blue-800'>
                  <h2 className="text-xl font-semibold">Risk Advisory & Consulting</h2>
                  <li className='flex py-2'>
                    <a href="/about" className='text-md'>Read More</a>
                    <FaChevronRight size={12} className='mt-2 ml-1' />
                  </li>
                </div>
              </div>

              <div className="w-1/4 rounded-md shadow-2xl h-2/3" data-aos="zoom-in" data-aos-duration="1000">
                <img src={aduit} alt="" className="w-full h-60 shadow-lg duration-300 ease-in-out hover:scale-90" />
                <div className='p-3 text-blue-800'>
                  <h2 className="text-xl font-semibold">Audit & Assurance</h2>
                  <li className='flex py-2'>
                    <a href="/about" className='text-md'>Read More</a>
                    <FaChevronRight size={12} className='mt-2 ml-1' />
                  </li>
                </div>
              </div>

              <div className="w-1/4 rounded-md shadow-2xl h-2/3" data-aos="zoom-in" data-aos-duration="1000">
                <img src={merge} alt="" className="w-full h-60 shadow-lg duration-300 ease-in-out hover:scale-90" />
                <div className='p-3 text-blue-800'>
                  <h2 className="text-xl font-semibold">Merger & Acquisitions</h2>
                  <li className='flex py-2'>
                    <a href="/about" className='text-md'>Read More</a>
                    <FaChevronRight size={12} className='mt-2 ml-1' />
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* third content end */}


        {/* second content start */}
        <div className="body_mid h-auto bg-blue-900 text-white w-full lg:flex lg:justify-between ">
          <div className="left lg:w-1/2 md:w-full sm:w-full" data-aos="fade-up" data-aos-duration="2000">
            <h1 className="line-after-career text-xl text-white font-bold md:mt-10 md:p-10 p-3">Career</h1>
            <p className="lg:py-16 lg:text-3xl font-bold lg:w-full md:text-base md:w-5/6 md:p-10 p-3 text-sm w-full">Take your career to the next level with AduitForm</p>

            <div className="cn">
              <button className="h-10 text-lg border-2 border-white cursor-pointer ml-5 text-white hover:bg-blue-700 "><a href="/about" className="md:p-5 p-2">Discover Me</a></button>
            </div>
          </div>
          <div className="right lg:w-1/2">
            <img src={team} alt="" className="w-full h-full" />
          </div>
        </div>

        <div className="carousel w-full gap-4 flex flex-col lg:flex-row justify-between p-10">
          <div className="w-full lg:w-1/2 h-full text-white">
            <Slider {...settings}>
              <div className="firstflick w-full">
                <div className='text-2xl font-semibold mt-96 p-5' data-aos="fade-down" data-aos-duration="1000">Taxing Mergers & Acquisitions in Nepal</div>
                <button className="ms-5 p-1 text-lg cursor-pointer text-white bg-purple-500 hover:text-white" data-aos="fade-down" data-aos-duration="1000"><a href="/contact" className="p-2">Blog</a></button>
              </div>
              <div className="secondflick w-full">
                <div className='text-2xl font-semibold mt-96 p-5 ' data-aos="fade-down" data-aos-duration="1000">Taxing Telia Sonera & Axiata Deal - Ncell, NBSM's Take</div>
                <button className="ms-5 p-1 text-lg cursor-pointer text-white bg-purple-500 hover:text-white" data-aos="fade-down" data-aos-duration="1000"><a href="/contact" className="p-2">Blog</a></button>
              </div>
              <div className="thirdflick w-full">
                <div className='text-2xl font-semibold uppercase mt-96 p-5' data-aos="fade-down" data-aos-duration="1000">Starting a Business in Nepal?</div>
                <button className="ms-5 p-1 text-lg cursor-pointer text-white bg-purple-500 hover:text-white" data-aos="fade-down" data-aos-duration="1000"><a href="/contact" className="p-2">Blog</a></button>
              </div>
              <div className="fourthflick w-full">
                <div className='text-2xl font-semibold uppercase mt-96 p-5' data-aos="fade-down" data-aos-duration="1000">TAX FACT INCOME FROM EMPLOYMENT</div>
                <button className="ms-5 p-1 text-lg cursor-pointer text-white bg-purple-500 hover:text-white" data-aos="fade-down" data-aos-duration="1000"><a href="/contact" className="p-2">Blog</a></button>
              </div>
            </Slider>
          </div>
          <div className="w-1/2 flex flex-col gap-4 text-white">
            <div className='glorious w-full'>
            <div className='text-xl font-bold mt-36 p-3' data-aos="fade-down" data-aos-duration="1000">
            12 Glorious years of NBSM</div>
            <button className="ms-5 p-1 text-lg cursor-pointer text-white bg-pink-600 hover:text-white" data-aos="fade-down" data-aos-duration="1000"><a href="/contact" className="p-1">News & Events</a></button>
            </div>
            <div className='flex gap-4 w-full h-1/2'>
              <div className='investment w-1/2'>
              <div className='text-xl font-bold mt-28 p-3' data-aos="fade-down" data-aos-duration="1000">
              New By Laws by Central Bank for Foreign Investment in Nepal</div>
            <button className="ms-5 p-1 text-lg cursor-pointer text-white bg-green-500 hover:text-white" data-aos="fade-down" data-aos-duration="1000"><a href="/contact" className="p-1">News & Events</a></button>
              </div>
              <div className='extension w-1/2'>
              <div className='text-xl font-bold mt-28 p-3' data-aos="fade-down" data-aos-duration="1000">
              Extention to file Tax Returns till Poush 25</div>
            <button className="ms-5 p-1 text-lg cursor-pointer text-white bg-yellow-400 hover:text-white" data-aos="fade-down" data-aos-duration="1000"><a href="/contact" className="p-1">News & Events</a></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home