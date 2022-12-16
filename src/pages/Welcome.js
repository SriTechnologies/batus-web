import React from 'react';
import { useEffect, useState } from "react";
import useUser from "../hooks/useUser";
import "../App.css"

const Welcome = () => {
	const { user, isLoading } = useUser();

	useEffect(() => {
    });

    return (
		<div class="container">
        	<h1>Home page</h1>
		</div>
    );
}

export default Welcome;