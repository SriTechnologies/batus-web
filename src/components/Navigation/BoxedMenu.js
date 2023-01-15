import * as React from 'react';
import { Box, Button, Popper, Grow, Paper, MenuList, MenuItem } from "@mui/material"
import { ClickAwayListener } from "@mui/material"

export default function BoxedMenu(){
	const [anchorElMenu, setAnchorElMenu] = React.useState(null);
	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef(null);
	const anchorRefs = React.useRef([]);
	
	const openMenu = (event, index, len) => {
		console.log("Menu index: ", index);
		console.log("AnchorRefs len: ", anchorRefs.current.length);
		if (len > 0) {
			setOpen((prevOpen) => !prevOpen);
			if (event.target !== anchorRef.target) {
				anchorRef.current = anchorRefs.current[index];
			}
		}
	};
	
	const closeMenu = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}
		anchorRef.current = null;
		setOpen(false);
	};
	
	function handleListKeyDown(event) {
		if (event.key === 'Tab') {
			event.preventDefault();
			setOpen(false);
		} else if (event.key === 'Escape') {
			setOpen(false);
		}
	}
	
	const handleOpenSubMenu = (event) => {
		setAnchorElMenu(event.currentTarget);
	};
	
	const handleCloseSubMenu = () => {
		setAnchorElMenu(null);
	};
	
	return (
		<Box>
			<Button
				ref={(el) => (anchorRefs.current.push(el))}
				id={itemIndex}
				// aria-label={page.title}
				aria-controls={`menu${itemIndex}`}
				aria-expanded={open ? page.submenu.len > 0 : undefined}
				aria-haspopup={page.submenu.len > 0}
				onClick={(e) => { openMenu(e, itemIndex, page.submenu.length) }}
				color='inherit'
			>
				{page.title}
			</Button>
			<Popper
				open={open}
				anchorEl={anchorRef.current}
				role={undefined}
				placement="bottom-start"
				transition
				disablePortal
				onKeyDown={handleListKeyDown}
				onClose={closeMenu}
			>
				{({ TransitionProps, placement }) => (
					<Grow
						{...TransitionProps}
						style={{
							transformOrigin:
								placement === 'bottom-start' ? 'left top' : 'left bottom',
						}}
					>
						<Paper>
							<ClickAwayListener onClickAway={closeMenu}>
								<MenuList
									autoFocusItem={open}
									id={`menu${itemIndex}`}
									aria-labelledby={itemIndex}
									onClose={handleCloseSubMenu}
									onKeyDown={handleListKeyDown}
								>
									{page.submenu?.map((subitem, subitemIndex) => (
										<MenuItem
											onClick={handleOpenSubMenu}>
											{subitem.title}
										</MenuItem>
									))}
								</MenuList>
								{/* <SubMenu id={itemIndex} af={`${open}`} close={closeMenu} content={page.submenu} /> */}
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}
			</Popper>
		</Box>
	);
}