import mysql from 'mysql2';

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'Patito24',
  database: 'videojuegos',
  port: 3306
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
  } else {
    console.log('Conexión a la base de datos exitosa');
  }
});

export default db;  // Usando export default en lugar de module.exports
