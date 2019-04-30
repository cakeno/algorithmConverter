const unit = {

  1: 'I',
  2: 'II',
  3: 'III',
  4: 'IV',
  5: 'V',
  6: 'VI',
  7: 'VII',
  8: 'VIII',
  9: 'IX'
};

const dozen = {

  1: 'X',
  2: 'XX',
  3: 'XXX',
  4: 'XL',
  5: 'L',
  6: 'LX',
  7: 'LXX',
  8: 'LXXX',
  9: 'XC'
};

const hundred = {

  1: 'C',
  2: 'CC',
  3: 'CCC',
  4: 'CD',
  5: 'D',
  6: 'DC',
  7: 'DCC',
  8: 'DCCC',
  9: 'CM'
};

const thousand = {

  1: 'M',
  2: 'MM',
  3: 'MMM'
};


function intToRoman (number) {

  let arr = number.toString().split('').filter(Number);

  if (arr.length === 1) {

    return unit[arr[0]];

  } else if (arr.length === 2) {

    return dozen[arr[0]] + unidade[arr[1]];

  } else if (arr.length === 3) {

    return hundred[arr[0]] + dozen[arr[1]] + unidade[arr[2]];

  } else if (arr.length === 4) {

    return thousand[arr[0]] + hundred[arr[1]] + dozen[arr[2]] + unit[arr[3]];

  }

}


