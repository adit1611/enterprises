import React from 'react'

function Service() {
  return (
    <div className=" bg-[url('/src/assets/pxp.jpg')] bg-cover backdrop-blur-4xl h-screen w-full">
            <h1 className='text-center p-10 text-4xl font-semibold underline text-yellow-700'>Our Services</h1>
        <div className='container mx-auto'>
              <div className=' grid grid-cols-1 sm:grid-cols-2 gap-2 '>
                    <div className='bg-gradient-to-bl from-orange-500 via-emerald-400 bg-opacity-45 h-20 w-3/5 rounded-2xl border-solid border-lime-900 border border-t-2 border-r-2 border-b-2 border-l-2 text-center items-center mx-20 my-5'>
                      <h1 className='text-2xl font-medium text-pretty py-2'><a href='./bb.html'>Banking Knowledge Services</a></h1>
                    </div>
                    <div className='bg-gradient-to-bl from-orange-500 via-emerald-400 bg-opacity-45 h-20 w-3/5 rounded-2xl border-solid border-lime-900 border border-t-2 border-r-2 border-b-2 border-l-2 text-center items-center mx-20 my-5'>
                      <h1 className='text-2xl font-medium text-pretty py-2'><a href='./aww.html'>App & Websites Services</a></h1>
                    </div>
              </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 '>
              <div className='bg-gradient-to-bl from-orange-500 via-emerald-400 bg-opacity-45 h-20 w-3/5 rounded-2xl border-solid border-lime-900 border border-t-2 border-r-2 border-b-2 border-l-2 text-center items-center mx-20 my-5'>
                <h1 className='text-2xl font-medium text-pretty py-2'><a href='./DocA.html'>Online Document Apply</a></h1>
              </div>
              <div className='bg-gradient-to-bl from-orange-500 via-emerald-400 bg-opacity-45 h-20 w-3/5 rounded-2xl border-solid border-lime-900 border border-t-2 border-r-2 border-b-2 border-l-2 text-center items-center mx-20 my-5'>
                <h1 className='text-2xl font-medium text-pretty py-2'><a href='./csp.html'>CSP Banking Service</a></h1>
              </div>
       </div> 
        <div className= 'grid grid-cols-1 sm:grid-cols-2 gap-2 '>
        <div  className='bg-gradient-to-bl from-orange-500 via-emerald-400 bg-opacity-45 h-20 w-3/5 rounded-2xl border-solid border-lime-900 border border-t-2 border-r-2 border-b-2 border-l-2 text-center items-center mx-20 my-5'>
        <h1 className='text-2xl font-medium text-pretty py-2'><a href='./csc.html'>CSC Service</a></h1>
      </div>
      <div className='bg-gradient-to-bl from-orange-500 via-emerald-400 bg-opacity-45 h-20 w-3/5 rounded-2xl border-solid border-lime-900 border border-t-2 border-r-2 border-b-2 border-l-2 text-center items-center mx-20 my-5'>
        <h1 className='text-2xl font-medium text-pretty py-2'><a href='./insurence.html'>SBI LIFEINSURENCE SERVICE</a></h1>
      </div>
        </div>
        </div>
        <div className='bg-red-600 bg-opacity-20 m-10 font-sans text-lg text-justify'>
        <p>
            <b>Enterprise Solutions:</b> At our <i>Place</i>, we provide a comprehensive suite of enterprise services tailored to empower large organizations in today's fast-paced business landscape. From custom enterprise application development and digital transformation to big data analytics, cybersecurity solutions, and enterprise mobility, we offer the expertise and solutions needed to innovate, grow, and thrive. Additionally, our services extend to banking facilities, including secure transaction processing, compliance management, and financial data analytics, ensuring the seamless integration of banking operations with your enterprise systems. Our experienced team of IT consultants offers strategic guidance and advisory services to drive your digital initiatives forward, while our managed services offerings ensure the reliability and performance of your critical systems. Partner with us to navigate the complexities of enterprise technology and unlock new opportunities for success.
        </p>
        </div>
    </div>
  )
}

export default Service