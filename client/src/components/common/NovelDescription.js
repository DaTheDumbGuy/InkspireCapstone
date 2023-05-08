import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PersonIcon from '@mui/icons-material/Person';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Carousel } from 'react-bootstrap';
import '../../styles/common/NovelDescription.css';


function NovelDescription() {

    const novelChaptersHandler = () => {
        window.location.href = '/chapters';
    }
    const userReviewssHandler = () => {
        window.location.href = '/reviews';
    }
    return (
        <>
            <Header />
            <main id='novel'>
                <header className='novel-header pt-5 pb-3'>
                    <div className='novel-image-container mb-3'>
                        <img src='https://th.bing.com/th/id/OIP.OVdwF4q_zTyBbBE-a3bIfAHaOG?pid=ImgDet&rs=1' alt='' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                    </div>
                    <div class="novel-auth-title ps-2 " >
                        <h3 className='text-light'>Title</h3>
                        <p style={{ color: "aquamarine", fontWidth: "bold" }}>
                            <small>
                                <PersonIcon style={{ margin: "0 3px 2px 0" }} />Author
                            </small>
                        </p>

                        {/* BIg screen */}
                        <ul className=' novel-category d-lg-flex d-none align-items-center ps-0 text-center gap-3'>
                            <li className=''>
                                <small>
                                    <a href='#' className='text-decoration-none px-2 text-dark fw-light'>Romance</a>
                                </small>
                            </li>
                            <li className=''>
                                <small>
                                    <a href='#' className='text-decoration-none px-2  text-dark fw-light'>History</a>
                                </small>
                            </li>
                            <li className=''>
                                <small>
                                    <a href='#' className='text-decoration-none px-2 text-dark fw-light'>Action</a>
                                </small>
                            </li>
                        </ul>

                        <div className='novel-record d-lg-flex d-none text-light gap-2 justify-content-between'>
                            <div>
                                <h4>Score</h4>
                                <p>4.3</p>
                            </div>
                            <div>
                                <h4>Chapters</h4>
                                <p>730</p>
                            </div>
                            <div>
                                <h4>Browse</h4>
                                <p>1029392</p>
                            </div>
                            <div>
                                <h4>Status</h4>
                                <p>Ongoing</p>
                            </div>
                        </div>

                        <div className="novel-action d-lg-flex d-none justify-content-end mt-5 gap-3">
                            <button className='btn btn-success'>Read</button>
                            <button className='btn btn-secondary'>Add to library</button>
                        </div>
                    </div>
                </header>
                <section className='background-dark' id='novel-re-header'>
                    <div className='novel-record row row-cols-2  justify-content-around d-lg-none text-light position-relative'>
                        <div className='col-5 py-2 d-flex justify-content-center align-items-center flex-column border background-dark-light'>
                            <h4>4.3</h4>
                            <p>Score</p>
                        </div>
                        <div className='col-5 py-2 d-flex justify-content-center align-items-center flex-column border background-dark-light'>
                            <h4>730</h4>
                            <p>Chapters</p>
                        </div>
                        <div className='col-5 py-2 mt-3 d-flex justify-content-center align-items-center flex-column border background-dark-light'>
                            <h4>1029392</h4>
                            <p className=''>Browse</p>
                        </div>
                        <div className='col-5 py-2 mt-3 d-flex justify-content-center align-items-center flex-column border background-dark-light'>
                            <h4>Ongoing</h4>
                            <p>Status</p>
                        </div>
                        <div className="novel-action col-12 d-flex mt-4 d-lg-none justify-content-around gap-3">
                            <button className='btn btn-success w-50'>Read</button>
                            <button className='btn btn-secondary w-50'> + <BarChartIcon /></button>
                        </div>
                    </div>
                    <div className='novel-about px-4 px-lg-2 fw-light'><small>Title novel is a popular light novel covering Romance, History, and Action genres. Written by the author Author. It has been updated to chapter 730</small></div>
                </section>

                <aside className='background-dark-light text-light text-center' style={{ height: "40vh" }}>Advertisement</aside>

                <section className="background-dark p-4 text-light" id='novel-re-categories' >
                    <div className='novel-categories d-lg-none mb-4 px-md-5'>
                        <h5 className='mb-3'>Categories</h5>
                        <ul className='ps-0 d-flex gap-3'>
                            <li className=''>
                                <small>
                                    <a href='#' className='text-decoration-none px-2 py-1 text-dark fw-light'>Romance</a>
                                </small>
                            </li>
                            <li className=''>
                                <small>
                                    <a href='#' className='text-decoration-none px-2  py-1 text-dark fw-light'>History</a>
                                </small>
                            </li>
                            <li className=''>
                                <small>
                                    <a href='#' className='text-decoration-none px-2 py-1 text-dark fw-light'>Action</a>
                                </small>
                            </li>
                        </ul>
                    </div>

                    <div className="novel-synopsis px-md-5">
                        <h5 className='mb-2'>Synopsis</h5>
                        <p>
                        The Lombardis were the most powerful family that ever existed in the empire. 
                        With unimaginable wealth, they shaped history, culture, and the arts—their influence rivaling that of the emperor.
                         However, the family collapsed after making an alliance with the first prince, which resulted in futility as the second-born 
                         Perez Brivachali Durelli was crowned instead.  
                        </p>

                        <p>
                        A Korean woman is reincarnated as Firentia, the daughter of a Lombardi and a commoner. 
                        Despite her status as an illegitimate child, her father and grandfather love her, and she works hard to keep her family's prestige intact.
                         After the two pass away, Firentia is kicked out and has since regretted how her relatives have torn the Lombardi name to shreds.
                            
                        </p>
                    </div>

                    <div className='d-flex flex-column px-md-5' >
                        <h5 className='mt-3 mb-2'>Links</h5>
                        <a href='#' className='text-decoration-none fw-light' style={{ color: "aquamarine" }}>Support the author on patreon.com</a>
                        <a href='#' className='text-decoration-none fw-light' style={{ color: "aquamarine" }}>Discord</a>
                    </div>

                    {/* Author's Novels  */}
                    <div id="carousel-hot-container" className='px-md-5'>
                        <h5 className='my-4 fs-3'>Author's Novels</h5>
                        <Carousel interval={null} >
                            <Carousel.Item>
                                <div class="d-block">
                                    <div className="d-flex align-items-center gap-2 carousel-hot-items">
                                        <img
                                            className="d-block h-100 w-25 rounded-2 ps-2 py-0 pe-0"
                                            src="https://cdn.myanimelist.net/images/manga/2/222246l.jpg"
                                            alt="First slide"
                                            style={{ objectFit: "cover" }}
                                        />
                                        <div className="ml-3">
                                            <h5>Your Letter</h5>
                                            <p>Ranked #599</p>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="d-block">
                                    <div className="d-flex align-items-center gap-2 carousel-hot-items">
                                        <img
                                            className="d-block h-100 w-25 rounded-2 ps-2 py-0 pe-0"
                                            src="https://cdn.myanimelist.net/images/manga/2/260198l.jpg"
                                            alt="First slide"
                                            style={{ objectFit: "cover" }}
                                        />
                                        <div className="ml-3">
                                            <h5>See You in My 19th Life</h5>
                                            <p>Ranked #604</p>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div class="d-block">
                                    <div className="d-flex align-items-center gap-2 carousel-hot-items">
                                        <img
                                            className="d-block h-100 w-25 rounded-2 ps-2 py-0 pe-0"
                                            src="https://cdn.myanimelist.net/images/manga/3/208547l.jpg"
                                            alt="First slide"
                                            style={{ objectFit: "cover" }}
                                        />
                                        <div className="ml-3">
                                            <h5>Winter Woods</h5>
                                            <p>Ranked #621</p>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>

                    {/* Tags */}
                    <div id='novel-tags' className='px-md-5'>
                        <h5 className='mt-3 mb-3'>Tags</h5>
                        <ul className='ps-0 d-flex flex-wrap gap-3'>
                            <li className=''>
                                <small>
                                    <a href='#' className='text-decoration-none px-2 py-1 text-dark fw-light'>Tags</a>
                                </small>
                            </li>
                            <li className=''>
                                <small>
                                    <a href='#' className='text-decoration-none px-2  py-1 text-dark fw-light'>Tags</a>
                                </small>
                            </li>
                            <li className=''>
                                <small>
                                    <a href='#' className='text-decoration-none px-2 py-1 text-dark fw-light'>TagsTags</a>
                                </small>
                            </li>
                            <li className=''>
                                <small>
                                    <a href='#' className='text-decoration-none px-2 py-1 text-dark fw-light'>Tags</a>
                                </small>
                            </li>
                            <li className=''>
                                <small>
                                    <a href='#' className='text-decoration-none px-2 py-1 text-dark fw-light'>Tags</a>
                                </small>
                            </li>
                            <li className=''>
                                <small>
                                    <a href='#' className='text-decoration-none px-2 py-1 text-dark fw-light'>TagsTags</a>
                                </small>
                            </li>
                            <li className=''>
                                <small>
                                    <a href='#' className='text-decoration-none px-2 py-1 text-dark fw-light'>Tags</a>
                                </small>
                            </li>
                        </ul>
                    </div>

                </section>

                <section className='background-dark-light p-4 text-light' id='novel-comment-action' >
                    <div className='d-flex flex-wrap w-100 justify-content-center gap-5' >
                        <div className='rounded-3 p-3' onClick={novelChaptersHandler} style={{ backgroundColor: "rgba(127, 255, 212, 0.1)", border: "1px solid aquamarine", cursor: "pointer" }}>
                            <h5 className='fs-3' style={{ color: "aquamarine" }}>Novel Chapters</h5>
                            <p style={{ color: "aquamarine" }}> Chapter 730: Requiem </p>
                            <p className="m-0" style={{ color: "aquamarine" }}> Updated 10 minutes ago</p>
                        </div>
                        <div className='rounded-3 p-3' onClick={userReviewssHandler} style={{ backgroundColor: "rgba(127, 255, 212, 0.1)", border: "1px solid aquamarine", cursor: "pointer" }}>
                            <h5 className='fs-3' style={{ color: "aquamarine" }}>User Reviews</h5>
                            <p style={{ color: "aquamarine" }}> Reviews from 40 readers</p>
                            <p className="m-0" style={{ color: "aquamarine" }}> Average Score is 4.8/5</p>
                        </div>
                    </div>
                    <aside className='mt-5 background-dark text-light text-center' style={{ height: "40vh" }}>Advertisement</aside>
                    <div className="d-flex mt-5 border justify-content-center align-items-center" style={{ height: "30vh" }}>Comments Here</div>
                </section>

                <section className='background-dark text-light p-4' id='novel-similar-recommended'>
                    <h5>Similar Recommended</h5>
                    <div className='row row-cols-8 justify-content-around my-5' id='weekly-novels-books'>
                        <div className='col'>
                            <img src='https://cdn.myanimelist.net/images/manga/1/235295l.jpg' alt='asd ' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            <p style={{ wordWrap: "break-word" }} className='fw-light'>The Remarried Empress</p>
                        </div>
                        <div className='col '>
                            <img src='https://cdn.myanimelist.net/images/manga/3/239496l.jpg' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            <p style={{ wordWrap: "break-word" }} className='fw-light'>Heesu in Class 2</p>
                        </div>
                        <div className='col'>
                            <img src='https://cdn.myanimelist.net/images/manga/1/262455l.jpg' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            <p style={{ wordWrap: "break-word" }} className='fw-light'>Nano Machine</p>
                        </div>
                        <div className='col d-lg-block d-none'>
                            <img src='https://cdn.myanimelist.net/images/manga/2/89293l.jpg' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            <p style={{ wordWrap: "break-word" }} className='fw-light'>About Death</p>
                        </div>

                        <div className='col d-lg-block d-none'>
                            <img src='https://th.bing.com/th/id/R.2f2f268076f878d431aa6519477a6425?rik=3ZaI8j75Yz8fvA&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f5%2f6%2ff%2f1290302-free-cool-anime-iphone-wallpaper-1080x1920-meizu.jpg&ehk=G6Pwuf%2fhNrQgE%2bke8KT1msveqP9Wh73fVfj58Lwv5A4%3d&risl=&pid=ImgRaw&r=0' alt='asd ' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            <p style={{ wordWrap: "break-word" }} className='fw-light'>Viral Hit</p>
                        </div>
                        <div className='col d-lg-block d-none'>
                            <img src='https://cdn.myanimelist.net/images/manga/1/260761l.jpg' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            <p style={{ wordWrap: "break-word" }} className='fw-light'>SSS-Class Revival Hunter</p>
                        </div>
                        <div className='col d-lg-block d-none'>
                            <img src='https://cdn.myanimelist.net/images/manga/2/208866l.jpg' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            <p style={{ wordWrap: "break-word" }} className='fw-light'>Lookism</p>
                        </div>
                        <div className='col'>
                            <img src='https://cdn.myanimelist.net/images/manga/3/232795l.jpg' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            <p style={{ wordWrap: "break-word" }} className='fw-light'>Weak Hero</p>
                        </div>
                    </div>
                </section>


            </main >
            <Footer />

        </>
    )
}

export default NovelDescription