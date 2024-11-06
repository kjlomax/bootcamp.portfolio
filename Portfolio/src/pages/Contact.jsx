import Footer from "../components/Footer"
export default function Contact() {
    return (
        <>
        <h1>Contact</h1>
        <form>
            <label for='name'>Name:</label>
            <input type='text' id='name' name='name'></input>
            <label for='email'>Email:</label>
            <input type='email' id='email' name='email'></input>
            <label for='message'>Message:</label>
            <textarea id='message' name='message'></textarea>
        </form>
        <Footer/>
        </>
    )
};