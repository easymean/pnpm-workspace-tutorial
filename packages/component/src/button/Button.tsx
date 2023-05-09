import { ButtonHTMLAttributes } from 'react';

type TButton = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: TButton) {
	return (
		<button {...props} className="bg-main text-white">
			{props.children}
		</button>
	);
}
