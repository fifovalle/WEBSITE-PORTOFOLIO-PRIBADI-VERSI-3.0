import bergaya from "styled-components";

export const TubuhUtama = bergaya.div`
  background-color: ${({ theme }) => theme.warna.primer};
`;

export const Wadah = bergaya.div`
  width: 90%;
  max-width: 1280px;
  margin: auto;
`;

export const LapisanWadah = bergaya.div`
  padding-top: ${({ atas }) => atas};
  padding-bottom: ${({ bawah }) => bawah};
  padding-left: ${({ kiri }) => kiri};
  padding-right: ${({ kanan }) => kanan};

  @media (max-width: ${({ theme }) => theme.titikhenti.seluler}) {
    padding-top: ${({ atasResponsif }) => atasResponsif};
    padding-bottom: ${({ bawahResponsif }) => bawahResponsif};
    padding-left: ${({ kiriResponsif }) => kiriResponsif};
    padding-right: ${({ kananResponsif }) => kananResponsif};
  }
`;

export const MelenturkanWadah = bergaya.div`
  display: flex;
  justify-content: ${({ benarkan }) => benarkan};
  align-items: ${({ luruskan }) => luruskan};
  gap: ${({ celah }) => celah};
  flex-direction: ${({ arah }) => arah};

  & > div {
    flex: ${({ ukuranLebar }) => ukuranLebar && 1};
  }

  @media (max-width: ${({ theme }) => theme.titikhenti.seluler}) {
    display: ${({ melenturkanResponsif }) =>
      melenturkanResponsif ? "flex" : "block"};

    flex-direction: ${({ arahResponsif }) => arahResponsif};
  }
`;

export const Tajuk = bergaya(LapisanWadah)`
  color: ${({ theme }) => theme.warna.putih};
  text-align: ${({ luruskan }) => luruskan};
  font-size: ${({ ukuran }) => {
    switch (ukuran) {
      case "t1":
        return "4.5rem";
      case "t2":
        return "3rem";
      case "t3":
        return "2rem";
      case "t4":
        return "1.2rem";
      default:
        return;
    }
  }};

  @media (max-width: ${({ theme }) => theme.titikhenti.seluler}) {
    font-size: ${({ ukuran }) => {
      switch (ukuran) {
        case "t1":
          return "2.5rem";
        case "t2":
          return "2rem";
        case "t3":
          return "1.5rem";
        case "t4":
          return "1rem";
        default:
          return;
      }
    }};
  }
`;

export const TeksBiru = bergaya.span`
  color: ${({ theme }) => theme.warna.sekunder};
`;

export const Teks = bergaya(LapisanWadah)`
  color: ${({ theme }) => theme.warna.teks};
  line-height: 2rem;
`;

export const WadahIkon = bergaya.a`
  font-size: ${({ ukuran }) => ukuran};
  cursor: pointer;
  z-index: 1;
  color: ${({ warna, theme }) => {
    switch (warna) {
      case "putih":
        return theme.warna.putih;
      case "biru":
        return theme.warna.sekunder;
      default:
        return;
    }
  }};
  &:hover {
    color: ${({ warna, theme }) => {
      switch (warna) {
        case "putih":
          return theme.warna.sekunder;
        case "biru":
          return theme.warna.putih;
        default:
          return;
      }
    }}
`;

export const Tombol = bergaya.a`
  text-decoration: none;
  display: inline-block;
  width: max-content;
  padding: 1rem 2rem;
  color: ${({ theme }) => theme.warna.putih};
  background-color: ${({ theme }) => theme.warna.primer_cerah};
  border: 1px solid ${({ theme }) => theme.warna.putih};   
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.warna.primer_cerah};
    background-color: ${({ theme }) => theme.warna.putih};
  }
`;

export const GambarHilang = bergaya.img`
  position: absolute;
  top: ${({ atas }) => atas};
  bottom: ${({ bawah }) => bawah};
  left: ${({ kiri }) => kiri};
  right: ${({ kanan }) => kanan};
  z-index: 0;

  @media (max-width: ${({ theme }) => theme.titikhenti.komputer}) {
    display: none;
  }
  @media (max-width: ${({ theme }) => theme.titikhenti.seluler}) {
    display: none;
  }
`;
