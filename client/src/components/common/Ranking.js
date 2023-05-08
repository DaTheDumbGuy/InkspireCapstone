import React, { useState } from 'react'

function Ranking() {
    const [mostNovel, setMostNovel] = useState(true);
    const [newNovel, setNewNovel] = useState(false);

    const mostNovelHandler = () => {
        setMostNovel(true);
        setNewNovel(false);

    }
    const newNovelHandler = () => {
        setMostNovel(false);
        setNewNovel(true);

    }
    const highNovelHandler = () => {
        setMostNovel(false);
        setNewNovel(false);
    }
    return (
        <>
            {/* Buttons */}
            <div className='d-flex justify-content-between gap-1 ranking-buttons-container mb-4' >
                <button type='button' style={{ width: "33.33%" }} className={`ranking-buttons p-2 ${mostNovel ? 'bg-success' : ''}`} onClick={mostNovelHandler}>Most Novel</button>
                <button type='button' style={{ width: "33.33%" }} className={`ranking-buttons p-2 ${newNovel ? 'bg-success' : ''}`} onClick={newNovelHandler}> New Novel</button>
                <button type='button' style={{ width: "33.33%" }} className={`ranking-buttons p-2 ${!mostNovel && !newNovel ? 'bg-success' : ''}`} onClick={highNovelHandler}>High Novel</button>
            </div>
            {/* Ranking Container*/}
            {mostNovel ? (
                <div className='d-flex justify-content-around p-3' id='ranking-container'>
                    <div className='item-one '>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://th.bing.com/th/id/OIP.RKFVgmr62BwWd9kbFqQvNgHaLO?pid=ImgDet&w=564&h=855&rs=1' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>1</p>
                                <div className='ranking-description'>
                                    <h4>Title</h4>
                                    <p>views</p>
                                </div>
                            </div>
                        </div>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://th.bing.com/th/id/OIP.ZZr_3AEuZQ6rdGLtzn7bdgHaJt?pid=ImgDet&w=1067&h=1400&rs=1' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>1</p>
                                <div className='ranking-description'>
                                    <h4>Title asdasd </h4>
                                    <p>views</p>
                                </div>
                            </div>
                        </div>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://th.bing.com/th/id/OIP.mfgrK3HfW7zGYSuJxUWjngHaJZ?pid=ImgDet&rs=1' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>1</p>
                                <div className='ranking-description'>
                                    <h4>Title</h4>
                                    <p>views</p>
                                </div>
                            </div>
                        </div>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://th.bing.com/th/id/OIP.2E_SeDGA-HWDHGg0LiKDawHaNK?pid=ImgDet&rs=1' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>1</p>
                                <div className='ranking-description'>
                                    <h4>Title</h4>
                                    <p>views</p>
                                </div>
                            </div>
                        </div>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://i.pinimg.com/originals/e3/47/af/e347af16ca440ae169d335fd4331dc80.jpg' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>1</p>
                                <div className='ranking-description'>
                                    <h4>Title</h4>
                                    <p>views</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='item-two '>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://th.bing.com/th/id/OIP.pZVIcDFgSdrI4lVGrOxpkAHaKk?pid=ImgDet&rs=1' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>1</p>
                                <div className='ranking-description'>
                                    <h4>Title</h4>
                                    <p>views</p>
                                </div>
                            </div>
                        </div>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://th.bing.com/th/id/OIP.ztyLN85xgy3a4TsrzKdV0AHaL_?pid=ImgDet&rs=1' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>1</p>
                                <div className='ranking-description'>
                                    <h4>Title asdasd </h4>
                                    <p>views</p>
                                </div>
                            </div>
                        </div>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://th.bing.com/th/id/OIP.ztyLN85xgy3a4TsrzKdV0AHaL_?pid=ImgDet&rs=1' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>1</p>
                                <div className='ranking-description'>
                                    <h4>Title</h4>
                                    <p>views</p>
                                </div>
                            </div>
                        </div>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://th.bing.com/th/id/OIP.ztyLN85xgy3a4TsrzKdV0AHaL_?pid=ImgDet&rs=1' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>1</p>
                                <div className='ranking-description'>
                                    <h4>Title</h4>
                                    <p>views</p>
                                </div>
                            </div>
                        </div>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://th.bing.com/th/id/OIP.ztyLN85xgy3a4TsrzKdV0AHaL_?pid=ImgDet&rs=1' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>1</p>
                                <div className='ranking-description'>
                                    <h4>Title</h4>
                                    <p>views</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : newNovel ? (
                <div className='d-flex justify-content-around p-3' id='ranking-container'>
                    <div className='item-one '>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://i.pinimg.com/originals/e3/47/af/e347af16ca440ae169d335fd4331dc80.jpg' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>1</p>
                                <div className='ranking-description'>
                                    <h4>Title</h4>
                                    <p>views</p>
                                </div>
                            </div>
                        </div>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://i.pinimg.com/originals/e3/47/af/e347af16ca440ae169d335fd4331dc80.jpg' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>1</p>
                                <div className='ranking-description'>
                                    <h4>Title asdasd </h4>
                                    <p>views</p>
                                </div>
                            </div>
                        </div>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://i.pinimg.com/originals/e3/47/af/e347af16ca440ae169d335fd4331dc80.jpg' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>1</p>
                                <div className='ranking-description'>
                                    <h4>Title</h4>
                                    <p>views</p>
                                </div>
                            </div>
                        </div>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://i.pinimg.com/originals/e3/47/af/e347af16ca440ae169d335fd4331dc80.jpg' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>1</p>
                                <div className='ranking-description'>
                                    <h4>Title</h4>
                                    <p>views</p>
                                </div>
                            </div>
                        </div>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://i.pinimg.com/originals/e3/47/af/e347af16ca440ae169d335fd4331dc80.jpg' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>1</p>
                                <div className='ranking-description'>
                                    <h4>Title</h4>
                                    <p>views</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='item-two '>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://i.pinimg.com/originals/e3/47/af/e347af16ca440ae169d335fd4331dc80.jpg' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>1</p>
                                <div className='ranking-description'>
                                    <h4>Title</h4>
                                    <p>views</p>
                                </div>
                            </div>
                        </div>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://i.pinimg.com/originals/e3/47/af/e347af16ca440ae169d335fd4331dc80.jpg' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>1</p>
                                <div className='ranking-description'>
                                    <h4>Title asdasd </h4>
                                    <p>views</p>
                                </div>
                            </div>
                        </div>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://i.pinimg.com/originals/e3/47/af/e347af16ca440ae169d335fd4331dc80.jpg' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>1</p>
                                <div className='ranking-description'>
                                    <h4>Title</h4>
                                    <p>views</p>
                                </div>
                            </div>
                        </div>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://i.pinimg.com/originals/e3/47/af/e347af16ca440ae169d335fd4331dc80.jpg' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>1</p>
                                <div className='ranking-description'>
                                    <h4>Title</h4>
                                    <p>views</p>
                                </div>
                            </div>
                        </div>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://i.pinimg.com/originals/e3/47/af/e347af16ca440ae169d335fd4331dc80.jpg' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>1</p>
                                <div className='ranking-description'>
                                    <h4>Title</h4>
                                    <p>views</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='d-flex justify-content-around p-3' id='ranking-container'>
                    <div className='item-one '>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://th.bing.com/th/id/OIP.rtOTH6O2DESYIOAcOkZJwAHaKd?pid=ImgDet&w=1417&h=2000&rs=1' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>1</p>
                                <div className='ranking-description'>
                                    <h4>Title</h4>
                                    <p>views</p>
                                </div>
                            </div>
                        </div>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://th.bing.com/th/id/OIP.rtOTH6O2DESYIOAcOkZJwAHaKd?pid=ImgDet&w=1417&h=2000&rs=1' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>1</p>
                                <div className='ranking-description'>
                                    <h4>Title asdasd </h4>
                                    <p>views</p>
                                </div>
                            </div>
                        </div>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://th.bing.com/th/id/OIP.rtOTH6O2DESYIOAcOkZJwAHaKd?pid=ImgDet&w=1417&h=2000&rs=1' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>1</p>
                                <div className='ranking-description'>
                                    <h4>Title</h4>
                                    <p>views</p>
                                </div>
                            </div>
                        </div>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://th.bing.com/th/id/OIP.rtOTH6O2DESYIOAcOkZJwAHaKd?pid=ImgDet&w=1417&h=2000&rs=1' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>1</p>
                                <div className='ranking-description'>
                                    <h4>Title</h4>
                                    <p>views</p>
                                </div>
                            </div>
                        </div>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://th.bing.com/th/id/OIP.rtOTH6O2DESYIOAcOkZJwAHaKd?pid=ImgDet&w=1417&h=2000&rs=1' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>1</p>
                                <div className='ranking-description'>
                                    <h4>Title</h4>
                                    <p>views</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='item-two '>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://th.bing.com/th/id/OIP.rtOTH6O2DESYIOAcOkZJwAHaKd?pid=ImgDet&w=1417&h=2000&rs=1' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>1</p>
                                <div className='ranking-description'>
                                    <h4>Title</h4>
                                    <p>views</p>
                                </div>
                            </div>
                        </div>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://th.bing.com/th/id/OIP.rtOTH6O2DESYIOAcOkZJwAHaKd?pid=ImgDet&w=1417&h=2000&rs=1' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>1</p>
                                <div className='ranking-description'>
                                    <h4>Title asdasd </h4>
                                    <p>views</p>
                                </div>
                            </div>
                        </div>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://th.bing.com/th/id/OIP.rtOTH6O2DESYIOAcOkZJwAHaKd?pid=ImgDet&w=1417&h=2000&rs=1' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>1</p>
                                <div className='ranking-description'>
                                    <h4>Title</h4>
                                    <p>views</p>
                                </div>
                            </div>
                        </div>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://th.bing.com/th/id/OIP.rtOTH6O2DESYIOAcOkZJwAHaKd?pid=ImgDet&w=1417&h=2000&rs=1' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>1</p>
                                <div className='ranking-description'>
                                    <h4>Title</h4>
                                    <p>views</p>
                                </div>
                            </div>
                        </div>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://th.bing.com/th/id/OIP.rtOTH6O2DESYIOAcOkZJwAHaKd?pid=ImgDet&w=1417&h=2000&rs=1' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>1</p>
                                <div className='ranking-description'>
                                    <h4>Title</h4>
                                    <p>views</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Ranking