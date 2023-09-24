const make_album = (artist:string,title:string,tracks?: number) => {
    let album = {
        artist_name : artist,
        album_title : title,
        album_track : tracks
        
    }
    return album;
}

let artist1 = make_album("Atif Aslam", "Laila Majnu", 5)
let artist2 = make_album("Ed Sheeran","Divide",12)
let artist3 = make_album("Shuja Haider", "Ru-Ba-Ru")

console.log(artist1)
console.log(artist2)
console.log(artist3)