"use client";

import { useState, useEffect } from 'react';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

export const LanguageSwitcher = () => {
  const router = useRouter();
  const locale = useLocale();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    const nextLocale = locale === 'es' ? 'en' : 'es';
    setCookie('NEXT_LOCALE', nextLocale, { maxAge: 60 * 60 * 24 * 365 });
    router.refresh();
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleLanguage}
      className="group flex items-center justify-center w-8 h-8 rounded-full border border-black/10 bg-white hover:bg-black transition-all duration-300 active:scale-90"
    >
      <span className="text-[8px] font-black uppercase text-black group-hover:text-white">
        {locale === 'es' ? 'EN' : 'ES'}
      </span>
    </button>
  );
};
