
class AppConfig {

    public port = 3001; 

    public mongoDbConnectionString = "mongodb://127.0.0.1:27017/Eshop"; 

}

const appConfig = new AppConfig(); 
export default appConfig; 
