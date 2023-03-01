import React from 'react'
import data from '../assets/data.json'
const Experience = () => {
  return (
    <div id='experience'>
      <div className="timelineBox">
        {
            data.Experience.map((item , index) =>(
                <TimeLineItem 
                heading={item.title}
                index={index}
                key={item.title}/>
            ))
        }
      </div>
    </div>
  )
}
const TimeLineItem = ({heading , text , index}) =>(
    <div className={`timelineItem ${index % 2 === 0 ? "leftTimeline":"rightTimeline"}` }>
        <div>
        <h2>{heading}</h2>
        </div>
    </div>
)

export default Experience
