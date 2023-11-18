import React from 'react'

function StatisticsCard({img, title, desc}) {
  return (
    <div className='bg-gradient-to-l to-green/50 from-cyan/50 cursor-pointer rounded-md p-[1px]'>
      <div className={styles.card}>
          <img src={img} alt="" className={styles.cardImg} />
          <h4 className={styles.cardHeading}>{title}</h4>
          <p className={styles.cardDesc}>{desc}</p>
      </div>
    </div>
  )
}

const styles = {
    card: 'bg-black h-full w-full text-center rounded-md py-4',
    cardImg:  'mx-auto w-[100px] sm:w-[150px] mb-1',
    cardHeading: 'text-2xl sm:text-3xl bg-gradient-to-r to-sky-400 from-green bg-clip-text text-transparent sm:text-3xl font-semibold font-Poppins',
    cardDesc: 'text-sm sm:text-[16px] text-white/90'
}

export default StatisticsCard