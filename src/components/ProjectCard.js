import React from 'react';
import Img from 'gatsby-image';

const ProjectCard = (props) => {
    const {title, description, img, liveURL, codeURL} = props.data
   
    const cardImage = props.images.allImageSharp.nodes.filter(i => i.fluid.originalName === img)[0]
    
    const showModal = () => {
        document.getElementById(`${title}Modal`).style.display = "initial"
        var allBodyChildren = document.getElementsByClassName('projectCard');
        for(let i = 0; i < allBodyChildren.length; i++){
            allBodyChildren[i].style.filter = 'blur(20px)'
        }
        document.getElementById(`${title}ID`).style.filter = 'none'
    }
    const closeModal = () => {
        document.getElementById(`${title}Modal`).style.display = "none"
        var allBodyChildren = document.getElementsByClassName('projectCard');
        for(let i = 0; i < allBodyChildren.length; i++){
            allBodyChildren[i].style.filter = 'none'
        }
    }

    
    return (
        <div className="projectCard" id={`${title}ID`} style={{}}>
            <h1>{title}</h1>

            {cardImage && !props.modal && <Img fluid={cardImage.fluid} objectFit="scale-down" style={{"width": "18vw", "height": "18vw", "minWidth":"100px","borderRadius":"50%","marginBottom":".67em"}} /> }
            {cardImage && props.modal && <div onClick={()=>showModal()}><Img fluid={cardImage.fluid} objectFit="scale-down" style={{"width": "18vw", "height": "18vw", "minWidth":"100px","borderRadius":"50%","marginBottom":".67em"}} /></div> }

            <span>{description}</span>
            <div className="projectButtons">
                {liveURL ? <a className="projectButton" href={liveURL}>Live Site</a> : null}
                {codeURL ? <a className="projectButton" href={codeURL}>Code</a> : null}
            </div>
            { props.modal &&
                <div className="modalBG" id={`${title}Modal`}>
                    <div className="modal">
                    <div className="closeModal" onClick={() => closeModal()}>X</div>
                        <Img fluid={cardImage.fluid} objectFit="cover" />
                    </div>
                </div>
            }
        </div>
    )
}

export default ProjectCard;