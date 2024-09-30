import {AppDataSource} from "../startup/data-source";

const dbConnectMysql = async () => {
    try{
        await AppDataSource.initialize();
        console.log("Connected to MySQL");
    }
    catch(err){
        console.log("error connectong ro mysql");
    }
}

export default dbConnectMysql;