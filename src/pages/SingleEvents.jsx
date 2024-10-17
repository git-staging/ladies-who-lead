import { faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import MemberCards from '../components/MemberCards';
import MemberData from '../data/MemberData.json';
import AboutEvent from '../components/AboutEvent';
import UpcomingEvents from './UpcomingEvents';

const SingleEvents = ({events}) => {
    const {id} = useParams();
    const event = events.find(event => event.id === id);

    if(!event){
        return <div>Event Not Found</div>
    }
  return (
    <div>
        {/* Top Breadcrumb */}
        <div className='bg-teal-600'>
            <div className='container mx-auto'>
                <div className='singleEvents py-5 flex flex-col gap-2'>
                    <h4 className='eventTitle'>{event.title}</h4>
                    <div className='flex flex-col gap-3'>
                        <div className='eventDate flex gap-2'>
                            <FontAwesomeIcon icon={faCalendarAlt} className="text-white text-xl" />
                            {event.fullDate}, {event.TimeFrom} to {event.TimeTo} IST
                        </div>
                        <div className='eventAddress flex gap-2'>
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white text-xl" />
                            {event.address}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='container mx-auto'>
            <div className='flex gap-2 my-10'>
                <div className='max-w-[80%] w-full'>
                    <MemberCards MemberData={MemberData} />
                </div>
                <div className='max-w-[20%] w-full'>
                    <div>
                        <div className='border-[1px] max-w-fit p-3 border-black'>
                            Event Id: {event.id}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='container mx-auto'>
            <div className='flex gap-2 justify-end my-10 max-w-[80%]'>
                <div className='max-w-[70%] flex justify-end w-full'>
                    <form action="" className='max-w-[50%] w-full'>
                        <div className='flex justify-between border-t-[1px] border-gray-300 py-5'>
                            <div>Amount (INR)</div>
                            <div>1995</div>
                        </div>
                        <div className='flex justify-between border-t-[1px] border-gray-300 py-5'>
                            <div>Convenience Fee (INR) +</div>
                            <div>29.50</div>
                        </div>
                        <div className='flex border-t-[1px] border-gray-300 py-5'>
                            <div className='font-bold text-teal-600'>Have Discount Code ?</div>
                        </div>
                        <div className='flex justify-between border-t-[1px] border-gray-300 py-5'>
                            <div>Total Amount(INR)</div>
                            <div>2025</div>
                        </div>
                        <div className='flex border-t-[1px] border-gray-300 justify-end py-5'>
                            <button className='bg-teal-600 p-3 max-w-[150px] w-full rounded-lg text-white'>Book Now</button>
                        </div>
                    </form>
                </div>
                <div className='max-w-[30%] w-full'></div>
            </div>
            <div className='max-w-[20%] w-full'></div>
        </div>
        <div className='container mx-auto'>
            <AboutEvent/>
        </div>
        <div className='container mx-auto'>
            <div className='my-10'>
                <h3 className='text-4xl mb-5'>More Events</h3>
                <div className='flex flex-wrap'>
        {events.map((data, index) => {
          const imagePath = require(`../assets/images/${data.imgUrl}`);
          return (
            <div className='card-box w-full sm:w-[calc(100%/2)] md:w-[calc(100%/3)] p-2' key={index}>
              <div className="bg-white rounded-xl shadow-xl">
                <div className="thumbnail relative">
                  <img src={imagePath} alt="image not found" className="w-full rounded-t-xl h-auto object-cover" />
                  <div className="bookmark-icon absolute top-2 right-2">
                    {/* Add your bookmark icon here */}
                  </div>
                </div>
                <div className="card-content mt-2 p-4 gap-2 flex flex-col">
                <h4 className="font-bold text-lg">
                  <Link to={`/event/${data.id}`} className="hover:underline">{data.title}</Link>
                </h4>
                  <div className="text-gray-400 flex gap-2"><FontAwesomeIcon icon={faCalendarAlt} className="text-gray-400 text-xl" /> {data.date}</div>
                </div>
                <div className="mt-2 block">
                    {/* Placeholder for an icon */}
                    <div className="icon-placeholder mr-2">
                      {/* Insert your icon here */}
                    </div>
                    <div className="text-gray-500 p-4 border-t-[1px] w-full border-black block">{data.categories}</div>
                  </div>
              </div>
            </div>
          );
        })}
      </div>
            </div>

        </div>
    </div>
  )
}

export default SingleEvents