import React from 'react'
import './intro.css'
import me from '../../img/me.png'
// import { ReactComponent as scroll } from "../../img/scroll.svg";

const Intro = () => {
  return (
    <div className='i'>
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className='i-intro'>Hello, My name is</h2>
                <h1 className="i-name">Arooba Siddiqi</h1>
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint 
                        vitae, ut dignissimos modi maxime in reiciendis magnam similique
                         nam consequuntur omnis quos unde cum blanditiis culpa fugiat 
                         nulla. Molestias, magni?
                </p>
            </div>
            {/* <svg
                width="210mm"
                height="297mm"
                viewBox="0 0 210 297"
                version="1.1"
                id="svg5"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsSvg="http://www.w3.org/2000/svg">
                <defs id="defs2" />
                <g id="layer1">
                    <path style="fill:none;stroke:#000000;stroke-width:10;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                    d="M -100.10142,18.079195 0.04308899,116.50676 99.615343,18.079195"
                    id="path75" />
                    <path style="fill:none;stroke:#000000;stroke-width:10;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                    d="M -99.815428,97.237536 0.32908899,195.66528 99.901343,97.237536"
                    id="path75-9" />
                </g>
            </svg> */}
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