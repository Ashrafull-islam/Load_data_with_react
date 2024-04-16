export default function Friend({friend}){
    console.log(friend);
    return (
        <div>
            <h2>Name: {friend.userId}</h2>
            <p>Id {friend.title}:</p>
        </div>
    )
}