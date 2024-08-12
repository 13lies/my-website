
import Slider from '@mui/material/Slider';
import image2 from "../static/pictures/image2.png";
import me from "../static/pictures/me.png";
import onmyshit from "../static/pictures/onmyshit.png";
import "../static/css/music-links.css";
import Platform_Link from "./PLATFORM-LINK";
import { useState } from "react";
import Navbar from "../COMPONENTS/NAVBAR";

function Music_Links() {
    const [value, setValue] = useState(90);
    const [opacity,setOpacity] = useState(0.9);

    const handleChange = (_: Event, newValue: number | number[]) => {
        setValue(newValue as number);
        setOpacity((newValue as number)*0.01)
    };


    return (
        <div className="music-links prevent-select">
            <div className="bg">
                <div className="bg-bg"></div>
                <img src={image2} alt="image" className="bg-img image2" />
                {/* <img src={image} alt="image" className="bg-img image" /> */}
                <img src={me} alt="image" className="bg-img image me" style={{opacity:opacity}} />
                <img src={onmyshit} alt="image" className="bg-img image onmyshit" />

            </div>
           
            <div className="content-of-music-links">
                <Navbar/>
                <h1 className="h11111">My Platforms</h1>
                <div className="slider-----">
                    <Slider color="secondary" className="slider" aria-label="Volume" value={value} onChange={handleChange} />
                    <p>☝️MAKE ME DISSAPEAR☝️</p><img src="..\static\pictures\arrow-up-solid.svg" alt="" />
                </div>
                <div className="links">
                    <Platform_Link
                        link="https://open.spotify.com/artist/5kYUR9MTvOnYxr2yUCJumn?si=uZkpyq0-R7e0zZT381T0Ug"
                        platform_name="Spotify"
                        image_url="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png"
                        color_param="#1db954"
                    />
                    <Platform_Link
                        link="https://soundcloud.com/lubchik?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                        platform_name="SoundCloud"
                        image_url="https://cdn.icon-icons.com/icons2/2972/PNG/512/soundcloud_logo_icon_186893.png"
                        color_param="#ff5500"
                    />
                    <Platform_Link
                        link="https://www.youtube.com/channel/UC9xQ_oDw88vttwAY23LLPMg"
                        platform_name="YouTube"
                        image_url="https://static.vecteezy.com/system/resources/thumbnails/023/986/480/small_2x/youtube-logo-youtube-logo-transparent-youtube-icon-transparent-free-free-png.png"
                        color_param="#FF0000"
                    />
                    <Platform_Link
                        link="https://music.youtube.com/channel/UC9xQ_oDw88vttwAY23LLPMg?si=GUUwK-Gh7d4oeYVw"
                        platform_name="YouTube Music"
                        image_url="https://static.vecteezy.com/system/resources/previews/017/395/384/non_2x/youtube-music-icon-free-png.png"
                        color_param="#FF0000"
                    />
                    <Platform_Link
                        link="https://music.apple.com/us/artist/13lies/1702846137"
                        platform_name="Apple Music"
                        image_url="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Apple_Music_icon.svg/542px-Apple_Music_icon.svg.png?20221219073958"
                        color_param="#f94c57"
                    />
                    <h2 className="my-h2">
                        {/* On other platforms also, but I can't be bothered to add them. */}
                    </h2>
                    
                </div>
            </div>
        </div>
    );
}

export default Music_Links;
