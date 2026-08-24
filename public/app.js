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
let chatRutina = [];   // conversación del asistente para la rutina actual (memoria por rutina)
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
  chatRutina = [];
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
  chatRutina = Array.isArray(r.chat) ? r.chat : [];
  // sesiones puede ser array [d1,d2,d3] o objeto {1:d1, 2:d2, 3:d3}
  [1,2,3].forEach(s => {
    const datos = Array.isArray(r.sesiones) ? r.sesiones[s-1] : r.sesiones[s];
    sesState[s] = datos ? datos.map(row => ({...row})) : defaultFilas();
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
  const dias = { 1: sesState[1], 2: sesState[2], 3: sesState[3] };
  if (rutinaActual) {
    await fetch(`/api/rutinas/${rutinaActual.id}`, {
      method:'PUT', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ nombre, fecha, dias, chat: chatRutina })
    });
    rutinaActual = { ...rutinaActual, nombre, fecha, dias, chat: chatRutina };
    toast('✅ Rutina actualizada');
  } else {
    const res = await fetch(`/api/pacientes/${pacienteActual.id}/rutinas`, {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ nombre, fecha, dias, chat: chatRutina })
    });
    const { id } = await res.json();
    rutinaActual = { id, nombre, fecha, dias, chat: chatRutina };
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
  // Si cat esta vacio pero ej tiene valor, mostrar ejercicio igual
  let ejOpts = r.cat ? BANCO[r.cat].map(e => `<option value="${e}"${r.ej===e?' selected':''}>${e}</option>`).join('') : '';
  if (!r.cat && r.ej) ejOpts = `<option value="${r.ej}" selected>${r.ej}</option>`;
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
function generarPDFActual() {
  guardarSesActual();
  const nombre = document.getElementById('rut-nombre').value || 'Rutina';
  const fecha  = document.getElementById('rut-fecha').value || hoy();
  const dias = { 1: sesState[1], 2: sesState[2], 3: sesState[3] };
  const pac = pacienteActual || { nombre: 'Paciente', edad: null, objetivo: '', lesiones: '' };
  generarPDF(pac, nombre, fecha, dias);
}

async function descargarPDFById(id, nombre) {
  const res = await fetch(`/api/rutinas/${id}`);
  const r = await res.json();
  // Normalizar sesiones a objeto {1,2,3}
  let ses = r.sesiones;
  if (Array.isArray(ses)) {
    ses = { 1: ses[0]||[], 2: ses[1]||[], 3: ses[2]||[] };
  }
  generarPDF(pacienteActual, r.nombre, r.fecha, ses);
}

const LOGO_KH = 'data:image/png;base64,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';
function generarPDF(paciente, nombreRutina, fecha, dias) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation:'portrait', unit:'mm', format:'a4' });
  const W = 210, H = 297, ML = 12, MR = 12;
  const CW = W - ML - MR;

  // Paleta de marca (referencia)
  const OLIVE     = [138,140,109];   // fondo oliva de la página
  const OLIVE_DK  = [86,88,58];      // acentos, encabezados
  const CREAM     = [233,229,212];   // banda crema
  const INK       = [45,45,42];      // texto principal
  const MUTED     = [122,120,98];    // texto secundario
  const WHITE     = [255,255,255];
  const BORDER    = [214,210,190];

  // ══════════════════════════════════════════════
  // Función que pinta el "papel" de una página:
  //   - fondo oliva a toda página
  //   - banda crema arriba (full bleed) con textura
  //   - logo real KINE HOUSE arriba a la derecha
  // Se llama al inicio Y en cada addPage.
  // ══════════════════════════════════════════════
  const BAND_H = 30;
  const MARGIN = 6;    // marco crema alrededor del bloque oliva (como Canva)
  function pintarFondo() {
    // fondo crema a toda página (será el "marco")
    doc.setFillColor(...CREAM);
    doc.rect(0, 0, W, H, 'F');
    // bloque oliva grande abajo, con margen crema a los lados
    doc.setFillColor(...OLIVE);
    doc.rect(MARGIN, BAND_H, W-MARGIN*2, H-BAND_H-MARGIN, 'F');
    // textura de la banda crema superior (granulado sutil, determinístico)
    doc.setFillColor(223, 218, 199);
    let seed = 7;
    const rnd = () => { seed = (seed*9301 + 49297) % 233280; return seed/233280; };
    for (let i=0; i<650; i++) doc.circle(rnd()*W, rnd()*BAND_H, 0.14, 'F');
    // logo real arriba a la derecha
    const LW = 34, LH = LW/2.16;
    try { doc.addImage(LOGO_KH, 'PNG', W-MR-LW, (BAND_H-LH)/2, LW, LH); } catch(e){}
  }

  pintarFondo();

  // ══════════ Nombre del paciente (dentro de la banda crema, izquierda) ══════════
  doc.setTextColor(...OLIVE_DK);
  doc.setFont('helvetica','bold');
  doc.setFontSize(18);
  doc.text((paciente.nombre||'Paciente').toUpperCase(), ML, 15);
  doc.setFont('helvetica','normal');
  doc.setFontSize(8);
  doc.setTextColor(...MUTED);
  doc.text('Lic. Julian Gaffet   ·   M.P. 1321', ML, 21);

  // ══════════ Franja de rutina + fecha (sobre el oliva) ══════════
  let y = BAND_H + 6;
  doc.setFillColor(...OLIVE_DK);
  doc.roundedRect(ML, y, CW, 10, 1.5, 1.5, 'F');
  doc.setFont('helvetica','bold');
  doc.setFontSize(11);
  doc.setTextColor(...CREAM);
  doc.text(nombreRutina || 'Rutina', ML+4, y+6.5);
  doc.setFont('helvetica','normal');
  doc.setFontSize(9);
  doc.setTextColor(240,240,220);
  doc.text(formatFecha(fecha), W-MR-4, y+6.5, {align:'right'});
  y += 15;

  // ══════════ Objetivo / lesiones (opcional) ══════════
  if (paciente.objetivo || paciente.lesiones) {
    doc.setFillColor(...CREAM);
    doc.setDrawColor(...OLIVE_DK);
    doc.setLineWidth(0.3);
    doc.roundedRect(ML, y, CW, 8, 1.5, 1.5, 'FD');
    doc.setFont('helvetica','normal');
    doc.setFontSize(9);
    doc.setTextColor(...OLIVE_DK);
    let info = '';
    if (paciente.objetivo) info += 'Objetivo: ' + paciente.objetivo;
    if (paciente.objetivo && paciente.lesiones) info += '     ';
    if (paciente.lesiones) info += 'Lesiones: ' + paciente.lesiones;
    doc.text(info, ML+4, y+5.4);
    y += 12;
  }

  // ══════════ TABLAS por día ══════════
  const rowH = 6.5;
  [1,2,3].forEach(si => {
    const filas = (dias[si]||[]).filter(r => r.ej && r.ej.trim());
    if (!filas.length) return;
    if (y + 16 + filas.length*rowH > H-18) {
      doc.addPage(); pintarFondo(); y = BAND_H + 6;
    }

    // Header del día (oliva oscuro)
    doc.setFillColor(...OLIVE_DK);
    doc.roundedRect(ML, y, CW, 8, 1.5, 1.5, 'F');
    doc.setFont('helvetica','bold');
    doc.setFontSize(10);
    doc.setTextColor(...CREAM);
    doc.text('DIA ' + si, ML+4, y+5.5);
    doc.setFont('helvetica','normal');
    doc.setFontSize(7);
    doc.setTextColor(230,228,210);
    doc.text(filas.length + ' ejercicios  ·  toca el ejercicio para ver el video', W-MR-3, y+5.5, {align:'right'});
    y += 10;

    const cols = [
      {label:'BLQ', w:8,  align:'center'},
      {label:'EJERCICIO', w:52, align:'left'},
      {label:'SER', w:8, align:'center'},
      {label:'R1',  w:8, align:'center'},
      {label:'R2',  w:8, align:'center'},
      {label:'R3',  w:8, align:'center'},
      {label:'R4',  w:8, align:'center'},
      {label:'KG S1', w:12, align:'center'},
      {label:'KG S2', w:12, align:'center'},
      {label:'KG S3', w:12, align:'center'},
      {label:'KG S4', w:12, align:'center'},
    ];
    const usleft = cols.reduce((a,c)=>a+c.w,0);
    cols.push({label:'OBS', w:CW-usleft, align:'left'});

    // Header de columnas (crema)
    doc.setFillColor(...CREAM);
    doc.rect(ML, y, CW, 6, 'F');
    doc.setFont('helvetica','bold');
    doc.setFontSize(6.8);
    doc.setTextColor(...OLIVE_DK);
    let xc = ML;
    cols.forEach(c => {
      if (c.align==='center') doc.text(c.label, xc+c.w/2, y+4, {align:'center'});
      else doc.text(c.label, xc+2, y+4);
      xc += c.w;
    });
    y += 6;

    filas.forEach((r, ri) => {
      if (y+rowH > H-18) {
        doc.addPage(); pintarFondo(); y = BAND_H + 6;
        // repetir header columnas
        doc.setFillColor(...CREAM);
        doc.rect(ML, y, CW, 6, 'F');
        doc.setFont('helvetica','bold'); doc.setFontSize(6.8); doc.setTextColor(...OLIVE_DK);
        let xh=ML; cols.forEach(c=>{ if(c.align==='center')doc.text(c.label,xh+c.w/2,y+4,{align:'center'}); else doc.text(c.label,xh+2,y+4); xh+=c.w; });
        y += 6;
      }
      // fila: siempre blanca; alternamos con un tinte crema muy suave
      doc.setFillColor(...(ri%2===0 ? WHITE : [248,245,235]));
      doc.rect(ML, y, CW, rowH, 'F');

      xc = ML;
      // BLQ
      doc.setFont('helvetica','bold'); doc.setFontSize(8); doc.setTextColor(...OLIVE_DK);
      doc.text(r.blq||'', xc+cols[0].w/2, y+4.4, {align:'center'});
      xc += cols[0].w;

      // Ejercicio + link a video
      const ejNombre = r.ej || '';
      const ytUrl = getVideoUrl(ejNombre);
      doc.setFont('helvetica','normal'); doc.setFontSize(8.3); doc.setTextColor(...OLIVE_DK);
      let ejLabel = ejNombre;
      while (doc.getTextWidth(ejLabel) > cols[1].w-3 && ejLabel.length > 5) ejLabel = ejLabel.slice(0,-1);
      if (ejLabel !== ejNombre) ejLabel += '…';
      if (ytUrl) {
        doc.textWithLink(ejLabel, xc+2, y+4.4, { url: ytUrl });
        doc.setDrawColor(...OLIVE);
        doc.setLineWidth(0.15);
        doc.line(xc+2, y+5.1, xc+2+doc.getTextWidth(ejLabel), y+5.1);
      } else {
        doc.text(ejLabel, xc+2, y+4.4);
      }
      xc += cols[1].w;

      // Resto
      const resto = [r.ser||'', r.r1||'', r.r2||'', r.r3||'', r.r4||'', r.kg1||'', r.kg2||'', r.kg3||'', r.kg4||'', r.obs||''];
      doc.setFont('helvetica','normal'); doc.setFontSize(7.8); doc.setTextColor(...INK);
      for (let i=0; i<resto.length; i++){
        const col = cols[2+i]; if(!col) break;
        const txt = String(resto[i]||'');
        if (col.align==='center') doc.text(txt, xc+col.w/2, y+4.4, {align:'center'});
        else doc.text(txt.substring(0,22), xc+2, y+4.4);
        xc += col.w;
      }
      // separador horizontal muy sutil
      doc.setDrawColor(...BORDER); doc.setLineWidth(0.15);
      doc.line(ML, y+rowH, ML+CW, y+rowH);
      y += rowH;
    });

    y += 5;
  });

  // ══════════ Pie de página en cada página ══════════
  const totalPages = doc.internal.getNumberOfPages();
  for(let i=1; i<=totalPages; i++){
    doc.setPage(i);
    // barra crema en el pie
    doc.setFillColor(...CREAM);
    doc.rect(0, H-10, W, 10, 'F');
    doc.setFont('helvetica','italic'); doc.setFontSize(7); doc.setTextColor(...OLIVE_DK);
    doc.text('Los ejercicios son enlaces: tocalos para ver el video de tecnica en YouTube.', ML, H-3.5);
    doc.setFont('helvetica','normal'); doc.setFontSize(7); doc.setTextColor(...MUTED);
    doc.text(i + ' / ' + totalPages, W-MR, H-3.5, {align:'right'});
  }

  doc.save('rutina_' + (paciente.nombre||'paciente').replace(/ /g,'_') + '_' + (nombreRutina||'').replace(/ /g,'_') + '.pdf');
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

// ════════════════════════════════════════════════════════════════════════════
// ASISTENTE DE IA PARA ARMAR RUTINAS
// ════════════════════════════════════════════════════════════════════════════
function abrirModalIA() {
  document.getElementById('ia-input').value = '';
  document.getElementById('reglas-box').style.display = 'none';
  // mostrar/ocultar la sección "reglas de este paciente" según haya paciente
  const labelPac = document.getElementById('reglas-pac-label');
  const boxPac = document.getElementById('reglas-paciente');
  const optPac = document.querySelector('#nueva-regla-tipo option[value="paciente"]');
  if (pacienteActual) {
    if (labelPac) labelPac.style.display = '';
    if (boxPac) boxPac.style.display = '';
    if (optPac) optPac.style.display = '';
  } else {
    if (labelPac) labelPac.style.display = 'none';
    if (boxPac) boxPac.style.display = 'none';
    if (optPac) optPac.style.display = 'none';
    document.getElementById('nueva-regla-tipo').value = 'general';
  }
  cargarReglas();
  renderChat();
  abrirModal('modal-ia');
  setTimeout(() => { const i = document.getElementById('ia-input'); if (i) i.focus(); }, 100);
}

function toggleReglas() {
  const box = document.getElementById('reglas-box');
  box.style.display = box.style.display === 'none' ? 'block' : 'none';
}

async function cargarReglas() {
  try {
    let url = '/api/reglas';
    if (pacienteActual) url += '?paciente_id=' + pacienteActual.id;
    const res = await fetch(url);
    const data = await res.json();
    renderReglas('reglas-generales', data.generales || []);
    renderReglas('reglas-paciente', data.paciente || []);
  } catch(e) {}
}

function renderReglas(contId, reglas) {
  const cont = document.getElementById(contId);
  if (!cont) return;
  if (!reglas.length) {
    cont.innerHTML = '<div style="font-size:12px;color:#b5ad9e;font-style:italic">Sin indicaciones aún</div>';
    return;
  }
  cont.innerHTML = reglas.map(r => `
    <div style="display:flex;align-items:center;gap:6px;padding:5px 8px;background:#fff;border:1px solid var(--border);border-radius:6px;margin-bottom:4px">
      <span style="flex:1;font-size:12px">${escapeHtml(r.texto)}</span>
      <button onclick="borrarRegla(${r.id})" style="background:none;border:none;color:var(--red);cursor:pointer;font-size:13px" title="Borrar">✕</button>
    </div>
  `).join('');
}

function escapeHtml(s){ return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

async function agregarRegla() {
  const inp = document.getElementById('nueva-regla');
  const texto = inp.value.trim();
  if (!texto) { toast('Escribí la indicación'); return; }
  const tipo = document.getElementById('nueva-regla-tipo').value;
  const body = { texto };
  if (tipo === 'paciente' && pacienteActual) body.paciente_id = pacienteActual.id;
  try {
    await fetch('/api/reglas', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body) });
    inp.value = '';
    cargarReglas();
    toast('✅ Indicación guardada');
  } catch(e) { toast('Error al guardar'); }
}

async function borrarRegla(id) {
  try {
    await fetch('/api/reglas/' + id, { method:'DELETE' });
    cargarReglas();
  } catch(e) {}
}

// Captura la rutina que está en pantalla (los 3 días) para mandarla como base a corregir.
// Devuelve un array de días; cada día es un array de filas con contenido real.
// ════════════════════════════════════════════════════════════════════════════
// CHAT DEL ASISTENTE (memoria por rutina)
// chatRutina: array de { rol:'user'|'assistant', texto }
// ════════════════════════════════════════════════════════════════════════════

function renderChat() {
  const cont = document.getElementById('ia-chat-msgs');
  if (!cont) return;
  if (!chatRutina.length) {
    cont.innerHTML = `<div style="color:var(--muted);font-size:13px;text-align:center;margin:auto;padding:16px">
      Contale al asistente qué rutina necesitás para empezar.<br>Ej: "Armá una rutina de 3 días, vuelta a correr post esguince de tobillo".
    </div>`;
    return;
  }
  cont.innerHTML = chatRutina.map(m => {
    if (m.rol === 'user') {
      return `<div style="align-self:flex-end;max-width:85%;background:var(--primary);color:#fff;padding:8px 11px;border-radius:12px 12px 3px 12px;font-size:13px;white-space:pre-wrap">${escapeHtml(m.texto)}</div>`;
    }
    return `<div style="align-self:flex-start;max-width:85%;background:#fff;border:1px solid var(--border);padding:8px 11px;border-radius:12px 12px 12px 3px;font-size:13px;white-space:pre-wrap">${escapeHtml(m.texto)}</div>`;
  }).join('');
  cont.scrollTop = cont.scrollHeight;
}

function iaInputKeydown(e) {
  // Enter envía, Shift+Enter hace salto de línea
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    enviarMensajeIA();
  }
}

function nuevaConversacionIA() {
  if (chatRutina.length && !confirm('¿Empezar una conversación nueva? Se borra el chat de esta rutina (la rutina cargada no se toca).')) return;
  chatRutina = [];
  renderChat();
  guardarChatSiPersistida();
}

// Captura la rutina que está en pantalla (los 3 días) como base para el asistente
function rutinaActualParaIA() {
  guardarSesActual();
  const dias = [];
  [1,2,3].forEach(s => {
    const filas = (sesState[s] || [])
      .filter(r => (r.cat && r.cat.trim()) || (r.ej && r.ej.trim()))
      .map(r => ({
        blq: r.blq || '', cat: r.cat || '', ej: r.ej || '',
        ser: r.ser || '', r1: r.r1 || '', r2: r.r2 || '', r3: r.r3 || '', r4: r.r4 || '',
        obs: r.obs || ''
      }));
    dias.push(filas);
  });
  return dias;
}

async function enviarMensajeIA() {
  const inp = document.getElementById('ia-input');
  const texto = inp.value.trim();
  if (!texto) { toast('Escribí un mensaje'); return; }

  chatRutina.push({ rol: 'user', texto });
  inp.value = '';
  renderChat();

  const cont = document.getElementById('ia-chat-msgs');
  const pens = document.createElement('div');
  pens.style.cssText = 'align-self:flex-start;background:#fff;border:1px solid var(--border);padding:8px 11px;border-radius:12px;font-size:13px;color:var(--muted)';
  pens.textContent = '✍️ pensando...';
  cont.appendChild(pens); cont.scrollTop = cont.scrollHeight;

  const btn = document.getElementById('ia-btn-enviar');
  btn.disabled = true; inp.disabled = true;

  try {
    const body = { mensajes: chatRutina, rutinaActual: rutinaActualParaIA() };
    if (pacienteActual) {
      body.paciente = {
        id: pacienteActual.id, nombre: pacienteActual.nombre,
        edad: pacienteActual.edad, objetivo: pacienteActual.objetivo, lesiones: pacienteActual.lesiones
      };
    }
    const res = await fetch('/api/generar-rutina', {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body)
    });
    const data = await res.json();

    if (!data.ok) {
      chatRutina.pop();
      renderChat();
      toast(data.error || 'No se pudo procesar');
    } else {
      chatRutina.push({ rol: 'assistant', texto: data.respuesta || 'Listo.' });
      if (data.rutina && Array.isArray(data.rutina.dias)) {
        aplicarRutinaDias(data.rutina);
      } else if (data.rutina && data.rutina.nombre) {
        const nom = document.getElementById('rut-nombre');
        if (nom && !nom.value) nom.value = data.rutina.nombre;
      }
      renderChat();
      guardarChatSiPersistida();
    }
  } catch (e) {
    chatRutina.pop();
    renderChat();
    toast('Error de conexión, probá de nuevo');
  }
  btn.disabled = false; inp.disabled = false;
  inp.focus();
}

// Si la rutina ya está guardada, persistimos el chat (y el estado actual) sin intervención.
async function guardarChatSiPersistida() {
  if (!rutinaActual || !rutinaActual.id) return; // rutina nueva: el chat se guarda al "Guardar rutina"
  try {
    guardarSesActual();
    const nombre = document.getElementById('rut-nombre').value.trim() || rutinaActual.nombre || 'Rutina';
    const fecha = document.getElementById('rut-fecha').value || rutinaActual.fecha || hoy();
    const dias = { 1: sesState[1], 2: sesState[2], 3: sesState[3] };
    await fetch(`/api/rutinas/${rutinaActual.id}`, {
      method: 'PUT', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, fecha, dias, chat: chatRutina })
    });
    rutinaActual = { ...rutinaActual, nombre, fecha, dias, chat: chatRutina };
  } catch (e) {}
}

// Aplica al armador la rutina (nombre + días) que devolvió el asistente
function aplicarRutinaDias(rutina) {
  if (!rutina || !Array.isArray(rutina.dias)) return;
  if (rutina.nombre) document.getElementById('rut-nombre').value = rutina.nombre;
  const fechaInp = document.getElementById('rut-fecha');
  if (fechaInp && !fechaInp.value) fechaInp.value = hoy();

  sesState[1] = []; sesState[2] = []; sesState[3] = [];
  rutina.dias.forEach((filasDia, idx) => {
    const s = idx + 1;
    if (s > 3) return;
    sesState[s] = (filasDia || []).map(f => ({
      blq: f.blq || '', cat: f.cat || '', ej: f.ej || '',
      ser: f.ser != null ? String(f.ser) : '',
      r1: f.r1 != null ? String(f.r1) : '',
      r2: f.r2 != null ? String(f.r2) : '',
      r3: f.r3 != null ? String(f.r3) : '',
      r4: f.r4 != null ? String(f.r4) : '',
      kg1:'', kg2:'', kg3:'', kg4:'',
      obs: f.obs || (f.nuevo ? '⚠ ejercicio nuevo (fuera del banco)' : '')
    }));
  });
  [1,2,3].forEach(s => { if (!sesState[s].length) sesState[s] = defaultFilas(); });
  currentSes = 1;
  document.querySelectorAll('.stab').forEach((b,i) => b.classList.toggle('active', i===0));
  renderSesion();
}
