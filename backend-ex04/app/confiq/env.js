// Why shouldn't we do this everywhere?

// mongoose.connect(process.env.MONGO_URI);

// Imagine 10 different files need configuration.

// You'd end up accessing environment variables everywhere.

// Instead, we create a single configuration boundary.


//Note - "Configuration is an external concern, so we create 
// one boundary between external configuration and application code."

import "dotenv/config"

const env={
    PORT:process.env.PORT || 5000,
    MONGO_URI:process.env.MONGO_URI
}

export default env;