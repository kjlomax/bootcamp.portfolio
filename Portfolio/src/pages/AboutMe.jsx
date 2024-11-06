import Footer from "../components/Footer";
import picture from '../assets/IMG_4167 2.png'

const styles = {
    img: {
        width: '15%',
        height: '15%',
        alignItems: 'center',
        margin: 'auto'
    }
};

const myPic = picture;
export default function AboutMe() {
    return (
        <>
        <h2>About Me</h2>
        <img src={myPic} style={styles.img}></img>
        <p>I am new to coding. I graduated from Hilliard Bradley High School in 2014. After that I got into University, but ended up leaving because of my health. I also attempted community college, but was physically unable. I recently underwent spinal surgery and can think again! </p>
        <Footer/>
        </>
    )
}