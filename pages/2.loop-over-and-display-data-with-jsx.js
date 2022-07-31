
import users from "../data.json"
export default function TestName() {
    return (
        <>
            <div className="page-deets">
                <h2>Loop Over and Display Data with JSX</h2>
            </div>

            <div className="users">
                {users.map((user, i) => (
                    <div key={i}>
                        <h3>{user.title}</h3>
                        <p>{user.name}</p>
                        <p>{user.date}</p>
                    </div>
                ))}
            </div>
        </>
    )
}