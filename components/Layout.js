import Navbar from './Navbar'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'

// <> fragment similar to div but in react for don't create this element into the dom

const Layout = ({children, footer = true}) => {

    const router = useRouter();

    useEffect(() => {

        const handleRouteChange = url => {
            console.log(url)
            NProgress.start();
        }

        router.events.on('routeChangeStart', handleRouteChange)

        router.events.on('routeChangeComplete', () => NProgress.done());

        return () => {
            router.events.off('routeChangeStart', handleRouteChange)
        }
    }, [])

    return (
        <div className="bg-black">
            <Navbar/>
            <main className='container py-4'>
                {children}
            </main>

            {
                footer && (
                    <footer className="card bg-transparent py-4 border-success flat">
                        <div className="container p-4 ">
                            <p className="text-success lh-sm pt-1">JAEM. Blockchain WebApp Developer Portfolio <br />
                            Bogotá COL | 2022 <br />
                            Portafolio web alojado en instancia de Oracle Cloud Infrastruture, hecho utilizando React, React-dom, NextJS, JavaScript ES6, HTML5, CSS3 y BootStrap <br />
                            inbox &#47; jair.erazo@tutanota.com
                            </p>
                        </div>
                    </footer>
                )
            }
        </div>
    )
}

export default Layout;