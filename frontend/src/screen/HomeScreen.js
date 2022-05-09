import React,{ useEffect, useState } from 'react'
import emailjs from 'emailjs-com'
import axios from 'axios';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { Link } from 'react-scroll';
import Aos from 'aos';
import 'aos/dist/aos.css'

export default function HomeScreen() {

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_62v3wwk', 'template_3ivkhkw', e.target, 'user_BZ0KCF9VDefFM2uGVWFYz')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }

    const [portfolio, setPortfolio] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fecthData = async () => {
            try {
                setLoading(true);
                const { data } = await axios.get('/api/portfolio');
                setLoading(false);
                setPortfolio(data);
              } catch (err) {
                setError(err.message);
                setLoading(false);
              }
            };
            fecthData();
          },
        []
    );

    useEffect(()=>{
        Aos.init({
            offset: 200,
            duration: 600,
            delay: 100,
        })
    })

    return (<>
        <div className="row">
            <div className="col-1" id="home">
                <div className="banner">
                    <h1>MY<br/>PORT<span>FOLIO</span></h1>
                    <div className="border"></div>
                    <div className="btn">
                        <Link
                            activeClass="active"
                            to="portfolio"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            See My Works
                        </Link>
                    </div>
                </div>
            </div>
            {/* <div className="col-2">
                <img src="../img/backgroundHeader.svg" alt="" />
            </div> */}
        </div>
        <div className="wave">
            <img src="../img/wave.png" alt=""/>
        </div>

        <div className="container" id="about">
            <div className="about">
                <div className="topik">
                    <p>let me introduce myself</p>
                    <h2>About Me</h2>
                </div>
                <div className="row">
                    <div className="col-2" data-aos="slide-right">
                        <img src="../img/fotoprofile.png" alt=""/>
                    </div>
                    <div className="col-1" data-aos="slide-left">
                        <p>Hello! I am Adithya Nuz Pratama. Thank you for visiting my website.
                            I use MERN Stack to develop my website. I will make a responsive website, easy to use,
                            and easy to reach both when accessed via a desktop or smartphone.
                            If you have specific criteria for building your website,
                            I am very open to building on your ideas and concepts for your website.
                        </p>
                        <a className="btnRead"
                            href="https://drive.google.com/drive/folders/157HSNEdKUz2JGVKKsClytfnpXu6ZVAsH?usp=sharing"
                            >See My CV
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className="container" id="portfolio">
            <div className="portfolio">
                <div className="topik">
                    <p>some of my recent works</p>
                    <h2>Projects</h2>
                </div>
                <div className="small-container">
                    <div className="row" style="display: flex;align-items: baseline;">
                        {loading? <LoadingBox></LoadingBox>
                        :
                        error?<MessageBox>{error}</MessageBox>
                        :<>
                        {portfolio.map((portfolio) => (
                            <div className="col-3" data-aos="slide-up">
                                <a href={portfolio.link}>
                                    <img src={portfolio.gambar} alt=""/>
                                </a>
                                <a href={portfolio.link}>
                                    <h2>{portfolio.nama}</h2>
                                </a>
                                <p>{portfolio.desc}</p>
                            </div>
                        ))}
                        {/* <div className="col-3">
                            <a href="https://virtual-lab-biology.herokuapp.com/">
                                <img src="../img/virtuallab.png" alt=""/>
                            </a>
                            <a href="https://tokopaedi.herokuapp.com/">
                                <h2>Virtual Biologi Lab</h2>
                            </a>
                            <p />Virtual laboratory is a computer-based media that can be used for students to conduct experiments and can increase
                            enthusiasm and motivate students. The use of a virtual laboratory can save time,
                            and learning is more interesting.
                        </div> */}
                        </>}
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <form onSubmit={sendEmail}>
                <div className="row">
                    <div className="col-2-simulasi">
                        <img src="../img/email.svg" alt=""/>
                    </div>
                    <div className="col-2-simulasi">
                        <div className="form-container" id="contact">
                            <h2>Contact Me</h2>
                            <label>Name</label>
                            <li>
                                <input type="text" placeholder="Name" name="name" />
                            </li>
                            <label>Email</label>
                            <li>
                                <input type="email" placeholder="Email Address" name="mail" />
                            </li>
                            <label>Subject</label>
                            <li>
                                <input type="text" placeholder="subject" name="subject" />
                            </li>
                            <label>Message</label>
                            <li>
                                <textarea type="text" id="" cols="30" rows="8" placeholder="Your Message" name="message" />
                            </li>
                            <li>
                                <input type="submit" value="Send Message" />
                            </li>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </>)
}
