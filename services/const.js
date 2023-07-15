require('dotenv');

module.exports = dbPass = () => {
    return process.env.DB_PASS;
}