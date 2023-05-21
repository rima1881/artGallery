import styles from './Container.module.css'
import Header from "./header/Header";
import List from "./list/List";
import { useState , useEffect } from 'react';

export default function Container(){

    const [listData, setListData] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/api/posters')
            .then(Response => Response.json())
            .then(data => setListData(data))

            console.log('Request was sent')
    },[])


    return(
        <>

            <Header />

            <div className={styles.headerContainer}>
                <p className={styles.header}> Our <nav className={styles.headerInner}>&nbsp;Posters!!! </nav></p>
            </div>

            <hr  className={styles.line}/>

            <div className={styles.container}>
                <List data={listData} />
            </div>
        </>
    )

}