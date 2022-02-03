import Layout from "../components/Layout";

const Github = ({user}) => {
    return (
        <Layout footer={false}>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="card border-success card-body bg-transparent text-right">
                        <h2 className="py-2">{user.name}</h2>
                        <hr></hr>
                        <img className="rounded-circle w-25 mx-auto pt-4" src={user.avatar_url} alt="Jair Erazo"/>
                        <h4 className="d-flex aling-contend-start mt-2">SOBRE MI</h4>
                        <hr></hr>
                        <p className="text-muted">En lo personal acostumbro tocar guitarra, hago fotografía, diseño en 3D, también practico minería de crypto de manera amateur, soy alguien que genera ideas al entrar en contacto con nuevas tecnologías y tendencias.</p>
                        <h4 className="d-flex aling-contend-start mt-4">DATA DE GITHUB</h4>
                        <hr></hr>
                        <p className=" text-success fw.bold py-0">Bio: {user.bio}</p>
                        <p className=" text-success py-0">Location: {user.location}</p>
                        <p className=" text-success py-0">Github ID: {user.id}</p>
                        <p className=" text-success py-0">Used API: {user.url}</p>
                        <a href={user.html_url} target="_blank" className="btn mx-auto w-25 text-center btn-outline-success">Ir a mi Github</a>

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps(){

    const res = await fetch('https://api.github.com/users/jairerazomt')
    const data = await res.json();

    return {
        props: {
            user: data
        }
    }
}

export default Github;