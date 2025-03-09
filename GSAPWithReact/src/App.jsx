import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const App = () => {

    const box = useRef()
    useGSAP(() => {
        gsap.to(box.current, {
            x : 1200,
            duration : 1,
            delay : 1,
            rotate : 720,
            repeat : -1,
            yoyo : true
        })
    })

  return (
    <div>
    <div ref={box} className="h-40 w-40 bg-green-500 text-whtie">GSAP</div>
    </div>
  )
}

export default App
