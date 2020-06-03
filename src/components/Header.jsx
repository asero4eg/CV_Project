import React from 'react';

let Header =()=>{
    return(
        <header className="header">
		<div className="header-wrapper">
			<div className="header-flex">
				<div className="main-bio">
					<div className="photo-section">
						<div className="photo-wrapper">
							<img className="my-photo" alt="#" src="https://steamuserimages-a.akamaihd.net/ugc/791992712493073080/9BF5EE311E5ED5B66350C0554262147CF3327D06/" />
						</div>
						<div className="name-surname">
							<p className="name">Vitalii</p>
							<p className="surname">Somin</p>
							<p className="who">Front-end developer</p>
						</div>
					</div>
					<div className="about-wrapper">
						<div className="contact-wrapper">
							<ul className="contact-list">
								<li className="contact">
									<p className="contact-type">Phone:</p>
									<p className="phone">+38 093 786 36 70</p>
								</li>
								<li className="contact">
									<p className="contact-type">Area:</p>
									<p className="area">Kharkiv, Gagarina avenue 41a 61001</p>
								</li>
								<li className="contact">
									<p className="contact-type">Email:</p>
									<p className="email">asero4eg@gmail.com</p>
								</li>
							</ul>
						</div>
						<div className="about">
							<p className="about-title">About me</p>
							<p className="about-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro minus eligendi rerum nostrum in, ullam aut recusandae illo ducimus a. Necessitatibus at, soluta iste minus quam possimus voluptates tenetur. Pariatur!</p>
						</div>
					</div>
				</div>
			</div>
			{/* <!--Header-links--> */}
			<div className="links-section">
				<ul className="links-list">
					<li className="link"><a className="icon-instagram" href="#"><span>/aserok</span></a></li>
					<li className="link"><a className="icon-linkedin" href="#"><span>/aserok</span></a></li>
					<li className="link"><a className="icon-skype" href="#"><span>/aserok</span></a></li>
					<li className="link"><a className="icon-twitter" href="#"><span>/aserok</span></a></li>
					<li className="link"><a className="icon-vk" href="#"><span>/aserok</span></a></li>
				</ul>
			</div>
		</div>
	    </header>
    )
}
export default Header;