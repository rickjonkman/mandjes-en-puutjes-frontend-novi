export function checkPathname(pathname) {
    if (pathname === '/') {
        return 'landing-page';
    } else {
        return 'main-page';
    }
}