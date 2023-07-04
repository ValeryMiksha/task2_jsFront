import React, {useState, useEffect} from 'react'
import DBRequestService from "../../http/DBRequestService.js";
import AddButton from "./add-button/addButton.jsx";
import styles from './DBRequestConstructor.module.css'
import TableItem from "./tableItem/TableItem.jsx";
import CreateButton from "./create-button/createButton.jsx";
import Table from "./table/Table.jsx";

const DBRequestConstructor = () => {
    const [tables, setTables] = useState([])
    const [chosenTables, setChosenTables] = useState([])
    const [requestedData, setRequestedData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const data = await DBRequestService.getTables()
            setTables(data)
        }
        fetchData();
    }, [])
    return <div>
        <div className={styles.body}>
            <div className={styles.title}>Конструктор отчётов
                <AddButton setChosenTables={setChosenTables}/>
                <CreateButton data={chosenTables} setData={setRequestedData}/>
            </div>
            <div className={styles.content}>
                {chosenTables.length?chosenTables.map(elem => (
                    <TableItem key={elem.id} tables={tables} setChosenTables={setChosenTables} index={elem.id} elem={elem}/>
                )):<div/>}
            </div>
        </div>
        <div className={styles.tableBody}>
            {requestedData.length ? <Table requestedData={requestedData}/> : ''}
        </div>
    </div>
}

export default DBRequestConstructor;

