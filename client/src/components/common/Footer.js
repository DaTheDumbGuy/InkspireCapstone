import React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function Footer() {
    return (
        <footer className='background-dark-light p-3 px-lg-5 px-3'>
            <div className='mb-3'>
                <a className="navbar-brand fw-bold me-lg-5 me-2 text-light fs-4" href="#">Ink<span style={{ color: "lightgreen" }}>spire</span></a>
            </div>

            <div className='row row-cols-lg-3 row-cols-2 '>
                <div className='col d-flex flex-column align-items-start'>
                    <a href='#' className='mb-2 nav-link text-light'><span><ArrowRightIcon style={{ color: 'lightgreen' }} /></span>MOST POPULAR</a>
                    <a href='#' className='mb-2 nav-link text-light'><span><ArrowRightIcon style={{ color: 'lightgreen' }} /></span>PRIVACY POLICY</a>
                    <a href='#' className='mb-2 nav-link text-light'><span><ArrowRightIcon style={{ color: 'lightgreen' }} /></span>ROMANCE</a>
                    <a href='#' className='mb-2 nav-link text-light'><span><ArrowRightIcon style={{ color: 'lightgreen' }} /></span>HOT CATEGORY</a>
                </div>
                <div className='col  d-flex flex-column align-items-start'>
                    <a href='#' className='mb-2 nav-link text-light'><span><ArrowRightIcon style={{ color: 'lightgreen' }} /></span>LATEST CHAPTERS</a>
                    <a href='#' className='mb-2 nav-link text-light'><span><ArrowRightIcon style={{ color: 'lightgreen' }} /></span>TERMS OF SERVICES</a>
                    <a href='#' className='mb-2 nav-link text-light'><span><ArrowRightIcon style={{ color: 'lightgreen' }} /></span>FANTASY</a>
                    <a href='#' className='mb-2 nav-link text-light'><span><ArrowRightIcon style={{ color: 'lightgreen' }} /></span>HOT TAGS</a>
                </div>
                <div className='col-12 col-lg-4 d-flex flex-column'>
                    <div className='row row-cols-lg-1 row-cols-2'>
                        <div class="col  d-flex flex-column align-items-start">
                            <a href='#' className='mb-2 nav-link text-light'><span><ArrowRightIcon style={{ color: 'lightgreen' }} /></span>POPULAR KOREAN NOVELS</a>
                            <a href='#' className='mb-2 nav-link text-light'><span><ArrowRightIcon style={{ color: 'lightgreen' }} /></span>HOT ARTICLE</a>
                        </div>
                        <div class="col  d-flex flex-column align-items-start">
                            <a href='#' className='mb-2 nav-link text-light'><span><ArrowRightIcon style={{ color: 'lightgreen' }} /></span>ADVENTURE</a>
                            <a href='#' className='mb-2 nav-link text-light'><span><ArrowRightIcon style={{ color: 'lightgreen' }} /></span>SLICE OF LIFE</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='text-light d-flex flex-column align-items-center mt-5'>
                <p style={{ color: "lightgreen" }}>CONTACT US: info@Inkspire.com</p>
                <p>&copy;2023 Inkspire</p>
            </div>
        </footer>
    )
}

export default Footer