import React from 'react';
import PropTypes from 'prop-types';

class ParticularNote extends React.Component {
    render() {
        
        const sectionHeightClass = this.props.type === 'Feat' ? 'h-[443px]  md:h-[900px]' : 'h-auto  md:h-auto';
        const colorType = this.props.type === 'Bug' ? 'bg-[#FFF8E5] text-[#FFB800]' : 'bg-[#D3FFF5] text-[#1CB59C]';
        const index = this.props.index == 0 ? 'pt-[15px] pl-[10px]' : ' pl-[10px]';
        return (
            <section className={`w-[305px] ${sectionHeightClass} ${index} h-[443px] flex gap-[19px] md:w-[1100px]`}>
                <section className='w-[18px] md:w-[35px] flex items-center justify-center relative '><hr className='border border-[#26E4C7] h-full ' />
                    <div className='absolute top-0 bg-[#26E4C7] rounded-full w-[18px] h-[18px]'></div>
                </section>
                <section className='w-[1000px] gap-[10px] flex flex-col'>
                    <section className='border-black gap-[10px] flex flex-col pr-[15px] pb-[20px]'>
                        <h4 className='text-[17px] font-semibold text-[#2B3445] md:text-[36px] md:font-normal md:text-black'>{this.props.title}</h4>
                        <div className='flex gap-[10px] items-center'>
                            <div className={`rounded-[20px] px-[16px] py-[4px] font-bold ${colorType} text-[14px]`}>{this.props.type}</div>
                            <div className='text-[14px] text-[#7D879C]'>{this.props.day}</div>
                        </div>
                        <div className='text-[14px] text-[#2B3445] md:text-[#7D879C]'>{this.props.description}</div>
                    </section>
                    {
                        this.props.image && (
                            <img className="md:w-[974px]" src={this.props.image} alt="information" />
                        )
                    }
                    {
                        this.props.bug_list && (
                            this.props.bug_list.map((bug, index) => (
                                <li key={index} className='font-medium text-[#2B3445] pb-1 md:pb-3 text-[14px]'>{bug}</li>
                            ))
                        )
                    }
                </section>
            </section>
        )
    }
}

ParticularNote.propTypes = {
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    day: PropTypes.arrayOf(PropTypes.string).isRequired,
    type: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    bug_list: PropTypes.array,
};

export default ParticularNote;