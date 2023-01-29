function NavLink({to, children}) {
    return <a href={to} className="text-neutral-200 font-normal text-sm font-sans hover:bg-slate-600 p-1 pl-2 hover:rounded-sm">
        {children}
    </a>
}


export default NavLink