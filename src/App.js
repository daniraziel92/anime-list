import logo from './logo.svg';
import './App.css';
import ItemAnime from './components/ItemAnime/ItemAnime';
import React from 'react';
import Title from './components/Title/Title'

const sample = {
  mal_id: 1,
  url: "https://myanimelist.net/anime/1/Cowboy_Bebop",
  images: {
      jpg: {
          image_url: "https://cdn.myanimelist.net/images/anime/4/19644.jpg",
          small_image_url: "https://cdn.myanimelist.net/images/anime/4/19644t.jpg",
          large_image_url: "https://cdn.myanimelist.net/images/anime/4/19644l.jpg"
      },
      webp: {
          image_url: "https://cdn.myanimelist.net/images/anime/4/19644.webp",
          small_image_url: "https://cdn.myanimelist.net/images/anime/4/19644t.webp",
          large_image_url: "https://cdn.myanimelist.net/images/anime/4/19644l.webp"
      }
  },
  trailer: {
      youtube_id: "gY5nDXOtv_o",
      url: "https://www.youtube.com/watch?v=gY5nDXOtv_o",
      embed_url: "https://www.youtube.com/embed/gY5nDXOtv_o?enablejsapi=1&wmode=opaque&autoplay=1",
      images: {
          image_url: "https://img.youtube.com/vi/gY5nDXOtv_o/default.jpg",
          small_image_url: "https://img.youtube.com/vi/gY5nDXOtv_o/sddefault.jpg",
          medium_image_url: "https://img.youtube.com/vi/gY5nDXOtv_o/mqdefault.jpg",
          large_image_url: "https://img.youtube.com/vi/gY5nDXOtv_o/hqdefault.jpg",
          maximum_image_url: "https://img.youtube.com/vi/gY5nDXOtv_o/maxresdefault.jpg"
      }
  },
  approved: true,
  titles: [
      {
          type: "Default",
          title: "Cowboy Bebop"
      },
      {
          type: "Japanese",
          title: "カウボーイビバップ"
      },
      {
          type: "English",
          title: "Cowboy Bebop"
      }
  ],
  title: "Cowboy Bebop",
  title_english: "Cowboy Bebop",
  title_japanese: "カウボーイビバップ",
  title_synonyms: [],
  type: "TV",
  source: "Original",
  episodes: 26,
  status: "Finished Airing",
  airing: false,
  aired: {
      from: "1998-04-03T00:00:00+00:00",
      to: "1999-04-24T00:00:00+00:00",
      prop: {
          from: {
              day: 3,
              month: 4,
              year: 1998
          },
          to: {
              day: 24,
              month: 4,
              year: 1999
          }
      },
      string: "Apr 3, 1998 to Apr 24, 1999"
  },
  duration: "24 min per ep",
  rating: "R - 17+ (violence & profanity)",
  score: 8.75,
  scored_by: 936783,
  rank: 46,
  popularity: 43,
  members: 1813631,
  favorites: 80440,
  synopsis: "Crime is timeless. By the year 2071, humanity has expanded across the galaxy, filling the surface of other planets with settlements like those on Earth. These new societies are plagued by murder, drug use, and theft, and intergalactic outlaws are hunted by a growing number of tough bounty hunters.\n\nSpike Spiegel and Jet Black pursue criminals throughout space to make a humble living. Beneath his goofy and aloof demeanor, Spike is haunted by the weight of his violent past. Meanwhile, Jet manages his own troubled memories while taking care of Spike and the Bebop, their ship. The duo is joined by the beautiful con artist Faye Valentine, odd child Edward Wong Hau Pepelu Tivrusky IV, and Ein, a bioengineered Welsh Corgi.\n\nWhile developing bonds and working to catch a colorful cast of criminals, the Bebop crew's lives are disrupted by a menace from Spike's past. As a rival's maniacal plot continues to unravel, Spike must choose between life with his newfound family or revenge for his old wounds.\n\n[Written by MAL Rewrite]",
  background: "When Cowboy Bebop first aired in spring of 1998 on TV Tokyo, only episodes 2, 3, 7-15, and 18 were broadcast, it was concluded with a recap special known as Yose Atsume Blues. This was due to anime censorship having increased following the big controversies over Evangelion, as a result most of the series was pulled from the air due to violent content. Satellite channel WOWOW picked up the series in the fall of that year and aired it in its entirety uncensored. Cowboy Bebop was not a ratings hit in Japan, but sold over 19,000 DVD units in the initial release run, and 81,000 overall. Protagonist Spike Spiegel won Best Male Character, and Megumi Hayashibara won Best Voice Actor for her role as Faye Valentine in the 1999 and 2000 Anime Grand Prix, respectively. Cowboy Bebop's biggest influence has been in the United States, where it premiered on Adult Swim in 2001 with many reruns since. The show's heavy Western influence struck a chord with American viewers, where it became a \"gateway drug\" to anime aimed at adult audiences.",
  season: "spring",
  year: 1998,
  broadcast: {
      day: "Saturdays",
      time: "01:00",
      timezone: "Asia/Tokyo",
      string: "Saturdays at 01:00 (JST)"
  },
  producers: [
      {
          mal_id: 23,
          type: "anime",
          name: "Bandai Visual",
          url: "https://myanimelist.net/anime/producer/23/Bandai_Visual"
      }
  ],
  licensors: [
      {
          mal_id: 102,
          type: "anime",
          name: "Funimation",
          url: "https://myanimelist.net/anime/producer/102/Funimation"
      }
  ],
  studios: [
      {
          mal_id: 14,
          type: "anime",
          name: "Sunrise",
          url: "https://myanimelist.net/anime/producer/14/Sunrise"
      }
  ],
  genres: [
      {
          mal_id: 1,
          type: "anime",
          name: "Action",
          url: "https://myanimelist.net/anime/genre/1/Action"
      },
      {
          mal_id: 46,
          type: "anime",
          name: "Award Winning",
          url: "https://myanimelist.net/anime/genre/46/Award_Winning"
      },
      {
          mal_id: 24,
          type: "anime",
          name: "Sci-Fi",
          url: "https://myanimelist.net/anime/genre/24/Sci-Fi"
      }
  ],
  explicit_genres: [],
  themes: [
      {
          mal_id: 50,
          type: "anime",
          name: "Adult Cast",
          url: "https://myanimelist.net/anime/genre/50/Adult_Cast"
      },
      {
          mal_id: 29,
          type: "anime",
          name: "Space",
          url: "https://myanimelist.net/anime/genre/29/Space"
      }
  ],
  demographics: []
}

const limit = 25;

function App() {
  const [listAnime,setListAnime] =  React.useState([]);
  const [displayAnime,setDisplayAnime] =  React.useState([]);
  const[search, setSearch] = React.useState("");
  const [page, setPage] = React.useState(1);
  const offSet = page*limit;
  const inputFilter = React.useRef(null);

const fetchData = () =>{
    fetch("https://api.jikan.moe/v4/anime?limit="+limit+"&page="+page)
    .then((response) => response.json())
    .then((responseJson) => {
        setListAnime(responseJson.data);
        setDisplayAnime(responseJson.data);})
}

  React.useEffect( () => {
    fetchData();
  },[page]);

  React.useEffect( ()=>{
    if(inputFilter && inputFilter.current){
        inputFilter.current.addEventListener('keyup',(e)=> {setSearch(e.target.value);})
    }
    }
  ,[])

  React.useEffect(() =>{
    const filteredData = listAnime.filter((anime) =>{ 
    return anime.title.toLowerCase().includes(search.toLowerCase()); 
    });
  setDisplayAnime(filteredData);
},[search]);

  const next = ()=>{
    console.log("cualquier cosa");
    setPage(page => page+1);
    
  }
  console.log(page);
  return (
    <div className="App">
      <Title text ="Anime-List"/>
      <input ref={inputFilter}></input>
      {displayAnime.map(anime => <ItemAnime 
          name={anime.title} 
          synopsis={anime.synopsis} 
          image={anime.images.jpg.image_url} 
          year={anime.year} 
          status = {anime.status}
          rating={anime.rating}/>
        )
      }
      <button onClick={next}>Next</button>


    </div>
  );
}

export default App;
