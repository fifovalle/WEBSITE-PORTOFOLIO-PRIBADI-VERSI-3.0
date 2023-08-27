// MEMASUKAN MODUL DARI REACT
import React, { useEffect, useState } from "react";
// MENGMASUKAN MODUL IKON DARI REACT
import { GiHamburgerMenu } from "react-icons/gi";
import { DaftarIkon, Logo, WadahNavigasi } from "../styles/NavigasiBar.styled";
// MEMASUKAN MODUL DARI FRAMER MOTION
import { motion, AnimatePresence } from "framer-motion";
// MENGMASUKAN MODUL PENGHIAS YANG SAYA BUAT
import {
  LapisanWadah,
  MelenturkanWadah,
  TeksBiru,
  Wadah,
} from "../styles/Menyeluruh.styled";
import { tema } from "../utils/Tema";
// MENGMASUKAN MODUL LAYOUT YANG SAYA BUAT
import DaftarNavigasi from "./layout/DaftarNavigasi";

const NavigasiBar = () => {
  const [bukaDaftar, aturBukaDaftar] = useState(false);
  const [navTetap, aturNavTetap] = useState(false);
  useEffect(() => {
    // MEMBUAT FUNGSI KETIKA DI SCROLL
    const diGulir = () => {
      window.pageYOffset > 50 ? aturNavTetap(true) : aturNavTetap(false);
    };
    window.addEventListener("scroll", diGulir);
    return () => window.removeEventListener("scroll", diGulir);
  }, []);
  return (
    <WadahNavigasi bgwarna={navTetap ? tema.warna.primer : "transparent"}>
      <LapisanWadah
        atas="1.2rem"
        bawah="1.2rem"
        kiriResponsif="1rem"
        kananResponsif="1rem"
      >
        <Wadah>
          <MelenturkanWadah benarkan="space-between" melenturkanResponsif>
            {/* -----LOGO BAGIAN KIRI----- */}
            <Logo>
              Dev<TeksBiru>Pemula</TeksBiru>
            </Logo>

            {/* -----MENU BAGIAN KANAN----- */}
            <DaftarIkon
              as={motion.a}
              whileHover={{
                scale: 1.2,
              }}
              onClick={() => {
                aturBukaDaftar(true);
              }}
            >
              <GiHamburgerMenu />
            </DaftarIkon>
          </MelenturkanWadah>
        </Wadah>
        <AnimatePresence>
          {bukaDaftar && <DaftarNavigasi aturBukaDaftar={aturBukaDaftar} />}
        </AnimatePresence>
      </LapisanWadah>
    </WadahNavigasi>
  );
};
export default NavigasiBar;
