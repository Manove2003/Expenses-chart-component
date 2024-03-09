import React from 'react'
import { useState } from 'react';
const Bar = ({days,amount,isGreatestBar}) => {
   const [ishover,setIshover]=useState(false);
  //  const barStyles={
  //    backgroundColor: isGreatestBar? 'hsl(16, 34%, 90%)': 'hsl(10, 79%, 85%)'
  //  }     
   

   function onmouse(){
      setIshover(true);    
    }
   
  return (
    <div>
        
    {ishover && <p id='amountid'>${amount}</p>}
    <div className='bar'  style={{height:`${amount*2.5}px`,background:isGreatestBar? 'hsl(186, 34%, 60%)': 'hsl(10, 79%, 65%)'}} onMouseOver={onmouse} onMouseLeave={()=> setIshover(false)  } ></div>
    <p id='days'>{days}</p>
    </div>
  )
}

export default Bar
