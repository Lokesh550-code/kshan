import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonCards = () => {
  return (
    <div className='w-42 h-65 rounded-sm p-1'>
        <div className='w-full h-[80%] rounded-sm overflow-hidden'>
            <Skeleton className='h-full w-full' />
        </div>
        <div className='px-0.5 flex flex-col'>
            <Skeleton height={24} width={`85%`} />
        </div>
    </div>
  )
}

export default SkeletonCards;