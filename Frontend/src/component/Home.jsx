import React from 'react'
import imgg from '../assets/demo.jpg'
function  Home() {
  return (
    <div className='bg-slate-400 h-screen '>
            <div className='bg-blue-300 h-10 relative '>
                <h3 className='text-2xl text-center font-serif font-bold text-indigo-700'>Aditya Enterprises</h3>
            </div>
        <div className='h-4/5 flex gap-x-72'>
                <div className='left-home  w-1/2 relative top-20 left-20 '>
                  <h2 className='font-bold text-2xl text-pretty font-serif text-purple-800 opacity-70  underline'>Our MASTER</h2>

                  <p><b className='text-xl'>“Time flies, but you’re the pilot.”</b><br/>
                  <span className='text-lg text-justify'>Take control of your business journey. Set clear goals, create a roadmap, and navigate with purpose. Regularly assess your progress and adjust course as needed.</span></p>
                </div>

                <div className='right-home w-1/2  relative top-20 right-1'>
                  <img src={imgg} alt='demo' className='h-72 w-72 rounded-full relative right-0 border-y-8 border-t-red-300 border-b-red-600'/>
                </div>
      </div>
      <div className='relative -top-36 m-14 text-justify'>
      <h2 className='font-bolder text-indigo-600 text-3xl'>Enterprises act as </h2>
      <p>Enterprises represent the backbone of modern economies, embodying a spectrum of business models and industries. They encompass various scales, from local ventures to global conglomerates, each navigating the complex landscape of commerce. At their core, enterprises are driven by a dynamic interplay of innovation, strategy, and adaptability. 
      Their working formula involves meticulous planning, informed decision-making, and the effective utilization of resources. Enterprises prioritize long-term viability, striving to anticipate market trends and consumer demands while remaining agile in response to shifting dynamics. 
      Central to their success is the cultivation of robust management structures, fostering collaboration, and empowering employees to contribute meaningfully to organizational goals. Technological integration plays a pivotal role, optimizing processes and enhancing productivity across operations.
      Moreover, enterprises embrace a culture of continuous improvement, recognizing the importance of learning from both successes and failures. By embracing innovation, fostering resilience, and maintaining a relentless pursuit of excellence, enterprises uphold their position as drivers of economic growth and societal progress.</p>
      </div>
    </div>
  )
}

export default  Home