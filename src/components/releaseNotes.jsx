import React from 'react';
import ParticularNote from './particularNote';

class ReleaseNotes extends React.Component {
    render() {
        return (
            <section className="w-[305px] md:w-[1034px] justify-between flex flex-col ">
                <div className=" flex flex-col md:flex-row gap-[10px] md:justify-between" >
                    <h3 className='text-[#2B3445] font-bold text-[20px] md:text-[44px] md:font-normal'>Release 6.5</h3>
                    <div className='flex items-center gap-[10px]'>
                        <h3 className='text-[14px] font-semibold'>Sort by:</h3>
                        <div className='border h-[39px] w-[182px] flex justify-between rounded-[30px] items-center px-[20px]'>
                            <p>All</p>
                            <div><svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.510249 3.47877L4.97278 7.99047C5.64474 8.66984 6.73023 8.66984 7.40219 7.99047L11.8647 3.47877C12.933 2.38133 12.1749 0.5 10.6414 0.5L1.73357 0.5C0.182881 0.499999 -0.575232 2.38133 0.510249 3.47877Z" fill="#0D5287" />
                            </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <section className='w-[305px] h-[22px] md:w-[1034px] flex flex-col justify-center pt-[5px]'><hr className='border border-[#DEE7F0]' />
                </section>
                <div className='flex flex-col'>
                    <ParticularNote />
                    <ParticularNote />
                </div>
            </section>
        )
    }
}

export default ReleaseNotes;