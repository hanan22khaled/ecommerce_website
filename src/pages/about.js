import React from 'react'

import img_about from '../assets/about-people.png'
function About() {


    return (
        <>
        <header className='header'></header>
        <main className='about-main'>
            {/* first section .... */}
            <section>
            <div className='about-img'>
                <div className='overlay'>
                    <div className='text-about text-white absolute text-center'>
                        <h1 className='md:text-4xl'>
                        About For Bacola
                        </h1>
                        <h4  className=' uppercase font-medium mt-2'>We Can do more for you</h4>
                    </div>
                </div>
            </div>
            </section>
            {/* second section */}
            <section className='container-about my-6 mx-auto px-9 py-2'>

                <div className='text-content-size text-content-1 '>
                    <p>In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero commodo iaculis. Donec augue diam, tristique et ultricies nec, consectetur quis enim. Nullam id
                        rutrum ex. Aliquam a lectus id lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus in dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum turpis.
                        Curabitur porta auctor quam, pretium facilisis nisl. Pellentesque efficitur elit ante, vel vulputate tortor blandit nec.</p>
                </div>

                <div className='text-content-2 my-7 '>

                    <h2 className='md:text-3xl md:w-3/5 mx-10 font-medium text-2xl w-4/5 '>Quisque erat urna, congue et libero in
                        eleifend euismod velit.</h2>
                </div>

                <div className='text-content-3 text-content-size'>
                    <p className='ms-10'>In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero commodo iaculis. Donec augue diam, tristique et ultricies nec, consectetur quis enim. Nullam id
                        rutrum ex. Aliquam a lectus id lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus in dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum turpis.
                        Curabitur porta auctor quam, pretium facilisis nisl. Pellentesque efficitur elit ante, vel vulputate tortor blandit nec.</p>

                </div>
            </section>

            {/* section 3 */}
            <section className=' container-about  my-6 mx-auto px-9 py-2 relative'>
                {/*  container img + text */}
                <div className='about-section-three grid lg:grid-cols-2 grid-cols-1 gap-3'>
                        <div className='margin '>
                            <img src={img_about} alt='img' className='w-full h-full' />
                        </div>
                        <div className='margin-about  pt-12'>
                            <div className='px-4 '>
                                <p className='ml-8 lg:text-xs text-sm font-light px-1 '>Rachel Leonard - Bacola CEO</p>
                            </div>
                            <div className='my-11 '>
                                <h3 className='w-3/4 font-semibold text-xl'>Duis convallis luctus pretium.
                                    Pellentesque habitant morbi</h3>

                            </div>
                            <div className='margin-about-text text-about-size  '>

                                <div className='ml-8 text-xs font-light  leading-relaxed'>
                                    <p className='px-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse
                                                        ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel
                                                        facilisis.</p>
                                </div>
                                <div className='ml-8 text-xs font-light  leading-relaxed'>
                                    <p className='px-5 mt-5'>In fermentum mi ut sapien semper, a sagittis lorem vulputate. Integer gravida,
                                    dui eget aliquet tempus, turpis orci vehicula ipsum, eget porttitor sapien tortor
                                    at neque. Cras id pulvinar lacus, ac volutpat neque. Ut at magna id justo
                                    bibendum lobortis. Integer tortor nulla, ultricies et nisi sit amet, interdum
                                    dictum felis. In semper laoreet dui vitae pharetra. Etiam sit amet molestie nulla,
                                    eu efficitur orci. Praesent rutrum ante justo, eget malesuada ante ornare ac. Ut
                                                dignissim blandit urna, eget euismod leo rhoncus nec. Vestibulum ante ipsum
                                                primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque lobortis
                                                libero ante. Nullam in feugiat erat. Aenean sed justo dapibus, sodales nisi ut,
                                                fringilla lorem. Vestibulum in orci ac nisl condimentum fermentum at et sem.
                                                Curabitur fermentum dolor eu lacus consectetur varius.</p>
                                
                                </div>


                            </div>

                        

                        </div>
                </div>

                {/* box  */}
                <div className='box-about p-14 bg-white rounded-xl absolute w-11/12 hidden lg:block'>
                    <p className='text-content-size px-4'>In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero commodo iaculis. Donec augue diam, tristique et ultricies nec,
consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus id lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus in
dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum turpis. Curabitur porta auctor quam, pretium facilisis nisl. Pellentesque efficitur elit
ante, vel vulputate tortor blandit nec.</p>
                </div>

            </section>

            {/* text */}
                <div className='mt-24 container-about  my-6 mx-auto px-9 py-2'>
                    <p className='text-content-size ' >
                                                    In nec purus eget neque accumsan finibus. Duis condimentum elit ut libero commodo iaculis. Donec augue diam, tristique et ultricies nec, consectetur quis enim. Nullam id
                            rutrum ex. Aliquam a lectus id lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus in dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum turpis.
                            Curabitur porta auctor quam, pretium facilisis nisl. Pellentesque efficitur elit ante, vel vulputate tortor blandit nec.
                                                </p>
                </div>
        </main>
        </>
        
    )
}

export default About
