import "dotenv/config.js"

const env ={
    PORT:process.env.PORT || 5000,
MONGO_URI:process.env.MONGO_URI,
JWT_SECRET:process.env.JWT_SECRET,
JWT_ENV:process.env.JWT_ENV,
JWT_EXPIRES_IN:process.env.JWT_EXPIRES_IN
}

export default env