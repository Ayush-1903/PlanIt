import user from '../../../../assets/User.svg';
import pw from '../../../../assets/school-tiles-logo/PW.png';
import kaksha from '../../../../assets/school-tiles-logo/Kaksha.png';
import unacademy from '../../../../assets/school-tiles-logo/Unacademy.png';
import byjus from '../../../../assets/school-tiles-logo/Byjus.png';
import toppr from '../../../../assets/school-tiles-logo/Toppr.png';
import doubtnut from '../../../../assets/school-tiles-logo/Doubtnut.png';
import embibe from '../../../../assets/school-tiles-logo/Embibe.png';
import vedantu from '../../../../assets/school-tiles-logo/Vedantu.png';
import brainly from '../../../../assets/school-tiles-logo/Brainly.png';

function Front() {

    const date = new Date();
    const currTime = date.getHours();

    let greeting;

    if(currTime < 12){
        greeting = "Good Morning";
    }

    else if(currTime < 18){
        greeting = "Good Afternoon";
    }

    else{
        greeting = "Good Evening";
    }

    return (
        <main>
            <div className="main-container">
                <div className="main-title">
                        <img alt="Hello" src={user}></img>
                        <div className="main-greeting">
                            <h1>{greeting}! User</h1>
                            <p>Welcome to your Dashboard</p>
                        </div>
                </div>

                <section id="services" className="section-bg">
                    <div className="front-container">

                        <header className="section-header">
                            <h3>Services</h3>
                            {/* <p>Laudem latine persequeris id sed, ex fabulas delectus quo. No vel partiendo abhorreant vituperatoribus.</p> */}
                        </header>

                        <div className="front-row">
                            <div className="main-box">
                                <a href="https://www.pw.live/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Physics Wallah" src={pw}/></div>
                                        <h4 className="title">Physics Wallah</h4>
                                        <p className="description">India's top online ed-tech platform that provides affordable and comprehensive learning experience to students of classes 6 to 12 and those preparing for JEE and NEET exams.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="main-box">
                                <a href="https://www.apnikaksha.net/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Apni Kaksha" src={kaksha}/></div>
                                        <h4 className="title">Apni Kaksha</h4>
                                        <p className="description">The all-new Apni Kaksha Application is here! The one-stop solution for all your learning needs. From Physics, Chemistry and Maths, to English and SST, we've got you covered.</p>
                                    </div>
                                </a>
                            </div>

                            <div className="main-box">
                                <a href="https://unacademy.com/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Unacademy" src={unacademy}/></div>
                                        <h4 className="title">Unacademy</h4>
                                        <p className="description">An educational platform with a massive transformative purpose of being the world’s largest educational repository by empowering great educators and making it accessible to everyone.</p>
                                    </div>
                                </a>
                            </div>
                            
                            <div className="main-box">
                                <a href="https://www.vedantu.com/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Vedantu" src={vedantu}/></div>
                                        <h4 className="title">Vedantu</h4>
                                        <p className="description">Vedantu is a live online education platform that offers personalized courses to students. It has more than 500 educators on its platforms currently.</p>
                                    </div>
                                </a>
                            </div>
                            
                            <div className="main-box">
                                <a href="https://byjus.com/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Byjus" src={byjus}/></div>
                                        <h4 className="title">Byju's</h4>
                                        <p className="description">Launched in 2015, BYJU'S offers highly personalised and effective learning programs for classes 1 - 12 (K-12), and aspirants of competitive exams like JEE, IAS etc.</p>
                                    </div>
                                </a>
                            </div>
                            
                            <div className="main-box">
                                <a href="https://www.toppr.com/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Toppr" src={toppr}/></div>
                                        <h4 className="title">Toppr</h4>
                                        <p className="description">Toppr has more than 1.5 million learning pieces, including adaptive practice questions, solutions, concepts, and videos that come together seamlessly to give 360° learning.</p>
                                    </div>
                                </a>
                            </div>
                            
                            <div className="main-box">
                                <a href="https://www.doubtnut.com/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Doubtnut" src={doubtnut}/></div>
                                        <h4 className="title">Doubtnut</h4>
                                        <p className="description">Doubtnut App is India's top and only instant doubt solving platform, which gives out instant video solutions to all your Physics, Chemistry, Maths, Biology and Science doubts.</p>
                                    </div>
                                </a>
                            </div>
                            
                            <div className="main-box">
                                <a href="https://www.embibe.com/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Embibe" src={embibe}/></div>
                                        <h4 className="title">Embibe</h4>
                                        <p className="description">Embibe is currently India’s largest AI based educational startup. It focuses on students that are preparing for competitive exams such as JEE, NEET and exams for government jobs. </p>
                                    </div>
                                </a>
                            </div>
                            
                            <div className="main-box">
                                <a href="https://brainly.in/" target="_blank" rel="noreferrer" style={{textDecoration : "none"}}>
                                    <div className="box">
                                        <div className="icon"><img alt="Brainly" src={brainly}/></div>
                                        <h4 className="title">Brainly</h4>
                                        <p className="description">Brainly is the knowledge-sharing community where 350 million students and experts put their heads together to crack their toughest homework questions.</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Front;