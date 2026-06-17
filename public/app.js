// ── VIDEO LINKS (Gym + Warm Up + Campo) ────────────────────────────────────────
const VIDEO_LINKS = {
  "2 conos drill": "https://player.vimeo.com/video/336378278?byline=0&badge=0&portrait=0&title=0",
  "2 conos drill figura 8": "https://www.youtube.com/watch?v=JILjrTzqRWw&pp=ygUVMiBjb25lcyBzaHVmbGxlIGRyaWxs",
  "2 vallas + cajon 1p": "https://www.youtube.com/watch?v=cV4plDkSsPI&pp=ygUYaHVyZGxlIGp1bXAgdG8gYm94IDEgbGVn",
  "6 conos back pedal": "https://player.vimeo.com/video/429439086?byline=0&amp;badge=0&amp;portrait=0&amp;title=0",
  "6 conos crossover sprint": "https://player.vimeo.com/video/429439173?byline=0&amp;badge=0&amp;portrait=0&amp;title=0",
  "6 conos figura 8": "https://player.vimeo.com/video/429439173?byline=0&amp;badge=0&amp;portrait=0&amp;title=0",
  "6 conos sprint": "https://player.vimeo.com/video/429439317?byline=0&amp;badge=0&amp;portrait=0&amp;title=0",
  "6 conos sprint + shuffle": "https://player.vimeo.com/video/429439131?byline=0&amp;badge=0&amp;portrait=0&amp;title=0",
  "90/90 hip roll": "https://www.youtube.com/embed/X1g1dLD2I34?rel=0",
  "AFSM Hamstring banded prono": "https://youtu.be/wHd8jDVItYM",
  "AFSM hamstring Bridge": "https://www.youtube.com/watch?v=bKxbalKfN1c",
  "Aceleracion 10 mts": "https://player.vimeo.com/video/391881792?byline=0&badge=0&portrait=0&title=0",
  "Aceleracion 10 mts con banda": "https://player.vimeo.com/video/393361028?byline=0&amp;badge=0&amp;portrait=0&amp;title=0",
  "Aceleracion 20 mts": "https://player.vimeo.com/video/393361048?byline=0&badge=0&portrait=0&title=0",
  "Aceleracion 5 mts partida baja": "https://player.vimeo.com/video/393182929?byline=0&badge=0&portrait=0&title=0",
  "Apertura con mancuerna": "https://www.youtube.com/watch?v=Nhvz9EzdJ4U&pp=ygUTY2hlc3QgZHVtYmJlbGwgZmx5cw%3D%3D",
  "Aterrizaje desde cajon": "https://www.youtube.com/watch?v=dJjnL3qvX0c&pp=ygURc3RlcCBkcm9wIGxhbmRpbmc%3D",
  "Aterrizaje desde cajon 1p": "https://www.youtube.com/watch?v=Xt5ealMAWP4&pp=ygUhc2luZ2xlIGxlZyBsYW5kaW5nIGZyb20gc3RlcCA1MGNt",
  "Back Pedal Sprint Estrella": "https://player.vimeo.com/video/336825156?byline=0&amp;badge=0&amp;portrait=0&amp;title=0",
  "Back extension Iso hold": "https://www.youtube.com/watch?v=REv46CYcIRE&pp=ygUXYmFjayBleHRlbnNpb24gaXNvIGhvbGQ%3D",
  "Back pedal + sprint + cross over": "https://player.vimeo.com/video/336822259?byline=0&amp;badge=0&amp;portrait=0&amp;title=0",
  "Back pedal - Crossover - Back pedal - Crossover": "https://player.vimeo.com/video/335613823?byline=0&amp;badge=0&amp;portrait=0&amp;title=0",
  "Back pedal - Crossover - Sprint - Backpedal": "https://player.vimeo.com/video/335732356?byline=0&amp;badge=0&amp;portrait=0&amp;title=0",
  "Backpedal +Crossover + Black pedal": "https://player.vimeo.com/video/336821780?byline=0&amp;badge=0&amp;portrait=0&amp;title=0",
  "Backpedal +Crossover + Shuffle": "https://player.vimeo.com/video/336822127?byline=0&amp;badge=0&amp;portrait=0&amp;title=0",
  "Backpedal - Shuffle - Backpedal - Shuffle": "https://player.vimeo.com/video/335525716?byline=0&amp;badge=0&amp;portrait=0&amp;title=0",
  "Backpedal - Shuffle - Sprint - Shuffle": "https://player.vimeo.com/video/335525320?byline=0&amp;badge=0&amp;portrait=0&amp;title=0",
  "Backpedal Sprint estrella": "https://player.vimeo.com/video/336823748?byline=0&amp;badge=0&amp;portrait=0&amp;title=0",
  "Backpedal-Sprint-Backpedal-Inside Shuffle": "https://player.vimeo.com/video/335526325?byline=0&amp;badge=0&amp;portrait=0&amp;title=0",
  "Backpedal-Sprint-Backpedal-Sprint": "https://player.vimeo.com/video/335523314?byline=0&amp;badge=0&amp;portrait=0&amp;title=0",
  "Battle Rope": "https://www.youtube.com/shorts/k3d8XozZyQQ",
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
  "Black pedal + freno 1p": "https://player.vimeo.com/video/431125035?byline=0&amp;amp;badge=0&amp;amp;portrait=0&amp;amp;title=0",
  "Black pedal + sprint": "https://player.vimeo.com/video/431125118?byline=0&amp;badge=0&amp;portrait=0&amp;title=0",
  "Blackburns A": "https://www.youtube.com/shorts/f56WzBHQ68E",
  "Blackpedal + Crossover + Sprint": "https://player.vimeo.com/video/336822000?byline=0&amp;badge=0&amp;portrait=0&amp;title=0",
  "Blackpedal + Sprint ida-vueta": "https://player.vimeo.com/video/336378278?byline=0&amp;badge=0&amp;portrait=0&amp;title=0",
  "Blackpedal + shuffle + Blackpedal": "https://player.vimeo.com/video/336821425?byline=0&amp;amp;badge=0&amp;amp;portrait=0&amp;amp;title=0",
  "Blackpedal + shuffle + sprint": "https://player.vimeo.com/video/336821684?byline=0&amp;badge=0&amp;portrait=0&amp;title=0",
  "Blackpedal + sprint + shuffle": "https://player.vimeo.com/video/336821554?byline=0&amp;badge=0&amp;portrait=0&amp;title=0",
  "Bound 1p alternado": "https://www.youtube.com/shorts/uJ05i0-NNlc?feature=share",
  "Bound Lateral Posicion dividida": "https://www.youtube.com/watch?v=CLxDEqky8SE&pp=ygUbaGFsZiBrbmVlbGluZyBib3VuZCBsYXRlcmFs",
  "Bound Lateral doble contacto": "https://www.youtube.com/watch?v=5VUg0QeOjpc&pp=ygUgYm91bmQgbGF0ZXJhbCBkb3VibGUgY29udGFjdCA0NSA%3D",
  "Bound lateral salto vertical": "https://www.youtube.com/shorts/ur0ug-U19ik?feature=share",
  "Bounding": "https://player.vimeo.com/video/397230992?byline=0&badge=0&portrait=0&title=0",
  "Broad Jump": "https://youtu.be/vPQv1gmrfUo",
  "Broad Jump con MB": "https://youtu.be/IbY-vQd8Glk",
  "Broad jump 1 p": "https://youtu.be/dxHJ5vxeWYQ",
  "Broad jump 1 p doble": "https://youtu.be/r75zl3QCra8",
  "Broad jump asistido": "https://www.youtube.com/watch?v=rLo1rOb-q_I&pp=ygUYYmFuZCBhc3Npc3RlZCBicm9hZCBqdW1w",
  "Broad jump banda": "https://youtu.be/sm_WuNdTUtQ",
  "Broad jump doble": "https://youtu.be/lXyiqwNA5ZU",
  "Broad jump single leg catch": "https://www.youtube.com/shorts/Apyu6v2Zdg4",
  "Burpee": "https://www.youtube.com/shorts/EkK3oVBA__Q",
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
  "Combinacion": "https://player.vimeo.com/video/336355349?byline=0&amp;badge=0&amp;portrait=0&amp;title=0",
  "Copenaghe Plank Nivel 1": "https://www.youtube.com/watch?v=VxFQAMzRaQU&pp=ygUQY29wZW5oYWdlbiBwbGFuaw%3D%3D",
  "Copenaghe Plank Nivel 2": "https://www.youtube.com/watch?v=vFMCZiYSXVg&pp=ygUYY29wZW5oYWdlbiBwbGFuayBsZXZlbCAy",
  "Copenaghe plank level 3": "https://youtu.be/eiSBci8icnc",
  "Crossover + Spint + Crossover": "https://player.vimeo.com/video/336822408?byline=0&amp;badge=0&amp;portrait=0&amp;title=0",
  "Crossover + freno": "https://player.vimeo.com/video/431125050?byline=0&amp;amp;badge=0&amp;amp;portrait=0&amp;amp;title=0",
  "Crossover Estrella": "https://player.vimeo.com/video/336823155?byline=0&amp;badge=0&amp;portrait=0&amp;title=0",
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
  "Diamante": "https://player.vimeo.com/video/376049641?byline=0&amp;badge=0&amp;portrait=0&amp;title=0",
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
  "Espejo Shuffle": "https://player.vimeo.com/video/391900030?byline=0&amp;badge=0&amp;portrait=0&amp;title=0",
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
  "Estrella Bonus": "https://player.vimeo.com/video/336827153?byline=0&amp;badge=0&amp;portrait=0&amp;title=0",
  "Extension Toracica en el cajon": "https://www.youtube.com/shorts/Ai3Y8tdIGro?feature=share",
  "Extensive L Hop": "https://youtu.be/3K2Eeqe3efU",
  "Extensive Lateral Hop": "https://www.youtube.com/shorts/-H3ahAMkrE8",
  "Extensive V Hop": "https://youtu.be/E7V0JHfFJ9I",
  "Extensive W Hop": "https://youtu.be/szPpNZeRxF8",
  "Face Pull DB en Banca": "https://www.youtube.com/watch?v=a_GcYbTILRY",
  "Face pull banda": "https://youtu.be/5jgKj8ColLg",
  "Figura 8": "https://player.vimeo.com/video/336823748?byline=0&amp;badge=0&amp;portrait=0&amp;title=0",
  "Figura 8 desaceleracion": "https://player.vimeo.com/video/431125074?byline=0&amp;amp;badge=0&amp;amp;portrait=0&amp;amp;title=0",
  "Figura de 8": "https://player.vimeo.com/video/342989186?byline=0&amp;amp;badge=0&amp;amp;portrait=0&amp;amp;title=0",
  "Flexion cadera con rodilla extendida": "https://www.youtube.com/embed/JiKgkQGgTYI?rel=0",
  "Flexion de hombro banda circular": "https://www.youtube.com/shorts/i0RaR3tqDd0",
  "Floor Press 1b DB": "https://youtu.be/mzd-RUIZUvc",
  "Foward shuffle conos drills": "https://www.youtube.com/watch?v=MVbRxO36Kxs&pp=ygUVMiBjb25lcyBzaHVmbGxlIGRyaWxs",
  "Gemelos con Barra": "https://www.youtube.com/shorts/hWn1u6qwu6U?feature=share",
  "Gemelos con cajon unilateral": "https://www.youtube.com/shorts/uZABLPh95JU?feature=share",
  "Gemelos con step unilateral": "https://youtu.be/RGPSphSpAQY",
  "Gemelos en Step bilateral": "https://www.youtube.com/shorts/Sz5J4TkxoAw",
  "Gemelos posicion carrera": "https://www.youtube.com/shorts/1TS3P8j3aHA",
  "Halos": "https://youtu.be/wJcmanVh5EE",
  "Halos KB Arrodillado": "https://www.youtube.com/watch?v=A2jT86tgnII&pp=ygUWaGFsZiBrbmVlbGluZyBoYWxvcyBrYg%3D%3D",
  "Hip Adduction with band": "https://www.youtube.com/shorts/WCANvVnKQr8",
  "Hip Cars": "https://www.youtube.com/embed/aOItARpIaPk?rel=0",
  "Hip Cars Step": "https://www.youtube.com/embed/Xc5EJJBJaYg?rel=0",
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
  "Inside Crossover/ Shuffle/ inside Sprint": "https://player.vimeo.com/video/336827436?byline=0&amp;badge=0&amp;portrait=0&amp;title=0",
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
  "Jumping Lungues": "https://www.youtube.com/watch?v=iJMsF7fzrOM&pp=ygUOanVtcGluZyBsdW5nZXM%3D",
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
  "Mountain Climbers": "https://www.youtube.com/watch?v=kLh-uczlPLg&pp=ygURbW91bnRhaW4gY2xpbWJlcnPSBwkJogoBhyohjO8%3D",
  "Movilidad asisitida rodilla prono": "https://www.youtube.com/embed/oMROHfOKej0?rel=0",
  "Movilidad asistida con baston abd": "https://www.youtube.com/shorts/Aq9aMkEj8sM",
  "Movilidad asistida con baston extension": "https://www.youtube.com/shorts/5yaOFn8jWa0",
  "Movilidad asistida con baston flex": "https://www.youtube.com/shorts/tepSINDwXiM",
  "Movilidad asistida con baston supino flexion": "https://www.youtube.com/shorts/kwdlxucSKYY?feature=share",
  "Movilidad asistida en flexion con fitball": "https://www.youtube.com/watch?v=Fdwewh34EuQ&pp=ygUkc2hvdWxkZXIgYXNzaXN0ZWQgbW9iaWxpdHkgd2l0aCBiYWxs",
  "Movilidad asistida rot ext pegada cuerpo": "https://www.youtube.com/shorts/YvfIhAKPC4k",
  "Movilidad de hombro con fitball": "https://www.youtube.com/watch?v=Cxy7eOaCaDc&pp=ygUwc2hvdWxkZXIgYXNzaXN0ZWQgbW9iaWxpdHkgd2l0aCBiYWxsIGluIHRoZSB3YWxs",
  "Movilidad de rodilla asistida supino": "https://www.youtube.com/embed/OZK3TGelmMs?rel=0",
  "Movilidad de rodilla sentado": "https://www.youtube.com/embed/Ci_iEOLTLzI?rel=0",
  "Movilidad de tobillo dorsiflexion": "https://www.youtube.com/embed/_PKyAcTRLtg?rel=0",
  "Movilidad rodilla cuadrupedia": "https://www.youtube.com/embed/31XUjBOJAaI?rel=0",
  "Movilidad rodilla supino": "https://www.youtube.com/embed/FpEQekw8zrw?rel=0",
  "Movilidad tobillo dorsiflexion": "https://www.youtube.com/shorts/7jOwuwNk8OM?feature=share",
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
  "Plancha tocando hombros": "https://www.youtube.com/shorts/S7hSMR1rrw4",
  "Plancha toque de hombros": "https://www.youtube.com/shorts/ePIdW-pGUrA",
  "Plate Push up": "https://www.youtube.com/watch?v=G0hZD0DGeTA&pp=ygUOcGxhdGUgcHVzaCB1cHM%3D",
  "Pogo Jump single Leg disco": "https://www.youtube.com/shorts/zi7pvalOoXc",
  "Pogos + Sprint 5 mts": "https://player.vimeo.com/video/397230992?byline=0&badge=0&portrait=0&title=0",
  "Pogos Jump asistidos": "https://youtu.be/CaIAbKHbrTo",
  "Pogos jump": "https://youtu.be/wa1ClvLqSHo",
  "Pogos resistidos banda": "https://www.youtube.com/shorts/2WU8dKoaTTo",
  "Posicion de oso + elevacion cadera": "https://www.youtube.com/watch?v=XK_8DSVspMA&pp=ygUeYmVhciBwb3NpdGlvbiBoYW1zdHJpbmcgc3RyZWNo",
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
  "Prone A, T , Y": "https://www.youtube.com/watch?v=VkQ_wtU6foo&pp=ygUacHJvbmUgc2hvdWxkZXIgZXhjZXJjaXNlIFQ%3D",
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
  "Saltos al cajon Crossfitt": "https://www.youtube.com/shorts/7wtrTiQ8HWA",
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
  "Shuffle + Crossover + Sprint": "https://player.vimeo.com/video/336821119?byline=0&amp;badge=0&amp;portrait=0&amp;title=0",
  "Shuffle + Sprint + Crossover": "https://player.vimeo.com/video/336820996?byline=0&amp;badge=0&amp;portrait=0&amp;title=0",
  "Shuffle + Sprint + Shuffle": "https://player.vimeo.com/video/336368625?byline=0&amp;badge=0&amp;portrait=0&amp;title=0",
  "Shuffle + Sprint estrella": "https://player.vimeo.com/video/336823155?byline=0&amp;badge=0&amp;portrait=0&amp;title=0",
  "Shuffle + freno": "https://player.vimeo.com/video/431125134?byline=0&amp;amp;badge=0&amp;amp;portrait=0&amp;amp;title=0",
  "Shuffle + freno 1p": "https://player.vimeo.com/video/431125098?byline=0&amp;amp;badge=0&amp;amp;portrait=0&amp;amp;title=0",
  "Shuffle estrella 5 conos": "https://player.vimeo.com/video/336823155?byline=0&amp;badge=0&amp;portrait=0&amp;title=0",
  "Side hop to lateral bound": "https://youtu.be/5maGq-w-4AI",
  "Skater con med ball": "https://youtu.be/IKCYooxLToo",
  "Skater hop extensivos": "https://youtu.be/CaN4zfIPyXU",
  "Skater hop intensivos": "https://youtu.be/gS4F_YrwZVs",
  "Skipping en el lugar": "https://www.youtube.com/shorts/UyZgB7ig11A",
  "Sled Push Press": "https://www.youtube.com/shorts/EgiQRkVWRq8",
  "Soleo Calf Rises": "https://www.youtube.com/watch?v=CdeIHN4fMYE&pp=ygURc29sZXVzIGNhbGYgcmlzZXM%3D",
  "Soleo elevacion 1p": "https://youtu.be/6snp9ll2cgQ",
  "Spider Curl de biceps": "https://youtu.be/9Dd8iiEUs_Q",
  "Split Jump": "https://www.youtube.com/watch?v=tnkSwD0XmpA&pp=ygUhY291bnRlcm1vdmVtZW50IHNwbGl0IHNxdWF0ICBqdW1w",
  "Split Jump Barra": "https://www.youtube.com/shorts/9eA19lR4pAM",
  "Split Jump DB": "https://www.youtube.com/shorts/l3zpYh46GBg",
  "Split Squat soleo": "https://www.youtube.com/shorts/iqkCrlM3uD0",
  "Split squat iso hold gemelo": "https://youtu.be/T9e18_KE1MI",
  "Sprint + Backpedal + Sprint": "https://player.vimeo.com/video/336819821?byline=0&amp;badge=0&amp;portrait=0&amp;title=0",
  "Sprint + Backpedal + Suffle + Sprint": "https://player.vimeo.com/video/336382111?byline=0&amp;badge=0&amp;portrait=0&amp;title=0",
  "Sprint + Cross over + shuffle": "https://player.vimeo.com/video/336820154?byline=0&amp;badge=0&amp;portrait=0&amp;title=0",
  "Sprint + Crossover + Crossover + Sprint": "https://player.vimeo.com/video/336383312?byline=0&amp;badge=0&amp;portrait=0&amp;title=0",
  "Sprint + Shuffle + Shuffle + Sprint": "https://player.vimeo.com/video/336380769?byline=0&amp;badge=0&amp;portrait=0&amp;title=0",
  "Sprint + Shuffle + sprint": "https://player.vimeo.com/video/336819674?byline=0&amp;badge=0&amp;portrait=0&amp;title=0",
  "Sprint + Sprint + Sprint": "https://player.vimeo.com/video/336819390?byline=0&amp;badge=0&amp;portrait=0&amp;title=0",
  "Sprint + crossover + Sprint": "https://player.vimeo.com/video/336820012?byline=0&amp;badge=0&amp;portrait=0&amp;title=0",
  "Sprint Estrella": "https://player.vimeo.com/video/336825156?byline=0&amp;badge=0&amp;portrait=0&amp;title=0",
  "Sprinter Pogos": "https://player.vimeo.com/video/397773121?byline=0&badge=0&portrait=0&title=0",
  "Squat Jump": "https://www.youtube.com/watch?v=BRfxI2Es2lE&pp=ygULc3F1YXQganVtcCA%3D",
  "Squat wall ball": "https://www.youtube.com/shorts/sXsFcANoj-g",
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
  "Windmill Arrodillado": "https://www.youtube.com/shorts/P9bXdf5hTXE",
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
  "Rodilla Dom. Empujes":"RDE","Cadera Dom. Tracción":"CDT",
  "Cadera Dom. Empujes":"CDE","Rodilla Dom. Tracción":"RDT",
  "Isométricos MMII":"ISO","Empujes MMSS":"EMS","Tracciones MMSS":"TMS",
  "Pliometría MMII":"PLI","Otros Auxiliares":"AUX","Zona Media":"ZM",
  "Pliometría MMSS":"PMS","Warm Up":"WUP",
  "Campo - General":"CAM","Campo - 2 conos drills":"C2C",
  "Campo - 3 conos desaceleracion triangulo":"C3T","Campo - 3 conos drills":"C3C",
  "Campo - 4 conos drills":"C4C","Campo - 5 conos drills":"C5C","Campo - 6 conos drills":"C6C"
};
const GRUPOS = [
  ["Cuádriceps","RDE"],["Isquiotibiales","RDT"],["Glúteos","CDE"],
  ["Cadera Trac.","CDT"],["Isométricos","ISO"],["Empujes MMSS","EMS"],
  ["Tracciones MMSS","TMS"],["Pliometría MMII","PLI"],["Pliometría MMSS","PMS"],
  ["Zona Media","ZM"],["Auxiliares","AUX"]
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
  return BLOQUES_DEFAULT.map(b => ({ blq:b, cat:'', ej:'', ser:'', r1:'', r2:'', r3:'', r4:'', kg1:'', kg2:'', kg3:'', kg4:'', obs:'' }));
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
    r.r4  = v(tr,'.inp-r4');
    r.kg1 = v(tr,'.inp-kg1'); r.kg2 = v(tr,'.inp-kg2');
    r.kg3 = v(tr,'.inp-kg3'); r.kg4 = v(tr,'.inp-kg4');
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
  const catAbrev = r.cat ? (CAT_SHORT[r.cat] || r.cat) : '—';
  return `<tr>
    <td class="td-blq"><input class="inp-blq" value="${r.blq}" style="text-align:center;font-weight:700;font-size:10px;color:${color}"/></td>
    <td class="td-cat" title="${r.cat}"><select class="sel-cat" onchange="onCatChange(this,${i})" style="background:#eaf4ea;font-size:9px"><option value="">${catAbrev||'— Cat —'}</option>${catOpts}</select></td>
    <td class="td-vid" style="text-align:center;width:28px"><button class="btn-yt" onclick="openYT(${i})" ${r.ej?'':'disabled'}>▶</button></td>
    <td class="td-ej"><select class="sel-ej" style="background:#fffde7;width:100%"><option value="">— Ejercicio —</option>${ejOpts}</select></td>
    <td><input class="inp-ser" value="${r.ser}" placeholder="" style="text-align:center" oninput="guardarSesActual();actualizarVolumen()"/></td>
    <td><input class="inp-r1"  value="${r.r1}"  placeholder="" style="text-align:center"/></td>
    <td><input class="inp-r2"  value="${r.r2}"  placeholder="" style="text-align:center"/></td>
    <td><input class="inp-r3"  value="${r.r3}"  placeholder="" style="text-align:center"/></td>
    <td><input class="inp-r4"  value="${r.r4||''}" placeholder="" style="text-align:center"/></td>
    <td class="td-kg"><input class="inp-kg1" value="${r.kg1}" placeholder="" style="background:#eaf4ea;text-align:center"/></td>
    <td class="td-kg"><input class="inp-kg2" value="${r.kg2}" placeholder="" style="background:#eaf4ea;text-align:center"/></td>
    <td class="td-kg"><input class="inp-kg3" value="${r.kg3||''}" placeholder="" style="background:#eaf4ea;text-align:center"/></td>
    <td class="td-kg"><input class="inp-kg4" value="${r.kg4||''}" placeholder="" style="background:#eaf4ea;text-align:center"/></td>
    <td><input class="inp-obs" value="${r.obs}" placeholder="..."/></td>
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
  window.open(getVideoUrl(ej), '_blank');
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
  const W = 210, H = 297, ML = 12, MR = 12, MT = 10;
  const CW = W - ML - MR;
  let y = MT;

  const DARK  = [28,28,30];
  const OLIVE = [123,117,63];
  const OLIVE2= [90,85,48];
  const CREAM = [250,244,240];
  const MID   = [44,42,39];
  const MUTED = [107,107,90];
  const WHITE = [255,255,255];
  const BORDER= [224,216,207];

  const SES_COLORS = [
    { h:OLIVE,  light:[238,240,228] },
    { h:MID,    light:[240,238,235] },
    { h:OLIVE2, light:[235,232,220] },
  ];

  // HEADER
  doc.setFillColor(...DARK);
  doc.rect(ML, y, CW, 22, 'F');
  try {
    doc.addImage('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAHgAvQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9KKKKK5zoCil/ipKACiiigAooo/goAKKP4KKACn0yigAooooAKKKKACiiigAfvRQ/eigAooooAKG+5RRQAJ2ooooAKE7UUUAD96KKKAB+9FFFABR9KP46KAChO1H36KACijZQ/egAoplTUCYyiiigEFFH8FD96BhR/HRRQAUU+mUAFH8FG+igTD+Oh+9FFAIP4KKKG+WgYUyn0UAFFMp796BMKKE7UJ2oBBRRRQMKH70UUAFFFFABR/BRTKAH0UfcooAP46P4KE7UUAFD96KKACiiigA/joooTtQAUUfx0UAFFFH8dABRRQ/egAooTtRQAUUUUAFFFFABRQzUUAH3KKKKACiiigAooooAKE7UUUAFFFFABRRRQAL9+iiigTCiihvuUAgooooGFFFFAA/ehO1H36KACj+CiigAfvRRR/HQJhQnaiigEFFFFAwoo/gooAKE7UUfx0AFFFFABRRRQAUUUP3oAG+5RTW606gA2UJ2pypTVWgAooooAKKKX+GgBKKdspaAGUUM/wA1MoEwp6dqE7U5ulAIbRRRQMKPv0UbKAH0yiigAooooAE7UUUUAN++1Oo2U5fu0ANooooAH70Uyn0AFFNbrTk7UAMop9FABRRSfxUAK/eiih+9ABR/BQ/eigAooplAD6KKKACiimUAPooo/goEwoo/gooBBRRR/BQMZT370UUAGyiiigAfvRRRQAUUjPzRQA2n0UUAH36KKKACiihO1ABRRR/BQAUUUygB9FFFABRR/HRQAUfwUyn0AFMp9FABRRRQAUP3o/gooAKPv0UUAFFCdqG+WgAfvRTl6UQ7Wb5aAG0UXSNbx7m+Vf7zfLXK6x8U/Bvhnd/bPizQ9M2/e+06hGrL/wCPUAdVRVXSdXs/EOl2uqadcLeafdR+dbzx/dkX+8tWqBMKG+Whfv18e/tpftm+Kv2ePH2k+HfD2i6RfR3mmreNc6l5jMrbtu1VVlotcm9j6+k+WnRtvr8mde/4KT/Gi/X/AEe48P6Yv/TDS93/AKEzVxt9+3h8dNUVlbx1LZr/ANOVjDH/AOy1SiFz9ml+dvl+b/doZWX70bf981+G+qftN/FzXGb7b8SvEsqt/Ct80a/+O1zOpfEPxVq+77b4q1y83fe8/Upm/wDZqfKJyP3guNe02w/4/NQs7NV/573Ecf8A6E1U9C8f+FfEt81jpHibR9VvlVpPs1jqEM0m1fvNtVt1fgHdSyXE26eaWdv+mkjNX1d/wTHlWL9pptqqrNoN0vyr/tLRawr3P1ofvRQvzUVmaIfSL8zU2nRvskX/AHqpAz5b+IX/AAUa+G/w38ca54X1DRfEs99o901rNJbQwtGzL/d3N92uTl/4Ko/C/dx4d8Wf9+bf/wCKr4J/aql839o74lMv/Qcmryn71Xa5nex+pn/D0/4Xt/zLviz/AMB7f/4qnf8AD0z4X/8AQu+LP+/Nv/8AHK/LNO1O30KIcx+pEn/BVH4YqrbfDfixm/642/8A8VUcP/BVT4Zt18L+LP8Av3b/APxVfly/eiP5WocQ5j9sf2eP2rvAv7R0V9H4emubHVrP5ptJ1RVjufL/AOei7flZf937tezp2r+f/wAI+KNY8DeJLHXvD+oT6VrFjJ5lvd2zbWVv/Zl/vLX66fsg/tgaL+0Po8ek6s0GkePrWP8A0rT922O8Vf8Altb/APsy/eWpcRp3Po5elDdKkk/2ahqbWGFFFFBSCj7lCdqa3WgY6mr1p1NX71ITG32qWOnNHHdXltbSSLujWeZY2b/d3NTYZfNXcn71f7y/NX50/wDBWK6V/FXw5X/pxvP4v+mkdfDOl+K9e0hv9A17VbHb937NfSR/+zVpa5F7H9AH8Pzblp3y7a/DPRf2kfit4e+Ww+JHiWJV+6rag0i/+PV22k/t5/HTSdu3x5LfKv8ADqFnDN/7LScR3P2U3fSo1l+avyh0n/gpp8ZLBl+1L4c1Nf8Appp7Rs3/AHy1dlpP/BVzxVBIv9qfD3SLn+81pfSR/wDjrbqXKFz9Mtvy0L8tfPf7K/7Y2n/tN6hrWmweGbrw9eaXbx3UjT3CzRyKzbflr6EfvStYL3ChO1CdqKCkFFNZ9tOX51oGMopd30p1ABTdv0p1FADV606mU+gAoooTtQAUUUUAFFFFABRRRQAUUUUAFCdqKKACihO1FABQ/eihvv0AFFFFABR/BRRQAUUUUAOb7tNoooEwplP/AI6E7UAgooooBh/HRRRQCCiims+xqBiU/wDjo2/LRQAUUUUAJ/FS/wAdFFABTl+7Ucn3TXyP+2d+25a/A6zuPCPhCaK+8fXEe2ST70ekq38Un96b+7H/AMCamlcTdj6i17xh4f8AC5Z9Z17StIRfvNqF9HD/AOOs26vK/E/7a/wR8Kqy3XxC065kX/llYRyXDf8Ajq1+Meoavea9eTX2pXk+o3lxI00093I0kkjN95m3Vm3X3vl+WrcSHI/WDWf+Cnfwi04Mum2viHXJV+75Vmturf8AfTV5h4n/AOCssfnMuhfDjcv8LalqTf8AoMdfnhC+xaav+s3UKIr3PsrxJ/wVD+Kl/Gy6XpfhzRVb7rRWrTMv/fVeX6x+3D8bvEytHdePr6zjb/lnp8a2/wD6DXhMz7qks4pLiaOGKNpZpG2rHEu5mb+6q0+UDe8WfEHxR4rZpNX8SavqbN977TeSN/47X3N+w7+wOqLY/EL4naWvmfLcaT4du1+b/Zmul/8AQY/++q6r9jf9gqHwaum+PPiVZx3PiBlW403Qp13R6f8AxLJMv8U3+z/D/vV9xR/Lu3feqZS6DSuOoo3fNRUWsWlYa3yV+XP/AAVG+f45eHW/6gK/+jGr9Rm+evy9/wCCpXyfG7w7/wBgFf8A0Y1UiZHxjI+6oadu301+9aMzYK1O31FSt1pAh336+rP+CZ8X/GTy7f8AoB3n/stfKK9a+tP+CY/z/tNN/wBgG8/9lpMo/WRfu06iisjRBTZE+7TqF+ZlqkDPw1/aYb/jIb4lf9hy4/8AQq8xr0r9pr5f2jPiV/2HLj/0KvNa0MmFNbrSUUCQU9O1Mp6/coBjo3+arVnrN5omoWt9YXUtjfWsizQ3MDbZI2X7rK1Uv4qST56aEfqx+xl+3Na/Gm3s/BfjSZLTx5HHtt7v7serKq/+Ozf7P8VfYEbb6/nps5ZrO6huLeZ4LiFlkjliba0bL91lb+Fq/Tz9i39vCDxytj4H+JN5HZ+Jvlh0/XZflj1L+7HN/dm/2vut/vVm1c1Pt+mVJJ8jVHU2sUgooooGD96ZRT07UPYTPzV/4Kubv+E2+HK/9ON5/wCjI6+FWr7w/wCCsSKnjD4ct/043n/oyOvg1nrSOxmLRRTKZLHK9DfPTU7UP3poR91f8Eo7jd8RvHkf/UJh/wDR1fpc/evzJ/4JPf8AJTvHn/YHh/8AR1fps/es2bIZRRRUD6nzV/wUE8ZeIPAH7PNxrHhrVrvQ9Uj1ixjW7tJNsiq3mblr4Z8Kf8FA/jd4aiVZfFEWtQr/AMstWs45t3/Aq+0P+Cm3yfsu3H/Ycsf/AGpX5O+bWqVzN7s+6PDP/BVnxFazKviPwHpmoR/xSabdSW7f98t8tez+Ff8AgqB8LtWVF1rS9f8ADsjdWaFbqNf+BLtr8rN/zUM9DiF7H7aeEf2vPg341ZV034g6Oszf8sdQZrVv/Ii7a9U0nVLHXofO0u+tdTh/562VxHMv/jrNX8+vyv8AeVW/3q1tF8Q6l4fuFm0vUrzTJl+7LaXDQsv/AHy1LlGpH7/M2xtrfK391qd9yvxf8H/trfGrwW8Ys/Hl9qEEf/Ltq6reR/8Aj1e2eEf+CrPiywaOHxR4J0rWlX70+l3DWcn/AHy25aTiO5+my9KWvkbwX/wU4+EevLHHrcOueFZm+99ts/tEa/8AbSP/AOJr3bwT+0F8NfiNt/4R7xxoepyN92BbxY5P+/cm1qm1hp3PQKP46d/Crfwt/FTd9BQUUU+gBlFD96KBMKKKKAQUUP3ooGFGyih+9ABRQnam7vpQA6iiigAooooAKKKKACiij+CgAooqrqWr6fodm15qV9a6ZZx/eubuZYY1/wCBNQJl2mV4T48/bk+CfgNpI7jxtbardR/8u2iQtdN/30vy18++Nv8Agq9otruj8IeA7zUG/hudbulhX/v3H81O1yb2Pvjd/wB9VDqV5b6RatcXtxFY26/8tbuRYV/76avyS8bf8FHPjN4t8yPT9UsfCtq3/LLR7VVk/wC/jfNXgHi74jeKvHlw03iPxJqutSM27/TbppF/75+7TUROR+yHir9sH4N+BpJI9U8eabLcL/yw0/ddSf8AkNa8B+IX/BU/wTpEjR+FfCuq+IZP4Z7tltY/++fvV+aNu6xL8qqv+7VW8bdJuqlEE7n7mfs2/Fq8+OHwb0Hxpf2MGmXWpeZutrZmZY9rbfvNXpNfPn/BPtP+MTfBf+7cf+jGr6DqGrFoKfsoTtT6Qxj96F+9/tU1utfEP7a37dcPw+XUPAPgC6S58VSK1vqWrRNuj0vd96OP+9N/6DTSuS3Y6D9sT9uOx+E9rfeD/A11FqHjhlaO6vl+aHSf/ZWm/wBn+H+Kvyt1S8uNUvri8uriW8uriRppp523SSSN95mb+JqJLqSWSSSWRpZJGZpJJG3MzN/EzVXb71aWsY3uOX5FqP7zU5vu0L1oAd/BTVX5qc33K1vCvhfVPGWuWOi6Hp8+q6tfSeTa2lsu6SRv8/xU0NFfSdGvNe1Sz03TrWW+1C8kWG3toF3STSN91VWv1E/Y1/YXt/g39l8ZeOreC+8bN81rYfLJBpP+1/dab/a/hrqP2O/2MtL/AGe7GPxB4g8jV/iBcR/vLlfmg01W/wCWNv8A7X96T+Kvp5+9Zs0iH3/mb71FCdqZUlj6PuUUUCYV+W//AAVSf/i+Xh3b/wBANf8A0Y1fqRX5b/8ABVBf+L4eG/8AsAr/AOjGqkQz4vTtR/HR/BTK0Yh9NbrTn70ykAi/JX1p/wAEyW2ftOf9wO8/9lr5Mr6v/wCCZX/Jzi/9gO8/9lpMD9bH70yin/crI0QU5fvLTaF+8tUgZ+F37Tn/ACcb8SP+w5cf+hV5tu+lekftNfP+0Z8Sv+w9cf8AoVebVoZMKKVetJQJBRRSNQULRRRQSyWOpvN+Wq/8dD96d7Aj9Cv2M/2+lihs/AfxS1JlVdsOl+JLn5v9lYbpv/QZP++q/QyP5lVtyurLu3L/ABLX881fc/7Ev7dbeAFtfAvxGvpZ/DLbYdN1mX5m03/pnJ/eh/2v4aiUL6lo/TemVHDdQ3UMc0Ekc8MirJHJE25ZFb7rK38S1JUFoKH70n8VLQ9gZ+bf/BWT5/GHw5/68bz/ANGR18HV95/8FYF/4q74d/8AXjef+jI6+Ca0jsZhR9+ijfTAKH70J2prdaAPuT/gk/8A8lM8ef8AYHh/9HV+m1fmX/wSg/5KZ47/AOwPD/6Or9MazZUQp38VNoqSup8pf8FNv+TXbr/sOaf/AO1K/JffX6z/APBTT/k126/7Dmn/APtSvyWk/wBYa1RjLcdRTKVutMQ7+OpFeoV607fQBJv+Wo1/1lO+4tNX5qAJGl2r8tNhVfM8zau7+8vytUclOjegaPRPBv7Q/wASvhy0a+HPHGtafDH922+1NND/AN+2r6G+H/8AwU9+Jnh7y4fEul6R4st1+9J5f2WZv+BL8tfGbdak3fLRa5V7H6oeCf8AgqF8M9b8uPxHpOteF5m+9L5f2qFf+BL83/jte8eCf2m/hX8QWjXQfHmj3M0n/LCeb7PJ/wB8yba/DdX+anNtdtzKu7+9ScQ5j+hSPbLCsyMssLfdljbcv/fS0K++vwn8B/Hj4hfDSZZPDXjLWdKVf+WC3TSR/wDftvlr6O8D/wDBUr4jeH5I4/FWi6P4stV+VpUVrO5/76X5alxGpH6m0V8hfD3/AIKbfCfxVJHHr1vrPg64b5Wa7h+0W3/fyOvpLwf8WPBfxEt1k8L+LNH15W/htLxWk/79t81TaxSdzqKKfTKCgooooAKKKKAEHSilooAKKKE7UAFFFFAAnan0yigAr5T/AOCmm3/hl+bcu5f7c0/73/XRq+rH718o/wDBTX/k12f/ALDmn/8AoTVUfiRLPydZ9y7V+Vf9moW6U1O1ObpWj3MRqdqfTKfSARXqGT5qkpypQB+x3/BPd937Jvg3/t4/9GV9FN0r5v8A+CfLbP2U/Bq/9fH/AKMr6S+/WbNkQ7tlSL87f7VQzfJX55/tlft7ySzap8PfhtdNFGrNa6p4kgk+Zv4Wht/9n+9J/wB80JXBuxv/ALb37dH/AAj/APaHgH4bagG1QbrfVtftm3fZf70Nu3/PT+9J/D/DX5rSfMzMzM7M25mZtzM1WpJd9VW61paxje4bvpQv3qSn0ANbrRH940L87V2nwt+E3iT4x+MLPwz4W083upXHzSN92O3j/immb+FVqk7Ba5l+D/AuufEbxNp/h3w1ps+q6xfSeXDbQL/48391V/iav13/AGR/2SNF/Zv8NNdXTQav43vo/wDTtUVflhX/AJ94f9n+838Va37Mn7K3hr9nLwvJDaMureJrxduoa7LHtkk/6Zxr/wAs4/8AZ/i/ir2v7tZN3NkrAqbadRQnapKGU+mU/wDgoAKP46KKAB+9flv/AMFTn3/HDw3/ALOgr/6Mav1Ir8t/+Cpf/JdfD/8A2AV/9GNVIiR8Xv3oTtQ/ehO1aMkKZSt1pKQCNX1h/wAEy/8Ak59f+wHef+y18ntX1d/wTI/5OeX/ALAd5/7LSYH63UUfx0VkaIKF+8tFNHRafUGfhf8AtMf8nFfEr/sPXH/oVebV6T+0z/ycR8SP+w9cf+hV5tXR0MmFFJ/DS0mJBSNS0yb5VqSgjfc1WNlfX3wx/YXb43fsu+H/AB14QuvI8Zf6Utxps7fudSWORtu1v+Wcm3/gLV8o6xo15ompXWn6jaz2OoWsjQ3Ftcx+XJDIv3lZapEszU7U1utOk60yhghV61Mr7Kbspr96V7FH11+xv+2/efBi8tfB/jK4lvvAcjbbe5b95No7N/d/vQ/3l/h/hr9VtLv7XWdNtb6wuIryxuo1mhuYJN0ckbfdZW/u1/PenavqT9kX9tfWP2ep49B1uOfXPAc0m5rRW/f6ezfekh/2f70dS4jR+un8dPrC8IeMNH8eeHbDxBoGoQ6rpGoR+db3cDfLIv8A7K395a2N30rK1ij84/8AgrB/yOHw7X/qH3n/AKMjr4E/ir7x/wCCr0uzxt8O93/QPvP/AEZHXwe9ax2ICj+CmU+mAU1utOqMfxU0Jn3R/wAEo/8Akpnjr/sDw/8Ao6v0xr8zv+CT6b/iZ46/7A8P/o6v00rNmiGUU+mVA2fKH/BTf/k124/7Dlj/AO1K/JdvvV+s/wDwU4/5NduP+w5Y/wDtSvyYb71bxMmN3UtFO/hpskbT1+/TKKkaJVt5rpvLt4ZZ5Nu7bBGzNt/4DRaovzKzbW/utX0p/wAE44vN/au0FWVWVtPvtysu5W/0dq/Urxh8DPhz48t2XxD4J0PU2ZdvmNZrHJ/30tJuxVrn4Ozfe205U+Wv1e8Zf8EzPhH4omkk0ZtY8KzN937JdedGv/AZK8Z8Yf8ABJ/XrONpPDXxA0/UF/hg1Sxa3b/vpWZaE7hax8CU+vevGn7C3xq8DeZJP4Nl1e1j/wCXnRpluFb/AID96vEdc0nUPDl01rq2n3WlXC/eivrdoW/8epksor1oZ6cqfLuX5l/vUbKBArU2SkpW60DRJbvsruPgncNF8avAciM0Tf25Z/NE21v9cv8Adrg1613XwTXf8YvAv/Ycs/8A0ctBR+811/x8yf71Qv3qS6+a6m/3mqOs2aIH70UUfcpDCj+OiigAopG60UALR/BRRQJBRRRQMNlH8dCdqKADZXyj/wAFMv8Ak2GZf+o5p/8A6E1fV1fKP/BTH/k2Sb/sOWP/AKE1VH4kSz8lW+RqX+GlkptaPczQU+mUUhh/HTl6U3+Cjd81AmfsR/wT+/5NV8G/9vH/AKMr6SjlVFZnZVVV3MzNt2rXzj/wT/eNP2S/CczyLFHH9qaSWVtqqvmfMzNXyX+25+3NN48uL7wD8Pr6SDwrGzQ6lrMDbW1Jv4o42/hh/wBr+L/drO12WdH+27+3K3iY6h4C+G2oNFo67rfVNftm2tef3oYW/hj/ALzfxV8BL8lWvtG6Naryda0tYhBvofvTV61LQMiXrTtvy0P3r2L9mf8AZn8TftIeLmsdNX+z/D9my/2prci7o7Vf7q/3pG/hWqTsJnO/AX4D+KP2gvHUfh3w1bqqxr5l9qU6/wCjWMP/AD0k/wBr+6v8Vfsh8B/2ffCv7PHgldD8OW/m3U22TUNUnX/Sb6T+8zf3f7q/dWtb4T/Bvwv8EfBtr4b8KaetnYx/NNO3zTXUn8UkzfxN/wCg12W/dWTdzRDY0pz96E7UVJQN9yhO1FMoAe/ehO1FFABRRRQAyvy8/wCCpn/JcfDv/YBX/wBGNX6h1+XX/BUz/kuHh3/sAr/6MaqREj4vooorRmbGUU+k/hpoQxq+r/8AgmR/yc9H/wBgO8/9lr5Qavq7/gmX/wAnPR/9gO8/9lpMpH63UP3oorJmqGU5f4aWhf4KEDPwv/aaX/jIr4lf9hy4/wDQq80r039pr/k4n4lf9hy4/wDQq8yrQyYUU7+Km0CQUv3220v8VLH1oGz9iP8Agnf+6/ZL8Iqv/Pa6/wDRzUftcfsZaL+0PpcmuaS0Wh+PrePbDqG393eKv3Y7j/2WT7y1J/wT3X/jE/we3/Ta6/8ARzV9GSN8tZ3sy7XP5/fGnhDXPh94qvvDviPTZ9K1ixk8ua2nX5l/2l/vK38LVkr9+v2m/aY/ZX8N/tI+F/s97s0zxNZr/wAS3XVj+aFv+ecn96Fv7v8AD95a/Iv4nfCrxJ8HfGV54Z8Vae2n6lb/AHf4o7iP+GSNv4latL3JkrHIUx+9SNUFBA9fv1Jupq9Ka/egaPob9kz9rfXP2cfEH2O4WXV/A95JuvtJ3fNC3/Pa3/uyf7P8Vfrl4D8c6H8SfDNj4g8OalFquj30fmQ3MDf+Osv8LL/EtfgXC3y17R+y7+1V4g/Zs8ZNNbrJqvhW+kX+1NEZvlk/6bR/3Zl/8e+61S1ctOx9Bf8ABWhPK8bfDn/sH3n/AKMjr4PbrX2l/wAFJPiF4f8Aiw3wr8UeF79NS0e8026aOVfvRt5ke6ORf4WX+Ja+LV61VrA3cSinfxU2gQ+mt1p1FNCZ9x/8En/+SlePP+wPD/6Or9Na/M3/AIJP/wDJSvHn/YJh/wDR1fplWbNEMoooqBs+UP8Agpv/AMmu3H/Ycsf/AGpX5Mv3r9Zv+Cm//Jrtx/2HLH/2pX5Lt96t4mYlKvWkpW+9TZLEpGpaXb9KkEfU3/BNlP8AjKrQ2/6h99/6TtX63SS75Nq1+APhvxbrHgvVrfVvD+qXei6pb/6u7sZPLkX/AIFX0N4F/wCCi3xq8LtHHe6tpviq3X+HWbNfMb/tpH81S1ctOx+wEKfxUTPur4B8I/8ABWG38tY/Ffw9li/vXOiXyyL/AN+5Pmr2bwX/AMFB/gn41mjjfxNL4eupP+WGt2rQ/wDj33ai1h3ufSkP7r7vy/7tZPiLwlovi2FrfW9H0/V4W+XbfWsc3/oS03w/4v0HxbarcaHrmnavCy7laxuo5K2FRkb5lZf96gD5z8cf8E+/gn418yRPC7+HLyT/AJedEumt/wDx35lr5/8AGn/BJ6T95J4P+ICt/dttds//AGpHX6HUK2ynewWufjL8RP2EvjV8PlkkfwjJr1nH832vQJlul2/7v3lrw+80i+0O4a11SxudMuF+VoL6FoW/8er+gSZN7bl+9/eWs3WPB+g+MrdrXX9F07XLdvl26haxzf8AjzfNTUhOJ+Ac0W1d1dd8FZf+LxeBVX/oOWP/AKOWv1T+I3/BPH4K+Mo5pLXQ7rwrdN/y00S6ZV3f9c2+WvDNL/4JhX3gv4keG/EHhzxxbanpum6pb3klpqlq0Nz5ccisyqy/KzfLT5hWsfoRMn+kTf7zU2pJm82Zm/vNUdZ2saIKKKE7UxhRvoooAZRT6KAB+9FFFABRRRQAUUb6fQAyvlH/AIKaf8mxyf8AYc0//wBCavq6vlL/AIKZ/wDJr83/AGHNP/8AQmqo/EiWfks3SoqlbpTa0e5iFFFFIA+/QqfNRT6Bo9j1D9pvxRF8CdD+Fej3EmkeHbVZP7QaBv3moM0m7azfeWP/AGf4q8bmTc26myN81CtQUNX5Kc/emt1oX56AEp9Gyhvv0AH8demfA39oTxt+z74ibUPC2qeVazMv2zS7n95aXi/7S/wt/tL81eZp2qRn+Wi1xM/ab9nL9rfwl+0jpHl6bJ/ZXie3j8y80C5b94v/AE0hb/lpHXt0fzLX8+Ph/wAQ6p4X16z1jRtQudM1Szk8y3u7STy5I2/2Wr9PP2U/+Ch2m+ORZ+F/idJbaH4ibbHa66v7u0vm/uyf88ZP/HWqZKxZ9qN8lNprSqzfLTv4KgpBRR/HRQMKKKKACiiigBlfl5/wVQ/5Ld4b/wCwCv8A6Oav1EbrX5d/8FTv+S3+HP8AsAr/AOjGqkRI+LaKfTK0ZIU1vu06mt1pAJX1f/wTN/5Oej/7Ad5/7LXyhX1h/wAEzf8Ak56H/sC3n/stAH610fcplPrNmiChfvLQnahfvLQgZ+GP7TX/ACcT8Sv+w9cf+hV5lXpf7TX/ACcR8Sv+w9cf+hV5rt+laoyYlPpu36U6mxIa3WnJ2ooX79SNn7Hf8E9X/wCMS/B//XS6/wDRzV9EN89fN/8AwT1fd+yj4R/67XX/AKOavo+s2aIXbsrzf47fs/8AhH9oLwj/AGP4ks/9IhVmsdUg+W5sZP7yt/Ev95W+WvR6VutTewNXPwv+PXwO8Tfs/wDjibw74jt/lbdJY6lEv7m+h/56Rt/e/vL/AA15yvzV+7Xxi+DHhf45+Dbjw34qsftdnJ+8hnj+Wa1k/hkhb+Fv/Qq/IX9oz9mTxN+zd4sXT9V/4mOh3jM2l63Eu2O6Vf4W/uyL/Etap3JaseQfw0j96dJ8lRUxD0qGZfmqZflprdaCWSLcM9usZZtq/Nt3fLUa9aF60N1oBCU+mUUFBRT6a3WmhM+5f+CT/wDyUrx5/wBgeH/0dX6a1+ZH/BJ//kpnjr/sDw/+jq/Td+9Zs0QyiiioGz5Q/wCCm/8Aya7cf9hyx/8Aalfky336/Wj/AIKaf8mu3X/Ya0//ANqV+S7ffrVGTG/dpKVutL/DTEhF607ZTKXd9KAY37zVNH8lNVaG+T5aAQ6aXdRCu3/d/u1Gvz1LQUW9P1a80a4WbTrqfT5l/wCWtpM0Lf8AjteweC/2xvjJ4GWOPTfH2pS26/8ALDUFjul/8iLXiKdqkZ6LXA+2vBX/AAVO8eaWyx+KPDOj+II/4pbbdZyf+O/LXung/wD4Kd/C3XpI49e0/XPCszfeaWFbqBf+BL81flar/NRMm6k4hex+7nw/+PHw5+Jcat4c8caLqsjf8sFuljm/79t81d9JE0C+Zt+Vv4v4a/nps38qTd/Ev3Wr0rwf+0f8TPhttbw5441rT41/5YNdNND/AN+5Ny0uUOY/ciSXzaFTbXyv+wP+0P4u/aC8E+JLzxhcWtzfaTqEdrDPbW/ktJG0Kt8yr/Fur6qrO1jRO4UfwUP3oTtTGFCdqKP46ACiimUAOHSim0UAPfvRRRQAfwUUUUAFPplFABXyl/wUz/5Nfm/7Dmn/APoTV9W18n/8FNv+TYZP+w5Y/wDoTVUfiQpbH5L0UP3orR7mHQZT6P4KKQ0FJ/FSv3prdaCh1J/FSp2qOT5aAHN1pyp8tdJ8L/hp4k+L/iyz8N+FdLl1XVLhvur8scK/xSSN/Cq/3q0vip8JfE3wZ8VXHh3xXpcmn6hHu8tvvQ3Uf/PSFv4loJZxLffoprfeoXrQCHb6KNm6j+OgGOjTbTpJd8bL95aa3SmqnzUAj6+/ZJ/by1r4R/Y/DPjdrnxD4NXbHDc7vMvdNX/Z/wCekf8As/eX+Gv1G8J+MNF8deH7PXPD2pW2r6PeLuhu7Ztyt/8AEt/s1+AKvsr1b9n39pTxh+zx4o/tDw9dfadLuJFa+0S5b/Rrpf8A2Vv9paTVy07H7eUV5f8AAf8AaS8G/tD+Gv7Q8OXXkalbqv27RLlv9Ls2/wB3+KP/AGlr05W3rWVrFp3HUUUfx0xhR/BT6YzUAFflv/wVM/5Lh4d/7AK/+jGr9Ra/Lz/gqcv/ABe7w3/2AV/9GNVIiR8Xt0ptPplaMkKT+KkbrSUgCvq3/gmf/wAnPQ/9gW8/9lr5Vr6q/wCCZ/8AydBH/wBgO8/9lpMD9a6fRQ/esjRDKfH95KKb9xlqkDPwx/ac/wCTjfiV/wBhy4/9CrzSvTf2mvn/AGhviU3/AFHrj/0KvM161oZMdTKe/eigkavWpaZQz/LQUj9hP+Cd/wA37J/hP/rtdf8Ao5q+ka+bP+Cdn/Jp/hP/AK7XX/o5q+lqzZqhlFFFIYu36VzfxE+HPh34q+FL3w34o01NS0m8X5om+9G38MkbfwyL/erpqZSvYTVz8Xv2rP2Vde/Zu8VfP5mq+Eb6Rv7N1lV+9/0xm/uyL/49XhK9a/oA8WeEtH8c+HdQ0HXtPg1PSb6Pybi0nXcsi/8AxX+1X5K/tafsb6x+znq0mraWs+r+AbqTbb6gy7pLFm/5Y3H/ALLJ/FWqdyGrHzXTKfJ8rUUxDV605+9NbrR96gBf4aP4qbRQAUrfdpf4abTQmfcv/BJ//kpnjz/sDw/+jq/TavzL/wCCUKbfiR48b/qDw/8Ao6v00fvWbNEMoopdv0qBs+U/+Cmn/Jrd1/2GrH/2pX5Kt9+v1m/4Kc/8mt3X/Ya0/wD9qV+TNaozGt1o+9Q3WhetMliUUUU0I9J+Afwbvvj18RrPwbpupWulX11bzTR3N2rNH+7jZtvy/wC7Xq3i7/gnF8bPDzSSWWk6f4lhX+LS7xWb/vlvmqP/AIJws3/DV2g/9eN9/wCk7V+wVvt27mqL2NbXPwb8UfBvxx4BZo/EPhHWNKZfvNPZtt/76ri5JV8zbu2t/db71f0NSXDPG0f8P91q4nxV8G/AvjmORfEHg/RdV8z7zT2Me7/vpfmo5hOJ+De3YtDdK/Xbxl/wTl+CviVZJLPR9Q8OXDfxaXfMqr/wFty14X4s/wCCT0iNJJ4V+IW5f4YNZsf/AGpH/wDE01IVrH58VJ/DX0r40/4J3/GzwksklvoNn4lt1/i0a8Vm/wC/bbWrw/xJ8OfFngiZofEfhfWNDkX5W+3WMka/99bdtO9wOZ+5Tt2+ibbt+Vlb/daq8MuySgTP0s/4JQxbfh/8Qv8AsMW//pOtfeC9a+G/+CT+2X4c/ED/ALDEP/pOtfc1Zs0QUyin/wAdIoKKKKACik/hpaACikHSigBaKKKAB+9FFFAAnaiil/ioASvk3/gpz/ybDJ/2HrH/ANCavrKvk/8A4Kbf8mwyf9h6x/8AQmqo/EiWfkvRRRWj3M0FMp9FIYUyn01vu0AEP3tteu/AD9mXxZ+0X4l+waDAbTR7dl/tDWrhW+z2a/8As0n92Na7v9kH9irWv2hbyPxBrMkui+A4ZNsl2v8Arr5l+9HD/s/3pK/WrwP4K0H4c+F7Hw74a0uDSNHs12w20C/+PN/eZv4mak3YDifgb8AvCP7PXhNdF8L2O2SRVa81Kf5rm+k/vSN/6Cq/Kta3xY+DvhP43eFZvD/i3S01Czb5oZPuzWsn/PSGT+Fv/Hf71dw/emqlZc2ppa6Pxm/ah/Y98Ufs36k14wk1vwbcSbbXW44/9X/djuF/5Zyf+Ot/DXgSrX9BmsaRY+IdLutN1Kzg1DT7qPybi0uY/MjmX+6y1+bv7WH/AATxvPB63niz4W28up6H80114d/1lxZr/E0P8Ukf+z95a1TuZ2sfC7feptSMrLIysrKyttZW/hao99Mlg33KcvSlpG6UCFpVfatNXpRJQNGx4R8c698PvEVn4g8Oapc6RrFm26G7tm2sv+z/ALS/7LfK1fp5+yf+31ofxkks/DPjT7N4a8aN+7hn3eXZak3/AEz3f6uT/pm3/Aa/Kfb9KktU2srf7VJq5adj+hrymRfmqOvza/ZR/wCCh954QSx8JfE+d9Q0FVWG18Q/euLNf4Vm/wCekf8Atfer9E9H8Q6f4l0u11TSL621PTbpfMt7u0kWSOZf7ystS1YtO5pb6KFWipGN+7X5f/8ABU7/AJLV4b/7AK/+jGr9QG+7X5e/8FSmX/hdnhtf+oCv/o5qpESPiv7lD96NlFaMkZT6ZT6QA/evqr/gmiv/ABk9C3/UDvP/AGWvlXZX1l/wTLi/4yaj/wCwHef+y0mB+si9aSlb5Gp1ZGiGUs38P+9Tv4KI/nZapAz8Lf2km/4yG+JS/wDUeuP/AEKvNq9L/aWi8r9oz4kf7WvXH/oVecslaGTG76KKdsoJG/wVH/FUj96FT5d1AH7Df8E802fsn+Ef+u15/wCjmr6Sr5x/4J4pu/ZL8I/9drz/ANHNX0dWbNkD96ZTv4qbSKH0yiigAqtrGjaf4h0m80vVbODUNNvI2huLS5j3RzRt95WWrlFF7Caufkb+2n+xlqHwF1abxL4Xt5b74fXUnyt/rJNLkb/ljN/0z/uyf8Br5Zj6V/QZq2nWuuafdWN/axX1jdRtDcW1zH5kc0bfeVl/u1+W/wC2V+xDdfB6a68YeCLWfUPA8zNJcWiq0k2kt/tf3of9r+H+KrTuQ1Y+O2+amVKy/LuqKtEQwpV603+GloYIVutJS7fpTdnzUkNn3R/wShf/AIuR46/7A8P/AKOr9Ma/M7/glKv/ABczx1/2B4f/AEdX6afwVmzRDKKKKgfU+UP+CnHz/su3C/8AUc0//wBqV+S7fer9av8Agpkn/GLtx/2HNP8A/alfkrP/AKw1qjN7sSilXrSUwCiilX71AH0B+wz488O/DT9ozQ9e8VatBoejx2t1DJe3P+rVpIWVd3/Aq/Xjwr8S/CfjW3WbQfE2kavC33WtL6OT/wBmr8C/N2L8vy1Dav8AZbj7RB+4m/56wN5bf99LSauF7H9DUkUi/Nt+WnK/y1+GPhH9o74oeCGj/sPx9r1oq/dikvPtEf8A3zJur2rwn/wU0+MHh9Y49W/sPxLCv3vtdn5Mjf8AAo//AImpcX0GpLqfrBv3NTtuyvgfwf8A8FWdHnaNfE3gG8s/70+l3izL/wB8ttavavC//BQf4J+KlVZfElzoMzf8stXs2h2/8C+7U2a3HdPY+kPvfeqO4ghuoWhuI0nhZfminXcrf8BauT8K/GHwD4y2/wBh+NtA1Vm+7FbalGzf987t1dlNE3l+YPmj/vL8y072C1zyPx5+yX8H/iMsjaz8P9Ha4b/l5so/scn+9uh2187+Nv8AglR8P9U8yTwv4m13w1M33Y7ny76D/wBlavtpbiplTzaOYLWPnn9jH9mbVv2ZPDvirSdU1qx1xdU1CO6t57KOSPaqwqu1lb+Kvohvv0SfJTfvUr3KQN1pKenaj+CgYynp2oooAKKH70ygCQ9aKSigA/gooooAKKKdsoAbQ/ej+Oj79ABXyj/wU0/5Nhm/7Dmn/wDoTV9XV8p/8FMP+TYZ/wDsOaf/AOhNVR+JEs/JVulNqSSoK0e5mh9FPpj96QwoZNy0bvmqRaAP2A/4J2xNF+yn4T3L96S6b/yJX0pXgv7Ddn9j/ZZ+Hq/89LNpP++pGr3qs2aIH70UUUgYfx01v71OplAI+TP2sv2EtD+NMN14m8HJbeH/AB1t8xl/1dpqX+zJ/dk/6af99V+WvizwhrXgPxBfaD4h0250jWLNvLuLS5Xay/7X+0v91l+Wv382fNXlnx//AGZPBv7Rnh37D4gs/surW8bLp+t2ir9ps2/9mj/vRt8v+7VxdiZK5+IEdNb79erfH39nTxh+zp4k/s3xLZ+Zp8zN9h1m2VmtLxf9lv4W/vK3zV5XDtZvvVV7k2sOWmt0rW03wzrGsyeXpuj6hqDf3ba1kk/9BWvQNB/ZV+MHipVbTfhzr8kbfxS2bQr/AOPbaAPJ1+/VhU2V9NeGf+CcHxu1lVkuND07RVb/AKCWpQqy/wDAV3NXpmk/8EqfGUsStqvjjQNP3feS2hmuNv8A46tF7AfB9xcN92vbv2X/ANq/xh+znrSx2Ejav4VuJN15oFzJ+7b/AKaRt/yzk/2v++q+rNH/AOCT/h9WX+2fiJqdy38S6fpsca/99MzV6R4a/wCCX/wi05d13eeJtXf/AKb30cK/+Q46Tdxo+gPgx8cPB/x18KLrHhTUFn2qv2qwm+W7s2/uyR/+zfdau4b5a8g+GP7Ifww+DfiNNe8M6LeWmsQq0a3cmqXEnyt95WXdtZf9llavX371DLQV+V//AAVQl/4v14dX/qAr/wCjGr9Tm61Tm0bT7+4Wa5sbW5mVdqyT28cjL/wJlpp2Bq5+BdnoOpajH/oel315/wBcLWST/wBBWtix+EfjzV9v2PwT4jut33fL0m4/+Jr96IVW3XbEqxL/AHYl2/8AoNO85v8Ano3/AH1T5ibH4a2P7LXxi1H5rf4Y+J5V/wBqxZf/AEKugtf2KPjlfquz4a6vFu/57yQx/wDoUlftRt+ahkV/4Vo5gsfjnpP/AAT4+O1+3zeEba2X/p51S3X/ANmr6c/Yt/Y8+JXwR+My+KPFVnpltpa6XcWv+jXyzSeZJt2/Ktfd0aeU1TSPvWk3cLWGt81FFMqSkFLu2NTv4Ka3z0A1c+Jfid/wTOsfiN8QvEXipviBdWP9sX0l81sumq3ks38O7d81c7D/AMEodH2/P8SNTb/d02P/AOKr78/5Z7abtp3sTY+DV/4JP+H/AOL4jav/AMB0+H/4qrEf/BKPwqn3/iBrzf7tnCtfdTdKWjmCx8Mf8OofBr/8z54h/wDAe3qT/h1H4LZVVPHniFf7263havuOkX5Go5gscP8AA34RWPwH+Gel+C9N1C51OzsWkZbm7VVkbzG3fw13j96H70Ur3KSsNbrTqZT07UDGUUUUAPplFFABStbx3UMkM8aSwyK0ckci7lZW+8rLTqKL2Ez82/2qv+CdWvW/ipta+Eenxaho+oM0lxoTXCwtYyf9MWb70bf3f4a+c9Q/Yw+OWnK3m/DPWJdv8Vt5c3/oLV+2H36aqru+7VKRNrn4T6l+z18UNDVmvfh34mgVfvf8SuRv/QVrl9Q8F+JNLb/TPDes2f8A130+aP8A9CWv6At391mX/gVDbm+V2Zl/2m3U+YLH887fuvll3RN/dlXbTZHj2/LIv/fVf0GXXh7S71WW40uxuVb+Ge1jk/8AQlrk9c+Bnw58RxtHqXgHw1fK3/PXSYf/AGVaakFj4D/4JNvu+JXj7/sDw/8Ao6v0zrhvh/8ABPwL8Kr6+uvCHhXTPDk18qrdNp8bR+Yq/dX71d5UN3GlYZRRRUjZ8pf8FOH2fst3H/Ycsf8A2pX5Jr87NX7UftjfBHXP2gvg3N4R8PXVjZ6k2oWt4suoSNHHtj3bl3KrfN81fn1rX/BOH44aCHa20HTtaVf+gbqkLM3/AAFmVq1TsZny83yUlep+Jv2Xfi94VZv7U+HPiGCNf+WsVi0y/wDfS7q891Lw9qWjSNHqOm3ljIv8NzbtH/6FTvclmdT6arru21JsoERt89R/cWptlRslUgHRvTqaqUfeoYEm+jfTaZUgW4ZfKbcvyt/eX5WrtvC/x1+IXgjb/wAI/wCNNc0xV/5ZxX0nl/8AfLfLXA76H70DR9QeD/8AgpL8ZvDLRx6hfaZ4lhX+HUrFVZv+BR7Wr6C8A/8ABVnTZfLj8W+AZ7b+9c6JeLJ/5Dk2/wDoVfm6q1Y83YtJq5V7H7FeG/2//gf4v8tW8VSeHrhv+WWt2ckP/kRdy/8Aj1ezeF/Gnh/xlarceH9e0zXLdv8Alrp95HN/6C1fgXJLvVq3PhTdXGnfFDwrNazSW0n9rWq+bAzRt/rl/u1Ljcakfvwv3KKmuF2TNUL96ktO4UUUb6Bhvo/joooAKKU9aKAEooooAKKKKACjfRT6BMZXyj/wUyfZ+zHJ/wBhzT//AEJq+rq+Tf8Agp0n/GL8zf8AUc0//wBCaqj8SJPydmao9lNj+erHlVt1IRCnahmp0vyfLTYUaWZY41Z5G+7GvzM3/AaTEwVacv3v+A16F4T/AGdfih458v8AsHwD4gvo2/5btYtDD/38k2rXuXgf/gmT8XvEbbtXk0PwrD/eu7z7RJ/3zD/8VUjR+gH7HMHlfsu/Df8A7Bat/wCRGr2KuV+EfgVvhj8LfC/hOW6jvpNHsVs2uYo/LWRl3fMq/wAP3q6hutZs1QbfpTqKKQxlKyU6igBq9akX5KbTm6UAYPjTwXoPxE0ObQ/Euk2muaTMytJaXce5dy/db/Zb/aWuf8O/Af4a+FdraX4B8OWci/dZdPjkZf8AgTbq7migBlnaw6cu20hitI/7ttGsP/oNOkVpW+dmb/e+apKKAHRvsWo5H3U5vuVH/FQA1YqsK+xaaq0UAOZ91RUUUALt+lOX7lFMoAKKKKACn0UUAFCdqKT+KgBaNlFFADKe/emUq9aAEoop796AGt89G36UlPoAKH70n8VSUAQ0u36UlFABS/dpydqKACiij+CgAooooAKKKKACiiigAooooAKKa3WhetAAqU6imUAPooooAbt3tRM+5dtOTtTKAHw7ovusy/7rbar6lptnq8fl39nbX0f927t45v8A0JasUP3oEzzXxJ+zX8KfFu7+1Ph74enZvvSRWfkt/wB9R7a8r8Sf8E5/gjr277PoupaHI38Wn6g3/oLbq+m6Kd7E2ufBnij/AIJQ6HcBm8O+Pr6z/wCmWpWayf8AjytXlutf8ErviZZszaX4k8NarH/Cks01uzf99R1+otSr8lNSDlPxl8XfsH/G7wgrSS+C5dThX/lppdxHcf8Ajv3q8f8AEHw58WeEpmj1vwvrGlMv/P3YyKv/AH1tr9+H702aJZ12yqsq/wB2Vd1PmCx/PL5sbNtVl3f3d1SbK/drxZ8Avhv46WT+3vAvh/U2b/lpJYxq3/fS/NXi/iz/AIJtfBfxG0klhp+p+Gpm/i0u+bav/bOTctNSE4n5G7KK/Qjxd/wSfkVWk8L/ABEVm/hg1nT/AP2pG3/steI+Lv8AgnT8avC/mSWui6f4lhj/AItGvlZm/wC2cm1qd7i5T5nXpQ3Suq8WfC/xh4BmaPxL4V1nQ2X+K+sZI1/7627a5NmV/mXay/7NAWsMrqfhrF/xcLwq3/UWtf8A0ctc3Gu+uo+G/wAnxA8L/wDYWtf/AEctAH74XD7riT/eptOuP+PiT/eptZs0QUUP3opDCihO1FABRRRQAUUUUAFFFFABRRRQAV84/wDBQDwN4g+If7PMmi+GtHvNe1STWLGRbSxh8yTarNubb/dr6Op0bMlF7Caufkh4H/4JqfGHxK8curQ6V4Rt2/6Cl5um2/8AXOPc1e8+Ff8AglDpsUat4k+IlzO38UWk6esf/j0jf+y196Mm+inzE8p80+Ff+Cd3wR8MtHJP4fvPEcy/xazqEkit/wBs49q17Z4P+FXgvwBGq+HPCei6Gq/daxsY42/7627v/Hq6qmUr3GlYW43S/eZm/wB6nR/KtMpV60FDqG+5RRQAJ2ooooW9gCisXxN4y0PwbDDNrmqQaVHcM0cLXLN+8Zf4a5+P45+AXb/kbNP/AO+m/wDiawlWpQdnJL1dgO8+7Ubda42b44fD/b/yN2m/99N/8TXRaHr1j4j0231LS7pL7T7hd0NzF92Raca1Keikn6O4GknamU/79FbeQCfxUv3KKKVrsAfvTV61g+KvHnh3wa1vHrmsW2lSXCs0K3LN+8VfvViw/G74f/8AQ3ab/wB9N/8AE1hKvSi+VyS9XYDu/wCGkfvXFt8cfh7t/wCRu0z/AL6b/wCJrrLO6hv7WG6t5lnt5lWSOVfusrfxVcKsKnwyT9HcCZetOplFagFFPooAT+KlprfIu6qepa5p+g2v2rVL620y3/56Xcyx/wDoVRJqOsgLdFeTa9+1R8O9GlaNdYl1CRf+fK3Zl/76bbWH/wANkeCd21NP1mVf73lqv/s1ccsfhYaOovmOzex7rT68Nh/bF8ByybZYdXtv9prdW2/98tXaeGfjn4H8YSLHp3iSzWZvuwXbfZ2/8eqoY7DVPdjUXyCzW53i9ac/ehU/dq38Lfdb+9TVfe1dvTQQ6mU+hO1ABTKe/eii1+tgHKlNfvXP+JPiX4V8G3i2Ot69a6beNH5ywT7t23+98q1gt8dfh+zfL4u07/vpv/iawliKUPdc0vV2A77ZQnauLs/jZ4DvLiG1g8VafLcTSLHHErNuZm+6v3a7Rk2M396rhUhP4JJ+juAUfwUUVoAUUVHdXUNhbzXVxIsVvDG0kkrfdVV+ZmovZXYElFcP/wALz+Hsq/L4u03/AL6b/wCJpv8AwvP4fp/zN2mf99N/8TXM8VQW0wO6orH8N+LdF8YWsl1omqW2q28cnlyS2zfKrf3a2Gat4yU1zJ3AH70UUVQBRso2tXH+JvjJ4J8Jbl1PxFZxTL/ywgbzpP8Ax2s51YUtZyS9QOworw+8/bD8A2UjLEuq3O3+KO3Vd3/fTVVb9s3wS7f8g/WP+/cf/wAVXG8ww1/4iHa57vT07V4zpf7V/wAPdRk2y3l9p/8AtXNr8v8A461ejeG/iN4V8Vr/AMSjxBp983/PJZtsn/fLfNW0MXQqO0ZJ+gWsdA3y0yl3fvNv3WpyrXT1EFNbrTn71V1TVLPQ9NuNQ1G4js7G3XdNPL92Nad0ldgWt9NXrXEyfHH4fou7/hLtN/76b/4mm/8AC8/h/wD9Dfpv/fTf/E1zfWaN7e0Xzdgtc7p+9MriG+O3w9/6G7Tf++m/+Jpq/Hb4e/8AQ3ab/wB9N/8AE0fWaP8Az8j94Wsd5TK4j/he3w92/wDI3ab/AN9N/wDE01vjt8Pf+hu03/vpv/iaPrNH/n5H7wO5p9cD/wALz+H+7/kbtN/76b/4mpG+O3w92qq+LtO3N8q/M3/xNCxNC9nUXydwO6TtQ/eo4X3KrL91qkfvXTe6uAUyiigApW605+9FAEci+fC0cqrLC33o5F3K3/Aa8v8AG37Lnwn+IfmNrngHRZ5m/wCXm0t/ss//AH8h216jRQJnxp4x/wCCWvw71dpJvDPiLWvDUjfdgudt9Av/AH1tb/x6vD7j/gmx8TvBHjrQ9Q0nUNG8UaXa6hb3EksFx9nmWNZFZv3cn+z/AHWav0+3NTdv0oJtckkffIzLUVPooKSsMp796PlplAx6/fooTtR/BQAUUUUAFFH8FFABRRRQAUUUUAFFFD96ACiiigAooplABSr1pydqKAD+Oij+CmUAPooooe39diXsfNP7cX/Iu+E9v/P9cf8Aota+Vbfai19WftsJv0Hwn/1+XH/ota+TZH21+c5wr4yS9PyOqHwosSMsq7VWvuz9mlNvwT8K/wDXvJ/6MavguzffMtffH7N//JFfC/8A1xk/9GNXTkStXkvJikenJ2ooor7xHOFMp9Nb7tP+vwE9j5P/AG2P3uteEf8Ar3uP/Ri1847lSOvpL9s5f+Jx4T/69bj/ANGLXzLM9fmea/73L+uh1Q+FEMkuzzP91q/Sb4Zy+b8OfC7f9Q23/wDQa/Ne4XfDJ/ut/wCg1+kXwm/5Jp4V/wCwXb/+g16+Q/xJEzOs3fSkp9N+7X2yvsjnQL1qnrWs2Ph7S7jUNSvIrGxt13STzttVah8SeI9P8JaDeaxqlwttY2sfmSSt/wCgr/tV8F/F743ap8WtaZp91notuzfY9P3fd/2pP70n/oNeTjswhg46K8uhoouWx6h8Tv2w7y6mm0/wXb/Y4fu/2pcrukb/AK5x/wAP/Avmr591bXtS8Q3Ul5q2oXOoXUn3pLmRpGrHZP3m6rSrvWvg8Rja+I96ozdRUdiif9bV6F9q/LVeOwutSulhs7eW5mb/AJZQRszf+O13Wn/BTx5e2azReEdVaNvut9n21zxpVKi0VxnB3T7pKLeL5t1dFr3wt8ZaD+81HwzqdtH/AHmt2Zf/AB2sm3t/3f8AtL96pnF01Zqw7XO08G/Gnxd8PGj/ALI1aVrVW+ayuf30Lf8AAW/9lr6q+D/7S2g/EaSHTb+NdD8QSfKttK26G4b/AKZt/e/2Wr4bk+/UdwzKq7GZWX5l2134XMq2F+1zLsZuJ+pivuapK+Yf2X/2hZtbmt/Cfiu6aW+b93p+pSt803/TGRv7391v4q+oG+9X6DhcTDFU1Ujv1XYxasN/goV/mpf4aY3Wuvt6kPY+Kf2yJf8Ai7ke3/oF2/8A7NXidui7fmr2b9rzc3xej/7BdvXiu/bX5fmH+8z9WdUfhNjwe+3xx4d/7CFv/wCjFr9Mpm3TTf7zf+hV+Z/g1PN8aeHf+wlb/wDoyv0s/wCW03/XRv8A0KvpMg/hz+RlIdRRsor6wgP4Kw/H3/Ig+JP+wXdf+iWrcrn/AB8//FC+JP8AsF3X/otqzq/w5eg1ufmfp7/Ku7+7Trza33acsXlRrt/u01U81a/J23zP1Z0n2B+xL8/gHXv+wt/7Tr6Lr56/YrTb4B17/sLf+06+ha/Sct/3WBzS3H/wVyfxK+JOi/C/w+2qavM3zfLb20X+suJP7q//ABX8NdRcXEdrbyTSssUMatJI391V+9X52/Fz4nXXxS8bX2qSs32GNmhsYP4YYV+7/wACb7zVnmWN+p0tFdvYajc6L4kftE+KviN5kK3TaNpLfdsLJmXcv/TRvvNXlaz7GbdTY32ttqO4RnkVY1Zmb5VVf4q/P6lWpiKjlOfM2bojuvn+ZabDLubbXpHh39n34geJrNZrXwzdxQyfdludsP8A6FWtH+yR8SIm3f2TbN/sreR1vHCYiS0pv5A2lueZquxVqneSsjK0TMrL/Eteia58FPHHhm38y/8AC+oRRr/y0ij8xf8Ax2vN7zct00bqysv3lZdrVzezqU5WlFr1C6ex618LP2i/GHgQRwy3n9t6XH96yv23bV/2ZPvLX3V4d1f/AISPw/puqNZy2P2y3juPs07fNHuXdtavz/8Agh4G/wCE++IGj6Sy7rPzPtF1/wBcY/mb/wCJr9EG2ou1F2qvyqv92vs8knWqQcpyuuhjIjbrXC/Hr/ki/iz/AK9V/wDRi13NcB8fm2fBnxZ/16/+1Fr3sVb2NS3Zkx3Pz7utrrVdn2x06Rt61Cvzttr8qfRnSRq/zVMq1e0/wfrmsw/aNO0m8vrdW2tLbW7SLu/u1tL8OfFHl/8AIt6r/wCAclaKnJ6pXA5lnptdA3w58Vbv+Rb1X/wDkqSP4c+KnX/kW9V/8A5KPZ1OkQOdX5PvVHays+pWq/8ATaP/ANCWuiuPh34qRdq+G9V/8A5Km0n4aeKPtluz+G9V/wBdH/y5yf3lrSFOrfawnsfpNbrstYf+ua/+g05etNj/ANTGv91Vpa/U4/Cjm6hRRRVAFFFPoAZT6KZQA+mUU/8AjoAZSt1p1FADKfRRQAUUUUAFFFFABRRRQA+imUUAPplFFABQnaj+OigAoo/gooAKKKKADZR/BRQnagAoop9ABTKKKHt/XYmWx82/tsfLoPhP/r8uP/Ra18hyfPX1x+29/wAi/wCE/wDr8uP/AEWtfJLdK/Os3/3yXy/I6ofChtrLskWv0C/ZtX/ix/hNv+mMn/oxq/Pcf6xf96v0K/ZnZX+BfhX/AK4yf+jGrtyP+PL/AAsmpselUVHJKqNTlda+4OdbDqa3Whvkpy/NR1/rsD2PlH9tSXZq3hFf+nW4/wDRi18yyfPX0Z+25L/xUHhNV/59bj/0YtfOO7fX5tmv+9y/rodUPhQbd8cn+63/AKDX6PfC1Nnw58L/APYNh/8AQa/OVP8AVyf7rf8AoNfo58Mf+Sc+F2/6hsP/AKDXp5B/EkTM6hXobcy/LSVzXxO8W/8ACEfDnxBri/8AHxa2rLb/APXZvlX/AMeavs5zVODk+hzpXZ8n/tQfF2Txh4uk8N2Fx/xJdHk8uTa3y3Fx/E3/AAH7q/8AAq8Fk+STdTpvMS4aR2ZpGbczN/E396hf3rV+W4is8RVdV7f5HWlZDZP9Xur6U+Av7MEni3TbfxB4tWW00mRfMtdPT5ZLhf7zf3Vrlf2a/hLD8RvGH2rUYfN0XSdtxcRt92aT/lnH/u/xN/u190R/Ku37q17+U5bDEL6xVV10RlKp0MPw/wCEtH8K262+jaXa6bCv/PtCqt/wJvvNW4zs67dzU1utJX2ahGKtFWXYgZsb+81ch43+CPhD4h2ci32lw2d8y/LqVlGscyt/tf3v+BV2tG/bUzpQqrlnG6EfnT8X/hRrHwj1/wCx6ions5tzWeoRr+7uF/8AZW/vLXBq/m1+kXxQ8AWPxO8I32h36/65d1vP/FbzL92Ra/Ou+0S88Paleaffx+VeWczQzL/dZa+AzLArCS5o7M3hK4WrNb7WRmikVtysrbWVv71ffH7PPxLb4m/D+O4vZN2sae32W+/vSN/DJ/wJf/HlavgFX/eV7Z+yz43bwv8AE61095NtnrUf2ORf+mn3o2/76+X/AIFUZRinhsSr7SCauj7d/ipG601fnpa/R1ZWS2uc9rI+KP2tE/4u5H/2C4f/AEJq8Rmr3b9rhdnxYjb/AKhcP/s1eEzPur8vx3+9T9WdUfhNTwC//FdeHV/6iVv/AOjFr9OJV2yy/wDXRv8A0KvzJ+H8X/FeeHW/6iVv/wCjFr9N5/mll/66N/6FX0uQfBP5GMiKiiivqyArm/iJ/wAiL4kb/qF3X/otq6SsH4gJu8A+Jv8AsF3X/otqxrfw5eg1ufmfHL5sK/7tEfyVDa/dX/dqxGvzV+T9X6nSfYX7Fr/8UHr3/YW/9p19CL0r55/Yy/5EfXv+wp/7Tr6I/hr9Lyv/AHSByz3OD+PWryaH8G/FFxEzLJJbraqy/wAPmNtr88/K8pmr9Av2jLOS/wDgn4mjiXc0Mcdw3+6sis1fn20u9q+Zz3m9vC/8qNqew2Z9tfYH7Jvw00uLwbD4uvLWK81a+kk+zySLu+zxq235f9pv71fHMz7q+ov2Xfjxovh7w/D4P8R3S6Z5MjNY30/+pZWbd5bN/C1ceVOjHEJ1PkOR9XR7t3zMzVYXpUNm0d1Cs0Uiywt8yyxNuVv+BVNI+2v0NWaujAa1wyL8rMtcb4q+FvhXx4rLreg2dzI3/LysaxzL/wBtF+ausZ1qSNKipThUjyzV0F7Hnfwp+A+k/CPVtYvtOupbz7cqxw/aV+a3j/iXd/FXo1OZ6Z/FTp0oUY8sFZCvcRuteeftBf8AJFfF3/Xqv/oxa9CrgP2gv+SK+Lf+vX/2otZYn+DP0ZUfiR+eat8tOVfmWo41+WnM21q/KZ7nT1Ptz9jddnwqvsM3/IUk/wDQa9w+0Sbv9Y3/AH1XiP7GLeb8Kb7/ALCU1e3Tfumr9My5L6pS9Ecz3HNLI/8Ay0b/AL6pyyyJ/wAtG/76qvu307dXpWQh0zSP/wAtG/76qaGeRY9vmN/31UcPz1Gz/NRZAP8A4qbT6ZTAKKKd/FQA2iiigB9Mp9CdqACihO1FABRRRQAUUUUAFFFD96AFT7tFJRQAfx0Ufx0UACdqP46KKACj+OiigAfvRRQ/egAo2UUUAFD96N9FABR/BRRQAUfx0UUAPpj96KKHt/XYmWx8z/tu/wDIB8I/9flx/wCi1r5L+/X1l+3B/wAgPwj/ANflx/6LWvlGNflr85zj/fJfL8jqh8KIWSu28P8Axk8aeFNHt9L0nxJdWOn2/wAsNtHt2rXG/wCzVe63I3y15MJyg/dk16Ow2rno3/DQXxGdv+Ruvv8AvmP/AOJqRf2gviN/0N15/wB8x/8AxNed26/L81En361+s4i/8SX3i5V1PRG/aC+Izt/yN19/3yv/AMTVhfj78REj/wCRuvv++V/+JrzWNKmb5vlo+tYha88vvuNRXQueLvHXiLx1eW8niDVp9Va33LC0+392rferLWppLfYu6o1+7WLqOo7tt+pVrDt/7tv91v8A0Gv0e+GP/JOvC/8A2Dbf/wBBr825n2rJ/ut/6DX6SfC//km/hb/sG2//AKDX1OQ/xJfIxqdDp68K/a+1lrD4Z2Nirbft2pLu/wBpY1Zq91r5s/bc3L4T8Lsv3f7Qm/8ARdfRZlf6nOxEfiR8k3XzVDbvtk+apFfctQyRNu+WvzLdNSOpn3l+yfokekfB21vFX99qlxJdSN/s7tq/+OrXsC9a85/Z5dZfgn4R2f8APiq/8C3NXotfqeDio4eml2RyPcf/AB0yn0V2CCmU+mt1oAFTc1fFP7W3h+PRvixcXES7V1K1jum/3vut/wCy19rRv81fI/7akqt460NV+8umtu/7+V8/ncU8Jd9Gi4fEfNbfI26r3h/WZNI8TaPfIzK1veQzKy/7Mi1nzPTbdd95b/3vMX/0KvhqV+a/n/kayP1OX513fwt81OVfmoi/497f/rmv/oNOTtX6wtbP0/I5H1Pi39sJ9vxWj/7BcNeBs29q90/bKl2fFyFf+oXb/wDoTV4SvzV+Y47/AHmp6nXH4Tqvh+q/8Jt4d/7CVv8A+jK/SqT/AF03/XRv/Qq/NP4fyqnjTw7/ANhC3/8ARlfpXc/6+b/ro3/oVfSZB/Dn8jGYyij79FfVkIKw/HX/ACIviT/sF3X/AKLatysHx5/yI/iT/sG3X/otqxrfw5ehS3PzR8rZt/3akX7lH/LOP/dqGRtitX5M936s6T7C/Yt+bwHrn/YWb/0XX0Zsr51/YlTf8P8AXm/6izf+i6+iq/Tct/3SBzS3KerWFvqljdWN1H5trdRtbzL/AHlZdrV+c/xK+HN98MvFl9od6rbYW8y3n/huIf4ZF/z96v0hrmviR8NtB+KHhttL1y183y/mt7mL5Zrdv7ytWOZYH65TunZocZ8p+aMfzNTpl3Ntr2Txt+yr4w8FXU1xpsP/AAkulr8yz2n+uVf9qP8A+Jry2ayaCZoZ42gmX70cq7WX/gLV8FXoVKEuWa1N17xteE/H3iTwbtbRNevtM2/8soJm8tv+At8tejab+2H460iRVv49P1yP/pvD5Mn/AH0teI3Uv2dqr/8AHxVUsTXpaxlYHFdT7A8J/tpeHdRaOPXtJvtHkb70kH+kR/8AxVe9eD/H3hnxvbrJomtWuoN/zzjk2yL/AMBb5q/M23t9jbq0I7hrdlkRmikX7rRNtZf+BV7FLPa1L443RLpp7H6fTPtk20379fGfwb/aqvvD15b6P4wuJNQ0dm8uPUm+aa1/3v7y19lWMsd5ax3EEiTwyKskcsTblZW+6y19ZhMXDFw5o7mLViRetef/ALQX/JF/Fn/Xqv8A6MWvQG61wP7QCf8AFl/F3/Xn/wC1FrbE/wAGfowj8SPzz/hqvN/FUjNTo131+Vyep02ueifDX47eLPhjocml6JcWsVnJM1wyz26yNub/AGq6iT9rT4hS/dutM/8AAFa8PunZfu1Np+5v4a6Y4vEQSjGo7eQnFdT2Rv2sfiIn/Lxpn/gCtOX9rL4iP/y9ab/4ArXkrQbv4aryfuv4af17E/8APyQuWJ7RH+1z8QLf71xpjf8AbnX0B+zb8Tta+KvhfVNS1trZri3vvs8f2aPy12+Wrf8As1fBbbpZNu1q+yv2JYvK+Huubv8AoKf+01r3MpxdapiVGcm/UiaS2PoqmU/+OmV9uYIKKKKCgooooAKXd9KSigB9FFNXrQA6h+9FMoAKfTKKAH0UUUAFFFFABRRRvoAF+/RQ/eigA+5RRRQAUUUUACdqKH70UAFFFFAB/HQnaij+OgAooooAKH70UP3oJlsfNP7bCb9D8J/9flx/6LWvlFk2rX1l+2kn/Ej8J/8AX5cf+i1r5Nmda/Oc4/3yR1Q+FFOR/mWvrj4K/s4eB/Hnwv0HXNWtb6TULyFmmaO8aNdytt+7XyO0TPt/3q/QT9mdvK+BvhNf+mMn/oxq3yejTrVZKcU/de4ptrYx2/ZI+HK/ds9S/wDBhJTl/ZL+HP8Az46h/wCDCSvYm+dqK+w/s/C7Kmjn5pHjv/DJ3w5T/lx1D/wYSUQ/sm/DvzP+PHUP/BhJXsVN+41H1DDLemrf8Aak7anxf+1B8L/Dvwvm8Px6DDcxLfRzNN59w0n3WXb96vBVr6e/babzdQ8Hr/0xuP8A0Ja+Y2Ta1fBZlCFPEyjTiktNvQ6Iu6CaLfDJ/ut/6DX6PfC9/wDi2/hf/sF2/wD6DX50r88Mn+63/oNfot8MP+SdeF/+wbb/APoNepw//Fl8iKnQ6peteI/tfeHm1f4QteRrubTb6G4b/ZVv3bf+hV7bWd4t8OW/i/wrrGh3X+p1C1kt9391mX5W/wC+q+vxNN1qEoIzW5+YKvs+WpI22VJq2jXmh65fabfxtFfWczW8yt/Cy1CyfLX5TJSUrdTq6H2t+xv4tj1v4a3Gjsy/aNHumj2/9M5PmVv/AEJf+A170/evzn+BfxQm+EvjqHUnWSXTbhfs99Av8Uf95f8AaX73/fVfodourWPiHR7XUtOukvLG6XzIZ42+Vlr9BynFqrh1S6o5XGxaopu75qc3zrXvbaCGU+m7vpUypuWmldksqs21q+D/ANozxlH4y+KmsSQSeba2O2xhb+95f3v/AB7/ANBr6U/aL+Mtt8MPDU1nZzq/iS+j22sP/PFW/wCWzf8AstfCMNwz/M7MzN8zM38VfG53ifaJUIG8Rsn+sNdJ8O/DjeJfH3h3TUXd9ovoVb/d3bm/8drB8re1fSX7HHgZtU8TX3iiaH/RdLja3t2b+K4kX/2Vf/Qq8DBUpV8TGKKex9db1Zm/u07fUaptobrX6h0scr6nxH+2hEy/Fyxkb/VzaXDt/wCAs1eJqnyrX01+2x4aklk8L68i/u18yxmb/wAeX/2avmdk+WvzPNI2xMjrh8JY8P6j/ZfibSbj+GG8hk/8iLX6gSXC3EzMv3W+avypvk/iX71fol8DfHUPxE+HOi6lFIrXUMK2t4v8Uc0a7f8Ax5fmr3MhnG8qb62/Aip0PRE7UU5k20tfXp3RkMb7lcv8Sr9bD4d+KLh/ux6Xcf8Ajy7f/Zq6hvn+WvAf2tPiDD4c8C/8I/FN/wATLWmVWiX7y26tuZv+BNtWuTGVVRoSmxrc+N5F2Rr/ALtU5ulWpG31G0W9d38K1+VptXb63Ok+yP2JbdovhrrEzfdk1Ztv/AVWvoJuteW/sw+HJPDXwZ0WOddtxeeZfMv/AF0b5f8Ax1a9UfvX6lgYezw1OPkc0txq/epzfcpu76VD9shlupLVJo2uo1WSSBW/eKrfdZlruESRpsbdWX4i8F+HfFsPl63otjqa/wB65hVm/wC+q2FT5ahZ6iUYyVpK4WPC/F37IPgPXmZrD+0NBkb/AJ9pvMj/AO+WrzHWP2KPEFkzSaDrljq6/wAMFyrW8jf+y19heVvWiP8AdNXmVMswtZNOJpz2Pzh8Z/D/AMQeAbr7Pr2j3OmyfwvIv7uT/db7rVyfn76/UDxNoem+LdFuNJ1a1S+0+6XbJBIv/jy/3Wr8z/Gnh5vCXjTXNF8zzV0+8kt1k/vKv3f/AB2vksflv1OzTunsXGXMZLRb23V9nfsa+P5tX8N6h4VvJmlbS9s1ru/54t/D/wABb/0KvjePpXun7HN1NF8WLyNWby20ubd/30tZ5XWlTxMXEc9j7ab71cD8fn/4sv4u/wCvNf8A0Ytd7XnX7QTf8WZ8Wf8AXr/7UWvvsTpQmvJnNDdH577KFbZUkafu1qGbpX5XLzOs+mP2b/gt4R+Jfge61LXtNkvLyO+khVluJI/lX/ZWvXo/2WPhrF/zL8v/AIHTf/FVz/7FsW34U3jN/wBBSavepK/QsDhMO8PGTpr5q5yybT0PL1/Zk+Gqr/yAX/8AA6b/AOKqrcfsw/DV/wDmX3/8DJv/AIqvWP4qayb67vqeG/kj9wuZ9Tyuz/Za+Gu7d/wj8n/gZN/8VXc+EPh9oPw50+ax8PWJsbaabzpI/OaTdJt27vmroY/lWhvnWtIYajB80IpeisO9xlFFFdHUAp796ZT6YDKKfQ/egBlFP30UAFH36KKABO1D96KP46AE/hptPooAKKKH70AFFFFABRRRQAbKKKKACj+OiigAoop9ADKKKKAChO1FFABRRRQAUUUUAFH8dPpv8VD2/rsS9j5u/ba+TQfCf/X1cf8Aota+Q2be1fXX7b3zaD4R2/8AP5cf+i46+R/K/ir86zj/AHuXy/I6ofCixbou5a+8v2b2/wCLK+FV/wCmMn/oxq+CYZViZd1fe37NvzfBPwq3/TGT/wBGNXRkP+8S/wALJqbHqCdqKE7UV96c62CmyU7+Cjb81PowlsfKP7aXyal4R3f88br/ANCWvmWT56+lv24v3WoeD2/6Y3H/AKEtfNa/Otfmma6Yyo/62R1Q+FAsvlRybv7rf+g1+jXwv+f4c+F/+wbb/wDoNfmvqD7I5P8Adav0o+FPz/Dfwv8A9gu3/wDQa9TIP4kn6EzOqX7tDfP8tO/gpu36V9q3ZHOj5b/a0+D0jyN480uHcqqseqRKv3dv3bj/ANlb/gNfK6t5rV+plxFHdW8kMsccsMisrRSLuVl/utXxv8cP2YbrwfNda94UhkvNDbdJNp6/NJZ/7v8Aej/9Br47NstkpuvSV+5up30PneRP3i16p8J/jXrvwolZbBlvtLkbdNpty37tv9pf7rf7VeV7/wB5Vz7i18rCtOi1KD5X+Zo4n254T/aq8B+IFVb68l8OXjfeg1Bd0f8AwGRa9Gs/iJ4Xv4Vkg8TaRLG38S3kf/s1fmjdbt3y02OL5fur/wB819HTzysopTjdkuFz9Gte+Mngfw4rNf8AirTItv8ADFN5zf8AfK15L42/bKs0tpLXwbZSSzN8v9pagu1V/wBpY/8A4qvkOaL938qqv+7RZy7Pl3VnXzmtUjaK5Rci6mt4m1a88S6ncalqV1LfX1w26SadtzNWL9yrU/3a0vCPg3VvHOsQ6To1m95fTfdjX+Ff7zN/CteElOtLR3bNNLaE3g/w1qHjHWLPR9Lt2udQvJPLjX/2Zv8AZWv0O+HPgaz+G3g/T/D9k3mrbrumn/57TN/rJP8AvquT+BvwR0/4Q6UzO0d9r10u26vdvyqv/POP/Z/9Cr1B+9fdZZl6wy557swlK41utJT/ALlNX71fQN30IOL+MHgH/hYfw51jR4lX7Z5f2i1/67R/Mv8A3192vzzvIpIJGWWNopFZlaJvvK38S1+okfytXyf+1h8Dri1vLrxtoNu09nN+81K0gX5oW/57Kv8Adb+KvmM5wTrWxFPpuXGVj5ZuPmrvvg18VNY+EettfWGLmxuPlutPkb93Mv8A7K3+1XA2/wDpDfLVzZ5S18bCrKk1Om7NHR0Pvnw3+0z4C8V28e7WF0W8b71pqi+Xt/4F91q61viX4RS38xvFGjbf7325a/NmT97H/s1Rh2pJ91f++a+hpZ7XUbShdoy9mfdnjL9qrwb4at5o9HuP+El1L/lnHbKywq3+1I3/ALLXxv8AEDxbqnjzxNda5q9x595M38P3Y1/hVV/urWOv3t1OuF3rurycXmFbFS94pRsQxvuaus+Hvg248c+LtL0G3Vma8mVZGX+GNf8AWN/3zXG2vmS3UccUbSSM21VVdzM1fdf7NHwYk+HWjza1rMKr4g1CNV8hvvWcP93/AHm/iqsDg54qvGK2W4TlZHsdrZw6daw2tuu23t41hjX+6qrtWn096bt+av0uKUUktlocnQo61qlroOj32qX0nlWdnC1xM3+ytfnrffFDXtS+IWoeLLXUJ9P1S4uGkVoJNu1f4Y/91V219Uftfapq1n8O7XT7CznbT7ybdfXcS7ljVfuxt/d3N/6DXxHbvvkr47OsTONRU4u1jpppNan1V4L/AGz/ALPDHa+MtLaX+H7fpq/M3+9H/wDE17J4X+M/gnxgqtpnijT5ZG/5YTyeTIv/AAFq/PG+/u1Hb2q7vn2t/vVw4fOcRSiozXMg5E9j9ULOWO6j3QSRzr/ejkVv/Qaj1CWOzjaSaaK2X+9PIsf/AKFX5g2uqXVlJtgvLmBf+mUzL/7NUmqX91fw7Z7qef8A66TM3/s1eh/rCtlT1D2Z9vfEL9pTwj4Ft5o7XUINe1pV/c2Nk3mKrfwtJJ91Vr4d169m1nUrzUrqTzbq6maaZv7zM25qx7dPKk+WtKTc8NeJjMdUxck57IpR5Svb/O22vqL9jHwlI+peIvETx/uVjXT4W/vNu8xv/QV/76r518B+ENW8eeKLXRdGt2nupm+9/DGv8UjN/Ctfot8P/BFj8O/B+n6DYfNHbr+8n/imkb70jf7zV6GUYOVSv7X7KJnKx0G/5a89/aAi3/BnxZ/15/8AtRa9DriPjsu74L+LP+vP/wBqLX2WJt7CpbazMI/Efna37pdtNVd7VJeJsamxrtXdX5VNXSOs+uP2V/HXh3wv8N7yz1TXNP0y4bUJJFju5vLZl/vV7IvxY8Fuv/I2aP8A+Bi1+b91tlb+GnW6bV+6v/fNfQ4fOKtGkqaSdu5n7M/R5vix4LT73i7Rf/AqnR/FvwP/ANDZov8A4Ff/AGNfnGyq/wDCv/fNO3qi/dX/AL5rd57W/kTD2Z+i8/xd8Dr/AMzboo/7ev8A7Gn2/wAX/Au35vGGi/8AgVX5tzbZfuqv/fNNhTyt25V+7/dprPqya9xL0E6Z+qFvcQ39vDdWsyT28yrJHLE25WX+8tSVzfwt/wCSY+Ff+wbD/wCg10jffr7GnJygm1a5kMp9FNXrWgDqZRTv4qAFplFPoAH70UUUAFH8FFFABRRRsoAKP4KKKACilPWigBKKKKAB+9FFFABRRT6AGUUUUAH8FFFFAB/BRRRQAUv8NJRQAU+mUUAFFPpjfco8gPm/9siwvNU0nwrHZ2dzeMt1cMy20LSbf3a/3a+aW8Ja1t+XQ9T/APAOSv0kjVlk3KzLV5pW8tvmavnMZlEcZWdaUrXL9pbQ/LO68K+IHm2roep/+AclfeX7NdrcWHwV8K291by21xHbybo512sv7xv4a9GZ5Hkb5m/76qaH/a+aujBZdHBVPaRlcTdyWmU+mV7SViQTtR/HRT6e2t7B5Hyt+2ppGoaveeE/sVjc3nlx3G77NC0m35l+9tr53XwlrkUPzaHqf/gHJX6YR/K33qbdXDfd3NXzuLyZYms6rna5fPbQ/Lu+8K69Ksm3Q9T+63/LnJX6PfC+1ktfh34ZjljaKRdNt1ZWXayttroLVmdvvN/31Vpq6MBlywc21K9xOXMRv3o/jofvRXsrYkKbJuT5lp1DfNQ/MDxX4mfsseF/iDcSahYM3hzWJPmae2j3QyN/tR//ABNfOvjb9mbx54P8xotPXXLNf+XnTW3N/wB+/vV96L9yoZE2NurxsTlWHxF5ctmONQ/MW60i8st0d7Z3NnIv8M8LLWfDLGsm1pI/++q/VCSytb2H/SreC5/67xrJ/wChVz83gHwvPdNJL4d0pm/vNZx//E14/wDq/NbVDRVLH5ryKrx/Kyt/u/NVrw74D8UeKLhY9I0HUL5m/iW3ZV/76av0wt/CWg2Uf+j6Lp0Df7NrH/8AE1YWLb8q/Iv91flWrjkTWk53H7S58j+Av2Ndc1mOGbxVqkWjQ/ea0tP30zf8C+6tfUHgX4ceHfhtpP8AZ+g6fHbKy/vJ2+aab/eatyFNtWG6172Gy+hhl7q1MnK5XZNrU6h+9C/cr0Oogo/goopgOXpUNx827+792pKb96k+zV0M+f8A4hfsjaP4nvptV8NXSeH76Rt0lo0e60kb/Z/5518++OPgV428Gs323w/cz26/8vNkvnRt/wB81+hEfy1Ms+yvCxOT4eu+eL5WPnPynuJfsu6OVWiZf4ZVZf8A0Ks37bH5n+sT/vqv1K1Tw9peqM32zS7O5Vv+e9vG3/stZ6/DnwunzL4b0pW/684//ia8z+wpp6VDT2h+cul2s2pbVtbee5kb+GCNpG/8dr1TwX+zd448a+W39ktpFi33rvUv3f8A4795q+5NNsLPTV22tnbW23/nhCsf/oNaHms33vmrelkNNSvVncTqPoeK/Cn9mvw/8LbpdQdv7c15fu3s8e1Yf+ucf/s1ewQv/eqSZN7U1O1fR0qMKEeWmrIyu3uD96FWipa3AZcJHcWskMqrLDIu1o5V3Ky/7S14P44/ZG8M+KJpr7QriTw1fSfM0UUfmWzN/u/w/wDAa92k+enL8i1z1sPSxC5asU0NNrY+B/Gn7MPj7w5cM0Glrrlqv/LfTZN3/jv3q851TQ9Q0ZWW9028s5F/5727LX6bKn77dU15bw3kflzxxzr/AHZY1b/0KvnamQ0m/wB3Jpely3VfU/K1WX7zMqf71OW6Wf5Vbc3+z81fp1ceD/D9wu6XQ9Nlb/as4/8A4mm2Hg/QbObzINF06Bv9mzj/APia5/7Bkn/E/Cwe0ufmrpPg3XteuFj0vRdQvmb/AJ4W7NXu3w//AGQfFXiCNZvEFxB4ctW/5Zt++uW/4D91a+0PKWKPbEqxR/3Y12rUK/I1dtPI6MWnVfML2j6HH/D34VaD8LNL/s/Q7dkaT5ri7n+aa4b/AGm/9lrr6mplfQ06caUeSCskRr1GVxnxuimuvhD4qhgjknma1+WKJdzN+8X+Gu2oZ9i/L96ipBVYOm+oH5l3XhTXJZP+QLqX/gHJTZvCuuJH/wAgPU//AADkr9Lo5ZPM+Zmp0zs7feavllkUbfxPwuXzn5iw+Etedv8AkB6l/wCAclaC+FNaRV3aLqX/AIByV+mFvuVfvNTpJW3feaqeQxf/AC8/Cw/aH5n/APCK6x/0BdR/8A5P/iaz77w1ri/d0XUf/AOT/wCJr9QvPbb95qrybm/ial/YMV/y8/C41UPy7h8Na48n/IF1P/wDk/8Aia1P+ES1p4226Hqe7b/z5yf/ABNfpdHuRt25qvR3DbfvNT/sGL/5efhYHM5H4XrJb/DfwvDLG8Ui6bCrRyLtZW2101DNvZt1Dfcr6iEeWKj2MhlFK3WnVYBRRQ/egAooTtRQAUUJ2ooAKZT6NlABRRRQAUUJ2ooAZRT6KACiiigATtRRRQAUUUUAFFFCdqBMKKfTH70AgooooGFPplCdqACiiigAo2/NRT6NOoD44t1R3Tsjbfmry/4veF/iB4j1DS28GeII9ItYY5Fuomk8vzG3fK33f7tea3Xwv+OTyfL44i/8Cv8A7GvOqYmcJcqpN+g7XPpKOJmb7rVcWJl/havmeP4VfHjau3xpE3/b5/8AY1DefC/48Iv/ACO0a/8Ab5/9jWaxlRf8umHKfTU25G+7QqM/8LV8ur8KvjtK3/I7J/4Hf/Y1et/hF8dNvzeNk/8AAz/7GpWNqf8APqQcp9JN8jfdanNuVd21q+Ybz4R/HJW/5HZP/A7/AOxqNfhP8cpfl/4TaP8A8Dv/ALGn9dqf8+WHKfT0atu+61Qzbt33Wr5xX4PfHJY/+R2T/wADv/saot8IPjk03/I7R/8Agc3/AMTSeNqP/l1IOU+pLOJv7rVJN8n8LV80x/CH45RR/wDI7J/4Hf8A2NUbr4VfHTd/yPEX/gZ/9jVfXKi/5dSDlPp7e39xqd8391q+X4fhV8dn/wCZ2i/8DP8A7GrjfCj48LH/AMjtF/4Gf/Y0LG1P+fTDlPpTf/vU7ym/utXy3/wq347eZ/yPEX/gZ/8AY1eX4S/HSVf+R4i/8DP/ALGksbUf/LqQnE+mPKZF+61U5Nzt91q+cZvhL8dIl/5HiP8A8DP/ALGq8fwl+Okv/M8R/wDgZ/8AY0PGVP8An1IFE+ooUbyfutUO1vM+61fNLfCf45Iu1vHUa/8Ab5/9jUdr8I/jd5n/ACPSN/2+N/8AE0/rlT/n0x8p9PSbol+ZWqNVZm+VWr5pvvhF8cH2/wDFdR/+Bjf/ABNOs/hF8cl+744j/wDAxv8A4ml9cqf8+mHKfTTI0X3lb/vmo5Gbb91q+Z774T/HJP8AmeI//Axv/iapt8LPjlt+Xxwn/gZ/9jR9dqL/AJdMOU+ol3Ov3Wp0e5m+61fL9r8Kvjo/3fG0f/gd/wDY1ch+Evx0Vv8AkdI//Az/AOxo+u1P+fTDlPppomRfutUf3P4a+Zbj4X/HTzNv/CaJ/wCB3/2NQ3Hwq+O235fGkf8A4Hf/AGNH12p/z6kHKfTnzO3yq1HzJ/C1fMdr8Kvjw7f8jon/AIHf/Y1NdfCX48bV/wCK2i/8DP8A7Gj67U/59SDlPpr5tv8AFVdpW3fxV8zzfCj47JD/AMjxF/4Gf/Y1Vh+Evx4eT/kdo9v/AF/f/Y0njKj/AOXTDlPqpbdn+ba1NVW3bdrV83x/CP46bfm8cJ/4Gf8A2NN/4VB8ct27/hOI/wDwM/8Asav65U/59SHax9LNEyfNtamq/wDstXzPefCr45Iu3/hOE/8AAz/7GqcPwo+O275fG0f/AIGf/Y0njai/5csLXPqKR9n8LU35v7rV8uzfCr48eZ/yO0X/AIHf/Y1ch+Evx28v5vGif+B3/wBjS+u1P+fUhcp9MR/e+ZWqx5Tf3W/75r5Tk+FXx4SbavjaP/wM/wDsavL8LfjskPPjaP8A8Dv/ALGj67U/59SDlPpJt3mbdrVYaJkh+61fLcfwl+OUs3/I8R/+Bn/2NTXnwo+Onl7f+E4T/wADv/saPrtR/wDLphyn0tGjO33WqwqM7fdavl21+DPxydd3/CdJ/wCBzf8AxNNj+EHxySZv+K4T/wADm/8AiaPrtRf8umHKfT025G+61OjRn/havl+4+Dvx0T5v+E2X/wADv/samt/hR8ctv/I6L/4Hf/Y0fXan/Pphyn1J5TbfutVFnbd91q+Z7j4VfHRV/wCR2jX/ALfv/saht/hB8cpW/wCR4T/wOb/4mj67U/58sOU+pNrIvzK1Rrubd8rV8z3Hwo+OkW1V8aJ/4Hf/AGNH/CqPjokO7/hMo/8AwM/+xo+u1P8An1IOU+mFbe23a1SXETeX91q+WV+FXx08z/kdo/8AwM/+xq03wq+Okvy/8JtH/wCB3/2NH12o/wDl0w5T6UhiZm+61OkTa23bXzjH8KPjtEvy+NIv/Az/AOxqi3wy+Oz3HzeMov8AwM/+xpfXai/5dMOU+pFibb91qr7/AJvutXzi3wv+Oyx/L4yj/wDAz/7GqLfCz47fe/4TRP8AwM/+xqvrtT/n0w5T6c3/AOy1SRo0v8LV8tx/DH48btq+NIv/AAM/+xrQh+Fnx4/6HSL/AMDP/saFjaj/AOXMhpWPpCZGi/harEaN5O7a1fMt18J/jw//ADO0X/gZ/wDY1G3wx+PUUe3/AITaL/wM/wDsaHjJ/wDPmQmrn0xu3tTqwfBNlq1h4V0u11y6W+1iG3Vbq5X/AJaSfxNW9XpwfNFStYVrCfxUr96KT+GqAWm/7NOooAKKKKACiiigAooplAD6KKKACh+9FFABRRRQAfx0b6KKABO1FFFAAnamU/7lFABR/BRTKAHp2ooooAP4KKKKACimU+gB9MoooAfTKKKBMr6hf2ukafcX17dRWlnbr5k1zcyeXHGv95m/hrif+FzfD+Wb5fHHhxv+4pD/APFVm/tTKr/s2/EpWVWX+wbr5WX/AGa/Nz9ij9jfwt+0xY+K7rX7u+0/+xWtViXTYYf3nmK27du/3apK5N7H61+H/EOk+JrP7RpGqWOq26/K0tjcLMq/981j+LvH3hfwvdLZ6z4k0jSLxo1kWC+vI4ZNv97a38NflZeaRqX7E/7ZGm+H/B+uz31nHdWcc0Sr5f2q3n2q0M0a/KzLu+9XSf8ABTrT4tS/af0OG5SPyZNEs42aRVZlVpvmqlEOY/ROz+NPw9WTb/wnXhzd/wBhSH/4quq1bxv4f8NNbrq+uabpX2hd0P266WHzF/vLu+9XwLo37BH7NV/fWNvF8Spbm+mkj8u2i1C13NJ8rbV/4FVX/gqdpsNvq3wxjMccscOm3kMayqrfKrR1FrML3P0WZ47+GOaCRJ4ZlWSOSNtysrfdZa5/S/HXhfUdck0ey8RaVeaxGzLJp8F5G0y7fvfu/vfLXDfCX47fDe0+Gvg+1n8daBb3Fvo9jHJBJfRq0bLbxqy18Jfsu39jf/8ABRbxBeWTW09vdXWrSR3MCrtkVv4lahxuwP1K+0RrGzSMqqq7mZv4VrndD8eeE/Eeox2eleKNG1K8k3NHbWl9HJI3+6qtXi/7b3xYb4Ufs8eIJbebytW1xf7Fsfm+bdMv7xv+Ax7v++lr80fAena5+zP4i+EvxQnsYrax1aRr6zaKNVaS3jk8uRW/3l+b/damlcTdj9tr69jtbeSSVlijjVmZm+VVVfvNXn6/GTwDL93xx4cb/uKQ/wDxVaXi3VLfXvhzrV9ayLLZ3mi3VxCy/daOS1Zl/wDHWr8g/wBjP4C/D341+IPE1n461xfDlrp9nDcWskckMPmSNIysv7z73y0lqVsfsV4f8UaH4j3NpGtadq6x/e+xXUc23/vlqua1408O+HLqG11fXtM0q6mXdHBe3kcLMv8AeVWr8n9N8G2PwM/bO8M6L8JfED+IYftlqq3Npt/eLJ/roZPL+WRVXdXon/BURYU+PXgfdHG23S4drMqt/wAvVVykuR+iXizxf4f8HrC2t65pmi/aN3k/2hdRw+Zt+9t3ferQ02/jvIYZoJo57eZVkjlibcrK33WVq/Ov/grVFHef8Kv3wxy/6Lef61Vb+GOvtz4H/uvg74B/h/4kNj/6JWpasNO52HiTxl4d8OTQ2+s69pmkXEy+ZHFfXkcLSL/eXdUeqeOvCvhq6W11XxJpGmXTRrIsF3fRxttb7rbW/hr87f8AgqtFDP8AFD4fs8MUv/ElkX5o1b/l4avp/wCKn7DvgH4/+JtP8UeJLzVYtQ/sm1sfKtGjWPbGvy/eXd/FVWuJHqt98YvAaSf8jt4c/wDBpD/8VWx4f8TaX4js/tmjapZ6rZ7mj8+xmWaPd/Eu5f4q/JX9mv8AZi8J/Gn9oTxJ4F1uS5g0fTY7ySGS0WNZm8mby13bl/u1+nnwN+AGgfs8+B5PC/hma8n0+S8kvN16y7vMk+993+GpcRnYa98QfC/hKS3h8QeItK0W4uFaSGPULyOFpF/vLurW0fVLPUrOG8sriK8s7hfMhntpFkjkX+8rfxV+Qf7ROsar+1n+1F4ut9Ahj1Cy8P2NxDZrKqsv2W0XdNJ/wJt1fXH/AATP+LS+MPgjceFbiRft3he48mNf+nWT5o/++fmWny9Q30Psq8Xzfu1wd98WvAenat/Zd1428PQalu2/ZpdSj8zd/d+9Xx3/AMFFP2hvEUXirSfg/wCFLyexa8hhm1SW0kaOa4aZtsNruX5lX+Jv+A0um/8ABJrTLjwSq6t4vlg8WSQ7mWGxjayhm/55t/Ey/wC1S5L6he2h996btljWRGWWNl3KytuVv+BVTh8deG59cbRYvEGlS60sjRtpq3kf2ncv3l8v726vkn9if4Y/HT4Ga9feF/F+lrP8P5Fk8meXUFm+xzL91oV+95cn93+GvB/h/cR/8PTtQ/dx+Z/wk19821d3/Hu38VNK4nI/TS+lji3TOyxRx/MzM21VX/aauJ/4Xx8NZdSXS18feGv7Q3bfs39pR7t1fBv7Z3xT8XftD/tFWfwL8F3UttpdvdLZ3EcUzRx3lwy7pGmZf+Wca/w121x/wSZ8Kv4T+yweNNQ/4STy/luZLGP7E0n93y/vbd38VDiVe599aaquqyIytGy7lZW3K1Z8njrwy/iD+wW8RaV/bW7y/wCzftkf2nd/d8v726vz4/YK+M3in4WfGu++B3jG4lns/tE1nbwzyNJ9hvI/4Y2b/lnIv8NfPH7Vl/qFr+2B8QNQ0SN4tY0/VvtkNzbR/voWjjjbzP73y01Elux+zWtXtrpenzXl5cRWdnDH5k087bY41/vM38NY/hXxVoviuOabRNY0/WoYW8uSTT7hZljb+622vm3T/wBoKx/aW/Yf8faw/lRa9Z6DcWesWK/8s7jy/vL/ANM5PvLXC/8ABKeJYvhn46VI0j/4m1q3yrt/5YtU8lwTufd0kvy/LWD4i+KHg/wVNHb+IvFGj6HdSLuWDULyOGRv+AtW9D8393d/Du/vV+Ofw1b4f6v8dPiBH+0aupz6o32hY/vbvtyyNujbb827b8sa/dppXYM/XqPVLPWbOG8sLyC+s5l3R3NtIskci/7LLVq1Wvj/AP4Jx/Cjxx8O/BPiibxDY3mkeHdWvFuNF0nUP9dHGu7dI0f/ACz3Lt/3ttfYip5S1DXvF3sjmdc8eeF/DWqLZ6z4k0jR7xo/OWC+vI4ZGX+9tb+GuqtbiG4tYZoJI54ZFWSOSJtyyK38StX5V/8ABTy1hl/aO0dnhil3eG7f70at/wAtpK+pv+Cdnxkb4kfBMeG7qZZNW8JzLp/zfxWsnzQt/wAB+Zf+A1py2ITufS3iDxHofhdoZNa1rTtIWbd5f9oXSw+Zt+9t3feq1FqVrqVjb3VlcRXdnMvmQzQyeZHIv95W/ir8gP27/jUnxj+OWqR2rRz+H/DitpOn7lVlbb/rpP8AgUn/AKDX1hq/x7uvgJ+wJ8Pta0lIh4i1LSYdN0vcvywyM0m6Tb/sr81JxGfWPiP4l+D/AAAy/wDCTeKNH0Fm+6mpXkcLN/wH71WtB8b+HfHlr9q8Oa5p2vWq/ek026WZV/3ttfnL+zR+wvJ+0P4XX4lfEvxVqrtrkkklvFHtku7hVZl86SST7u5l+VVrj/jV8FvE37AHxY8M+MvA3iCe80XUJG+zyyL5bSNHtaS1uo1+WRWX7rf/ABNCiB+qWreOvC/hSaOz1nxFpWj3TR+YsF9eRwsy/wB7a1Xty+duXayt8yt/er4L/wCChvhzTfi/8AfAXxm0qxjVlhjW43RqzR290v3Wb/Zm+WvpL9k/4q2/xQ/Z38K+Jr+4VZLWxa11STd/q5LddsjN/wABXdScRnqmoeOfDOm6tHo974i0qz1ZmVV0+e8jWZmb7v7v73zVRX4g+Gf+Embw+niLSm1xWaNtNW8j+07l+bb5f3t1fnj+yXZt+0x+294k+JWqWsc+n6XNNqy+bGreX83k2se7/ZX/ANBrH8L2sa/8FYLxvLTc2uXjbtq7v+PNv4qrlJvY/SLVviN4V0vVG0vUfFGj6fqSsqtZXN9HHNub7vyt/eroLX5Zttfjj+3ckbftcePGaOPzPMt9svlqzL+7X5v+A1+mH7Jfxdj+MnwH8O+JLy4RdQs4WsdWbd92a3XazN/vLtak4jvc9S8QeNfDfhm4jh1vxBpWkXDR+Ysd9eRwsy/3trfw0eJvGXh/wvZ2s2r65pulW91/x7yX10sKzfxfKzfer8W/2sPjJ/wvP4xeJPEzRxy6asn2HTVkjVttrC21f++m3N/wKvqT/gpl5d18G/girxo6/Z5vlZVb/l1hqnEL2PvLUvGHh/w9o9vq2qa5p2n6bdbfs97c3Sxwzbl3Ltb7rfLWDb/HH4e+d/yPXhr/AMGkf/xVfHP7aFrG/wCwX8GVaNGVV0varKu1f9DauL+Cv7H/AOz74w+FvhnxB4o8df2Zr19ZrcXloupWsKwyf3drLuWlyhe5+k1x488M2vh+11qfxFpUGj3Xy2+oSXka203+7J91vu07TdSsdetYdQ028ttQsZv9Xc2kiyRt/ustfCv7eHgPQ/hf+xv4B8J6DI99oOm61bx2clyyyNJG0MzK277ted/8E7/2kJPhp4sj+G/iFvI8M+IpFk01pF2ra3jfd2/9M5Pu/wC9Ryhex+l17418O2GsR6Lda9pltq0jKq6fPeRrOzN91fL+981Z+qfEbwbp1xdWd14q0O2vLdvLmgn1COOSNv7rLu+Vq/O39ory5f8Agpl4d3RozLq2kruaNd3yxt/FXtP7RP7BHgDWbD4j/EaW/wBYfW5I7zWHj/c+T523dt+7u2/LScQvc+kf+FteBYpPm8aeHv8AwaQ//FV2Wk6la65Z295YXUF9ZzLuhntpFkjkX+8rL96vyV/Yj/ZD8F/tLaP4ouvFE19ZyabJbxwrpqxqrLJHubduWvoH9sP4nSfso/BfwT8HfAGoXdnNdWLLJqG5Vuo7FW27VZfutIzfeX+FaErAfZniD4xeAfC9/wD2frPjPQNMvv8An2udQjWT/vmtO11az1y1jvNOvLa+s5P9Xc2kyyRt/wACWvhD4Yf8EzNM8R+A7PVvHev6jZ+ItShW6a0sEjZbXzF3KsjSfNJJ/eryrwfqniz9gD9p6z8H3Wrf2r4J1SaFpoF+WG4tZm8tbhY/+Wcyt97b/doauUj9UoU2rS1K235dv3W+ZaipWsMfRTKKQBT07Un8VNoAfTKfRQAUJ2plPoAKKKKAH0yhO1FABRRvooAVelFIfvH60UAFFFFABRRRQAb6P46KP4KAD+OiiigATtTKf/BTKAH0Uyn0AFCdqb92nUAFFFFABRRQ/egTPKf2rJ/K/Zv+JX/YDuP/AGWvzF/Z1+DfxE+JHgXxxrngPxNPov8AYMMc1xp9tcSQyXzeWzKq7f4tqt96v1o+J3gO3+J3w/17wreXU9jb6xZyWclzbKrSRq38S7q4X9mH9l/Q/wBmax1y30bWtR1f+1mhkkbUI418vy1bbt2/71NEM+Ef+CdPgPwf8RvjVqGseLby8vvGWj/8TLS7S7k3R3H8Mk0m75mkjb+Gpv8AgpYsd1+05ocM7fu5NFsY5G3bflab5q+sbj9hTwzpHxw/4WZ4a8Ua54Y1Rb7+0F0/T44Wt1Zv9ZH83zeXJ/EtP/aE/Yj8M/tE+PI/FWs+JNa0q4jsY7FbbT44Wj2q33vm+aqvYRwvhH9i/wDZx8JeJtF8RWfiyD+0tLuIb6HzfEELKsy7W+Zf96vNf+CsF/8A8VF8NWRlZf7PvJFZfutukjrvbb/gk/8AD7b8vjDxJ/e/1NvXr/7SX7HPhv8AaJ/4Rj+1te1XSP7BsWsYf7PjjbzFbb8zbv4vlpc2qGjy3wP/AME4vhD4j8E+H9SvV1przUNPtbqZlvlVfMkhVm2/L/eavnP9jvwza+Df2/LzQdO3/wBn6XNqVnb+Y25vLVdq7q/UTwvo0fhzQ9J0uCSSWHT7WG1jaX7zLHGqqzf9814v8Of2LfDfw5+PF98VLPxBq9zq15NdXDWU8cf2ZWm+9935vlpqWrBnxX/wUm+JF18RvjxZ+BdIjnvrXwzb/Zfs1orSNNeTfNNtVf4lXav/AAGuT/aM+Oviz4yfCnw/4Vvfg3d+GNP8M+X9j1KO3uP9Hhjj8tlbcu3ay196fCv9iDwz8L/jNN8SpfEmseJfEEjXEy/2lHGqrNN96T5fm3bWZV/3q961jS4de0u+0+8Vp7O8hkt5omb7ysu1qHOwJXPk/wDYt+LH/CyP2PdU024k3at4X0+80mb5vmaH7PI0Lf8AfNfGP7DfwM+H/wAcfE3iq1+IN99hs9Ns4ZrVvty2u6RpGVvmb73y1+gHwJ/Yo0P4CzeKP7F8Wa5d2fiDT5NPuLK7jh8uPcrKsi7f4lVq8ttf+CTngNNu/wAaeJZf963t6SdgbueB/EaDRf2Of2lPDd18JfEi65b+TG1xB50d0sfmSeW1u0i/e3K27+9XQf8ABUh5Jvjd4BmVWXdo9vJt/u7rj7tfTvwn/wCCd/wy+F/iyz8QS3Gq+KL2xk861h1Ro1t45P4W8uNfmb/erp/2jf2N/Dv7R3jDR/EWr+INV0q4021W1WCyjjZZFWTzNzbqd7gj5X/4KrP+++Fq/wDTjef+gw19mfCHxb4fg+DvgWOXxBpEUi6HZqyyahCrK3kr8v3q5f8Aaa/ZJ0H9pa48Oyavr2p6L/Ycc0cP9nxxt5nmbfvbv92vG1/4JOeA57dlbxp4j+Zdu77Pb0+a6GeY/wDBUaXz/id8PWjZZY20WRlZW3K3+kNX6WaP+60vT/8Ar3h/9FrXzn8Yf2GfDnxhTwct/wCKNY08eG9Jj0e3+zRwt5yq3+sk3fxf7tfR3lLa28MKszLDGsf+9tXbUt2SC1z8yf2Cbrf+2d44/wCvfUv/AEor7U/a0+LX/Cnv2e/FniCKTytUkt/7P0//AGrib92v/fK7m/4DXK/A/wDYy8O/BH4sax4803xFq+p32qR3EclpdxxrDH50nmNt2/NXS/tIfszaf+0to+i6Tq3iLVdDstLuJLpYdNjjZZpGXarNu/u0lLVBax+ZH7Jvxf8AFn7P95rmuaD8N5/G0msW62f26e3mZVjVv3iqyr825vvVvfsd/Ei6+EH7VVqupabP4c0vxNI2m3Wn3MbR/Z1mbdD97+FW/ir9XPhr8PNL+EXw90HwjorS/wBn6ParbxyN8rSfxNI23+JmryP9oL9i/wAL/tFeMNP8Tahrmr6Dq1nara+Zpvlt5m1t0bNu/iWrcruwWufG/wDwUG8Pap8Mf2tNB8fNayS6bqC2d5by/wALTWrbZIf97btav0B0j9qX4U614IXxdH430e001o/OmiubpVuYW+80bQ/e3fw7a0/iB8JfDfxQ8Er4V8ZWK+I9P8uNWluf3c3mKu3zlZf9XJ/FuWvl/Uf+CWHgGfUFmtPF3iOz0/d/x7PHDJJt/urJ8v8A6DSv0Fax33wU/bj0P9oT4k3HhHw94N1eCGGGS4m1eeaPyI4V+VWZf4dzfdWvkf4dsz/8FUr5v+povv8A0S1foJ8F/gL4N+A/h2TR/CGmtbLM3mXV3O3mXN0396ST+L/d+6tcF4e/Yl8N+H/2i5vi/F4g1eTVpNQm1BtOkjj+z7pFZWXd97b81SnYo+NvHk9x+yx/wUMm8Xa9aytod5qDags6ru8yzuF2yMv95o2/hr9CNQ/aQ+Fml+Dm8TS+OtBk0jy/MWSG9VpmX+6sP3vM/wBmrvxr/Z/8E/tA+H4tO8XaW10bVmazvbaTybi1ZvvNHJ/7K3y18wSf8EpvA66n5z+NvELWH/PstvbrJt/66f8A2NVuI8H/AGYZ7z9or9vy+8fWNm9to9vqU2uXG7/ljDt8uFW/2mrQ8M2/2r/gqxfQyxrJDNq15HNG33ZI2tfmVv8AZr9AvhD8FvCPwP8ADa6H4P0mPTLVm8yaRm8ya6k/vTSfeZv/AB2uD0X9jTw7pP7Sc3xkXXtTl1iS4kuP7NaOP7MrSR+X9771HMJnwz+0d8NvEX7GXxO8RL4VZl8B+ONPuLOGORd0bQyf6y3b/ppG3zL/ALNfQX/BKNN/w38fbv8AoKWv/olq+rPjd8GPD/x4+Hd74T8Qq628jLNb3dtt86zmX7ske7+L/wBCrl/2bf2a9H/Zp8P65pmjaxqGrx6tcR3UjagsatGyqy7V2/71Dd0Ixv21/iprnwh/Z71vXPDkjW2sSzQ2EN2q/NarM3zSL/tbV2r/AL1fB3wp/ZEsf2gv2e9S8fWHjpV+J0epXEkkWpXyrGqxt8sczN8yyN/rFk/3a/VDxZ4N0Xx/4Y1Lw/4h0+LVdH1CPybi0n+6y/8Asrf7VfGHiD/glT4HvNYabS/GXiHStPkb5rRoYbhlX+75m5f/AB5amLshtXPnfTv2qfjF8ZrbwF8M7bxE2ja1Fff2e2u2l55Ml5u/dq00n3W2ru+b+L5a/WfR9ObRtL0/TZbqW+mtbeOGS5nbdJMyr8zN/vV8rXH/AATP+FH/AAiOn6bZT65p+qWs3nSa7HdK11N/ssrfu1X+7t+7X034S0abw54f0vS59SutXksbdbf+0L3b51xt+XdJt/ipt3GlY/Nv/gpI3lftWeDWX739k2P/AKVNWL8ZtR1z9in9o7x1ceHofL0XxpocjWa7tqx+cv3l/wCubbv++q+zP2hf2NPD/wAffiZpPjLUvEWr6Veabbw28dtZQxtHIscnmfNu+auo+PH7LXhH9pFfDreJptQs5NFkZoW09lVpI227o5Ny/d/drVXsK1z81PH3wXk+G/7FnhTxHqNoU1zxd4i+2M8v+sjtVt28lf8AgX3q9s+Pfw/1DxR/wTn+EGvWMUlwvhu3juryKNdzLbyeZG0n/Aa+vf2iv2adD/aE8F6H4Vv9SvtB0/Sbhbi3bTY42b5Y/LVfm/h213fgH4e6b8PvhjovguBm1LS9NsV0/dexqzTR/N/rF+7826le47WPmz9hn9pHwPrfwM8O+F9R8RadofiTw/btZ3FpqFwtv5ke5mWSNm+Vl2tXz3/wUY/aF8O/FbVvCvgPwZfJ4j/s28kuLq7sv3kcl1Ivlxwwt/y0/i+7/eWvevGv/BMP4Z+LNZnv9F1HU/CK3EnmNZWix3Fqv/XNZPmX/d3NXafBP9g/4a/AnXLfxBbw3niPxJb/APHvqWssrfZW/vQwr8qt/tfM1J2WrEzqNG+C32r9k/Tfhbq6q1w3htbG4/6Z3DLu/wDHZG/8dr8w/g/+0Jqnwg+CPxa+HMvmxahrjR29r/07ybvLuv8Ax1V/76r9nFXetfIHxI/4Jp+DPiH8Rte8VP4o1rSP7YumuptOsreFoY2b721mbd81NN7sbVzZ/wCCcPw0X4ffs92+uXEPlal4suG1Bty/Mtqv7u3X/vld3/Aq+bfCqeb/AMFVrxv+o5ef+krV+lWk6NZ6Ho9jpdhCsFjY28drbxL91Y1Xaq14foP7F/h/S/2lJvjIviLVZdUkvJLz+y2hj+zK0kbR7d33v4qSkDVj41+K1hb6v/wU8t7G9hWezutetbW4jb+KNrdlZa5HWvG/iL9j+b43fCW383y9YVbW1nVtvkru+WZf726FttffHiL9i3w7rf7Rlv8AGCXxBq8WrQ6hDqH9mrHH9nZo127d33ttX/jd+x54M+OfxD0PxlrV1f21/psccMltaeX5N4scm5Vm3fN/s/7tPmJtc/M/9oj4TSfB74J/B2xuYfI1TWrW81i8VvvK0jRrHH/wGNV/76r6V/4KTQMnwZ+Cf/XvJ/6Sw19JftJfsg+H/wBp2/0G41fXNT0P+x4ZIYYtNjjZWVmX+9/d21rftAfsm6D8f/CvhHQ9V1zU9Kt/DsbRwyWUcbNNujWP5t3+7Re40rHzL+2xceV+wv8ABlf9nS//AEjas/4G/sTfAn4kfBjwv4g8S640WuapYrNeQLrUMO2Rv9n7y19OfGb9lLRfi58I/Cfw9vde1PTtP8OrbrDd20cbTTeTH5a7lb5a8bs/+CU3gVY/m8aeIW/3rW3oGUf+Ck1rp+m/st+E7XSLiK80uz1yzt7eWCZZlaNYZlX5l+992uLvv2a1+Mn7Afw98WaHCy+NPDOm3FxC0H+surVZpGkh/wB5fvL/ALVfRniz9ijw74m/Z98N/CN/EGq22k6HdLdQ6hFDG1zIy+Z8rL93/lpXsXwZ+Gln8GfhjoPguwvJ9Qs9JhaGO5u1VZJNzM3zKvy/xUXsJq5+Rvwz+ImtfFX9qb4Y69r0i3Oqf2tp9rJOq7WkWNWVWb/ar9Zvjg+34K/ET/sB3n/oLV44f2APA1v8abb4iaVq2q6RJDqkerLo9tHG1osy/eVd3zKrNX0P408Lw+NfCOveH7iaS2t9Ws5rOSeBdzRrIv3lpXuxWsj4V/4JQo39g+Pv7vmWP/ousX/gqt4B1G18SeCfHkELS6W1n/ZM0n8MNxHJ5ke7/eVm/wC+a+tP2Z/2VdF/Zk03WrXSNc1HWl1RoWkbUI418vy12/Ltr0vxv4R0fx74ZvfD/iDTYNX0e9j8u4tLldyyL/7K3+0vzUno7jWqseW/CT9qj4d/FDwDp+tDxZpGkXS2sf8AaFhqV4tvNazKq+YrK33l3fdavhT9o7xXY/tafteeGdH8DSNqtjD9l0mO9jX5ZljmaSaZf+maru+b/Zr6E1r/AIJV/DvVL5rjSfE2v6Nas277Iyw3Sx/7Ks21q9y+AX7KvgP9naOaTw5Zy3esXC7bjWdSZZLuRf7qt92Nf9laN9R7aHsnlLBHHGvzLGqru/3aZT2aikUhlFFKvWgY6iimUAPoplFABT/4KZRQAU+mU+gAfvRRTKAH0UUUAFFFFABRQ/eigAooo+5QAJ2ooooAKKKKACiiigAooooAKKKKACiimt1oAdRRRQAP3pyvTaKAGt89N21JRQARtsok+ehO1FAEaptaplemv3plAD5G3NR/BTKfQA2P5Kk3bKbRQA1vvU7zaH70ygBGTc1TQ/KtNooExzS1HJ89JRQCFjSnfco30ygZKz71psL7aZRQAsnztRu3rtpz96bt+lADY12NU2+mr9ymt1oAk82myNvplFACRpU2/wDhptMoAezUyiigB/3Kbs+bdTqKAHb/AJdtNVaKKAGsm9qmj+Ragp9AAyb23U3d9KdTKAHx/JRJ89N+7TqAI1oalooARUqSNtlMooAnb56hkp1MoAWFNtSM9NplACMm+pI32LTKVutAmO+981D96F+5TW60AgXrTv4KZRQDH7/l201k3tSUUAh6tsWmt1pKKBhRRRQA+mt1pKKACiil2/SgBKKKd/DQA2iiigAp9FJ/DQAtD96KKACmU/8AgooAZRT6KACiiigAooooAKKKKAChO1FFABTKfRQAUUUUAFFFFAAnaiiigAooooAa3Wnf7NNXrTk7UAD96KKKACij+OigAplPooAKKKKACj+OiigAofvRRQAUUUUCYUL9yiigEMp38VNp9AwTtTKKKACinp2ooAE7U1utOplABRT6KACmU+mUAKvWkoooAe3+zTKfTKAHfw0qdqKE7UAFFD96KAD+Oj+OiigApq9adTKAH/x0P3pq9adQAfwUyn01utACU+mU9O1ABTKd/FS0AFMp9MoAVutJT6ZQAUUUUAFFFPoAZRRRQAu36Uv8VNp9ADKKKKACin0ygBV606iigAooo/goAKKKKAD+Ch+9Mp9ABRRTKACiiigB9FD96P4KACij79FABTKfRQAfwUUUUAFFFFAAnaiiigAooooEwfvRRRQCCiiigYUfwUfx0UAD96P4KKKBME7UUUUAgooooGFFCdqKACij+OigAooooAE7UUUfx0AFFG75qKAGUq9ad/BTKACiin0AMp9FMoAKev36ZT6ABlooofvQAyinfw02gB6dqT+Kk+7SUAFFPpq9aAEp6dqKa3WgB1NbrSU+gAooooAKavWnUygB9FN3fSnffoAZT/4KZSr1oASin7vlplAD6KE7UUAFFFMoAe/emUU+gBlFPooAZRT6ZQAUU+mUAFPTtRRsoAKKKKAGU/8AgoooAKKKKADZR/HRRQAUyn0UAFFH0oTtQAUUUUAFFFFAA/ej+CiigAooooAKKE7UUAD96KKP4KACiij+CgAooooAKfRTH70AFFC/cooAKKKKACiiigTGU+ihO1AIKKKKBhRQ/eigA/jo2UUUAH36KKP46ACiiigAooooANvzUUUfwUAD96ZT6KAChO1H8FMoAfRTKfQAUP3ooX7lABTKfRQAn8VLRTKACin0ygB9FMp/8FABTKKfQAyn0yn0AD96bu+lOfvRQAyn0yigApfu06mUAP2Uyn0UAFMop9ABQnahO1CdqACiij+OgAooooAKbu+lOfvR/BQAyiinfxUAKnamUU+gBlPplK3WgBf4qXfRTKAH0UJ2ooAKKKB91aBMKKKKAQUUJ2o+5QMKKKKACiiigAooooAE7UP3ooTtQJBRQ/eigYUUJ2ooAKKKKBMKKP4KKAQUUUUDCiiigA/9Booo/goAKKKH70AMp9FMoAfRQnajZQAUv8VMXrTm+/QAUfx0UUAFFFCdqACiiigAofvRQnagATtRRQ/egAofvRRQAUUUygB38VIvWnU1utACU+iigAooooAKKKH70AD96H70N9yj+OgAooofvQAn8VLTKKACn0f7NMoAfTKf/BTKACn0yn0AFFNbrQvWgB1Mp796KADfQ/ek/ipU7UAMp9FMoAfRR9+hO1AA/eiiigAooooAKKE7UygAp9Mp/wDBQAUUUUAMop9GygAplPooAZT6P4KT+GgBX70UUUAFDffoooAKKKE7UAFFFFABRRRQJhRRRQSFFFFBYU1utOooAKKKKABvuUUN9yigAofvRRQAJ2ob79FFABRR9aP46ACj+Oij+CgAo/goooAE7UUUygB9FFCdqACiiigAooooAE7UfwUUUAFFCdqP4KAD+OiiigAo2UUUANXrTqZSr1oAdTKe/emUAFPprdadQAU1fvU5O1FABvofvRRQAJ2ooo/joEwo/jooTtQCD+Ok/ipaKBjKd/DS0ygAp9GymUAP/gplFPoAKZT6ZQAUUU+gA+/RQnaigBlFFFAD6avWkp9ABRRQnagAX79FH8dFABRRRQAfx0J2oofvQAUP3pP4aWgBP4qX79Gyj5qAGU+iigAo/joo+lABRRRQAUUUUCYUUUUAgooooGD96KPv0ygB9Mp9FADKKfjFFABRRRQAUUUfwUAFD96P4KZQA9vuU1etOoTtQAUUfwUUAFFFFABQ/ejZRQAUUUUAMp9FFABRRRQAUynv3plAD6KKKACj+CiigTCiiigEFFFH8dAwooooAKP46KKADZTKerUUAGyiiigAoTtRRQAyn0fwUygB9FH8dFABRRRQAUUUffoAKNlFFABRRRQAUyn0UAFMp9NbrQA6iih+9ADKfTKVetADqKKKACiiigBlP2baKE7UCYfx0UN9+igEFFFFAwooooAN9FD96P46ACim/ep1ABRRQ/egAooTtRQAUUUUAFD96KP4KAChO1J/DS/wUAFCdqN9FABRRRQAUUUUCYUUfwUUAgooooGFFCdqKAD+Oij+CigAplPooAKKKF+WgAooooAKKKKBMKE7UUfwUAgooooGFFFFADKfRRQAUUP3o2UAMp/8FMooAfRRRsoAKN9NbrTqAChO1FFABRRTKAH0UUn8VADafRQ/egAooooAKKKKAD+Oimr1p1AAnaj+OiigAplFFAD6KPpSfxUALRRQnagAopP4aVO1ABRR/HRQAJ2prdadRQAynp2oooAZT6KPv0AFFFFAB9+hO1FFAmFFH+zRQCB+9FFH8dAwo/joooAKKP4KKABO1FJ/FS/wUAFFFFABQ/eiigBu76U5O1FCdqACh+9FD96ACmUU+gAoo/gplAD/AL9NbrTl+5Q336AGUUUUAPooooAP4KKKKACiiigD/9k=', 'JPEG', ML+3, y+2, 36, 18);
  } catch(e) {}

  doc.setFont('helvetica','bold');
  doc.setFontSize(12);
  doc.setTextColor(...WHITE);
  doc.text((paciente.nombre||'Paciente').toUpperCase(), W/2, y+9, {align:'center'});
  doc.setFont('helvetica','normal');
  doc.setFontSize(8);
  doc.setTextColor(200,200,180);
  doc.text('Lic. Julian Gaffet  -  M.P. 1321  |  Kine House - Rehabilitacion & Movimiento', W/2, y+15, {align:'center'});
  doc.setFontSize(8);
  doc.setTextColor(200,200,180);
  doc.text(formatFecha(fecha), W-MR-3, y+9, {align:'right'});
  doc.text(nombreRutina, W-MR-3, y+15, {align:'right'});
  y += 25;

  doc.setFillColor(...OLIVE);
  doc.rect(ML, y-2, CW, 1.5, 'F');

  if (paciente.objetivo || paciente.lesiones) {
    doc.setFillColor(...CREAM);
    doc.roundedRect(ML, y, CW, 8, 2, 2, 'F');
    doc.setDrawColor(...BORDER);
    doc.setLineWidth(0.3);
    doc.roundedRect(ML, y, CW, 8, 2, 2, 'S');
    doc.setFont('helvetica','normal');
    doc.setFontSize(8);
    doc.setTextColor(...MUTED);
    let info = '';
    if (paciente.objetivo) info += 'Objetivo: ' + paciente.objetivo + '   ';
    if (paciente.lesiones) info += 'Lesiones: ' + paciente.lesiones;
    doc.text(info, ML+4, y+5);
    y += 11;
  }

  [1,2,3].forEach(si => {
    const filas = (sesiones[si]||[]).filter(r => r.ej && r.ej.trim());
    if (!filas.length) return;
    const sc = SES_COLORS[(si-1) % SES_COLORS.length];
    if (y + 10 + filas.length*7 > H-15) { doc.addPage(); y = MT; }

    doc.setFillColor(...sc.h);
    doc.roundedRect(ML, y, CW, 8, 2, 2, 'F');
    doc.setFont('helvetica','bold');
    doc.setFontSize(10);
    doc.setTextColor(...WHITE);
    doc.text('SESION ' + si, ML+4, y+5.5);
    doc.setFont('helvetica','normal');
    doc.setFontSize(7);
    doc.setTextColor(220,220,200);
    doc.text(filas.length + ' ejercicios  -  Click en el ejercicio para ver el video', W-MR-3, y+5.5, {align:'right'});
    y += 10;

    const cols = [
      {label:'BLQ', w:8, align:'center'},
      {label:'EJERCICIO', w:65, align:'left'},
      {label:'SER.', w:10, align:'center'},
      {label:'R1', w:10, align:'center'},
      {label:'R2', w:10, align:'center'},
      {label:'R3', w:10, align:'center'},
      {label:'R4', w:10, align:'center'},
      {label:'KG S1', w:16, align:'center'},
      {label:'KG S2', w:16, align:'center'},
      {label:'KG S3', w:16, align:'center'},
      {label:'KG S4', w:16, align:'center'},
      {label:'OBS.', w:CW-8-65-10-10-10-10-10-16-16-16-16, align:'left'},
    ];

    doc.setFillColor(...MID);
    doc.rect(ML, y, CW, 6, 'F');
    doc.setFont('helvetica','bold');
    doc.setFontSize(7);
    doc.setTextColor(...WHITE);
    let xc = ML;
    cols.forEach(c => {
      if (c.align==='center') doc.text(c.label, xc+c.w/2, y+4, {align:'center'});
      else doc.text(c.label, xc+2, y+4);
      xc += c.w;
    });
    y += 6;

    filas.forEach((r, ri) => {
      if (y+7 > H-15) { doc.addPage(); y = MT; }
      const bg = ri%2===0 ? sc.light : [255,255,255];
      doc.setFillColor(...bg);
      doc.rect(ML, y, CW, 6.5, 'F');
      doc.setDrawColor(...BORDER);
      doc.setLineWidth(0.2);
      doc.line(ML, y+6.5, ML+CW, y+6.5);

      xc = ML;
      doc.setFont('helvetica','bold');
      doc.setFontSize(8);
      doc.setTextColor(...sc.h);
      doc.text(r.blq||'', xc+cols[0].w/2, y+4.5, {align:'center'});
      xc += cols[0].w;

      const ejNombre = r.ej || '';
      const ytUrl = getVideoUrl(ejNombre);
      doc.setFont('helvetica','normal');
      doc.setFontSize(8.5);
      doc.setTextColor(...OLIVE);
      let ejLabel = ejNombre;
      while (doc.getTextWidth(ejLabel) > cols[1].w-3 && ejLabel.length > 5) ejLabel = ejLabel.slice(0,-1);
      if (ejLabel !== ejNombre) ejLabel += '...';
      doc.textWithLink(ejLabel, xc+1, y+4.5, { url: ytUrl });
      doc.setDrawColor(...OLIVE);
      doc.setLineWidth(0.15);
      doc.line(xc+1, y+5.2, xc+1+doc.getTextWidth(ejLabel), y+5.2);
      xc += cols[1].w;

      const resto = [r.ser||'', r.r1||'', r.r2||'', r.r3||'', r.r4||'', r.kg1||'', r.kg2||'', r.kg3||'', r.kg4||'', r.obs||''];
      doc.setFont('helvetica','normal');
      doc.setFontSize(8);
      doc.setTextColor(...DARK);
      [2,3,4,5,6,7,8,9,10,11].forEach((ci, i) => {
        const col = cols[ci];
        if (!col) return;
        const txt = String(resto[i]||'');
        if (col.align==='center') doc.text(txt, xc+col.w/2, y+4.5, {align:'center'});
        else doc.text(txt.substring(0,20), xc+2, y+4.5);
        xc += col.w;
      });

      doc.setDrawColor(...BORDER);
      let xl = ML+cols[0].w;
      for(let ci=1; ci<cols.length-1; ci++){ doc.line(xl, y, xl, y+6.5); xl += cols[ci].w; }
      y += 6.5;
    });

    doc.setDrawColor(...OLIVE);
    doc.setLineWidth(0.3);
    const tablaH = 6 + filas.length*6.5;
    doc.rect(ML, y-tablaH, CW, tablaH);
    y += 5;
  });

  if (y+12 < H-8) {
    doc.setFillColor(...OLIVE);
    doc.rect(ML, y, CW, 0.8, 'F');
    y += 4;
    doc.setFont('helvetica','italic');
    doc.setFontSize(7.5);
    doc.setTextColor(...MUTED);
    doc.text('Los ejercicios son hipervinculos - hace click para ver el video de tecnica en YouTube.', ML, y);
    y += 4;
    doc.setTextColor(160,160,140);
    doc.text('Kine House  -  Generado el ' + new Date().toLocaleDateString('es-AR'), ML, y);
  }

  const totalPages = doc.internal.getNumberOfPages();
  for(let i=1; i<=totalPages; i++){
    doc.setPage(i);
    doc.setFont('helvetica','normal');
    doc.setFontSize(7);
    doc.setTextColor(...MUTED);
    doc.text(i + ' / ' + totalPages, W-MR, H-5, {align:'right'});
    doc.setFillColor(...OLIVE);
    doc.rect(ML, H-9, CW, 0.5, 'F');
  }

  doc.save('rutina_' + (paciente.nombre||'paciente').replace(/ /g,'_') + '_' + nombreRutina.replace(/ /g,'_') + '.pdf');
  toast('PDF descargado');
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
