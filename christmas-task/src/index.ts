import {data} from './components/data';
import {Toy} from './components/toy/toy';
import {IToy} from './components/generalTypes/general'

let toy = new Toy(<IToy>data[0]);
toy.init();
document.body.append(toy.node);
