import ProfilePic from './assets/downloadsolo.jpg'
function Card(){
    return(
        <div className='Card'>
            <img className='Card-img' src={ProfilePic} alt="noething to display">
            </img>
            <h2 className='Card-text' style={{color:'cadetblue'}}>
                 jin-Woo
            </h2>
        </div>
    );
}
export default Card