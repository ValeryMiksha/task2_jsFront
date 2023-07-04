import styles from './addButton.module.css'
const AddButton = ({setChosenTables}) => {
    return <button className={styles.btn} onClick={(e) => setChosenTables(prev => {
        const id = () => prev.length ? prev[prev.length - 1].id + 1 : 0;
        return [...prev, {
            id: id()
        }]
    })}>
        +
    </button>
}

export default AddButton