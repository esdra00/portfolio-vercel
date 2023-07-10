import {useField} from "formik";

export const TextAreaInput = ({label, ...props}) => {
	const [field, meta] = useField(props);

	return (
		<label htmlFor={props.id || props.name}>
			<textarea type="text" {...field} {...props} rows={5} />
			{meta.touched && meta.error ? <div>{meta.error}</div> : null}
		</label>
	);
};
