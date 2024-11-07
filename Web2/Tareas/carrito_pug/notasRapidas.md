# index.js
// Conectar a la base de datos MariaDB
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Patito24',
    database: 'clientes_db'
});

db.connect(err => {
    if (err) {
        console.error('Error conectando a la BD:', err);
        return;
    }
    console.log('Conectado a la BD');
});

// Ruta para manejar la recepción de datos del formulario
app.post('/registrar-cliente', (req, res) => {
    const { nombre, apellido_paterno, apellido_materno, correo, telefono } = req.body;

    const query = `INSERT INTO clientes (nombre, apellido_paterno, apellido_materno, correo, telefono) VALUES (?, ?, ?, ?, ?)`;

    db.query(query, [nombre, apellido_paterno, apellido_materno, correo, telefono], (err, result) => {
        if (err) {
            console.error('Error al guardar en la BD:', err);
            res.send('Error al registrar el cliente');
        } else {
            console.log('Cliente registrado:', result);
            res.send('Cliente registrado exitosamente');
        }
    });
});