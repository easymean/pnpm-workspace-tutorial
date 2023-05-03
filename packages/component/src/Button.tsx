export function Button(props: any) {
	return (
		<button onClick={() => props.onClick()} className="bg-main pwt-main-title">
			{props.children}
		</button>
	);
}
export default Button;
