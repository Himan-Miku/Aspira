import Image from 'next/image'
import React from 'react'
interface blog{
    title:string,
    image:string,
}
const Blog2 = ({title,image}:blog) => {
  return (
    <div className='flex flex-col '>
      <Image src={image} width={250} height={250} alt='blog img'/>
      <p className='text-xs font-medium'>How to Use Instagram: A Beginner's Guide</p>
     </div>
  )
}

export default Blog2
