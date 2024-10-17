import React from 'react'

const MemberCards = ({MemberData}) => {
  return (
    <div className='max-w-[70%] w-full mb-5'>
        {
            MemberData.map((cardData, index)=>(
                <div className='border-[1px] border-[#15b8a6] mb-5' key={index}>
                    <div className='p-5 h-[90px] flex relative memberCards'>
                        <div className='max-w-[60%] flex items-center w-full border-r-2 border-teal-500 mr-5'>{cardData.member}</div>
                        <div className='max-w-[25%] flex items-center w-full border-r-2 border-teal-500 mr-5 text-teal-500'>
                            INR {cardData.price}
                        </div>
                        <div className='max-w-[15%] memberCardsCircle flex items-center w-full'>
                            <select name="" id="" className='border-black border-[1px] w-full outline-none max-w-[150px]'>
                                <option value="">0</option>
                                <option value="">1</option>
                                <option value="">2</option>
                            </select>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default MemberCards