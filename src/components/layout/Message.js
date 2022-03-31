import styles from './Message.module.css'
import { useState, useEffect } from 'react'

export default function Message({ type, msg }) {

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (!msg) {
            setVisible(false)
            return
        }

        setVisible(true)

        // inicia time
        const timer = setTimeout(() => {
            setVisible(false)
        }, 3000)

        //  finaliza time
        return () => clearTimeout(timer)
    },[msg])

    return (
        <>
            {visible && (
                <div className={`${styles.message} ${styles[type]}`}>
                    {msg}
                </div>
            )}
        </>
    )
}