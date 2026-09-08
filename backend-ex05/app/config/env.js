import "dotenv/config"

const env = {
  PORT: process.env.PORT,
  mongo_URI: process.env.MONGO_URI || 500,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
  JWT_ENV: process.env.JWT_ENV,
  JWT_SECRET: process.env.JWT_SECRET,
};

console.log(env.PORT,env.JWT_ENV,env.JWT_SECRET,env.JWT_EXPIRES_IN)

export default env