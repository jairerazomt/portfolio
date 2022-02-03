import Link from 'next/link'
import Layout from '../components/Layout'
import { skills, experiences, projects, education } from '../profile'
console.log(experiences)

console.log(skills)

const Index = () => (
    <Layout>
        {/** card o tarjeta Header */}
        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-transparent border-0">
                    <div className="row d-flex align-items-center">
                        <div className="card bg-transparent py-4 border-0 col-md-4 w-30 h-80">
                            <div className=" overfloating bwfilter text-center px-4">
                                <img className="card-img-top rounded-circle py-4 w-100" src="/img/je_hover.jpg"/>
                            </div>
                        </div>
                        <div className="col-md-8 text-muted pt-4 mx-auto">
                            <h1 className="fs-2 text-white pt-4 ms-3 pb-2">Jair Alexander Erazo M.
                            <hr></hr></h1>
                            <p className="lh-sm ms-3">Hola soy Jair Erazo un Frontend Developer, como elemento diferenciador creo DApps trabajando en el consumo de APIs que gestionen información de la cadena de bloques de Etherium, Binance Smart Chain y Avalanch, login tipo Web3 mediante wallet Metamask, asi como la implementación de frontend con Next.js y React.
                            </p>
                            <p className="lh-sm ms-3">
                            Llego a cumplir y proponer para la entrega de proyectos, springs y deadlines. Cuento con buenas habilidades comunicativas y de liderazgo; también con un amplio conocimiento en computación, hardware, mantenimiento preventivo y sistemas operativos Windows, Linux Y MacOS; adicionalmente en diseño digital y creación de contenido elementos gráficos y de UI/UX con la suite de Adobe.
                            </p>
                            <p  className="lh-sm ms-3 pb-4">
                            Me encuentro en busca de impulsar mis objetivos profesionales como desarrollador de aplicaciones descentralizadas en la entrante transición a la "Web3".
                            </p>
                            <div className="container">
                                <div className="d-flex justify-content-end">
                                    <button type="button" className="btn btn-outline-success m-2" _msthash="1334749" _msttexthash="74009">
                                        <a className="text-decoration-none text-success m-2" href="https://www.linkedin.com/in/jair-alexander-erazo-mosquera-a1b01a100/">Linkedin</a>
                                    </button>
                                    <button type="button" className="btn btn-outline-success m-2">
                                        <a className="text-decoration-none text-success" href="/files/cv.pdf">Descargar CV</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/** cuerpo curriculum habilidades, experiencia y educacion */}
        <div className="container">
            <div className="row ">
                <aside className="col-md-4 mt-4 ps-0">
                        <div className="card bg-transparent border-0">
                            <div className="card-body">
                                <p className="fs-4 m-0">HABILIDADES</p>
                                <hr></hr>

                                {
                                    skills.map(({skill,percentage}, i) => (
                                        <div className="py-3" key={i}>
                                            <h5 className="text-muted fs-6 fw-bold">{skill}</h5>
                                            <div className="progress">
                                                <div 
                                                    className="progress-bar progress-bar-striped progress-bar-animated bg-success" 
                                                    role="progressbar" 
                                                    style={{width: `${percentage}%` }}
                                                    aria-valuenow="50"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                ></div>
                                            </div>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                </aside>

                    <section className="col-md-8 mt-4">
                        <div className="card bg-transparent border-0">
                            <div className="card-body">
                                <p className="fs-4 m-0">EXPERIENCIA<hr></hr></p>
                                

                                <div className="">
                                    {
                                        experiences.map(({ title, description, from, to }, index) => (
                                            <div key={index}>
                                                <h4 className="text-white fs-5">{title}</h4>
                                                <h6 className="text-success">{from} - {to}</h6>
                                                <p className="lh-sm text-muted">{description}
                                                </p>
                                            </div>
                                        ))
                                    }
                                </div>

                            </div>
                        </div>
                        <div className="card bg-transparent border-0">
                            <div className="card-body">
                                <p className="fs-4 m-0">EDUCACION<hr></hr></p>
                                <br></br>

                                <div className="">
                                    {
                                        education.map(({ title, description, fulldescription, finished }, index) => (
                                            <div key={index}>
                                                <h4 className="text-white fs-5">{title}</h4>
                                                <h6 className="text-success">Finalizado {finished}</h6>
                                                <p className="lh-sm text-muted">{description}
                                                </p>
                                                <p className="lh-sm text-muted">{fulldescription}
                                                </p>
                                            </div>
                                        ))
                                    }
                                </div>

                            </div>
                        </div>
                    </section>
                </div>
            </div>



        {/** Seccion portafolio */}
        <div className="row">
            <div className="col-md-12 mt-4 mx-auto">
                <div className="card card-body bg-transparent border-0">
                    <div className="row g-3">
                        <div className="col-md-12">
                            <h1 className="text-start fs-4 pt-2 py-1">PORTAFOLIO</h1>
                            <hr></hr>
                        </div>
                        

                        {
                            projects.map(({prjname,description,images}, i) => (
                                <div className="col-md-4" key={i}>
                                    <div className="card h-100 border-success bg-transparent">
                                        <div className="overfloating">
                                            <img className="card-img-top" src={`/img/${images}`} alt="" />
                                        </div>
                                        <div className="px-3 py-3">
                                            <h4 className="fs-5 pb-2">{prjname}</h4>
                                            <p className="lh-sm text-muted">{description}</p>
                                            <div className="d-flex justify-content-end overflow-auto">
                                                <button type="button" className="btn btn-outline-success mt-2 mx-1" _msthash="1334749" _msttexthash="74009">
                                                    <a className="text-decoration-none text-success m-2" href="../public/files/CV_JE_2022.pdf">Ver Proyecto</a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>


    </Layout>
)

export default Index;