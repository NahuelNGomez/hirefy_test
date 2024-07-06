import React from 'react';

class ListNotes extends React.Component {
    render() {
        return (
            <>

                <div className=' md:w-[280px] md:h-[1053px] md:absolute md:top-[260px]  md:left-[1400px] flex flex-col gap-[10px]'>
                    <h3 className='text-[25px] font-bold'>All release notes</h3>
                    <p className='font-bold text-[14px] text-[#2B3445]'>Release 6.5: New features and...</p>
                    <p className='font-bold text-[14px] text-[#7D879C]'>Release 6.4: Hirefy: Precision Unleashed</p>
                    <p className='font-bold text-[14px] text-[#7D879C]'>Release 6.3: Hirefy is Expanding...</p>
                    <p className='font-bold text-[14px] text-[#7D879C]'>Release 6.2: Time for some Bug...</p>
                    <p className='font-bold text-[14px] text-[#7D879C]'>Release 6.1: Augmented Reality Talent...</p>
                    <p className='font-bold text-[14px] text-[#7D879C]'>Release 6.0: Augmented Reality Talent...</p>
                    <p className='font-bold text-[14px] text-[#7D879C]'>Release 5.4: Bug Fixes and Performanc...</p>
                    <p className='font-bold text-[14px] text-[#7D879C]'>Release 5.3: Simplified Job Posting...</p>
                    <p className='font-bold text-[14px] text-[#7D879C]'>Release 5.2: Interactive Interview...</p>
                    <p className='font-bold text-[14px] text-[#7D879C]'>Release 5.1: Responsive Design Tweaks...</p>
                    <p className='font-bold text-[14px] text-[#7D879C]'>Release 5.0: Expanded Language...</p>
                    <p className='font-bold text-[14px] text-[#7D879C]'>Release 4.3: Server Performance...</p>
                    <p className='font-bold text-[14px] text-[#7D879C]'>Release 4.2: Intelligent Candidate...</p>
                    <p className='font-bold text-[14px] text-[#7D879C]'>Release 4.1: Our Mobile app is on the...</p>
                    <p className='font-bold text-[14px] text-[#7D879C]'>Release 4.0: Advanced Networking...</p>
                </div>
            </>
        )
    }
}

export default ListNotes;