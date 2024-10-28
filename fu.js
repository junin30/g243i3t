import { getCSS } from "./common.js"

async function redesFavoritasMundo() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/redes-favoritas.json'
    const res = await fetch(url)
    const dados = await res.json()
    const redes = Object.keys(dados)
    const valores = Object.values(dados)

    const data = [
        {
            values: valores,
            labels: redes,
            type: 'pie',
            textinfo: 'label+percent'
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--bg'),
        paper_bgcolor: getCSS('--bg'),
        title: {
            text: 'Redes sociais que os usuários mais gostam',
            x: 0,
            font: {
                color: getCSS('--secondary'),
                family: getCSS('--arial'),
                size: 30
            }
        },
        legend: {
            font: {
                color: getCSS('--secondary'),
                size: 16
            }
        }
    }

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)
}

redesFavoritasMundo()
