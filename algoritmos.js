function adicionarNaLista() {
  let valor = document.getElementById("valor").value;
  let list = document.getElementById("list");
  let item = document.createElement("li");
  item.innerHTML = valor;
  list.appendChild(item);
}

function misturarLista() {
  let list = document.getElementById("list");
  let items = list.querySelectorAll("li");
  let shuffledItems = Array.from(items).sort(() => 0.5 - Math.random());
  items.forEach((item) => item.remove());
  shuffledItems.forEach((item) => list.appendChild(item));
}

const bubbleSort = (vetor) => {
  let len = vetor.length;
  let foiTrocado = false;

  for (let i = 0; i < len; i++) {
    foiTrocado = false;
    for (let j = 0; j < len; j++) {
      if (vetor[j] > vetor[j + 1]) {
        let temp = vetor[j];
        vetor[j] = vetor[j + 1];
        vetor[j + 1] = temp;
        foiTrocado = true;
      }
    }
    if (!foiTrocado) {
      break;
    }
  }

  return vetor
};

const selectionSort = (vetor) => {
  let len = vetor.length;

  for (let i = 0; i < len; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (vetor[j] < vetor[minIndex]) {
        minIndex = j;
      }
    }
    let temp = vetor[i];
    vetor[i] = vetor[minIndex];
    vetor[minIndex] = temp;
  }

  return vetor
};

const quickSort = (vetor) => {
  let len = vetor.length;

  if (len < 2) {
    return vetor;
  }

  const pivot = vetor[0];
  const left = [];
  const right = [];

  for (let i = 1; i < len; i++) {
    const element = vetor[i];
    if (element < pivot) {
      left.push(element);
    } else {
      right.push(element);
    }
  }

  const leftSorted = quickSort(left);
  const rightSorted = quickSort(right);

  return leftSorted.concat([pivot], rightSorted);
};

const ordenar = () => {
  let list = document.getElementById("list");
  let items = list.querySelectorAll("li");
  let arr = Array.from(items).map((item) => parseInt(item.textContent));
  var select = document.getElementById("sort-type");
  var value = select.value;
  let ordernado

  switch (value) {
    case "bubble":
      ordernado = bubbleSort(arr);
      break;

    case "selection":
      ordernado = selectionSort(arr);
      break;

    case "quick":
      ordernado = quickSort(arr)
      break;
  }

  items.forEach((item) => item.remove());
  ordernado.map((number) => {
    let item = document.createElement("li");
    item.innerHTML = number;
    list.appendChild(item);
  });
};
