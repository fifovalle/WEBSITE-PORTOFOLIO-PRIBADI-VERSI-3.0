// MEMASUKAN MODUL DARI REACT
import bergaya from "styled-components";

export const KontakFormulir = bergaya.form`
    width: 40%;

    @media (max-width: ${({ theme }) => theme.titikhenti.seluler}) {
        width: 90%;
        margin: auto;
    }
`;

export const LabelFormulir = bergaya.p`
    color: ${({ theme }) => theme.warna.teks};
    padding-bottom: 10px;
`;

export const MasukanFormulir = bergaya.input`
    width: 100%;
    background-color: ${({ theme }) => theme.warna.primer_cerah};
    border: 1px solid ${({ theme }) => theme.warna.teks};
    color: ${({ theme }) => theme.warna.teks};
    border-radius: 5px;
    padding: 15px;

    &::placeholder {
        color: ${({ theme }) => theme.warna.teks};
    }
`;
