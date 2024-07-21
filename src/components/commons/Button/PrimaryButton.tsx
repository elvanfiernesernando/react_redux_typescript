import React from 'react'

interface IPrimaryButtonProps {
	title: string,
	onClick: () => void
}

const PrimaryButton: React.FC<IPrimaryButtonProps> = ({title, onClick}) => {
  return (
    <button onClick={onClick} className='bg-blue-500 px-4 py-2 rounded-md text-white'>
      {title}
    </button>
  )
}

export default PrimaryButton