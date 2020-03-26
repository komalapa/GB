function youtube(){
    let videos= document.querySelectorAll('[id=video-title-link]');
    let links=[];
    videos.forEach(video => links.push(video.href));
    return links;
}
youtube();

function students(){
    let studentsRaw = document.getElementsByClassName("mates-list__mate-name-block");
    let students=[];
    for (let i in studentsRaw){
        students[studentsRaw[i].text]=studentsRaw[i].href;
    }
    return students;
}

students();