async function criarCards() {
	const container = document.getElementById("container");

	//rocha, fantasma, dragao e aço -> tipos
	const tipos = ["normal", "fire", "water", "electric"];

	for (const tipo of tipos) {
		const titulo = document.createElement("h2");

		//traduzir os nomes


		function traduzir() {
			if (tipo == "normal") return "normal";
			else if (tipo == "fire") return "fogo";
			else if (tipo == "water") return "água";
			else if (tipo == "electric") return "elétrico";
			else return "";
		}

		titulo.textContent = `${traduzir().toUpperCase()}`;
		titulo.classList.add("titulo-tipos");
		container.appendChild(titulo);

		const resp = await fetch(`https://pokeapi.co/api/v2/type/${tipo}`);
		const data = await resp.json();

		const lista = data.pokemon.slice(0, 12);

		const area = document.createElement("div");
		area.classList.add("grupo-tipo");

		for (const p of lista) {
			const resp2 = await fetch(p.pokemon.url);
			const det = await resp2.json();

			const card = document.createElement("div");
			card.classList.add("card");

			card.innerHTML = `
			<h4>#${det.id}</h4>
			<img src="${det.sprites.front_default}">
			<h3>${det.name}</h3>
		      `;

			area.appendChild(card);
		}

		container.appendChild(area);
	}
}

// executa assim que a pagina carregar
criarCards();
