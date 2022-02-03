import Layout from '../components/Layout'
import Link from 'next/link';

const custom404 = () => (
    <Layout>
        <div className="text-center">
            <h1>404</h1>
            <p>Esta página no éxiste. te invito a visitar nuevamente el 
                <Link href="/">
                    <a className="text-decoration-none"> Inicio</a>
                </Link>
            </p>
        </div>
    </Layout>
)

export default custom404;