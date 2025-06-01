import '../../App.scss/css/Style.min.css'

export default function Cover() {

    return (
        <>
            {/* 水晶小百科  */}
            <section id="section-crystaldiscovery">
                <div className="crystal-display">
                    <div className="circlebox">
                        <div className='circle'>
                            <div className='withbtn'>
                                <button id='circleup'><img src="./images/HomePage/icon_btn_up.ico.svg" alt="" /></button>
                                <div >
                                    <img src="./images/HomePage/covercrystal/crystal-kyanite.svg" id='disc-kyanite' alt="" />
                                </div>
                                <button id='circledown'><img src="./images/HomePage/icon_btn_down.ico.svg" alt="" /></button>
                            </div>
                        </div>
                        <div className='circle'>
                            <img src="./images/HomePage/covercrystal/crystal-amethyst.svg" id='disc-amethyst' alt="" />
                        </div>
                        <div className='circle'>
                            <img src="./images/HomePage/covercrystal/crystal-sunstone.svg" id='disc-sunstone' alt="" />
                        </div>
                        <div className='circle'>
                            <img src="./images/HomePage/covercrystal/crystal-golden-rutilated-quartz.svg" id='disc-golden' alt="" />
                        </div>
                        <div className='circle'>
                            <img src="./images/HomePage/covercrystal/crystal-golden-strawberry-quartz.svg" id='disc-strawberry' alt="" />
                        </div>
                        <div className='circle'>
                            <img src="./images/HomePage/covercrystal/crystal-angelite.svg" id='disc-angelite' alt="" />
                        </div>
                        <div className='circle'>
                            <img src="./images/HomePage/covercrystal/crystal-moonstone.svg" id='disc-moonstone' alt="" />
                        </div>
                        <div className='circle'>
                            <img src="./images/HomePage/covercrystal/crystal-rose-quartz.svg" id='disc-rose' alt="" />
                        </div>
                        <div className='circle'>
                            <img src="./images/HomePage/covercrystal/crystal-green-phantom-quartz.svg" id='disc-green' alt="" />
                        </div>
                        <div className='circle'>
                            <img src="./images/HomePage/covercrystal/crystal-moonstone.svg" id='disc-moonstone1' alt="" />
                        </div>
                        <div className='circle'>
                            <img src="./images/HomePage/covercrystal/crystal-rose-quartz.svg" id='disc-rose1' alt="" />
                        </div>
                        <div className='circle'>
                            <img src="./images/HomePage/covercrystal/crystal-angelite.svg" id='disc-angelite1' alt="" />
                        </div>
                    </div>
                </div>

                <div className="section-crystaldiscovery">
                    <header>
                        <div id="titlediscovery">
                            <span className="en">Crystal Discoveries</span>
                            <span>水晶小百科</span>
                        </div>
                    </header>
                    <div className="crystaldiscovery">
                        <article className="covercrystal">
                            <div className="crystal-name">
                                <span className="en">Kyanite</span>
                                <span className="ch">藍晶石</span>
                            </div>
                            <div className="discovery-content">
                                <p>藍晶石是一種美麗的藍色水晶，擁有從淺藍到深藍的色澤，並呈現獨特的光澤。它常用於增強溝通、情緒平衡和靈性覺醒。</p>
                            </div>
                        </article>
                        <article className="discovery-p1">
                            <h2>主要功效</h2>
                            <p className="discovery-p1content">
                                促進溝通：幫助開啟喉輪，增強表達與自我溝通。<br />
                                情緒平衡：有助於緩解焦慮與情緒不穩，帶來內心的平靜。<br />
                                靈性覺醒：提升直覺與靈性成長，增強心靈覺醒。
                            </p>
                        </article>
                        <article className="discovery-p2">
                            <h2>適合人群</h2>
                            <p className="discovery-p2content">
                                追求心靈成長與靈性覺醒的人。<br />
                                需要情緒平衡與放鬆的人。
                            </p>
                        </article>
                        <article className="discovery-p3">
                            <h2>建議搭配水晶</h2>
                            <div className="discovery-imgbox">
                                <img src="./images/S-CrystalSingle/crystal-angelite.png" className="discovery-img" alt="" />
                                <img src="./images/S-CrystalSingle/crystal-amethyst.png" className="discovery-img" alt="" />
                                <img src="./images/S-CrystalSingle/crystal-sunstone.png" className="discovery-img" alt="" />
                            </div>
                        </article>
                    </div>
                </div>
            </section >
        </>
    )
}