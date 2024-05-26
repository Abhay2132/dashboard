import Image from "next/image"
import styles from "./db_body.module.css"

function Row({ key = "", img, icon = "", rank, name, designation, hrs, changes }: any) {
    const [color1, color2] = generateRandomColors();

    return (
        <tr key={key} className={`${styles.row}`}>
            <td className={styles.row_icon}>
                {icon ? <Image className={styles.icon_img} height={30} width={30} src={icon} alt="Logo" /> : ""}
            </td>
            <td>{rank}</td>
            <td className={`${styles.row_exp} ${styles.row_name}`}>
                <div>
                    {/* <Image alt="Profile" src={img} width={25} height={25} style={{ borderRadius: "50%" }} /> &nbsp; */}
                    <div className={styles.icon_wrapper} style={{background: `linear-gradient(to right, ${color1}, ${color2})`}}></div>
                    <span>
                        {name}
                    </span>
                </div>

            </td>
            <td className={styles.row_exp}>{designation}</td>
            <td>{hrs}</td>
            <td className={styles.row_changes}>
                <div>
                    <div className={`${styles.tri_wrapper} ${changes ? "" : styles.tri_wrapper_inverted}`}>

                        <div className={`${styles.triangle} ${changes ? styles.triangle_green : styles.triangle_red}`}></div>
                    </div>
                    <span>1.5 hrs</span>
                </div>
            </td>
        </tr>
    )
}

export default function DB_Body(props: any) {
    // const {tableRows} = props;
    const tableRows: any = props.tableRows.map((item: any, i: number) => { item['rank'] = i + 1; return item });
    const icons = ['1st.png', '2nd.png', '3rd.png']
    icons.forEach((icon, i) => {
        if (tableRows.length > i) {
            tableRows[i]['icon'] = `/icons/_${icon}`;
        }
    })


    return (
        <div className={styles.db_body}>
            <div className={styles.table_wrapper}>

                <table className={styles.db_table} border={0} cellSpacing="0" cellPadding="0">

                    <thead className={`${styles.table_header}`}>
                        <tr className={`${styles.row}`}>
                            <th className={styles.row_icon}></th>
                            <th>Rank</th>
                            <th className={styles.row_exp}>Name</th>
                            <th className={styles.row_exp}>Designation</th>
                            <th>Hours Worked</th>
                            <th>Changes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableRows.map((d: any, i: number) => Row({ key: i, ...d }))}
                        {/* {tableRows.map((d:any, i:number) => (<Row key={i+1} {...d} />))} */}
                    </tbody>

                </table>
            </div>

            <div className={styles.db_emp}>
                <div className={styles.card}>
                    {/* <div className={styles.card_pic}><Image src={`/imgs/rakesh.png`} layout="fill" objectFit="contain"  alt={`Employee of the Month`} /></div> */}
                    <div className={styles.card_pic}>
                        <Image src={`${tableRows[0]['img']}`} height={169} width={209} alt="Employ of the Month" />
                    </div>
                    <div className={styles.card_title}>Employee of the Month</div>
                    <div className={styles.card_name}>{tableRows[0]['name']}</div>
                    <div className={styles.card_designation}>{tableRows[0]['designation']}</div>
                    <div className={styles.card_bg}>
                        <Image src={`/imgs/emp_of_month.jpg`} alt={`card_bg`} width={222} height={148} />
                    </div>
                </div>
            </div>
        </div>
    )

}

function generateRandomColors() {
    const color1 = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    const color2 = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    return [color1, color2];
}