export default function Image(){

    return (
    <div>
        <div style={{
        display:"flex",
        flexDirection:"column",
        backgroundColor:"#dfdfdf",
        width:340,
        height:420,
        margin:20,
        padding:40
        }}>
        <div style={{
            backgroundColor:"#9bb2de",
            height:180,
            width:250,
            alignItems:"center",
            marginBottom:30
        }}></div>
        <div>
            <div style={{
                backgroundColor: "#9ad7b0",
                padding:20,
                width:130,
                height:50,
                borderRadius:8,
                marginBottom:20,
                display:"flex",
                alignItems:"center",
                justifyContent:"center"
            }}>
                <div style={{
                    fontSize:15,
                    color:"#000000",
                    fontWeight:"bold",
                }}>DW</div>
            </div>
        </div>
        <div>
            <div style={{
                marginBottom:15
            }}>@username</div>
            <div>bio...............</div>
        </div>
        </div>

   </div>
    )
    
}