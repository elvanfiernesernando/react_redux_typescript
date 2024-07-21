import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store/_store'

const Inventory: React.FC = () => {

  const products = useSelector((state: RootState) => state.products)

  return (
    <div className='w-screen h-screen flex gap-[16px] flex-wrap bg-slate-200 p-[24px]'>
      {products.map((product) => {
        return (
          <div className='w-[170px] h-fit bg-white shadow-md rounded-md flex flex-col gap-[8px]'>
            <img src="/assets/img/burger.jpg" className='w-100 object-cover rounded-tl-md rounded-tr-md' alt="burger.jpg" />
            <div className='p-[16px] flex flex-col gap-[8px]'>
              <h6 className='text-[14px] font-medium'>{product.name}</h6>
              <p className='text-[12px]'>{product.price}</p>
              <button className='text-[14px] font-medium bg-blue-500 rounded-md px-4 py-2 mt-4 text-white'>BELI</button>
            </div>
          </div>
        )
      })}

      {/* card */}
      {/* <div className='w-[170px] h-fit bg-white shadow-md rounded-md flex flex-col gap-[8px]'>
          <img src="/assets/img/burger.jpg" className='w-100 object-cover rounded-tl-md rounded-tr-md' alt="burger.jpg" />
          <div className='p-[16px] flex flex-col gap-[8px]'>
            <h6 className='text-[14px] font-medium'>Burger Bangor Bor</h6>
            <p className='text-[12px]'>Ini description burger bangor</p>
            <button className='text-[14px] font-medium bg-blue-500 rounded-md px-4 py-2 mt-4 text-white'>BELI</button>
          </div>
      </div> */}
    </div>
  )
}

export default Inventory