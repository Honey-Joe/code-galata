import React from 'react'
import { profile, quote } from '../../assets/image'
import { Star } from 'lucide-react'

const ReviewSectionCard = () => {
  return (
    <>
     <div className='2xl:container '>
            <div className='w-[100%] grid grid-cols-1 px-6 gap-3'>
              <div className='py-5 px-7 bg-[#171A2B] rounded-xl space-y-4'> 
              <div className='flex justify-center'>
                  <img src={quote} alt="quote" />
                </div>
                <div>
                  <p className='font-[LexendDeca] text-[12px] text-white text-center'>I ended up wanting to learn more about Figma so I took the Code Gallata course above to become more familiar with it, and it was worth it.</p>
                </div>
                
                <hr />
                <div className='flex gap-2 justify-center'>
                  <Star color='#ffc600' fill='#ffc600' size={16}></Star>
                  <Star color='#ffc600' fill='#ffc600' size={16}></Star>
                  <Star color='#ffc600' fill='#ffc600' size={16}></Star>
                  <Star color='#ffc600' fill='#ffc600' size={16}></Star>
                  <Star color='#ffc600' fill='#ffc600' size={16}></Star>
                </div>
                <div className='flex justify-center'>
                    <div>
                        <p className='font-[LexendDeca] text-[12px] text-white'>Suganth PV</p>
                    </div>
                    
                </div>

              </div>
              <div className='flex justify-center items-center gap-2'>
                <div className='h-[1px] bg-orange-500 w-full'>
                </div>
                <div>
                  <img src={profile} alt="profile image" className='w-[150px] h-[55px]'/>
                </div>
                <div className='h-[1px] bg-orange-500 w-full'>
                </div>
              </div>
            </div>
        </div>  
    </>
  )
}

export default ReviewSectionCard
