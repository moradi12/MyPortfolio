import { useState } from "react";
import Swal from "sweetalert2";
import "../../ContactMe/ConactMe";
const ContactForm = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "55782fea-0503-4e2e-9261-dcd7e97639ad");
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            const data = await response.json();

            if (data.success) {
                setResult("Form Submitted Successfully");
                event.target.reset();
                Swal.fire({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success"
                });
            } else {
                console.log("Error", data);
                setResult(data.message);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: data.message
                });
            }
        } catch (error) {
            console.error("Error submitting form", error);
            setResult("There was an error submitting the form. Please try again.");
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: "There was an error submitting the form. Please try again."
            });
        }
    };

    return (
        <div className="contact-form-content">
            <form onSubmit={onSubmit}>
                <div className="name-container">
                    <input type="text" name="firstname" placeholder="First Name" required />
                    <input type="text" name="lastname" placeholder="Last Name" required />
                </div>
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" rows="4" placeholder="Your Message" required></textarea>
                <button type="submit">Send</button>
            </form>
            <span>{result}</span>
        </div>
    );
};

export default ContactForm;
