import React from "react";
import { motion } from "framer-motion";

// IMPORT DARI FILE MENYELURUH
import { LapisanWadah, MelenturkanWadah } from "../../styles/Menyeluruh.styled";

import { AiOutlineClose } from "react-icons/ai";
import {
  DaftarBarang,
  DaftarIkon,
  WadahDaftarNavigasi,
} from "../../styles/NavigasiBar.styled";
import { NavigasiTautan } from "../../utils/Data";
import { PariasiGeserKeKiri } from "../../utils/Pariasi";

const DaftarNavigasi = ({ setBukaDaftar }) => {
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
            onClick={() => setBukaDaftar(false)}
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
            <DaftarBarang
              as={motion.a}
              whileHover={{
                scale: 1.2,
              }}
              key={tautan.id}
              href={`#${tautan.tautan}`}
              onClick={() => setBukaDaftar(false)}
            >
              {tautan.nama}
            </DaftarBarang>
          ))}
        </MelenturkanWadah>
      </LapisanWadah>
    </WadahDaftarNavigasi>
  );
};

export default DaftarNavigasi;
