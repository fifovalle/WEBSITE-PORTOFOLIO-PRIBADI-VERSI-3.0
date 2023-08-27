import bergaya from "styled-components";

export const WadahPamerkanPartikel = bergaya.div`
    position: relative;

    @media (max-width: ${({ theme }) => theme.titikhenti.seluler}) {
        display: none;
    }
`;

export const PamerkanFoto = bergaya.div`
    border: 1px solid white;
    width: max-content;
    padding-top: 2rem;
    border-radius: 1rem;
    position: relative;
    overflow: hidden;
`;

export const Partikel = bergaya.img`
    position: absolute;
    top: ${({ atas }) => atas};
    bottom: ${({ bawah }) => bawah};
    left: ${({ kiri }) => kiri};
    right: ${({ kanan }) => kanan};
    transform: rotate(${({ rotasi }) => rotasi});
`;
