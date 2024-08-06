import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom'; 

const baseUrl = 'http://localhost:8080/static/images/';

const E_SectionList=({title, titleImg, topic })=>{
return(
    <>
    <Link to={'/trip/detail/${no}'}/>
<div  className="item">
                            <div className='list1'>
                                <div className='list1-2'>
                                    <h4>{title}</h4>
                                    <span>{topic}</span>
                                </div>
                                <img src={`${baseUrl}${titleImg}`} className='image1' alt={titleImg} />
                            </div>
                        </div>

    </>



);



}
// Define PropTypes
E_SectionList.propTypes = {
    title: PropTypes.string.isRequired,
    titleImg: PropTypes.string.isRequired,
    topic: PropTypes.string.isRequired,
};
export default E_SectionList