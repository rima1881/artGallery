import styles from './Container.module.css'
import Header from "./header/Header";
import List from "./list/List";
import { useState , useEffect } from 'react';
import Info from './info/Info';
import Signup from './signup/Signup';

export default function Container(props){

    const [listData, setListData] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/api/posters')
            .then(Response => Response.json())
            .then(data => setListData(data))

            console.log('Request was sent')
    },[])

    let content;

    switch(props.state){
        case 0:
            content = <>
                <Header />
                <div className={styles.headerContainer}>
                    <p className={styles.header}> Our <nav className={styles.headerInner}>&nbsp;Posters!!! </nav></p>
                </div>
                <hr  className={styles.line}/>

                <div className={styles.container}>
                    <List data={listData} />
                </div>
            </>
            break;
        case 1:
            content= <>
                <Info />
            </>
            break;
        case 2:
            content = <>
                <Signup />
            </>
    }


    return(
        <>
            {content}
        </>
    )

}