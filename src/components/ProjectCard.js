import React from 'react';
import Img from 'gatsby-image';

const ProjectCard = (props) => {
    const {title, description, img, liveURL, codeURL} = props.data
   
    const cardImage = props.images.allImageSharp.nodes.filter(i => i.fluid.originalName === img)[0]
    
    return (
        <div className="projectCard" style={{}}>
            <h1>{title}</h1>
            {cardImage ? <Img fluid={cardImage.fluid} style={{"width": "50%", "minWidth":"100px","borderRadius":"50%","marginBottom":".67em"}} /> : null}
            <span>{description}</span>
            <div className="projectButtons">
                {liveURL ? <a className="projectButton" href={liveURL}>Live Site</a> : null}
                {codeURL ? <a className="projectButton" href={codeURL}>Code</a> : null}
            </div>
        </div>
    )
}

export default ProjectCard;