import './Contact.css'
import pic from './profile_pic.jpeg'
import React,{useState , useEffect} from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import * as emailjs from 'emailjs-com';
import { Alert } from '@material-ui/lab';



function Contact() {
    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const [alert,setAlert] = useState('loading')
    const[name,setName] = useState('');
    const[email,setEmail] = useState('');
    const[subject,setSubject] = useState('');
    const[msg,setMsg] = useState('');

    useEffect(() => {
        window.setTimeout(()=>{
            setAlert('loading')
        },7500)
        console.log('ndnd')
        return () => {
            
        }
    },[alert])

    const sendMail=(e)=>{
        e.preventDefault();
        console.log('sendmail')
        let templateParams = {
            from_name: email,
            to_name: 'sahil16082@iiitd.ac.in',
            subject: 'subject',
            message_html: subject,
        }
        if(email.match(mailformat)){
            emailjs.send(
                'service_ac9oom9',
                'template_0vo7hyr',
                 templateParams,
                'user_cPqHzX7PRBpXzmfGQxiCG'
            ).then(function(response){
                setAlert('true')
                setMsg('Success!');
                setName('')
                setEmail('')
                setSubject('')
                console.log('Success!',response.status,response.text)
            },function(error){
                setAlert('false')
                console.log(error);
                setMsg('Failed. Directly mail me or connect on social media');
                setName('')
                setEmail('')
                setSubject('')  
            })
        }
        else{
            setAlert('false')
            setMsg('Enter valid Email');
            
        }
        
        
    };

   

    

    return (
        <div>
           
            <div className="contact_header">
            <div className="contact_cover" ></div>
              <img className="contact_avatar" src={pic} alt="avatar" />
              <h1 className="contact_fullname">Sahil Angral</h1>
              <h2 className="contact_jobtitle">Software Engineer</h2>
          </div>
          <h2 className="head" style={{fontSize:'18px'}}>Contact </h2>
          <div className="contact_main">
              
            <div>
                <LocationOnIcon />
                <p>Kachi Chawni, Jammu, Jammu and Kashmir</p>
            </div>
            <div>
                <PhoneIcon/>
                <p>+91-7006759599</p>    
            </div>
            <div>
                <EmailIcon />
                <p>sahil16082@iiitd.ac.in</p>
            </div>
            <div className="contact_form">
                
                <form onSubmit={sendMail}>
                    <h2 style={{fontSize:'14px', marginBottom:'4px'}}>Ping me. </h2>
                    <input type="text" value={name} placeholder="Name" onChange = {(e) => setName(e.target.value) }/>
                    <input style={{marginLeft:'4px'}} type="text" placeholder="Email ID" value={email} onChange = {(e) => setEmail(e.target.value) }/>
                    <textarea type="text" placeholder="Subject" value={subject} onChange = {(e) => setSubject(e.target.value) }/>
                    <button>Send Mail</button>
                     
                    {alert==='true' ? <Alert severity="success" >{msg}</Alert>
                            : alert==='false' ? <Alert style={{marginLeft:'5px'}} severity="error">{msg}</Alert>
                                            :<h1></h1>}    
                    
                </form>

            </div>
            
          </div>
        </div>
    )
}

export default Contact
