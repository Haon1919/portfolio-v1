import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default class ImageSlider extends Component {
    state = {
        index: 0,
        transformOffset: 'translateX(0px)'
    }

    moveSlider(i){
        let { index } = this.state;
        let images = this.props.images;
        if(index === 0 && i !== 1 && i !== index){
            this.setState({transformOffset: `translateX(${-200*(images.length-1)}px)`, index: images.length-1});
        } 
        else if(i === images.length && i !== index){
            this.setState({transformOffset: 'translateX(0px)', index: 0});
        } 
        else{
            this.setState((prevState)=>{
                return {
                       transformOffset: `translateX(${-200*i}px)`,
                       index: i
                }
            });
        }
    }
    render() {
        let {index, transformOffset} = this.state;
        let {images} = this.props;
        const imageBlockStyles = {'transform' : transformOffset};
        return (
            <section className = 'imageSlider'>
                <div className ='imageContainer'>
                    <div className='imageBlock' style={imageBlockStyles}>
                        {
                            images.map((image, i) => <img alt="" key={i} src={image}/>)
                        }
                    </div>
                </div>
                <div className='positionalDots'>
                    {
                        images.map((image, i) => {
                            let status = index === i ? 'selected' : 'dormant'
                            return(
                                <span key={i} onClick={() => this.moveSlider(i)} className={`dot ${status}`} />
                            )
                        })
                    }
                </div>
                <div className = 'buttons'>
                    <Button direction = 'previous' moveSlider={() => this.moveSlider(index-1)}/>
                    <Button direction = 'next' moveSlider={() => this.moveSlider(index+1)}/>
                </div>
            </section>
        );
    }
}

// imageSlider.PropTypes = {
  
// }

