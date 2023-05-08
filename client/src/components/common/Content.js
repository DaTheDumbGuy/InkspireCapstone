import React from 'react'
import '../../styles/common/Content.css';
import { Carousel } from 'react-bootstrap';
import Ranking from './Ranking';

function Content() {

    const novelRedirect = () => {
        window.location.href = '/novel';
    }
    return (
        <div className='pb-5 background-dark'>
            <div id="carousel-entry-container">
                <Carousel interval={2000} ride="carousel" controls={false}>
                    <Carousel.Item>
                        <img
                            className="d-block h-100 w-100"
                            src="https://wallpapercave.com/wp/wp6399165.jpg"
                            alt="First slide"
                            style={{ objectFit: "cover" }}
                        />
                        <Carousel.Caption>
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block h-100 w-100"
                            src="https://th.bing.com/th/id/R.eac503d8c6a04cf4258dea62b1bd69d7?rik=gp%2fR3VfTwH6New&riu=http%3a%2f%2fwww.hdwallpaperspulse.com%2fwp-content%2fuploads%2f2013%2f05%2fanime-backgrounds.jpg&ehk=qXQIOcxE8YH5ND2Lvo9b9X0alKTXi553CxvyA%2f5%2f5oQ%3d&risl=&pid=ImgRaw&r=0"
                            alt="Second slide"
                            style={{ objectFit: "cover" }}
                        />
                        <Carousel.Caption>
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block h-100 w-100"
                            src="https://free4kwallpapers.com/no-watermarks/originals/2019/01/09/anime-scenery--wallpaper.jpg"
                            alt="Third slide"
                            style={{ objectFit: "cover" }}
                        />
                        <Carousel.Caption>
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            {/* <div className=' background-dark-light carouselNav rounded-2 d-lg-none d-flex'>
                <a href='#'> Logo</a>
                <a href='#'> Logo</a>
                <a href='#'> Logo</a>
                <a href='#'> Logo</a>
            </div> */}
            {/* Weekly novels */}
            <section className='background-dark text-light py-5 px-lg-5 px-3' id='weekly-novels-container' >
                <header className="d-flex justify-content-between align-items-center my-3">
                    <h3 className="pb-2" style={{ borderBottom: "2px solid lightgreen" }}>Weekly New Novels</h3>
                    <a href='/weeklynovels' className=' text-decoration-none' style={{ borderBottom: "1px solid lightgreen", color: "lightgreen" }}>More</a>
                </header>
                <div className='row row-cols-8 justify-content-around mb-5' id='weekly-novels-books'>
                    <div className='col'>
                        <img src='https://th.bing.com/th/id/R.2f2f268076f878d431aa6519477a6425?rik=3ZaI8j75Yz8fvA&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f5%2f6%2ff%2f1290302-free-cool-anime-iphone-wallpaper-1080x1920-meizu.jpg&ehk=G6Pwuf%2fhNrQgE%2bke8KT1msveqP9Wh73fVfj58Lwv5A4%3d&risl=&pid=ImgRaw&r=0' alt='asd ' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                        <p style={{ wordWrap: "break-word" }} className='fw-light'>This is title</p>
                    </div>
                    <div className='col'>
                        <img src='https://th.bing.com/th/id/OIP.-H94-JbqG2qv_gj1UGedNAHaNL?pid=ImgDet&w=750&h=1334&rs=1' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                        <p style={{ wordWrap: "break-word" }} className='fw-light'>This is title</p>
                    </div>
                    <div className='col'>
                        <img src='https://th.bing.com/th/id/OIP.7wsmTl5HjMFB4RDMpDgLIwHaNK?pid=ImgDet&w=2160&h=3840&rs=1' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                        <p style={{ wordWrap: "break-word" }} className='fw-light'>This is title</p>
                    </div>
                    <div className='col'>
                        <img src='https://th.bing.com/th/id/OIP.rtOTH6O2DESYIOAcOkZJwAHaKd?pid=ImgDet&w=1417&h=2000&rs=1' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                        <p style={{ wordWrap: "break-word" }} className='fw-light'>This is  title</p>
                    </div>
                    {/*  */}

                    <div className='col d-lg-block d-none'>
                        <img src='https://th.bing.com/th/id/OIP.RDTIqadi_8FEFRwI9IOPpwHaIc?pid=ImgDet&w=526&h=600&rs=1' alt='asd ' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                        <p style={{ wordWrap: "break-word" }} className='fw-light'>This is title</p>
                    </div>
                    <div className='col d-lg-block d-none'>
                        <img src='https://th.bing.com/th/id/OIP.7li-7qs540KcPKNs2jnypgHaKe?pid=ImgDet&rs=1' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                        <p style={{ wordWrap: "break-word" }} className='fw-light'>This is title</p>
                    </div>
                    {/* This is the only one that works */}
                    <div className='col d-lg-block d-none' onClick={novelRedirect}>
                        <img src='https://th.bing.com/th/id/OIP.OVdwF4q_zTyBbBE-a3bIfAHaOG?pid=ImgDet&rs=1' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                        <p style={{ wordWrap: "break-word" }} className='fw-light '>This is title</p>
                    </div>

                    <div className='col d-lg-block d-none'>
                        <img src='https://th.bing.com/th/id/OIP.ZZr_3AEuZQ6rdGLtzn7bdgHaJt?pid=ImgDet&w=1067&h=1400&rs=1' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                        <p style={{ wordWrap: "break-word" }} className='fw-light'>This is title</p>
                    </div>

                </div>


                <div style={{ height: '3vh' }} ></div>

                <div className='row row-cols-8 justify-content-around' id='weekly-novels-books'>
                    <div className='col'>
                        <img src='https://th.bing.com/th/id/OIP.mfgrK3HfW7zGYSuJxUWjngHaJZ?pid=ImgDet&rs=1' alt='asd ' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                        <p style={{ wordWrap: "break-word" }} className='fw-light'>This is title</p>
                    </div>
                    <div className='col'>
                        <img src='https://th.bing.com/th/id/OIP.2E_SeDGA-HWDHGg0LiKDawHaNK?pid=ImgDet&rs=1' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                        <p style={{ wordWrap: "break-word" }} className='fw-light'>This is title</p>
                    </div>
                    <div className='col'>
                        <img src='https://i.pinimg.com/originals/00/a6/05/00a605c5220285e6582c591003b007c4.jpg' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                        <p style={{ wordWrap: "break-word" }} className='fw-light'>This is title</p>
                    </div>
                    <div className='col'>
                        <img src='https://th.bing.com/th/id/OIP.RKFVgmr62BwWd9kbFqQvNgHaLO?pid=ImgDet&w=564&h=855&rs=1' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                        <p style={{ wordWrap: "break-word" }} className='fw-light'>This is title</p>
                    </div>

                    {/*  */}



                    <div className='col d-lg-block d-none'>
                        <img src='https://th.bing.com/th/id/OIP.pZVIcDFgSdrI4lVGrOxpkAHaKk?pid=ImgDet&rs=1' alt='asd ' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                        <p style={{ wordWrap: "break-word" }} className='fw-light'>This is title</p>
                    </div>
                    <div className='col d-lg-block d-none'>
                        <img src='https://th.bing.com/th/id/OIP.ztyLN85xgy3a4TsrzKdV0AHaL_?pid=ImgDet&rs=1' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                        <p style={{ wordWrap: "break-word" }} className='fw-light'>This is title</p>
                    </div>
                    <div className='col d-lg-block d-none'>
                        <img src='https://th.bing.com/th/id/OIP.ZqYT-ufpZq50BZng7RE4kgAAAA?pid=ImgDet&rs=1' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                        <p style={{ wordWrap: "break-word" }} className='fw-light'>This is title</p>
                    </div>
                    <div className='col d-lg-block d-none'>
                        <img src='https://th.bing.com/th/id/OIP._3wwSdqO91g2eMMA1I-D2wHaL2?pid=ImgDet&rs=1' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                        <p style={{ wordWrap: "break-word" }} className='fw-light'>This is  title</p>
                    </div>
                </div>
            </section>

            <div style={{ height: "10vh" }}></div>
            {/* Weekly hot novels */}
            <section className='background-dark-light text-light py-5 px-lg-5 px-3' id='weekly-novels-container'>
                {/* Carousel */}

                <header className="d-flex justify-content-between align-items-center my-3">
                    <h3 className="pb-2" style={{ borderBottom: "2px solid lightgreen" }}>Weekly Hot Novels</h3>
                    <a href='/weeklynovels' className=' text-decoration-none' style={{ borderBottom: "1px solid lightgreen", color: "lightgreen" }}>More</a>
                </header>
                <div id="carousel-hot-container">
                    <Carousel interval={null} >
                        <Carousel.Item>
                            <div className="d-flex gap-2">
                                <div className="d-flex align-items-center gap-2 carousel-hot-items"
                                    style={{ background: "linear-gradient( 115deg, rgba(2, 2, 2, 0.8), rgba(111, 111, 117, 0.7) ), url(https://th.bing.com/th/id/OIP.WbTiXojxhR8vAbqYwDXadQHaJ3?pid=ImgDet&rs=1)" }}>
                                    <img
                                        className="d-block h-100 w-50 rounded-2 p-0"
                                        src="https://th.bing.com/th/id/OIP.WbTiXojxhR8vAbqYwDXadQHaJ3?pid=ImgDet&rs=1"
                                        alt="First slide"
                                        style={{ objectFit: "cover" }}
                                    />
                                    <div className="ml-3">
                                        <h5>First slide label</h5>
                                        <p>Some representative placeholder content for the first slide.</p>
                                    </div>
                                </div>
                                <div className="d-lg-flex d-none align-items-center gap-2 carousel-hot-items"
                                    style={{ background: "linear-gradient( 115deg, rgba(2, 2, 2, 0.8), rgba(111, 111, 117, 0.7) ), url(https://th.bing.com/th/id/OIP.8u6UF6Y_4OmEW0wdf58ligAAAA?pid=ImgDet&rs=1)" }}>
                                    <img
                                        className="d-block h-100 w-50 rounded-2 p-0"
                                        src="https://th.bing.com/th/id/OIP.8u6UF6Y_4OmEW0wdf58ligAAAA?pid=ImgDet&rs=1"
                                        alt="First slide"
                                        style={{ objectFit: "cover" }}
                                    />
                                    <div className="ml-3">
                                        <h5>First slide label</h5>
                                        <p>Some representative placeholder content for the first slide.</p>
                                    </div>
                                </div>
                                <div className="d-md-flex d-none align-items-center gap-2 carousel-hot-items"
                                    style={{ background: "linear-gradient( 115deg, rgba(2, 2, 2, 0.8), rgba(111, 111, 117, 0.7) ), url(https://th.bing.com/th/id/OIP.-wh3XbfihnKb7E--wWI0dwHaKe?pid=ImgDet&rs=1)" }}>
                                    <img
                                        className="d-block h-100 w-50 rounded-2 p-0"
                                        src="https://th.bing.com/th/id/OIP.-wh3XbfihnKb7E--wWI0dwHaKe?pid=ImgDet&rs=1"
                                        alt="First slide"
                                        style={{ objectFit: "cover" }}
                                    />
                                    <div className="ml-3">
                                        <h5>First slide label</h5>
                                        <p>Some representative placeholder content for the first slide.</p>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="d-flex gap-2">
                                <div className="d-flex align-items-center gap-2 carousel-hot-items"
                                    style={{ background: "linear-gradient( 115deg, rgba(2, 2, 2, 0.8), rgba(111, 111, 117, 0.7) ), url(https://i.pinimg.com/originals/8b/fa/44/8bfa44aed55f551de4cb821ce12e739b.jpg)" }}>
                                    <img
                                        className="d-block h-100 w-50 rounded-2 p-0"
                                        src="https://i.pinimg.com/originals/8b/fa/44/8bfa44aed55f551de4cb821ce12e739b.jpg"
                                        alt="First slide"
                                        style={{ objectFit: "cover" }}
                                    />
                                    <div className="ml-3">
                                        <h5>First slide label</h5>
                                        <p>Some representative placeholder content for the first slide.</p>
                                    </div>
                                </div>
                                <div className="d-lg-flex d-none align-items-center gap-2 carousel-hot-items"
                                    style={{ background: "linear-gradient( 115deg, rgba(2, 2, 2, 0.8), rgba(111, 111, 117, 0.7) ), url(https://th.bing.com/th/id/OIP.-sH8XeyNOqjHMzUhtUSNOAHaKp?pid=ImgDet&rs=1)" }}>

                                    <img
                                        className="d-block h-100 w-50 rounded-2 p-0"
                                        src="https://th.bing.com/th/id/OIP.-sH8XeyNOqjHMzUhtUSNOAHaKp?pid=ImgDet&rs=1"
                                        alt="First slide"
                                        style={{ objectFit: "cover" }}
                                    />
                                    <div className="ml-3">
                                        <h5>First slide label</h5>
                                        <p>Some representative placeholder content for the first slide.</p>
                                    </div>
                                </div>
                                <div className="d-md-flex d-none align-items-center gap-2 carousel-hot-items"
                                    style={{ background: "linear-gradient( 115deg, rgba(2, 2, 2, 0.8), rgba(111, 111, 117, 0.7) ), url(https://th.bing.com/th/id/OIP.pNmeQ2XByx_oDYt-XxWPwgHaOL?pid=ImgDet&w=646&h=1237&rs=1)" }}>
                                    <img
                                        className="d-block h-100 w-50 rounded-2 p-0"
                                        src="https://th.bing.com/th/id/OIP.pNmeQ2XByx_oDYt-XxWPwgHaOL?pid=ImgDet&w=646&h=1237&rs=1"
                                        alt="First slide"
                                        style={{ objectFit: "cover" }}
                                    />
                                    <div className="ml-3">
                                        <h5>First slide label</h5>
                                        <p>Some representative placeholder content for the first slide.</p>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="d-flex gap-2">
                                <div className="d-flex align-items-center gap-2 carousel-hot-items"
                                    style={{ background: "linear-gradient( 115deg, rgba(2, 2, 2, 0.8), rgba(111, 111, 117, 0.7) ), url(https://th.bing.com/th/id/OIP.Ekc3UHwsTRTrVaYwGaeV2wHaKe?pid=ImgDet&rs=1)" }}>
                                    <img
                                        className="d-block h-100 w-50 rounded-2 p-0"
                                        src="https://th.bing.com/th/id/OIP.Ekc3UHwsTRTrVaYwGaeV2wHaKe?pid=ImgDet&rs=1"
                                        alt="First slide"
                                        style={{ objectFit: "cover" }}
                                    />
                                    <div className="ml-3">
                                        <h5>First slide label</h5>
                                        <p>Some representative placeholder content for the first slide.</p>
                                    </div>
                                </div>
                                <div className="d-lg-flex d-none align-items-center gap-2 carousel-hot-items"
                                    style={{ background: "linear-gradient( 115deg, rgba(2, 2, 2, 0.8), rgba(111, 111, 117, 0.7) ), url(https://th.bing.com/th/id/OIP.ZmQbOhhKAcrvEHWrIJohGQAAAA?pid=ImgDet&rs=1)" }}>

                                    <img
                                        className="d-block h-100 w-50 rounded-2 p-0"
                                        src="https://th.bing.com/th/id/OIP.ZmQbOhhKAcrvEHWrIJohGQAAAA?pid=ImgDet&rs=1"
                                        alt="First slide"
                                        style={{ objectFit: "cover" }}
                                    />
                                    <div className="ml-3">
                                        <h5>First slide label</h5>
                                        <p>Some representative placeholder content for the first slide.</p>
                                    </div>
                                </div>
                                <div className="d-md-flex d-none align-items-center gap-2 carousel-hot-items"
                                    style={{ background: "linear-gradient( 115deg, rgba(2, 2, 2, 0.8), rgba(111, 111, 117, 0.7) ), url(https://th.bing.com/th/id/OIP.1g0oquRxTY59SCYldpa8swHaKd?pid=ImgDet&rs=1)" }}>

                                    <img
                                        className="d-block h-100 w-50 rounded-2 p-0"
                                        src="https://th.bing.com/th/id/OIP.1g0oquRxTY59SCYldpa8swHaKd?pid=ImgDet&rs=1"
                                        alt="First slide"
                                        style={{ objectFit: "cover" }}
                                    />
                                    <div className="ml-3">
                                        <h5>First slide label</h5>
                                        <p>Some representative placeholder content for the first slide.</p>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>


                {/* Other */}
                <div className='row row-cols-8 justify-content-around my-5' id='weekly-novels-books'>
                    <div className='col'>
                        <img src='https://th.bing.com/th/id/OIP.pZVIcDFgSdrI4lVGrOxpkAHaKk?pid=ImgDet&rs=1' alt='asd ' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                        <p style={{ wordWrap: "break-word" }} className='fw-light'>This is title</p>
                    </div>
                    <div className='col '>
                        <img src='https://th.bing.com/th/id/OIP.ztyLN85xgy3a4TsrzKdV0AHaL_?pid=ImgDet&rs=1' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                        <p style={{ wordWrap: "break-word" }} className='fw-light'>This is title</p>
                    </div>
                    <div className='col'>
                        <img src='https://th.bing.com/th/id/OIP.ZqYT-ufpZq50BZng7RE4kgAAAA?pid=ImgDet&rs=1' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                        <p style={{ wordWrap: "break-word" }} className='fw-light'>This is title</p>
                    </div>
                    <div className='col d-lg-block d-none'>
                        <img src='https://th.bing.com/th/id/OIP._3wwSdqO91g2eMMA1I-D2wHaL2?pid=ImgDet&rs=1' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                        <p style={{ wordWrap: "break-word" }} className='fw-light'>This is  title</p>
                    </div>

                    <div className='col d-lg-block d-none'>
                        <img src='https://th.bing.com/th/id/R.2f2f268076f878d431aa6519477a6425?rik=3ZaI8j75Yz8fvA&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f5%2f6%2ff%2f1290302-free-cool-anime-iphone-wallpaper-1080x1920-meizu.jpg&ehk=G6Pwuf%2fhNrQgE%2bke8KT1msveqP9Wh73fVfj58Lwv5A4%3d&risl=&pid=ImgRaw&r=0' alt='asd ' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                        <p style={{ wordWrap: "break-word" }} className='fw-light'>This is title</p>
                    </div>
                    <div className='col d-lg-block d-none'>
                        <img src='https://th.bing.com/th/id/OIP.-H94-JbqG2qv_gj1UGedNAHaNL?pid=ImgDet&w=750&h=1334&rs=1' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                        <p style={{ wordWrap: "break-word" }} className='fw-light'>This is title</p>
                    </div>
                    <div className='col d-lg-block d-none'>
                        <img src='https://th.bing.com/th/id/OIP.7wsmTl5HjMFB4RDMpDgLIwHaNK?pid=ImgDet&w=2160&h=3840&rs=1' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                        <p style={{ wordWrap: "break-word" }} className='fw-light'>This is title</p>
                    </div>
                    <div className='col'>
                        <img src='https://th.bing.com/th/id/OIP.rtOTH6O2DESYIOAcOkZJwAHaKd?pid=ImgDet&w=1417&h=2000&rs=1' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                        <p style={{ wordWrap: "break-word" }} className='fw-light'>This is  title</p>
                    </div>
                </div>


                <div style={{ height: '3vh' }} ></div>


                <div className='row row-cols-8  justify-content-around' id='weekly-novels-books'>
                    <div className='col'>
                        <img src='https://th.bing.com/th/id/OIP.RDTIqadi_8FEFRwI9IOPpwHaIc?pid=ImgDet&w=526&h=600&rs=1' alt='asd ' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                        <p style={{ wordWrap: "break-word" }} className='fw-light'>This is title</p>
                    </div>
                    <div className='col'>
                        <img src='https://th.bing.com/th/id/OIP.7li-7qs540KcPKNs2jnypgHaKe?pid=ImgDet&rs=1' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                        <p style={{ wordWrap: "break-word" }} className='fw-light'>This is title</p>
                    </div>
                    <div className='col'>
                        <img src='https://th.bing.com/th/id/OIP.OVdwF4q_zTyBbBE-a3bIfAHaOG?pid=ImgDet&rs=1' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} onClick={novelRedirect} />
                        <p style={{ wordWrap: "break-word" }} className='fw-light'>This is title</p>
                    </div>
                    <div className='col'>
                        <img src='https://th.bing.com/th/id/OIP.ZZr_3AEuZQ6rdGLtzn7bdgHaJt?pid=ImgDet&w=1067&h=1400&rs=1' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                        <p style={{ wordWrap: "break-word" }} className='fw-light'>This is title</p>
                    </div>

                    {/* Pagitan */}

                    <div className='col d-lg-block d-none'>
                        <img src='https://th.bing.com/th/id/OIP.mfgrK3HfW7zGYSuJxUWjngHaJZ?pid=ImgDet&rs=1' alt='asd ' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                        <p style={{ wordWrap: "break-word" }} className='fw-light'>This is title</p>
                    </div>
                    <div className='col d-lg-block d-none'>
                        <img src='https://th.bing.com/th/id/OIP.2E_SeDGA-HWDHGg0LiKDawHaNK?pid=ImgDet&rs=1' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                        <p style={{ wordWrap: "break-word" }} className='fw-light'>This is title</p>
                    </div>
                    <div className='col d-lg-block d-none'>
                        <img src='https://i.pinimg.com/originals/00/a6/05/00a605c5220285e6582c591003b007c4.jpg' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                        <p style={{ wordWrap: "break-word" }} className='fw-light'>This is title</p>
                    </div>
                    <div className='col d-lg-block d-none'>
                        <img src='https://th.bing.com/th/id/OIP.RKFVgmr62BwWd9kbFqQvNgHaLO?pid=ImgDet&w=564&h=855&rs=1' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                        <p style={{ wordWrap: "break-word" }} className='fw-light'>This is title</p>
                    </div>

                </div>
                <div style={{ height: "5vh" }}></div>
            </section >

            <div style={{ height: "10vh" }}></div>

            <section className='background-dark text-light py-5 px-lg-5 px-3 mx-auto' id='rankings' >
                <header className="d-flex justify-content-between align-items-center my-3">
                    <h3 className="pb-2" style={{ borderBottom: "2px solid lightgreen" }}>Rankings</h3>
                    <a href='/weeklynovels' className=' text-decoration-none' style={{ borderBottom: "1px solid lightgreen", color: "lightgreen" }}>More</a>
                </header>
                <Ranking />
            </section>
        </div >
    )
}

export default Content