require('dotenv').config()
const env = process.env.NODE_ENV // 'dev' or 'test'

const dev = {
    app: {
        port: 3000
    },
    db: {
        host: 'localhost',
        port: 27017,
        name: 'architect-portfolio'
    }
};

const prod = {
    app: {
        port: 3000 /* figure out from Now.sh */
    },
    db: {
        host: process.env.DB_PROD_HOST,
        port: 27017,
        username: process.env.DB_PROD_USER,
        password: process.env.DB_PROD_PASS,
        name: process.env.DB_PROD_NAME
    }
}

const config = {
    dev,
    prod
};

module.exports = config[env];