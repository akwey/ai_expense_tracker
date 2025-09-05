'use client';
import { useEffect } from 'react';

export default function ThemeInitializer() {
  useEffect(() => {
    const theme =
      localStorage.getItem('theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return null;
}