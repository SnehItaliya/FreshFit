import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
    <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={'US'}/>
    </div>
    <div className="my-10 flex flex-col md:flex-row gap-16">
      <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque est saepe aspernatur doloribus adipisci esse. Eveniet a similique porro odit?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit voluptates iste quaerat molestias rerum soluta culpa perspiciatis ullam voluptatem quasi?</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et officiis unde ipsam distinctio. Sit culpa optio iusto quos est rerum?</p>
      </div>
    </div>
    <div className='text-xl py-4'>
      <Title text1={'WHY'} text2={'CHOSE US'}/>
    </div>
    <div className="flex flex-col md:flex-row text-sm mb-20">
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Quality Assurance</b>
        <p text-gray-600>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat illo quisquam eos atque, quibusdam unde quo aliquam culpa laudantium neque!</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Convenience:</b>
        <p text-gray-600>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat illo quisquam eos atque, quibusdam unde quo aliquam culpa laudantium neque!</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Exceptional Customer Service:</b>
        <p text-gray-600>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat illo quisquam eos atque, quibusdam unde quo aliquam culpa laudantium neque!</p>
      </div>
    </div>
    <NewsletterBox/>
    </div>
  )
}

export default About