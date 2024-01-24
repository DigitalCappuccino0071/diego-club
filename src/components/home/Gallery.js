import React from 'react'
import UnderlineTextCenter from '../common/UnderlineTextCenter'
import TitleText from '../common/TitleText'

const Gallery = () => {
    return (
        <div className='md:pt-24 pt-16 container' id="gallery">
            <div className="space-y-4">
                <div className="w-fit md:mx-auto">
                    <UnderlineTextCenter title="Our Gallery" />
                </div>
                <div className=" mx-auto md:text-center ">
                    <TitleText title="Relive the Party Our Photo Gallery" />
                </div>
            </div>

            <div className='md:grid grid-cols-3 gap-4 items-center justify-between pt-10'>
                <div>
                    <img className='w-full md:h-full h-[200px] hover:scale-105 ease-in-out duration-300 transition-all object-cover rounded-xl' src='/home/galleryone.png' alt='' />
                </div>
                <div className='md:pt-0 pt-4'>
                    <img className='w-full md:h-[50vh] h-[200px] object-cover rounded-xl hover:scale-105 ease-in-out duration-300 transition-all' src='/home/gallerytwo.png' alt='' />
                    <img className=' w-full md:h-[40vh] h-[200px] object-cover rounded-xl pt-5 hover:scale-105 ease-in-out duration-300 transition-all' src='/home/gallerythree.png' alt='' />
                </div>
                <div className='md:pt-0 pt-4'>
                    <img className='w-full md:h-[35vh] h-[200px] object-cover rounded-xl hover:scale-105 ease-in-out duration-300 transition-all' src='/home/galleryfour.png' alt='' />
                    <img className='w-full md:h-[55vh] h-[200px] object-cover rounded-xl pt-5 hover:scale-105 ease-in-out duration-300 transition-all' src='/home/galleryfive.png' alt='' />
                </div>
            </div>

        </div>
    )
}

export default Gallery