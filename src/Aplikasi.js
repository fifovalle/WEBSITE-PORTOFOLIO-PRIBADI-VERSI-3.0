// MEMASUKAN MODUL DARI REACT
import React from "react";
import { ThemeProvider } from "styled-components";
// MENGMASUKAN MODUL PENGHIAS YANG SAYA BUAT
import { tema } from "./utils/Tema";
import { LatarBelakang, Wadah, GambarCahaya } from "./styles/Menyeluruh.styled";
// MENGMASUKAN MODUL KOMPONEN YANG SAYA BUAT
import NavigasiBar from "./components/NavigasiBar";
import Pamerkan from "./components/Pamerkan";
import KeahlianSaya from "./components/KeahlianSaya";
import ProyekSaya from "./components/ProyekSaya";
import Kaki from "./components/Kaki";
// MENGMASUKAN FILE GAMBAR YANG SAYA MILIKI
import CahayaAtas from "./assets/atas.png";
import CahayaKanan from "./assets/kanan.png";
import CahayaKiri from "./assets/kiri.png";

function Aplikasi() {
  return (
    <ThemeProvider theme={tema}>
      <LatarBelakang>
        <NavigasiBar />
        <Wadah>
          <Pamerkan />
          <KeahlianSaya />
          <ProyekSaya />
          <Kaki />
        </Wadah>
        <GambarCahaya src={CahayaAtas} alt="Gambar Atas" atas="0" />
        <GambarCahaya src={CahayaKiri} alt="Gambar Kiri" atas="0" kiri="0" />
        <GambarCahaya src={CahayaKanan} alt="Gambar Kanan" atas="0" kanan="0" />
      </LatarBelakang>
    </ThemeProvider>
  );
}

export default Aplikasi;
