new gridjs.Grid({
    search: true,
    sort: true,
    language: {
        'search': {
          'placeholder': '🔍 Buscar Referido...'
        },
        'pagination': {
          'previous': 'Anterior',
          'next': 'Siguiente',
          'showing': '😃 Displaying',
          'results': () => 'Records'
        }
    },
    pagination: {
        limit: 6,
        enabled: true,
        summary: false
    },
    data: [
      [1098798652, 'Pepito Perez', 'Fulanito Garcia', 'Claro PQR', 'HV', 'En capacitación'],
      [1098798652, 'Juanito Gonzales', 'Antonieta Arias', 'Telefonica', 'HV', 'Rechazado'],
      [1098798652, 'Pepito Perez', 'Fulanito Garcia', 'Claro PQR', 'HV', 'En capacitación'],
      [1098798652, 'Pepito Perez', 'Fulanito Garcia', 'Claro PQR', 'HV', 'En capacitación'],
      [1098798652, 'Pepito Perez', 'Fulanito Garcia', 'Claro PQR', 'HV', 'En capacitación'],
      [1098798652, 'Pepito Perez', 'Fulanito Garcia', 'Claro PQR', 'HV', 'En capacitación'],
      [1098798652, 'Pepito Perez', 'Fulanito Garcia', 'Claro PQR', 'HV', 'En capacitación'],
      [1098798652, 'Pepito Perez', 'Fulanito Garcia', 'Claro PQR', 'HV', 'En capacitación'],
      [1098798652, 'Pepito Perez', 'Fulanito Garcia', 'Claro PQR', 'HV', 'En capacitación'],
      [1098798652, 'Pepito Perez', 'Fulanito Garcia', 'Claro PQR', 'HV', 'En capacitación'],
      [1098798652, 'Pepito Perez', 'Fulanito Garcia', 'Claro PQR', 'HV', 'En capacitación'],
      [1098798652, 'Pepito Perez', 'Fulanito Garcia', 'Claro PQR', 'HV', 'En capacitación'],
      [1098798652, 'Pepito Perez', 'Fulanito Garcia', 'Claro PQR', 'HV', 'En capacitación'],
      [1098798652, 'Pepito Perez', 'Fulanito Garcia', 'Claro PQR', 'HV', 'En capacitación'],
      [1098798652, 'Pepito Perez', 'Fulanito Garcia', 'Claro PQR', 'HV', 'En capacitación'],
      [1098798652, 'Pepito Perez', 'Fulanito Garcia', 'Claro PQR', 'HV', 'En capacitación'],
      [1098798652, 'Pepito Perez', 'Fulanito Garcia', 'Claro PQR', 'HV', 'En capacitación'],
      [1098798652, 'Pepito Perez', 'Fulanito Garcia', 'Claro PQR', 'HV', 'En capacitación'],
      [1098798652, 'Pepito Perez', 'Fulanito Garcia', 'Claro PQR', 'HV', 'En capacitación'],
      [1098798652, 'Pepito Perez', 'Fulanito Garcia', 'Claro PQR', 'HV', 'En capacitación'],
      [1098798652, 'Pepito Perez', 'Fulanito Garcia', 'Claro PQR', 'HV', 'En capacitación'],
      [1098798652, 'Pepito Perez', 'Fulanito Garcia', 'Claro PQR', 'HV', 'En capacitación']
    ],
    columns: ['Cédula empleado', 'Nombre Empleado', 'Nombre del referido', 'Campaña de interés', 'HV', 'Estado'],
    style: {
        table: {width: '80%', margin: 'auto', fontSize: '1.4rem'},
        header: {width: '80%', margin: 'auto'}
    }
  }).render(document.getElementById('table'));