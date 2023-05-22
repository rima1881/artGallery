import styles from './Signup.module.css'
import { useState } from 'react'

export default function Signup(){

    const [ formData , setFormData] = useState({
        'username' : '',
        'email' : '',
        'password' : '',
        'passwordConf' : '',
        'address1' : '',
        'address2' : '',
        'post' : ''
    })


    return(
        <div className={styles.container}>
            <form className={styles.form}>
                <label>Username :</label>
                <input type='text' name='username' />
                <label>Email :</label>
                <input type='email' name='email' />
                <label>Password :</label>
                <input type='password' name='password' />
                <label>Password Confirmation :</label>
                <input type='password' name='passwordConf' />
                <label>Address 1:</label>
                <input type='text' name='address1' />
                <label>Address 2:</label>
                <input type='text' name='address2' />
                <label>Postal code :</label>
                <input type='text' name='post' />
                <button>
                    <a>
                        Sign up
                    </a>
                </button>
            </form>
        </div>
    )
}