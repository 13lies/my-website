import "../static/css/platform-link.css"

interface link_params{
    link:string,
    image_url:string,
    platform_name:string,
    color_param:string
}

function Platform_Link({color_param,link,image_url,platform_name}:link_params){
    console.log(image_url)
    return(
    <div className="single-link">
        
        <a href={link} style={{color: color_param}}><img src={image_url} alt="logo" />{platform_name}</a>
    </div>
    )
}

export default Platform_Link