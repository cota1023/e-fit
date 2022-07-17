import React from 'react'
import '../Carrousel/Carrousel.css'

const Carrousel = () => {
    return (
        <>
        <div className='container mt-5'>
        <h3>Nos acompañan las siguientes marcas:</h3>
                    </div>
        <div className='row container-marcas'>
        <div className='justify-content-center'>

        <div id="carouselExampleInterval" className="carousel slide justify-content-center" data-bs-ride="carousel" >
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="2000">
                    <img src="https://www.clipartmax.com/png/middle/331-3311581_marcas-destacadas-reebok-crossfit-logo-png.png" 
                    className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src="https://static.wixstatic.com/media/2e3f31_5cf35fc77aaa480e800de6f5c7996516~mv2_d_2500_2500_s_4_2.png/v1/fit/w_2500,h_1330,al_c/2e3f31_5cf35fc77aaa480e800de6f5c7996516~mv2_d_2500_2500_s_4_2.png" 
                    className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src="https://yt3.ggpht.com/ytc/AKedOLSXN0jJi4E21MHvwzCBZ-VUcDMoDS8aVqq6uwVi0A=s900-c-k-c0x00ffffff-no-rj" 
                    className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src="https://scontent.faep9-2.fna.fbcdn.net/v/t1.18169-9/64362_233448883461963_1790544699_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_SIfAfvnB9YAX--9L6j&_nc_ht=scontent.faep9-2.fna&oh=00_AT97M8vtBuh57SVVAjxpPtOf-g6U7ZFcW39q38jG5YV92A&oe=62CBCC01" 
                    className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src="https://scontent.faep9-2.fna.fbcdn.net/v/t1.18169-9/18813411_1549587271750361_6859553285578402308_n.png?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=vb4-3UFTw8AAX8ew-Ls&_nc_ht=scontent.faep9-2.fna&oh=00_AT8C1_dGSWLASE39Q8qUO0peLw9eWPLHOqokI1JePkoRMQ&oe=62CF184B" 
                    className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </div>
        </div>
        </>
    )
}

export default Carrousel