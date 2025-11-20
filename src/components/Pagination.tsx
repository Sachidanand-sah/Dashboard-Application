interface Props {
currentPage: number;
totalItems: number;
pageSize: number;
onPageChange: (page: number) => void;
}


export default function Pagination({ currentPage, totalItems, pageSize, onPageChange }: Props) {
const totalPages = Math.ceil(totalItems / pageSize);


return (
<div className="flex items-center justify-between p-4">
<button
className="px-4 py-1 bg-slate-200 rounded disabled:opacity-50"
disabled={currentPage === 1}
onClick={() => onPageChange(currentPage - 1)}
>
Prev
</button>


<span className="text-sm text-slate-700">
Page {currentPage} of {totalPages}
</span>


<button
className="px-4 py-1 bg-slate-200 rounded disabled:opacity-50"
disabled={currentPage === totalPages}
onClick={() => onPageChange(currentPage + 1)}
>
Next
</button>
</div>
);
}