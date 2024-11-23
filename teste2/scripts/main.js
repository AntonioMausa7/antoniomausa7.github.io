document.querySelector('img').addEventListener('click', () =>{
    alert('Não clique no totó!');
})

const myimage = document.querySelector('img');

myimage.onclick = () =>{
    const mysrc = myimage.getAttribute('src')
    if(mysrc == 'imagens/lessie.png'){
        myimage.setAttribute('src','imagens/lessie2.png');
    }else{
        myimage.setAttribute('src','imagens/lessie.png');
    }
}

let mybutton = document.querySelector('button');
let myheading = document.querySelector('h1');

function setUserName(){
    const uname = window.prompt('Digite seu nome');
    if (!uname) {
        setUserName();
      } else {
        localStorage.setItem('name',uname)
        myheading.textContent = `${uname}, veja sobre a Lessie:`
      }
    }
    

if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem('name');
    myheading.textContent = `${storedName}, continue vendo sobre a Lessie:`;
  }
  mybutton.onclick = () =>{
    setUserName();
  }