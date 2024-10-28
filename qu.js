import { getCSS, tickConfig } from "./common.js"

async function quantidadeUsuariosPorRede() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeDeUsuarios = Object.values(dados)

    const data = [
        {
            x: nomeDasRedes, 
            y: quantidadeDeUsuarios, 
            type: 'bar',
            marker: {
                color: getCSS('--tertiary')
            }
        }
    ]

    const laytout = {
        plot_bgcolor: getCSS('--bg'),
        paper_bgcolor: getCSS('--bg'),
        title: {
            text: 'Redes sociais com mais usuários',
            x: 0,
            font: {
                color: getCSS('--secondary'),
                size: 30,
                font: getCSS('--font')
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Nome das redes',
                font: {
                    color: getCSS('--secondary')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Bilhões de usuários ativos',
                font: {
                    color: getCSS('--secondary')
                }
            }
        }
    }

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, laytout)
}

quantidadeUsuariosPorRede()
