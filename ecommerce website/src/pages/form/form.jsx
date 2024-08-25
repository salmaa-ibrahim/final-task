import { useState } from 'react'
import './form.css'

function Form() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    function onHandelSubmit(event) {
        event.preventDefault();
        console.log(formData)
    }

    function onHandelChange(event) {
        var value = event.target.value;
        const key = event.target.name;

        setFormData({
            ...formData,
            [key]: value
        })

    }

    return (
        <form onSubmit={onHandelSubmit}>
            <div className="formItem">
                <label htmlFor="name">Your Name</label>
                <input
                    name="name"
                    id="name"
                    value={formData.nameame}
                    onChange={onHandelChange}
                    required
                    placeholder='Abc' />
            </div>

            <div className="formItem">
                <label htmlFor="email">Email Address</label>
                <input
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={onHandelChange}
                    required
                    placeholder='Abc@def.com' />
            </div>

            <div className="formItem">
                <label htmlFor="subject">Subject</label>
                <input
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={onHandelChange}
                    placeholder='This is an optional' />
            </div>

            <div className="formItem">
                <label>Message</label>
                <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={onHandelChange}
                />
            </div>


            <div className="btn">
                <button
                    className='submitBtn'
                >Submit</button>
            </div>

        </form>
    )
}

export default Form
