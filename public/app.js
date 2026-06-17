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
  const días = { 1: sesState[1], 2: sesState[2], 3: sesState[3] };
  if (rutinaActual) {
    await fetch(`/api/rutinas/${rutinaActual.id}`, {
      method:'PUT', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ nombre, fecha, días })
    });
    rutinaActual = { ...rutinaActual, nombre, fecha, días };
    toast('✅ Rutina actualizada');
  } else {
    const res = await fetch(`/api/pacientes/${pacienteActual.id}/rutinas`, {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ nombre, fecha, días })
    });
    const { id } = await res.json();
    rutinaActual = { id, nombre, fecha, días };
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
  if (!confirm(`¿Limpiar día ${currentSes}?`)) return;
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
  const días = { 1: sesState[1], 2: sesState[2], 3: sesState[3] };
  const pac = pacienteActual || { nombre: 'Paciente', edad: null, objetivo: '', lesiones: '' };
  generarPDF(pac, nombre, fecha, días);
}

// Descarga el PDF de una rutina guardada (desde el historial)
async function descargarPDFById(id, nombre) {
  const res = await fetch(`/api/rutinas/${id}`);
  const r = await res.json();
  generarPDF(pacienteActual, r.nombre, r.fecha, r.sesiones);
}

// Motor de generación de PDF
function generarPDF(paciente, nombreRutina, fecha, días) {
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
    doc.addImage('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAMqAyoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9OKKKK5zoCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKhF1GTjDUfa4842t+VAE1FQ/ao/RqBcxns1AXJqKh+1R/wB1vyo+1R+jflQBNRUP2qP0b8qPtUfo35UATUVD9qj9G/Kj7VH6N+VAE1FQ/ao/Rvyo+1R+jflQBNRUP2qP0b8qPtUfo35UATUVD9qj9G/Kj7XHnG1vyoAmoqE3UY5w1H2qP0agCaioftUfo35Ufao/RvyoAmoqH7VH6N+VAuoycYagCaioRdRns1H2qP8Aut+VAE1FQm6jH8LflSC7jP8AC35UAT0VD9qjzja35UG6jH8LflQBNRUP2qP+635Ufao/RvyoAmoqH7VH6N+VH2qP0b8qAJqKh+1R+jflR9qj9G/KgCaioftUecbW/Kj7VH6NQBNRUP2qP0b8qPtUfo35UATUVD9qj9G/Kj7VH6N+VAE1FQ/ao/Rvyo+1R9cNQBNRUP2qP+635Ufao/RvyoAmoqH7VH1w1AuYz2agCaioTcxjs1H2qP0b8qAJqKhN3GP4W/Kj7VH6NQBNRUP2qP0b8qDdRgZ2t+VAE1FQ/ao/RqPtUeM4agCaioRdxn+FvyoN1GBnDflQBNRUP2qP+635Ufao/RvyoAmoqH7VH6N+VIbuMfwt+VAE9FQfa4+u1vypftUf91vyoAmoqA3cY/hb8qPtkX91vyoAnoqEXcZ/hb8qPtUfo35UATUVD9qj9G/Kj7VH6N+VAE1FQ/ao/Rvyo+1R+jflQBNRUP2qP0b8qPtUfo35UATUVD9qjzja35Ufao/RqAJqKiFzGezUhuYx2agCaioTdRgZ2t+VBuowM4b8qAJqKh+1R+jUfao/RvyoAmoqH7VH6N+VH2qP0b8qAJqKh+1R+jflR9qj9G/KgCaioTdRgZ2t+VL9pQ9moAloqE3UYOCrflQLuM/wt+VAE1FQ/ao/Rvyo+1R+jflQBNRUP2qP0b8qPtUfo35UATUVD9qj9G/Kj7VH6N+VAE1FQ/ao/Rvyo+1R+jflQBNRUP2qP0b8qPtUfo35UATUVD9qj9G/Kj7VH6N+VAE1FQ/ao/Rvyo+1R+jflQBV6c0Y5zRgkcUp4oAOpxQp5xSDg5o+lBLQnTJ96Wg8jFHagoO+KKPf8KM5OBQAUUZ5xRQAUUUUAFFKBmkIxQFwpe2aT3pO9AByRiloOO1HfFABRRRQADk4oX71A4OaB1JoAAcE0nSlpCM0ABBP0paKKADvmlyO4pKKAA47UZ5xRRkAUABGKKQHNLQAUUUDk4oATv8AhTj2+lIOWpevTtQAlA5OKUjFIDzmgAooooAKO2KQnFKDmgBB1xS0d80GgBRzxTec4FKODmjHGaAuGCOtHvSCl7YoAQ807rSClBxQAlB5GKDR3zQAHtRyTignjNA4OaAA47UHkYoNA5OKADHFFGeMUCgAprdadSEZNACAZFO6CgDFB5FACYLcigqRScjilBzQAdODSg5pD1oHSgBRycUUDg5pM4oAcBmkIxSc9sUvPegAJxRSEZpSeM0AHfNBoooAOe1HsaDwM0Y5zQAEcYoPIxQaKAA9M0E4oPIxSEZoAUHNFIBiloC4UHgZooPIxQAH7tBzxigj5aM5oAQgmlAwKBycUDnigAzziikA5NKBwTQAUd8UA5o75oAKQnFKaQgnmgBQc0UgpaACiiigAo96KO2KACigDv70mRQA4HFBOaQcnFFAB3xRR3zS9TigBKO2KKKAAdMe9IODnFLSjHegBo65pTQcdqKACiiigBQcUE5ppOKUHNBLQdsUCiigoKO+aUDNIeOtAAaO+KKO+aAF7YpBQaKAFAzSEYo57Uc96ACiiigAooooAKDyKKKAEHA5paDyMUuM0AJQODmgjFHfFAAODmk57UtFAB2waBRRQAUUUUAIRmgDFLRQAUe9FBIAxQADk4ozxiheDmigloQdcUtHfNLjNBQlHvSkYpM8Y96AuFFAHOKKAuGCRxSnik57Uc96ACjIB5oPAzSEE0AA5paQDFOAzQAlHfNB4ODQOTigBTyM0g5GaOc0pI6CgBpGaOnBpcY/GkIzQAqkHtQcdqF4PNFABQcEUUUAIAVHNLQeRiigAz7UdRilGO9Icdu1ABRRRQFwPIxRRnnFBGKADvilx3pACTmlPTFACUUCjGaACijOaKCWheMe9NGe9LQOTigoO2KBRRQADg5oHBzRRQAUHI57UUHkYoACQKAc0jc0DpQAtHbFFITigBRQeBmgHNB5GKACiig8DNABRRRQAdsUhBpRycUUAA4OaKKKACgcHNHvRQAUUUUAFFFFABRRRQAUUUUAIw70oGBQeRiigAopQM0hGKADknAoHXmgcHNFABRRRQADk4ooHBzRjvQAUUUUAFAGaKUHFACUUvU0mecUAFFFFABSg4pO+KXHegBrnJ4pF9aUjNKBgUABooooAO+KKTvTjQAlFHfFFAAeBmig8jFFAAOTimt1pw4OaQgk0BcWj3oo7YoABycU5elNXg5pOe1ADm9KQUdBk0UEtADhqMYo75oNAWCigcnFHvQMDyMUUY4zQOTigYHgZpCSKU8jFIRmgBOSaeBg5pnQ807IIoAQHk0uOc+1IBzmlNAXA0UUUAB4GaKDyMUUAB4GaKCMrRnNACgZpCMUoOKCc0AJQOpHqKBycUDrmgA9vSiig8DNBLQDB470DPegfeo9aChQcUE5pPeigAoGQc9qKDwM0AHHaiiigAoHBzRRQAAE0EYo57Uc96ACiiigAoHJxRQODmgBRgnFBxnikHDZoNABSEZNLRxigAAxRQM96M84oAKDyMUEYooAKO+KKO+aAAcHNFBooAKKKKADtigUUUAFHvRR2xQAUUE849qKACiiigAHJxQOTigcHNAODk0AFFGMUUBcUHFBOaSigAooooAKKKPegApe340mecUvbFADR3+tLQBziigAooooC4oOKaBzml74ooADRRRQAd80pPGKSigAFHbFHfFFAAKDwM0UHkYoAOelGMDiijnNACDk5pSfY0HHalGDQAnbNJkU7II4phBzQA4c8igjFCHHBpTQS0JQOTiigcHNBQUUdqBQAHkYpcZpKUHFACEYpQM0E5ppOKAuO6HmkPTFIDmloJYueMUi8HNFFBQUUvG2kUEigBCM0dODSkYpCM0AKORmjPOKBwMUg60EtC98UUHqD7UE4GaCgooBzRQAdsUCij3oAKKKKADIB5pAaCM0AgDB60AKRig8jFIG9aByc0AO6EH2pKDR70AHbFAoooAKDyMUDk4ooAM9qDwM0d80NyMUAFFFFAAeBmig8jFFAB70Z5xR2xSAc5oC4tFBooAKKKQnFAC0oGaQcjNJk9BQAtHGKQZ70vvQADPeiiigAooooAKKO+KXBoASig8DNB4GaAuHvRS9qbnFAC0UA5oxxmgA75oNAOaKACiiigApCM0tFAAaKKKCWgAzRSg4pBQUFFFFABS9qQcnFHOaAEHUmlNBIFAOaAAcHNHaiigBOgzS0EZWjOaCWg75oNGOM0A5oKCgcnFFA4OaACigd6KAEPHNOPakPIxRQAUUUUBcKKKQkCi4C+9AIHNAYEcUhBwTQAClBHcUgGBTlBOSVOB37UBcRuG6dqDSkqSDkAY6kgUrAjGRj8KBXQ2iilAzQMQDNFLjHJpygY5OMnj3oC9hoGaCpAzQ0kSqG86Mg9MOKY00TD5Zo/8Avsf40CuOJxTep4pokQ/8tFP0YGlDxj/lqnPYsBRYTHhD14oNHnRA7fNTI/2hTfMQtsV1ZsZwGBOPXH+c9qB3HUUHg4IpcUXHcaSc04MPQ0oHrTTjtQFxSc0lFFABR3zRnnFBGKAA01s9qUnFSIhfopPpwaAvYYBngUEYpSyo+0/eHUelIWGaACgkAYpAQ3Tmggmi4AKU8UmQvBoPPFK4ADmgg0g64p57fSmFxm00oGKXviigAJxRnikIzRnHFACgd/ej3pNwxilB4/GgAB5zRSZx2o3D0oACcUoOaQjNAGKAFooooAQnFKDmkIzQBigBRycUDk4oHBzQODmgloKKKKCgHJxSEZNKODmigAHAxQMDrR3xRQAHHajtiiigAFGOM0e9IcnpQApGKKKKADvmlyKQ8DNFAAfu0HkYoPIxRQS0FIRmlooKEAxS85oHJxRQAHHaiilAJoATviijvQaAuA5OKKMgHmkHNAATilBzSEZoHA5oC4tB4GaKDyMUAFITilprdaAHA85opBwM0tACEZoAxS0E4oAKBycUds0Dg5oAM8YoFAGTihsqNxBx644/OgA5zQSM4FKFLdsZGRnjNNLAMckcD1oC4tL1GKcI3eMOkcjD/ZjY/wAhUMsqWaeZfSR2qf3riRYh/wCPkUWFdD8EHGOtKQR6VxXiD43fB7ws7J4h+KXhewKDLI+pRsw/BCT2rzDxV+39+yv4aRw3xAk1V042aZYySkn6sFFNJsLo+ggdxwuSfQCnEbRljtGcc+tfD+u/8FVPgxayND4b+H3i/V3HOZxBbJj1++zenOO9fSvwL+I3xE+KvhdPGnjD4bR+CtM1CESaTZz3bS30ydpZU2KI0YH5RktwTjBGRprcLo9K+owe49KCcUp5JweOw9Ka3pSFuOIAjLEjggfnWfe65ommxM+p6zYWYXqbi6jjx/30a8V/bq1C70/9lXxzPY3lxbTCC32yQSFHUmUDhgeOtfjfPPJdBnupZZSx/wCWjlz+Z5NUo3JvY/cy/wDjj8G9HZv7U+K3hK228nfq8BI/AMTXJ6x+2f8AstaKD9s+Nfh19vB+zvJOc/8AAEIr8TTbQB8i3iGDnhc/zNS5XPCqMdCEAquUOY/YDUv+Cin7Kdl/qfHGpXzA4H2XR53B+hIFchrP/BUT9niwJ+w6L4z1Fl6bNNhhz9C8mf0r8tFmYLjPXrzUcrblwP5miyJuz9J7/wD4KzeCYplbR/g14iuIQAN9zqcELbi2B8oRgQM5r7m0+/TVNNs9Tji8pby2iuRHuDFN6BsEgDOM9cV/PTIxVS2AeV7f7Qr+gLwVIZPCGhMTy2l2h6Y6wpUyKjubYpQcUEg9KSpRoKTkgCvkr/goX8efir8DNB8E3Xwv8UnRZdYvrqK7ZbeOXzERFIHzg4wSa+sycc+lfAX/AAVhuC2ifDWHnAv75vyjT/GqiTI+a5f+CgX7W8oyPi5OPpptqP8A2Sok/b8/a36f8LduPx021/8AiK+fTGVO3IoxzV2M72Pocft9ftaEc/Fuf/wW2n9YzSN+33+1qB8vxduB9NOtf6RivnstgUm8EU0kF2e+n9vb9rYylv8Ahcd7z6afbf8AxFdD4K/4KJftMeHPFenav4q8XjxXpMLj7XpV3aQxrNH32ugUq/8AdPIyK+X+tSYBxuA6YPuPT8fXtSsg5mfu78HfjP4D+Ongu08c+ANUFzZzbY57dz/pFnMcZilTqCCevQ5B713nlt1I6cf5Pevwz+A/x38efs/+N4vGXgm/L+dth1LTrhz9n1GA/wDLOUeoAwrjDL15zx+v37P37SHw7/aO8If8JD4IumgvLMKmp6RcOPtNi+P4gCQyZ6OPxwc1LiUnc9NJAptG5W5U0oGah6DEo74oIxR3zQWgOAOaQHNKeRQBgUANbrWF8RPG2n/DX4feIfiBqllNd2ugWMl/NBAF8yREGSqluM+nIrdbk15L+1pcNF+zT8SQCR/xTl33x/DQtyZHiWn/APBUj4B3smNZ8M+NNK9zZwzqB7FJB+WM12Ojf8FE/wBlHVHVZfiDd6cT/wA/2lTxgfUqrCvyBOZAkhxwM+9PMrcYLdc8tn9OlaWJuftvo37Xf7M+tkCx+N3hYM33UmuWhY/g6iu00z4n/DfXQH0b4geG74N08jVYH/k1fgk2187o1YHqCB/hTPIt85EEYI6FQVP5g5pcocx/Qal1BdIJrO4iuIz/ABQuJB+a5q5BHIyglGwTjO0kfp0r+fmy8Q+JdJIk0jxPrOnuBwbTUJYtv0INerfCD9oj47aL4z8P2Nn8X/FJtZtVtIZoZ75pkljaVVZTvyeho5Q5j9sCuOePwINJnJp8pBdsDgMfxqLOCagodjnPtQaQsKQtkqgzliAOPU4oGOxnikIzXlPh39qf9njxFqE2l2fxe8PQ3tvM8EtvdTmFkkU4ZTuAHX3r0qw1nR9ajFxoerWGpRN0eyuo5wfwQk96dg5kW9ppQMUYKcSqYyegcFT+tKeDjk/QZpBcMA00jBpScc4yPUEEfp0pMg8gjH1oGOBzRSDjg07HOKLgJ3xRS7TnNBoASig8DNFABRRRQAUUUUBcKKKKADvmgnnHtRR3zQAUUE+xooADwv40gpTyMUUAKBmkIxRz2o570AB5GKKKKACg8DNFB5GKACiiigAHBzRRRQAUoIFJRQAdzQeBmig8jFBLQhGTSgYo70uM0DEoPIxQRijFFxMKKMe4/E4pu9SdoZSx7bhQMd0pCMn8KJQVTnr6d6WJXx86MD1wVIOPWgdxB0x70tBIBxn/AOtSbhQAtIRmjPsaXtmgAPTFFJmlPGO5PYDJ/Ic0BsIsigkn+EEnPHA7/wCf6jPgH7QP7bPwg+AGvp4O1hNS13xCYTNPY6SqbrVMZUTSPwhPULgnkE4yK4L9tf8AbTs/gjaz/Df4b3trd+PbqMme4OJItCTB/eOucNMf4UPA+Vj2FflXdarqGq6jc6tq95cX19eym5uZ7mVnlmlY5LyOTlic88fpgVcY9zNy1Pv7xR/wVi1VVYeC/gvYwpj5H1TU3lb6kRgD04ryfW/+Cm37TOsSN/ZM3hjRFJ4+yaWHdf8AgUhJr5VmkBTaCfyqCJcHIwKppE8x7R4t/bC/aW8VIyar8YvECpJyY7SVbZP/ABxRXnWo+NfGWuq0uu+Lda1Bm7z6jMx/Vq552yeaeGO3aO/anZIYzy1kmEjxpI7Hgsu4k/U5NXfMcoFXksQgWMHcWJAAG3kkkgYx/MVXtba4urqK1tbeWee5cQxxQgtJI5PyqqrliST0Ar9Qf2K/2GLP4dW9p8VvjNpUN14sdEm0rSJFV49HBGfMkHIacg8ZzsGO5wqbS2CzOP8A2Jf2DP7Ll0/4xfHbRS14rLc6H4cuV4gIPy3N0OcuOdsZyBjLckgfoM/LFu5PNRhcsJMDecZJ6njqT3//AFfWnHcazvd6lqIEYoIG2jPahgfWkPY+fP28FZv2VfHPPHk23/o9a/HKQkEjPp/Kv2S/bxAX9lLxyfWK2/8ARy1+M8j7pCQeMCtIkPcRvWmE809jxTSpqmQ0Lu4zSFsmjGBTc84pDHuAYyPcfzFfv94Mj8vwjoK+mlWYP/fhK/AA9vTK/wAxX9AfhHB8JaEw6HSrL/0QlTIqO5rUUmRSg5qEaC8bTmvz5/4Kyny9L+GpOcG8v/8A0XHX6C4Jz9K/Pv8A4K14GkfDXj/l8v8A/wBAjqokyPzsbkk+tNJxQpyM0jdasyYpIIptFFA0OXk0rEjHtTVODk0rEGgTQ9nzHx9MHoQa6P4YfFXxx8HPGVn468Aa2+m6pZuqhs5inQ5/dzL0dDzkH1zXMZ4xSBcnjGSMc8jB68d6b1QLRn7X/sxftPeC/wBpLwmNQ0eSPT/EmnRINa0SRx5lq/AMic/NCTkhh0zg44z7ftIGa/AjwD418V/DXxVp/jXwPrlzpGsaXIHtriBuQv8AEhHRkYcFWBBBPfkfrl+yf+2D4V/aP0QaLqS2mi+OtPiDX2lo22O5QDm4tsnJTg5X7ykdwQTHL1NLn0G3WkpA4YZX5uAeD2POacBnocj19ajS9kUmJQSAMUEYpCM0DE6mvIP2vIyf2Z/iTjr/AMI7d/8AoNewAEc15P8Atakf8MzfEo/9S7dj/wAdoe6JkfiGgAiQD+7RTVJZBQDjrWxApOKaTzxSnnmmjk5pEtD8nvW14ElKePPDRXIxrNln/v8ApWIela/gbnx34b/7DNj/AOj0oew1uf0A9ueuaYetOz1FNPWsmbISnwrunh5biZG4OMYNN96lt8CaLPeRR+tNE9GfgF4sji/4TLxEWRSv9sXpwUBB/fv7f1qCz1/XdHkE2ia5qOnOpyrWl3LEV+m1hT/FzEeMfEX/AGGL3/0e9ZDuTWiSMk9D2fwf+2H+0x4JVU0j4w65LEgwsN+4u4v++Xr2Dwv/AMFRfjtpJSLxN4X8J+IYxwzNbPayN75jIAP4Gvjffxik3EcnpRZD5j9L/Cv/AAVW8BXpjj8afCfX9LbADzadeRXYH+6sgDY68bq9o8Kft4fsueLtkcXxMXR7h8DyNatJbYg+hIDL+OcV+NiNx0/lkfjjNSO+8bGAYHruwwP4YpWQ1I/fjw74t8K+K7Vbvwt4k0nV4nG4NYXsc+fwU5H0IrWjcM+zOH/ung1/Pla6jqGizrdaFqF1p069JbOdoHH0KEGvYvA37ZP7TvgNEi0j4v6ve26cC11gLfw49MSc9qXKPmP2vb5Ml+McU05OOOtfmR4P/wCCqvxT0xoovHPw38P67GmA02mzy2M5HrjLJ69q+gPA/wDwU1/Z48RhYvFsWu+EJnHzNe2wngDf9dIsn817VPKylJWPrcqSMZFB4rh/Bfxu+EXxFSM+CviT4e1V3XIijvUSXHujkN+ldxtYKGKnDcggEgj69KLMdwAzQRigMBxnPPahiAdvekO4lFAU+hH1BH86XBouSxKPel2mg8DFBQlFAooAUYxzSZBPFHbFIBzmgBaKRgSRj0oHHBoAWiiigAooooACMUUc96KACiiigAooooAKKKO+KAAcnFFKAc5pMYoAOeuOPWnKCVyBnHoc0iqWYAEAn8z/AIV+fvxL/wCCpmpafqOo6F8P/hDarJp91PZ/a9cvjIC0UjRswijGMZXI+amk3sS9D9AN6swRTlj/AAjlvyqprGsaT4dtze+IdXsNJtwMmW/uo7dQPX5yP0r8fPG/7ff7UnjYTW//AAsQ6DaSZHkaFbJa4HpvIZvb8K8L1zxZ4n8UTtceJ/Eeq6vK53M17eSTEn/gRI/QU+UnmP2M8c/tyfsw+At8N58TbfV7lCf9G0e3a6ckdt2Av45r538Y/wDBVvTtzxfDj4UXV0ATsn1m/wBqH38uPOO3Br86g20DyyVx0AwAPyxQjbTkjn1BqkkTzH1L4/8A+CjP7TPim2kg03XdK8MwOMAaPZ7ZV/7aSFj+nau8/wCCbfxF8fePv2g9dn8beMtX15/+EdlkX7fctIqt5gwQuQv8R7V8PzyFkwa+v/8AglYR/wAL+10Hv4cl/wDRin+lDSsUnc/VNs5wSScdfWkAzT5Fy3HoB+lNHBrM0Q5VwOaGwBS9Bnr9KRwSuQCSeAAOSew+p9PagNhhbaN2CSc4AGSSMcD35r4z/bS/bli+FNxefCf4SXdtc+L2iaPUtTBEkWkKV5CYOGnweCThM5+YnAw/22v264fBLX3wg+CmrRT+JJM2usa3btvTTFwd0UDDhpuzN0XIAJYED802uJrpnuLqWWeWZ2eZ5XLtIzHLM5PLMeuTVxj3MpS7FrWNRvNTvri+1G6mu7i6k8+ee4fzJJJDyXYnkse5J/wFJAAc8/jz+veh2JGG5Pr6/wCFA4GasgaxLGnqMGmdPxqQDA3Hp60WYDPvEgAnHJ/z3rR0bRtU1/VbTw/oum3F/qWpTLbWtnbIWluJCfuLj6jJ+6O5FWfBnhPxH498Taf4R8I6PPquralMIbS1gGWeQ8A+yjqW6Y61+tv7Jf7HHhr9nXTU8Sa95Gr+P76EJdakFzHp6Hh4LXI+XkEM+AW6dACVJqxaTMH9kD9hvQvgnaWPxB+JNtDqnxAli3rC2HttGJAwsYx80oHV+3bOM19XplT8zFiOpPenZ+UDAAHQDoB2FJ0NZM0WwpOD9aAc0h+bkUAYoGLxigZ70HgZoxxmglo+f/29Sf8AhlHxyB2itj/5GWvxmA+bFfs1+3lg/so+O/aG2/8AR61+M54bd6gfyrSJD3GsQRil6jNN6mnAYGPxqmAhPam4pT1pKQCMcLz6j+Yr+gPwY+fB2g5/6Bdn/wCiEr+ft+UJ9x/MV/QF4LGfB2gH/qFWf/ohKmQ47mz1NOAxQBge9Az3qEaADjNfn1/wVsP/ABKfhqPW7v8A/wBFx1+gh7/Svz5/4K2Z/sz4Zj/p7v8A/wBFx1USZH51KcjIpaB0FFaWMmKRikpSc0lIaCgHNB6UgIAoGLTl45pAMjNL2xTsSyUSY5GcVe0DxLrnhTXLHxL4a1e60zVdMnW4tLu3fbJDICMMPX3B4PcGs4nAphpb7jR+tf7Hf7bWifHm3j8E+PzY6T4/iTEQj/dwasB/HEM8SHksnTPIJzgfWRGG2AdDgDpjHX8vTrX89ulX9/pOoW2qaZeTWl3ZzLPb3EDlJIpFOVZGHKnPev1E/Y4/brsvistl8MPi7fW1n40CrHY6i+I4NbA/5ZtzhLj/AND4wc5AUoW1Rdz7MJzgjvSE4pqsWOG3FiSOeuR2J9QMA5pTyOKzbKTFzxXkf7Wuf+GaPiUPXw7d/wDoNeugHFeS/taL/wAY0/Eont4du/8A0Gl1QpbH4gj5QB7UE5pZRtOPYU2tyAAJoOAcUck4FIM55pAKeBWz4FGfHfhs/wDUZsf/AEelYzdK2vAY/wCK58Nn/qM2P/o9KTA/f0nBNITmgnJpKzNFsL2xT4CPPgH/AE1T+dR0+H/Xwn0lU/kaaE9Ez+f3xlkeMfELdv7Yvf8A0e9ZAatfxmc+L/EI/wCoxen/AMjvWNWiRiOzxmgkEYpM8YpKAJRntS7jux7VHnuKeoPPGT6CgLCOCe9LvIXAqPeDJtyfxBH86kdcUAMTDNlgCPyP51LJNIBhXccdnI49PT9KroSTxT2OeKCkPtcwSie3PkzA5EkWY2H4qQfxzXq/gf8Aam/aB+HOxPCvxX12KCPhbe7lF3CPbZJkY4+vvXkyHFIWNOyC9j7X8H/8FSvjRpSRxeNPBfhrxHCoCtJEslpOw9eGK5/Cvf8AwF/wU++BGv8AlWnjfRde8JzNgGR4xeQBvX938wH1GeK/KwNx1IPqKVZTnhmx0IDEZ/I0rIOZn7xeCfjN8J/iTCtx4G+I3h/V2Yf6mG8VJs9eY3IYHkcV2khMK5lR06dVI/8A11/PUJXhdZoGMUinIeImN19MMhB/WvV/h3+1z+0j8NWih8MfFnWDaxcC01BhewEemyTkdP71TylJn7gY784PQ7Tg/jTSMngj8Dmvze8A/wDBVbxjYJFb/Ez4Y6VqyqMSXej3TWlwR67DlfU191/Bb4teHvjj8N9M+Jnha0vrTT9TeWNYL5QJo3jcowbBIPI4IPQ/hUtWLTO1IxRSnnmk96QwooooAKO+aDwM0UAL1OKaSBSjg5pp60AOPFJuFBIIpNpoAefWko7YoFABRRRQFw74ooAyaCc0AFHfNFGfagBcig880meM0E4GMUAPiOXVc8bh/P8A+tX4AeM5j/wmfiJTn/kNagev/T1JX7+wn96v++K/n+8ajHjTxEf+ozf/APpTJWlPqZzMsnPIqPvmnA9qbTM7Dh0pDnNKvSkbjmgdhrZb8q+w/wDglpmP9oLWs9D4bm/9DFfHwx3r7B/4JfnHx+1oj/oW5v8A0MUmC3P1aPJJFROMU6JiRjvnp3NOnXbG78YRSzEnaABzyTgAdeTwMckVmbXSIoyzMFQFmJwAB14J/oa+DP22v26ItMS/+D3wS1hZLpg9rrfiC1kyIQRhra2Yfx9nfjGcKcg1yn7cH7cz6nLd/B74H+IpFskaS213XbKQobjs1tbyDkJxh3ABOcDgZPwaZWYAZJ68nvz/AJ+vU81cY9zOTvsRzFiSpZirHJ+bGe/485ye/U8moue+PoO1SPk1HVkai4JpT92gccUyRwuWbhVGSfQetFmAu1jyBwoJY5+6PU11Hw+8BeLfid4rsfA/gfRZtV1nUX8uG3jGCFOMs7fwR45ZjgADrWv8Gvg348+OPjO28DeANGN3fSlZLiaT5bewhHWad+Qq4PCn5m7A1+vf7OP7NHgL9m/wwuj6BAL/AFu6T/iba5NGBc3jkDjPVYh/DHwO564CctLFxgc/+yj+yV4Q/Zs0L7XJ5WseNr6Hy9T1p4wGiyBmC3H/ACzQYwW4LdemCfoFtpYsFA9AOgHpQQCMgAewpFBPFZGq0F74pG60d6VgTg0AIvPFLSLwaXGKAA8jFLnjFJSE4oA+fv29dy/sp+OTngxWw/8AI61+NcgwSPp/Kv2V/b1G79lHxxjtFbf+j1r8a5fvkfT+VaRM3uRjqaVuPypAOc0Me1UybiE5pD0ooPSiwXGOQEI9x/MV/QJ4K48GaAf+oVZ/+iEr+fp+VP4fzFf0C+CufBegf9gqz/8ARCVEio7m1RR2pMioNAPUj2r8+f8AgrSd2m/DTH/P3f8A/ouOv0Fzkn6V+fX/AAVo+XTPhqT/AM/d/wD+i46qG5Mj86xyPz/nR3xSLwMelL3zW1zJhRQKKljQGn2un6jqAuZbCynuI7GIT3TxIWEEe4LvfH3Vyep4puMg19af8Ev9OtdR/aJ1ex1G1hubafwteRTQzIJI5Ud4wVZTwwOBkHr7UhnygiYQHIOeRg9foKaw/iHSvvr9s79gpvDUd78VvgTpEk2jBTPrHh23jLyWXdp7UcloweTGOVHIBzx8DyspBw6k85wc5I69Op9hz2OCCBSdyWiMsCKQDNGPXr3HpUiDA5pMYgOBSieRSpSSRGRw6MjlWQg5ypHKt0+YcjHFDY7UzoSaW4XP0t/Yi/bqi8WLYfCH426tHFru1bbR9dnYJHqCgACC4OcLLjhX/iwMkEV92ygJtX5s5AyeuT0z6enpx1r+euJivPJGVOAccjnt+h7YzzX3v+xV+3be2F7ZfCL46eITNYSgW2ieIr18vA5wBb3J/iQ4AVz074pSiuhSZ+joYY/SvJP2uJFX9mX4ldc/8I7df+g16uGDbSDwwUr824YI4II4K46HpjvXkH7Xv/JsvxLI7eHbr/0Gs7a2Keq0PxMnG4gj0FR5FKHLIC3oKZWpA8HnNFNBxTgc0ANYgcetbngM48c+HB/1GbH/ANHpWGwJIPpW54Dx/wAJ34b99Zsf/R6U5bCW5+/gBNG009sZ47U0nFZM2QhGKdD/AK6L/fH86aTmnQ/66L/fH86ETI/n88ZHPjDxD/2F73/0c9YxB7Gtnxgp/wCEw8Qj/qMXv/o56x62Wxk0ABopQcUHrSYg7YollCxknHYAkZA9TSU1k8xGAOCePXPXtSKR9Up/wTf/AGiLnw1pvi7wovh/XrTU7C31GGC3vPKmEc0YdV2OACQGGSDjPHavH/H/AOz98bvh60i+LvhV4i09YzgyrZNNF+Dx7hX7U/CWFIPhR4JBjjP/ABTel/wjr9lj/GunlaW4XZI5ZCeVY7l/I5H6VLlZlctz+epF2OY5f3cinDI4KsD6EHmhwQScYA6ntX71+J/gn8HvG0LDxf8AC3wtqxcYZ7nSoTIf+BqoYfnXg3jb/gnB+zR4skaXR9F1bwncN0l0m9Owf8AfIxz0pqSFY/I5EZlBUZB7jpTWPzYHJ9q+9PH/APwSm8XWay3Hw3+KWl6oOqWusW/kSEenmLkenb1r548b/sX/ALTPw/EkmrfCrUdRtIzzc6M6XqAf8AOR9MZ5ouhNM8TbNNGR1q1qFldaPcvZavZ3NhcI21oryFoHB9MOBULI33scdj2P49KYrMQnIpi/Kc0qYcHaQcdxyPz6U5o2QkEdKBkm4uu0k49M4/pX7Cf8E7mb/hkrwtuOcXuoY/Cdq/HmIgt+OK/YX/gnm6n9k7wsFz/x+6l/6PalLQqO59I5yMelA6Y96OCePb+VFZmgg4OKUjFHGKBnvQAHkYoPTNKBmkbgYoADxzTSc0ucjApCMUAJTtwpNpo2mgB1FFHvQADk4ooB5zRjvQS0A4OaKKKCgoBHQiijvmgAYcYFLx3pDRQAoIDpj+8DX4BeNl/4rDxD6/2xf/8ApTJX7+qMsv8AvCvwC8akHxj4hx31e/8A/SmStKfUzmYa8daDSZxSg5pk3FBxQfm4FJSjjmgLgPX0r7C/4Jejd8fdawc/8U1OT7AOP518dE+lfYH/AATD1C00v47a5qGpXkFpaW/hm4lmuLhgkUShx8zM2FA+ppMFufqpJPHaJJNNKsaRIZHkc7VRAMsxY9Bj+R9K/OH9tP8Abt/4Tb7d8Ifgrq7xeH42a31jW4HIe/x1ghb/AJ49Mtxu5xwATi/tx/tvP8SPtfwn+DeqyweEVkeHVdXhdll1cqxGyM8FYAw56b/YD5viSCVowEPAxgAdB9B2+n/6gox7jlqSXCjdleABgDsB6AdhUWTUjHK1FViJACRTSh68U5WGKGIxSGIuM/jivTPgP+zp8RP2iPGKeG/BNmYba1IfU9XlQ/Z9Ph7uxwQ746RjJJ64rjfBOl+F9Z8YaPpXjXxJJoGg3d5HHqGppCZjaxE/fCDqRzz0GcnFfuT8EfBXwu8CfDbSdB+EK6a/hjyxJa3tnMsq3r4H755Rw8jepPy9ADihy0sJblX4F/A34f8A7P8A4Jh8G+AtMWNMI17fyqGudRmwMyyt2OR8q8hRxXfFRu46ckDsOf8AJ+pNHU4X8cjBz3yP8560oBJrJmtxTjHFIvFKaSgYnQ0uQRSEZoAxQAAc5pTRRQAU1utOprdaAPAP28j/AMYpeOR/0ytv/R61+NUhy5/D+Vfsr+3kCf2UvHR9IbY/+R0/xr8an++fyrSJm9xtIRmloqmQ0Nwc4pD3p3emnnNO4WI3+4x+n8xX9Avgn/kTPD//AGCbP/0Qlfz9up8tvw/mK/oE8Ef8iZoH/YKs/wD0QlRIuJtdsUhBpc84oIxWZoNAOT9K/Pz/AIK0j/iVfDX/AK/L/wD9Ajr9BehP0r8+/wDgrQP+JV8NB63l/wD+i46qJMj86T1P1o96D1zR2xWljJhR70YzQRgUhoQg4wK+xP8Aglyu39onUmA/5lm5z/38jr486kV9kf8ABLUBv2iNU9vDNz/6MjpMFufqrCdoD57H9e/4f15r4N/bR/YIt/GEl78UfgTpcVtrxLXOp+H4FEcWokZJltwOI5hydnAc9CTxX3hgqAM9KgKh25wMkZOMn1B/A8j35yMcwnY05T+e57a5tme2uYZIZrdzFLFImx43DEFWB5DZzkHkHI7U7aQP881+rH7Yv7Dml/GeG6+I3wxs7fTfHcSmS6tlIjt9aHP3+MLPjo38R64Nflxrmiav4d1W70PX9KudM1Kwcw3dndRmKWCQcbXVsEE9vXtWl7mbWpmMQOKaBu6etK4y2O44I9DQgxQKw7OBQMSZQ9GG0gjII9x3+lIelNU4fNAz7j/Y1/brm8Cvp/wn+NGqSTeGmK2ula3PIWk0rOAIp26vAx/i52Z5GBmvtj9raSK7/Zb+JFxBIsqTeG7l4pEYMsilPlIYcFSOjdCMHvX4iXLEgdxnJB6EdwR3z/j1zx9EfC79rzxJofwI8Yfs+eOHudX0HVtHns9EuXbdPpszDiIkn54D6Zyg4UEcUktR81j50jP7seh6U4jFBAzkHOec4xn/AD0+gFK3pVBuJSr0pMZpenBpAKeRW14DU/8ACeeGh66zZf8Ao9KxNwrc8BsP+E88Mn01my/9HpTlsJbn7+nqaa3WnHqaa3WsmbISnw/66L/fH86ZT4f9dF/vj+dCJkfz++MTjxh4h/7C97/6Oesc1r+Mhnxh4h/7C97/AOjnrHrZPQzuL2zQTmg9MUlJiYGnwjhiQcLgn2HrSYx1FG4ryP1pDP2d+B37UHwE8W+APC3h7SPipoEWqWGjWVlcWV5dC1lSWKFEYfvMKRleCD/hXvOmGK+gS6s5Y7iFhkSQuJEPuGXIP51/PI0STt+9jV8dMhc/njI/Oux8K/EXx94HdLnwf468RaJInINhqcqY/wCAsWXH4VLjdlXP3vmlVPlzn2HJqEEE5OAfdhX49+FP+Chv7UvhWRIrnxnZ+JLVP+WWtWKyFvrImD+lfQXgT/gqtAYkg+JHwkkQgDdc6JehgPfy32n9anlY7n6BmRXAUtnHYH/A4p6ZTDI7K+Oq8fqOf1r5y8G/t/8A7L3jOVYpPH02gTyY/dazbmEDgfxjI/8A1V7b4b+IXw+8YxpJ4R8d+HdZD9BY6pDK3/fIbd3HaizC5J4m8C+CvGkBtPF/g/RdaicYZb+zSbI+pG4fnXgPxB/4J2fsx+MEkudK8L33hO9fkXGh3bIoPqYnypHtmvpmfNsN0yNGOmXUqD+JwKbvWReCvP8AFu/yKV2gsmfmp41/4JUeMbOWS4+GnxQ0vV41PyWmtW32SUj08xdyZ/GvBPH37Hf7SPw5DyeIfhTq89rHnN1pgF9Dj1zHlgPwr9pDFsZSQCueuAefoQRV5ZSkQ2sy/wB7DEZ/AYH6VXNYXLc/nevkudNu3sr22ntbhG5hniaKQEZ42sAc8V+wv/BOyMj9kvwsT1+3akMH/r4b/CvY/Gfws+HHxEje28c+APDuuRsSf9L09C6n/ZdcMO/Oav8Aw++H/g/4XeFbXwV4E0WPSdEs3kkt7ON2dYjIxZgC3JG4mk3zDSaZ0JwTkUUdcAelFLYsO+KKTv8AhTj2+lACc9qQgmlo74oAQDFDckfSlpMgHkUABOKNwofBPFNoAfR2xRRQACjtiij3oABRRQOTigApQM0lHPagBdppCMUq5xzQ3WgBY+XUf7S1+AHjP/kcfEA9NYv/AP0pkr9/4v8AWL/vCv5//Ghx4z8Q/wDYZv8A/wBKZK0p9TOZiEZoAxS0hOKZmLRzmgHNFAWFwD0q/YazqelW17badf3FrFqUBtbtYX2+fFkHY/8AeXP8Pf1qhuAHNDHK4FBQ7zN4wwHsB0AqNlA5pMEdaUnIoGAb5eaTrSDJapOAM4oFcaOBk0HkYpTgjAoCnrQMeqbgCOCD68EdwR3r2P8AZ4/ar+JH7N2rBvDlwuo+Hbl/9P8AD90xa3uEz8xj/wCeUgGMFRzwD6nxsNt4qKRS744+p5p2Qup+6nwJ+PHw5/aD8Lr4o+HusrM8ar9u02dgLuwkwMpIueV5GHBK++QRXpbgKO+fp0r8C/hz4+8YfC/xNaeMfA3iO80bWLNg0VxA/DKOfLkX7skZ7ow79q/Uf9lv9vHwh8dRbeCvGotfDnjkKFFtvxa6kf71uxPDk5/dHB4+Xd0GbWpdz6pHNHvRGp7+uD6A+57f48dQRSspUlWGD3FS9C0JRRRQAUUUUAFIw70o5OKQ88UAeAft4/8AJqPjsf8ATC2H/kdP8K/Glxl2Pvmv2W/by+X9lLx0D3htv/R61+NTfeP4fyrSJm9xhGKKUnNJVMQdOaYKcelJSARhmNh9P5iv6APBJH/CF+Hz66TZ/wDohK/n/Y4Q/wCe4r9/vBBz4K8PEf8AQJs//RCUmOO5uggikHoaF6UE4NZmgp/pX59/8FaD/wASz4Zj/p8v/wD0XHX6Bkg/lX59/wDBWrjS/hmx6C8v/wD0XHVRJkfnTnPaj8KFxjn1pwAPatbmTBelKeRSZAo3Ckx3Dpya+xP+CW7bP2iNUJ7+Gbkf+RI6+PNpI4r6+/4Jek/8NF6iuf8AmWrn/wBGR1LBbn6sFt2DQNuOlIv3RRWZsOB+VgQCCCP/ANXpn16jHFfNn7YH7IGhftE6Idf0BoNK8e6dGVsb9l/d6guP+Pe4GCcHkLIdxU898D6SzximsNwIwORt5GeD1/D27+1CbTJaufz/AHijwp4k8DeJL7wf4u0W50nV9Ml8m5s7hdrRkcZBPDKccMOCOfas4YOGHf2r9of2of2U/BX7SHhki8SLS/FenxMNI1tU+eNscQTYGXhY9epTPANfkN8Sfhx4z+FHiu+8E+O9Dn0zWLBiJI35WRAOJI26PGR0I7dcVqnchnKkgcU0fepM557HpTgMUALKMrio4w0RLKcEjGQaex7U2gloc3JJ7fWkJzTiMim45xQMAcUvXkUmKUHFAxCCK2/Ahx478N/9hix/9HpWL1HFbPgTnx34b/7DFiP/ACOlOWwluf0Adcn1NNPWnDpimnrWTNkJT4f9dF/10UfmaZUkAzNF/wBdUP60ImR/P74yGPGHiIH/AKDF7/6Pesc9K2fGvHjLxH/2GL3/ANHvWMfu1ojJoQAmkpRxzSdaBjwQe1NcZPFJT41LHAGTngDqaBbgoAOKVnOMA0soCJuz/QfmeKiQM7ALz+P9aCh6AHlueelPZ+wJ6duOPrS7CoxxUZ5fA9KBXJkdihVmLL6MSf5nFSW99dafMlzp13PaTJjbJBIY2H0KEGoASBio2JzT5RnsPgz9rf8AaO+HyoPDXxa1sQoMC3vZBdxY/wB2TPp61758Pv8Agqn8TdKljh+IXw+0LxDEuA89k7WNyw9eAyk9fTrXxIrblwabjawI4IOcik0hXZ+uHgv/AIKWfs6eJVjTxQniDwlO4wWu7M3MKn/rpEWOM56qK918G/GL4V/EONW8C/Efw9rjP0itL9DMTgnHlkhs4HTFfhIJ2wSDgnqR1r1T9j9pI/2qPhpImATrYXKkgkGGXIJ7j2NTKKHFu5+3KgYz/Qine9RwkBNoUKBwABwAPx5qTtioNQB+ajGKToaXOaAEPHNOPakPIxRQAhOKMjOaCM0m00AOFIeeKX3pO9ACbT3xRtNOY4x9KTcKAFooooAKO2KKKAAUDg5oo96ACiijvigBQcUE5pKKAHRnDqT2YGv5/vGnPjLxCf8AqM3/AP6UyV/QAv3lHrX8/wB4xYN4w8Qkf9Bi/wD/AEpkrSn1M6m6MekIJPFKKBwc0yGIOKX3pM4pQcigYh5FAPag8cU0EBsUDHNx/Om71xgnAAJJPoKe4+XJyAO+CQB3Jx0/H8M12Xwc+C/xE+OHjOHwh8P9FkurgYkvLp1It7CEH/WzSYIRcc45LcAA0AccqMBvZSBjPI/r0olBTKkYr9HvGn/BLrQrb4YWMHw+8X3EnjywiaS7ur9ttnqzsM+URg+Sufutjvztr8+vGvg3xV4A8R3nhHxpoN5o2sae4juLS6j2umeAc9GU44boR0ovclqxiZFBzSYIOKeBxntQNDQeMmnqB1NNbBGBTge1AmDS4wAOKdbtJHOlwksitG6yRskhRkYHIYEchh2IIIqMYNSAgDigdz73/ZX/AOCil3oCWHw9/aAvZb7TjttrLxKVDT2/QKt2AQJEH9/GeeRxk/otpWoafrum2mr6LfQX1hexiS1ubZ/NinQ90ccEf/qr+fIMzEDg49efr/nmvob9mL9sfx7+zleR6NI8viDwXcSD7XodzcbTEO72sh4jcDHH3Tj3qZRuVc/Y4c4ORzRXD/Cr4yeAPjV4Wi8afD7X49SspABPEV2XNpJgExTx9UcAjHHzAgjNdupDdDz3HpUbFrYU8DNLgmkI4xTh0oGIBg5pucU5s9qYc55oA8A/bz5/ZT8c47Q23/o9a/Gs8sfw/lX7L/t3Ln9lLx2P+mNt/wCj1r8aHIVyK0iZvcYRig8UretNJ7VTEITmjGaAM04DApARyfLGSfb+Yr9//AwP/CE+Hh6aTZ/+iEr8AJz+5b2x/MV+/wD4GYf8IV4f/wCwVZ/+iEqZDjuboGBSEZpSQBikBFQjQToTn0r8/f8AgrUN2k/DQD/n8v8A/wBFx1+geNynFfnz/wAFYpA1h8M1Of8Aj7v/AP0XHVRJkfnWKeBgU0jBP1NPHI49asyY0jNJtNOxigcnFAhy9K+uf+CXzf8AGR+oj/qWrn/0bHXyGW219df8EvAT+0bqLf8AUs3R/wDIkdJlxZ+ruMgYoIxSr0FBBPNZmo2nAA02nL0oADgf09MHqPx4/KvIf2k/2bvBP7SHgptC8Qwiz1iwUtpGtRJ++sZT91D3eFjwy88c1663Wk7qR1U+v8qE2mS1c/B/4w/Bvx78DvG9z4F8f6Wbe9iBe3uIwTb3sQyBJC2BuXg8YyuORjBPFupT72Ox4Oetfuf8cvgN4B/aA8FS+D/G9iAY902n6hAgFzpsw6SRN1xn7yHhhwcYr8fvj9+z/wDED9nnxlL4S8a2Jlgl3yaZqsEZ+z6lCOd6ccMP4kxkdsjmtUyGeXkZpCCKEOccg55BBBH5inFTigAyMU0HkmkpTjtTsK4E0daSnAY5NIYgOK2vAg/4rvw1/wBhmx/9HpWKa3vAAU+O/Dee2sWX/o9KcthLc/fzHX6/0pp60ucFh75/SkNZM2QlSW5/fR/9dEH60wY71JAMzRY/56p/OhEyP5/PGbB/GfiPH/QYvf8A0c1Y56Vq+Lz/AMVj4jbt/bN7/wCj3rKJBFaIgbSmkpSc0EtCU4OEBPfI68g85xj6Z702myLlC3ZQSfYYpvVDW5+t2hfsIfsy/ET4b+E9X1HwFJpmo3+gafPcXelXzwu0rW6MzYIIJJNefeK/+CTnhSXfN4A+KupWUjcrFq1osyD23Kc/pX2J8HkK/CrwQeo/4RvTMY5z/osdddNI/GTwO3ao5rF2TPyl8W/8Exf2itGDtoOpeFPEMQJCpDfNbu3/AAGSNR+RrxTxf+y3+0N4D3t4k+EHiJIozgzWtqbmL6gx54r9wVVWYtjr6gHH5g08M0Q+VyP5f/r/ABx7UcwrI/npvEl024az1GCW0nU4MVxG0Tj6hgDUZGRuDLjpnIr99PE3w98CeNIWtfF3gvQ9ZibqL+wjnyP+BDivF/F//BPv9lvxeHlXwHLoVw//AC20a+ltyvuEJZO/TFPmFY/HVARkEc+nf8utKUIJ747iv0R8Y/8ABJ/Tyzz/AA8+MF1b5JK2+tacJU9syREH8dteHeNv+CdX7TvhJJJdO8M6Z4pgiHEmkaivmEe0UpV/yzTvcD5b8zBxXtH7HkPmftQ/DMjH/IcU/gIZa8y8ZfDr4i+A7prbxt4C8RaFIp5+36dLEOp5DEYI4PIOK9J/YuuRL+1J8M1Rg4GuAZXn/lhL6c0mCWp+2aoRke5pxOKfIeScEexHNMPrWZqhDzzTgMCm54xS7hQAtHfFIDmlxzn2oAKO+KBRjvQAE4GPxpAO9IxyfoKcOBigBD83TtxSbTThRQAHgZo74pSMjAoAOc0AIOTiigDByaB1xQAUdsUUUAAo75oooAU+tJS9vxpM5/CgBV++n1P8q/n88YDHjDxB/wBhi/8A/SmSv6A0++n1x+dfz/8AjJSPGPiAemsX/wD6UyVpT6mczGooopkoQjNAGKWigYhGTUbH5gFyWJAx7np/X6d8VLXtv7GvwM8NftA/GmHwd4wu7qLR7Gyk1O7htzh7pYyMQ7/+WYJPJGSRxQBa/Zg/ZO8fftKawr6WjaT4Us5V+36/NCWjU5/1cC/8tpTyAPujqTX60/CX4LeAvgd4Pg8FfD3R0sbOJg807Hfc3cw+9NO/VpMjvkDGAO56fw54c0Pwfoln4b8M6TbaZpenwiG1tLWMRxxpjBwB34+91PXvWmTkDpxxwMCs5PsUk7kADAkHby24jGR19+/fPPJPFeW/tAfs2fDj9orwz/ZXi+z+y6pZoy6ZrVsg+02DN15PMkRP3o2JBySCucV6sBk5pTx06Hg/571MWxySZ+HHx5/Zx+JX7PHif+wvHGl7rG4dhpusW6n7JfIvTYxA2tgfcPI7Z6nzFhtABOAeh7V+/HjXwP4S+IXhi98I+NtAtNX0i/QiW0mT5Q3Z1PJRx1DLgg+tflv+1V+wZ4v+Cv2zxt8PBeeI/BCuXmxHuvdOQ8/vVH+sUf8APRe33gvU63RNmfJu08Z4pQMU0su3cGBAXczdgv8AePoOn9M0oOCVPUf16VRD3AKQaXINDfL1pFGeaQrDhkfNUbMdx5xngnAJ/Xt6jv6ipDwMVGcdTQUdV8Lfiz8Qfgx4ug8Y/DrxDNpd+nyyouWhu4h/yynQnEkZ54PzLnhq/W79lT9sPwL+0Zpkej3ccWgeNbeJTcaRJOCtzxzJascF16/KQGXHQjBP40og3hiOMVo6bqV7pF1b6jpt9PZ3lo6ywXFvKUkiYHO5WHKkcdOvQ0WuVc/oIlCqx+dcAkH5gP50zPtXwB+y/wD8FJLXVprD4e/tBXKWl0FEFr4p3ARTtwFF2gHB/wBtcjkbsdT9+WTRXMEc9tLHNDMqyRyRsGR1b7rKwJBU9cjis2tS0yTnvSEZp7gqxUjBHBB4/TtTaQzwH9utv+MVPHYx/wAsLb/0etfjRNxIwIOc1+yf7ebmH9lHx23rDbD/AMjpX42kiZyRjP1rSJm9yMHjn1pp61K0bDqCPwqJuOuR+BqmIVelLnjGDQqkjODj1AyP0pA6Z2nrSARhuRwR1x/MV+/vglSvgzQAf+gVZ/8AohK/ApISyM23gAH9RX79+EEx4N0AYwf7Ks+D/wBcEqJDRrEZ5pApJxSpnHNLkA81JoA4BH1r88/+CtAaOw+GX/X5f9P9yOv0Kyc57Gvz/wD+CtKxnS/hoWdFP2y/UFmA58tKpMmTPzo2nANAzSR3NsY1BuI846FuaDLBnieP/vqrMmh3PegcHNIs1v0+0R/99UPNAOkq0BYa3J4r7C/4JcKD+0TqY7/8Ixd/+jI6+PopInc/PkewJ/pX2F/wS4dP+GjdTIYEf8IzdAdgTvQ4yfoaTGtz9V16fl/KlJwKc4AOB24NMPIrM2QhoBxRjNBGKAAnNAGaSnL0oAVflIPGQcjj/PFcN8Z/g34G+OngK78A+PdPM1nPmW2ng+W4sZ16Twt/CwzyM4YDFdwTikJPbp1I9f8A61F2S1c/D39oH9m3x/8As6eNX8N+Krf7Xp127PpWswRFba/iHRhgYRgBgp2x3BBPlrhl6g/Sv3n+Jvwt8FfF3wZf+BPHmjQ6jpV5G7gbNstvKB8s0TDlJBxgjjjkGvyG/ae/Za8afs1+LlstXkOp+G9Tc/2RraxbI5+MiKTskoHUE/N1HJIGiehLR4aaTvinEbmIXkjt0NMOA2CVB92Aq0yGhaUt7UbWA3YOPXHFC7T/ABD86TGNLY6g1veAif8AhOfDbdv7Ysf/AEelYhXPY1ueAmX/AITnw2g6nWbEf+R0oewLc/ftQWJoPFL9xiDSHk1kzZCU+Enz4QP+eqfzplS2wzcRH/poh/WhEvRM/n78ZLjxb4hP/UYvf/R71jA5ra8bMo8X+IF5/wCQxe/+j3rFHFaJGa2FIxSUp60lAXCpI0z1z1Bz/n2JpmCadkgdfwoC594/C/8A4Kjz+E/Dui+FPGvwiW8ttHsbfT0u9H1FRK6RRqis0cqqN2FHRvSvfvCn/BSn9mLxKqJrepa94alPBGpacxjB/wCukWV//VX5FE7nwR/hU0UzrwHcehD/AOINFrhzH7teDfjx8FPHe3/hD/it4Y1JnGREmpRLIPYoxBH5V3PmCdRJA6yoRkNGwcEfUcV/Pa6xFg5jBfHJ7/nXX+FPi78VvBTK/hP4k+JdJCH5UttTl2D/AIA5Zf0qHDUpVLdD951X5RuBBPQEYJ/DrTQw5JyMHGccZ9M+tfkL4T/4KI/tP+FwkV34t07xBbpx5Wq6dG5b3LptOfwr2Pwr/wAFXPEMTInjD4N6fe44aXTdUMDfgjRkfrS5Wg5kz9G2BCliMZH90gn8fT8KRZecgbRnIAbg/XFfJ3hH/gpp+zrroWLxLaeIvDMrffea0FxEp/3oiT/46K9e8K/tK/APxzIq+F/i74Znd/uxT3i2sp/4BLtNGo9D0y8toL2B7a7RbiF/vRzqsqP9UcEV5/H+zx8EV8X6d4/t/hd4ds/EGk3H2m01GytBbSxSbWBbEZCsTu7ivQLFxexrPaulxE43LJC4dSPUEHmrjwlY9wU/iMfqeKV2BExyvp7DtSZyMVGG+bZg5PbFSD72ACPqKL3LQbTnFJg0/oaSgBAMU4+tJSgZFADcilByKRlI5pQMCgBMUAEdaXviigAooooAcvSgnFIp7UZycCgAJzSDg5pQM0hGKACiiigAoPAzSggDnNDYPSgA7U0d6dgmgjFAXFT76D/bFfgD4zQjxj4hPH/IZv8A/wBKZK/f6P8A1if761+AnjQZ8YeITnrrF/8A+lMlaU+pnM58nBxSjnkUjDmlQ44NVYlCkYpO2aceRUZyOBSC5IBX2D/wS7sDL8ftcvAcC38Nyg/8CkAFfHqnAye1fcP/AASptBL8UvG1yQN0egQqD9Z+aTKjufptkNgjOMDr9KO2KRRhB+P8zQTjtWZoKKDyMUA5pCcUEtASOh9Kjbo4ZVYMNuCoIIPVSDxgjj+hp5OaTgigo+Df2sP+CeFt4hlvfiT+z9p8VnqhY3N74aDhILp+TutGPEMv+w3yuemDwPzm1DStS0jUrjSdVsLmyvrSVobi2uYmjmjlB5R0PIbOePx6EE/0HKF+6QTkEHBA49OQc5/p3r5//al/Y28A/tG2EutQtFoPjaGIRwa3FDlbkYIWK7QcvGem/O5fphRalZEOOp+NMvp60qjGASPzr3yL9g79q2fWbrSYfhTdP9lmaH7UJ4ltpdvAZHZsFSMEf45r0LQ/+CY/7RuprH/bF54V0NW++J9RMzJ9ViBGfbNPmQuVnyGykcnge/8Ah1qF8jAIxnpu+XP54r9BtB/4JQXoIPir42WqKfvJpukyMfwaVwP0r0fwz/wS0+BOnyCTXfGPjDVsdUSSCzUn6qrH9aLoLM/LuOPao3bRk9dwqveyLHwzqMDruFfs7oP7Bf7Knhxdw+GR1J8ff1HU7icn6jcFP5V2Olfs9fAnw7IG0L4N+DbWRekh0mKU/wDj4Jz+NHMFmfhbY2lxfzLDa281yzcLHGhfdnvtAOfb+tfbX7If7Qn7RHwa+y+E774Z+NPGfgtzhLCLSrl7myHG5rSTbwMEExE4POMZr9MtG0TSNKCppmkadZKnQW1lFEB9Aq8fnW1JISP9bIcnJy5IOPYnke1TcqzM3TNSg1nTLXVbe2u7aO7hWZIbu2a3niDDO2SN/mRh0Ibn8MVODgHNOeQsfmJJ9SSc/wCfamZ68VLKR5L+1X8NfEvxi+BXib4c+Dnsl1fVo4RB9sn8mIbZAx3Ng44B7GvgzRf+CXP7Qc+F1PxR4I09c/N/xMJ5yOB2SPH61+poDN8vb0JOPy6U5yCeRk984/wqlKxLVz81LX/gk/8AECSTOpfGHw1CP+mOl3Dn/wAeK1vWX/BJeE7Tq3xzlP8Ae+yaGo/LfLX6F5I6fpx/jRnI560cwcp8KWX/AASd+H8eWvvjH4puBjpFp1rH+p3VsWn/AASw+BULoNQ8aeN7vHUG5t4s/wDfMdfanUcUhQHtzRzBynyvZ/8ABMv9mOCHbNb+Krrp/rdZx/6DGPbivqOwsrbTbG302zVlt7SJLeJWOSERQqgnucAc1OrEcUYx+NS9QsJkCjG48UHrQp2nmgoQqdtY3iDwZ4P8aJDb+LvCuj60lsWaAajZR3HksRyU3DgnFbWCRkdKToeKCWrnFL8GfhHE+Yvhb4SQDjjR4P8A4mrKfCf4XKOPht4V/DRrcf8AsldXSgcZouw5TmY/hr8OY/8AVfD/AMMp9NHtx/JanXwH4IXgeDNAA9tLt/8A4it1fpTgCaOZhymH/wAIV4LTKr4N0HawwQdLt8f+gVd0zw14a0WQ3Gj+HNKsJWXy2ktLGKFmQ9QSq57Cr5QkZpQcDBo5mHKKD8uMdKQ8cUm7HagnNBQq+lDdaQHBpWGaAG0oOKNpo2mgAJzQBmjaaUDFAAowwJJ654OCP8fpXP8AxD+H3g/4peDdR8C+NtEg1HSdTiMcsTrgqx6SIedkinlWHIroaOc0XZLR8Saj/wAEp/gxOxOl/EPxtYjPyq0kNwFHYfMoJrm9Q/4JMaF8x0j436qgY5xdaNGR+OyQV9/kZ6HFG5+zHH1qlIOU/NXUP+CTfjUFxpfxr0CXH3BcaRPGce5VmrmL/wD4JZfH60f/AIlvjHwTfjt5l1PDn2+aI/zr9UTyMHcPo3FKDxg9B0HP+NHMHKfkXqP/AATb/ao08MIPD3hy/wAdrTXYiSfYPtNc74b/AGKv2ptC8e+HptU+DmrRWsGsWjy3Mc0E0SIsoZmJRycAKe2elfsowyP/AKw/wqJ4kz0XcwwTjsevUmm5aBykrZZicMP95SP50hGKI1CrtVQqjgAdAKUjNQUNqSFgssZ/6aL/ADpm00jBgAVIDBgwPpj6YPP1oRMlc/n78XlpfGfiHbyF1i9z7fv3qg0RVc4PIzkggfmeK/YPxB/wTw/Zc8T3NzqLeE9Z0y6u5pJ5pbDWpVJd2LMcSBx1J4xivL/Ef/BKb4UX5c+GPih4p0ts5UXdpb3Sr7ZGwmtOYmzPzHXJBPXHpzQMntX3dr//AASh8fW4Z/C3xc8N6gy8ql9aS2rMPTPzAV5j4j/4Jx/tT6MGksPC2l60o5/4l2qwuxHsrFTRzIlpnzCAR1oOa9N8R/s1ftAeEd3/AAkPwe8V24T7zrpzyJj1yoIxXn19pmo6dK0Wo6ZeWjqcMLi3ePH/AH0BTFYoMADnB6U1M5qQtEx4dT+NLs2jceB6ngfmapMLBnjNKG9KaxXjDLjH94UvQZwcUmFhSxFORsjJGf5/nUZ57GgZHaiwiczSf3z6ck/0IqtKis25QQR37/n/AJ+tSA8c0Ac0irnVeDPiZ8R/A863PhHx5r+jOpyPsWoyxDP0Bwe3avffCn/BRj9qDwsscN54q03xHBGNvlaxpsTlh6GSII/4ljXy4rbelMMrZ5+tFguz9CPB/wDwVfgDrb/Ef4OlV6PcaDqGT9fJmGf/AB+vtb4KfF/wl8c/AFp8RfBUd/HplzNLbeVfQrFNHJG2GDBSQexyCev4V+DkkYlYZAxz257d6/Xr/gmmAn7KWmK3X+29QHGf76+pqXFLVFJs+oyO9JS5yKQVBohQM0hBHpRz2o570AHJGKO1FHbFACZ56Uuc0DA60HHagAooooABwc0Dg5oooAUHFBOaTHGaAc0AFFFFABRRRQAYJ6YowR1pQcUE5oJaEBwyn/aFfgB4xmB8X+IRzkazf/8ApTJX9AUShpEUkZLDAr+fnxojR+NfEeRkDWb/AKc5/wBJkrSnpciRlqMjJo25bj0qaJUYYDAnr7/l1rS0rwv4k8RzfZPDfh7VNWnJwI7GyluGz6YRTVpoRjM2OOePahRzyQe/BzXunhD9hz9qTxkI5bb4U6hpdvIAyT6xPHYR/U+Y2/8A8dr3Pwn/AMEpviPexxy+N/in4d0YOMvDp9pJfSKPQFvLT8ealtBytnwwSD8oxk47ivvb/gk9as3jn4gXTDCjRrSP5uDlrjjjrjjr0/WvWfBn/BLz4CaMYn8Va94r8SSRnLq92lnC/TjZEu7HX+LvX0n8Mfgh8JPgvHdRfDDwLp2gfbo1S7ktwzS3AXld7sSW5FS2iopnbscE5Ujvg9Rnn+tN4NOOW/ICmj0qDQXGKQjNLRRsAgHHNJt9KdR1oAVabIdwAIB69e2e49/rxTs7RzTOp4ovYBMLxld20YGcbR9Bjj8DTsB/vgN9QKQjFKDgUABG4YJP4nNKi4PGPwGKM0o45pXQDHc00KDyaVhmnqvrTAFwvSgue9KaYetAATmlABpNppenBoAAQrZpGOTmgnNHvQAlKBmjBpenBpX6AAGKWk3CjcKLgB4OaXOcUnUcUZxxT21AcMd6a2M8UvvSEZoAAQBikPWgjFL15FACAEjNHtS5wMGkxk0AKAKOBShSBzSHntTatuA4cimMMGnKwHGDQ4yc+1IBox3oxk8UBSTilAwaADbxQAR1pTRRYAHJxRQODminZgFFFHvSAKKKKACijPtRRa4BQeKKQntQFw3CjGTmkAzTqAAkCgHNNbrSr0oAWkIzxSnigDPIoWoCMcDC8UiKBz3zSv1H0pQMCnYVxxdiuN749CxxUZwRtIH49PyGKduGMU3GeaVhbirJIi7YnZB6K2M/oay9Z8L+GPEcRh8ReGdH1WNhhlvLCKbI+rKT+taZGKSndhynj3iH9jz9mPxW7Nq3wb0JSf4rTzbZv/ITqO/oTXnPiT/gmf8AszawjHR7bxJ4flbobPVXlCn6S549q+qkIApS2eKq7DlPzv8AFH/BJ6RvMk8F/GYhgSUi1XTsgj0LI364ryTxV/wTO/aY0FWm0SHw54hQdBaaiYXb/gEwUfk3ev1qxgc8g9j0pAqZB2gEHqAM/qDS5g5T8MfFn7NX7QPgVXk8U/BzxTbRIcNNDZNcx/XdFu4rzq4ie0ma2u4ngmU4aOVSjg+hDYINf0J52k4zz7nP5/5Fc94l+Hvw/wDGUTQeLfA2ga1GwwRf6bDNkf8AAlz3qlIXKfgUQQNwBwOp9KFBOCMHIyBnkj6V+xXi7/gn7+yz4sLTJ8PG0KdzkzaLfS2pH0TLJ+G2vEPGX/BKPQZhJN8P/i/e2ZZsx2+s2CzIPYyRFW9Odpo5kLlPzmIIGcZFRkE+1fVHjX/gm/8AtOeGTI+k6JoviqBBlTpOogSsOeRFPsb8s14D4u+FfxM+H07Q+OfAPiDQypxuvtOljT8HK7T0PINF0KxzUCjfhu+f6V+uX/BN4EfstaYARj+29R/9DWvySwse1iRzwPf8elfrb/wTbYN+yzpxBzjXNRz/AN9rSbQ1oz6hHSl96T7vFG4YxUGgtHfFIOmfejPOfwoAWilPb6UlABRRRQAUUe9JkUALRRRQAc5oOO1FFABRRRQAUUUUAFFFFAD4mVWGQOoP5Hg/hzXxxpP/AATC+Dn9u33iLx34u8Q+Ipb28uLz7JD5djCDLIz7WZQzNjceeK+xMDOaXI70XZLVzybwb+yl+zb4ISP+wvgx4bMkXCy3sBvJM+paYsM/gK9SsLHT9IgFpo2nWunW4HEVnCkC/lGq1Nx2FFHMw5RuAG3dD1yCQfzzmlL7gc9/bNBGaQjFBQiBVOcU/rTKeeBmgBQcU0DnNLRQAGj6BifQKTRVLW75tL0W/wBVWMSGys7i5CEkBmRNwBx9DSc1BNvoBdJA5yPbtmnqMrnI/OvkWP8AbZ8RXBDp4E0pd4BIFxLjp7VdT9tPxKFI/wCEE0o+/wBpl/xrxXxBgIu0pu/oVyS7H1SzZz3I96AuOcgjsfWvDvgn+0Lqvxc8U6joGoeG7PTUsbIXiS28rOzHftIO7tyP1r3BcjivSwuLp4yHPT1XcTTW4p+bpRg4xTjSV0iAYx70DO08E454UmkJxWH468SS+EPBmteKoLdLiTSbKS7SFyQrsuMA4+tROapRc30A2S43Y9eh9amUE8j+dfJEP7aniJjuXwDpKg8kfaZeuOenvmpn/bd8QQ8N4B0o8f8APzL/AI1464gwPWbv6Fckux9XswX73HU/Smn+deV/An41X3xij1iW+0G001tJeAKIJGffvz13V6oBxx6nk9TzXq4evTxNNVKbumS1bcXcKOvIpCMUA4rawBtNB4GKdx3OKTcoPIPPAGOSfajpcAz0FDAY3blx9a8y8dftCfDHwBO9nqOuNqV+hwbHTQJHU/7T5Cjp0yTXiXi79tfxNI7ReE/CdjYoOFlvXaeTvzt4UfTB+teZiM2wuGbU5JvsUot6n1yOTgZJ69DRtP4+h4J/Ovg9/wBqv413jHZ4jtrYMc4hsYh/7LSv+1F8bbdAR4wEg9HtIiP/AEH+tee+J8JF2tIfs2z7wHA5OPrxSZ3HC8mviXRv2zfiZYSqNa07SNWiB5DW/kuf+BL/AIV7R4H/AGuvhx4hZLfxLa3nh2duskh8+3z6lxyo9iuPfmuvDZ7gsS7Xs/MTg0e6ZG2gVRsdY03WbOLU9J1C2vLOUArPbyrJGfxB/TrV45XhgQR2PX/61eupKSuncnYQjJpQCBSdeadnPFMBpGadGATtLKD7kUg7/WuR+Lfj66+GPgC/8YWmnxX01rLDGkEzssZMjbcnBzUVZ06MHUn0A7CQheox6g8U2Mq5wMEnnrXyTJ+2z4leQqvgTSCDg8XEw7fU04ftreJIhubwHpRAIyPtM3A745+leR/rBgb2c39xXK0fWbEAgjkHjilNcZ8H/iDd/E/wBZeMr/ToLKe5mniaGF2ZF8ttvBbmuzxgke9etSqRrQVSGzJAcHNFFA5OK0ARiFUseg/+t/jTipUkHAIJHWgcg44IGc+pxxXz38YP2otZ+GHj+98F2XhSwvobWGCUTTTSKzeZGGOQvHeufF4ulg4c9fYaTex9BBgTgfzFKeMe/TBr5Mk/bY8QqN3/AAgOlH/t5l/xrovhd+1jq3xB8e6R4OuvBlhZpqkrxG4juHZ0wueA349686GeYStJQgPlaPpEDIyOlHbFNWTcgIyPTNKvPFezp0JFFFGR+XX/AD/k1T1XWNH0LT5dW1zUYLCzhGZJ53CoPof4j7DJpNqO4LXYuqN3QZP1pD1wAeOvHSvnvxj+2P4R0mZ7Pwbos+uFelzOxhtmP+yPvMOnOB+leU69+178W7ty+nnSdNTOQsForkD03NmvHrZ/gqLspN+hXJLsfbR27dwdSPY0xmFfBP8Aw1X8bpiT/wAJhjngfZIcD/x2rll+1T8a4nBfxFbXAByRNZRHPtwtc/8ArLhVvzD5D7sUE87WA9SpA/M8U9uB0r5F0L9tHxPZMp8SeDdKvYh997Rmgkx69CP0r1bwX+1R8K/G1ylhJqMuh3smAkWokLG59BICR+eK7sNnOFxL5VL0uJxaPYD9c04DApItssSTxlXR1DK6Hcrj1DDg/hSlgVBAOD0969KOquSIen6D3owVyDj86WMBnAyRk4P0r5x8f/tYa34K8Zaz4VtvBunXMOlXT2ySvPIGfb3IGB1zXPi8bRwkFKtsxpN7H0Yee4/OnZGOo/OvkhP23PETEj/hAtK697mX/Gkf9uHxEny/8IHpX/gTL/jXmrP8B/M18h+zbPrY9eo/OlUduPzr5G/4bg8SZB/4QPSv/AmX/Gnr+294l6/8IHpP/gTN/jR/rBgP539wckj62P1H500kDqR+dfJR/be8SZ/5EPSv/AmX/Gm/8NueI24PgTSs/wDXzN/jR/b+A/nf3ByS7H1yhyDjt70EgNjPtXyT/wANv+I4hk+BNJ6cf6TL1/P2r274FfFK/wDi94VufEuoaTbae8N69n5UEjOp2qp3ZbnOSfwArpwua4XFz9nR3E4tbnpR6U3OM0AgKBSHrXpPzEBOaACRmkpwIAxQAAcEUmMHJJ6du9KCKQnNADSiEBdi7QcgY4/L1980+SOK6ha3u44riBuDFMm9D/wE5FIBml2+tBLR5J8Qv2Tf2dPiTHJ/wkXwn0WK6k63ulx/YLjPJzvh25OcfeDD2ro/g18H/CPwM8ER/D/wO1+dIiu5ryMXswlkVpW3MNwUAjPtXccCjIFAcoFeeKTBpc8Zo346UFADgYNJ14pTluaAMUAO6kD2pKXPOaSgAooooAO2KQg0tFACgZo2mk57UoOBzQAhGKBycUpOaQcHNABRRSgZoASil2mjaaAEooIxRQAe9FGe1GMfjQAUUUUAITik6nilIzQODQAbTS9eKM54oHXNACEjpSg5pCCTSqpxQAVkeMm2+Dtd4/5hd5/6IatcjFY/jL/kUNe/7BV5/wCiXrKv8EvT9BL4j8zrMGKJD7D+VWGuWzgEgVCWCQp/uL/Kq4kLPX5M48zZ2H0T+xvH/wAXD1tv72if+1lr7FX19q+PP2NSG+IOsgdtEz/5GFfYa9BX6Bw6n9Rj6swqNCmiiiveM0IRk1w3xrJPwm8Xr/1B5/6V3XTmuI+MybvhP4w6f8gec/yrmxmtCfp+gl8R+eozCMelVbhmk5GM8irNx14qqM9/U/yNfk6Vmdh9Q/sQTlj4wQ54ayP55r6pCn2r5V/YkXZJ4wOOCLL9Aa+qwa/Sci/3KJzVNxvIODSkY/GnEZ7iqWp6tp2h6beaxq98lpZWULXFxcP0jjXlj/IevpXrzkqcXOT2IjqiDxN4m0Lwfot1r/iPUI7Oxs0LzO55OP4V/vMewGTXxZ8Zf2mPFvjqWfSfDcs+g6E52+XA+2e5TsZWGcAgj5VIx3POBz3x0+MGsfFPxKZt8ltoVjIRp1iG+WP/AKaMBwXPrztwMZzXnEjeaNzDrzjOa+FzfO6uJl7Kk7RXY3hT6sfAc5kIyW5PXr6k9SfeoroFhnC/gMVLbYOckADua77wd8CfiV8RoluNB8PmOxcf8fd84hgx6gty3XtXgQp1MTNRp3bNG0jz21fPygH8eP50t1IAmC2P519Q+F/2IJPKWTxF8QI4mIzssbTeAfq5Gav6j+xJocsbC1+IuoCbHBks0Kn6gNXqrIsbu4i549z5KgQu33T68iru7y1A7d/8/wD669r179kD4l+HY5Lvw/8AYvEMCDc4tW8qYD/cfAY/7pJ56V47rGn3ml3cthfWcttcW7bJIZV2ujejA9M+/FedicLXoP8AfRaHeL6mz8PviX41+Gmpf2n4U1uWBDzNbSfNbzj+66dDn1GCK+0Pg38evC/xbsxaW5Sw1+CLfc6aW6gdXiJPzJ9eRg8YwT8DE4Q4Iz2/rU+gahqmha5a65ot/JZ31nJ50E8ZwY3HT6g9CvRhwcYrsy3N62BqJJ+51uRKFz9RwPlyCCKUDnNee/BX4u2Hxa8JpenZDrNiFi1O1XgI+M+YoPRG5x6HI9M+g7gP8/jX6JQxFPE0lWpfCzB+67MRgRXkP7V8234I6uuf+Xuy/wDRh/wr15uRmvG/2scH4Lauv/TzZn/yIR/WufM9MLV9BL4j4ciGxySc81JOTKvGMnj/AD+dNkQqTj1P86jSUKwDZ/yR/hX5a9X8zqkfcv7J0hPwR0kc83d8f/Igr2Un5icdSa8d/ZSj/wCLJ6MV6far7/0YK9j4yc+p/nX6nlv+6U/Q53uJQODmg47UV2iAEKGJ9M/5/Ovgz9rJSfjprDDtaWQ/8grX3hKSEZv9k/0r4V/aoKv8a9az1+zWf/ola+d4nf8Asa9TSnueRySsV2DHSu//AGbUb/hefhIjp9ql/wDRZrzskCUjnFenfs4hB8b/AAiQP+XqX/0Wa+NwOmIj6mstmffif6tP90VIgOeATniolYBEH+yKcG4IUckED/e7f1r9USvocqOb+IvxA0P4a+FLvxPrb5SNljt4VID3E5+5GnoSQeewBr4J+IPxQ8W/EvXJNW8TXu6LcTbWMZKwW4ycBVzj6nHJya9C/a/8bXGufEpPCltcH7B4ciMKqvIFxIMyPjucFQCenNeHPnqOvA/TFfBZ7mUsRWdCL9xdt7m8Y2Vx8+VzJnpyTUXmtMSnB/Grmn2F9rV1Bpel2sl1eXL+XDDGMs7noAO/+c19EeA/2MdQuYY7z4heJ202RwGNlZoJJEJAOGc4APYgZ6da8rBYCvjP4K26l8yW58vyN5TlQRweeRxWnZkMh45x7V9pR/sbfCUqvnXmvTyYwXa7C5/ALUF7+xj8PZEP9k+J9csHxxvKTLn8cV6U+Hca43smyfao+NLlmWPAIGRz61TtIg0/QMM/xDjGcZx+Ir6C8c/sd/ELTkaXwpqWna/GOfK3C3mI/wCB4Un/AIFXkH/CD+LdJ1638M6voF5ZahdzCCCG4iK72JwAG6MOpyCelebUwGKw7UKsWm30ByTR9afseWnib/hENT1XVNWvZNIluVg062mcsqGP/WOuemSwUAcfIa98c84Oc4GcnvWR4M8M23gnwnpHhOzXEWm2scTD1kKgux9yxatUg9ScnvX6Pl1F4fDxg3eyMXuOjYK4z9a/Pb47SY+L/i4D/oJzfzr9BxyQB9P5V+d/x0cn4xeLhnpqko/WvE4n1oU/Uul1OD3gMarybic4P5VM6Nngiur+GXw9PxO8Z2HgyLUEsHv1f/SGjL7Qgz0r4qlB1JqEdW2bX0OTgUyqGUEg9COae4ZONrf98mvp+3/YgvYly3xDsxnoBp5/xp0n7D924z/wsWz/APBe3+Nen/Y2O6QYuePc+XFDN/CfyNOCHP3WyPY19PR/sP3e7P8AwsWz/wDBe3+NSS/sQXYT5fiLZ/8Agvb/ABo/sXHv7Ic8e58qXJeQ7VDZ6dD6Gvtv9iqMx/Cq/DqQf7ZmPI/2Urh7b9hu6eXP/CxbPOe+nt/jXu/wc+F0vwj8KzeGZNai1Npr2S8M0cJiADYG3B/3evvXr5JlmJwuKVSrFpWZnOSex3Wc8/hSk5oNJX2JkFFFFACgZo2mgHFOBzQAnTg0bhSN1oAzQAHnmjaaXHGKWgBMcYpNpp1FACAYpaKKACiijqcUAFHfFFHfNABRQaKACiiigAPAzRQeRijoKAClBxSUd8UAO3CjcKaeBmigBSc0h4GaDwM0EfLQAY5zS9TikzmgcHNABRSdO1LQAUox3pPeigAyN1GMUAZNBOaAFAzR04NAIA5oIzyKAAnNY/jLA8Ha9/2C7z/0S9bBGKxfGZH/AAh2ve2l3n/ol6yr/BL0/QS+I/MwHeiY6BAP0qF8q3HpUsX+qQ/7I/lUbqScivye9mzsPor9iV/N+IWt5B/5AhH/AJFWvscjaORXw5+yR4v8N+C/HWrX3inW7XS7WbSvISW4bCs5kzjjJ6Cvqmf47fCDbn/hY2hrkZ+afH8xX3mRYmjTwcYzkk7vqc1VNvQ7nPtSk461wMfx0+EWP+SkaEf+3n/61Sn45/B/blviPoefa4z/AEr2PreH/nX3omx3B5HFcP8AG1/K+EfjBj/0B5/6U2P45fCBmwPiNov/AH//APrVxvxo+MHwv1j4ZeJtH0nx5pFxeXmmTRQQxyks7nGAOKxxOKoOjNKa+/yBRd7nxL5nmDOaaoywx/ng1BA2UGO+D19QD/WrEY5z6f4GvzCSaZ1n1J+xWoH/AAlx9rP+Rr6h54PtXzB+xVz/AMJce2LIfoa+nx0zX6NkX+5ROapuOA3dT0/x/wA/lXy1+2Z8SJbH+zvhlplwYvP2X+qlTzs58qNh6ZG4jv8ALX1LFgzopPBOT7Y7/Tk1+c3xi8QP4x+I/iPxHJMXW5v5Fjz08qM+Wg/Jc/UmsOI8Y8Ph+SG7ClG5xbkPEvy7Rjhc5xz/AJP40kEbswXH3iFX3J7VErYOCe/Ndx8KPBTePvHej+FBuEN/Ni5K9RbqN0n0yABn3r4OnTc6ipR1cmbyfKj139mD9nu18SpD8RfHNs0mmFi+l2LgqLnaf9a//TMnoO+DxX15LDEoWKGONIYgFjRECrGB2UYwKbb2dpp0EVhZQrDb2qLDFGgwqIowFA7AAY/DNSscjoBX6dl+Bhl9JQpJX6s5+Zt6jVyvfPuRyfrSFA3P9KUjFKvSuxJLRCHQ4jPXBP8AEvDD8f8A9Vea/HL4KeHvi5pDTBIrHxDboVs79EA3k/8ALKUD7yH3yQTxXpBOKjkBdSG6EEEevp+VZYmgsTTdOok0C01Py51bStU0HWrzQtZtGtb+xmMFxC4wUYcfljBHsRSxYQB2Gc/w9P1r6d/bF+G8Ed1pXxKsoQJLljp9+VH3iASjn1JzjPsK+YZsxnbnIGBn14r8zzPC/VK7opafodMHdHpHwL8fS/D34jadrU07DTbsix1NWbhoHYAMfdG2uP8Adx3NfoHK4ZiVYMuSV29ME54r8uUkVYjuAYHHynoeDX6B/AbxW/jL4UeHNWnn824jtzZTuepeFimT7lVU/jX0nC+LkubDT1XQyqpN3PQc5GK8f/asQt8GNWx/z8Wg/wDIor1/cPQ15P8AtSKP+FLauxHS4tP/AEYT/SvfzJ3wdT0ITXMj4ZuF75HrWfMSCCKu3TkOwz0wP0qukfmuBjv/AJ/nX5gtPvOiR94fsnL/AMWO0Yn/AJ+r7/0YK9cPU/U/zryT9lMbfgjoo9bm+P8A5EFeuN1OPU/zr9Qy3/dKfoczeolFFFdwDZAWVh/sn+lfBf7VjNH8ctaU9Ps1n/6JWvvbjnPof6V8G/taxEfHLWXHQ2tn/wCiVr5vif8A3P5mlPc8jbG7Nelfs55X42eEnPQXUn/os15uF3GvSv2d+fjX4TQdftMp/KM18dg/94h6mstmffUQLInsoqxbAeenGcMG/IioIAfLU+w/lUoLRkSL1DA/TAJr9Wtdr5HJbU/OX4uTyXXxK8UT3Lbpf7WuVLeoWQqP0ArjZGG04r0f9ovw5ceGfjFr9oY2WC+nF/bMejRzDdn/AL6Dg/Q15lIxIHuP07fpg/jX5VjKcqWInCW92dkdj2z9jyCwufi3NJeBDcWulTyWe7qJSVGV9GAr7gWNc4VQMlug4HPr068/XNfmH4b17W/Ces2viPw/qD2WoWT74ZlG7GfvKV6MDgDFfWPw8/bL8M6pBHb/ABC0afSLteHu7KNp7Zm7sV6rk5J4Ir6PIs0w9Gk6VTR9zKabPpSMZUNuyKR2YHAJxiub0P4pfDrxTEsmgeNdIuy/SMXKxv8ATa+CPpW4bgFQ4OVP8WPl/wC+un619ZCvSqfBJMytYRk8xst+HTj35BqSbTNMvzby6jYW91LaSCW3kniEjROO6k/dP0ohO8buo7Hsfx6VOT8vH41pyqXxK5NxHIBJ55JJJOSSTnmmk8UhPFJnNMoVRllPoc/yr86/jqdvxl8Xj/qKTH9a/RZRgj8v5V+dnx1XPxk8XN/1FJf5181xN/Ah6mlLqcKDkHNewfsqEf8AC7NAxjhLk9P9gf41485AGPevUf2XtTs7D416HPfXkNtCsVzukmkVFHyDqWIFfH5d7uMpt7cyNHsffkyMDj0A700ZA5/nVO48VeFWUlPEukH3+3Q//FVS/wCEr8NZ/wCRk0n/AMD4f/iq/UPb0l9pfec9rG0rLjgH86UkMMc/nWN/wlfhf/oZdJH/AG/w/wDxVOj8VeGWcBfEmlH6XsR/9mo9vSf2l94Gsq+Ud39acx381R/tzRbqWOC01mwmkk4RI7qNmY+wBzVyPO0E9+auE4zTcXdIANJSt1pKoBfeijtig0AJTl6U2lBxQApGTQBjj8aByc0p659qACig0UAFFHvSZFAC0UA5ooAPegdc0dsUCgANHvRR2xQAUUAd/ekyKAFooIxRQAUH7tFB5GKAD0o75ooJxQANyMUUUZ5xQAHkYpc8YpCMUUAAHf3oo7YpB1xQA4Y70Yz0pKOe1ACngYpBRz3oPAzQADg5ooooADyMUoIApKKAFJzWJ4148G6+T/0Crz/0S1bXvWL42OfBmvj10q8H/kFqyr/w5en6CXxH5lQHdHGB/cX+VSlcnFNtUIjjz/cX+VPlIHI7V+SvdnYMyqcsgYA55wRn8qjDrIcAKCeuAKuWem6hrAaHS9PuruRAGZbeBpGUHuQoPHFWbfwZ4sQ5PhXWuv8A0Dpj/wCy1UaXNHmUfwZLSM/AUZKigsrcBB+IrZbwj4skGF8K60f+4dP/APE01fBni4dfCmtf+C6f/wCJpLDz/l/BheJnwBFGdi/98/8A16rXcazsGCLlDkHA4P61vHwj4tUY/wCEV1rJ/wCodP8A/E0+Twl4ktraS6u/DerRRRKXd5LCZVVQOSSVwKJUa0NeXT5jvE52KMoqpknHc9TUmdp/z6GlkASVlyDgkcfWkYFhx6/0NJNWuhn1L+xMdw8XD3sv5GvqIdBXy1+xATjxhns1l/I19S+1fo+Ra4KJzT+JlHXblrLR9QvUJDQWVxIv1EZP9K/MiS5NyPMPV/mP1PJ/Umv031+2e80PUrNB889jcRJ/vNGwFfl7ErxN5TAqU+Ug9iOCK8jiuDcoPyNKOjYkq7Tmvof9iq1S7+Imr6k4BOn6VtQ9182QKSPwWvn1gr/Ia+g/2K7qKy+IOt6a7gfbdKVl9/Llyf5j868HKGvrlNy6Mqpoj7Jzkn2J/Xn+tO6jijYw5YYY8t9aBX6a1Y59wIzQBilpCcUADDvTad1HFMYEEUAec/tLafHffBHxAxALWgiukJ7Mjj/61fAV0qrIwHQE4r76/aT1OKx+CniGN3Ae7SK2Re7MzjAH5V8BXjAOxU5XJAPrz1r4PiZJ4tKO7ibU9FqVZWbYwBwcHbj1r7Y/YumlufhNdxyNlbfWbhU9gyo39TXxNhsEgZJ/xFfbn7F1tJB8JLqd1wl1rEzp7gIgP6gj8KOHNMWrdmTU2Pd8Z/mK8n/ap4+CWsn/AKeLT9ZMf1r1pUPsMACvIv2s22fA3WTnH+lWX/o0V9dmS/2Sol2MY7o+ELhy8jEdCTUtm3zgAdCP5iqse6Qk+5/manicxNnoMZ/Ig1+Xb2SOuSufeX7LII+Ceik9ri9/9GCvWSc5Puf515F+ynJ5vwQ0k5HyXl4h9jvFetg8n6k/rX6jlrX1Wn6HLJO4oOaKU0gGa7hiNwD7g/0r4X/avCv8atZ45+y2f/ola+52I2n2DH+VfDH7VYx8a9Z/69LP/wBErXznE6/2O/maU9zx8EK1ei/s6tn45eEwP+fiYf8AkM15vIQD9K9D/ZqYH46+Eyx4+0Tf+ij/AIV8bgl/tEH5mstmfoPAAIkBH8I/lTmIwAPXJ9/T+tGNqj2GPy4/pTSa/VmcqPJfj78EH+LGgQXmhmJPEmjqxti7bVu4TyYGOD35Hv6Zr4P1zT9Q0TWJ9F1bT7myvbZikttNHtkQg8kj0J5yOOcZ4r9TU4wcA45ANcJ8SfhF4E+KEWzxZoyy3Kf6m+hby7iP/gQ6/Q5r57Nckhi5e2paS6lxm1ofnUYXaIFRkHoRyKdAPIO7C5785z7HBr6T8WfsZeKbCSSfwLrttq8OMrb3p8m4A9NwBU/pXjfi/wCFfxH8JIx13wTq1tGnHmrD5yY9d0ef15r46vluLoP3ov1N1KL6nIXUkbrlVAbqMAAj6EYNavhv4l/ETwlMJfDvjPVrXHARpzIn/fLZGK5pJWaVo2JDA4KkEMPw6/pWhHanG4ocdenP5dawVaphpaSaY9Ox9FeBP2xfG2mFI/GOhWGsxKMNNbj7PPj68qT19Ote++BP2gvh18S5Bp2k6lLZaoRkWV+Akj+yEEq35ivz+VlUdj6A9vw7GoLi7uIpYriGeVJYjujlR8OjDoVI6V6uFz7GUZqNR3iRKCeqP1HRs8NkYODkdD6VLtIHIwe47ivnn9ln483PjqMeB/Glyh1uziDWl4TtN5CPvq/q4GTn0r6JkAXjnGTj6Z4/SvusJioYukqsNvyMWnHcaD7H/Jr87/jt8vxi8Xg9tUm/nX6Ipgj8cfqK/O34+8fGXxeB/wBBSWvE4m/gQ9S6XU4F/m6UkUe0l35HYE8D14oT73NXbXTb/V5ksNKsbi8uZM7IYIy7tj0Uc18IuifXsbaJakAnjdtgjBHTr0p7WseMiIfhWnbfDX4iFww8B+IyCe2mTH/2WtmL4b/EJwAPAXiT8dMm/wDia1+r1ltFv7xc0Tj1gUHmOnP5MQz5Yz68/wCNdZP8MviIBlfAXiM/9wyb/wCJrOl+GnxJc4HgPxGOf+gZL/8AE01Qrr7D/EOaJ037OM3nfHLwopXj7RLnk8jyZOMZ9cV+hC8IDz+Jr4b/AGffh1420b4weGdU1bwhrVnaQTSGW4uLGREjBiYDJI9a+4w+5AfUZ/PmvuOHVUjhpRqaGE9XoDdaSlJzSV9C3chbBRSgEjNJQMKKKKACnL0ptOXpQAE4paQqTzQDmgBSQBimmlKnrSY5xQAA4pwOaZTl6UALRRRQAUUe9FABntSbCeeKXvmlyKAAnNJRRQAe9FHbFAoAUDNIynFHPajPGCKADOfwo4xSCloABnvRQeBmigAox3oo7YoAM5/CigUUAFB5GKO+KKAA+tKe1IeRiigAooooAXt+NYfjPH/CIa8P+oXef+iXrbJwKx/GS/8AFH683ppd5/6Jesq/8OXoJfEfmpEoWBDj+AfyqtOeSOmRVhpNsKAdkX+VQbfMbJHQV+TPSTOw9/8A2IJH/wCFia8qNjdoh56EESgAg/ia+05pXOW3sc+p5r4w/Ysi+z/ELW/fRD/6OWvscMWUA1+g8PpTwMW+76HNUvfccsj/AN9vzNOMrno7fmaZjGKK9zli9f0M7MRnkJGXb/vo1y/xfuGHwo8XYc8aNcYOTkZXnHNdQw4964r4xuf+FV+LQD10e4/lXPikoUZ+nbyKUndI/OkszYZiTwOT1NTRLu/X+RoMYWJQeuB/Kkgb5gPc/wAjX5TJuXW51H1D+xUhQ+MAO5sf619RDOM+pr5i/YwGG8Xf9uP8jX06hyAK/Rsh/wBxic892SLtLDdjaeue3+cmvzZ+MHhpvBXxJ8R+H2QottqMrQqRyYpG8xD+Tiv0mX0Pr/Qj+tfLH7aPw5ku/wCz/inp0TEwhNO1YgdEPywyH6khSe3FY8R4SVfDe0hq0Om9T5VQkjPeus+E/jsfD74k6D4omcra29yIbz3gkBV+PYZb6oK5cRbEG4YOMEHrkcf0qCaLJ3hsHGOmf0+tfBUZ+zqKpF7M2mrqx+qUFxDdwRXFvIskcyCVHU5DqwyCD34IpegzXyX+zP8AtG2+iWtt4B8fXRjsYh5emag5LfZ89IXPXYOQGwffFfWEtxGyRzLIrRSgFJFcMjg9ww45r9NwGOhj4KaevY53G2hNjjNM+90pVbH3uPrx+vSmF1ydpDf7pDfyrvESKpqOchFLMcAAkn0AqS3O9guDk9B1P5V5d8dPjpoPwr0ySzsJ4L/xJIALezU7hCxyBJL6Y5IHXPUAYNY4jEU8LSc5sUdzx39sP4hxXGoaX8OLK4BNk/2++CnJWQgiNTj0GWI9198fM10d53AAA8jHT8KNT1TU9a1a81rVrp5r2+laaeVjkuxPP0HTiiPEpCDr1x6KOp+gr80x+JeLruu2dKTsFvEXUjH3fmP0HJ/UCv0O+B/hWbwV8KvDmhXEXlzm1F3OvcSTEuQff5hXx78Avh2/xD+I+n6ZcROdLsGF/qLYO0RJyqH/AHyAAPQH8f0AcJnIXbwBgdgAAP0Ar6LhjCNKWIfyM6nYCx6mvK/2nrB9U+CPiaFFLNBHDcgegSQEn8q9TJBFZPibQ4fE2haj4euVzDqVpLauew3qVH6mvp8ZB1KUorexjFWaPzHtDmIMe460XR/dcA8Vo3+jXOgX11ot5GUnsJpbZ0PXfGxBFUZsBTjnNflTjyza7HbvqfY/7F+vLf8Awwv9DWTMunaw+Vz0WYApj/vlh9RX0GjB1Vx0Kjj0r8+/2cPirb/C/wAcPHrUjLoWuRizvmxnyWzlJQPUH9Ca/Qa0e3ubSO6tp4pYJlEkckTBkdSAcqR1FfomS4qNbCKC+KOhzzTvcXGaUDFC8kgD/P8ASmu2CFw3udpwPqe1e1a5BBMSQQvU/KPqSAB+JIr4H/aD1u3174w+Kry3mEsUV4bRGHT90Ap/UEV9c/HP4p2Hwo8Hzap5kT6zdxtFptoxyzyY5kIH8K9c88ivz7N3PdF7i4maSWV2d2bqSTnJ9z1/GvjeJ8XGpFYeD9TWmnuMk+bca9T/AGU9Na++OGhy7crZw3d0x9AIiM/ma8wjXzHVT0JA/Pp/Kvpz9i3weDqHiDxzNHhYkj0q3YjglyGkx9AADXh5RSdXGU4dE7lz0Wp9WsGxz1puCacX3fM3VvmI9M0wnB+pr9NOZEi/yHPsPWoxtZq4T4r/ABe0D4TaVYajrFtLeSajdeRBbREB/LUZlk6jgAr+Jrf8DeOfCXxB01dU8Ja5DfxkbmjziaMejp16Ec9PesPrNHn9nzLm7Dsb+7A2np78io5ZpXUxh2CkfdzkH8DxSTyKGxn2Hv8ASkiwzYJXPpuGa1lG+klca01OU174Z/D7xWDH4j8E6PfZ6ubYI5P+8mDXmXjH9jjwTqNq1x4G1i60O6J4guD59sWPRf7yA9M8173JFgZA/pTUuNoZQytxg45/P2rlr5dh8VDlnEfOz80PH3g3xJ8PfE1x4Z8T2LWt3Cfl53JKnPzo3deOvWsBSJMZ5Br6e/biGlyzeEUAA1KOO5aQLgutscBQfbfuI/Gvl+I4bB7Ht0J7/rmvzzMcNDB15UqeyZvF3VzofA3iKfwf4s0jxFaSiOawvI5h7pnDr9GBxX6ZefHcxpLEcq6K4PsVBH86/LQQSXLxRRKWZ5UQADkksAP8+1fqDpkL29jBbSfehiSI/VVCn9Qa+i4YnJqUG9DKsWd20j6g/ka/O/47sJPjJ4vwD/yE5T+tfobISOnYH+lfnj8bv+SyeLwc/wDITlro4md6EL9wonCMMcivUf2XZGb44aAqEg+VdHgkZ+QY5FeYS47V6r+ynD/xfHQmYZxFcg+2UGK+Ty1r61BI0nsfeyqwUHzH5Gep/qTSrNIvO9z/AMCoL/wkEEcdKYORgA9fSv1Fqztb7jl16CySysPvn881FCHZ8lzipCCSBtNOVdnJH6ipv6hdlhpG2bN7EdxuIB/Wqwz3JP1/SnI+9sAH8qV0KfMwKgkDJB6mqUUlzJbjGUUoBx6HuPSgjFJaIYq/dx70EGhelLTATaetAUmlJAGKQZ7UABUigDFGcdaUcjNABzmg9ciiigBSeKaBg5pevFFACEGgDFLRQAe9FKOeKaO9AC9sUmcUE4pCc0AOopNwpaACiiigAooooAKUY70lHvQAHHaiiigAPIxRRRQAoGaQjFKDig8nigBKKKBycUAHfNBoooAKKAM0UAFKBmgDNHTg0AIwOKyvGXHgrxAf+oVeH/yA5/pWsTmsfxpIF8Ga+p6NpV4Px8hx/Wsq/wDDl6foCV5H5lOxKIR/dA/SpIWxxinwwM8aMEbG0dVNMlBgyxBH4GvySUlJ2R1s+hP2Ot3/AAsHWiOD/Yn/ALWWvsGPoM+lfGv7Ft0J/iLrqsTldE9Ov75a+zVQgDp0r9C4b0wCv0bOWpq9BT2+lIOTilNIDhq94QhPFcV8ZFC/CrxaxHTR7n/0Gu2OAOa4/wCMahvhR4vA/wCgNcf+g1hi1fDz9H+QkvePzoDmRVI/ugfpTWIjG/njP8v/AK9Msg7KBgkHkfKadeApGeCOD2Nfkr0dkdjPqH9iWYzHxef7rWQ/nX1Oq88dq+UP2GtzHxkMZzJZ+3r619ZdDn8CPQ1+k5FpgonNU1Yxiegqrqui6Z4h0y60bWLKO6sbyF4biGQcSIwwR+uc9utW+OSaXp+Rx7E969eUVUvGWzJi+U/O741fCbWvhL4sbS7lJJ9Iu2LaZfkfLPHz8rHoHGOncYxmuDmAVdp7iv008W+EfDnjXRLnw/4m0uK8sbpcNG3BRsDDof4GHYiviv40fs3eLfh5NLq+gxT63oBOVnhTdNbr6SoOmBj5hnP6V8Fm2S1cNL2tHWJrCV9zyWykMQA5/D3ruvBnxy+JPw4UQeG/EEr2K/8ALjeDzrcjuAp5X8DXA2jq8eQwJz69KJB5oZQensa8CnXnQq81NtPr2NGkfS2h/tu3SIE174eW8jgcyWN6yDP+6wxWnfftuWb2/wDxL/h1ctKvANxqICf+OjNfJqQhXwQfxFWVhAH3T6+leus7xy0UkHs0z2DxN+1p8UfE4ksNPmsvD9pJlXTT0Ikcf7Uh5/LFeW3l9PdyNPczyTSvlnkdyzOx7knmsaT91JkL/n69KuwuJkwGHA5PYfWvPxWLrYiV6rvcElErvgthRz2//XWj4X0TV/Eeu2uhaHYyXt9dyCOGFB99vUnso6k9K2/h78MPGPxO1Yaf4U0iS6UECSdwRbxDuXbvjrgZr7e+EvwQ8M/CKxJtALzW50C3epSICxyBlIx/Cg9B1yelehluUzxk1KStEUppbFz4OfCqx+E3hNdKQpcateMtxqd53mlA4Qf7C8j8Old1xjaMnHc0qkbAAMY/z/n8qB0r7/D0YYaCpwWxzt31GkbetKAMj1P+R+R5o2knFKOQB3rdOzu0B8i/tc/C19E8Qj4j6bCRpmtskV4qjiK8C4DHHTfgc+ua+aZmPIJ9iPQ9x+ea/UTxFoejeJ9BvfD/AIgsEu7C9iMM0TcZB7g9iOoNfA/xp+Avij4V6o97CJtT8NzSFba+SMkxDtHMAOCBj5uQQRznIHw2e5U8PUdeirp6msJdDzG3iXzNzA98EHpXq3w3/aA+InwytV03R7+G+0tDkaffpviTpnYeqdBwMj8683jhHlCRNrAjOVYH+VRoSWIKtt7HacGvnqdepRlz0JWZq0paH0/Y/txrEgXUfhvul/ia31EhSfoQKyvEv7aXii8i2+GPB2m6bIRxcXUrXMkZ9VHCj8c181XWN+QB+Wamt/3gCgZPoBXpTzjHyhaUtBezRu+KvFOu+M9Qk1zxNqdxqN7MTvklfovdVA4VfYVzYJVsZz3Jxjjtn+X4VpRwucrjpyc8YH44z+FVRpmoalqEWmabZTXlzcMFjt4ULvIT0wo56968uLnXnZu7Ktyov6Pp95q15a6dplu015eTJBbxpyXlY4RfzBr9FPhf4Eh+G/gTS/CabWmt0Mt2w/iuH5kOe+CSPwryr9nD9no+AFi8ZeNYo5vEEif6NanG2xUgZJ/6aH9MDmvoBicckn0z1r7fIMreEi8RVXvPZHPVk5aIiJ/w/Dt+lORGkO1R1GAe3/1qTjGKg1XTn1bRNR0mLUZbB7y2e3W6iGXgLjbvA74yTj2FfSSuk7dvxMranwZ+0b8RB4/+Jt3PZT79L0kmwstrcMiklmGMj5n4z6AfSuE03XNU0O6j1PRdRurC7j+ZZreUowP4dvY5rsviz8B/H3w0v2nvdPbUNJLYj1G0QvHtycFwBlMjk5GMnrXnkpX7NuV1I6ZByPzr8wzCdeGIc6l4yudas0rI9m8K/tjfEnRmS28T6fpviSJRt3yqYJwP99cg/XA616zon7aXgeVEXWvCmvWBP3jCyTKPocg18bww7/m2ZOfQipJ2GAAgBHsCf1FdFHO8bQslK6D2a6n3HJ+198IDCZIl1+UjnYLAKx/4EXrzjxl+23aqj2/gvwPM1weFm1aYlFz/ABeWvXHBGTXzTHKTHhuv4f4VnXKKJPlXr6D/AArWef42umpOyFyI6fxL4u8QeOtYn8ReKNTe+vrg/PIw2qqjoqIOEUenPf1rmn+WTaCO59vXGfqTVmxXf8q5Y+gBOPrjoK2/B/w78U/EXxDF4e8KWBuZWbdLL/ywhX+9I3QAckDr7V5UHPEVXHdsr4Udv+zr4Bk8ffErS42t2k0/RnGo37AfKoUgxoT0JZlwB7N+P3sAc5DZyBk+pxXF/CD4X6J8J/CkWhaa/wBqupSJb68bg3E2ME47KvYevPeu2HTk5I4z6jt+mK/QcmwH9nYf3viZzTk2wVCxIOOn9RX56/HqPyvi/wCLzjn+1Jf6V+h0IG/kjGP8K/Pr9oBR/wALb8XOOQdTlxjn0rg4naVGmvMqjpoeZhsnBrsvhl46b4beLrHximmLfmxWUCBn2Biygcn8K5CBCSSVOPoaSWUjKbGP4GviYuVOopx3Ru1fRn09F+2/Iz4X4axgf9hJv/ianb9taTG4/DSFj76k3+FfLUMBc7tmPwNTmJx/CBn1GK9X+28Z0m0TyI+nI/22bsn5fhrbqP8AsJSD+Qp8v7bl4if8k3gP/cTkr5fYeWMnaKqSXK5wWXFH9t4/pUf3B7NH1BH+3HdLJz8M7Yn31Jz/ADFex/Az43y/GUax5vhiLSW0oRECO5aQSbieuRx0Nfn4sKSLvTBPFfV/7DrAN4vRioOLX+bV6OUZpisRjFRqSumZzgon1IVCDC9B0/nSEZ5pz91xg03OOK+21e5mHTg0E4pCc0vXkUAIeeaUHFGDjFBBoAOvIpRwMUgGKWgAFFFFAAODmikJxSg5oAM+1FKMd6Q47UAA4OaMd6KCQBigBCM0m00ooJxQAhBFLuFBIIptAD6KKKACiiigAo7Yoo74oABRRRQAoGaQjFKDignNACUDg5oooC4UDg5oooAKKKKAFBxSGlAzSEYoAUHFHXkUlKDigAwc4rK8S2EmraFqOkwzLE99Zz2qu43KpeNlBI+prVLAHODTdu7r0qZ+8mn10BO2p8o2f7E/icQIv/Cf6P8AdAOLJ+DgVU1L9iTxIw2/8LA0kHp/x5PX2DEQi8kAA+lU7t1kfIY14v8AYGBTu1qP2j2Z4T8A/wBnXVvg/wCJtR1688U2more2H2MRQQGMht4bJJ9hXvoGO2PrUESAnI/M1ZIIGSc16eGw0MLD2VP4RNjG60nfNKeaSukLikbhxWF468PzeKvCGseGbe4SCXU7GW1SSQErGzDAYgda3hwKa7qpAIyamUITvGWzBO2p8lW37D/AIkgUk+PtJz1z9ifmql1+xR4nmYr/wAJ/pHQj/jyevsCWX93gcH6VUXLSD5q8X/V/A3vbUftGzyr9nr4E6j8Gk10anr1pqY1d4GXyICmwR5znPfmvYjnAycmnAYUdelMJBr1MPh4Yal7OnsK9xvUEe9LQB70uPcV0sLhgFTmokj5dcjDDByM5Hp/+vNSHjjNC43VNr6EuVtjzXx7+z78KvHJkub7w6unX8py15pmIJSfU44P5CvFNY/Yn1xJnl8KeNLS5TOUhvoCj49Cy5B+vFfWku0A7qSzcbzxmvMxWU4XF6TWvkUqjsfDWs/skfGWxffBpOk3Wehh1BF/Q0ll+yp8arjCy+HbCHPG59SjwPyzX3TcsT3xg9v/AK2KkhmK85P4Ma4f9WcEtmylVZ8TWf7FXxEvZxJrXiDQ9Li6Epm4fHtgYr1nwF+yH8NfDEqXfiGW78SXAA+S5Oy3/wC/Y6/ia96m2l92AD64zSKgJBB/M100MlwtCScVt3B1G0Jpum6Zo9gmnaNp1tY2sYASC3iESD8BU0uG7fh2FOBAXBNRs6scA168YwgrRRF7jV9KWkUgHOadjJ4podxBwc0Dg5pcHOBzSMNvWmFwc7gAfug5NV2s4bpXt7qGKaGZdkscqB0kX0ZTwRUxIJ4NSJtHcUmuZWkroL22PJPGn7K3wz8WiS40qCXw5ePzusMeST/1zPA/A14f4n/Yu+IGmzbtA8R6HqMZ5UTkwSfTHT8a+zTKqj71RTSGVf8AWNgdge9eTXyTA4huTjZscajPgK8/ZS+OPmsqeHbCQA/eXUo8Vq6B+yN8aLl9t1Z6RZp383UA4HvhQTX3LGuOrHJ9zShNpDADrzx/iK5o8N4Nb3L9oz5p8K/sUkSJL4z8bKYv4rfTbfYx9t7/AMwK9y8J/CnwH8PrdR4V8O29tOBhrxxvun46+aeV/AV1QIzTmIK7SSa9DC5ZhMJ/Djr3M5SkypHHtOVPfPTFTkkgZppwDxSlhXoLzEhVTPNPBKfN6dAOMGkTgc0kjAHBoHciMaTM8ckcbxyDDq6Aq31Xoa808ffs7/CnxoZJ7jw8ul3cvLXWmHyWz7r93+VenRlScCo5sMcE9KxrUaWIjy1kpIFJrVM+WNW/Ykv490nhXx3C6dVTUbfDfQsM1w93+x/8YYZnaFdEu0B48u+C5/AivuWNsR8AH6ijcU+bPX2/wxXkS4ewU/stejH7WR8Fv+yj8blkAXQtMjU8bv7STH5V0GnfsU/E6/Cvqus6Hp8TdXEplI/75XFfZ/Jbduz7HNWYyrjlVHvtzUw4dwcXrcPaM+cvBP7GfgbQpo7nxhrN54gZDn7Oi/Z7cn3wct+OK950nw7oHh7ThpfhzR7PTLYgAxW8IVT/AL3dug6mr0oAOaEYHjNeph8Dh8Kv3cUJycuo3ZtGAAPb0o2mnsRke9ICDXXr1FsCggggZI6c49O9fNXxL/ZU13xr421rxRb+MtNtotUu3uEhltWZkB7EivpZScEj9aqSAM2cnOfSuPG4SljqfJWWw07anyeP2JvEiR5/4T3SBn0snqr/AMMReJppcnx9pH/gG9fX3zFAAP0p0K4bJ/lXAshwTekX94/aM+TY/wBiLxJCuR480c/9ub09P2KvFRHHj3Rx/wBukg/ka+tHfjGf0pqsV7/pTfD+BfRh7RnyRdfsUeKmXb/wn2j9P+fWX/Gss/sQeLc5HxA0fGf+fWX/ABr7KPzckj8qjKDP/wBaj+wMF2f3lqbPky0/Yi8WqmB8QtH5/wCnSX/GvYPgV8DtV+Dja22peIrPU11YQhVghZAuwnOd3PevWYWOcBv0p02Wwd3St8PlGEws1WpL3kRKd9GNGW6k575pp55pwPc0h4FemhCAZpQMUoHGaKAD3ozzijI6fjSDqaAFo74oNHfNABRQaKAEPWgdKcMd6Q47UAFHfFFHfNABSEZpx9aSgBBxQRmnDHekOO1ADdpo2mne9JkUALRRRQAe9FHbFJ0GaAFo75pcE0h4OKAA0UUd8UAFFBOKAc0AHfFLg0gGTShh0oJaAjFJSk0gHOKCgooooAUEDig0nfNLjNACUUEYpQM0AGMiq+parpmhafcavrF7FaWVnH5s88rYWNPU98VY6cGs/wAQaLpviXR7vw/rEAmsb+B7e4i3Mu5Gx3B4+6P1qZuSi/Z7hc5W4+P3wbEOV8f6aM89W/wqmnx6+Dkp/wCShabx7t/hWbcfsz/BdIgn/CKTYHY3clFp+y98FHVi3hadfpevz+teY3mLe0RpI3F+PfwZjTLfELTh/wB9f4VFL+0P8FNpA+IWnk/8C/wrPl/ZY+CqRkL4ZusjHBvn/wAay0/Zi+CjOVHhm4PP8N+/60nLMrbRHZG/F+0H8GWOP+Fg2H/j3+FSTftB/BmNf+R/sfyb/Cs6D9lv4Jrhj4YuOOpN7JUtz+y98FfL58MTjnH/AB/SUKWZdoi0J4v2ifguQd3xAsfyb/Cmj9oX4MuxH/Cf2XX0b/Csc/sw/BhGw3hi4XnBzfuMev8AT86vwfsu/BQD/kV7gsegF+5zRz5l2iHuli5/aG+DCr/yP1mfojn+lNtf2gvgy7A/8J/Zfirj+lU7z9lz4LFwp8LT5Ocf6dIc4+hqe0/Za+Csce9vC1wuOub2Qc+mKE8yvtEPdNOX9ob4MInHxAsPyb/Cqg/aG+DTkn/hYVh/49/hVC8/Zj+Cm4ofC1xn3vpKpL+y/wDBQP8AN4WnHt9uk5puWZJ7RHZHQx/H74Nv/wA1C0/8d3+FI/7Qfwai4/4WFpp/76/wrPh/Zb+CQj3yeFrhfreyVBc/ssfBbJ2+FpeDg51B+D6daTlmVtoisjaj/aC+DLruPxB0/wDDd/hTl/aE+Cwzn4gWP/j3+FYlr+zH8EVO1vC8vXr9vfH59quH9l74JbCR4VmBBwc3z8VUXmNtoiaRPP8AtB/BhjgfEPT8f8C/wp1r+0F8F1bJ+IWn/wDj3+FZA/Zf+CzyH/il5sA4/wCP6Q/yqw/7L/wUij3r4VmP/b85qb5jfaI1yl64/aJ+CpfaPiBZH6K5/pUy/tA/BhYt58f2QI/2H/wrCb9mn4K7st4SYAAnJvZPy61d/wCGZfgo0Zj/AOEVcnH/AD+yegPr70c2Y32iHuk8f7RHwalbafH9l1/uP/hVz/hfvwXjjz/wsCxz/uP/AIVip+y98FUkAfwo49T9tkwPxzVqf9l/4KCHjwrJ/wCBsh/rRfMe0Q91Fj/hoj4M5OfiDYf98sP6VGv7Q3wYL/8AJQrDH0b/AArG/wCGY/gzu2J4UmJPQC8kpsX7MHwYaT/kWLgD/r9lFJTzHoojsjoD+0B8Giw2/EGwwfZv8KtL8f8A4MKmW+IFh+Tf4VkL+yz8FdgY+GZx7m/f+tNvP2YPgwkXy+GbngZyL98f/Xp82ZdohZGk37QfwY5I8f2B/Bv8KhP7Q3wZc4/4WFp4H0b/AArLi/Zh+Cssef8AhGrrBGcm+kH86rr+y58FPM58M3gH/X9JxRz5l2iFkdD/AML9+DO3cvxC0/gf7X+FNj/aE+DGSD8QdP8A/Hv8KqD9lj4IiEs3hqfGOrX7/wCNV1/ZX+CcYYnwrPgHBP26TA/GjmzLtEXulyf9on4Lhsf8LB08fg3+FTWn7QXwXcZb4haf19G/wrn5P2WfgoZSr+F7heegv5Ofp61p2n7LXwTjQH/hF7gjsTeyUk8xvtEPdNGf9oH4MDlfiDYfk3+FSR/tA/Bcpk/EGw/8e/wqiP2X/gpIcDwrMcdf9OfimT/sxfBSOIgeGJM9gNQb/GtL5j2iF1sWG/aJ+DCvtHxBsPyb/Cnv+0R8GQmf+Fhaf/49/hWCf2X/AILSSEHwvP8Aheyc1JP+y18EwgH/AAi9ySfS/cVHPmPaI7Lc1ov2hPg1Jx/wsLT8/Rv8KV/2hPgzGefiFYD/AL6/wrLsf2Wfgkw3L4auccnIv5CPx9KW/wD2WfgsU/5Fi5z73slHNmXaIvdNuD9of4LyjB+IenZ/3WP9Khvf2hPguvA+INhn2DD+lZNp+y18FI13HwzcgAZz9ukx/n261HL+zF8F2cZ8MTDv8+oOD+po58y7RD3Tdtf2hPgts3N8QbDP0b/Cqkv7RfwV80gfECzP0Rz/AEqE/svfBZINx8KzgYz/AMf0g49arWn7LvwTeQu3hOfaOSzX0nT86L5j2iHumof2jPgqm0f8J9ac/wDTN/8ACnT/ALRXwUCD/iv7Mcd0cf0rNvP2XvgllAnhOU/S/kOP1p6fsufBKSPLeGJ0HvfuB7dT3o5sy2tEPdLUH7Q/wYc8fECx/wC+W/wq6n7Q3wWQc+P7L/vlv8KwF/Zf+C8J3nw3cBOuft79M4qw/wCzB8FSD/xTlwcErn7fJjrx+dHNmXaI7Iu3X7RfwVZ/k+IFkeOyOf6U63/aE+DDKSfH9lkequP6Vgr+zF8FGk/5FeVhnGRfyH+RrSP7LvwVMB2eF7gcdr6T/GjmzLtEVkXD+0F8G3cEfECwIHs3+FNm/aF+DaHj4g2A7/xf4VQtv2Wfgtgv/wAI3cEYJz9uc/r+PTrVSf8AZf8Agt5hUeGrhvmP/L7ITjPXHXH+NHNmXaI7I6KL9oX4LmPJ+INhn6N/hVdfj58G5ZDs+IFhjPfd/hWSv7MXwXRQP+EXuvwvZKtx/sufBPaWPhi4BAyc30me/br2ovmPaIrI0p/j58Go4uPiBpxP1b/Cltvj58HCMnx/p4/76/wrC1D9lv4LA/L4bnxnA/4mD8n86ms/2Xvgv5YB8OXC845vnHP50lLMk9ojsjUuvj/8G0bA+IWnYx/tf4VEP2gvg6SB/wALC07/AMe/wrNf9lj4MsSy+Gbp17EXshz78ds/yqnP+y58GFcqfDFyCDg5vZBTc8y7RFaJ0Ufx9+DrNk/ELTcfVv8ACp5vj18GQmf+Fhadn/gX+FYFv+y58ElTc3hudQOTuv3H9auL+y18E5Ex/wAIvc5976TNUnmPaI7ou2Xx/wDgz5h3fEPTv/Hv8K3/AA38RPBPjie5h8I+JbTVHtFDzrCTmNSeCcjvzXEyfssfBOIFv+EXnBH/AE/v/jW/4C+E/gL4c3V3d+D9He0lvkRJ2eVnLKpJAy3bJNVSeO5/3sY28tyWkzuR/LrQRmg4B7nvSg5r03uAZ4xSDv8AWl75pM4pABBI460oGKQHNLQAUUhOKUHNABRR3xRQAhOKUHNIRmlVTigAooIxRQAdsUCigcnFABQeKQkCgkEUAKDkUhBoXpS0AFFFFABQeRiiigAOe1JznJpaKAA0nelpQMigBGGSPpSAYpSCBzQeBmgAyAeaQcnNBBNA44oAU0Dg5oJxQDmgApCcUtIRmgBQc0oOKaOOKWgBSc0A4pKKAFJzQn3vQDnPt3+v0pKCcKc4IweCKCWfGXx0/wCCiVh8G/ipr/wum+D+oatJoVwkBu4tWjjExeMOCEYEj72MD0rC8L/8FXPAr30UXir4PeJNI0+THm3UV9FO0a928vKlgMHOATXgvx31vw74X/4KFan4o8VuqaNpPivTrm+YxCQCKOKPd8pB3dDxXa/t0ftQfs3/ABa+GNr4X+F+mm+1+LVI72G+TRltfscCht6b1AYl8gYAOcVatYm9j7b+LH7R/hHwD+z/AD/H/wAOWg8WaGYbW4tYrW4EDXKSvtHzHowJ5Bx0NfJsv/BVuyErNB+z/rs53Mu9NVRwxB5GQp9/yqhqvgvxN4K/4JW3mm+Lbee3uLy9g1O2s5BteC1mug0SlTyDjnHvXm37MH7Wg+Avw6uvCMHwNvvGPm6rc3pv4LcOikjaI8mNjngn/PNNJoLn2r8Kv2w7f4kfAbxp8c5fhxqGjReDGnDaZcXKtLdiJEZij4UDO7j6dfTo/wBl39p6x/ac0nXtQs/Bd34dOhXFtblbm+Wcz+crtwQemEPXnOPw5TxB8Sh8Xf2HvGnxFm8GzeF/7Q8NakzaXMqK8Rjyo3AKOuMjvj8q+Jf2Rf2q9Y/Z30zxFp2j/C+98WprtxZzu1tKyi3aOORQDtU4JLHHsD6cxFDPuz9q79rK0/ZX/wCEbluPAdx4jHiAXJBgv0tjCIsHDFs5zu9O1e0+GPEa+IfDeleIY7doP7SsIL0Qu4dohKgcqWHBI3AZr8kP21v2oNS/aLj8Nm++GWoeD20NbrYLxmf7R5gUkDco4AGT9fy/TLQ/GmkfD39nPSfiD4gfGm6B4SttRlBb74S3G1B7uzImP9rrQoaXQXPIPj//AMFDPC3wR+J+qfDCH4a3/iaXR4YvtV3bahDCiTSJvMW1vmLKpXPuSO2T9IfDb4h6R8T/AId6B8RvD8Yt7PXbL7VHCzK5hcfK0bFe6sCD7+tflz+z38A9c/avs/jR8W/EUVxcalHaTzaZJzl9ZmPnjtyEiULjt5vGa94/4JcfFW41vwT4l+EGrSOL7wzOuoWcTn5kt5cpNGB/sSKMjHqaclZXEndnb/tJ/t7ab+z18U2+Gt18LtQ15vsNrereRajHCCJxkJtYEkg+nrj3PCaf/wAFUfDHnwjW/gV4lsrZz+8kTUIJHVR97EbBSSO4BzXh/wDwUL1JNH/bM03WjaNdfYLDQbl4Yx80mxg+xcjGWxjp3rY/ao/a6sPjd8OV8GQ/AW68IyTajBdpqWp2yRvGVJPlxsqA5OTnk8D6ZIq6G3Z2PvfxB+0Z4S0T9ny5/aI8MWk2v6JHYx3sNtHIsEsgdwhjYkDayscEH0PXiuf+GX7WWlfE74A+KvjnB4JvtPg8K/bFk0yW/SWWdreJXysg4UHcwHfgeteK614RsvAn/BMLU9LsvEtnrgvNOTU3vLGXfCZZrhHaNSRk7funIHI/GuO/ZPvBL/wT6+MDhjsEmsscY5zaofTrxTsibs+iP2Vv2rbH9qGz8RahZ+Bbvw2dAltY2jub1bnzhMpJIK/7p681618WPiXD8IvhV4i+Jc+ky6pH4dtBdPZxTrGZlMgTblun3l/WviP/AIJOwBdC+I6qRuM+l4HriOTNfTn7YEy/8Ms/EpG4A0cZ9P8AXxe1TazK3Rxmgft36XrfwA8Q/HWD4Vauseg61baKdJGpI8s5lCEyK44CjzOh54968w1b/gqxpVthL34Ca9C75YNcatFHuX+8Ny8gcDj2ro/+CW0Mc/wL8URywxSJJ4oOVeMMDi1hIODkcEema8u/4KqRW0XxD+HYht4YidMnJ8tAhJ+0pgkrjPA6Y71VgPYvgB+3fH8c/ibpvw5T4Oa54dOowzzLqFzeLLFGYlDYIC4+bOK9w+OPxs0X4AfC7VfibrNibxbDyorawSYRG6mlbasYLfifwNd14cs9Nj0TS5YLG3jYWNud0cEavgxAn5guQP8AGvzl/wCCm/xF1Hxt8TPB/wCzt4Rma6ubWWK+u4EYAS3918lsjf7qZbHbNSo3YH0p+zJ+3Bov7SPi/UvB7eCLrwvqOn2Avrfz9RS5S5UNtkCgDjb1PGea+mZbtFgkkuZljjiUu7yuFCKBliWOBgepr8ofiP4Nn/YV/au8AeINNSX+xJrKykuJQ24TBx5N8nYcOC2D2ANfW/8AwUF8f6j4Y/Zc1Obw1euo8U39lpIurd8H7LPl3IYdnQbeOm6m42YaPc5L4pf8FM/hX4V1mfQfh34O1Dxq0EjRvf8A2hbS0kZSc+TuBkkH+0Fwc+1bnwD/AOChvwq+LviW08G+JdBvPBOtahJ5NmbqZJ7KeXjEayKRtY9AHVc1j/8ABNj4M/D7/hSUfxR1Dw9p2pa9r17dQi4uLdZRaW0LKsccSyZCHnJx13V6l8W/2E/gX8W/E8fjC/sNT8P35XZcnw64tUuXViVlZACFkQg4bj2zScVEV2a37U37Ull+y9pnh7VLzwXd+IG1+5ubZYoL1LYwtFGr7stxg5IxXcaF8T9C1z4UaT8XNXdNB0e+0dNamF3MJFsYWTc25hwxH6k4Ga+J/wDgqpCmi/Dz4WaTDdXFyljfXtusty4eSVUtIlDue7EYJPGT2rlP2wviBrWi/sPfA3wbp1xLDaeItKtpb/aeJYbeAN5bDjKliCRntVJXQK6Z33jP/gqx4K07VptO+GXww1TxPZxk4vry6NolwufvRxgM+30JA7+leifs9f8ABQr4WfGrxFbeDfEOjXngzX76TybQXNwJrS5l7IswPysegVwvb1rpv2OPgH4A+G/wP8L6rp+g6be63r+mw6nqOqz2yTzTSSjcERnB8uMKcBQP518yf8FOfg/4M8B3XhD4o+D9Ls9C1PW72fTtSisofJjkkiQSxXARSAJFOMke1TZNlH2L+1P+01afsxeGdF8R3Xgy68QHWb6SyWGC8W1MJSPczFm4PQjHt6HNbv7Pvx68K/tFfDmLx14Yt5LGXzWtL7TJpFeaxuFOTG+DhsqVZTkA59eK+FP27PHOq+Nv2QvgV411cNJfakGubgnG6RktWUtnvnAJ49ea4P4K+LvF/wCxF8SvCXi3xBPLqHw8+JejWt9dyxKfLmt3GRIAcDz4GYnA6q3XiqcVYht3PtG+/bFsbb9qOP8AZqX4dXbzvqcWnDWRfhY8vEsiuI+uMNg19NQyb0+U5yTnjBJ96/MnVL/TdZ/4Kf6XrWkX1veWd/4h0+e2uIGDxyxtaqVZSOxGPxzX6ZRgQqxYYVQzEZ6454/T86lxUSlqeJftLfta+C/2ZINOtNX0q71zxDraNLZaTayLGyxKwUyySE/KpY7QBkk9Aa4D4af8FA7Dxf8AEbTPhd8UfhL4h+Her6+Y49LkvpPMild+EVwyqyhjwGCkZPJFfOv/AAUz8V+EL342+Fr7wL4ke98b+G7YWupafa2xnWzeCYzwtnBV3DO+9OcAA5rsf2c9b8M/tm/EOH9oX42+PNOg1n4Z2iPb+G7CLyY4o4/3gv5JD80qM+5ii5wSAdtNRuhXsz7/AIUIfBQKAeADkf5zmuC/aH+LkHwL+FGsfE+48Pya1FpJt1ayiuBA0pklCD5z0ALA/nV34UfGz4XfGu11C9+GPieLW4tMeNLtooHjEUkihgvzAevA+leW/wDBQdC37JPjZsbhv08gj2u0z2/CphHoxyb6Fv8AZc/bG8OftI6nruiQ+Ernw1qmjW8d6kFzepcfa4N21yu3spxkdeQe/Hqnxe+J+gfB34b678RvEkTzWmiW5kW2WVUe5mZsRQxkkAMxJxX5DfAbxhr/AMBfH/w/+OEoCeHNR1mbRruRM4eHhLiJxwOFdXHP8Ir6Y/4KE/EbVfij8QPB37Mfw5ke8lZ11i9EbZSWeSNngViM/LHFlzxwSMZrTlSEnofRP7Mn7YWl/tLah4i0zTfAV94e/sC0guQ098l0J/NfYFAU8c85Iqv+0R+2x8Kf2ctQXw3qS3fiDxQyLK2kadIqm2VhlWuJm+VAecDk8dK+U/8AgmJqDaLr3xe1ONAz6X4bjuVA4JMMrMDn6oPzrF/YE8CaL8ev2gvFfxI+JtpDrt1p1q+traXg8xJLuedAjupOHESHAU8VDihnqmmf8FZNMTUo4fGXwR1DT9MmO77RYap58yJ/fEbhBJxz8pP04NfWmo/HHQx8Cr349fDWybxrpcGnvqUEFrOIJZo0OJFO7lXXnKnBGDWV+0F8GPh38VPhL4g8MeJNA0tDa6VcXWn3kVtHDNp9xDCXSVJEVSuDglTwQSOnNfKP/BKTxHfavpvxD+GuqObrRJrS31I27/NGk0paGYgHvIGyfUrTVgPp/wDZs/aj0T9qDQNa1fTfDc+g3Oh3UUMtpNdrcOySRB0l3L/CTvXHqvvVv9pT9prQf2Y/CGleJNU0C41y71q/Nla6fb3i2zugjDyS7m/hQFfxcV8Rfsq6jN+zR+274i+CuuStFpuvyz6JCScKxBMtlIAcdUOPqe9aH7ZF9f8A7R37Znhj4C6FMZ7TQni0WXByizOfOvZcc/dRQpP+wvFJR1uDfQ+jPi/+2/J8Kfgv4C+L2s/CS+abx4ZTDpi6okclrEI96O0h4JZQDgVsfFH9rzTvhn8BPBnxzufAl3qMHjAWoTSUv1R7dZoRISZDwSB3Hc/jXiX/AAVm06y0z4UfDrR9PhWO00/U7i2toxjakaWoVRjHHGK5f9rMkf8ABP8A+B6hSxUaVtXI5Is+nTpVWQrn1p+zR+0lon7THhXU9f0vQJ9Dv9Gvls7zTZ7pZ3jV13RSBl/hbkeuQfWuo+Pfxy0D9n74YXHxE1nT5NUIngtLTT4bhYZLyWQ/dVm7KMsfYGvze/Yj8car8CPjl4Tj8UMYfD3xT0iONJwdqMJpWFtKegLJKpQ4zgMMZrr/APgoP8RNU+L/AMbv+FN+EJt+m/DnS7u9vxnEQvEhLzu2Af8AVxgL06v+NCirhdH2F8C/2t9O+OPwy8c/Em38DXejxeChM8lrcX0cz3YjtzKdrA4XOCo+g9az/wBlv9rKw/ads/FWo23gS78PHwtHbSMtxqCTi6EqyNtUjlf9WK+bf+Cflx5n7Lfx3C52tDeYHAHOnP1461c/4JRLjw98WHJAxb6YOg4/dXHtQ0h3Jbr/AIKrWr3ckMXwD1SdonKMY9XRjwxGSMEgZHevdP2Wv2z/APhonX9c8PH4Vap4Y/sXS/7TE11debHcHcV8sYUAH5c5B7ivgL9lT4/j9n7xl4s1qP4b33i99Xg+zeXakbrbbM53nKkDOcdO1fol+zd+0VJ+0HoXifVLj4X3/gxtGlW1Ed8gBu1aLcxHyrlRx04zmiyA4f4K/wDBQ/wP8YvibafDXV/BN94Uk1OR7axv7rUY5oZrhScRsB9wtjjr1617P+0P8dLb9nH4cJ48vvDV1rQk1ODTPsdvdpbODKSN+5uONtfjt8Mvhb4z+J58YX/ggST6j4Nsn117ePImmhjuNpMJA4ZDhwDjhTz0FfT/AMZf2l7X9oT9iPSodVv4n8X+HvENhBrULbQ1xtXCXSqeSGUqW6YbcMcUWQnKx9JeKv2+NK8NfB/wB8XE+FGqX6eO5LxVsIb6MSWQt+rM/IbcO2cZzXld/wD8FVvD0Nwbf/hQ2vCYsAIv7WhDZPQBSM817n+wbHbTfsm/Dtbq3ilUWc5xJEjlczMDjcCBnNfJfxptLS3/AOCmmmxrBCIl1vRwUEY2HMDZ+X7vX2qbIdz6s/ZY/bBi/aW8Ra54etvhhrHhltDso7wTXl2kqXG99gQAAYIPesb41/8ABRT4W/CvXLvwj4N0S68bapYSGC5ltboQWUcw6xiY8ysDxlFYV6J+1V4uvvhj+zp8QfF3hmKK01GDThaQXFvCkbRSTyCLzMqoI27zjr16V8xf8Ew/hF4K1bwx4h+Luv6XBqesW2rNpGnrdRCYWMSRrJK6I2VMj+ZjOM/Lmha7BsdR4D/4Ki/D3xH4httA+JXgTUfBsVzIsQ1JLwXNtA7cL5y4DqCeN23Hrivs7TJrfULSDUbOeKe3uo1mhnicPHKjAFWVhwQQR0r5K/4KI/CLwJr/AMBNX+ISaDYWviLwxLbyWl9bwpFJLHLMsLxSbFG9SrZGRkHt6bn/AATa8Xav4m/Znt9M1W4luP8AhHNVutJs3c7iLdSrRrnuFDlfwpaPUo+oj2NAOKCc4JGD3/PFJSGO3CkPPNJSgZFAAOKdnNIQaAMUABGaOnBpaa3WgBRyc0ppF54oJAoAWlBA4pAc0Y70AKaAM0mc/hRz2oACMUDg5o570dhQAm0knHakwTThkMT2o47UAIBiloooAKKKBycUAB4GaKDyMUUAFFFFABRz2oo74oAOSMd6DyMUDg5ooAKAMmigcHNACMcmkBxSkEmk2mgBwOaQnBxQBigjNAC980GkAI60tABRRRQAe9MlyY2C9cH29uvTvT+2KAo5J7gjHrmglo/J/wCKWi6J4w/4KL3/AIb8RWyXul6n4vsbS8gOcSQvHGHUkdsEdMfWtP8AbH+CEv7KXxs8OfF74caFbxeGLi9ivNOsmUy29tfQgeZaPvypSRclc9z27fp/HoGh/wBpHVzommNfb1k+1NYwmYsB97ftzngc57Vb1Wy07VbYWupWFteRgqQlzAkqgj+La4Iz6HFVclpnyH+158U/Cfxa/YO1L4k+Er+ObTdaOmzKQfmjlWb95C3oyMCuMdAMcc18y/srftxeFv2dvh1c+ANW+G+qa/cXGrz6iLu3u0iRFZQAvzKST+nNfqKNC0YWT6YNH0/7E7B2thZwiJmBGCU2bO3XFRxeFfC4Zt3hnRTkk5/su3z17/JRzBZny/qf7Rml/tJ/sd/GPxbonhK88Pw6RptzpxiuJRIzkxK+4bRjBD4x6j3rgf8AglFIo8H/ABEkIwy6vYElkzgCCU4GRx1Gcc9K+8V0jRraxn0+00mxitbniWFLSJY5ARg7kC7W49RVGx0nTNK3pp2l2NokjBnS2tkhVyARltgGcA96Sk9RpM/Pr/grXGhHw2wm0bdRyR2ACAZIGenQe9W/27Piunhv9l/4Y/BzT7tkvvE+lWGpakqAg/YII12Kw9HkHI/6Z1+gdzo+kaoqf2rpVlfNGpCNc2scu04Gcb1OAehx6Ul/4e8Pahskv9A0m5eJBHG81hE7IoHABYHAB6KMCqjKyE0z82fh3/wTr+Oc3gbSNZ0/48DwgNatI9Tl0mCG5T7NJKgYB9jAM6jjPPpnivPvAejeJP2Ff2yfD+l+MvEKX9jeGKC+1CJXWO8srwkFyG5yJF57dea/XBlMjDGAuCSuMDPr+PJ9s4rPvdA0PUrhJdU0awvZEUIr3VpFMyr1wC6k9QO/FS5NsdrH5V/8FA9YtND/AGytL1+UG6g0zT9CvnjjOWkjjIk2qTxyF6+9dt+0Z+374O+Onwq1f4baB8IdRsrzWiiQXt9NFO1sQ4bdFEili5xgYPfmv0gu/DPh7Ubj7XqOg6VdTlVQyz6fDI+AMAbmUnAHAHoKdF4e8PWDpLZaDpdvIvR4bCBGHryE9h0xT5rCs2fAuhfDvxt4D/4Jn+PLfxvY3Onz6vONUs7K4H762tXniCgp/CTtPy4/xOd+ylbtB/wT3+Mu1hhpta29s/6JH0HXuK/Rm4itdRtpLXULWG6gm4kgnTzI2A6Ah856A1SOjaPb2MumW2lWMNnPu82CK1jSN9ww25Au0/j7Uc1tSrH5I/sXftdeEv2a9K8U2fiLwjrGuHxC9lJEbCaOPyhEjggiTBzlh0//AF/T3jT9qPwt+0x+yd8ab7w/4Y1XQf8AhH9OgguFvZ0k3GSWMqylO3ykHI4/GvsG28G+EPMJPhLQlz/d0q3/APiK0ovDnh63t57ODQNLjt7nBnhSyhRJSCMblC4b8c0N3sxHyF/wSyVF+Bvichgc+KTkjp/x6Q/4ivGP+Crl6qfEr4cgsQG0uXBweT9pXA+pz+hr9KbHTtN0m2e30rTrSzWVzJILeBIw7diQgAJxxnHYVn6joWjaxOsuqaPp94yLsRri0jlZFznCl1OOQOlJy1HylG21mw8OeDIPEGsXIgsNM0aO7uJT0EccCs2PXgY+tfkt8NfhP8Rf25Pjj458daL4mh0CQXEmvS6lMkjCDfJttoY9pyG2DjHQAV+wsltFNAbeaGKRHQo8bRhkdSMFSpGCD9KNK0fSNFSQaNpVhYmRlLm2tI4d+0ELuCAZwDxThK1wsflZ+0V+wZ8Vvhz8NNS+I/if4uL4zt9DZftFrJFcNNFBI21nRpMkY4Jx+Ve8/B2wh/bM/YWufhTf6uIvFHhzbpkdy2QYruAiSzlIxlUZdqE44AJr7ckt4biN7O6ijngkGx45FDoydwytkHOBTINJ0vTI3GmaZZWfmsGcW1tHDuI6E7AM4HHOeDRzX3DlPy6/Z/8A2mvir+xDJq3wg+KXwvvbrTPtb3aWTSm2kgmYDL28uCksT7VI5AGD3yBtXv7UP7WX7WfxRsdB+AY1TwTo6YSV7Ji0FvHu+e4urh0Ad8FtqjqcY9a/Sa80jStbthY63plnqFshJWG8tkuIxnsFkBAHbp2qOy0zTtIgWx0fTLOwtk+7BbW0cUY/4CigZ9CenYUm7oSVmfn7/wAFUbC50/4ffCnSrvUrnUZrO7vYJLy4H7y4cW0Sl24GCx5wa9G8c/s53n7QX7Cfw1sPDyofEvhvQbPVtHDkBLh1ixJbnP8AfUkDPcV9hXeiaRqkcaarpljfJES0a3VrHMFJx0Dg4Pqe/wClX7WKCziitrWKOGCBQscccaqqgdAFHAH0pqVkNo/MH4Gft3eNf2bfCsPwh+Lfwx1G9HhtWtrDz52sdQtEJJ8mUOMSKMnB9DxnFcf431/44/8ABRb4qaTp2h+FX0nwporNGjB2+x6XBIR5s01wwAeZl4AAz06Dmv1f1rw54b8QKP7f8PaZquw/IL+ziuMfQyKx/PP1plvYWenwrZadaxWtvGP3cVvEkSJ9FVdv5g9B0p3W4WPgD/gp54U0zwb8A/hd4Q0VGTT9CupLG33KRuRLYgE+hJyfxr3Efs9aR+0B+xV4G8A6gEt9WtfDVjd6JfOoza34h+X/AICwyjDpg5r6QudF0fV40i1bSbG9VG3qlzbJMiE8EqHBAOKvwpBbRJBbwpEkS+WixqFCKOBtA4AwBxjmlzEtM/GX9lrQNZ8I/theBPC/ieylsdU0rxIlnc20uSYHj3DbuPVcFSp/ukfSv2ZMirOjMwAV1B+Xdgk8dOvb29aovo+inUzrDaPYtfb1kW5a0iMysvRvM27iff0wO1XAw8wONwxnHPK/j3pSd7DSZ+SOja9rn7G/7XuseMvjP4C1DV7eWbU1SZVV3kS6fK3du7/JI2AykMR95h/CM8J8TNS8JfGT4uan4i/ZX+GHi/SrW9sZptWsbZHkDEkmdwkJKwxFSMoW5JOBxX7Na7ouj6/ZjT9d0my1K17QXlrFcRKfUJIrD/PWjw34d0Lw1bm08P6Lp2lwtwY7CzitVPocRKvT3JHNPmBxuz5Z/wCCbnir4bXHwQn8IeFobi18T6Xdm58SxXTYkmlcnZMhx/qwAFC9QVIrr/8AgoO239kPxrISP+XBumOlyhOPXua98i0zTrKV3sLC2tWcHLQW8URY5zyVUZGSxwe5J71JqFpZ6jZPZX9nb3MDsGaKaFZEbByMhsg847UJja0PzM+FPwhtvjF/wTs8VQQQifU9A8QX2uaZtHzOYUVpYx3+ZBjjuRWv/wAE8/hNqfieTxp+0N4znubmaw0240XSJboneZTbMJZQXAI2oEQfWv0W0jS7DSkNvp1haWsBYv5NvbrDHuPLEqmFOeh45GKtyW1vDam1hhijiKlSkcSojZ6/KBgf1zTcgUT82f8Agk7YwXXjT4lxSw+fbzaNbWs0TAkFWuCrL78ZrkfEHhv4xf8ABPD4+Xvjfw74cOueCNYkktoLh0JtLqxlcyfZ5ZFH7qZG6ZzwVr9SdJ0jR9HLtpmkWFmZcCQ2tpHCW5zklACccYz71JNaw3O6K4iikR12srxqyOvoykYYY7HPJNK4WPzM+N3/AAUQ8Z/GfwdcfC74S/C6+0u78Rw/Yb2RJ31G8ljfhobdI1+TcCy7iTgNk4wK+kf2Bv2cPEPwF+Gmo6n46tVtPFvi14Zbu0LBn0+2iUiKF2HBkO5nbHAJUdq+m9O8L+GNDZp9C8OaXpssgw72djDA7D3dEUn+XtU6IVbnGPb/ADj9BSb6ISTufmx/wU08Jap4B+MPgf4/6CDbG4EVu1zggLf2chlgLHoNyMqdegrT/wCCa3gzVvHfxO8b/tGeJy13PAJLK1uJFz5l9dsJLh1PcrHsXP8AtGv0M1TQ9G1qFYdY0mxv0jbciXdrFOqn+8FkUgEetJp+l6bpEAtNI060sId+/Za20cK7uhbaihSSO+P5U27Kw+XW58L/APBWKVT8OvAIlYKv9s3QUkcc26gfzrnP2uYiv7BHwMY/KCNNbB9rQf8A1wa/Qy90TR9YEcesaRYXyRPujW7tY5xGemVDggEgCrN1omjXlhDp11pNhNaW+BDby2kbxIF4UKjAqvHoKFITWp+aHj/4Uza9/wAE+fhF8XNCiZdX8A2YeSVVO/7C9yw3KcZzHKFYd/mqp8APhlqV3+zN8dv2ivGM09zqnijSL7T7G4uMmSRBhriXJGcsw2E+gP4/pzBp9ha2P9mQWNtHZhDGsCQII1XOcCPBTHJ4x71XbTrBrZ9OWwtRayIytb+Qnksp6qUC7cEdeKOYXKfnz/wTvhT/AIZU+ObtwTHd+2P+Jew7/UfnVj/glpIlv4U+Lj7iAttprng9BFcZP4d6/QjT9H0XTLSez0/SbG1guc+bFBaRxpIDkYZVGG4JHPtUEGj6RpsMsWl6RYWYmwJFtrWOEOBkKG2AZGCetFyrH4+/seftN+G/2bfGnizWfEXha+19NZhFnHHZzxxtEUnkLE+YO4Ir75+AP7ZvhH9o7xZq3g3QfAes6JPp2mHUpZ7u5iaN0L7NoVM8gV7zaeC/B6v/AMiloXX/AKBVv/PZk1oQ+H9C02Qz6Xoum2crrtZ7aziiYgHIBKKCRkdKLiPzN/4JSrj47+Poztk26FMuxhz/AMfg4I6kHvx0Fcn+3f8As4S/BL4pv4u8N2DxeCvGFyLmzMaHy7O8ILS27Y6ZYs6Z4+fHGK/VrSfDmg6JI8+laJptlJKAjtaWUUDMuc4LIAx5APJqzfWVjqcX2fUrC1u4shzHPAkqh14UgOCOAT2z70cwuW54F+wdHt/ZL+HojbcEs7heT3Fw3H6V8l/Gsxyf8FNrKN2wRr2j9QccQnvX6aWlnZWNvHZWNnBbW8QKpDBCsUaqc5ARQAPX6k1D/YWgy6l/a02h6ZJfgo32trGIzFlGFO8gtnGec0Jg1sYfxL+H2j/FH4feJvhvrrMll4hsZrGV0G5oS+fLkAHUq20+2Oa/MP4afE/42f8ABPrxzr3gnx14Fk1bw9q1ws0oMjRwXMqBhFdWt0oKg4OGBxnZg9K/WOUgghc8dD/+qqcum2OoxNaalaQXds3/ACxuIUlRfojAr+QFTexVrn5ffGz9q74m/tmRWHwW+EnwtvbTTtQuo5rq3jma5nuyrgr5suAkMSkbiS3JHevvz9mP4NJ8Bvgvonw8lnin1KMPearcRYKveynfIFI6qpO0H0UV6FYeHtA0NHi0LQtN01JeXS0s4oFf/eEaru/Gr27ChRnA4AJBx9OBQGoEHPXjtSEYoB9aXryKChtOAxSEEUu4UABOKNwpCc0lADtwpCc0lFADlIB5pDyaSigBy9KXtikXpS0AJnFKDmkIJ5oFAC0UhOKNwoAWg8DNJuFHUcUAL3xRQDz+FLg0AJQODmiigAo96KO2KACigUUAGecUEYNHGKBnvQAGiiigAoo74ooAKKQnFKDmgAooooAKKKO+KAA8UA5oI4pAMUALR2xRQeKAAZBobLUDnpRQA3bQAQeKdR3zQAuTjBppQEZpTR2xQAgOKGckYpD1oAzQAq8c0FcnNAGKWgBQTikIJWg8DNL2oAZkjgUYLDmlKnrQKAFUBTmlZznikpCM0EsTcSMGhUzzRtJOKOV4oKQ9iBximq5HWkPPNGKAAn5twpzEuvWmkYpQQBigBpyD8tG0MenNLx3pVI3ZoAXJUUhc0rdKZQA7ecYpu3JzRTl6UAKTgYFIXyKRutJQAU5cYpCMUq9KADGetKCR0pMigHNAC8ZyaHIPFGecUhBoAchUc4NKzBjz0pgGKU8DNADW68CgEA8ilYd6NvFADiSRio2XninA44NDDvQA00gHrT9pxmkAJOKADODkU9X45ph4oBxQA52B6CmKvc07ryKAMUAOL44FMJzQ3WgDNAABg5FKpLNz0pOgxSrxzQS0KTgfjTTSkg02gocGAOaTJ7UlFBLQpORzSggHim0UFC5JHNJRRQAUoOKTtmloAUkEU2iigAopRjvQcdqAADNJTgMUEGgBtKBmjaaUDFAAOOKWjvmgDnFAB2xQBziigHnNACEZNJtNOpCcUAIRigHFL15FIRigBRyc07IpgOKXcKAFooooAKKKKACiiigAooooAKKQnFKOelAB3zQaKKAEIzQBilo74oAKKKKACjvmij3oC4GiiigApCe1LSEZoAOgx3px6YpAMmlPP8qAEFB4GaBycUh54oC4tFB7UUAIRmgDFLRQAUUUUAB5GKKKKADtigUUd8UAFFFFBLQDg5pG60tNbrQUAGRS9D+FIDihutAAxzQBmkpQcUALtNAGKXOaQnFAAx7UgGaDzzS42jmgBNppQMUoOaQnFACN1pKUnNAGaAAnNOUnbimkEUoOKAEIA6Uq+tITmgHFACjrTj2NNByacegFACUHkYpOmaUHNAAeRiiiigBrdaUkEYpG60bTQA/PGKReDmikJxQAEd6bTvvcCkPFACr6Up4poOKU/MOKAAjPNAGKWigBrdaUcigjNKBgUANIxSUp60lABRRRQAoGaCMUA4oJzQAlKMd6SigB2MjikNKvpQQaAG0oGaNppenBoAQjFAGaXG48UDigBaKKM+1AAOTiigHHzUUAFGQDzSE4o68igBQcj8aBSAYpaAEJxSE5pSM0m00AKvSkbrSgYoIzQAgGaNppQMUtAC7TSEYp24UhOaAEo96KXt+NACDk4o96F+8aTnNACg5ooOO1FACEZpV4PNFHvQAUUUUAFHfNFFAAaKKKACjtilAzSEYoJaAUUUUFBQeBmig8jFAAODmjtRSE4oC4q8HNJjnNKDmiglgaKKKCgo74opDxzQAtB4GaCenFHVaACijOaKACjvmiigAJ4zRjjNB5GKRiccUAKRikIJPFKOlA4OaAGnignNB60AZoAAM0bTSjjiloATpwaQnNKRmk2mgAAyKfkYpAMCigAxxTTyacSAMU0etACUoODRgnmg8cUAKx6Ckxmkpy9KAEIxRtNKRmloAQDHJoLCgntTaAHdRxQBihelL70AFFFITigBG604HNJ15FIQRQA7HGaaTk0A4pW68CgAUgHmjaSeoptOB5yKAEIwcUq+lIc55pV9aAFooJ5x7UUAITijcMYoIzSbTQAYzzRtNKBiloAbtNG006kJxQAhGKAM0E5pV9KAEIxQBmlbrSA4oAUcGlzmgEHtQSBQAUhGacBnmkIxQALweaKKKAClGO9JRQFwbBGBRRRQAhGaAMUtGT0oAO+KKTGDxSmgAooooAKDwM0UHkYoC4E4pNwoIzSbTQA6iigcnFAB3xS9sU3vSk849qAuC8HNFLjvSUAFHfFFHfNABR2xQaKAADnFFA4OaKAuA5OKKBwc0UAFKBmkpQcUAL0HNNzuOBSk5pF4bJoAKKO9FABRRSE4oAWkIzSg5ooJaEHHFLR3zQaCgo96Pel7YoASg8jFJ0GaWgBeO9IevHSiigAOBzRQeRiigAoo96M84oAKOMUUUAL1OBSZ4xQODmgd6AEINKo7UUZwcmgBCcGgsKQ9aCMUAOBzRSL0paADrxRjGaBwc0GgBCM0YOMUtHvQAmccUdeRQRnn8KBQAhGKAcUpGaQjFADhz0pCQKF45pD1oAXryKQjFKvSgjNAAvSndvxpvTg0bhjFACYJPFGCOtKKCM0AIDil68ik2mlAxQAh44pyYxzTW605RkUAIwyeKOnBpxGKYetAC9eRQOOKF6UvfNAB3/AApT2+lIeufalPrQAh4GaKDyMUUAFHvRR2xQAmCx4pv1p68HNNPWgA96BxQBkUpBoAD83IpCMUoGKRutACjgUdRxSZ4xSr0oACSOKAc0jdaAcUAOoozmj3oAOpxRQOpP4UUEtBR3xQeBmk75oKFPBxQRilJGKQZ70AFFFFABRRRQFwoo74ooJYUUDk4ooKClA5zSUck4FABjFHfNAyTiigloUkdKTBHPrR3zSk8YoKEo74pOmaByc0ALRQaAM0AFA5OKKBwc0EtBRRjvRnnFBQUUHgZooAKOvB6UUUAA5OKKOnNFAB70hGacOeKaOpFAB04NAOaCDQBigBTxSZp2R3FNYZPFACnhfxoznFB5GKKAA8jFFFHfFAB3xRRjn8KCc0AFFFB4GaADPakwQc+tLjnNBoAU+tJRnjGDSZxQAvbFAoooAQnFHUcUjdaAcUAKRR15FHUcUAYoAAMUtISBTgMjNACUUpGKTPOKAD3pRyMUdsUi8UBcM4B+tAGKQ/d/GlPAzQAe9IT2pScCmmgBcijG48UgGaM4GO9ACg44pRz0pDzyKVRg0ANbrSUp60AZoAVelKeKTpwaCQRQAbhS+9Mp4OV/GgBCM0cigd6G9KAFB4x+NIVNJmnZzQAnTg0o5Gaa3WlAIoAAc07tikPXIoJoABRRRQAUd8UUh45oAUnFNJzStyR9KNpoAF54paFGOTSZxQAtIRml7ZpNwoATBpR0pQQe1Bx2oAQjNIFJOKceBmgcHNACDjilzxj3pMc5pRQACiiigLgeRiiiigA74oo75pT60AJRRRQAUUhOKNwoJaF75oNA56UhIFBQucHNJuFHUcUm00AOoHBzRR3xQADg5ooooAKKKKAA8ikAxS0UAFKvWk96VetADR3+tLSZxmloAO2KQDnNLRQAHkYoHSijA60AHbNFByRRnNAB14ooHBzSZxQAo4OaTHOaUHNFAASKAc0hGaAMUAL3xRSE4NLnNABRRRQAUd80Dk4ooC4uec0neijvmgAxzig8jFLnnNJQAUUUUAKMd6a2M8Up4GaRgaADcKX3plP3cdDQA09aMcZowTS44xQAL0pe+KQccUHg/hQAMpNLzxijOaKADtg0gHOaWigAJ4zRQeRiigloDyMUN0xR3zQaCgPIpCDS59qKAG9DzR1pSM0q4A5oAQHHWgMAc0NjPFIBmgAxnkUoGKOnBpQc0ANbrSU4jNIRigAAzSjIOKF6UvfNACmmN1pxpCM0ANpQcUbTQRigBevIpaaDjjFOPAzQFw74oYcUY5zQ3IxQAp7UlFFABQeRiilAzQAmO/4UZBOPSlPAxTQOc0ALnjHvSGlFKMd6AGjNDDJ4pSFNGAOlACAYpaKKAA8jFFGT0owB0oAKKPeigAoo74ooJaCijviigoKXtSUc5oAQHFKDmkYZPFAGKAuBGaTBzinUcYoAANp5pp604Z70jetAAvTNGRSj7uKQg0AKBmkzzTlPemYzmgB2c0UgGKWgAoooPAzQADk4oHJxQODmgcHNAAWA4oU9TTT1pV6UAIRzTsc4o75pc85oASiiigAoz7UUox3oC4meKBQSM8UUAFIRmlooAQDFLRSE4oAWj3oBzR2xQA09aVelBBo6cGgBaKBz0ooABwc0UUUEtBRSgZpCMUFAeBmig8jFB7UAFFFFAAeRilGOlJSE4NACsvPFC4A5ozmigAOO1FFFAB3zQRuPHpRR05oAQHHBpc8ZpCD1o7YoAWig8AGigAopCcUoOaADHGaAc0c5oOO1ACjHekOO1FFABRRRQAhGaAMUtHfFACMO9C9KVulNBxQA73pp604EEYppGD9aAAHFOpoGadQAUUUY4zQAUhGaAc0tAXBcAYPWhh8tHfNKeVoJYnWigUUFBRQeBmigAo56jFFGe1ACZ4yaU8c0EcY9eaQgk0AAOaWiigA96M84pe3400dSaAFooJ5x7UUAFFHvRQAo54po6kUuQDzSDk5oAByad16dqReDmjB6jFAARg0Gkzxk0bhQAtFJuFKDmgAoHJxRQPvUEtBRR60UFBSHnignFA5OaAFPAGaKD83AooABwvPrQBikY8Yo3CgBaM0DB5o5LUAFHXignNA+9QAUUetFACEZoAxS0hOKAFzzilIxTcilzmgAoozzigHNABRRjjNBGKCWgAyaCc0Dg5ooKCiigcnFABSEZpaKAEAxS+9FBIAxQAmfY0h605cc59aRhk8UACkA80DmkIxSr0oAXPtRnjNKADSMOwoATJPSl570gGKWgA75oNBOBmgHNACE4pQc0hGaOg5oAUnFIRnmg88UuMUAAGBRR2xQKACiiigApGPGKCcUdeRQAtHfNHU4ooAG5GKCQKKa3WgAJzSrTacGwMUAKTiikxkcUo54oAO+KO+KTvSnrn2oAM84oPAzSAc5pW5GKACjvmiigAPIpu006kJxQAAYoYZoBzSk4oAAMCgHNIOTxS8dqACjnNFITigBT1yKXqcU3cKC3HFBLQtHbFFFBQnQZpaCMrRnNAAeRijrxRQODmgApDwc0tI3pQAvXGPSikDAGgc0ALRRR70AHbFNIOe1LkUbhQAAEHmnHt9KaOTmlNAC9vxpucZpe2KQg0AHXkUqjtSdODSryc0AISBQDk4FJ1NKPlPNACsOOKbTiQwIFIVPBoAbTl6UmDS9ODQAtA4OaAc0UAFFFFACEZpQMCkJxRuGMUAKDzmikFLQAhGaTaacOTiigBAMUucHOKQnFKCD2oABQODmg47UE4oAKKKUDNACU1utOIxSEZoAQDNL04NHTg0hOaAAnI4BzSj0xSZI6UoyeTQApB7UUGjvigAooooAKBwc0UUAFFFFABSEZpaKAEAxS0UUAIRk0Cjv+FL0OPXmgA57Uc96KKACiigcnFACN0xQvSjaW6UuCODQAUhGaWigBMUpoooAKQnFLSEZoAWikJxSg5oAQjNAGKWkJxQAo4OaD60A5oPIxQAUhGaU8AGigBpGKSnEZpMHOKAFBwv40L1zRggYoAxQAjZzSr0oIzQBigBfeijtigUAGOM0HgZpGPYUE/LQAtNbrTgcikYd6ABRk0McmlUY5NIQSaABSAeaQnnigjFJQAoOOtHU8UlOX1oAQjFJTmGaQjFADgc0Ui9KCcUAL2xQKTcKUHNABRRR70AITikJzQetJQAUoOKACRmkoAduFG4YxTaUDNAAaSlIxSUAKDilBzSAZpQMUALSE4pSRSdeRQAdeRQp29aAMUEZoAQHnNDHNBGKAM0AKvrTieMU3pwaNwoAM4pCc0E5pKAFBxS7hTaUDNADgc0hOKPu0YLHigBCc0AZowaUDFAABilpCcUbhQAo4OaKABnAo96AEIJ5oHAp3am+1ACnikPIpWHaigAo57UUUAHPeijHGaAc0AIRmk2mlJxSg5oAbtNL04NLTW60ALuFA5OaQDNOAxQAGiiigAooPAzRQAUUUUAFB4GaPekJ4oAWijrRjjNAB3zQeufagHNFAAaQnFLSEZoAWgcHNFHbFACZwaAc0EGgDFAC0AZopQcUAJSE4pTSEZoANwpQc03aaUDFAAw70L0pTyKQDFAC98UjdaO9DHJH0oAF6UvfNIvSloAG5GKKKKAuFGO9FHbFABnP4UUmcUo5GaAEJxSg5pp60q9KAFooooAQjNJg0pOKUHNABQeRiiigAJApNwoIyaQqQM0ABOaSlIxSUAFOXpSAZpyjtQAUjetBIFITmgBQcUdeRSYzSgYoATaaUccUtHfNAAeBmjPFB5GKPagBCDSEYp1Iw70AAIAxSGgjFABIzQAlOXpSbSRmlUcUABGTSEYpRyaG5PHagBAcUoOaTaaOh5oAVutC9KD83IoAxQAtITilpCM0AITmgHFG00bTQAvXkUhGKXpwaOvIoAQDNG05xSgYpT6/hQA0qRSgU7IPakOO1AC5HQij+Lj0pO+aXOPm/CgBucGlHPIpp9aMkcUAKwwabTiCaTaaAHA85oPTFIo7UtABQMHjvRQODmgAGe9FFHfFABRRRQAnfFOPFJxigZ70ANbrSr0oIzQBigAJxR15FDDvQvSgAAxSmgnFBGKACiikJxQAMeMUuc0hGaAMUBcWig8DNFAB2xSEUtFABRzmiigAOO1FFFABRR70UAFFFFAB70UdsUCgAoooHJxQAY4zQDmjnNLjPSgBKKKO+KACiilAzQAmQOopD83IoYd6UDAoAQDFKBmilBxQAg5ooXik6DNBLQtFFFBQjetC/dx70NyMUAcUAIRzSijvmjOKAFooHPSkJAoACM0AYpRyM0Z5xQAhOKUHNNPWgHFAC9/wpSQCM+lIOTmhuo+lACdeaDwcUq9KGxQAZxwaXIB5pvbmkoAU8mkoooAUHFKTikCk9KUjNAC54zQTigKduKRutABuFA5OabTgcfjQApYZx7UhYEYoGCc/hSEYoAVqUfdxSHpSrzQAgBzTiRjApCMUHgZoAF4OaKMcZoAzQADk4prdaf0PNNIJNAAvpSk4pACOaD8x47UAKDmg8DNJ93g0oOfpQAUUhOKM8ZoARutKvSkPPNKOlAC0HkYoooAKKM+1FABQeRij3pMigAIOKMZFKCCMUdDj15oAQcDmlpDzS0ALxnNJ05qb7LJ6r+dBtZCMbl/OgCGipvssnqtH2WT1X86AIe+KMc59qm+yyZzuX86Dayeq0ARH1pBycVN9lkxjK0LayA53L+dAEGfalqYWr9yv50G1fsV/OgCGipvssnqv50fZZPVfzoAhPIpAMVP9lk9V/Oj7LJ6r+dAEJwRjvRz3qb7LJ6r+dH2WT1X86AIaQjNT/ZZPVfzo+yyeq/nQBDQeBmpvssnqv50G1kIxuX86CWiFvu0elTG1kIxlfzo+yyeq0FENFTfZZPVfzo+yyeq/nQBD70VN9lkxjK0C1k/vL+dAENB4Gam+yyeq/nQbWQjG5fzoAhPC0AYqY2shGMr+dH2WT1WgCGipvssnqv50fZZPVfzoAhoz7VN9lk9V/OlFq/cr+dAEFGQDzUxtX7FfzpDaSH+JfzoAhHNLzjipRaSD+Jfzpfssnqv50AQZx1oHJ4qY2kh/iX86VbWQHll/OgCEnNHOOKm+yyf3l/Oj7LJ6r+dAEGDjFLU32WT1X86Pssnqv50AQ0E4qb7LJ6r+dIbSQ/xL+dAEVB5GKm+yyf3l/Oj7LJ6r+dAENFTfZZPVfzo+yyeq/nQBEMd6QsBxipvssnqv50htJD/Ev50AQigjNTC0kH8S/nS/ZZPVfzoAgB2nmkxnkVObSQ/xL+dAtJB/Ev50AQ5wMGgdamNpIf4l/OgWkg/iX86AID1oIxU5s5f7y/nQbSQ/xL+dAEAOKCc1N9jl/vL+dH2OX+8v50AQg4oJzU32OX+8v50fY5f7y/nQBBRU/wBjl/vL+dH2OX+8v50AQUVP9jl/vL+dH2OX+8v50ARKwHWgEVL9jl/vL+dH2OX+8v50ARbuOKQ1P9kkxjcv50G0k/vL+dAEAGaMcj86nFpIP4l/Ol+yyZzuX86AIAcZ+tH3ulTGzl/vL+dAtJR/Ev5mgCFhgYpADVg2sh/iX86Pssn95fzoAhoPIxU32WT1X86Pssnqv50ARZ4xTefap/ssnqv50fZZPVfzoAh570VN9lk9V/Oj7LJ6r+dAEPbFAU5zU32WT1X86PssvYr+dAELA5H0pAMVP9lk7lfzo+yyeq/nQBXbrSgZWpjaSH+JfzpRayAY3L+dAEGOMe9GccVOLWT+8v50htJD/Ev50ARA5oqUWkg/iX86X7LJ6r+dAEQx3pDjtU32WT1X86Pssnqv50ARdvxpmM5qx9lkxjK0C1k/vL+dAEAGKU+v4VN9lk9V/Oj7LJjGVoAgHf60tTC1k/vL+dH2WT1X86ALVFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAf//Z', 'JPEG', ML+3, y+2, 36, 18);
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
    const filas = (días[si]||[]).filter(r => r.ej && r.ej.trim());
    if (!filas.length) return;
    const sc = SES_COLORS[(si-1) % SES_COLORS.length];
    if (y + 10 + filas.length*7 > H-15) { doc.addPage(); y = MT; }

    doc.setFillColor(...sc.h);
    doc.roundedRect(ML, y, CW, 8, 2, 2, 'F');
    doc.setFont('helvetica','bold');
    doc.setFontSize(10);
    doc.setTextColor(...WHITE);
    doc.text('DIA ' + si, ML+4, y+5.5);
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
