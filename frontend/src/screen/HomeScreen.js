import React,{ useEffect, useState } from 'react'
import emailjs from 'emailjs-com'
import axios from 'axios';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
// import { Link } from 'react-router-dom';

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
          }, []);

    return (<>
        <div className="row">
            <div className="col-1" id="home">
                <div className="banner">
                    <h1>PORT<span>FOLIO</span></h1>
                    {/* <div className="btn">
                        <Link to="/">
                            See My Works
                        </Link>
                    </div> */}
                </div>
            </div>
        </div>
        <div className="wave">
            <img src="../img/wave.png" alt=""/>
        </div>

        <div className="container">
            <div className="topik" id="about">
                <p>Let me introduce myself</p>
                <h2>About Me</h2>
            </div>
            <div className="row">
                <div className="col-2">
                    <img src="../img/pasfoto.png" alt=""/>
                </div>
                <div className="col-2">
                    <p>Hello! I am Adit. I have been depveloping website. I'm Frontend Enginer.
                        Technologies i use is MERN Stack. I create responsive website that  are displayed
                        on all device desktop and smartphones. Before i start developing website. i will
                        discuss all the details of your Idea.
                    </p>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="topik" id="portfolio">
                <p>some of my recent works</p>
                <h2>Projects</h2>
            </div>
            <div className="small-container">
                <div className="row">
                    {loading? <LoadingBox></LoadingBox>
                    :
                    error?<MessageBox>{error}</MessageBox>
                    :<>
                    {portfolio.map((portfolio) => (
                        <div className="col-3">
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

            <form className="form" onSubmit={sendEmail}>
                <div className="row">
                    {/* <div className="col-2">
                        <img src="../img/handshake.png" />
                    </div> */}
                    <div className="col-2">
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
                                <input type="submit" className="btn" value="Send Message" />  
                            </li>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </>)
}
