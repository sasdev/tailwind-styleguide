import Link from "next/link"

function NavLink({to, children}) {
    return <Link href={{ pathname: to }} className="text-neutral-200 font-normal text-sm font-sans hover:bg-slate-600 p-1 pl-2 hover:rounded-sm">
        {children}
    </Link>
}


export default NavLink