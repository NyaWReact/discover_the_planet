import styles from './LocationList.module.scss'

const LocationList = ({setLocationValue, setIsLocation}) => {

  const changeLocation = (country) => {
    setIsLocation(false)
    setLocationValue(country)
  }

  return (
    <div className={styles.list}>
      <p onClick={() => {changeLocation('Japan')}}>Japan</p>
      <p onClick={() => {changeLocation('China')}}>China</p>
      <p onClick={() => {changeLocation('Japan')}}>Japan</p>
      <p onClick={() => {changeLocation('China')}}>China</p>

    </div>
  )
}
export { LocationList }