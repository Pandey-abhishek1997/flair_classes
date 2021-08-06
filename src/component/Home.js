import React from 'react';
import logo from '../assets/img/banner.jpg'
import banner from '../assets/img/banner1.jpg'
import Facebook from '../assets/img/fb.png';
import Youtube from '../assets/img/youtube.png';
import Telegram from '../assets/img/Telegram-logo.png'
import Instagram from '../assets/img/insta.jpg';
import WhatsApp from '../assets/img/whatsapp.jpg'

const Home = () => {
	return (
		<div>
			<h1>FLAIR CLASSES</h1>
			<h2>Niranjan Sir</h2>
			<img src={logo} alt="Flair classes" /> 
			<img src={banner} alt="Flair classes" />
			<p>We are an educational institute situated in Bazar Samiti Patna.Our goal is to provide all the facilities to children preparing for SSC RAILWAY BANKING NDA CIVIL SERVICES etc.</p>
			<p>ALL math notes are available here for NTPC || Railway || SSC</p>
			<p>Daily free class is running via Youtube live please connect at 5 PM daily</p>
			<img src={Facebook} alt="Facebook link" style={{height:'100px'}} onClick={()=> window.open("https://www.facebook.com/flairclasses2020/", "_blank")}/>
			<img src={Youtube} alt="Flair class Youtube link" style={{height:'100px'}} onClick={()=> window.open("https://www.youtube.com/c/FlairClasses/featured", "_blank")}/>
			<img src={Telegram} alt= "Flair Classes Telegram Link" style={{height:'100px'}} onClick={()=> window.open("https://t.me/flairclasses", "_blank")}/>
			<img src={Instagram} alt= "Flair Classes Telegram Link" style={{height:'100px'}} onClick={()=> window.open("https://www.instagram.com/flairclasses2020/?fbclid=IwAR053jxGAcOSmgsuGq44uGtmZAbhigDv-n-kluJMbIY_qvWV3pq8V0EhOVI", "_blank")}/>
			<img src={WhatsApp} alt="Facebook link" style={{height:'100px'}} onClick={()=> window.open("https://www.facebook.com/flairclasses2020/", "_blank")}/>

		</div>
	)
}

export default Home
