import React from 'react'
import { useState } from 'react';




function Booking() {


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'consultation',
        date: '',
        notes: ''
    });



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Booking details:', formData);
    };


    window.scrollTo(0, 0)

    return (

        <>

            <section className='p-5'>

                <form onSubmit={handleSubmit} className="booking-form">

                    <h2 className="form-heading fw-bold">Service Booking</h2>

                    <label className="form-label">Full Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="Enter your name"
                    />

                    <label className="form-label">Phone:</label>
                    <input
                        type="tel"
                        name="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="Enter your Phone Number"
                    />

                    <label className="form-label">Registration Number:</label>
                    <input
                        type="text"
                        name="Registration Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="form-input"
                        placeholder="Enter your Registration Number"
                    />

                    <label className="form-label">Service Type:</label>
                    <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="form-select"
                    >
                        <option value="consultation">Consultation</option>
                        <option value="installation">Installation</option>
                        <option value="maintenance">Maintenance</option>
                    </select>

                    <label className="form-label">Preferred Date:</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />

                    <label className="form-label">Additional Notes:</label>
                    <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        className="form-textarea"
                        placeholder="Enter any additional details"
                    ></textarea>

                    <button type="submit" className="form-button">Book Now</button>
                </form>


            </section>

        </>


    )


}

export default Booking