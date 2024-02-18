import Image from 'next/image'
import React from 'react'
export interface blog{
  title:string,
  image:string,
author:string}
  

const Blog1 = ({title,image,author}:blog) => {
  return (
    <div className='flex w-full h-40'>
       <Image src={image} alt="blog image" width={200} height={200}/>
       <div className='flex flex-col place-items-center justify-between'>
         <h3 className='text-xl m-3 p-1 '>{title}</h3>
         <h4 className='text-md font-medium text-left'>author:{author}</h4>
       </div>
    </div>
  )
}

export default Blog1
