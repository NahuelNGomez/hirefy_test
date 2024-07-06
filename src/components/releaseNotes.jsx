import React from 'react';
import ParticularNote from './particularNote';
import data from '../assets/data.json';

class ReleaseNotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterType: 'All',
            isDropdownOpen: false,
        };
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    handleFilterChange(type) {
        this.setState({ filterType: type, isDropdownOpen: false });
    }

    toggleDropdown() {
        this.setState(prevState => ({ isDropdownOpen: !prevState.isDropdownOpen }));
    }

    render() {
        const filteredData = this.state.filterType === 'All'
            ? data
            : data.filter(note => note.type === this.state.filterType);

        return (
            <section className="w-[305px] md:w-[1034px] justify-between flex flex-col">
                <div className="flex flex-col md:flex-row gap-[10px] md:justify-between">
                    <h3 className='text-[#2B3445] font-bold text-[20px] md:text-[44px] md:font-normal'>Release 6.5</h3>
                    <div className='relative'>
                        <button
                            id="desplegable"
                            data-dropdown-toggle="dropdownDivider"
                            className='flex items-center gap-[10px] border h-[39px] w-[182px] justify-between rounded-[30px] items-center px-[20px] bg-white'
                            onClick={this.toggleDropdown}
                        >
                            <h3 className='text-[14px] font-semibold'>{this.state.filterType}</h3>
                            <div>
                                <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.510249 3.47877L4.97278 7.99047C5.64474 8.66984 6.73023 8.66984 7.40219 7.99047L11.8647 3.47877C12.933 2.38133 12.1749 0.5 10.6414 0.5L1.73357 0.5C0.182881 0.499999 -0.575232 2.38133 0.510249 3.47877Z" fill="#0D5287" />
                                </svg>
                            </div>
                        </button>
                        {this.state.isDropdownOpen && (
                            <div
                                className="w-[182px] h-[117px] rounded-[20px] shadow-2xl absolute z-[10] bg-white"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="options-menu"
                            >
                                <div  role="none" className='h-full'>
                                    <button
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#EFF7FF] hover:text-gray-900 w-full text-left"
                                        role="menuitem"
                                        onClick={() => this.handleFilterChange('All')}
                                    >
                                        All
                                    </button>
                                    <button
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#EFF7FF] hover:text-gray-900 w-full text-left"
                                        role="menuitem"
                                        onClick={() => this.handleFilterChange('Bug')}
                                    >
                                        Bug
                                    </button>
                                    <button
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#EFF7FF] hover:text-gray-900 w-full text-left"
                                        role="menuitem"
                                        onClick={() => this.handleFilterChange('Feat')}
                                    >
                                        Feat
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <section className='w-[305px] h-[22px] md:w-[1034px] flex flex-col justify-center pt-[5px]'>
                    <hr className='border border-[#DEE7F0]' />
                </section>
                <div className='flex flex-col'>
                    {filteredData.map((note, index) => (
                        <ParticularNote
                            key={index}
                            index={index}
                            title={note.title}
                            day={note.day}
                            type={note.type}
                            image={note.image}
                            description={note.description}
                            bug_list={note.bug_list}
                        />
                    ))}
                </div>
            </section>
        );
    }
}

export default ReleaseNotes;