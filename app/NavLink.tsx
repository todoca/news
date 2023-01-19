import Link from "next/link";

type Props = {
    category: string;
    isActive: boolean;
}

function NavLink({ category, isActive }: Props) {
    return (
        <Link href={`/noticias/${category}`} className={`navLink ${isActive && "underline decoration-blue-600 underline-offset-4 font-bold text-lg"}`}>
            {category}
        </Link >
    );
}

export default NavLink;