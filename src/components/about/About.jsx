import React from 'react'
import './about.css'
import mic from '../../img/mic.jpg'
import award from '../../img/award.png'

const About = () => {
  return (
    <div className='a'>
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
            <img src={mic} alt="" className="a-img" />
            </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">
                Courteous and enthusiastic, I am interested in IT 
                and everything in its orbit.
            </p>
            <p className="a-desc">
                I recently began to be fascinated by web programming. 
                Invited to join my friend's start-up company as a front-end 
                developer, I gained experience of working in this area. As 
                this area complements my studies, I am keen to gain more 
                experience in the field. For this reason, I am looking for a 
                company willing to offer me a placement among their developers. 
                In return, I would offer my fulll commitment, and be a pleasant 
                and friendly addition to your team.
            </p>
            <div className="a-award">
                <img src={award} alt="" className="a-award-img" />
                <div className="a-award-texts">
                    <h4 className="a-award-title">
                        Best Design Award
                    </h4>
                    <p className="a-award-desc">
                        For Semester Project of Web Engineering Course.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About