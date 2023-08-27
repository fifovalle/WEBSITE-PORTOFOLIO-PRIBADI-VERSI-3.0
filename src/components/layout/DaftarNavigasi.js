// MEMASUKAN MODUL DARI REACT
import React from "react";
// MENGMASUKAN MODUL IKON DARI REACT
import { AiOutlineClose } from "react-icons/ai";
// MEMASUKAN MODUL DARI FREMER MOTION
import { motion } from "framer-motion";
// MENGMASUKAN MODUL KOMPONEN YANG SAYA BUAT
import { LapisanWadah, MelenturkanWadah } from "../../styles/Menyeluruh.styled";
import { NavigasiTautan } from "../../utils/Data";
import { PariasiGeserKeKiri } from "../../utils/Pariasi";
import {
  DaftarTeks,
  DaftarIkon,
  WadahDaftarNavigasi,
} from "../../styles/NavigasiBar.styled";

const DaftarNavigasi = ({ aturBukaDaftar }) => {
  return (
    <WadahDaftarNavigasi
      as={motion.div}
      variants={PariasiGeserKeKiri}
      initial="hilang"
      animate="ada"
      exit="keluar"
    >
      {/* -----TOMBOL TUTUP----- */}
      <LapisanWadah kiri="5%" kanan="5%" atas="2rem">
        <MelenturkanWadah benarkan="flex-end" melenturkanResponsif>
          <DaftarIkon
            onClick={() => aturBukaDaftar(false)}
            as={motion.a}
            whileHover={{ scale: 1.2 }}
          >
            <AiOutlineClose />
          </DaftarIkon>
        </MelenturkanWadah>
      </LapisanWadah>

      {/* -----DAFTAR BARANG----- */}
      <LapisanWadah atas="8%">
        <MelenturkanWadah arah="column" luruskan="center" melenturkanResponsif>
          {NavigasiTautan.map((tautan) => (
            <DaftarTeks
              as={motion.a}
              whileHover={{
                scale: 1.2,
              }}
              key={tautan.id}
              href={`#${tautan.tautan}`}
              onClick={() => aturBukaDaftar(false)}
            >
              {tautan.nama}
            </DaftarTeks>
          ))}
        </MelenturkanWadah>
      </LapisanWadah>
    </WadahDaftarNavigasi>
  );
};

export default DaftarNavigasi;
