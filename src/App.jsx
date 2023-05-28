import styles from './App.module.css';
import poweredImage from './assets/powered.png';
import {useState} from 'react';
import { levels, calculateIMC } from './helpers/imc';
import { GridItem } from './components/GridItem/GridItem';

const App = () => {
  const [heightField, setHeightField] = useState(0);
  const [weightField, setWeightField] = useState(0);
  const [toShow, setToShow] = useState(null);

  const handleCalculateButton = () => {
    if(heightField && weightField){
      setToShow(calculateIMC(heightField, weightField));
    }else{
      alert('Os campos de peso e altura devem ser preenchidos');
    }
  }

  return(
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt='' width='150px' />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC</h1>
          <p>
            IMC é a sigla para Índice de Massa Corpórea, parâmetro 
            adotado pela Organização Mundial de Saúde para calcular 
            o peso ideal de cada pessoa.
          </p>
          <input 
            type='number'
            placeholder='Digite a sua altura. Ex: 1.5 (em metros)'
            value={heightField > 0 ? heightField : ''}
            onChange={(e) => setHeightField(parseFloat(e.target.value))}
          />
          <input 
            type='number'
            placeholder='Digite o seu peso. Ex: 75.3 (em kg)'
            value={weightField > 0 ? weightField : ''}
            onChange={(e) => {setWeightField(parseFloat(e.target.value))}}
          />

          <button onClick={handleCalculateButton}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          {!toShow &&
            <div className={styles.grid}>
              {levels.map((item, key)=> (
                <GridItem key={key} item={item} />
              ))}
            </div>
          }
          {toShow &&
            <div className={styles.rightBig}>
              <div className={styles.rightArrow}></div>
              <GridItem item={toShow} />
            </div>
          }          
        </div>
      </div>
    </div>
  )
}

export default App;