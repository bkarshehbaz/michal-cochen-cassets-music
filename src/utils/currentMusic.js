import arisSun from './music/musicForYear/aris_san.mp3'
// import avruShanim from './music/musicForYear/avru_shanim.mp3'
import emakKaprachim from './music/musicForYear/emek_haprachim.mp3'
import hevelHachen from './music/musicForYear/hevel_hachen.mp3'
import hidaAtLi from './music/musicForYear/hida_at_li.mp3'
import sinderella from './music/musicForYear/kmo_sinderella.mp3'
import hakouch from './music/musicForYear/kol_hakoach.mp3'
import lehakatZlilim from './music/musicForYear/lehakat_zlilim.mp3'
import liknotLach from './music/musicForYear/liknot_lach_yahalom.mp3'
import melechHakasetot from './music/musicForYear/melech_hakasetot.mp3'
import shuvaElai from './music/musicForYear/shuva_elai.mp3'
import sofHederech from './music/musicForYear/sof_haderech.mp3'
import musicCar from './music/music_car.mp3'
import music from './music/musicAlbums'

export default function getCurrentMusic(musicName) {
  switch (musicName) {
    case 'openingScreen':
      return lehakatZlilim
    case 'recorStore':
      return arisSun
    case 'table':
      return emakKaprachim
    case 'blackPanthers':
      return sofHederech
    case 'reverse':
      return hidaAtLi
    case 'oldStation':
      return melechHakasetot
    case 'weddingSingersPage':
      return shuvaElai
    case 'popMusic':
      return liknotLach
    case 'burned':
      return hevelHachen
    case 'caesarea':
      return hakouch
    case 'viktoryMainstream':
      return sinderella
    case 'musicCar':
      return musicCar

    // component MusicPlayer
    case 'deklon':
      return music.deklon
    case 'hofni':
      return music.hofni
    case 'shir_leahoti':
      return music.shir_leahoti
    case 'margol_naari':
      return music.margol_naari
    case 'ahavat_haii':
      return music.ahavat_haii
    case 'zliley_halile':
      return music.zliley_halile
    case 'meantezet':
      return music.meantezet
    case 'mona':
      return music.mona
    case 'shmor_oti':
      return music.shmor_oti
    case 'rona':
      return music.rona
    case 'shajani':
      return music.shajani
    case 'shikor':
      return music.shikor
    case 'avro_hashanim':
      return music.avro_hashanim
    case 'elinor':
      return music.elinor
    case 'levitaros':
      return music.levitaros
    case 'duet_leehov':
      return music.duet_leehov
    case 'eizo_medina':
      return music.eizo_medina
    case 'kashe_li':
      return music.kashe_li
    case 'eize_min_olam':
      return music.eize_min_olam
    case 'nahon_leayom':
      return music.nahon_leayom
    case 'at_hu_kochav':
      return music.at_hu_kochav
    case 'ahava_yehora':
      return music.ahava_yehora
    case 'mojda_ima':
      return music.mojda_ima
    case 'zman_lisloah':
      return music.zman_lisloah
    case 'bore_olam':
      return music.bore_olam
    case 'shebaharti':
      return music.shebaharti
    case 'lehisha_balila':
      return music.lehisha_balila
    case 'netivey_hahaiim':
      return music.netivey_hahaiim
    case 'bozuki':
      return music.bozuki
    case 'geshem_bohe':
      return music.geshem_bohe
    case 'aliza_azikri':
      return music.aliza_azikri
    case 'boei_venohav':
      return music.boei_venohav
    case 'sharif_basbosa':
      return music.sharif_basbosa
    case 'mizrahit':
      return music.mizrahit
    case 'salam_salam':
      return music.salam_salam
    case 'arisSun':
      return music.arisSun
    case 'avruShanim':
      return music.avruShanim
    case 'emakKaprachim':
      return music.emakKaprachim
    case 'hevelHachen':
      return music.hevelHachen
    case 'hidaAtLi':
      return music.hidaAtLi
    case 'sinderella':
      return music.sinderella
    case 'hakouch':
      return music.hakouch
    case 'lehakatZlilim,':
      return music.lehakatZlilim
    case 'liknotLach':
      return music.liknotLach
    case 'melechHakasetot':
      return music.melechHakasetot
    case 'shuvaElai':
      return music.shuvaElai
    case 'sofHederech':
      return music.sofHederech
    case 'video':
      return ''

    default:
      return ''
  }
}
