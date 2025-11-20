import { NavLink } from "react-router-dom";


export default function Sidebar() {
return (
<div className="w-64 bg-slate-900 text-white min-h-screen p-6 space-y-6">
<h1 className="text-xl font-bold tracking-wide">Dashboard</h1>


<nav className="flex flex-col gap-3">
<NavLink
to="/"
className={({ isActive }) =>
`px-4 py-2 rounded ${isActive ? "bg-slate-700" : "hover:bg-slate-800"}`
}
>
Home
</NavLink>


<NavLink
to="/data"
className={({ isActive }) =>
`px-4 py-2 rounded ${isActive ? "bg-slate-700" : "hover:bg-slate-800"}`
}
>
Data
</NavLink>
</nav>
</div>
);
}