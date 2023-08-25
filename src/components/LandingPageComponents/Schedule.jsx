import React from 'react'
import scheduleTimeLine from '../../assets/images/schedule.svg'
import scheduleHeader from '../../assets/images/scheduleHeader.svg'
export default function Schedule() {
  return (
    <div class="flex justify-center items-center flex-col">
        <img src={scheduleHeader} alt="schedule" class="mb-20"/>
        <img src={scheduleTimeLine} alt="schedule" class=""/>
    </div>
  )
}
