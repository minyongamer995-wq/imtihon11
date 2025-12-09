const data = [
  {
    id: 1,
    name: "Inception",
    img: "https://static0.srcdn.com/wordpress/wp-content/uploads/2024/12/leonardo-dicaprio-in-an-inception-montage.jpg?w=1200&h=675&fit=crop",
    vaqti: "2 soat 28 daqiqa",
    reytingi: 8.8
  },
  {
    id: 2,
    name: "Interstellar",
    img: "https://avatars.mds.yandex.net/i?id=2b1692819f2e0ffe2ff2278b91e84c7f5c3225f1-4120434-images-thumbs&n=13",
    vaqti: "2 soat 49 daqiqa",
    reytingi: 8.6
  },
  {
    id: 3,
    name: "Avatar",
    img: "https://avatars.mds.yandex.net/i?id=3e41e7b7dcf51e6b7094eaeb6933f25f8dc2e4ca-10556007-images-thumbs&n=13",
    vaqti: "2 soat 42 daqiqa",
    reytingi: 7.8
  },
  {
    id: 4,
    name: "Avengers: Endgame",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Features113/v4/f4/67/02/f4670293-a66f-7248-5ce8-07aca38f42f0/pr_source.lsr/1200x630fa.png",
    vaqti: "3 soat 1 daqiqa",
    reytingi: 8.4
  },
  {
    id: 5,
    name: "Joker",
    img: "https://avatars.mds.yandex.net/i?id=a84a9c84882311231fa0736d132c722f4679d1a3-5304004-images-thumbs&n=13",
    vaqti: "2 soat 2 daqiqa",
    reytingi: 8.4
  },
  {
    id: 6,
    name: "The Dark Knight",
    img: "https://avatars.mds.yandex.net/i?id=17a9da7aeaa89d89fad2fe1c651aef7ae2027749-5099371-images-thumbs&n=13",
    vaqti: "2 soat 32 daqiqa",
    reytingi: 9.0
  },
  {
    id: 7,
    name: "Oppenheimer",
    img: "https://avatars.mds.yandex.net/i?id=6d51cdac8c75e08a30d857f95e1fc3600df731cb-4521347-images-thumbs&n=13",
    vaqti: "3 soat",
    reytingi: 8.5
  },
  {
    id: 8,
    name: "Dune",
    img: "https://i.ytimg.com/vi/d8pex7HnXc0/maxresdefault.jpg",
    vaqti: "2 soat 35 daqiqa",
    reytingi: 8.0
  },
  {
    id: 9,
    name: "Spider-Man: No Way Home",
    img: "https://i.ytimg.com/vi/TBr-SkyglIQ/maxresdefault.jpg",
    vaqti: "2 soat 28 daqiqa",
    reytingi: 8.2
  },
  {
    id: 10,
    name: "Fast & Furious 9",
    img: "https://i.ytimg.com/vi/QSQo5xJ3y8s/maxresdefault.jpg",
    vaqti: "2 soat 23 daqiqa",
    reytingi: 5.2
  },
  {
    id: 11,
    name: "Transformers: Rise of the Beasts",
    img: "https://avatars.mds.yandex.net/i?id=944737b739d201efcfaa55090c245298b60e2f0a-4079994-images-thumbs&n=13",
    vaqti: "2 soat 7 daqiqa",
    reytingi: 6.1
  },
  {
    id: 12,
    name: "Extraction 2",
    img: "https://avatars.mds.yandex.net/i?id=899d16252c5a5a5f3c08825f3d6bdb5faa50f059-13019720-images-thumbs&n=13",
    vaqti: "2 soat 2 daqiqa",
    reytingi: 7.0
  },
  {
    id: 13,
    name: "The Matrix",
    img: "https://avatars.mds.yandex.net/i?id=eb0d8dc6127a1d32b6ab01faa9f76ca12adcc789-9065942-images-thumbs&n=13",
    vaqti: "2 soat 16 daqiqa",
    reytingi: 8.7
  },
  {
    id: 14,
    name: "John Wick 4",
    img: "https://static0.srcdn.com/wordpress/wp-content/uploads/2023/09/keanu-reeves-looking-grave-in-john-wick-chapter-4.jpg?w=1200&h=675&fit=crop",
    vaqti: "2 soat 49 daqiqa",
    reytingi: 7.8
  },
  {
    id: 15,
    name: "The Lion King",
    img: "https://avatars.mds.yandex.net/i?id=7294f09bbfa42a96c923bc22295e62a13e2d28b6-10555711-images-thumbs&n=13  ",
    vaqti: "1 soat 58 daqiqa",
    reytingi: 8.5
  }
];


let div = document.querySelector('.box')
    let select = document.querySelector('select')


    let myFunction = (data)=>{
      div.innerHTML = ''
      data.map((item)=>{
        div.innerHTML += `
        <div class="box3">
        <img src="${item.img}" alt="">
        <p>${item.name}</p>
        <b>${item.id}</b>
        <p>${item.vaqti}</p>
        <p>${item.reytingi}</p>
        </div>  
        `
    })
    }
   
    select.addEventListener('change',()=>{
         if(select.value === 'bir'){
          data.sort((a,b)=> a.name.localeCompare(b.name))
         }else if (select.value === 'ikki'){
          data.sort((a,b)=> b.name.localeCompare(a.name))
         }else if(select.value === 'uch'){
          data.sort((a,b)=> a.reytingi - b.reytingi)
         }else if(select.value === 'tort'){
          data.sort((a,b)=> b.reytingi - a.reytingi)
         }
         myFunction(data)
    })



    let inp = document.querySelector('input')

    let btn = document.querySelector('.btn')

    btn.addEventListener('click', ()=>{
    

       let filtered = data.filter((item)=>{
        return item.name.toLocaleLowerCase().includes(inp.value.toLocaleLowerCase())
       })
       myFunction(filtered)
    })


    myFunction(data )