import { useNavigate } from "react-router-dom"
import background from "./poker.png";
import "./style.css";
import tip from "./tip2.png";

const ComponentA = () => {
    const navigate = useNavigate()
    return (
        <div style={styles.back}>
            <div style={styles.box}>
                <p style={styles.title}>Black Jack</p>
                <button onClick={() => navigate('/je')} style={styles.button}>Log In</button>
                <p></p>
                
            </div>
            <a style={styles.test}
                className="Bj"
                href="./blackjackjack/index.html"
                target="_blank"
                rel="noopener noreferrer"
                >
                ゲームテストページ
                </a>
        </div>
    );
}

var styles = {
    back: {
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        width:'1300px',
        height: '766px',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        position: 'relative',
    },
    box: {
        width: '100%',
        height: '30%',
        background: 'black',
        borderTop: 'solid 1px #AAAAAA',
        borderLeft: 'solid 1px #AAAAAA',
        borderBottom: 'solid 1px #AAAAAA',
        borderRight: 'solid 1px #AAAAAA',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        opacity: '0.7'
    },
    title: {
        color: 'white',
        fontFamily: '"Amatic SC", cursive',
        fontSize: '100px',
        margin: '0',
        textWeight: '200'
    },
    button: {
        height: '90px',
        width: '90px',
        borderRadius: '50%',
        backgroundImage: `url(${tip})`,
        backgroundSize: '100px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        border: 'solid 1px black',
        fontSize: '20px',
        fontFamily: '"Amatic SC", cursive',
    },
    test: {
        position: 'absolute',
        top: '95%',
        left: '85%',
        transform: 'translate(-50%, -50%)',
    }

}
export default ComponentA
