import React from 'react';
import Box from '@mui/material/Box';
import { Paper, Typography } from '@mui/material';

const BatMission = () => {
	return (
		<Box sx={{ width: '100%' }}>
			<h2>BAT Mission Statement</h2>
				<Box sx={{ width: '75%', mx:'12%' }}>
					<Paper>
						<Typography color="primary" 
							align="center" 
							gutterBottom={true} 
							variant="h4" component="p">
							Our Mission
						</Typography>

						<Typography color="primary" 
							gutterBottom={true} 
							variant="body">
								<ol>
								<li> Identify and address social, cultural and support needs of Brahmins in particular. Building and developing a vibrant community by helping each other, sharing the knowledge and enabling personal, spiritual and professional growth</li>
								<li> Create a physical and virtual community for Brahmins to come together in common cause, celebrate our culture and preserve our way of life.</li>
								<li> Educate the present and future generations of Brahmins on the culture, tradition, values and principles of this unique and diverse community.</li>
								<li> Promote spiritual knowledge and practices (Sanatana Dharma) for leading happy and purposeful life</li>
								<li> Support Brahmin community in Education, Health Care, Career and Legal areas</li>
								</ol>
						</Typography>

						We want to expand #5 through following activities which could be part of internal by laws

						<Typography color="primary" 
							gutterBottom={true} 
							variant="body">
								<ol>
								<li> Provide one time scholarship or Tuition Aid to its student members  based on merit, need, area of study etc.</li> 
								<li> Arrange Medical camps and bring awareness to the visiting parents and college going Brahmin foreign students in US schools</li>
								<li> Arrange camps/discourses to bring legal awareness</li>
								<li> Provide education and career guidance to Brahmin youth via seminars, job fairs etc.</li>
								<li> Facilitate emergency health care or funeral support where needed</li>
								<li> Encourage the spirit of mutual help through voluntary services among members particularly in cases of emergencies and enhance unity</li>
								</ol>
						</Typography>
					</Paper>
			</Box>
		</Box>
	);
}

export default BatMission;
