import React from 'react'

interface IParagraphProps {
    text: string
}

const Paragraph: React.FC<IParagraphProps> = ({text}) => {
  return (
    <p>
      {text}
    </p>
  )
}

export default Paragraph