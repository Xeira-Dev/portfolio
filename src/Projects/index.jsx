import './index.scss';

import projects from '../data/projects.json';
import { useState } from 'react';



const Projects = () => {

	const [selected, setSelected] = useState(null);


	const projectCard = (project, side) => {
		return (
			<div onClick={() => selected === project ? setSelected(null) : setSelected(project)} className={'item' + side + (selected === project ? ' fliped' : '')} style={{ background: `url(${project.image}) center/cover` }}>
				<div className='front'>
					<h3>{project.title}</h3>
				</div>
				<div  className='back'>
					<img src={project.image} alt={project.title} />
					<div className='text'>
						<h4>{project.title}</h4>
						<p>{project.description}</p>
					</div>
				</div>
			</div>
		);
	};


	return (
		<section id='projects' className='projects'>
			<div className='container'>
				<div className='bento'>
					<div className='item left'>
						<h3>Projects</h3>
						<p>Here are some of my favorites!</p>
					</div>
					{projectCard(projects[0], ' right')}
					{projectCard(projects[1], ' left')}
					<div className='item right' style={{ textAlign: 'center', display: 'grid', placeItems: 'center' }}>
						<p>More coming soon!</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
