// MEMASUKAN MODUL DARI REACT
import React from "react";
import Mengetik from "react-typewriter-effect";
// MEMASUKAN MODUL DARI FRAMER MOTION
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
// MENGMASUKAN MODUL DARI FILE
import {
  PamerkanFoto,
  Partikel,
  WadahPamerkanPartikel,
} from "../styles/Memamerkan.styled";
import { SosialTautan } from "../utils/Data";
// MENGMASUKAN FILE GAMBAR YANG SAYA MILIKI
import PamerkanGambar from "../assets/1.png";
import PamerkanPartikel from "../assets/partikel.png";
import { PariasiHilangKeKanan, PariasiHilangKeKiri } from "../utils/Pariasi";

const Pamerkan = () => {
  return (
    <LapisanWadah
      id="Beranda"
      kiri="3%"
      kanan="10%"
      atas="18%"
      bawah="15%"
      kiriResponsif="1rem"
      kananResponsif="1rem"
      atasResponsif="8rem"
    >
      <MelenturkanWadah luruskan="center" ukuranLebar>
        {/* -----KONTEN BAGIAN KIRI----- */}
        <motion.div
          variants={PariasiHilangKeKiri}
          initial="hilang"
          whileInView="ada"
        >
          <Tajuk as="h4" ukuran="t4">
            Halo!
          </Tajuk>

          <Tajuk as="h1" ukuran="t1" atas="0.5rem" bawah="1rem">
            Saya <TeksBiru>Naufal FIFA</TeksBiru>
          </Tajuk>

          <Tajuk as="h4" ukuran="t4">
            <TeksBiru>
              <Mengetik
                startDelay={2000}
                cursorColor="#7eadfc"
                multiText={[
                  "Web Developer Pemula",
                  "Sedang Mempelajari Next.js",
                ]}
                multiTextDelay={2000}
                typeSpeed={50}
                multiTextLoop
              />
            </TeksBiru>
          </Tajuk>

          <Teks as="p" atas="2rem" bawah="4rem">
            Halo, perkenalkan nama saya naufal fadhil ihsan fikri ash shidqi,
            dan saya seorang web developer pemula, dan sekarang kalian melihat
            portofolio saya ini lah perjalanan saya di web developer.
          </Teks>

          {/* -----ICON SOSIAL MEDIA----- */}
          <MelenturkanWadah celah="20px" melenturkanResponsif>
            {SosialTautan.map((sosial) => (
              <WadahIkon
                key={sosial.id}
                warna="putih"
                ukuran="1.5rem"
                href={sosial.tautan}
                target="_blank"
              >
                {sosial.ikon}
              </WadahIkon>
            ))}
          </MelenturkanWadah>
        </motion.div>

        {/* -----KONTEN BAGIAN KANAN----- */}
        <MelenturkanWadah
          benarkan="flex-end"
          as={motion.div}
          variants={PariasiHilangKeKanan}
          initial="hilang"
          whileInView="ada"
        >
          <WadahPamerkanPartikel>
            <PamerkanFoto>
              <img src={PamerkanGambar} alt="pamerkan gambar" />
            </PamerkanFoto>

            <Partikel
              as={motion.img}
              animate={{
                x: [0, 100, 0],
                rotate: 360,
                scale: [1, 0.5, 1],
              }}
              transition={{ duration: 20, repeat: Infinity }}
              src={PamerkanPartikel}
              alt="pamerkan partikel"
              atas="-80px"
              kiri="20px"
              rotasi="60deg"
            />
            <Partikel
              as={motion.img}
              animate={{
                y: [0, 100, 0],
                rotate: 360,
                scale: [1, 0.8, 1],
              }}
              transition={{ duration: 18, repeat: Infinity }}
              src={PamerkanPartikel}
              alt="pamerkan partikel"
              atas="50px"
              kanan="-70px"
              rotasi="0deg"
            />
            <Partikel
              as={motion.img}
              animate={{
                x: [0, -100, 0],
                rotate: 360,
                scale: [1, 0.9, 1],
              }}
              transition={{ duration: 15, repeat: Infinity }}
              src={PamerkanPartikel}
              alt="pamerkan partikel"
              bawah="10px"
              kiri="-70px"
              rotasi="50deg"
            />
          </WadahPamerkanPartikel>
        </MelenturkanWadah>
      </MelenturkanWadah>
    </LapisanWadah>
  );
};

export default Pamerkan;
