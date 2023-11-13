'use client';

import { useParams, usePathname } from 'next/navigation';

import Link from 'next/link';
import { FlagKey, flag, locales } from './locales';

export const Lang = () => {
  const { lang } = useParams();
  const pathname = usePathname();

  const getPathname = (lng: string) => {
    const path = pathname.split('/' + lang).join('');
    return '/' + lng + path;
  };

  return (
    <div className="group flex items-center">
      <button>{flag[lang as FlagKey]}</button>

      <ul className="absolute top-12 hidden flex-col gap-2 group-hover:flex">
        {locales.map((lng) => {
          if (lng.code === lang) return null;

          return (
            <li key={lng.code}>
              <Link href={getPathname(lng.code)}>{lng.ico}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
