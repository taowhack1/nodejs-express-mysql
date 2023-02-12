module.exports = {
  HOST: "192.168.9.211",
  USER: "sa",
  PASSWORD: "sa@dmin",
  DB: "master",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
}