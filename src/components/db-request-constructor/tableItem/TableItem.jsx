import styles from './TableItem.module.css'
import {useState, useEffect} from 'react'
import DBRequestService from "../../../http/DBRequestService.js";
const TableItem = ({tables,setChosenTables, index, elem}) => {

    const [table, setTable] = useState(() => tables.length ? tables[0] : '')
    const [columns, setColumns] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const data = await DBRequestService.getColumns(table)
            setColumns(data)
            elem.columns = []
            elem.table = table
        }
        fetchData();
    }, [table])


    return <div className={styles.checkBox}>
    <div className={styles.body}>
        <select value={table}
                onChange={e => {
                    elem.table = e.target.value
                    setTable(e.target.value)
                }}
                className={styles.select}>
            {
                tables.length ? tables.map(elem => (
                <option value={elem} key={elem}>{elem}</option>
                )) : <option>No data</option>
            }
        </select>
        <button className={styles.delete} onClick={e => setChosenTables(prev => prev.filter( v => v.id != index))}>x</button>
    </div>
        {columns.length ? columns.map(e => (
            <div key={`div${e}`}>
                <input key={`${table}-${e}`} type='checkbox' value={e} onChange={event => {
                    if (event.target.checked) elem.columns = [...elem.columns, event.target.value]
                    else elem.columns = elem.columns.filter(v => v != event.target.value)
                }
                }/>
                <label key={`label${e}`}>{e}</label>
            </div>
        )) : <div/> }
    </div>
}
export default TableItem;