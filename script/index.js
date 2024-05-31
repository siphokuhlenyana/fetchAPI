// //   fetch data from api
  
// //   fetch("https://randomuser.me/api?results=100")
// // //   convert data to json data
// //   .then(data =>data.json())
// // // now we can do whatever we want with
// //   .then(data => console.log(data))
// //   .catch(objerror=> {
// // throw new Error('mehhhh')
// //     }
// //   )


// // Using promises
// // // async and await 
// // let info =null
// // async function fetchData(){
// //    var data= await fetch('https://randomuser.me/api?results=100')
// //    let ntando = await data.json()
// //   info =ntando.results
// // }
// // fetchData()

// // // Destructing 
// // // for obj
// // let person = {
// //   name:"bob",
// //   age:40
// // }
// // let {name} =person
// // let {age} =person
// // // console.log(name)

// // // for arrays 
// // let people=["bob","john","garth"]
// // let [a,b,c]=people
// // console.log(second)


// // Simple but long steps to fetch data 
// // async function fetchData(){
// //   let data =await fetch('https://randomuser.me/api?results=10')
// //   let {results} = await data.json()
// //   console.log(results)
// // }
// // fetchData()

// // another way of fetching data 
// let result
// async function fetchInfo(){
  
//   let {results} = await (await fetch('https://randomuser.me/api?results=10')).json();
//   result= results
//   console.log(results)
//   writeData()
// }
// fetchInfo()
// let tbody =document.querySelector('tbody')
// function writeData(){

// result.forEach(item => {
//   tbody.innerHTML += `<tr>
      
//           <td>${item.id.value}</td>
//           <td>${item.name.first}</td>
//           <td>${item.name.last}</td>
//           <td>${item.location.city}</td>
//           <td><img src="${item.picture.medium}"></td>
//           <td>${item.dob.age}</td>
//           <td>${item.dob.date}</td>


//       </tr>  
//       `
// })

// }
// // rest operator 
// function sum (...theArgs){
// let total =0;
// for(const arg of theArgs){
//   total +=arg
// }
// return total;
// }
// console.log(sum(5,2,1));
// // Expected output:8

// function moreArgs(a,b, ...otherArgs){
//   console.log(a);
//   console.log(b);
//   console.log(otherArgs);
// }
// moreArgs(10,9,3,5,7,9,8);

// //Default parameter 
// function multi(a,b=2){
//  return a*b
// }
// console.log('Multiply :'+multi(5));
const books = [  {    title: "The Great Gatsby",    author: "F. Scott Fitzgerald",    year: 1925,    genre: "Literary Fiction",    pages: 180,    publisher: "Charles Scribner's Sons",    isbn: "978-0743273565"  },  {    title: "To Kill a Mockingbird",    author: "Harper Lee", 
   year: 1960,    genre: "Southern Gothic",    pages: 281,    publisher: "J. B. Lippincott & Co.",    isbn: "978-0446310789"  },  {    title: "1984",    author: "George Orwell",    year: 1949,    genre: "Dystopian Fiction",    pages: 328,    publisher: "Secker & Warburg",    isbn: "978-0451524935"  },   
   {    title: "Pride and Prejudice",    author: "Jane Austen",    year: 1813,    genre: "Romance",    pages: 279,    publisher: "Thomas Egerton",    isbn: "978-0141439513"  },  {    title: "The Catcher in the Rye",    author: "J.D. Salinger",    year: 1951,    genre: "Coming-of-age Fiction",    pages: 214,   
   publisher: "Little, Brown and Company",    isbn: "978-0316769488"  }];






   let tbody=document.querySelector('tbody')
   function writeOn(){
    books.map(item =>{
      tbody.innerHTML += `<tr>

          <td>${item.title}</td>
          <td>${item.author}</td>
          <td>${item.year}</td>
          <td>${item.genre}</td>
          <td>${item.pages}</td>
          <td>${item.publisher}</td>
          <td>${item.isbn}</td>
          </tr>
          `
      
    })
   }
   writeOn()


btn=document.querySelector('button')

let input=document.querySelector('input')
let book = books.includes(input.textContent)


btn.addEventListener('click',searchBook)
let body=document.querySelector('tbody')
function writeData(){
   
  book.map(item =>{
    body.innerHTML += `<tr>
       
    <td>${item.title}</td>
    <td>${item.author}</td>
    <td>${item.year}</td>
    <td>${item.genre}</td>
    <td>${item.pages}</td>
    <td>${item.publisher}</td>
    <td>${item.isbn}</td>
  
  
        </tr>  
        `
  })
  searchBook()
}
writeData()

function searchBook(books){
  
  if(input.textContent === true){
   for(book of books){
     books.map().filter(book=> input.textContent==book)
    console.log(book)
   }
  } else{
    alert ('Write the name of the book correctly / We do not have the book you are looking for ')
  }
  writeData()
}
searchBook()
//   async function fetchInfo(){
//   let data = await fetch(books)
//   let {books}= await data.json
//   console.log(books);
//    writeOn()
// }
// fetchInfo()