$(document).ready(function() {
  $('#searchBtn').click(function() {
      const heroId = $('#heroId').val().trim();

      if (!/^\d+$/.test(heroId)) {
          $('#message').html('<div class="alert alert-danger">Por favor, ingrese un número válido.</div>');
          return;
      }

      $.ajax({
          url: `https://www.superheroapi.com/api.php/4905856019427443/${heroId}`,
          method: 'GET',
          success: function(data) {
              if (data.response === 'error') {
                  $('#message').html('<div class="alert alert-danger">SuperHero no encontrado. Por favor, ingrese un ID válido.</div>');
                  return;
              }
              
              $('#message').html('<div class="alert alert-success">SuperHero encontrado.</div>');
              renderHeroInfo(data);
          },
          error: function() {
              $('#message').html('<div class="alert alert-danger">Error al consultar la API. Intente nuevamente más tarde.</div>');
          }
      });
  });

  function renderHeroInfo(hero) {
      const { name, image, biography, powerstats } = hero;
      $('.resultado').empty().append(`
      <div class="card">
        <div class="row g-0">
          <div class="col-md-5">
            <img src="${image.url}" class="img-fluid img-fluid h-100 rounded-start" alt="${name}">
          </div>
          <div class="col-md-7">
            <div class="card-body">
              <h5 class="card-title">${name}</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><strong>Nombre Completo:</strong> ${biography['full-name']}</p>
              <p class="card-text"><strong>Alias:</strong> ${biography.aliases.join(', ')}</p>
              <p class="card-text"><strong>Lugar de Nacimiento:</strong> ${biography['place-of-birth']}</p>
              <p class="card-text"><strong>Primera Aparición:</strong> ${biography['first-appearance']}</p>
              <p class="card-text"><strong>Editor:</strong> ${biography.publisher}</p>
            </div>
          </div>
        </div>
      </div>
      `);

      const powerStatsData = [];
      for (const key in powerstats) {
          powerStatsData.push({
              label: key.charAt(0).toUpperCase() + key.slice(1),
              y: parseInt(powerstats[key])
          });
      }

      const chart = new CanvasJS.Chart("chartContainer", {
          animationEnabled: true,
          theme: "light2",
          title: {
              text: "Estadísticas de Poder"
          },
          data: [{
              type: "pie",
              indexLabel: "{label} - {y}",
              dataPoints: powerStatsData
          }]
      });
      chart.render();
  }
});