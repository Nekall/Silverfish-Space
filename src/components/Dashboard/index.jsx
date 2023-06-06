// Styles
import styles from "./styles.module.scss"; 

const Dashboard = () => {
    return (
        <div className={styles.__dashboard}>
            <div className={styles.__infos_board}>
                <p>Silverfish Infesting Space</p>
                <p>Mission 1·20</p>
            </div>
        </div>
    )
}

export default Dashboard