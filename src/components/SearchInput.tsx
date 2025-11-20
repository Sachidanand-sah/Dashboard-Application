interface Props {
value: string;
onChange: (text: string) => void;
placeholder?: string;
}


export default function SearchInput({ value, onChange, placeholder }: Props) {
return (
<input
value={value}
onChange={(e) => onChange(e.target.value)}
placeholder={placeholder}
className="border px-4 py-2 rounded w-full"
/>
);
}