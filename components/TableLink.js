import Link from "next/link";

/**
 * Creates a clickable table cell that navigates to a href.
 *
 * @param {Object} props - The component props.
 * @param {string} props.href - The URL to link to.
 * @param {React.ReactNode} props.children - The content to display inside the link.
 * @returns {JSX.Element} The TableLink component.
 */

const TableLink = ({ href, children }) => {
    return (
        <Link href={href} legacyBehavior>
            <a className="block w-full h-full text-blue-500 py-2 px-4 border-r-2 text-center border-neutral-200 border-solid hover:bg-neutral-200">{children}</a>
        </Link>
    );
};

export default TableLink;