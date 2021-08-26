const main = document.querySelector('main')
const myVideos = document.querySelector('.my_videos')
const mySaved = document.querySelector('.my_Saved')
const addVideo = document.querySelector('.add_video')

sendData('myVideos')

myVideos.addEventListener('click', ()=>{
    removeChild(main)
    sendData('myVideos')

})

mySaved.addEventListener('click', ()=>{
    removeChild(main)
    sendData('mySaved')

})

addVideo.addEventListener('click', ()=>{
    removeChild(main)

    main.innerHTML = `
    <div class="form_add_video">
        <form action="/add-video" method="POST">
            <div class="bowl_filed filed_title">
                <input type="text" name="title" class="title" placeholder="title">
            </div>
            <div class="bowl_filed filed_category">
                <select name="category" class="category">
                    <option value="" selected disabled>Category</option>
                    <option value="mathematics">Mathematics</option>
                    <option value="business">Business</option>
                    <option value="datascience">Data Science</option>
                    <option value="science">Science</option>
                    <option value="art">Art</option>
                    <option value="health">Health</option>
                    <option value="computerscience">Computer Science</option>
                </select>
            </div>
            <div class="bowl_filed filed_descrption">
                <textarea name="description_video" class="description_video" placeholder="description"></textarea>
            </div>
            <div class="bowl_filed filed_url_video">
                <input type="url" name="url_video" class="url_video" placeholder="URL for video">
            </div>
            <div class="bowl_filed filed_url_image">
                <input type="url" name="url_image" class="url_image" placeholder="URL for image">
            </div>
            <div class="btn_send_video">
                <button class="btn_add">Publish</button>
            </div>
        </form>
    </div>
`
const btn_add = document.querySelector('.btn_add')

const isAbsoluteUrl = url => /^[a-z][a-z0-9+.-]*:/.test(url);

btn_add.addEventListener('click', (e)=>{
    const title = document.querySelector('.title').value
    const category = document.querySelector('.category').value
    const descriptionVideo = document.querySelector('.description_video').value
    const urlVideo = document.querySelector('.url_video').value
    const urlImage = document.querySelector('.url_image').value
    // //////////
    const filed_title = document.querySelector('.filed_title')
    const filed_url_image = document.querySelector('.filed_url_image')
    const filed_url_video = document.querySelector('.filed_url_video')
    const filed_descrption = document.querySelector('.filed_descrption')
    const filed_category = document.querySelector('.filed_category')
    e.preventDefault()
    let status = {
        title: false,
        category: false,
        descriptionVideo: false,
        urlVideo: false,
        urlImage: false,
    }
    if(!title){
        filed_title.classList.add('error')
    } else {
        filed_title.classList.remove('error')
        status.title = true
    }
    if(!category){
        filed_category.classList.add('error')
    } else {
        filed_category.classList.remove('error')
        status.category = true
    }
    if(!descriptionVideo){
        filed_descrption.classList.add('error')
    } else {
        filed_descrption.classList.remove('error')
        status.descriptionVideo = true
    }
    if(!urlVideo){
        filed_url_video.classList.add('error')
    } else {
        if( isAbsoluteUrl(urlVideo)){
            filed_url_video.classList.remove('error')
        status.urlVideo = true
    }
    }
    if(!urlImage){
        filed_url_image.classList.add('error')
    } else {
        if( isAbsoluteUrl(urlImage)){
            filed_url_image.classList.remove('error')
            status.urlImage = true
        }
    }

if( status.title &&  status.category &&  status.descriptionVideo && status.urlVideo && status.urlImage){
    fetch("/add-video", {
        method: "POST",
        headers: {"Content-Type": "application/json; charset=utf-8"},
        body: JSON.stringify({
             title,
             category,
             descriptionVideo,
             urlVideo,
             urlImage,
        })
        })
    .then(response => response.json())
    .then(res => console.log("response", res))
    .catch(err => console.log(err));

    location.assign('/profile')
}

})
})




function sendData(name){
    for (let i = 0; i < 25; i++) {
        main.innerHTML += `
    <div class="card_video_" data-id="${i}">
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
                <span>${name}</span>
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



// for remove all content main
function removeChild(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}