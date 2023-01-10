import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';


export default function MenuPopupState({item, index}) {
	return (
	  <PopupState variant="popover" popupId={`${index}`} >
		{(popupState) => (
		  <React.Fragment>
			<Button variant="contained" {...bindTrigger(popupState)} sx={{ mx: "1%"}} >
				{item.title}
			</Button>
			{item.submenu?.length > 0 &&
				<Menu {...bindMenu(popupState)}>
					{item.submenu?.map((subitem) => (
						<MenuItem onClick={popupState.close} component={Link} to={subitem.link}>{subitem.title}</MenuItem>
					))}
				</Menu>
			}
		  </React.Fragment>
		)}
	  </PopupState>
	);
  }