'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

function FooterLink({ href, children }) {
  const pathname = usePathname();

  return (
    <Link href={href} className="md:px-4">
      <p className="text-[16px] py-2 md:py-1 flex items-center text-lightGray leading-[15px]  font-normal font-tripsans">
        {children}
      </p>
    </Link>
  );
}

export default FooterLink;
