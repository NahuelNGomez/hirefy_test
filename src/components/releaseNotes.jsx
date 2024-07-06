import React from 'react';
import ParticularNote from './particularNote';

class ReleaseNotes extends React.Component {
    render() {
        return (
            <section className="w-[80%] justify-between flex flex-col ">
                <div className=" flex flex-col md:flex-row" >
                    <h3>Release 6.5</h3>
                    <h3>Sort by...</h3>
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