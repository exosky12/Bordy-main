'use client'; // Error components must be Client components

import { useEffect } from 'react';

export default function Error({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<div className='bg-red-700 border-red-500'>
			<h2>Something went wrong!</h2>
			<button className='bg-red-900'
				onClick={
					// Attempt to recover by trying to re-render the segment
					() => reset()
				}>
				Try again
			</button>
		</div>
	);
}
