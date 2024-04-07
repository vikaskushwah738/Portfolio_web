import React from 'react'
import { TypeAnimation } from 'react-type-animation';
const TextAnimation = () => {
  return (
    <>
    <TypeAnimation
                            sequence={[
                                'Vikas Kushwah',
                                1000, 
                                'Web Devloper',
                                1000,
                                'Coder',
                                1000,
                                'Web Devloper',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
    </>
  )
}

export default TextAnimation