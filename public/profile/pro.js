const main = document.querySelector("main");
const myVideos = document.querySelector(".my_videos");
const mySaved = document.querySelector(".my_Saved");
const addVideo = document.querySelector(".add_video");

fetch(`/profile/myvideo`)
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    console.log(data);
    sendData(data);
  })
  .catch(console.log);

myVideos.addEventListener("click", () => {
  removeChild(main);

  fetch(`/profile/myvideo`)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log(data);
      sendData(data);
    })
    .catch(console.log);
});

mySaved.addEventListener("click", () => {
  removeChild(main);
});

addVideo.addEventListener("click", () => {
  removeChild(main);

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
`;
  const btn_add = document.querySelector(".btn_add");

  const isAbsoluteUrl = (url) => /^[a-z][a-z0-9+.-]*:/.test(url);

  btn_add.addEventListener("click", (e) => {
    const title = document.querySelector(".title").value;
    const category = document.querySelector(".category").value;
    const descriptionVideo = document.querySelector(".description_video").value;
    const urlVideo = document.querySelector(".url_video").value;
    const urlImage = document.querySelector(".url_image").value;
    // //////////
    const filed_title = document.querySelector(".filed_title");
    const filed_url_image = document.querySelector(".filed_url_image");
    const filed_url_video = document.querySelector(".filed_url_video");
    const filed_descrption = document.querySelector(".filed_descrption");
    const filed_category = document.querySelector(".filed_category");
    e.preventDefault();
    let status = {
      title: false,
      category: false,
      descriptionVideo: false,
      urlVideo: false,
      urlImage: false,
    };
    if (!title) {
      filed_title.classList.add("error");
    } else {
      filed_title.classList.remove("error");
      status.title = true;
    }
    if (!category) {
      filed_category.classList.add("error");
    } else {
      filed_category.classList.remove("error");
      status.category = true;
    }
    if (!descriptionVideo) {
      filed_descrption.classList.add("error");
    } else {
      filed_descrption.classList.remove("error");
      status.descriptionVideo = true;
    }
    if (!urlVideo) {
      filed_url_video.classList.add("error");
    } else {
      if (isAbsoluteUrl(urlVideo)) {
        filed_url_video.classList.remove("error");
        status.urlVideo = true;
      }
    }
    if (!urlImage) {
      filed_url_image.classList.add("error");
    } else {
      if (isAbsoluteUrl(urlImage)) {
        filed_url_image.classList.remove("error");
        status.urlImage = true;
      }
    }

    if (
      status.title &&
      status.category &&
      status.descriptionVideo &&
      status.urlVideo &&
      status.urlImage
    ) {
      fetch("/add-video", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify({
          title,
          category,
          descriptionVideo,
          urlVideo,
          urlImage,
        }),
      })
        .then((response) => response.json())
        .then((res) => console.log("response", res))
        .catch((err) => console.log(err));
      location.assign("/home");
    }
  });
});

function sendData(data) {
  for (let i = 0; i < data.length; i++) {
    main.innerHTML += `
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
                <span class="date_post_video">${new Date(
                  data[i].created_at
                ).getDate()}, ${
      new Date(data[i].created_at).getMonth() + 1
    }, ${new Date(data[i].created_at).getFullYear()}</span>
            </div>
            <div class="counter_view_video">
                <span>${Math.floor(22.4 * (data[i].id * 1.2))}k view</span>
            </div>
        </div>
    </div>
</a>
        `;
  }
}

// for remove all content main
function removeChild(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
