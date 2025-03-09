// ++++++++++Axios++++++++++
// it is a libarary to make HTTPS requests. it more better and efficient to send our requests.

let hheading=document.querySelector('h1')
let btn= document.querySelector('button')
let url = "https://catfact.ninja/fact";

btn.addEventListener('click', async()=>{
    let fact = await getFacts()
    console.log(fact);
    
})


async function getFacts() {
    try {
        let result = await axios.get(url);
        return (result.data.fact);
        
    } catch (error) {
        console.log(error);
        return 'no fact found'
    }
}