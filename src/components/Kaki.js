import React from "react";
import { motion } from "framer-motion";

// IMPORT DARI FILE MENYELURUH
import {
  LapisanWadah,
  MelenturkanWadah,
  Tajuk,
  Teks,
  TeksBiru,
  Tombol,
  WadahIkon,
} from "../styles/Menyeluruh.styled";
import {
  KontakFormulir,
  LabelFormulir,
  MasukanFormulir,
} from "../styles/Kaki.styled";

import { PariasiHilangKeBawah } from "../utils/Pariasi";

const Kaki = () => {
  return (
    <LapisanWadah id="Kontak" atas="10%" bawah="10%">
      <Tajuk
        as={motion.h4}
        variants={PariasiHilangKeBawah}
        initial="hilang"
        whileInView="ada"
        ukuran="t4"
        luruskan="center"
      >
        Kontak Saya
      </Tajuk>

      <Tajuk
        as={motion.h2}
        variants={PariasiHilangKeBawah}
        initial="hilang"
        whileInView="ada"
        ukuran="t2"
        atas="0.5rem"
        luruskan="center"
      >
        Hubungi <TeksBiru>Saya Disini</TeksBiru>
      </Tajuk>

      <LapisanWadah atas="3rem">
        <MelenturkanWadah benarkan="center">
          <KontakFormulir
            as={motion.form}
            variants={PariasiHilangKeBawah}
            initial="hilang"
            whileInView="ada"
          >
            <LapisanWadah bawah="2rem">
              <LabelFormulir>Nama:</LabelFormulir>
              <MasukanFormulir type="text" placeholder="Masukan Nama Anda" />
            </LapisanWadah>

            <LapisanWadah bawah="2rem">
              <LabelFormulir>Email:</LabelFormulir>
              <MasukanFormulir type="email" placeholder="Masukan Email Anda" />
            </LapisanWadah>

            <LapisanWadah bawah="2rem">
              <LabelFormulir>Pesan:</LabelFormulir>
              <MasukanFormulir as="textarea" placeholder="Masukan Pesan Anda" />
            </LapisanWadah>

            <MelenturkanWadah benarkan="center" melenturkanResponsif>
              <Tombol>Kirim Pesan</Tombol>
            </MelenturkanWadah>
          </KontakFormulir>
        </MelenturkanWadah>
      </LapisanWadah>
    </LapisanWadah>
  );
};

export default Kaki;
