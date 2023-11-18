import React from 'react'
// import Web3 from '../../images/web3.png';

function StatisticsInfo({title, desc}) {
  return (
    <div className='flex items-center gap-5 border-b border-cyan/10 pb-5'>
        <div>
            <img src="/assets/images/web3.png" alt="" className='w-16' />
        </div>
        <div className='space-y-1'>
            <h5 className='font-semibold text-[20px] sm:text-2xl'>{title}</h5>
            <p className='text-white/70'>{desc}</p>
        </div>
    </div>
  )
}

export default StatisticsInfo