import { useEffect, useState } from "react";
import useUser from "../hooks/useUser";


const Welcome = () => {
	const { user, isLoading } = useUser();

	useEffect(() => {
    });

    return (
        <h1>Home page</h1>
    );
}

export default Welcome;