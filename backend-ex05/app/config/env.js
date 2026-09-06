import "dotenv/config"

const env ={
    PORT : process.env.PORT,
    mongo_URI : process.env.MONGO_URI || 500
}

export default env