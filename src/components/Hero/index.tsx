import { Container } from "./styles";

import MainShoe from '../../assets/images/air-force-main.png';

export function Hero() {
    return (
        <Container>
            <div>
                <h1>Descontos de verão</h1>
                <h2>2022</h2>
                <p>Aqueles descontos que você procura para curtir o verão da melhor forma, no melhor estilo e economizando uma grana</p>

                <button>Conferir agora</button>
            </div>

            <img src={MainShoe} alt="Main shoe" />
        </Container>
    )
}