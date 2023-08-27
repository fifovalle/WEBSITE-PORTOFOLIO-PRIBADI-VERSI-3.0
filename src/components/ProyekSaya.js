import React from "react";
import { motion } from "framer-motion";

// IMPORT DARI FILE MENYELURUH
import {
  LapisanWadah,
  MelenturkanWadah,
  Tajuk,
  Teks,
  TeksBiru,
  WadahIkon,
} from "../styles/Menyeluruh.styled";
import { DetailProyek } from "../utils/Data";
import Proyek from "./layout/Proyek";

import { PariasiHilangKeAtas } from "../utils/Pariasi";

const ProyekSaya = () => {
  return (
    <LapisanWadah
      id="Proyek"
      atas="5%"
      bawah="5%"
      atasResponsif="20%"
      kiriResponsif="1rem"
      kananResponsif="1rem"
    >
      <Tajuk
        as={motion.h4}
        variants={PariasiHilangKeAtas}
        initial="hilang"
        whileInView="ada"
        ukuran="t4"
      >
        PROYEK SAYA
      </Tajuk>

      <Tajuk
        as={motion.h2}
        variants={PariasiHilangKeAtas}
        initial="hilang"
        whileInView="ada"
        ukuran="t2"
      >
        Apa Saja <TeksBiru>Proyek Saya</TeksBiru>
      </Tajuk>

      {DetailProyek.map((proyek) => (
        <LapisanWadah key={proyek.id} atas="5rem" bawah="5rem">
          <Proyek data={proyek}></Proyek>
        </LapisanWadah>
      ))}
    </LapisanWadah>
  );
};

export default ProyekSaya;
