// ── VIDEO LINKS DIRECTOS (extraídos del Excel Gym) ─────────────────────────────
const VIDEO_LINKS = {
  "2 vallas + cajon 1p": "https://www.youtube.com/watch?v=cV4plDkSsPI&pp=ygUYaHVyZGxlIGp1bXAgdG8gYm94IDEgbGVn",
  "AFSM Hamstring banded prono": "https://youtu.be/wHd8jDVItYM",
  "AFSM hamstring Bridge": "https://www.youtube.com/watch?v=bKxbalKfN1c",
  "Apertura con mancuerna": "https://www.youtube.com/watch?v=Nhvz9EzdJ4U&pp=ygUTY2hlc3QgZHVtYmJlbGwgZmx5cw%3D%3D",
  "Aterrizaje desde cajon": "https://www.youtube.com/watch?v=dJjnL3qvX0c&pp=ygURc3RlcCBkcm9wIGxhbmRpbmc%3D",
  "Aterrizaje desde cajon 1p": "https://www.youtube.com/watch?v=Xt5ealMAWP4&pp=ygUhc2luZ2xlIGxlZyBsYW5kaW5nIGZyb20gc3RlcCA1MGNt",
  "Back extension Iso hold": "https://www.youtube.com/watch?v=REv46CYcIRE&pp=ygUXYmFjayBleHRlbnNpb24gaXNvIGhvbGQ%3D",
  "Bench Press Iso Push": "https://www.youtube.com/shorts/LXKwy423lW4",
  "Biceps Curl Db en Pared": "https://www.youtube.com/watch?v=dwJnlelh-Ss",
  "Biceps Curl Sentado Un brazo": "https://www.youtube.com/shorts/gVRX8Dh9pBs",
  "Biceps Curl TRX": "https://www.youtube.com/shorts/GEig9Ho7vPo",
  "Biceps Curl con Banda": "https://www.youtube.com/watch?v=0hZboUNuogA&pp=ygUYY3VybCBkZSBiaWNlcHMgd2l0aCBiYW5k",
  "Biceps Curl un brazo banco": "https://www.youtube.com/watch?v=enH6glsf-u4&pp=ygUXc2luZ2xlIGFybSBiaWNlcHMgY3VybCA%3D",
  "Bicho Muerto Con DB": "https://youtu.be/2wQ0UiciK7g",
  "Bicho Muerto Fit Ball": "https://www.youtube.com/shorts/GryKLAOPUG8",
  "Bicho Muerto Fit Ball mano/pies": "https://www.youtube.com/shorts/0d1I6DsY728",
  "Bicho Muerto Piernas extendidas": "https://www.youtube.com/watch?v=8WQf6BtJMko&pp=ygUWZGVhZCBidWcgbGVnIGV4dGVuc2lvbg%3D%3D",
  "Bicho Muerto con banda": "https://youtu.be/oVagCbMTaLI",
  "Bicho Muerto con discos": "https://www.youtube.com/shorts/sZKiyOeCXPQ",
  "Bicho muerto con banda en los pies": "https://youtu.be/SVRYIw-Nmfo",
  "Bicho muerto pared": "https://youtu.be/eQSfaW5-gLg",
  "Bird Dog Row": "https://www.youtube.com/watch?v=TASldKy5tak",
  "Bird dog": "https://youtu.be/vzU5xrs1gMQ",
  "Bound 1p alternado": "https://www.youtube.com/shorts/uJ05i0-NNlc?feature=share",
  "Bound Lateral Posicion dividida": "https://www.youtube.com/watch?v=CLxDEqky8SE&pp=ygUbaGFsZiBrbmVlbGluZyBib3VuZCBsYXRlcmFs",
  "Bound Lateral doble contacto": "https://www.youtube.com/watch?v=5VUg0QeOjpc&pp=ygUgYm91bmQgbGF0ZXJhbCBkb3VibGUgY29udGFjdCA0NSA%3D",
  "Bound lateral salto vertical": "https://www.youtube.com/shorts/ur0ug-U19ik?feature=share",
  "Broad Jump": "https://youtu.be/vPQv1gmrfUo",
  "Broad Jump con MB": "https://youtu.be/IbY-vQd8Glk",
  "Broad jump 1 p": "https://youtu.be/dxHJ5vxeWYQ",
  "Broad jump 1 p doble": "https://youtu.be/r75zl3QCra8",
  "Broad jump asistido": "https://www.youtube.com/watch?v=rLo1rOb-q_I&pp=ygUYYmFuZCBhc3Npc3RlZCBicm9hZCBqdW1w",
  "Broad jump banda": "https://youtu.be/sm_WuNdTUtQ",
  "Broad jump doble": "https://youtu.be/lXyiqwNA5ZU",
  "Broad jump single leg catch": "https://www.youtube.com/shorts/Apyu6v2Zdg4",
  "CMJ Rebound": "https://www.youtube.com/shorts/hjKQXQAhw5c?feature=share",
  "Camilla Cuadriceps": "https://www.youtube.com/watch?v=4ZDm5EbiFI8&pp=ygUVbWFjaGluZSBsZWcgZXh0ZW5zaW9u",
  "Chin ups": "https://youtu.be/nMngQ4nxUU0",
  "Chin ups asisitido banda": "https://youtu.be/Ss6Y9HpCdL0",
  "Chin ups excentrica": "https://www.youtube.com/watch?v=rILw6cx8JoA&pp=ygUdYWNlbnR1YXRlZCBlY2NlbnRyaWMgY2hpbiB1cHPSBwkJxQoBhyohjO8%3D",
  "Chop con banda": "https://youtu.be/6K_LpbTdseA",
  "Chop split Squat": "https://www.youtube.com/shorts/wMrtHf2VkfA",
  "Clamshell": "https://youtu.be/FhgJNgvyVVU",
  "Clamshell con banda": "https://youtu.be/ta5L-oWqNqA",
  "Clamshell con disco": "https://www.youtube.com/shorts/hxOLcIFa7_I",
  "Clean Pull Trap Bar": "https://youtu.be/TKFAYzW08VA",
  "Copenaghe Plank Nivel 1": "https://www.youtube.com/watch?v=VxFQAMzRaQU&pp=ygUQY29wZW5oYWdlbiBwbGFuaw%3D%3D",
  "Copenaghe Plank Nivel 2": "https://www.youtube.com/watch?v=vFMCZiYSXVg&pp=ygUYY29wZW5oYWdlbiBwbGFuayBsZXZlbCAy",
  "Copenaghe plank level 3": "https://youtu.be/eiSBci8icnc",
  "Crunch": "https://youtu.be/UYnbT0sXNfo",
  "Crush Grip Buceps Curl": "https://youtu.be/at2g_OGyuDE",
  "Cuban Press": "https://www.youtube.com/watch?v=XpcOM9Np9LQ&pp=ygUUY3ViYW4gcHJlc3MgZHVtYmJlbGw%3D",
  "Curl Isquios con banda": "https://www.youtube.com/watch?v=yJMdgnhtKgI&pp=ygUbYmFuZGVkIHByb25lIGhhbXN0cmluZyBjdXJs",
  "Curl de Biceps DB Alternado": "https://youtu.be/o2Tma5Cek48",
  "Curl de Biceps Martillo Iso": "https://www.youtube.com/watch?v=dMwgojf7PJk&pp=ygUlaGFtbWVycyBiaWNlcGMgY3VybCBvbmUgYXJtIGlzb21ldHJpYw%3D%3D",
  "Curl de Biceps W": "https://youtu.be/b8nB33AAYJE",
  "Curl de Biceps con Barra": "https://www.youtube.com/watch?v=N5x5M1x1Gd0&pp=ygUTYmFyYmVsbCBiaWNlcHMgY3VybA%3D%3D",
  "Curl de Biceps martillo": "https://youtu.be/fM0TQLoesLs",
  "Curl de Biceps martillo alternado": "https://youtu.be/h46ccQsXDEk",
  "Curl de biceps inclinado": "https://youtu.be/aG7CXiKxepw",
  "Curl de isquio excentrico fitball": "https://youtu.be/0B6tRW3l7KE",
  "Curl de isquio fitball 1p": "https://www.youtube.com/shorts/GMF0T1wQtTs",
  "Curl de isquio slide": "https://youtu.be/UaecXxAgsKA",
  "Curl excentrico isquio slide": "https://youtu.be/PxSjp46Vhzk",
  "Curl excentrico isquio slide 1p": "https://youtu.be/SLRv1VZIpQs",
  "Curl excentrico isquio slide 1p (2)": "https://www.youtube.com/shorts/4gyBsdNG5Pk",
  "Curl isquio con Fitball": "https://youtu.be/U4GV6YY-Op0",
  "Curl isquio con TRX": "https://youtu.be/SGAosRdEjyg",
  "Curl nordico": "https://youtu.be/NfBGKhjedD8",
  "DB Press Inclinado 1 1/4": "https://youtu.be/-M_ABIyO1e8",
  "Deficit Push Ups": "https://www.youtube.com/shorts/xE5y-QW9Yts",
  "Devil Press": "https://www.youtube.com/watch?v=zlqEtAUds-I",
  "Dips": "https://youtu.be/JR0PUrVAFyA",
  "Dips Asistidos Banda": "https://youtu.be/lYNJ292qeu8",
  "Dips Asistidos con Cajon": "https://www.youtube.com/watch?v=23gJQsCMW9Y&pp=ygURYXNzaXN0ZWQgZGlwcyBib3g%3D",
  "Dips Banco": "https://youtu.be/XXvuYGCxpkk",
  "Dips con pies elevados": "https://www.youtube.com/watch?v=skTeMME0Mw8",
  "Double KB Squat Press": "https://www.youtube.com/watch?v=71rUo4KBmvU&pp=ygUQa2Igc3F1YXQgKyBwcmVzcw%3D%3D",
  "Drag shoulders Taps": "https://youtu.be/YqjEYKJYwIU",
  "Drop Jump": "https://youtu.be/LrZuW-sJPBo",
  "Drop Jump + Valla": "https://www.youtube.com/shorts/fTChbtnLR3w",
  "Drop Jump Split Stance": "https://www.youtube.com/watch?v=UubSPX-tawM&pp=ygUWc3BsaXQgc3RhbmNlIGRyb3AganVtcA%3D%3D",
  "Drop Jump al cajon": "https://youtu.be/Pppxa0EjM-w",
  "Drop Jump con salto horizontal": "https://youtu.be/rDaKt2UF4cM",
  "Drop Push Ups": "https://www.youtube.com/shorts/ZyvKuPUIm4s",
  "Drop jump bound lateral 1p": "https://youtu.be/YfZVdfkVxZM",
  "Espinales con banda OH": "https://www.youtube.com/watch?v=Sn70zPVwTGk",
  "Estocada Laeral Estricta": "https://www.youtube.com/shorts/fFecTh8nbKg",
  "Estocada hacia adelante y atras": "https://www.youtube.com/watch?v=ZNVaG1qOH7A",
  "Estocada lateral Barra": "https://youtu.be/3M9Z5lh-Qfc",
  "Estocada lateral Goblet": "https://youtu.be/6DMXBtF_Spg",
  "Estocada lateral Landmine": "https://youtu.be/VTtLrBvHoJ8",
  "Estocada lateral slide": "https://www.youtube.com/watch?v=2rbLIlqnNhg&pp=ygUVc2xpZGVyIGxhdGVyYWwgbHVuZ2Vz",
  "Estocadas": "https://youtu.be/9gglI77Kzq8",
  "Estocadas Posteriores Barra": "https://youtu.be/fFdI96yZI18",
  "Estocadas Posteriores DB": "https://youtu.be/Q2k3kYbtOcI",
  "Estocadas Posteriores TRX": "https://www.youtube.com/watch?v=vS8ihPgpRDk&pp=ygUTcmV2ZXJzZSBsdW5ndWVzIHRyeA%3D%3D",
  "Estocadas caminadas kb": "https://youtu.be/OFSepehKEsg",
  "Extensive L Hop": "https://youtu.be/3K2Eeqe3efU",
  "Extensive Lateral Hop": "https://www.youtube.com/shorts/-H3ahAMkrE8",
  "Extensive V Hop": "https://youtu.be/E7V0JHfFJ9I",
  "Extensive W Hop": "https://youtu.be/szPpNZeRxF8",
  "Face Pull DB en Banca": "https://www.youtube.com/watch?v=a_GcYbTILRY",
  "Face pull banda": "https://youtu.be/5jgKj8ColLg",
  "Floor Press 1b DB": "https://youtu.be/mzd-RUIZUvc",
  "Gemelos con Barra": "https://www.youtube.com/shorts/hWn1u6qwu6U?feature=share",
  "Gemelos con cajon unilateral": "https://www.youtube.com/shorts/uZABLPh95JU?feature=share",
  "Gemelos con step unilateral": "https://youtu.be/RGPSphSpAQY",
  "Gemelos en Step bilateral": "https://www.youtube.com/shorts/Sz5J4TkxoAw",
  "Gemelos posicion carrera": "https://www.youtube.com/shorts/1TS3P8j3aHA",
  "Halos": "https://youtu.be/wJcmanVh5EE",
  "Halos KB Arrodillado": "https://www.youtube.com/watch?v=A2jT86tgnII&pp=ygUWaGFsZiBrbmVlbGluZyBoYWxvcyBrYg%3D%3D",
  "Hip Flexion Band Lying": "https://www.youtube.com/shorts/Q87eb6svGfw",
  "Hip Thrust 1 pierna": "https://youtu.be/3KKVWOATE-Q",
  "Hip Thrust 1 pierna DB": "https://youtu.be/KW7yo5x7-HI",
  "Hip Thrust Barra": "https://youtu.be/5S8SApGU_Lk",
  "Hip Thrust explosivo 1p": "https://www.youtube.com/watch?v=7FFobXHbMbU&pp=ygUUZXhwbG9zaXZlIGhpcCB0aHJ1c3Q%3D",
  "Hip Thrust una pierna barra": "https://youtu.be/nEppV-EZzvA",
  "Hollow + Press": "https://www.youtube.com/shorts/sXq0-kIeoZo",
  "Hollow + Press 1brazo": "https://www.youtube.com/watch?v=D82M_YDEGJ8&pp=ygUVaG9sbG93IHByZXNzIGV4ZXJjaXNl",
  "Hollow Rock KB": "https://youtu.be/6VwU5YeonHY",
  "Hombro Rotacion Externa Banda": "https://www.youtube.com/shorts/4n_9LOjplOE",
  "Hop + bound lateral vallas": "https://www.youtube.com/shorts/Pg0VrYwa0SQ",
  "Hop lateral + salto al cajon 1p": "https://www.youtube.com/shorts/DhPOiZNMnzA",
  "Incline DB Triceps Kickback": "https://www.youtube.com/watch?v=kR9mqN6rxpQ",
  "Iso Catch Rodilla": "https://www.youtube.com/shorts/RmOnn8qDoKA?feature=share",
  "Iso Catch rodilla DB": "https://www.youtube.com/shorts/F_uRD2V4I6I?feature=share",
  "Iso Hold Bilateral Barra": "https://www.youtube.com/shorts/kEFQ--PPp8Y",
  "Iso Hold Hamstring": "https://www.youtube.com/watch?v=0P7GXkQr4T4&pp=ygUZaXNvIGhvbGQgaGFtc3RyaW5nIGdsdXRlcw%3D%3D",
  "Iso Hold Hamstring 1p": "https://www.youtube.com/shorts/Fd3sFl9Hw4Y?feature=share",
  "Iso Hold Tobillo Posicion Carrera": "https://www.youtube.com/shorts/SUkEnBHv25o",
  "Iso Hold Wall sit": "https://www.youtube.com/watch?v=UiBLj-YUD7o&pp=ygURaXNvIGhvbGQgd2FsbCBzaXQ%3D",
  "Iso Hold Wall sit 1p": "https://www.youtube.com/watch?v=7Tgb8wVzbcY&pp=ygUcaXNvIGhvbGQgd2FsbCBzaXQgc2luZ2xlIGxlZw%3D%3D",
  "Iso Hold db split squat": "https://www.youtube.com/shorts/QJDXBIQdV7Y",
  "Iso Hold gemelo 1p": "https://www.youtube.com/shorts/M8OkXQ_5W7g",
  "Iso Push Rodilla": "https://youtu.be/ITMHpD19ZqI",
  "Iso Push Split Squat": "https://www.youtube.com/watch?v=6EE4P0PiBFQ&pp=ygUUSXNvIFB1c2ggU3BsaXQgU3F1YXQ%3D",
  "Iso Push tobillo": "https://youtu.be/UadbXzrO3AU",
  "Iso catch cadera": "https://www.youtube.com/shorts/BuUCn8nua1o",
  "Iso catch tobillo": "https://youtube.com/shorts/4Xoj6zDoCMA?si=Dg8jGLqoItJFOjzP",
  "Iso hold Rodilla": "https://youtu.be/DAIjxDlSQbo",
  "Iso hold cadera": "https://youtu.be/EBZLQjam1sA",
  "Iso hold pared gemelos": "https://www.youtube.com/shorts/p1PFF8U6xq0?feature=share",
  "Iso hold tobillo 1p soleo": "https://youtube.com/shorts/XvlwQ_qgkxM?si=2fOiJQvPvOBNV9IY",
  "Iso push cadera": "https://youtu.be/h3wq8YZ7PNM",
  "Iso push lateral wall": "https://www.youtube.com/shorts/QCraQIGNsYw",
  "Iso switch cadera": "https://youtu.be/h1RZIyFcXHs",
  "Iso switch tobillo": "https://youtube.com/shorts/68myTQgY6Ok?si=rsSEgHSZfZe18Hcx",
  "Jimmy Jumps": "https://youtu.be/bfYjukaljNE",
  "KB Swing": "https://www.youtube.com/watch?v=1cVT3ee9mgU&pp=ygUIa2Igc3dpbmc%3D",
  "Kb Biceps Curl": "https://www.youtube.com/watch?v=6Vq_5DJKPcI&pp=ygUTYmljZXBzIGN1cmwgd2l0aCBrYg%3D%3D",
  "L Crunch": "https://youtu.be/2eCLS_biLqM",
  "Landmine Rotation": "https://youtu.be/mL6SKV4f99U",
  "Landmine zercher skater squat": "https://www.youtube.com/shorts/JVmLjwA-wg8",
  "Lanzamiento MB OH arrodillado": "https://youtu.be/3G_Fmprk5Ec",
  "Lanzamiento MB Supino Overhead": "https://youtu.be/2vKjPG1udvM",
  "Lanzamiento Slam arrodillado": "https://youtu.be/n1Cb1UOLjCM",
  "Lanzamiento Slam rotacional": "https://youtu.be/_Elj1sxF2T8",
  "Lanzamiento frontal arrodillado": "https://youtu.be/xDiPtcSuofk",
  "Lanzamiento frontal parado": "https://youtu.be/e-zHTwXA8mE",
  "Lanzamiento lateral": "https://youtu.be/Cd_yWuuKElI",
  "Lanzamiento rotacional": "https://youtu.be/_OSWDMmflNs",
  "Lanzamiento slam parado": "https://youtu.be/DMrxbUgoZTg",
  "Lanzamiento vertical acostado": "https://youtu.be/xARgMm1c2hs",
  "Lanzamiento vertical acostado reactivo": "https://youtu.be/wuC_WZCU3rc",
  "Maquina de Isquios": "https://www.youtube.com/watch?v=SbSNUXPRkc8&pp=ygUXaGFtc3RyaW5nIG1hY2hpbmUgY3VybCA%3D",
  "Marcha Granjero Bottom up": "https://www.youtube.com/watch?v=qTK5ak5bQ-8",
  "Med Ball Push Up": "https://www.youtube.com/watch?v=-cqo-oailwk&pp=ygURbWVkIGJhbGwgcHVzaCB1cHM%3D",
  "Mini Band Abduccion banda Split": "https://www.youtube.com/shorts/j1n2H2JNVuc",
  "Monkey row": "https://youtu.be/llm37Rk-1gE",
  "OCI Trap Bar Jump": "https://youtu.be/o4nw75xG29w",
  "Oci Split Squat Trap Bar": "https://youtu.be/u3NJUx3EfX8",
  "Palof Press Dinamico": "https://www.youtube.com/shorts/5Cx9dncLohs",
  "Palof Press con banda": "https://youtu.be/BvSB4tvgLGc",
  "Palof Press con rotacion": "https://youtu.be/x8MogJxW1-E",
  "Palof Press una pierna": "https://www.youtube.com/watch?v=lpAFBp4GIVI&pp=ygUXc2luZ2xlIGxlZyBwYWxsb2YgcHJlc3M%3D",
  "Palof press arrodillado": "https://youtu.be/0ZLzc5jvNIg",
  "Patada de Burro": "https://youtu.be/JPmbMOu4IYw",
  "Pendlay Row": "https://youtu.be/ezrZnmjZTR4",
  "Pendlay Row trap bar": "https://www.youtube.com/shorts/0SUXQfgtj-o",
  "Peso Muerto Rumano Barra": "https://youtu.be/bT5OOBgY4bc",
  "Peso Muerto Rumano Doble KB": "https://www.youtube.com/watch?v=Xa8hHIwOHe4&pp=ygUjcm9tYW5pYW4gZGVhZGxpZnQgZG91YmxlIGtldHRsZWJlbGw%3D",
  "Peso Muerto Rumano KB": "https://youtu.be/mVSgE9S0G4w",
  "Peso Muerto Rumano LD": "https://www.youtube.com/watch?v=jpQd4dNm6E4&pp=ygUacnVtYW5pYW4gZGVhZGxpZnQgbGFuZG1pbmU%3D",
  "Peso Muerto S-Stance KB": "https://youtu.be/RFuCfiMfJ1w",
  "Peso Muerto Trap Bar": "https://youtu.be/FYx76NSijfU",
  "Peso Muerto Trap Bar c/ banda": "https://www.youtube.com/watch?v=9XliRg3O56o&pp=ygUodHJhcCBiYXIgZGVhZGxpZnQgd2l0aCByZXNpc3RhbmNlIGJhbmRzIA%3D%3D",
  "Peso Muerto Trap Bar split stance": "https://www.youtube.com/shorts/vhSxd72Z040",
  "Peso Muerto una pierna": "https://youtu.be/p9REC-yBeBU",
  "Peso muerto Convencional": "https://youtu.be/yPqv3ejnZvc",
  "Peso muerto Convencional KB": "https://www.youtube.com/watch?v=4m288BpgfcQ",
  "Peso muerto Landmine": "https://youtu.be/WkmLb2JxtKA",
  "Peso muerto S-Stance barra": "https://youtu.be/UDKuhQqMIBs",
  "Peso muerto rumano Split Stance pared": "https://www.youtube.com/watch?v=ulv3Mdsjx3s",
  "Peso muerto trap bar split banda": "https://www.youtube.com/shorts/2Hcsmxgsbhw?feature=share",
  "Peso muerto una pierna KB": "https://youtu.be/-w3gokw_s7w",
  "Peso muerto una pierna LD": "https://youtu.be/7r2gUum_DoQ",
  "Peso muerto una pierna barra": "https://youtu.be/-StB7VaTWos",
  "Pike push ups": "https://youtu.be/iEn2EdmP4V4",
  "Pinguin March": "https://www.youtube.com/watch?v=wT86wAdsBr8&pp=ygUWcGVuZ3VpbiBtYXJjaCBleGVyY2lzZQ%3D%3D",
  "Piston + Prowler": "https://player.vimeo.com/video/397662662?byline=0&amp;amp;badge=0&amp;amp;portrait=0&amp;amp;title=0",
  "Plancha Psoas March": "https://youtu.be/9RVql3EcfUk",
  "Plancha Walk out": "https://www.youtube.com/watch?v=c-q0gvzw-U0",
  "Plancha alta con fitball": "https://youtu.be/u3fRI_CneBg",
  "Plancha alta paso KB": "https://youtu.be/uWn2uvYl-lY",
  "Plancha alta swiss ball": "https://www.youtube.com/shorts/kZS4GKnLaTA",
  "Plancha alta toque hombros": "https://youtu.be/8rgurWd-PB8",
  "Plancha con marcha": "https://youtu.be/Uw83y7v63W8",
  "Plancha frontal Abd Banda": "https://www.youtube.com/shorts/xEutwUArQsk",
  "Plancha frontal con banda": "https://youtu.be/ZyIFMV20a-w",
  "Plancha frontal con fitball": "https://youtu.be/NTjikXOIR3k",
  "Plancha lateral": "https://youtu.be/a4TdTXDNO1Y",
  "Plancha lateral Adduccion": "https://www.youtube.com/shorts/Nz13HOcmBuo",
  "Plancha lateral abd banda": "https://www.youtube.com/shorts/Gwlp_wL1wPo",
  "Plancha lateral con remo": "https://youtu.be/0iIR5wsTD3I",
  "Plancha lateral con rotacion": "https://youtu.be/RXlHKL_NEN8",
  "Plancha lateral corta": "https://youtu.be/wSXlpIr6dqQ",
  "Plancha lateral rodilla flex": "https://youtu.be/Zuc4Wie5n9E",
  "Plate Push up": "https://www.youtube.com/watch?v=G0hZD0DGeTA&pp=ygUOcGxhdGUgcHVzaCB1cHM%3D",
  "Pogo Jump single Leg disco": "https://www.youtube.com/shorts/zi7pvalOoXc",
  "Pogos Jump asistidos": "https://youtu.be/CaIAbKHbrTo",
  "Pogos jump": "https://youtu.be/wa1ClvLqSHo",
  "Pogos resistidos banda": "https://www.youtube.com/shorts/2WU8dKoaTTo",
  "Posicion de oso estricto": "https://youtu.be/msgb84j1YKk",
  "Posicion de oso paso KB": "https://youtu.be/7UDhU7w881c",
  "Posicion oso tocando hombros": "https://youtu.be/YN3mZ56Z2w0",
  "Prensa 45 °": "https://www.youtube.com/watch?v=q4W4_VJbKW0&pp=ygUUbGVnIHByZXNzIDQ1IG1hY2hpbmU%3D",
  "Press Arnold Sentado DB": "https://www.youtube.com/watch?v=TsduLWuhlFM&pp=ygUdc2VhdGVkIGJhcmJlbGwgc2hvdWxkZXIgcHJlc3M%3D",
  "Press Banca 1 brazo": "https://youtu.be/6tbjm5FjhB0",
  "Press Banca Banda": "https://www.youtube.com/shorts/njknTOediAQ",
  "Press Banco Barra": "https://youtu.be/ejI1Nlsul9k",
  "Press Frances Barra": "https://www.youtube.com/shorts/nMu3bchaip4",
  "Press Frances DB": "https://youtu.be/t5qf9IkIG_8",
  "Press Frances KB 90/90": "https://youtu.be/yHtjazNWpIo",
  "Press Frances W": "https://youtu.be/1EiEeyfgi8U",
  "Press Landmine con banda": "https://www.youtube.com/shorts/A1GJsPFk4-A?feature=share",
  "Press Ld 1 brazo arrodillado": "https://www.youtube.com/watch?v=ORoOn93dnh4&pp=ygUcUHJlc3MgTGFuZG1pbmUgaGFsZiBrbmVlbGluZw%3D%3D",
  "Press Ld 1 brazo arrodillado c/banda": "https://youtu.be/_I6wztdY3Hs",
  "Press Ld Continuo Push press": "https://youtu.be/Is3oo6MnBSI",
  "Press Militar + Biceps martillo": "https://www.youtube.com/shorts/iNQiCzliH3s",
  "Press Militar Barra": "https://youtu.be/G2qpTG1Eh40",
  "Press Militar con KB": "https://www.youtube.com/watch?v=SoZN6itNB0w",
  "Press banca DB": "https://www.youtube.com/watch?v=ZaDlbm8E8Tg&pp=ygUVZHVtYmJlbGxzIGJlbmNoIHByZXNz0gcJCccJAYcqIYzv",
  "Press banca Inclinada Barra": "https://youtu.be/2jFFCy8JBU8",
  "Press banca Inclinada DB": "https://youtu.be/oZVCBM9f8Eo",
  "Press banca Inclinada DB alterno": "https://youtu.be/KwKL7ZfYD_0",
  "Press banca agarre cerrado": "https://www.youtube.com/watch?v=DzA2xZhDGeo&pp=ygUmY2xvc2UgZ3JpcCBiYXJiZWxsIGJlbmNoIHByZXNzIHRyaWNlcHM%3D",
  "Press banca alternado DB": "https://youtu.be/wOa4YyxyiKI",
  "Press frances sentado": "https://youtu.be/tpAWX6mmyOE",
  "Press landmine pliometrico": "https://www.youtube.com/shorts/iMJQGQKvtl8?feature=share",
  "Press militar 1 brazo": "https://youtu.be/gC79JHUadz4",
  "Press militar 1 brazo arrodillado": "https://youtu.be/4DUIY95jX6Y",
  "Press militar DB": "https://youtu.be/pQDrcNoDNVM",
  "Press militar DB sentado": "https://youtu.be/R-RTgOxrj88",
  "Prowler Sled Bounds": "https://youtu.be/wDXVWkgVXJI",
  "Prowler Sled March": "https://youtu.be/Xft-VhdOj2o",
  "Puente 1p con pelota entre rod": "https://www.youtube.com/shorts/6YizMcEe0Vk?feature=share",
  "Puente Isquio Barra": "https://www.youtube.com/shorts/8Q-jDVlv8TU",
  "Puente gluteo": "https://youtu.be/wMEoGwkk650",
  "Puente gluteo 1 p  barra": "https://youtu.be/GNY0RKIvkH0",
  "Puente gluteo 1P LD": "https://www.youtube.com/watch?v=NhMZ2bpgaBc&pp=ygUgZ2x1dGUgYnJpZGdlIHNpbmdsZSBsZWcgbGFuZG1pbmU%3D",
  "Puente gluteo 1p": "https://youtu.be/tiZWu8faIkM",
  "Puente gluteo 1p DB": "https://youtu.be/1u5ZDhtYC8s",
  "Puente gluteo Db": "https://youtu.be/JpDDoINkrog",
  "Puente gluteo barra": "https://youtu.be/6EhYj5eSngY",
  "Puente gluteo walkout": "https://youtu.be/GcV2LB0qqnY",
  "Puente isquio": "https://www.youtube.com/watch?v=ZBeBubBYtgA&pp=ygUZZWxldmF0ZWQgaGFtc3RyaW5nIGJyaWRnZQ%3D%3D",
  "Puente isquio 1 p": "https://youtu.be/ZmV1K0JYdmo",
  "Puente isquio march": "https://youtu.be/Yqc8rKg_fz0",
  "Pull Down Banda": "https://youtu.be/X_E7iiSsklI",
  "Pull up": "https://youtu.be/jgFel4wZl3I",
  "Pull up Isometrico": "https://www.youtube.com/shorts/mJsnSauh9Jo",
  "Pull up asisitido banda": "https://youtu.be/TqvC3Drrxvg",
  "Push Up Feet on the ball": "https://www.youtube.com/watch?v=riL12EBUQEY&pp=ygURbWVkIGJhbGwgcHVzaCB1cHM%3D",
  "Push Ups": "https://www.youtube.com/shorts/NsAY0yImO8w?feature=share",
  "Push Ups 1 brazo asisitido": "https://youtu.be/3i0Bed4xhiA",
  "Push up elevado rack": "https://youtu.be/Ut7FxCTPYQc",
  "Push up explosivo": "https://youtu.be/QcAAKuEgYjw",
  "Push up explosivo asistid": "https://www.youtube.com/shorts/Oe7WHC2vu20?feature=share",
  "Push ups TRX": "https://youtu.be/u2RhR8WNah0",
  "Push ups diamante": "https://youtu.be/XtU2VQVuLYs",
  "Push ups rodillas": "https://youtu.be/Ahf4t9ky3d8",
  "Push ups triceps rack": "https://www.youtube.com/shorts/S3J8M8eOeBo",
  "Rack chin ups": "https://youtu.be/kNqjnUemH34",
  "Rack pull up": "https://www.youtube.com/shorts/M-Yu0Tukf14",
  "Remo 1 brazo": "https://youtu.be/ZRSGpBUVcNw",
  "Remo 1b 2 ptos elevacion": "https://youtu.be/A8UPDHCYQA0",
  "Remo 1b landmine": "https://youtu.be/XBb5AClr8L8",
  "Remo Invertido Barra": "https://youtu.be/0AsxBmXeOIo",
  "Remo Invertido explosivo": "https://www.youtube.com/shorts/4tqKMvue3SU?feature=share",
  "Remo Split Stance": "https://youtu.be/5wxJNcw3jqM",
  "Remo TRX 1 brazo": "https://www.youtube.com/shorts/W8iyN7FUKcU",
  "Remo Trx pies elevados": "https://www.youtube.com/watch?v=EFVV2DnOHsk&pp=ygUVdHJ4IHJvdyBmZWV0IGVsZXZhdGVk",
  "Remo al menton": "https://youtu.be/FMhKUd0BlB4",
  "Remo al menton DB": "https://youtu.be/fy-Ou88ruAk",
  "Remo al menton banda": "https://youtu.be/uCqMWZ-55FQ",
  "Remo con DB": "https://youtu.be/6gvmcqr226U",
  "Remo con DB + Banda": "https://www.youtube.com/watch?v=vTPQT70gWFA",
  "Remo con banda": "https://www.youtube.com/watch?v=JP2xq33lNF0&pp=ygULYmFuZGVkIHJvdyA%3D",
  "Remo con barra prono": "https://youtu.be/UNyeMXO481I",
  "Remo con barra supino": "https://youtu.be/mTQ_qg37MJk",
  "Remo con manubrio ld": "https://www.youtube.com/watch?v=_bFf2_7iPNQ&pp=ygUZcmVtbyBsYW5kbWluZSBjb24gYWdhcnJlIA%3D%3D",
  "Remo en Banco KB": "https://www.youtube.com/watch?v=HHWBe67rtdw&pp=ygUeYmVuY2ggcHVsbCByb3cgd2l0aCBrZXR0bGViZWxs",
  "Remo en Plancha": "https://youtu.be/rSc1pmDEhZg",
  "Remo en Polea Alta": "https://youtu.be/tF5H42Oi1nU",
  "Remo en banco": "https://youtu.be/GzslS3rTqds",
  "Remo en plancha 1b": "https://www.youtube.com/shorts/hsuJInvcWUg",
  "Remo explosivo trineo": "https://youtu.be/jbPxIkGw3UA",
  "Remo invertido con TRX": "https://youtu.be/IEky4NL3LLQ",
  "Remo trx 1 brazo": "https://www.youtube.com/shorts/W8iyN7FUKcU?feature=share",
  "Remo vertical banda": "https://www.youtube.com/shorts/tlvIiG76ue4?feature=share",
  "Remo vertical con banda 1b": "https://www.youtube.com/shorts/-OMEP-vD40s?feature=share",
  "Roll con fitball pies": "https://www.youtube.com/shorts/kZS4GKnLaTA",
  "Roll out Barbell": "https://youtu.be/3C1TRMJveXo",
  "Roll out Fitball": "https://youtu.be/zeSD85M2t6c",
  "Roll out TRX": "https://www.youtube.com/shorts/uMWklj-3wRw",
  "Rotational bound": "https://youtu.be/B93_JkiPQkA",
  "Russian Twist": "https://www.youtube.com/watch?v=59_aq7COfts&pp=ygUIa2IgdHdpc3Q%3D",
  "Salto 1p al cajon": "https://www.youtube.com/watch?v=L0zdoG31yXg&pp=ygUTc2luZ2xlIGxlZyBib3gganVtcA%3D%3D",
  "Salto 1p desde cajon": "https://www.youtube.com/watch?v=hnumclloQj8&pp=ygUWc2luZ2xlIGxlZyBzZWF0ZWQganVtcA%3D%3D",
  "Salto Reactivo con Barra": "https://www.youtube.com/watch?v=0Qt-yL4EY2g&pp=ygUTUmVhY3RpdmUganVtcCBzcXVhdA%3D%3D",
  "Salto Resistido": "https://youtu.be/Go5y7mODMyU",
  "Salto Vallas + cajon": "https://youtu.be/AL6CTDXaHZc",
  "Salto Vertical 1p + bound lateral": "https://www.youtube.com/shorts/TssEUfUSFrU",
  "Salto Vertical asistido 1p": "https://www.youtube.com/shorts/kVmRCSk6-8s",
  "Salto Vertical desde Cajon": "https://www.youtube.com/watch?v=OOG5peEdHyw&pp=ygUVc2VhdGVkIHZlcnRpY2FsIGp1bXAg",
  "Salto al cajon": "https://youtu.be/W5QzqIbEWvk",
  "Salto contramovimiento": "https://youtu.be/rSaR_Aq38SQ",
  "Salto vertical asisitido con banda": "https://youtu.be/K_rI3GQSRko",
  "Saltos Continuos Trap Bar": "https://www.youtube.com/watch?v=dwRPLD-_QHU",
  "Saltos Vallas": "https://youtu.be/pPnrwBKa3Mo",
  "Saltos laterales": "https://youtu.be/iBa4Auv_5nU",
  "Saltos vallas mediales 1p": "https://www.youtube.com/shorts/QLeNCrYMdIs",
  "Seated Lateral Jump": "https://youtu.be/_Bvxdc1vOaY",
  "Seated broad jump": "https://youtu.be/XQRNXImn1tI",
  "Seated broad jump 1p": "https://www.youtube.com/shorts/Dd2uIrS5NyY",
  "Sentadilla 1p excentrica": "https://www.youtube.com/shorts/Rnv0_Jyphfs",
  "Sentadilla Bulgara Barra": "https://youtu.be/vLo49m8GUo4",
  "Sentadilla Bulgara KB": "https://youtu.be/r3jzvjt-0l8",
  "Sentadilla Bulgara Peso Corporal": "https://www.youtube.com/watch?v=GBAjckgUo_4&pp=ygUgYm9keXdlaWdodCBidWxnYXJpYW4gc3BsaXQgc3F1YXQ%3D",
  "Sentadilla Goblet": "https://www.youtube.com/watch?v=PUIsSIzvbZs&pp=ygUUc2VudGFkaWxsYSBnb2JsZXQga2I%3D",
  "Sentadilla Inercial": "https://www.youtube.com/shorts/v1Oq_O22O1s?feature=share",
  "Sentadilla Pistol Cajon": "https://youtu.be/3HoFgXEICS8",
  "Sentadilla Pistol KB": "https://www.youtube.com/watch?v=vI4bR9R7aiY&pp=ygUhYm94IHBpc3RvbCBzcXVhdHMgd2l0aCBrZXR0bGViZWxs",
  "Sentadilla Pistol Trx": "https://youtu.be/_l9MEstzm0g",
  "Sentadilla Resistencia Acomodada": "https://www.youtube.com/shorts/anQKJlNFa3Y",
  "Sentadilla Skater Trx": "https://youtu.be/YyBeT4WWBk4",
  "Sentadilla Split Barra": "https://youtu.be/ZIUZyNDoJfE",
  "Sentadilla Split KB": "https://youtu.be/zWDaU3KIKQ4",
  "Sentadilla Split Landmine": "https://youtu.be/rD7QCqe4g0k",
  "Sentadilla Split con Trap Bar": "https://youtu.be/bfqAEssKvsg",
  "Sentadilla Zumo Cajon": "https://www.youtube.com/watch?v=tF0OTRWoZAk&pp=ygUaYm94IGVsZXZhdGVkIHp1bW8gc3F1YXQga2I%3D",
  "Sentadilla Zumo LD": "https://www.youtube.com/watch?v=YprfO6I_UQA",
  "Sentadilla bulgara oci": "https://youtu.be/YWvrM2dues4",
  "Sentadilla cajon Resistencia Acom": "https://www.youtube.com/watch?v=1DEXxzqw9YI&pp=ygUhYmFyYmVsbCBib3ggc3F1YXQgZXhwbG9zaXZlIGJhbmRz",
  "Sentadilla con barra": "https://youtu.be/Rvy12jFLBFo?si=5C9ferFVG8vRgM8r",
  "Sentadilla con cajon": "https://youtu.be/7iw2gLZKZ0w",
  "Sentadilla con fitball": "https://youtube.com/shorts/oO0s9D86dAQ?si=x1OCIWxBHTAwaH4o",
  "Sentadilla con salto DB": "https://www.youtube.com/shorts/l0H7Qd1CYSo?feature=share",
  "Sentadilla con salto barra": "https://youtu.be/-G-fojVezkc",
  "Sentadilla con salto barra cajon": "https://www.youtube.com/shorts/LhcJGRNWoxY?feature=share",
  "Sentadilla por delante": "https://youtu.be/HHxNbhP16UE",
  "Sentadilla skater": "https://youtu.be/lDk35dv02hM",
  "Sentadilla zumo Kb": "https://www.youtube.com/watch?v=WepILpVDm4Y&pp=ygUNc3VtbyBzcXVhdCBrYg%3D%3D",
  "Sentadilla zumo con deficit": "https://www.youtube.com/watch?v=9tis3FKZvIo&pp=ygUNc3VtbyBzcXVhdCBrYg%3D%3D",
  "Side hop to lateral bound": "https://youtu.be/5maGq-w-4AI",
  "Skater con med ball": "https://youtu.be/IKCYooxLToo",
  "Skater hop extensivos": "https://youtu.be/CaN4zfIPyXU",
  "Skater hop intensivos": "https://youtu.be/gS4F_YrwZVs",
  "Sled Push Press": "https://www.youtube.com/shorts/EgiQRkVWRq8",
  "Soleo Calf Rises": "https://www.youtube.com/watch?v=CdeIHN4fMYE&pp=ygURc29sZXVzIGNhbGYgcmlzZXM%3D",
  "Soleo elevacion 1p": "https://youtu.be/6snp9ll2cgQ",
  "Spider Curl de biceps": "https://youtu.be/9Dd8iiEUs_Q",
  "Split Jump": "https://www.youtube.com/watch?v=tnkSwD0XmpA&pp=ygUhY291bnRlcm1vdmVtZW50IHNwbGl0IHNxdWF0ICBqdW1w",
  "Split Jump Barra": "https://www.youtube.com/shorts/9eA19lR4pAM",
  "Split Jump DB": "https://www.youtube.com/shorts/l3zpYh46GBg",
  "Split Squat soleo": "https://www.youtube.com/shorts/iqkCrlM3uD0",
  "Split squat iso hold gemelo": "https://youtu.be/T9e18_KE1MI",
  "Squat Jump": "https://youtu.be/s07ZL5XfpEI",
  "Step Down bajo": "https://www.youtube.com/shorts/C06KfKS3CPs",
  "Step down": "https://youtu.be/NkBk9iRwmTA",
  "Subida al Cajon Barra": "https://youtu.be/eRORoA6n_QQ",
  "Subida al cajon ( gluteo )": "https://www.youtube.com/shorts/Ey2H3-zmzSk",
  "Subida al cajon DB": "https://youtu.be/37tVohr7LcE",
  "Superman": "https://www.youtube.com/shorts/pvbURmMVjkw",
  "Superman Alternado": "https://www.youtube.com/shorts/RZ1Kf9_L_nI",
  "Superman Isometrico": "https://youtu.be/v4nNlF3WDs0",
  "Trap Bar Jump": "https://youtu.be/XSa0HIJxhnQ",
  "Trap Bar Jump cmj": "https://youtu.be/pqJx_8P6_os",
  "Trap bar split jump": "https://youtu.be/mMAB6ffUalQ",
  "Triceps Extension TRX": "https://www.youtube.com/shorts/LquRBkSmOKQ?feature=share",
  "Triceps Rack Press": "https://www.youtube.com/watch?v=1JQPavZMZCI&pp=ygUScmFjayB0cmljZXBzIHByZXNz",
  "Triceps con banda": "https://youtu.be/HXia-KuaBu4",
  "Triceps polea": "https://youtu.be/sTaIlf8WGjg",
  "Triceps polea 1 brazo": "https://www.youtube.com/shorts/w5a5sErWIEw",
  "Triceps press elbow plank": "https://youtu.be/-HNQWGTf0zw",
  "Trx face pull": "https://youtu.be/gRkBe4WMpwE",
  "Vallas + cajon 1p": "https://www.youtube.com/watch?v=CnWUbIjt57I&pp=ygUYaHVyZGxlIGp1bXAgdG8gYm94IDEgbGVn",
  "Vuelos Frontales": "https://youtu.be/xagEKj2yDc8",
  "Vuelos Posteriores": "https://youtu.be/hf7jnF45N_I",
  "Vuelos Posteriores Sentado": "https://www.youtube.com/watch?v=YQWZ1kosZr8",
  "Vuelos frontal con Disco": "https://www.youtube.com/watch?v=v7tac1hXOfU&pp=ygUScGxhdGUgZnJvbnQgcmFpc2Ug",
  "Vuelos frontales con laterales": "https://www.youtube.com/watch?v=6vdhFbacXms&pp=ygUWZGIgbGF0ZXJhbCBmcm9udCByYWlzZQ%3D%3D",
  "Vuelos laterales": "https://youtu.be/XPPfnSEATJA",
  "Vuelos laterales 1 brazo": "https://www.youtube.com/shorts/WckCeLkzPUI",
  "Wall Drill Banda Knee Drive": "https://player.vimeo.com/video/351974405?byline=0&badge=0&portrait=0&title=0",
  "Wall drill  Switch ( estricto)": "https://player.vimeo.com/video/341092997?byline=0&badge=0&portrait=0&title=0",
  "Wall drill Double Switch": "https://player.vimeo.com/video/395047573?byline=0&badge=0&portrait=0&title=0",
  "bicho muerto con palof press": "https://youtu.be/x4oGIJ4SxdM",
};

function getVideoUrl(ejercicio) {
  return VIDEO_LINKS[ejercicio] ||
    "https://www.youtube.com/results?search_query=" + encodeURIComponent(ejercicio);
}

// ── BANCO DATA ────────────────────────────────────────────────────────────────
const CATS = Object.keys(BANCO);
const BLOQUES_DEFAULT = ["A1","A2","A3","B1","B2","B3","C1","C2","D1","D2","Aux","Aux"];
const CAT_SHORT = {
  "Rodilla Dom. Empujes":"Rod.Emp","Cadera Dom. Tracción":"Cad.Trac",
  "Cadera Dom. Empujes":"Cad.Emp","Rodilla Dom. Tracción":"Rod.Trac",
  "Isométricos MMII":"Isom","Empujes MMSS":"EmpMS","Tracciones MMSS":"TracMS",
  "Pliometría MMII":"Plio","Otros Auxiliares":"Aux","Zona Media":"ZM","Pliometría MMSS":"PlioMS"
};
const GRUPOS = [
  ["Cuádriceps","Rod.Emp"],["Isquiotibiales","Rod.Trac"],["Glúteos","Cad.Emp"],
  ["Cadera Trac.","Cad.Trac"],["Isométricos","Isom"],["Empujes MMSS","EmpMS"],
  ["Tracciones MMSS","TracMS"],["Pliometría MMII","Plio"],["Pliometría MMSS","PlioMS"],
  ["Zona Media","ZM"],["Auxiliares","Aux"]
];

// ── ESTADO ────────────────────────────────────────────────────────────────────
let pacienteActual = null;
let rutinaActual = null;
let editandoPacId = null;
let currentSes = 1;
const sesState = {1:[], 2:[], 3:[]};
let chartInstance = null;

// ── NAVEGACIÓN ────────────────────────────────────────────────────────────────
function navTo(pageId, navEl) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
  document.querySelectorAll('.topbar nav a').forEach(a => a.classList.remove('active'));
  if (navEl) navEl.classList.add('active');
  window.scrollTo(0, 0);
}

function switchTab(tabId, btn) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  btn.classList.add('active');
  if (tabId === 'tab-cargas') cargarSelectEjercicios();
}

// ── TOAST ─────────────────────────────────────────────────────────────────────
function toast(msg, dur=2500) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), dur);
}

// ── MODALES ───────────────────────────────────────────────────────────────────
function abrirModal(id) { document.getElementById(id).classList.add('open'); }
function cerrarModal(id) { document.getElementById(id).classList.remove('open'); }
document.querySelectorAll('.modal-overlay').forEach(m => {
  m.addEventListener('click', e => { if (e.target === m) m.classList.remove('open'); });
});

// ── PACIENTES ─────────────────────────────────────────────────────────────────
async function cargarPacientes() {
  const res = await fetch('/api/pacientes');
  const pacs = await res.json();
  renderPacientes(pacs);
  document.getElementById('buscar-pac').oninput = e => {
    const q = e.target.value.toLowerCase();
    renderPacientes(pacs.filter(p => p.nombre.toLowerCase().includes(q)));
  };
}

function renderPacientes(pacs) {
  const el = document.getElementById('lista-pacientes');
  if (!pacs.length) {
    el.innerHTML = `<div class="empty" style="grid-column:1/-1"><div class="empty-icon">👤</div><p>No hay pacientes todavía</p><button class="btn btn-primary" onclick="abrirModalPac()">＋ Agregar primero</button></div>`;
    return;
  }
  el.innerHTML = pacs.map(p => `
    <div class="pac-card" onclick="abrirFicha(${p.id})">
      <div class="pac-avatar">${p.nombre.charAt(0).toUpperCase()}</div>
      <div class="pac-name">${p.nombre}</div>
      <div class="pac-meta">
        ${p.edad ? `<span>🎂 ${p.edad} años</span>` : ''}
        ${p.ultima_rutina ? `<span>📅 ${formatFecha(p.ultima_rutina)}</span>` : '<span>Sin rutinas aún</span>'}
      </div>
      ${p.objetivo ? `<div><span class="pac-badge">${p.objetivo.substring(0,30)}${p.objetivo.length>30?'...':''}</span></div>` : ''}
      ${p.total_rutinas ? `<div style="font-size:11px;color:var(--muted)">${p.total_rutinas} rutina${p.total_rutinas>1?'s':''} guardada${p.total_rutinas>1?'s':''}</div>` : ''}
    </div>
  `).join('');
}

function abrirModalPac() {
  editandoPacId = null;
  document.getElementById('modal-pac-title').textContent = 'Nuevo paciente';
  ['mp-nombre','mp-edad','mp-obj','mp-les','mp-notas'].forEach(id => document.getElementById(id).value = '');
  abrirModal('modal-pac');
  setTimeout(() => document.getElementById('mp-nombre').focus(), 100);
}

async function guardarPaciente() {
  const nombre = document.getElementById('mp-nombre').value.trim();
  if (!nombre) { toast('⚠️ El nombre es obligatorio'); return; }
  const data = {
    nombre,
    edad: document.getElementById('mp-edad').value || null,
    objetivo: document.getElementById('mp-obj').value,
    lesiones: document.getElementById('mp-les').value,
    notas: document.getElementById('mp-notas').value
  };
  if (editandoPacId) {
    await fetch(`/api/pacientes/${editandoPacId}`, { method:'PUT', headers:{'Content-Type':'application/json'}, body:JSON.stringify(data) });
    toast('✅ Paciente actualizado');
    pacienteActual = { ...pacienteActual, ...data };
    renderFicha();
  } else {
    const res = await fetch('/api/pacientes', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(data) });
    const { id } = await res.json();
    toast('✅ Paciente creado');
    cerrarModal('modal-pac');
    cargarPacientes();
    abrirFicha(id);
    return;
  }
  cerrarModal('modal-pac');
  cargarPacientes();
}

async function abrirFicha(id) {
  const res = await fetch(`/api/pacientes/${id}`);
  pacienteActual = await res.json();
  navTo('page-ficha', null);
  renderFicha();
  cargarRutinas();
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-rutinas').classList.add('active');
  document.querySelectorAll('.tab-btn')[0].classList.add('active');
}

function renderFicha() {
  const p = pacienteActual;
  document.getElementById('ficha-avatar').textContent = p.nombre.charAt(0).toUpperCase();
  document.getElementById('ficha-nombre').textContent = p.nombre;
  const meta = [p.edad ? `${p.edad} años` : null].filter(Boolean).join(' · ');
  document.getElementById('ficha-meta').textContent = meta || 'Sin datos adicionales';
  const tags = document.getElementById('ficha-tags');
  tags.innerHTML = '';
  if (p.objetivo) tags.innerHTML += `<span class="tag tag-obj">🎯 ${p.objetivo}</span>`;
  if (p.lesiones) tags.innerHTML += `<span class="tag tag-les">⚠️ ${p.lesiones}</span>`;
}

function editarPaciente() {
  editandoPacId = pacienteActual.id;
  document.getElementById('modal-pac-title').textContent = 'Editar paciente';
  document.getElementById('mp-nombre').value = pacienteActual.nombre || '';
  document.getElementById('mp-edad').value = pacienteActual.edad || '';
  document.getElementById('mp-obj').value = pacienteActual.objetivo || '';
  document.getElementById('mp-les').value = pacienteActual.lesiones || '';
  document.getElementById('mp-notas').value = pacienteActual.notas || '';
  abrirModal('modal-pac');
}

async function eliminarPaciente() {
  if (!confirm(`¿Eliminar a ${pacienteActual.nombre} y todas sus rutinas?`)) return;
  await fetch(`/api/pacientes/${pacienteActual.id}`, { method:'DELETE' });
  toast('🗑 Paciente eliminado');
  navTo('page-pacientes', document.querySelector('.topbar nav a'));
  cargarPacientes();
}

// ── RUTINAS ───────────────────────────────────────────────────────────────────
async function cargarRutinas() {
  const res = await fetch(`/api/pacientes/${pacienteActual.id}/rutinas`);
  const rutinas = await res.json();
  const el = document.getElementById('lista-rutinas');
  if (!rutinas.length) {
    el.innerHTML = `<div class="empty"><div class="empty-icon">📋</div><p>Este paciente no tiene rutinas todavía</p><button class="btn btn-primary" onclick="nuevaRutina()">＋ Crear primera rutina</button></div>`;
    return;
  }
  el.innerHTML = rutinas.map(r => `
    <div class="rutina-item">
      <div class="ri-icon">📋</div>
      <div class="ri-info" onclick="abrirRutina(${r.id})" style="cursor:pointer;flex:1">
        <div class="ri-name">${r.nombre}</div>
        <div class="ri-meta">📅 ${formatFecha(r.fecha)}</div>
      </div>
      <div class="ri-actions">
        <button class="btn btn-sm" onclick="abrirRutina(${r.id})">✏️ Editar</button>
        <button class="btn btn-sm" onclick="descargarPDFById(${r.id},'${r.nombre}')">📄 PDF</button>
        <button class="btn btn-sm btn-danger" onclick="eliminarRutina(${r.id})">🗑</button>
      </div>
    </div>
  `).join('');
}

function nuevaRutina() {
  rutinaActual = null;
  sesState[1] = []; sesState[2] = []; sesState[3] = [];
  initSesiones();
  currentSes = 1;
  document.getElementById('rut-nombre').value = '';
  document.getElementById('rut-fecha').value = hoy();
  navTo('page-rutina', null);
  renderSesion();
  actualizarVolumen();
  document.querySelectorAll('.stab').forEach((b,i) => b.classList.toggle('active', i===0));
}

async function abrirRutina(id) {
  const res = await fetch(`/api/rutinas/${id}`);
  const r = await res.json();
  rutinaActual = r;
  [1,2,3].forEach(s => {
    sesState[s] = r.sesiones[s] ? r.sesiones[s].map(row => ({...row})) : defaultFilas();
  });
  currentSes = 1;
  document.getElementById('rut-nombre').value = r.nombre;
  document.getElementById('rut-fecha').value = r.fecha;
  navTo('page-rutina', null);
  renderSesion();
  actualizarVolumen();
  document.querySelectorAll('.stab').forEach((b,i) => b.classList.toggle('active', i===0));
}

async function guardarRutina() {
  const nombre = document.getElementById('rut-nombre').value.trim();
  const fecha = document.getElementById('rut-fecha').value;
  if (!nombre) { toast('⚠️ Poné un nombre a la rutina'); return; }
  if (!fecha)  { toast('⚠️ Seleccioná una fecha'); return; }
  guardarSesActual();
  const sesiones = { 1: sesState[1], 2: sesState[2], 3: sesState[3] };
  if (rutinaActual) {
    await fetch(`/api/rutinas/${rutinaActual.id}`, {
      method:'PUT', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ nombre, fecha, sesiones })
    });
    rutinaActual = { ...rutinaActual, nombre, fecha, sesiones };
    toast('✅ Rutina actualizada');
  } else {
    const res = await fetch(`/api/pacientes/${pacienteActual.id}/rutinas`, {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ nombre, fecha, sesiones })
    });
    const { id } = await res.json();
    rutinaActual = { id, nombre, fecha, sesiones };
    toast('✅ Rutina guardada');
  }
}

async function eliminarRutina(id) {
  if (!confirm('¿Eliminar esta rutina?')) return;
  await fetch(`/api/rutinas/${id}`, { method:'DELETE' });
  toast('🗑 Rutina eliminada');
  cargarRutinas();
}

function volverFicha() {
  navTo('page-ficha', null);
  cargarRutinas();
}

// ── ARMADOR ───────────────────────────────────────────────────────────────────
const COLS_SES_COLOR = ['','#2E75B6','#375623','#843C0C'];

function defaultFilas() {
  return BLOQUES_DEFAULT.map(b => ({ blq:b, met:'', cat:'', ej:'', ser:'', r1:'', r2:'', r3:'', kg1:'', kg2:'', obs:'' }));
}

function initSesiones() {
  [1,2,3].forEach(s => { if (!sesState[s].length) sesState[s] = defaultFilas(); });
}

function switchSes(s) {
  guardarSesActual();
  currentSes = s;
  document.querySelectorAll('.stab').forEach((b,i) => b.classList.toggle('active', i===s-1));
  renderSesion();
}

function guardarSesActual() {
  document.querySelectorAll('#rut-tbody tr').forEach((tr, i) => {
    if (!sesState[currentSes][i]) return;
    const r = sesState[currentSes][i];
    r.blq = v(tr,'.inp-blq'); r.met = v(tr,'.inp-met');
    r.cat = v(tr,'.sel-cat'); r.ej  = v(tr,'.sel-ej');
    r.ser = v(tr,'.inp-ser'); r.r1  = v(tr,'.inp-r1');
    r.r2  = v(tr,'.inp-r2'); r.r3  = v(tr,'.inp-r3');
    r.kg1 = v(tr,'.inp-kg1'); r.kg2 = v(tr,'.inp-kg2');
    r.obs = v(tr,'.inp-obs');
  });
}

function v(tr, sel) { return tr.querySelector(sel)?.value || ''; }

function renderSesion() {
  const color = COLS_SES_COLOR[currentSes];
  document.getElementById('rut-tbody').innerHTML =
    sesState[currentSes].map((r, i) => buildFila(r, i, color)).join('');
  actualizarVolumen();
}

function buildFila(r, i, color) {
  const catOpts = CATS.map(c => `<option value="${c}"${r.cat===c?' selected':''}>${c}</option>`).join('');
  const ejOpts = r.cat ? BANCO[r.cat].map(e => `<option value="${e}"${r.ej===e?' selected':''}>${e}</option>`).join('') : '';
  return `<tr>
    <td class="td-blq"><input class="inp-blq" value="${r.blq}" style="text-align:center;font-weight:700;font-size:10px;color:${color}"/></td>
    <td class="td-met"><input class="inp-met" value="${r.met}" placeholder="RDE"/></td>
    <td class="td-cat"><select class="sel-cat" onchange="onCatChange(this,${i})" style="background:#eaf4ea"><option value="">— Categoría —</option>${catOpts}</select></td>
    <td class="td-ej"><select class="sel-ej" style="background:#fffde7"><option value="">— Ejercicio —</option>${ejOpts}</select></td>
    <td><input class="inp-ser" value="${r.ser}" placeholder="3" style="text-align:center"/></td>
    <td><input class="inp-r1"  value="${r.r1}"  placeholder="10" style="text-align:center"/></td>
    <td><input class="inp-r2"  value="${r.r2}"  placeholder="10" style="text-align:center"/></td>
    <td><input class="inp-r3"  value="${r.r3}"  placeholder="10" style="text-align:center"/></td>
    <td class="td-kg"><input class="inp-kg1" value="${r.kg1}" placeholder="kg" style="background:#eaf4ea;text-align:center"/></td>
    <td class="td-kg"><input class="inp-kg2" value="${r.kg2}" placeholder="kg" style="background:#eaf4ea;text-align:center"/></td>
    <td><input class="inp-obs" value="${r.obs}" placeholder="..."/></td>
    <td class="td-vid"><button class="btn-yt" onclick="openYT(${i})" ${r.ej?'':'disabled'}>▶</button></td>
    <td><button onclick="eliminarFila(${i})" style="background:none;border:none;cursor:pointer;color:#ccc;font-size:13px">✕</button></td>
  </tr>`;
}

function onCatChange(sel, i) {
  guardarSesActual();
  sesState[currentSes][i].cat = sel.value;
  sesState[currentSes][i].ej = '';
  const ejSel = sel.closest('tr').querySelector('.sel-ej');
  ejSel.innerHTML = `<option value="">— Ejercicio —</option>${
    sel.value ? BANCO[sel.value].map(e=>`<option value="${e}">${e}</option>`).join('') : ''
  }`;
  actualizarVolumen();
}

function openYT(i) {
  guardarSesActual();
  const ej = sesState[currentSes][i]?.ej;
  if (!ej) return;
  window.open('https://www.youtube.com/results?search_query='+encodeURIComponent(ej+' ejercicio tecnica'),'_blank');
}

function agregarFila() {
  guardarSesActual();
  sesState[currentSes].push({ blq:'', met:'', cat:'', ej:'', ser:'', r1:'', r2:'', r3:'', kg1:'', kg2:'', obs:'' });
  renderSesion();
}

function eliminarFila(i) {
  guardarSesActual();
  sesState[currentSes].splice(i, 1);
  if (!sesState[currentSes].length) sesState[currentSes] = defaultFilas();
  renderSesion();
}

function limpiarSes() {
  if (!confirm(`¿Limpiar sesión ${currentSes}?`)) return;
  sesState[currentSes] = defaultFilas();
  renderSesion();
}

function actualizarVolumen() {
  guardarSesActual();
  const counts = {};
  [1,2,3].forEach(s => {
    sesState[s].forEach(r => {
      const short = CAT_SHORT[r.cat];
      if (!short || !r.ser) return;
      counts[short] = (counts[short]||0) + (parseInt(r.ser)||0);
    });
  });
  const grid = document.getElementById('vol-grid');
  const activos = GRUPOS.filter(([,c]) => counts[c] > 0);
  grid.innerHTML = activos.length
    ? activos.map(([g,c]) => `<div class="vol-card"><div class="vg">${g}</div><div class="vn">${counts[c]}</div><div class="vl">series</div></div>`).join('')
    : '<p style="color:var(--muted);font-size:12px">Completá series y categorías para ver el resumen.</p>';
}

// ── GENERAR PDF ───────────────────────────────────────────────────────────────
// Genera el PDF de la rutina actual en pantalla
function generarPDFActual() {
  guardarSesActual();
  const nombre = document.getElementById('rut-nombre').value || 'Rutina';
  const fecha  = document.getElementById('rut-fecha').value || hoy();
  const sesiones = { 1: sesState[1], 2: sesState[2], 3: sesState[3] };
  const pac = pacienteActual || { nombre: 'Paciente', edad: null, objetivo: '', lesiones: '' };
  generarPDF(pac, nombre, fecha, sesiones);
}

// Descarga el PDF de una rutina guardada (desde el historial)
async function descargarPDFById(id, nombre) {
  const res = await fetch(`/api/rutinas/${id}`);
  const r = await res.json();
  generarPDF(pacienteActual, r.nombre, r.fecha, r.sesiones);
}

// Motor de generación de PDF
function generarPDF(paciente, nombreRutina, fecha, sesiones) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation:'portrait', unit:'mm', format:'a4' });
  const W = 210, H = 297;
  const ML = 12, MR = 12, MT = 12;
  const CW = W - ML - MR;
  let y = MT;

  const SES_COLORS = [
    { h:[46,117,182],  light:[234,240,251] },
    { h:[55,86,35],    light:[234,244,234] },
    { h:[132,60,12],   light:[253,240,232] },
  ];

  function rgbH(arr) { return `rgb(${arr[0]},${arr[1]},${arr[2]})`; }

  // ── HEADER ────────────────────────────────────────────────────────────────
  doc.setFillColor(28,28,30);
  doc.roundedRect(ML, y, CW, 18, 3, 3, 'F');
  doc.setFont('helvetica','bold');
  doc.setFontSize(14);
  doc.setTextColor(255,255,255);
  doc.text('KINE HOUSE', ML+5, y+7);
  doc.setFont('helvetica','normal');
  doc.setFontSize(7);
  doc.setTextColor(170,170,170);
  doc.text('Sistema de Rutinas', ML+5, y+12);

  // Nombre paciente centrado
  doc.setFont('helvetica','bold');
  doc.setFontSize(11);
  doc.setTextColor(255,255,255);
  doc.text((paciente.nombre || 'Paciente').toUpperCase(), W/2, y+8, {align:'center'});
  doc.setFont('helvetica','normal');
  doc.setFontSize(8);
  doc.setTextColor(200,200,200);
  if (paciente.lic || paciente.edad) {
    doc.text(`${paciente.edad ? paciente.edad+' años  ·  ':''} Lic. Julian Gaffet — M.P. 1321`, W/2, y+13, {align:'center'});
  }

  // Fecha derecha
  doc.setFontSize(8);
  doc.setTextColor(200,200,200);
  doc.text(`📅 ${formatFecha(fecha)}`, W-MR-3, y+8, {align:'right'});
  doc.text(nombreRutina, W-MR-3, y+13, {align:'right'});
  y += 22;

  // Objetivo / lesiones
  if (paciente.objetivo || paciente.lesiones) {
    doc.setFillColor(234,240,251);
    doc.roundedRect(ML, y, CW, 8, 2, 2, 'F');
    doc.setFont('helvetica','normal');
    doc.setFontSize(8);
    doc.setTextColor(28,28,30);
    let infoText = '';
    if (paciente.objetivo) infoText += `🎯 Objetivo: ${paciente.objetivo}   `;
    if (paciente.lesiones) infoText += `⚠️ ${paciente.lesiones}`;
    doc.text(infoText, ML+4, y+5);
    y += 11;
  }

  // ── SESIONES ──────────────────────────────────────────────────────────────
  [1,2,3].forEach(si => {
    const filas = (sesiones[si]||[]).filter(r => r.ej && r.ej.trim());
    if (!filas.length) return;

    const sc = SES_COLORS[(si-1) % SES_COLORS.length];
    const sesNombre = `SESIÓN ${si}`;

    // Salto de página si no hay espacio
    const alturaEstimada = 10 + filas.length * 7 + 6;
    if (y + alturaEstimada > H - 15) {
      doc.addPage();
      y = MT;
    }

    // Header sesión
    doc.setFillColor(...sc.h);
    doc.roundedRect(ML, y, CW, 8, 2, 2, 'F');
    doc.setFont('helvetica','bold');
    doc.setFontSize(10);
    doc.setTextColor(255,255,255);
    doc.text(sesNombre, ML+4, y+5.5);
    doc.setFont('helvetica','normal');
    doc.setFontSize(7);
    doc.setTextColor(220,220,220);
    doc.text(`${filas.length} ejercicios  ·  Click en el ejercicio para ver el video en YouTube`, W-MR-3, y+5.5, {align:'right'});
    y += 10;

    // Headers tabla
    const cols = [
      {label:'BLQ',  w:8,  align:'center'},
      {label:'EJERCICIO', w:62, align:'left'},
      {label:'SER.', w:10, align:'center'},
      {label:'REPS', w:16, align:'center'},
      {label:'KG/RIR S1', w:20, align:'center'},
      {label:'KG/RIR S2', w:20, align:'center'},
      {label:'OBS.',w:CW-8-62-10-16-20-20, align:'left'},
    ];

    doc.setFillColor(58,58,60);
    doc.rect(ML, y, CW, 6, 'F');
    doc.setFont('helvetica','bold');
    doc.setFontSize(7);
    doc.setTextColor(255,255,255);
    let xc = ML;
    cols.forEach(c => {
      if (c.align === 'center') doc.text(c.label, xc + c.w/2, y+4, {align:'center'});
      else doc.text(c.label, xc+2, y+4);
      xc += c.w;
    });
    y += 6;

    // Filas ejercicios
    filas.forEach((r, ri) => {
      if (y + 7 > H - 15) { doc.addPage(); y = MT; }

      const bg = ri%2===0 ? sc.light : [255,255,255];
      doc.setFillColor(...bg);
      doc.rect(ML, y, CW, 6.5, 'F');

      doc.setDrawColor(210,220,235);
      doc.setLineWidth(0.2);
      doc.line(ML, y+6.5, ML+CW, y+6.5);

      xc = ML;
      // BLQ
      doc.setFont('helvetica','bold');
      doc.setFontSize(8);
      doc.setTextColor(...sc.h);
      doc.text(r.blq||'', xc+cols[0].w/2, y+4.5, {align:'center'});
      xc += cols[0].w;

      // EJERCICIO con hipervínculo
      const ejNombre = r.ej || '';
      const ytUrl = getVideoUrl(ejNombre);
      doc.setFont('helvetica','normal');
      doc.setFontSize(8.5);
      doc.setTextColor(46,117,182);
      // Truncar si es muy largo
      let ejLabel = ejNombre;
      while (doc.getTextWidth(ejLabel) > cols[1].w - 3 && ejLabel.length > 5) {
        ejLabel = ejLabel.slice(0,-1);
      }
      if (ejLabel !== ejNombre) ejLabel += '…';
      doc.textWithLink(ejLabel, xc+1, y+4.5, { url: ytUrl });
      // Subrayado
      doc.setDrawColor(46,117,182);
      doc.setLineWidth(0.15);
      doc.line(xc+1, y+5.2, xc+1+doc.getTextWidth(ejLabel), y+5.2);
      xc += cols[1].w;

      // Resto de columnas
      const resto = [r.ser||'', r.r1||'', r.kg1||'', r.kg2||'', r.obs||''];
      const restoIdx = [2,3,4,5,6];
      doc.setFont('helvetica','normal');
      doc.setFontSize(8);
      doc.setTextColor(28,28,30);
      restoIdx.forEach((ci, i) => {
        const col = cols[ci];
        const txt = String(resto[i]);
        if (col.align === 'center') doc.text(txt, xc+col.w/2, y+4.5, {align:'center'});
        else doc.text(txt.substring(0,18), xc+2, y+4.5);
        xc += col.w;
      });

      // Línea vertical separando columnas (sutil)
      doc.setDrawColor(210,220,235);
      let xl = ML + cols[0].w;
      for(let ci=1; ci<cols.length-1; ci++){
        doc.line(xl, y, xl, y+6.5);
        xl += cols[ci].w;
      }

      y += 6.5;
    });

    // Borde de la tabla
    doc.setDrawColor(180,200,220);
    doc.setLineWidth(0.3);
    const tablaH = 6 + filas.length * 6.5;
    doc.rect(ML, y - tablaH, CW, tablaH);

    y += 5;
  });

  // ── NOTA PIE ──────────────────────────────────────────────────────────────
  if (y + 10 < H - 8) {
    doc.setDrawColor(210,220,235);
    doc.setLineWidth(0.3);
    doc.line(ML, y, ML+CW, y);
    y += 4;
    doc.setFont('helvetica','italic');
    doc.setFontSize(7.5);
    doc.setTextColor(100,100,100);
    doc.text('💡 Los nombres de los ejercicios son hipervínculos — hacé click para ver el video de técnica en YouTube.', ML, y);
    y += 4;
    doc.setTextColor(160,160,160);
    doc.text(`Kine House  ·  Generado el ${new Date().toLocaleDateString('es-AR')}`, ML, y);
  }

  // Número de página
  const totalPages = doc.internal.getNumberOfPages();
  for(let i=1; i<=totalPages; i++){
    doc.setPage(i);
    doc.setFont('helvetica','normal');
    doc.setFontSize(7);
    doc.setTextColor(160,160,160);
    doc.text(`${i} / ${totalPages}`, W-MR, H-6, {align:'right'});
  }

  // Descargar
  const pacNombre = (paciente.nombre || 'paciente').replace(/\s+/g,'_');
  const rutNombre = nombreRutina.replace(/\s+/g,'_');
  doc.save(`rutina_${pacNombre}_${rutNombre}.pdf`);
  toast('📄 PDF descargado');
}

// ── EVOLUCIÓN DE CARGAS ───────────────────────────────────────────────────────
async function cargarSelectEjercicios() {
  const sel = document.getElementById('carga-ej');
  const actual = sel.value;
  sel.innerHTML = '<option value="">— Elegí ejercicio —</option>';

  const res = await fetch(`/api/pacientes/${pacienteActual.id}/ejercicios-con-cargas`);
  const conCargas = await res.json();

  if (conCargas.length) {
    const grp = document.createElement('optgroup');
    grp.label = '📊 Con historial';
    conCargas.forEach(e => { const o=document.createElement('option'); o.value=e; o.textContent=e; grp.appendChild(o); });
    sel.appendChild(grp);
  }

  CATS.forEach(cat => {
    const grp = document.createElement('optgroup');
    grp.label = cat;
    BANCO[cat].forEach(e => {
      if (conCargas.includes(e)) return;
      const o=document.createElement('option'); o.value=e; o.textContent=e; grp.appendChild(o);
    });
    sel.appendChild(grp);
  });

  if (actual) { sel.value = actual; cargarHistorialCarga(); }
  document.getElementById('carga-fecha').value = hoy();
}

async function cargarHistorialCarga() {
  const ej = document.getElementById('carga-ej').value;
  document.getElementById('carga-ej-label').textContent = ej || 'seleccioná un ejercicio';
  if (!ej) { renderChartVacio(); document.getElementById('carga-hist').innerHTML=''; return; }
  const res = await fetch(`/api/pacientes/${pacienteActual.id}/cargas?ejercicio=${encodeURIComponent(ej)}`);
  const cargas = await res.json();
  renderChart(cargas);
  renderHistorial(cargas);
}

function renderChart(cargas) {
  const ctx = document.getElementById('chart-cargas').getContext('2d');
  if (chartInstance) { chartInstance.destroy(); chartInstance = null; }
  if (!cargas.length) { renderChartVacio(); return; }
  chartInstance = new Chart(ctx, {
    type:'line',
    data:{
      labels: cargas.map(c=>formatFechaCorta(c.fecha)),
      datasets:[{ label:'Kg', data:cargas.map(c=>c.kg),
        borderColor:'#2E75B6', backgroundColor:'rgba(46,117,182,.1)',
        pointBackgroundColor:'#2E75B6', pointRadius:5, tension:.3, fill:true }]
    },
    options:{ responsive:true, maintainAspectRatio:false,
      plugins:{legend:{display:false}},
      scales:{ x:{grid:{color:'#f0f0f0'},ticks:{font:{size:11}}},
               y:{grid:{color:'#f0f0f0'},ticks:{font:{size:11}},beginAtZero:false} } }
  });
}

function renderChartVacio() {
  const ctx = document.getElementById('chart-cargas').getContext('2d');
  if (chartInstance) { chartInstance.destroy(); chartInstance = null; }
  ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}

function renderHistorial(cargas) {
  const el = document.getElementById('carga-hist');
  if (!cargas.length) { el.innerHTML='<p style="color:var(--muted);font-size:12px;padding:10px 0">Sin registros todavía.</p>'; return; }
  el.innerHTML = [...cargas].reverse().map(c=>`
    <div class="carga-row">
      <span class="cr-fecha">${formatFechaCorta(c.fecha)}</span>
      <span class="cr-kg">${c.kg?c.kg+'kg':'—'}</span>
      <span class="cr-extra">${[c.reps?c.reps+' reps':'',c.rir?'RIR '+c.rir:'',c.notas].filter(Boolean).join(' · ')||''}</span>
      <span class="cr-del" onclick="eliminarCarga(${c.id})" title="Eliminar">✕</span>
    </div>`).join('');
}

async function guardarCarga() {
  const ej = document.getElementById('carga-ej').value;
  const fecha = document.getElementById('carga-fecha').value;
  const kg = document.getElementById('carga-kg').value;
  if (!ej)    { toast('⚠️ Seleccioná un ejercicio'); return; }
  if (!fecha) { toast('⚠️ Seleccioná una fecha'); return; }
  await fetch(`/api/pacientes/${pacienteActual.id}/cargas`, {
    method:'POST', headers:{'Content-Type':'application/json'},
    body: JSON.stringify({ ejercicio:ej, fecha, kg:kg||null,
      reps: document.getElementById('carga-reps').value,
      rir:  document.getElementById('carga-rir').value })
  });
  document.getElementById('carga-kg').value='';
  document.getElementById('carga-reps').value='';
  document.getElementById('carga-rir').value='';
  toast('✅ Carga registrada');
  cargarHistorialCarga();
  cargarSelectEjercicios();
}

async function eliminarCarga(id) {
  if (!confirm('¿Eliminar este registro?')) return;
  await fetch(`/api/cargas/${id}`, { method:'DELETE' });
  toast('🗑 Registro eliminado');
  cargarHistorialCarga();
}

// ── UTILS ─────────────────────────────────────────────────────────────────────
function hoy() { return new Date().toISOString().split('T')[0]; }

function formatFecha(str) {
  if (!str) return '—';
  const d = new Date(str.includes('T') ? str : str+'T12:00:00');
  return d.toLocaleDateString('es-AR', { day:'2-digit', month:'short', year:'numeric' });
}
function formatFechaCorta(str) {
  if (!str) return '—';
  const d = new Date(str.includes('T') ? str : str+'T12:00:00');
  return d.toLocaleDateString('es-AR', { day:'2-digit', month:'short' });
}

// ── INIT ──────────────────────────────────────────────────────────────────────
cargarPacientes();
document.addEventListener('keydown', e => {
  if (e.key==='Escape') document.querySelectorAll('.modal-overlay.open').forEach(m=>m.classList.remove('open'));
});
