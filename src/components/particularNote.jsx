import React from 'react';

class ParticularNote extends React.Component {
    render() {
        // pt-[15px] pl-[10px]
        return (
            <section className="w-[305px] h-[443px] flex  gap-[10px] md:w-[1100px] md:h-[900px]">
                <section className='w-[18px] md:w-[35px] flex items-center justify-center relative'><hr className='border border-[#26E4C7] h-full' />
                    <div className='absolute top-0 bg-[#26E4C7] rounded-full w-[18px] h-[18px]'></div>
                </section>
                <section className='w-[1000px] gap-[10px] flex flex-col'>
                    <section className='border-black gap-[10px] flex flex-col pr-[15px] pb-[20px]'>
                        <h4 className='text-[17px] font-semibold text-[#2B3445] md:text-[36px] md:font-normal md:text-black'>Redesigned notification</h4>
                        <div className='flex gap-[10px] items-center'>
                            <div className='rounded-[20px] px-[16px] py-[4px] font-bold bg-[#D3FFF5] text-[#1CB59C] text-[14px]'>Feat</div>
                            <div className='text-[14px] text-[#7D879C]'>jul 15, 2024</div>
                        </div>
                        <div className='text-[14px] text-[#2B3445] md:text-[#7D879C]'>Customizing your notification settings is now easier than ever. Quickly change your settings using presets like Focused or Mentions only, or tailor them to fit your needs.</div>
                    </section>
                    <img className="md:w-[974px]" src="image_9.png" alt="information" />
                </section>
            </section>
        )
    }
}

export default ParticularNote;