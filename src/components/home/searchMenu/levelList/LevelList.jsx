import styles from './LevelList.module.scss'

const LevelList = ({setLevelValue, setIsLevel}) => {

  const changeLevel = (country) => {
    setIsLevel(false)
    setLevelValue(country)
  }

  return (
    <div className={styles.list}>
      <p onClick={() => {changeLevel('Hard')}}>Hard</p>
      <p onClick={() => {changeLevel('Middle')}}>Middle</p>
      <p onClick={() => {changeLevel('Easy')}}>Easy</p>


    </div>
  )
}
export { LevelList }