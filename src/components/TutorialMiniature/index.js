import './TutorialMiniature.css'

const TutorialMiniature = (props) =>{
    const {img, name} = props

    return(
      <div className='tutorial'>
        <img src={img} alt='Tutorial Miniature'></img>
        <h3 style={{margin: 0, width: '300px',overflow: 'hidden'}}>{name}</h3>
      </div>
    )
}
export default TutorialMiniature