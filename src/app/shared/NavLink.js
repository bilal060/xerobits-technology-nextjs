'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

function NavLink({ href, children, onClick }) {
  const pathname = usePathname();
  const isActive = pathname === href ? true : false;

  return (
    <Link href={href} className="md:px-4 group" onClick={onClick}>
      <p
        className={`text-[16px] py-2 text-white leading-[21px] group-hover:text-green   font-tripsans ${
          isActive ? 'active-navlink font-bold' : 'font-normal'
        }`}
      >
        {children}
      </p>
    </Link>
  );
}

export default NavLink;
