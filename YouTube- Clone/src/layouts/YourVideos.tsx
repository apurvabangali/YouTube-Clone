
import { Search } from 'lucide-react'
import { VideoRowItems } from '../components/VideoRowItems'
import {videos} from '../data/home'
import { GoChevronRight } from "react-icons/go"

const YourVideos = () => {
  return (
    <div>
    <div className='flex text-center ml-7 mt-6'>
    <div>
        <img  className="w-40 h-40 " src="https://i.pinimg.com/originals/48/6f/d3/486fd39c22573c9d280b0d85f99e937d.png"/>
    </div>
    <div className='text-left ml-4 px-pt'>
        <h1 className='font-bold text-4xl'>Apurva Bangali</h1>
        <h4 className='mt-3 ml-1'>@apurvabangali  • 6 videos</h4>
        <h4 className='mt-2 ml-1'>More about channel <GoChevronRight className='inline-block size-px'/></h4>
        <button type="button" className='mt-2 bg-white hover:bg-grey-lightest text-grey-darkest font-semibold py-2 px-4 border border-grey-light rounded-full'>Customize channel</button>
        <button type="button" className=' ml-2 bg-white hover:bg-grey-lightest text-grey-darkest font-semibold py-2 px-4 border border-grey-light rounded-full'>Manage videos</button>
    </div>
    </div>
    <div className='flex border-b cursor-pointer '>
        <h1 className='mt-3 ml-7 font-semibold text-lg py-3'>Home</h1>
        <h1 className='mt-3 ml-7 font-semibold text-lg py-3'>Videos</h1>
        <h1 className='mt-3 ml-7 font-semibold text-lg py-3'>Playlists</h1>
        <h1 className='mt-3 ml-7 font-semibold text-lg py-3'><Search/></h1>
    </div>
    <div className="py-3">
        <h1 className='font-semibold text-xl py-3 mt-3 ml-7'>Uploads</h1>
              {videos.map(video => (
                <VideoRowItems key={video.id} {...video} />
              ))}
            </div>
    </div>
  )
}

export default YourVideos