import React from "react";
import { ThemeProvider } from "styled-components";
import { tema } from "./utils/Tema";
import { TubuhUtama, Wadah, GambarHilang } from "./styles/Menyeluruh.styled";
// IMPOR KOMPONEN
import NavigasiBar from "./components/NavigasiBar";
import Pamerkan from "./components/Pamerkan";
import KeahlianSaya from "./components/KeahlianSaya";
import ProyekSaya from "./components/ProyekSaya";
import Kaki from "./components/Kaki";

import GambarAtas from "./assets/atas.png";
import GambarKanan from "./assets/kanan.png";
import GambarKiri from "./assets/kiri.png";

function Aplikasi() {
  return (
    <ThemeProvider theme={tema}>
      <TubuhUtama>
        <NavigasiBar />
        <Wadah>
          <Pamerkan />
          <KeahlianSaya />
          <ProyekSaya />
          <Kaki />
        </Wadah>
        <GambarHilang src={GambarAtas} alt="Gambar Atas" atas="0" />
        <GambarHilang src={GambarKiri} alt="Gambar Kiri" atas="0" kiri="0" />
        <GambarHilang src={GambarKanan} alt="Gambar Kanan" atas="0" kanan="0" />
      </TubuhUtama>
    </ThemeProvider>
  );
}

export default Aplikasi;
