import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { userService } from 'services';

export { RouteGuard };

function RouteGuard({ children }) {
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        authCheck(router.asPath);
  
        const hideContent = () => setAuthorized(false);
        router.events.on('routeChangeStart', hideContent);


        router.events.on('routeChangeComplete', authCheck)


        return () => {
            router.events.off('routeChangeStart', hideContent);
            router.events.off('routeChangeComplete', authCheck);
        }


    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function authCheck(url) {
       const publicPaths = ['/client/login'];
        const path = url.split('?')[0];
        if (!userService.userValue && !publicPaths.includes(path)) {
            setAuthorized(false);
            router.push({
                pathname: '/client/login',
                query: { returnUrl: router.asPath }
            });
        } else {
            setAuthorized(true);
        }
    }

    return (authorized && children);
}