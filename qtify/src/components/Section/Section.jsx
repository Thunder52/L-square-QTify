import styles from './Section.module.css'
import Button from '../Button/Button'
import { useState,useEffect } from 'react'
import Cards from '../Card/Card'
import axios from 'axios'

const Section = () => {
    const [show, setShow] = useState(false);
    const [data,setData]=useState([]);

    const fetchData=async ()=>{
        try {
            const res=await axios.get('https://qtify-backend-labs.crio.do/albums/top');
            setData(res.data);
            console.log(res.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <p>Top Albums</p>
            <Button onClick={() => setShow(!show)}>{show ? 'Collapse' : 'Show All'}</Button>
        </div>
            <div className={styles.cards}>
                {data.map((card)=>(
                    <Cards key={card.id} title={card.title} imageUrl={card.image} follows={card.follows} />
                ))}
            </div>
        
    </div>
  )
}

export default Section;