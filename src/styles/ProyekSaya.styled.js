// MEMASUKAN MODUL DARI REACT
import bergaya from "styled-components";

export const KartuAlat = bergaya.div`
    display: inline-block;
    background-color: ${({ theme }) => theme.warna.sekunder};
    color: #fff;
    padding: 0.3rem 1rem;
    border-radius: 5px;

    @media (max-width: ${({ theme }) => theme.titikhenti.seluler}) {
        margin-right: 1rem;
        margin-bottom: 1rem;    
    }
`;

export const WadahGambar = bergaya.div`
    display: flex;
    justify-content: ${({ benarkan }) => benarkan};
`;

export const ProyekGambar = bergaya.img`
    border: 1px solid #fff;
    width: 80%;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;

    @media (max-width: ${({ theme }) => theme.titikhenti.seluler}) {
        width: 100%;
        margin-top: 2rem;
    }
`;
