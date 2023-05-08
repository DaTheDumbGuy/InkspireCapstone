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
                                <img src='https://cdn.myanimelist.net/images/manga/3/222295l.jpg' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>1</p>
                                <div className='ranking-description'>
                                    <h4>Solo Leveling</h4>
                                    <p>Popularity #5</p>
                                </div>
                            </div>
                        </div>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://cdn.myanimelist.net/images/manga/1/229331l.jpg' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>2</p>
                                <div className='ranking-description'>
                                    <h4>The Horizon </h4>
                                    <p>Popularity #190</p>
                                </div>
                            </div>
                        </div>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://cdn.myanimelist.net/images/manga/1/189563l.jpg' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>3</p>
                                <div className='ranking-description'>
                                    <h4>Wind Breaker</h4>
                                    <p>Popularity #7</p>
                                </div>
                            </div>
                        </div>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://cdn.myanimelist.net/images/manga/1/205549l.jpg' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>4</p>
                                <div className='ranking-description'>
                                    <h4>Bastard</h4>
                                    <p>Popularity #85</p>
                                </div>
                            </div>
                        </div>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://cdn.myanimelist.net/images/manga/1/222587l.jpg' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>5</p>
                                <div className='ranking-description'>
                                    <h4>Who Made Me a Princess</h4>
                                    <p>Popularity #364</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='item-two '>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://cdn.myanimelist.net/images/manga/3/243483l.jpg' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>6</p>
                                <div className='ranking-description'>
                                    <h4>The Legend of the Northern Blade</h4>
                                    <p>Popularity #678</p>
                                </div>
                            </div>
                        </div>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://cdn.myanimelist.net/images/manga/3/251281l.jpg' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>7</p>
                                <div className='ranking-description'>
                                    <h4>The Boxer</h4>
                                    <p>Popularity #596</p>
                                </div>
                            </div>
                        </div>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://cdn.myanimelist.net/images/manga/1/260660l.jpg' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>8</p>
                                <div className='ranking-description'>
                                    <h4>Eleceed</h4>
                                    <p>Popularity #1273</p>
                                </div>
                            </div>
                        </div>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://cdn.myanimelist.net/images/manga/2/223694l.jpg' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>9</p>
                                <div className='ranking-description'>
                                    <h4>Tower of God</h4>
                                    <p>Popularity #44</p>
                                </div>
                            </div>
                        </div>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://cdn.myanimelist.net/images/manga/2/55869l.jpg' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>10</p>
                                <div className='ranking-description'>
                                    <h4>The Breaker</h4>
                                    <p>Popularity #73</p>
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
                                    <h4>Berserk</h4>
                                    <p>125,488 views</p>
                                </div>
                            </div>
                        </div>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://i.pinimg.com/originals/e3/47/af/e347af16ca440ae169d335fd4331dc80.jpg' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>2</p>
                                <div className='ranking-description'>
                                    <h4>JoJo no Kimyou na Bouken Part 7: Steel Ball Run </h4>
                                    <p>956,453 views</p>
                                </div>
                            </div>
                        </div>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://i.pinimg.com/originals/e3/47/af/e347af16ca440ae169d335fd4331dc80.jpg' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>3</p>
                                <div className='ranking-description'>
                                    <h4>Vagabond</h4>
                                    <p>233,125 views</p>
                                </div>
                            </div>
                        </div>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://i.pinimg.com/originals/e3/47/af/e347af16ca440ae169d335fd4331dc80.jpg' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>4</p>
                                <div className='ranking-description'>
                                    <h4>One Piece</h4>
                                    <p>1.7B views</p>
                                </div>
                            </div>
                        </div>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://i.pinimg.com/originals/e3/47/af/e347af16ca440ae169d335fd4331dc80.jpg' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>5</p>
                                <div className='ranking-description'>
                                    <h4>Monster</h4>
                                    <p>190,354 views</p>
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
                                <p className='me-2'>6</p>
                                <div className='ranking-description'>
                                    <h4>Slam Dunk</h4>
                                    <p>1.1B views</p>
                                </div>
                            </div>
                        </div>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://i.pinimg.com/originals/e3/47/af/e347af16ca440ae169d335fd4331dc80.jpg' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>7</p>
                                <div className='ranking-description'>
                                    <h4>Fullmetal Alchemist</h4>
                                    <p>1.5B views</p>
                                </div>
                            </div>
                        </div>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://i.pinimg.com/originals/e3/47/af/e347af16ca440ae169d335fd4331dc80.jpg' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>8</p>
                                <div className='ranking-description'>
                                    <h4>Vinland Saga</h4>
                                    <p>1.2B views</p>
                                </div>
                            </div>
                        </div>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://i.pinimg.com/originals/e3/47/af/e347af16ca440ae169d335fd4331dc80.jpg' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>9</p>
                                <div className='ranking-description'>
                                    <h4>Grand Blue</h4>
                                    <p>350,756 views</p>
                                </div>
                            </div>
                        </div>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://i.pinimg.com/originals/e3/47/af/e347af16ca440ae169d335fd4331dc80.jpg' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>10</p>
                                <div className='ranking-description'>
                                    <h4>Oyasumi Punpun</h4>
                                    <p>547,132 views</p>
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
                                <img src='https://cdn.myanimelist.net/images/manga/2/171872.jpg' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>1</p>
                                <div className='ranking-description'>
                                    <h4>Kingdom</h4>
                                    <p>32,450 views</p>
                                </div>
                            </div>
                        </div>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://cdn.myanimelist.net/images/manga/1/115443.jpg' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>2</p>
                                <div className='ranking-description'>
                                    <h4>Houseki no Kuni</h4>
                                    <p>122,354 views</p>
                                </div>
                            </div>
                        </div>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://cdn.myanimelist.net/images/manga/5/260006.jpg' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                                <img src='' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>3</p>
                                <div className='ranking-description'>
                                    <h4>20th Century Boys</h4>
                                    <p>437,886 views</p>
                                </div>
                            </div>
                        </div>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://cdn.myanimelist.net/images/manga/1/268827.jpg' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>4</p>
                                <div className='ranking-description'>
                                    <h4>Ashita no Joe</h4>
                                    <p>336,552 views</p>
                                </div>
                            </div>
                        </div>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://cdn.myanimelist.net/images/manga/2/115969.jpg' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>5</p>
                                <div className='ranking-description'>
                                    <h4>Real</h4>
                                    <p>553,878 views</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='item-two '>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://cdn.myanimelist.net/images/manga/3/188896.jpg' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>6</p>
                                <div className='ranking-description'>
                                    <h4>Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen</h4>
                                    <p>199,252 views</p>
                                </div>
                            </div>
                        </div>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://cdn.myanimelist.net/images/manga/2/172982.jpg' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>7</p>
                                <div className='ranking-description'>
                                    <h4>GTO</h4>
                                    <p>227,553 views</p>
                                </div>
                            </div>
                        </div>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://cdn.myanimelist.net/images/manga/5/259524.jpg' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>8</p>
                                <div className='ranking-description'>
                                    <h4>Yotsuba to!</h4>
                                    <p>575,835 views</p>
                                </div>
                            </div>
                        </div>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://cdn.myanimelist.net/images/manga/1/52281l.jpg' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>9</p>
                                <div className='ranking-description'>
                                    <h4>3-gatsu no Lion</h4>
                                    <p>332,655 views</p>
                                </div>
                            </div>
                        </div>
                        <div className='ranking-items gap-2 mb-2'>
                            <div className='ranking-image'>
                                <img src='https://cdn.myanimelist.net/images/manga/1/103647l.jpg' alt='asd' className='w-100 h-100 ' style={{ objectFit: "cover" }} />
                            </div>
                            <div className='d-flex'>
                                <p className='me-2'>10</p>
                                <div className='ranking-description'>
                                    <h4>Koe no Katachi</h4>
                                    <p>333,598 views</p>
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