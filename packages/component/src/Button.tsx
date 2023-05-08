import { ButtonHTMLAttributes } from 'react';

type TButton = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: TButton) {
	return (
		<button {...props} className="bg-main pwt-main-title">
			{props.children}
		</button>
	);
}
