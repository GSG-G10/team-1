const bodyCardsVideo = document.querySelector('.body_cards_video')
let page = 0

fetchGetData(page)

window.addEventListener('scroll',()=>{
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement
    if(clientHeight + scrollTop >= scrollHeight - 20){
        page++
        fetchGetData(page)
        routerToVideo()
    }
})

function fetchGetData(page){
    fetch(`/home/getvideo/:${page}`)
    .then(data =>{return data.json()})
    .then(data=>{
        console.log(data);
    sendData(data)

    })
    .catch(console.log)
}


function sendData(data){
    for (let i = 0; i < data.length; i++) {
        bodyCardsVideo.innerHTML += `
<a class="linked_card_all" href="/watch/${data[i].id}">
    <div class="card_video_" data-id="${data[i].id}">
        <div class="bacg_img_video">
                <img src="${data[i].img}">
        </div>
        <div class="title_video" dir="rtl">
            <span>${data[i].title}</span>
        </div>
        <div class="info_Chanal_video">
            <div class="img_chanal_video">
                <img src="${data[i].img_profile}">
            </div>
            <div class="title_chanal_name">
                <span>${data[i].created_by}</span>
                <span class="date_post_video">${new Date(data[i].created_at).getDate()}, ${new Date(data[i].created_at).getMonth() +1 }, ${new Date(data[i].created_at).getFullYear()}</span>
            </div>
            <div class="counter_view_video">
                <span>${(Math.floor(22.4 * (data[i].id *1.2)))}k view</span>
            </div>
        </div>
    </div>
</a>
        `
        }
}

routerToVideo()
function routerToVideo(){
    const cardVideo_ = document.querySelectorAll('.card_video_')
    cardVideo_.forEach(watch=>{
        watch.addEventListener('click', ()=>{
            console.log(watch.getAttribute('data-id'));
        })
    })
}

