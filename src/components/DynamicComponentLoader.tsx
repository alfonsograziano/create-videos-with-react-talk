import {useState, useEffect} from 'react';

const DynamicComponentLoader = ({name, props}: {name: string; props: any}) => {
	const [Component, setComponent] = useState<React.FC<any> | null>(null);

	useEffect(() => {
		// I assume that the component is in the same directory
		// We can even load the component from a remote source
		// But this is a story for another day :D
		import(`./${name}`)
			.then((mod) => {
				setComponent(() => mod.default as React.FC<any>);
			})
			.catch((err) => {
				console.error(`Component ${name} failed to load`, err);
				setComponent(null);
			});
	}, [name]);

	return Component ? <Component {...props} /> : null;
};

export default DynamicComponentLoader;
