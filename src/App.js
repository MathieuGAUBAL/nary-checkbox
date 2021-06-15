import { useState } from "react";
import Homme from "./Homme";
import Femme from "./Femme";

const labelsHomme = [
  {
    id: 1,
    label: 'choix1',
    name: 'name1',
  },
  {
    id: 2,
    label: 'choix2',
    name: 'name1',
  },
  {
    id: 3,
    label: 'choix3',
    name: 'name2',
  },
  {
    id: 4,
    label: 'choix4',
    name: 'name2',
  }
]

const labelsFemme = [
  {
    id: 1,
    label: 'choix1',
    name: 'name1',
  },
  {
    id: 2,
    label: 'choix2',
    name: 'name1',
  },
  {
    id: 3,
    label: 'choix3',
    name: 'name1',
  }, {
    id: 4,
    label: 'choix4',
    name: 'name3',
  },
  {
    id: 5,
    label: 'choix5',
    name: 'name4',
  },
  {
    id: 6,
    label: 'choix6',
    name: 'name3',
  },
  {
    id: 7,
    label: 'choix7',
    name: 'name4',
  }
]

const App = () => {
  const [selectGenre, setSelectGenre] = useState('');
  const [checkedState, setCheckedState] = useState([]);
  const [arrayLabels, setArrayLabels] = useState([]);
  const [profil, setProfil] = useState({ genre: {}, profil: {} });


  const handleOnChange = (position, event) => {
    const { name } = event;

    //permet de mettre a false les états des checkboxs de même catégorie (name) => un peu comme le comportement des inputs de type radio
    // exemple : 
    // [X]name1(true) []name1(false) []name1(false) [X]name2(true)
    let updatedCheckedState;
    let nameIndex = [];
    let index = 0;
    for (let item of arrayLabels) {
      if (item.name === name && position !== index) {
        nameIndex.push(index);
      }
      if (!nameIndex.includes(position)) {
        updatedCheckedState = checkedState.map((item, index) => index === position ? !item : item);
        for (let ind of nameIndex) {
          updatedCheckedState[ind] = false;
        }
      }
      index++;
    }

    //permet d'obtenir un objet profil {"cat1":false, cat2 : true }
    let obj = {};
    index = 0;
    for (let item of arrayLabels) {
      obj[`${item.label}`] = updatedCheckedState[index];
      index++;
    }

    //met à jour le tableau d'états des checkboxs [false, false, true ect..] 
    setCheckedState(updatedCheckedState);
    //met à jour le profil avec l'obj profil
    setProfil({ ...profil, profil: obj })
  }

  //permet de choisir le genre
  const choiceGenre = (select) => {
    setSelectGenre(select);
    setProfil({ genre: select });
    //new array('longueurDuTableau').fill(false) va creer un tableau avec n élements de type boolean : 
    // exemple : new array(2).fill(false) => [false, false]
    setCheckedState(new Array(select === 'femme' ? labelsFemme.length : labelsHomme.length).fill(false));
    setArrayLabels(select === 'femme' ? labelsFemme : labelsHomme);
  }

  return (
    <>
      <label>
        Femme
        <input type='radio' name='genre' id='femme' onChange={(e) => choiceGenre(e.target.id)} />
      </label>
      <label>
        Homme
        <input type='radio' name='genre' id='homme' onChange={(e) => choiceGenre(e.target.id)} />
      </label>

      {selectGenre === 'homme' && <Homme labels={labelsHomme} checkedState={checkedState} handleOnChange={handleOnChange} />}
      {selectGenre === 'femme' && <Femme labels={labelsFemme} checkedState={checkedState} handleOnChange={handleOnChange} />}
    </>
  );
}

export default App;
