import './index.scss';
import emailjs from '@emailjs/browser';
import { useState, useRef } from 'react';
import { RiJavascriptFill, RiReactjsFill, RiCss3Fill, RiHtml5Fill, RiSupabaseFill, RiNodejsFill } from '@remixicon/react';

const About = () => {
	const [copied, setCopied] = useState(false);

	const formRef = useRef();


	const sendEmail = e => {
		e.preventDefault();

		const alertEl = formRef.current.querySelector('span#alertEl');

		!formRef.current.querySelector('input[name="honeypot"]').checked &&
			emailjs
				.sendForm('service_pkmb0pn', 'template_4qwqr25', formRef.current, {
					publicKey: 'Rdjy6JWLKK4IK26HE',
				})
				.then(
					() => {
						console.log('SUCCESS!');
						alertEl.textContent = 'Message sent!';
						alertEl.classList.add('sent');
						formRef.current.reset();
					},
					error => {
						console.log('FAILED...', error.text);
						alertEl.textContent = 'Something went wrong! Message not sent!';
						alertEl.classList.add('failed');
					},
				);
	};


	return (
		<section id='about' className='about'>
			<div className='container'>
				<div className='header'>
					<h2>Who is this guy?</h2>
				</div>
				<div className='personal'>
					<img src='/hero_pic.png' alt='' />
					<div className='personal_info'>
						<ul>
							<li>
								<span>Name: </span>Diogo Teixeira
							</li>
							<li>
								<span>Age: </span>23
							</li>
							<li>
								<span>Location: </span>Brangança, Portugal
							</li>
							<li>
								<span>Contact: </span>
								<button onClick={() => (navigator.clipboard.writeText('diogo.s.teixeira.dev@gmail.com'), setCopied(true))} className={`cta-button ${copied ? 'copied' : ''}`}>
									{copied ? 'Copied!' : 'Copy my email!'}
								</button>
							</li>
							<li>
								<span>Tech Stack:</span>
								<ul>
									<li><RiHtml5Fill/><span>HTML5</span></li>
									<li><RiCss3Fill/><span>CSS3</span></li>
									<li><RiJavascriptFill/><span>Javascript</span></li>
									<li><RiReactjsFill/><span>ReactJS</span></li>
									<li><RiNodejsFill/><span>NodeJS</span></li>
									<li><RiSupabaseFill/><span>Supabase</span></li>
								</ul>
							</li>
						</ul>
					</div>
					<button className='download' title='Download CV' onClick={() => window.open('/DiogoSTeixeira CV.pdf')}>
						Check my CV
					</button>
				</div>
				<div className="contact_form">
					<h2>Get in touch!</h2>
					<form ref={formRef} onSubmit={sendEmail}>
						<label htmlFor='user_name'>Your Name</label>
						<input required={true} spellCheck='false' type='text' name='user_name' id='user_name' />
						<label htmlFor='user_email'>Your Email</label>
						<input required={true} spellCheck='false' type='email' name='user_email' id='user_email' />
						<label htmlFor='message'>How can I help you?</label>
						<textarea minLength={10} required={true} spellCheck='false' name='message' id='message' />
						<input type='checkbox' name='honeypot' />
						<input type='submit' value='Send' />
						<span id='alertEl'></span>
					</form>
				</div>
			</div>
		</section>
	);
};

export default About;
