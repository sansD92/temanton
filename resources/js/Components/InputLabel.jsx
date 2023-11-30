export default function InputLabel({ value, defaultValue, className, variant = '', children, primary, placeholder, isError, ...props }) {
    return (
        <label {...props} className={'text-base block mb-2 ' + className}>
            {value ? value : children}
        </label>
    );
}
