import './Contact.css';

const ContactMe = () =>
{
    return(
        <div className="contact">
            <h1>contact.</h1>
            <h4>check out all the things....</h4>
            <ul>
                <li><a href="https://github.com/moagermo" class="github">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/moager/" class="linkedin">LinkedIn</a></li>                <li><a href="mailto:moager@att.net" class="email">Email</a></li>
                <li><a href="tel:6149699988" class="phone">Call</a></li>


            </ul>
        </div>
    )
}

export default ContactMe;