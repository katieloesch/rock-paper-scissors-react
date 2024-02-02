import { FaRegHandPaper, FaRegHandRock, FaRegHandScissors } from 'react-icons/fa'

export const options = [
    {
      name: 'rock',
      icon: (<FaRegHandRock size={60} />),
      label: 'Rock'
    },{
      name:'paper',
      icon: (<FaRegHandPaper size={60} />),
      label: 'Paper'
    }, {
      name: 'scissors',
      icon: (<FaRegHandScissors size={60} />),
      label: 'Scissors'
  }
];