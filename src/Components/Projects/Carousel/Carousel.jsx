import * as S from "../Projects_style.jsx"
export default function Carousel({children}){
    const Carrosel = {
        width: '75vw',
        height: '80vh'
    }
    const configCarousel = {
        renderBottomCenterControls: false,
        slidesToShow: 1,
        style: Carrosel,
        wrapAround: true,
        speed: 900,
        defaultControlsConfig: {
            nextButtonText: '»',
            nextButtonStyle: {
                position:"relative",
                top:"-6.5vh",
                right: '3.8vw',
                color: "#00B100",
                fontSize: '192px',
                backgroundColor: 'transparent',
                width: '4.5vw',
                height: '8vh',
                fontFamily:"Inconsolata"
            },
            prevButtonText: '«',
            prevButtonStyle: {
                position:"relative",
                top:"-6.5vh",
                color: "#00B100",
                fontSize: '192px',
                backgroundColor: 'transparent',
                width: '4.5vw',
                height: '8vh', 
                fontFamily:"Inconsolata"     
            },
        }
    }
    return(
        <S.Carrosel {...configCarousel} >
        {children}
        </S.Carrosel>
    )
}