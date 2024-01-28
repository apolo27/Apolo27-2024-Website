import './ContactUs.css'
import Form from '../../components/Form'
import {Container, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

const ContactUs = (props) =>{
    const navigate = useNavigate();
    let t = props.t
    return(
        <Container style={{textAlign: 'center', marginBottom: 125}}>
            <Button style={{marginTop: '25px', width: '350px'}} onClick={() => navigate(-1)}>{t('Go-Back')}</Button>
            <Form t={t}/>
        </Container>
    )
}

export default ContactUs