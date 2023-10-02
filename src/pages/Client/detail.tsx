import React from 'react'

type Props = {}

const DetailPage = (props: Props) => {
  const radius = {
    borderRadius: '10px'
  }
  
  return (
    <div className='container '>
      <div className='Menu  h-10 bg-black'>

      </div>
        {/* Header trên ội dung dưới*/}
      <div className='Detail   bg-gray-200 h-[1000px]'>
        <div className='ml-20'>
        <div className='Title flex  '>
          <div className='title'>
            <p className='text-[26px]'>Combo 3N2Đ Wyndham Grand Phú Quốc (Vinoasis) 5 sao</p>
          </div>
          


          <div className='price buy '>
          </div>  

        </div>
        <div className='Image '>
      <img src="https://media.travel.com.vn/Combo/img_07092023_293d942d-58ab-4d01-8fb4-26d014de51f9_Untitled.png" style={radius} alt="" />
        </div>


        </div>
        </div>
  

    </div>
   
  )
}

export default DetailPage