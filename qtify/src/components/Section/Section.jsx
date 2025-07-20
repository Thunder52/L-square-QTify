import styles from './Section.module.css'
import Button from '../Button/Button'
import { useState} from 'react'
import Cards from '../Card/Card'
import Carousel from '../Corousel/Corousel'

const Section = ({id,data,title}) => {
    const [show, setShow] = useState(false);
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <p>{title}</p>
            <Button onClick={() => setShow(!show)}>{show ? 'Collapse' : 'Show All'}</Button>
        </div>
        {show ? (
          <Carousel
            id={id}
            items={data}
            renderItem={(card) => (
              <Cards key={card.id} title={card.title} imageUrl={card.image} follows={card.follows} />
            )}
          />
        ) : (
          <div className={styles.cards}>
            {data?.map((card) => (
              <Cards key={card.id} title={card.title} imageUrl={card.image} follows={card.follows} />
            ))}
          </div>
        )}

        </div>
  )
}

export default Section;