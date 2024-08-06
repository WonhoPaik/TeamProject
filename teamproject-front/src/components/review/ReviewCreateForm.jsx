import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import './ReviewCreateForm.css';

const ReviewCreateForm = () => {
    const navigate = useNavigate();
    const tripReview_title = useRef();
    const tripReview_titleImg = useRef();
    const tripReview_topic = useRef();
    const tripReview_content = useRef();
    const tripReview_sub1Img = useRef();
    const tripReview_sub1Topic = useRef();
    const tripReview_sub1Content = useRef();
    const tripReview_sub2TitleImg = useRef();
    const tripReview_sub2Topic = useRef();
    const tripReview_sub2Content = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        // Create FormData object
        const form = new FormData();
        form.append('tripReview_title', tripReview_title.current.value);
        form.append('tripReview_topic', tripReview_topic.current.value);
        form.append('tripReview_content', tripReview_content.current.value);
        form.append('tripReview_sub1Topic', tripReview_sub1Topic.current.value);
        form.append('tripReview_sub1Content', tripReview_sub1Content.current.value);
        form.append('tripReview_sub2Topic', tripReview_sub2Topic.current.value);
        form.append('tripReview_sub2Content', tripReview_sub2Content.current.value);

        // Log form data
        console.log('Form Data:');
        console.log('tripReview_title:', tripReview_title.current.value);
        console.log('tripReview_topic:', tripReview_topic.current.value);
        console.log('tripReview_content:', tripReview_content.current.value);
        console.log('tripReview_sub1Topic:', tripReview_sub1Topic.current.value);
        console.log('tripReview_sub1Content:', tripReview_sub1Content.current.value);
        console.log('tripReview_sub2Topic:', tripReview_sub2Topic.current.value);
        console.log('tripReview_sub2Content:', tripReview_sub2Content.current.value);

        // Log file data
        if (tripReview_titleImg.current.files.length > 0) {
            console.log('tripReview_titleImg:', tripReview_titleImg.current.files[0].name);
            form.append('tripReview_titleImg', tripReview_titleImg.current.files[0]);
        }
        if (tripReview_sub1Img.current.files.length > 0) {
            console.log('tripReview_sub1Img:', tripReview_sub1Img.current.files[0].name);
            form.append('tripReview_sub1Img', tripReview_sub1Img.current.files[0]);
        }
        if (tripReview_sub2TitleImg.current.files.length > 0) {
            console.log('tripReview_sub2TitleImg:', tripReview_sub2TitleImg.current.files[0].name);
            form.append('tripReview_sub2TitleImg', tripReview_sub2TitleImg.current.files[0]);
        }

        // Send request
        fetch('http://localhost:8080/tripreview/insert', {
            method: 'post',
            body: form
        })
        .then(response => {
            console.log('Response Status:', response.status);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            navigate('/E_Section');
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <div className='E_ReviewCreateForm'>
            <div className="form-container">
                <h2>게시글 등록</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>제목:</label>
                        <input type='text' ref={tripReview_title} placeholder='예:(지은이)의 홍콩 여행기'/>
                    </div>
                    <div className="form-group">
                        <label>대표사진:</label>
                        <input type='file' ref={tripReview_titleImg} />
                    </div>
                    <div className="form-group">
                        <label>내용 제목:</label>
                        <input type='text' ref={tripReview_topic} />
                    </div>
                    <div className="form-group">
                        <label>내용:</label>
                        <textarea rows='5' cols='60' ref={tripReview_content} />
                    </div>
                    <h3>주요 볼거리</h3>
                    <div className="subImageGroup">
                        <div className="subshowlist">
                            <div className="form-group">
                                <label>서브사진1:</label>
                                <input type='file' ref={tripReview_sub1Img} />
                            </div>
                            <div className="form-group">
                                <label>제목:</label>
                                <input type='text' ref={tripReview_sub1Topic} />
                            </div>
                            <div className="form-group">
                                <label>내용:</label>
                                <textarea rows='5' cols='60' ref={tripReview_sub1Content} />
                            </div>
                        </div>
                        <div className="subshowlist2">
                            <div className="form-group">
                                <label>서브사진2:</label>
                                <input type='file' ref={tripReview_sub2TitleImg} />
                            </div>
                            <div className="form-group">
                                <label>제목:</label>
                                <input type='text' ref={tripReview_sub2Topic} />
                            </div>
                            <div className="form-group">
                                <label>내용:</label>
                                <textarea rows='5' cols='60' ref={tripReview_sub2Content} />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="submit-button">확인</button>
                </form>
            </div>
        </div>
    );
};

export default ReviewCreateForm;
