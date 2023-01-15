import React from 'react';
import { FormControl, FormLabel, FormControlLabel, FormHelperText, RadioGroup, Radio, Select, InputLabel, MenuItem, OutlinedInput } from '@mui/material';
import gotra_data from '../../../../data/gotras.json';
import { Box } from '@mui/system';

const Step3 = () => {

	const [error, setError] = React.useState(false);
	const [helperText, setHelperText] = React.useState('Choose number of Rishis:');
	const [rishiCount, setRishiCount] = React.useState(0);
	// const [pravaktas, setPravaktas] = React.useState([{ name: '', ganas: [{ name: '', rishis: [] }] }]);
	const [pravaktas] = React.useState(gotra_data.pravaktas);
	const [pravaktaSelected, setPravaktaSelected] = React.useState(false);
	const [pravaktaIndex, setPravaktaIndex] = React.useState(-1);
	const [ganaSelected, setGanaSelected] = React.useState(false);
	const [ganaIndex, setGanaIndex] = React.useState(-1);
	const [rishis, setRishis] = React.useState([]);

	const handlePravaktaChange = (event, index) => {
		// const updatedPravaktas = [...pravaktas];
		// updatedPravaktas[index].name = event.target.value;
		// setPravaktas(updatedPravaktas);
		console.log("Selected Pravakta: " + event.target.value);
		setPravaktaIndex(event.target.value);
		setPravaktaSelected(true);
		// add the selected Pravakta to the Rishi list
		const updatedRishis = [...rishis];
		updatedRishis[index] = pravaktas[event.target.value].name;
		setRishis(updatedRishis);
		console.log("New Rishis: " + updatedRishis);
	};

	const handleGanaChange = (event, index) => {
		// const updatedPravaktas = [...pravaktas];
		// updatedPravaktas[pIndex].ganas[gIndex].name = event.target.value;
		// setPravaktas(updatedPravaktas);
		console.log("Selected Gana: " + event.target.value);
		setGanaIndex(event.target.value);
		setGanaSelected(true);
		// add the selected Gana to the Rishi list
		const updatedRishis = [...rishis];
		updatedRishis[index] = pravaktas[pravaktaIndex].ganas[event.target.value].name;
		setRishis(updatedRishis);
		console.log("New Rishis: " + updatedRishis);
	};

	const handleRishiChange = (event, index) => {
		const updatedRishis = [...rishis];
		updatedRishis[index+2] = event.target.value;
		setRishis(updatedRishis);
		console.log("New Rishis: " + updatedRishis);
	}

	const handleRishiCountChange = (event) => {
		console.log("Rishi count: " + event.target.value);
		setError(false);
		setHelperText('Number of Rishis: ' + event.target.value);
		setRishiCount(event.target.value);
		if (Number(event.target.value) === Number(0)) {
			console.log("Setting the pravakta & gana to false!!!");
			setGanaIndex(-1);
			setGanaSelected(false);
			setPravaktaIndex(-1);
			setPravaktaSelected(false);
			setRishis([]);
		} else {
			// if 
		}
	};

	function CreateRishiLists() {
		const rishiLists = [];

		for (let index = 0; index < rishiCount-2; index++) {
			rishiLists.push(
				<FormControl sx={{ m: 1, width: 300 }} size="small" key={`rishi-form-${index}`}>
					<InputLabel id={`rishi-label-${index}`}>Rishi</InputLabel>
					<Select
						labelId={`rishi-label-${index}`}
						id={`rishi-list-${index}`}
						key={`rishi-list-${index}`}
						input={<OutlinedInput label="Rishi" />}
						displayEmpty
						onChange={(e) => {handleRishiChange(e, index)}}
						value={rishis[index+2] === '' ? '' : rishis[index+2]}
						defaultValue={''}
						>
						{pravaktas[pravaktaIndex].ganas[ganaIndex].rishis.map((rishi, rIndex) => (
							<MenuItem
								key={rIndex}
								value={rishi}
							>
								{rishi}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			);
		}
		return (
			<div>
				{ rishiLists }
			</div>
		);
	};

	function CreateGanaLists() {
		return (
			<FormControl sx={{ m: 1, width: 300 }} size="small">
				<InputLabel id="gotra-gana-label">Rishi Gana</InputLabel>
				<Select
					labelId='gotra-gana-label'
					id='gotra-gana-selection-list'
					onChange={ (e) => handleGanaChange(e, 1)}
					value={ganaIndex === -1 ? '' : ganaIndex}
					defaultValue={-1}
					displayEmpty
					input={<OutlinedInput label="Rishi Gana" />}
				>
					{pravaktas[pravaktaIndex].ganas.map((gana, gIndex) => (
						<MenuItem
							key={gIndex}
							value={gIndex}
						>
							{gana.name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		);
	};

	function RishiSelectionForm() {
		return (
			<FormControl sx={{ m: 1, width: 300 }} size="small">
				<InputLabel id="pravakta-label">Gotra Pravakta</InputLabel>
				<Select
					labelId='pravakta-label'
					id='pravakta-selection-list'
					onChange={(e) => handlePravaktaChange(e, 0)}
					value={pravaktaIndex === -1 ? '' : pravaktaIndex}
					defaultValue={-1}
					displayEmpty
					input={<OutlinedInput label="Gotra Pravakta" />}
				>
					{pravaktas.map((pravakta, pIndex) => (
						<MenuItem
							key={pIndex}
							value={pIndex+''}
						>
							{pravakta.name}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		);
	};

	function RishiCountForm() {
		return (
			<FormControl error={error}>
				<FormLabel id="rishi-count-label">Number of Rishis in your Gotram</FormLabel>
				<RadioGroup
					row
					aria-labelledby="rishi-count-label"
					name="gotra-count-radio-buttons-group"
					value={rishiCount}
					onChange={handleRishiCountChange}
				>
					<FormControlLabel value="0" control={<Radio />} label="Unknown" />
					<FormControlLabel value="1" control={<Radio />} label="1" />
					<FormControlLabel value="2" control={<Radio />} label="2" />
					<FormControlLabel value="3" control={<Radio />} label="3" />
					<FormControlLabel value="4" control={<Radio />} label="4" />
					<FormControlLabel value="5" control={<Radio />} label="5" />
					<FormControlLabel value="6" control={<Radio />} label="6" />
					<FormControlLabel value="7" control={<Radio />} label="7" />
				</RadioGroup>
				{/* <FormHelperText>{helperText}</FormHelperText> */}
			</FormControl>
		);
	};

	return (
		<Box sx={{ m: 5, flexGrow: 1, display: { xs: 'none', md: 'block' } }}>
			<RishiCountForm />
			<br /><br />
			{rishiCount > 0 &&
				< RishiSelectionForm />
			}
			{rishiCount > 0 && pravaktaSelected === true &&
				<CreateGanaLists />
			}
			{rishiCount > 0 && pravaktaSelected === true && ganaSelected === true &&
				<CreateRishiLists />
			}
		</Box>
	);
};

export default Step3;
