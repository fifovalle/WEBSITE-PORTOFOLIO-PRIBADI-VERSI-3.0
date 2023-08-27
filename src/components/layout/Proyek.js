import React from "react";
import { motion } from "framer-motion";

// IMPORT DARI FILE MENYELURUH
import {
  LapisanWadah,
  MelenturkanWadah,
  Tajuk,
  Teks,
  Tombol,
  WadahIkon,
} from "../../styles/Menyeluruh.styled";
import { FaGithub } from "react-icons/fa";
import {
  KartuAlat,
  ProyekGambar,
  WadahGambar,
} from "../../styles/ProyekSaya.styled";
import { PariasiHilangKeKiri, PariasiHilangKeKanan } from "../../utils/Pariasi";

const Proyek = ({ data }) => {
  return (
    <MelenturkanWadah
      ukuranLebar
      arah={data.kebalikan ? "row-reverse" : "false"}
    >
      {/* -----PROYEK BAGIAN KIRI----- */}
      <motion.div
        variants={data.kebalikan ? PariasiHilangKeKanan : PariasiHilangKeKiri}
        initial="hilang"
        whileInView="ada"
      >
        <MelenturkanWadah luruskan="center" celah="1rem">
          <Tajuk as="h3" ukuran="t3" bawah="1rem">
            {data.nama_proyek}
          </Tajuk>

          <WadahIkon warna="biru" ukuran="2rem">
            <FaGithub />
          </WadahIkon>
        </MelenturkanWadah>

        <LapisanWadah atas="1rem">
          <MelenturkanWadah celah="1.5rem">
            {data.alat.map((alat) => (
              <KartuAlat>{alat}</KartuAlat>
            ))}
          </MelenturkanWadah>
        </LapisanWadah>

        <Teks atas="1.5rem" bawah="2rem">
          {data.deskripsi_proyek}
        </Teks>

        <Tombol href={data.link} target="_blank">
          Kunjungi
        </Tombol>
      </motion.div>

      {/* -----PROYEK BAGIAN KIRI----- */}
      <WadahGambar
        as={motion.div}
        variants={data.kebalikan ? PariasiHilangKeKiri : PariasiHilangKeKanan}
        initial="hilang"
        whileInView="ada"
        benarkan={data.kebalikan ? "flex-start" : "flex-end"}
      >
        <ProyekGambar src={data.gambar} alt={data.nama_proyek}></ProyekGambar>
      </WadahGambar>
    </MelenturkanWadah>
  );
};

export default Proyek;
