// ++++++++++Axios++++++++++
// it is a libarary to make HTTPS requests. it more better and efficient to send our requests.

// const { log } = require("console");

// // random cat facts

// let hheading=document.querySelector('h1')
// let btn= document.querySelector('button')
// let url = "https://catfact.ninja/fact";

// btn.addEventListener('click', async()=>{
//     let fact = await getFacts()
//     console.log(fact);
//     let p = document.querySelector('p').innerText=fact
// })

// async function getFacts() {
//     try {
//         let result = await axios.get(url);
//         return (result.data.fact);

//     } catch (error) {
//         console.log(error);
//         return 'no fact found'
//     }
// }

// random dog images+++++

// let heading = document.querySelector("h1");
// let btn2 = document.querySelector("#dog-btn");
// let url2 = "https://dog.ceo/api/breeds/image/random";

// btn2.addEventListener("click", async () => {
//   let link = await getImage();
//   let img = document.querySelector("img");
// img.setAttribute("src",link)

// });

// async function getImage() {
//   try {
//     let result = await axios.get(url2);
//     return result.data.message;
//     // console.log(result);
//   } catch (error) {
//     console.log(error);
//     return "no Image found";
//   }
// }

// ++++++++=sending headers with axios+++++++++

// basically is use for change the api response formate like html to plain text or json or vice-versa

// const url = "https://icanhazdadjoke.com/";

// async function getJokes() {  
//   try {
//     const con = { headers: { Accept: "application/json" } };
//     let res = await axios.get(url,con);
//     console.log(res.data.joke);
//   } catch (err) {
//     console.log(err);
//   }
// }


// +++++++++updating the query Strings with axios++++++++


