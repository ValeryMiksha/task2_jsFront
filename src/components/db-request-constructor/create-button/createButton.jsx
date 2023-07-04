import styles from './../add-button/addButton.module.css'
import DBRequestService from "../../../http/DBRequestService.js";

const CreateButton = ({data, setData}) => {
    const sendData = (e) => {
        const fetchData = async () => {
            let res = []
            res = await DBRequestService.getResTable(data)
            setData(res)
            console.log(res)
        }
        fetchData()
    }

    return <button className={styles.btn} onClick={sendData}>
        Create
    </button>
}
export default CreateButton;