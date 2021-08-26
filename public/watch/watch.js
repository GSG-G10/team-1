let idWatch = location.pathname;
let id = idWatch.split("/")[2];

fetch(`/watch/data/${id}`)
  .then((response) => response.json())
  .then((res) => {
    console.log("response", res);
    sendWatch(res);
  })
  .catch((err) => console.log(err));

function sendWatch(data) {
  const main = document.querySelector("main");
  main.innerHTML = `
    <div class="info_video">
        <div class="avatar_chanal">
            <img src="${data[0].img_profile}">
        </div>
        <div class="titles">
            <span class="title_video">${data[0].title}</span>
            <span>${data[0].created_by}</span>
            <span>${new Date(data[0].created_at).getDate()}, ${
    new Date(data[0].created_at).getMonth() + 1
  }, ${new Date(data[0].created_at).getFullYear()}</span>
        </div>
        </div>
        <div class="player_video">
            <embed src="${data[0].url}" type="">
        </div>
        <div class="descrption">
        <span>${data[0].description}</span>
    </div>
`;
}
