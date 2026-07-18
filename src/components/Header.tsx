// src/components/Header.tsx
'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Header() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    return (
        <header className="flex justify-between items-center p-4 border-b border-[#DDD8CE] dark:border-[#37403A]">
            <span className="font-mono text-sm tracking-wide uppercase">Field Notes</span>
            {mounted && (
                <button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="px-3 py-1 rounded border border-[#DDD8CE] dark:border-[#37403A]"
                >
                    {theme === 'dark' ? '☀️ Claro' : '🌙 Oscuro'}
                </button>
            )}
        </header>
    );
}