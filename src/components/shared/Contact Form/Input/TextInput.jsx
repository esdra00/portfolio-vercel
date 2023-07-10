import {useField} from "formik";

export const TextInput = ({label, ...props}) => {
	const [field, meta] = useField(props);

	return (
		<label htmlFor={props.id || props.name}>
			<input type="text" {...field} {...props} />
			{meta.touched && meta.error ? <div>{meta.error}</div> : null}
		</label>
	);
};

// <div className="error">{meta.error}</div>
