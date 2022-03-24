import React from 'react'
import './intro.css'
import me from '../../img/me.png'

const Intro = () => {
  return (
    <div className='i'>
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className='i-intro'>Hello, My name is</h2>
                <h1 className="i-name">Trevor Noah</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Web Developer</div>
                        <div className="i-title-item">UI/UX Designer</div>
                        <div className="i-title-item">Data Scientist</div>
                        <div className="i-title-item">Video Editor</div>
                        <div className="i-title-item">Voice Actor</div>
                    </div>
                </div>
                <p className="i-desc">
                    Helping start-ups, small businesses, and agencies achieve
                    high quality websites and exceptional user experience.
                </p>
            </div>
            <svg
                role="img"
                width="210mm"
                height="297mm"
                viewBox="0 0 210 297"
                version="1.1"
                id="svg5"
                className='i-scroll'
                xmlns="http://www.w3.org/2000/svg"
                xmlnsSvg="http://www.w3.org/2000/svg">
                <defs id="defs2" />
                <title>Scroll Button</title>
                <g id="layer1">
                    <path className="i-scroll-path" d="M -100.10142,18.079195 0.04308899,116.50676 99.615343,18.079195" id="path75" />
                    <path className="i-scroll-path" d="M -99.815428,97.237536 0.32908899,195.66528 99.901343,97.237536"
                    id="path75-9" />
                </g>
            </svg>
        </div>
        <div className="i-right">
            <div className="i-bg"></div>
            <img src={me} alt="" className="i-img" />
            {/* what are the curly brackets for & 
            y do we need to import img before using it */}
        </div>
    </div>
  )
}

export default Intro