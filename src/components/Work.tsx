import React from 'react';
import WorkItem from './WorkItem'


const data = [
    {
        year: 2020,
        title: 'Content Creator',
        duration: '3 years',
        details: 
        'Lorem Ipsum'
    }, 
    {
        year: 2020,
        title: 'Google',
        duration: '3 years',
        details: 
        'Lorem Ipsum'
    }, 
    {
        year: 2020,
        title: 'Amazon',
        duration: '3 years',
        details: 
        'Lorem Ipsum'
    }, 
    {
        year: 2020,
        title: 'Facebook',
        duration: '3 years',
        details: 
        'Lorem Ipsum'
    }, 

]
const Work = () => {
    return (
        <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#FFFFFF]'>Work</h1>
        </div>
    )
}

export default Work;