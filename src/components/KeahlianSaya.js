// MEMASUKAN MODUL DARI REACT
import React from "react";
// MEMASUKAN MODUL DARI FRAMER MOTIOn
import { motion } from "framer-motion";
// MENGMASUKAN MODUL PENGHIAS YANG SAYA BUAT
import {
  LapisanWadah,
  MelenturkanWadah,
  Tajuk,
  Teks,
  TeksBiru,
  WadahIkon,
} from "../styles/Menyeluruh.styled";
import { KartuKeahlian, WadahKeahlian } from "../styles/KeahlianSaya.styled";
import { Keahlian } from "../utils/Data";
import { PariasiHilangKeKiri, PariasiHilangKeKanan } from "../utils/Pariasi";

const KeahlianSaya = () => {
  return (
    <LapisanWadah
      id="Keahlian"
      atas="10%"
      bawah="10%"
      kiriResponsif="1rem"
      kananResponsif="1rem"
    >
      <MelenturkanWadah
        melenturkanResponsif
        arahResponsif="column-reverse"
        ukuranLebar
      >
        {/* -----KEAHLIAN BAGIAN KIRI----- */}
        <WadahKeahlian
          as={motion.div}
          variants={PariasiHilangKeKiri}
          initial="hilang"
          whileInView="ada"
        >
          {Keahlian.map((keahlian) => (
            <KartuKeahlian>
              <WadahIkon ukuran="5rem" warna="biru">
                {keahlian.ikon}
              </WadahIkon>

              <Tajuk as="h4" ukuran="t4">
                {keahlian.nama}
              </Tajuk>
            </KartuKeahlian>
          ))}
        </WadahKeahlian>

        {/* -----KEAHLIAN BAGIAN KANAN----- */}
        <motion.div
          variants={PariasiHilangKeKanan}
          initial="hilang"
          whileInView="ada"
        >
          <Tajuk as="h4" ukuran="t4">
            KEAHLIAN SAYA
          </Tajuk>
          <Tajuk as="h2" ukuran="t2" atas="0.5rem">
            Apa Saja <TeksBiru>Keahlian Saya</TeksBiru>
          </Tajuk>

          <Teks atas="2rem" bawah="1.5rem">
            Sebagai web developer pemula, saya memiliki beberapa keahlian yang
            saya tingkatkan setiap harinya untuk meningkatkan kemampuan saya
            dalam membuat web yang berkualitas. Serta keahlian yang saya
            pelajari akan di simpan di github untuk diakses dengan mudah jika
            kalian kepo dengan progress belajar saya.
          </Teks>

          <Teks>
            Portofolio ini adalah tempat bermainnya saya untuk memamerkan hasil
            proyek saya selama saya belajar menjadi web developer. mau itu di
            bagian <TeksBiru>Client Side</TeksBiru> atau di bagian{" "}
            <TeksBiru>Server Side</TeksBiru>.
          </Teks>
        </motion.div>
      </MelenturkanWadah>
    </LapisanWadah>
  );
};

export default KeahlianSaya;
