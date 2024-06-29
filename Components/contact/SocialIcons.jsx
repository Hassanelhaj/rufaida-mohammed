import React from 'react'
import {BsFacebook, BsInstagram, BsLinkedin, BsTiktok} from 'react-icons/bs'

import {FaLinkedin} from 'react-icons/fa';
import {SiGmail} from 'react-icons/si'

    const SocialIcons = () => {
        return (
          <div className='flex justify-center items-center gap-2'>
             <a href='https://www.facebook.com/mohammed.rufaida.75?mibextid=ZbWKwL' target='_blank' className='text-3xl hover:opacity-70' >
              <BsFacebook/>
              </a> 
              <a href='https://www.linkedin.com/in/rufaida-mohammed-9424a7241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' >
              <BsLinkedin/>
              </a>
              <a href='https://www.instagram.com/rufaida_mo7amed?igsh=MXZ1ZjNtd2tkYnVkeA==' >
              <BsInstagram/>
              </a>
              <a href='https://www.tiktok.com/@rufiimohammed?_t=8naM7ugHGas&_r=1' >
              <BsTiktok/>
              </a>
          
          </div>
        )
      }

export default SocialIcons