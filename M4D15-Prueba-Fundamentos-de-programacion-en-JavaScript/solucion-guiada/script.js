//Para esta solucion requeriremos alguna extension CORS o modificar la url con /api.php/

$(document).ready(function() {
    $('#buscar').on('click', function() {
        let numero = $('#numero').val();

        if (!isNaN(numero)) {
            let token = '4905856019427443';
            let url = `https://superheroapi.com/api/${token}/${numero}`;
    
            $.ajax({
                type: 'GET',
                url: url,
                dataType: 'json',
                success: function(data) {
                    console.log(data);

                    $('#superhero').html('');

                    if (data.response === 'success') {
                        $('#superhero').append(`
                            <h2>${data.name}</h2>
                            <img src='${data.image.url}' width='128px'>
                            <h3>Biografía</h3>
                            <p>Nombre completo: ${data.biography['full-name']}</p>
                            <p>Lugar de nacimiento: ${data.biography['place-of-birth']}</p>
                            <h3>Apariencia</h3>
                            <p>Genero: ${data.appearance['gender']}</p>
                            <p>Raza: ${data.appearance['race']}</p>
                            <h3>Trabajo</h3>
                            <p>Ocupación: ${data.work.occupation}</p>
                        `);
        
                        var options = {
                            title: {
                                text: 'Estadísticas'
                            },
                            theme: "light2",
                            animationEnabled: true,
                            data: [{
                                type: "pie",
                                startAngle: 40,
                                toolTipContent: "<b>{label}</b>: {y}%",
                                showInLegend: "true",
                                legendText: "{label}",
                                indexLabelFontSize: 16,
                                indexLabel: "{label} - {y}%",
                                dataPoints: [
                                    { y: data.powerstats.intelligence, label: "intelligence" },
                                    { y: data.powerstats.strength, label: "strength" },
                                    { y: data.powerstats.speed, label: "speed" },
                                    { y: data.powerstats.durability, label: "durability" },
                                    { y: data.powerstats.power, label: "power" },
                                    { y: data.powerstats.combat, label: "combat" }
                                ]
                            }]
                        }
                        $("#chartContainer").show();
                        $("#chartContainer").CanvasJSChart(options);
                    } else {
                        $("#chartContainer").hide();
                        $('#superhero').append(`
                            <div class='error'>El superhero no existe.</div>
                        `);
                    }
                },
                error: function(error) {
                    console.log(error);
                }
            });
        } else {
            alert('Ingrese solo un número');
        }
    });
});