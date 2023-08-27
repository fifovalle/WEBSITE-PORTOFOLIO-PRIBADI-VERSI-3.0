import bergaya from "styled-components";

export const WadahNavigasi = bergaya.div`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 10;
    transition: all 0.3s ease-in;
    background-color: ${({ bgwarna }) => bgwarna};
`;

export const Logo = bergaya.p`
    font-size: 1.7rem;
    font-weight: ${({ theme }) => theme.huruf.ketebalan.sedang};
    color: white;
`;

export const DaftarIkon = bergaya.a`
    color: ${({ theme }) => theme.warna.sekunder};
    font-size: 1.6rem;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
`;

export const WadahDaftarNavigasi = bergaya.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: ${({ theme }) => theme.warna.primer_cerah};
    z-index: 1;
`;

export const DaftarBarang = bergaya.a`
    color: #fff;
    font-size: 2.5rem;
    margin-top: 3rem;
    cursor: pointer;
    text-decoration: none;
`;
