import styles from "../DBRequestConstructor.module.css";
import exceljs from 'exceljs'
import {saveAs} from 'file-saver'
const Table = ({requestedData}) => {

    const ExportToExcel = () => {
        const table = document.getElementById('table')
        const workbook = new exceljs.Workbook()
        const worksheet = workbook.addWorksheet('data')

        worksheet.addRow([...table.getElementsByTagName('th')].map(e => e.innerText))

        const rows = [...table.getElementsByTagName('tr')].slice(1)
        rows.map(row => {worksheet.addRow([...row.getElementsByTagName('td')].map(e => e.innerText))})


        workbook.xlsx.writeBuffer().then(buffer => {
            const blob = new Blob([buffer], {
                type: 'application/vnd.opensmlformats-officedocument.spreadsheetml.sheet'
            })
            saveAs(blob, 'text.xlsx')
        })
    }
    return<div className={styles.tableBody}>
        <div className={styles.scroll}>
            <table id={'table'} className={styles.table}>
                <tbody>
                <tr>
                    {Object.keys(requestedData[0]).map(key => <th className={styles.th} key={key}>{key}</th>)}
                </tr>
                {requestedData.map(elem => (
                    <tr key={`${requestedData.indexOf(elem)}`}>
                        {Object.values(elem).map((field, i) => <td className={styles.td} key={i}>{field}</td>)}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        <button className={styles.btn} onClick={ExportToExcel}>Save</button>
    </div>
}

export default Table;