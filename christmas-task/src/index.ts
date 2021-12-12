import './style.css';
import {data} from './components/data';
import {Toy} from './components/toy/toy';
import {IToy} from './components/generalTypes/general';
import {FilterToy} from './components/filter/filter';

let toy: Toy[] = [];


data.forEach((item) => {
    const toyLoc:Toy = new Toy(<IToy>item)
    toyLoc.init()
    toy.push(toyLoc)
})
//  = new Toy(<IToy>data[0]);
// toy[0].init();

const flt:FilterToy = new FilterToy(toy);
flt.init();
document.body.append(flt.node);
