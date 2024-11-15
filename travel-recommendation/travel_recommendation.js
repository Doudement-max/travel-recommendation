document.addEventListener("DOMContentLoaded", () => {
    // Função para obter a hora no fuso horário especificado
    function getTimeInTimeZone(timeZone) {
      const options = {
        timeZone: timeZone,
        hour12: true,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      };
      return new Date().toLocaleTimeString('pt-BR', options);
    }
  
    // Função para buscar e exibir as recomendações
    function executeSearch() {
      const query = document.getElementById("searchInput").value.toLowerCase();
      const keywords = ['praia', 'templo', 'país'];
      
      if (keywords.some(keyword => query.includes(keyword))) {
        displayRecommendations(query);
      } else {
        alert('Nenhuma recomendação encontrada para essa palavra-chave.');
      }
    }
  
    // Função para exibir as recomendações com base na palavra-chave
    function displayRecommendations(query) {
      const resultsContainer = document.getElementById("resultsContainer");
      resultsContainer.innerHTML = ""; // Limpa os resultados anteriores
  
      // Buscar dados do arquivo JSON (exemplo fictício)
      fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
          const filteredResults = data.recommendations.filter(recommendation =>
            recommendation.category.toLowerCase() === query
          );
  
          if (filteredResults.length > 0) {
            filteredResults.forEach(recommendation => {
              const recommendationDiv = document.createElement("div");
              recommendationDiv.classList.add("recommendation");
              
              const img = document.createElement("img");
              img.src = recommendation.imageUrl;
              img.alt = recommendation.name;
              
              const name = document.createElement("h3");
              name.textContent = recommendation.name;
              
              const description = document.createElement("p");
              description.textContent = recommendation.description;
              
              const time = document.createElement("p");
              time.textContent = `Hora local: ${getTimeInTimeZone(recommendation.timeZone)}`;
  
              recommendationDiv.appendChild(img);
              recommendationDiv.appendChild(name);
              recommendationDiv.appendChild(description);
              recommendationDiv.appendChild(time);
  
              resultsContainer.appendChild(recommendationDiv);
            });
          } else {
            resultsContainer.innerHTML = "<p>Nenhuma recomendação encontrada.</p>";
          }
        })
        .catch(error => {
          console.error("Erro ao buscar dados:", error);
          resultsContainer.innerHTML = "<p>Erro ao buscar recomendações.</p>";
        });
    }
  
    // Configurar evento de clique para o botão de pesquisa
    document.getElementById("searchButton").addEventListener("click", executeSearch);
  
    // Configurar evento de clique para o botão de limpar
    document.getElementById("clearButton").addEventListener("click", () => {
      document.getElementById("searchInput").value = "";
      document.getElementById("resultsContainer").innerHTML = "";
    });
  });
  
