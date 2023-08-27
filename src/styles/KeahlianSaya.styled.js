import bergaya from "styled-components";

export const WadahKeahlian = bergaya.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 2rem;
    padding: 0 3%;

    @media (max-width: ${({ theme }) => theme.titikhenti.komputer}) {
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 1.5rem;
        padding: 0 1%;
    }

    @media (max-width: ${({ theme }) => theme.titikhenti.seluler}) {
        display: block;
        padding: 0;
    }
`;

export const KartuKeahlian = bergaya.div`
    width: 190px;
    border: 1px solid #fff;
    padding: 2rem 0;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.warna.primer_cerah};

    @media (max-width: ${({ theme }) => theme.titikhenti.seluler}) {
        width: 100%;
        margin-top: 2rem;
    }
`;
