import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const UpcomingEvents = ({UpcomingEvents}) => {
    
  return (
    <div className='bg-gray-50'>
      <div className='container mx-auto'>
        <div className="title my-5">
            <h2 className='text-4xl'>Upcoming Events</h2>
        </div>
        <div className='flex flex-wrap'>
        {UpcomingEvents.map((data, index) => {
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
  )
}

export default UpcomingEvents