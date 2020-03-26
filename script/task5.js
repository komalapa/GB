function youtube(){
    let videos= document.querySelectorAll('[id=video-title-link]');
    let links=[];
    //for (let i in videos){
    //    links[i]=videos[i].href;
    //}
    videos.forEach(video => links.push(video.href));
    return links;
}
youtube();