// Elementos HTML
const searchBtn = document.getElementById('searchBtn');
const pokemonInput = document.getElementById('pokemonInput');
const pokemonResult = document.getElementById('pokemonResult');

// Evento al precionar botón
searchBtn.addEventListener('click', async() => {
    const pokeName = pokemonInput.value.toLowerCase().trim();

    if(!pokeName) {
        pokemonResult.innerHTML = `
            <div class="alert alert-warning" roles="alert">
                !Olvidaste escribir el nombre del Pokémon
            </div>`;
        return;
    }

    pokemonResult.innerHTML = `
        <div class="spinner-border text-primary mt-4" role="status">
            <span class="visually-hidden">Cargando...</span>
        </div>
        <p class="mt-2 text-muted">Buscando datos...</p>
        `;

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);

        if (!response.ok) {
            throw new Error('Pokémon no encontrado. Verifica el nombre o el ID.');
        }

        const data = await response.json();

    const name = data.name.toUpperCase();
        const sprite = data.sprites.front_default || data.sprites.other['official-artwork'].front_default; 
        const height = data.height / 10; 
        const weight = data.weight / 10;
    
    const typesHtml = data.types.map(tipo => 
            `<span class="badge text-bg-secondary me-1 fs-6">${tipo.type.name.toUpperCase()}</span>`
        ).join('');
    
    pokemonResult.innerHTML = `
            <div class="card shadow mt-3 mx-auto" style="max-width: 25rem;">
                <div class="text-center pt-4 bg-white rounded-top">
                    <img src="${sprite}" class="card-img-top" alt="${name}" style="width: 200px; image-rendering: pixelated;">
                </div>
                
                <div class="card-body bg-light text-center">
                    <h3 class="card-title fw-bold">${name} <span class="text-muted">#${data.id}</span></h3>
                    
                    <div class="mb-3 mt-3">
                        ${typesHtml}
                    </div>

                    <ul class="list-group list-group-flush text-start rounded border">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <strong>Altura:</strong> <span>${height} m</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <strong>Peso:</strong> <span>${weight} kg</span>
                        </li>
                    </ul>
                </div>
            </div>
        `;

        } catch (error) {
        // Alerta de peligro (roja) de Bootstrap para el error
        pokemonResult.innerHTML = `
            <div class="alert alert-danger" role="alert">
                ${error.message}
            </div>`;
        }
})