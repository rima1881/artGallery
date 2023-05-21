 import styles from './Card.module.css'


 export default function Card(props){

    console.log(props.data.pic);
    const cardStyle = {
        backgroundImage : `url(/artists/abtin/${props.data.pic})`
    }


    return(
        <div className={styles.container}>
            <div style={cardStyle} className={styles.img}>

            </div>

            <a className={styles.btn} href="#">
                <nav className={styles.btnText}>See more</nav>
            </a>

        </div>

    )
 }