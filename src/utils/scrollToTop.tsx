'use client';

import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        (document.querySelector('html') as HTMLElement).style.overflow = 'auto';
    }, [pathname]);

    return (
        <div></div>
    );
}