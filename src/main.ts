import './style.css'
import { gamePlay } from './gamepath/gameplay'


let initSite: () => void = () => {
  gamePlay(1);
}






window.addEventListener("load", initSite);