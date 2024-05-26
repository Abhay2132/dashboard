import DB_Header from "./ui/db_header/db_header";
import DB_Body
    from "./ui/db_body/db_body";
import styles from "./page.module.css";

// data to be fetch from database
const getData = Promise.resolve([
    { icon: '', img: "/imgs/persons/rakesh.png", name: "Rakesh Sharma", designation: "UI/UX Designer", hrs: "7(38)", changes: true },
    { icon: '', img: "/imgs/persons/rakesh.png", name: "Ankit Thakur", designation: "HR Recruiter", hrs: "7(34)", changes: false },
    { icon: '', img: "/imgs/persons/rakesh.png", name: "Harsh Yadav", designation: "Product Manager", hrs: "7(41)", changes: true },
    { icon: '', img: "/imgs/persons/rakesh.png", name: "Harsha Shivahare", designation: "Designer", hrs: "7(42)", changes: true },
    { icon: '', img: "/imgs/persons/rakesh.png", name: "Vanhi Rai", designation: "UI/UX Designer", hrs: "7(38)", changes: false },
    { icon: '', img: "/imgs/persons/rakesh.png", name: "Bhanu Sharma", designation: "HR Recruiter", hrs: "7(34)", changes: false },
    { icon: '', img: "/imgs/persons/rakesh.png", name: "Sunil Yadav", designation: "Product Manager", hrs: "7(41)", changes: true },
    { icon: '', img: "/imgs/persons/rakesh.png", name: "Akash Roy", designation: "Designer", hrs: "7(42)", changes: false },
    { icon: '', img: "/imgs/persons/rakesh.png", name: "Rohit Soni", designation: "Designer", hrs: "7(42)", changes: false },
    { icon: '', img: "/imgs/persons/rakesh.png", name: "Suraj Chauhan", designation: "Designer", hrs: "7(42)", changes: false },
])

export default async function Page() {
    let data = await getData;
    return (
        <div id={`dashboard`} className={styles.dashboard_box}>
            <DB_Header />
            <DB_Body tableRows={data} />
        </div>
    )
}

