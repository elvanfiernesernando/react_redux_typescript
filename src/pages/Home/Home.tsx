import React from 'react'
import Paragraph from '../../components/commons/Text/Paragraph'
import PrimaryButton from '../../components/commons/Button/PrimaryButton'

import { AppDispatch, RootState } from '../../redux/store/_store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../redux/slices/counterSlice/_counterSlice'
import { addProduct } from '../../redux/slices/productSlice/_productSlice'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {

	const count = useSelector((state: RootState) => state.counter.count)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div className='w-screen h-screen flex flex-col gap-[36px] justify-center items-center'>
			<h1 className='font-bold text-[24px]' >React Typescript Redux</h1>

			<div className='flex flex-col gap-[16px] justify-center items-center'>
				<Paragraph text={`${count}`}/>

				<div className='flex gap-[16px] items-center'>
					<PrimaryButton title='INCREMENT' onClick={() => { dispatch(increment()) }} />
					<PrimaryButton title='DECREMENT' onClick={() => { dispatch(decrement()) }} />
					<PrimaryButton title='ADD PRODUCT' onClick={() => { dispatch(addProduct({
						name: "Burger Bangor Bor",
						price: 26000
					})) }} />
				</div>

				<div>
					<Link to={'/inventory'}>Inventory</Link>
				</div>
			</div>
    </div>
  )
}

export default Home