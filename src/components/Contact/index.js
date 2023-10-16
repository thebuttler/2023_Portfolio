import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { MapContainer, Popup, TileLayer, Marker } from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const position = [13.66492, -89.25319]

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = async (e) => {
        e.preventDefault()

        // Email service_id, template_id, public_key
        const service_id = 'service_jp2j8uo'; // UPDATE TO ENVIROMENT VARIABLE
        const template_id = 'template_4tgpix5'; // UPDATE TO ENVIROMENT VARIABLE
        const public_key = 'MyYA23N1TGZgNrZJo'; // UPDATE TO ENVIROMENT VARIABLE

        // Object with emailjs data
        const data = {
            service_id: service_id,
            template_id: template_id,
            user_id: public_key,
            template_params: {
                from_name: name,
                from_email: email,
                to_name: 'Ron',
                message: message,
            }
        };

        // Send email using emailjs
        try {
            const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
            console.log(res.data);
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I am interested in fulltime opportunities and also freelance work.
                    I like ambitious projects that allow me to learn more and sharpen my Skills as a software engineer.<br/>
                    <br/>
                    Don't hesitate to contact me if you have any questions or if you just want to say hi.
                </p>
                <div className="contact-form">
                    <form onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input 
                                    placeholder="Name" 
                                    type="text" 
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required 
                                />
                            </li>
                            <li className="half">
                                <input
                                    placeholder="Email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </li>
                            <li>
                                <input
                                    placeholder="Subject"
                                    type="text"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    required
                                />
                            </li>
                            <li>
                                <textarea
                                    placeholder="Message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                ></textarea>
                            </li>
                            <li>
                                <input type="submit" value="SEND" className='flat-button'/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='info-map'>
                Ronald Arevalo
                <br/>
                El Salvador
                <br/>
                Antiguo Cuscatlan, La Libertad<br/>
                <br/>
                <span>netoarevalo@gmail.com</span>
            </div>
            <div className='map-wrap'>
                <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>Aproximate Location!!</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}


export default Contact