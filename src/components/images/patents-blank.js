const { h, Component } = require('preact');

const ImageHolder = require('../templates/image-holder');
const patentSVG = require('../static/patent.svg');
const styles = require('../scss/animation.scss');


class Patents extends Component {

    constructor(){
        super();
    }
    render(props,state) {
        let max = 200;
        let patentArray = [];
        let j = 0;

        while(j<max){
            patentArray.push(<ImageHolder img={patentSVG} className={styles.patentBlank}/>);
            j++;
        }
        return (
            <div className={props.className}>
            {patentArray}
            </div>
        );
    }
}
module.exports = Patents;