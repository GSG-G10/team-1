const bodyCardsVideo = document.querySelector('.body_cards_video')
let countIdVideo = 0

sendData()
window.addEventListener('scroll',()=>{
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement
    if(clientHeight + scrollTop >= scrollHeight - 20){
        sendData()
        routerToVideo()
    }
})

function sendData(){
    for (let i = 0; i < 25; i++) {
        bodyCardsVideo.innerHTML += `
    <div class="card_video_" data-id="${countIdVideo++}">
        <div class="bacg_img_video">
            <img src="https://assets3.thrillist.com/v1/image/2855068/1200x630/flatten;crop_down;jpeg_quality=70">
        </div>
        <div class="title_video" dir="rtl">
            <span> الحياة أمل 🎵 اغنية عربية رائعة ومؤثرة | AMV | 🎵 | IZZ ft. Emy Hetari || لا تفوتك</span>
        </div>
        <div class="info_Chanal_video">
            <div class="img_chanal_video">
                <img src="https://animeinterface.com/storage/images/1628237151_623aa8f9933ee9a286871bf6e0782538.jpg">
            </div>
            <div class="title_chanal_name">
                <span>Div Luffy chan</span>
                <span class="date_post_video">before 3 day</span>
            </div>
            <div class="counter_view_video">
                <span>222.4k</span>
            </div>
        </div>
    </div>
        
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

