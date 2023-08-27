// IMPORT IKON
import {
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiJavascript, SiSass, SiNextdotjs } from "react-icons/si";
import { BsInstagram, BsGithub, BsWhatsapp } from "react-icons/bs";

import Proyek1 from "../assets/Proyek1.png";
import Proyek2 from "../assets/Proyek2.png";
import Proyek3 from "../assets/Proyek3.png";

export const Keahlian = [
  {
    id: 0,
    nama: "React JS",
    ikon: <FaReact />,
  },
  {
    id: 1,
    nama: "Javascript",
    ikon: <SiJavascript />,
  },
  {
    id: 3,
    nama: "Node JS",
    ikon: <FaNodeJs />,
  },
  {
    id: 4,
    nama: "Next JS",
    ikon: <SiNextdotjs />,
  },
  {
    id: 5,
    nama: "HTML",
    ikon: <FaHtml5 />,
  },
  {
    id: 6,
    nama: "CSS",
    ikon: <FaCss3Alt />,
  },
  {
    id: 7,
    nama: "Bootstrap",
    ikon: <FaBootstrap />,
  },
  {
    id: 8,
    nama: "Sass",
    ikon: <SiSass />,
  },
  {
    id: 9,
    nama: "Git",
    ikon: <FaGitAlt />,
  },
];

export const DetailProyek = [
  {
    id: 0,
    nama_proyek: "Portofolio Versi 1.0",
    deskripsi_proyek:
      "Saya buat portofolio versi 1.0 ini hanya untuk referensi saja karena ini adalah perjalanan belajar saya sebagai web developer",
    alat: ["HTML", "CSS", "JavaScript"],
    gambar: Proyek1,
    link: "https://github.com/fifovalle/PORTOFOLIO-SEDERHANA",
    kebalikan: false,
  },
  {
    id: 1,
    nama_proyek: "Portofolio Versi 2.0",
    deskripsi_proyek:
      "Saya buat portofolio versi 2.0 ini hanya untuk referensi saja karena ini adalah perjalanan belajar saya sebagai web developer",
    alat: ["Bootstrap", "HTML", "CSS", "JavaScript"],
    gambar: Proyek2,
    link: "https://github.com/fifovalle/PORTOFOLIO-SEDERHANA-VERSI-2.0",
    kebalikan: true,
  },
  {
    id: 2,
    nama_proyek: "Portofolio Versi 3.0",
    deskripsi_proyek:
      "Saya buat portofolio versi 3.0 ini hanya untuk referensi saja karena ini adalah perjalanan belajar saya sebagai web developer",
    alat: ["React"],
    gambar: Proyek3,
    link: "https://github.com/fifovalle/PORTOFOLIO-SEDERHANA-VERSI-3.0",
    kebalikan: false,
  },
];

export const NavigasiTautan = [
  {
    id: 0,
    nama: "Beranda",
    tautan: "Beranda",
  },
  {
    id: 1,
    nama: "Keahlian Saya",
    tautan: "Keahlian",
  },
  {
    id: 2,
    nama: "Proyek Saya",
    tautan: "Proyek",
  },
  {
    id: 3,
    nama: "Kontak Saya",
    tautan: "Kontak",
  },
];

export const SosialTautan = [
  {
    id: 0,
    tautan: "https://instagram.com/fif_ovalle",
    ikon: <BsInstagram />,
  },
  {
    id: 1,
    tautan: "https://github.com/fifovalle",
    ikon: <BsGithub />,
  },
  {
    id: 2,
    tautan: "https://wa.me/+6281223652490",
    ikon: <BsWhatsapp />,
  },
];
