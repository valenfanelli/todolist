import {React} from "react"
import { NavLink } from 'react-router-dom';
import '../App.css';
import Animacion from "./Animacion";
function Proyectos() {

  return (
    <>
        <div className="d-flex justify-content-center bg-inicio vh-100 w-100 roboto-mono">
            <div className="text-center m-2">
                <Animacion animationClass="animate__bounce">
                    <h3>Proyectos</h3>
                </Animacion>
                <Animacion animationClass="animate__flipInY">
                    <div className="container">
                        <div className="row m-4">
                            <div className="col">
                                <div className="h-100 proyecto">
                                    <h4>Valentech</h4>
                                    <p>Tienda de E-commerce realizada como proyecto final del curso Reactjs de Coder House</p>
                                    <a className="btn-custom" href="valentech.netlify.app/" target="_blank" rel="noopener noreferrer">
                                        Ver Proyecto
                                    </a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="h-100 proyecto">
                                    <h4>Freelancer</h4>
                                    <p>Proyecto de desarrollo web realizado con HTML y CSS en el curso fullstack de Udemy</p>
                                    <a className="btn-custom" href="https://clever-bubblegum-0389a8.netlify.app" target="_blank" rel="noopener noreferrer">
                                        Ver Proyecto
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row m-4">
                            <div className="col">
                                <div className="h-100 proyecto">
                                    <h4>Blog de Café</h4>
                                    <p>Proyecto de desarrollo web realizado con HTML y CSS en el curso fullstack de Udemy</p>
                                    <a className="btn-custom" href="https://coruscating-centaur-78f2d6.netlify.app/" target="_blank" rel="noopener noreferrer">
                                        Ver Proyecto
                                    </a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="h-100 proyecto">
                                    <h4>Ros2 Gesture Car</h4>
                                    <p>Proyecto en equipo para la asignatura robótica donde se construyo un auto autonomo con comunicación ROS</p>
                                    <a className="btn-custom" href="https://github.com/marigisee/ROS2-GestureCar" target="_blank" rel="noopener noreferrer">
                                        Ver Proyecto
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Animacion>
            </div>
        </div>       
    </>
  )
}

export default Proyectos