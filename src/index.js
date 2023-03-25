import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BATApp from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
// import AuthContext  from './AuthContext';
// import FirebaseApp from './FirebaseApp';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
	palette: {
		mode: 'dark',
	},
	typography: {
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
	},
	spacing: (factor) => `${0.25 * factor}rem`, // (Bootstrap strategy)
	components: {
		MuiButton: {
		  defaultProps: {
			size: 'small',
		  },
		},
		MuiFilledInput: {
		  defaultProps: {
			margin: 'dense',
		  },
		},
		MuiFormControl: {
		  defaultProps: {
			margin: 'dense',
		  },
		},
		MuiFormHelperText: {
		  defaultProps: {
			margin: 'dense',
		  },
		},
		MuiIconButton: {
		  defaultProps: {
			size: 'small',
		  },
		},
		MuiInputBase: {
		  defaultProps: {
			margin: 'dense',
		  },
		},
		MuiInputLabel: {
		  defaultProps: {
			margin: 'dense',
		  },
		},
		MuiListItem: {
		  defaultProps: {
			dense: true,
		  },
		},
		MuiOutlinedInput: {
		  defaultProps: {
			margin: 'dense',
		  },
		},
		MuiFab: {
		  defaultProps: {
			size: 'small',
		  },
		},
		MuiTable: {
		  defaultProps: {
			size: 'small',
		  },
		},
		MuiTextField: {
		  defaultProps: {
			margin: 'dense',
		  },
		},
		MuiToolbar: {
		  defaultProps: {
			variant: 'dense',
		  },
		},
	  },
	  transitions: {
		duration: {
		  shortest: 150,
		  shorter: 200,
		  short: 250,
		  // most basic recommended timing
		  standard: 300,
		  // this is to be used in complex animations
		  complex: 375,
		  // recommended when something is entering screen
		  enteringScreen: 225,
		  // recommended when something is leaving screen
		  leavingScreen: 195,
		},
		easing: {
			// This is the most common easing curve.
			easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
			// Objects enter the screen at full velocity from off-screen and
			// slowly decelerate to a resting point.
			easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
			// Objects leave the screen at full velocity. They do not decelerate when off-screen.
			easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
			// The sharp curve is used by objects that may return to the screen at any time.
			sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
		  },
	  },
});

root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>

			<CssBaseline />
			{/* <AuthContext.Provider value={new FirebaseApp()}> */}
				<BATApp />
			{/* </AuthContext.Provider> */}
		</ThemeProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
