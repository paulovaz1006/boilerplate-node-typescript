import swaggerDocs from "./configs/swagger";
import server from "./server";

const port = process.env.PORT || 3000;
 
server.listen(port, () => {
    swaggerDocs(server, Number(port))
    console.log(`Run server api-gateway in http://localhost:${port}`)    
})
