// const isEven = (num) => {
//   const res = new Promise(
//     (res, rej) => {
//       // ... time consuming operation -->
//       if (num % 2 === 0) {
//         res('Its a even number');
//       } else {
//         rej("It's not a even number");
//       }
//     }
//   );
//   return res;
// };

// result.then((data) => {
//   console.log(data);
// });

// result.catch((error) => {
//   console.log(error);
// });

// const gettingIsEvenOrNot = async () => {
// try {
//   const result = await isEven(11);
//   console.log(result);
// } catch (failed) {
//   console.log(failed);
// }
// };

// gettingIsEvenOrNot();

// const getData = async () => {
//   const res = await fetch(

//   );

//  console.log(res);
// };

//  'https://jsonplaceholder.typicode.com/users'

const getData = async() => {
    const { data } = await axios(
        'https://reqres.in/api/users?page=2'
    );

    console.log(data.data);

    data.data.forEach((element) => {
        const card =
            document.createElement('div');
        //# <div></div>
        card.classList.add('card'); //  Styling
        // # <div class="card"></div>
        card.innerHTML = `<img class="img" src="${element.avatar}" /> 
    ${element.first_name} ${element.last_name}
    
    `;
        //# <div  class="card">${element.name}</div>
        const container =
            document.getElementById(
                'card-container'
            );
        container.appendChild(card);
    });
};

getData();