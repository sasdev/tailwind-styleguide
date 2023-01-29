import NavLinksSection1 from "./navlinks-section1"
import NavLinksSection2 from "./navlinks-section2"
import Link from "next/link"
import NavLink from "./navlink"

function Navbar(){
	return(
		<aside className="w-full p-6 min-h-screen">
			<nav className="space-y-8 text-sm fixed ">
				<div className="w-12/12 flex items-center">
                	    <Link className="text-2xl font-semibold text-slate-400" href="/">Styleguide</Link>
                </div>
				<div className="space-y-2">
					<h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400 text-slate-400">Tailwind</h2>
					<div className="flex flex-col space-y-1">
						<NavLinksSection1 />
					</div>
				</div>

				<div className="space-y-2">
					<h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400 text-slate-400">Components</h2>
					<div className="flex flex-col space-y-1">
						<NavLinksSection2 />
					</div>
				</div>
			
				<div className="space-y-2">
					<h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400 text-slate-400">Example Page</h2>
					<div className="flex flex-col space-y-1">
						<NavLink to="/ExamplePages/employees">Employees</NavLink>
									
					</div>
				</div>

			</nav>
		</aside>
	)
}

export default Navbar