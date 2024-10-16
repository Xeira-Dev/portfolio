import './index.scss';
import { TypeAnimation } from 'react-type-animation';
const webIcon = 'web-development-svgrepo-com.svg';
const teamworkIcon = 'teamwork-svgrepo-com.svg';
const growthIcon = 'growth-svgrepo-com.svg';

const Hero = () => {
	return (
		<section className='hero'>
			<div className='container'>
				<h1>
					Welcome!
					<br /> I&apos;m{' '}
					<TypeAnimation
						sequence={['a web developer.', 700, 'a team player.', 700, 'always improving.', 700, "Diogo Teixeira, let's build something.", 10000]}
						speed={60}
						style={{ fontSize: 'inherit', display: 'inline-block' }}
						repeat={0}
						cursor={false}
					/>
				</h1>
				<div className='icons'>
					<img src={webIcon} alt='' />
					<img src={teamworkIcon} alt='' />
					<img src={growthIcon} alt='' />
				</div>
				<a href='#about' className='cta-button' >Get in touch</a>
			</div>
		</section>
	);
};

export default Hero;
