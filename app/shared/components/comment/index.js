export default function Comment() {
    return (
        <div style={{
            height: 200,
            width: 500,
            backgroundColor: "#777777ff",
            margin: 10,
            padding: 20,
        }}>
        <div type="user" style={{
            color: "#000000",
            display:"flex",
        }}>@username</div><br></br>
        <div type="comment" style={{
            color: "#000000",
            display: "flex",
        }}>comment 1 lorem ipsum yadi yadi so ______________________</div><br></br>
        <div type="date" style={{
            color: "#000000",
            display: "flex",
            justifyContent: "right"
        }}>dd/mm/yyyy - 00:00:00</div><br></br>
        <button style={{
            color: "#000000",
            backgroundColor: "#00d270ff",
            borderRadius: 40,
            fontSize: 16,
            height: 50,
            width: 150,
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            marginLeft: 300,
        }}>Reply</button>
        </div>
    )
}