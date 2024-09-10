import { useRouter } from "next/router";
import Link from "next/link";

function NavLink({ to, children, isActive }) {
    const router = useRouter();

    const linkClassName = `text-neutral-200 
                            font-normal 
                            text-sm 
                            font-sans 
                            hover:bg-slate-600 
                            p-1 
                            pl-2 
                            hover:rounded-sm
                            
                            ${isActive ? "bg-slate-600" : ""}`;

    return (
        <Link href={{ pathname: to }}>
            <div className={linkClassName}>{children}</div>
        </Link>
    );
}

export default NavLink;
