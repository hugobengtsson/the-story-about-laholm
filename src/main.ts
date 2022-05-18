import './style.css'
import { gamePlay } from './gamepath/gameplay'


let initSite: () => void = () => {
  gamePlay(0);
}



window.addEventListener("load", initSite);