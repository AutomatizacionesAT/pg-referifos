new gridjs.Grid({
    search: true,
    sort: true,
    language: {
        'search': {
          'placeholder': '馃攳 Buscar Referido...'
        },
        'pagination': {
          'previous': 'Anterior',
          'next': 'Siguiente',
          'showing': '馃槂 Displaying',
          'results': () => 'Records'
        }
    },
    pagination: {
        limit: 6,
        enabled: true,
        summary: false
    },
    data: [
      [1, 1098798652, 'Pepito Perez', 'Fulanito Garcia', 'Claro PQR', 'HV', 'En capacitaci贸n'],
      [2, 1098798652, 'Juanito Gonzales', 'Antonieta Arias', 'Telefonica', 'HV', 'Rechazado'],
      [3, 1098798652, 'Pepito Perez', 'Fulanito Garcia', 'Claro PQR', 'HV', 'En capacitaci贸n'],
      [4, 1098798652, 'Pepito Perez', 'Fulanito Garcia', 'Claro PQR', 'HV', 'En capacitaci贸n'],
      [5, 1098798652, 'Pepito Perez', 'Fulanito Garcia', 'Claro PQR', 'HV', 'En capacitaci贸n'],
      [6, 1098798652, 'Pepito Perez', 'Fulanito Garcia', 'Claro PQR', 'HV', 'En capacitaci贸n'],
      [7, 1098798652, 'Pepito Perez', 'Fulanito Garcia', 'Claro PQR', 'HV', 'En capacitaci贸n'],
      [8, 1098798652, 'Pepito Perez', 'Fulanito Garcia', 'Claro PQR', 'HV', 'En capacitaci贸n'],
      [9, 1098798652, 'Pepito Perez', 'Fulanito Garcia', 'Claro PQR', 'HV', 'En capacitaci贸n'],
      [10, 1098798652, 'Pepito Perez', 'Fulanito Garcia', 'Claro PQR', 'HV', 'En capacitaci贸n'],
      [11, 1098798652, 'Pepito Perez', 'Fulanito Garcia', 'Claro PQR', 'HV', 'En capacitaci贸n'],
      [12, 1098798652, 'Pepito Perez', 'Fulanito Garcia', 'Claro PQR', 'HV', 'En capacitaci贸n'],
      [13, 1098798652, 'Pepito Perez', 'Fulanito Garcia', 'Claro PQR', 'HV', 'En capacitaci贸n'],
      [14, 1098798652, 'Pepito Perez', 'Fulanito Garcia', 'Claro PQR', 'HV', 'En capacitaci贸n'],
      [15, 1098798652, 'Pepito Perez', 'Fulanito Garcia', 'Claro PQR', 'HV', 'En capacitaci贸n'],
      [16, 1098798652, 'Pepito Perez', 'Fulanito Garcia', 'Claro PQR', 'HV', 'En capacitaci贸n'],
      [17, 1098798652, 'Pepito Perez', 'Fulanito Garcia', 'Claro PQR', 'HV', 'En capacitaci贸n'],
      [18, 1098798652, 'Pepito Perez', 'Fulanito Garcia', 'Claro PQR', 'HV', 'En capacitaci贸n'],
      [19, 1098798652, 'Pepito Perez', 'Fulanito Garcia', 'Claro PQR', 'HV', 'En capacitaci贸n'],
      [20, 1098798652, 'Pepito Perez', 'Fulanito Garcia', 'Claro PQR', 'HV', 'En capacitaci贸n'],
      [21, 1098798652, 'Pepito Perez', 'Fulanito Garcia', 'Claro PQR', 'HV', 'En capacitaci贸n'],
      [22, 1098798652, 'Pepito Perez', 'Fulanito Garcia', 'Claro PQR', 'HV', 'En capacitaci贸n']
    ],
    columns: ['ID', 'C茅dula empleado', 'Nombre Empleado', 'Nombre del referido', 'Campa帽a de inter茅s', 'HV', 'Estado'],
    style: {
        table: {width: '80%', margin: 'auto', fontSize: '1.4rem'},
        header: {width: '80%', margin: 'auto'}
    }
  }).render(document.getElementById('table'));