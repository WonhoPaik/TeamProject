import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './ReadPost.css';

const ReadPost = () => {
    const params = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [likes, setLikes] = useState(0);

    useEffect(() => {
        // 게시글 데이터를 가져오는 API 호출 예제
        const fetchPost = async () => {
            // 여기서 실제 API 호출 코드 작성
            const postData = {
                id: params.id,
                author: 'jeff93',
                date: '23.10 오사카',
                title: '오사카',
                content: '오사카에 대한 내용입니다.',
                timeAgo: '26분전',
                likes: 1,
            };
            setPost(postData);
            setLikes(postData.likes);
        };

        const fetchComments = async () => {
            // 댓글 데이터를 가져오는 API 호출 예제
            const commentsData = [
                {id: 1, author: 'ㅇㄱ', content: 'ㅇㅇㅇㅇㅇㅇㅇ', likes: 0, time: '25분전'},
                // 더 많은 댓글들
            ];
            setComments(commentsData);
        };

        fetchPost();
        fetchComments();
    }, [postId]);

    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
    };

    const handleCommentSubmit = () => {
        if (newComment.trim()) {
            const newCommentObject = {
                id: comments.length + 1,
                author: '현재 사용자', // 실제 사용자 이름으로 교체
                content: newComment,
                likes: 0,
                time: '방금'
            };
            setComments([...comments, newCommentObject]);
            setNewComment('');
        }
    };

    const handleLikeClick = () => {
        setLikes(likes + 1);
    };

    if (!post) {
        return <div>Loading...</div>;
    }

    return (
        <div className="readpost-container">
            <header className="readpost-header">
                <button className="back-button" onClick={() => window.history.back()}>←</button>
                <h1>{post.title}</h1>
                <button className="more-button">⋯</button>
            </header>
            <div className="post-detail">
                <div className="post-header">
                    <img className="profile-picture" src="path_to_profile_image" alt="profile"/>
                    <div className="post-info">
                        <span className="username">{post.author}</span>
                        <span className="location-date">{post.date}</span>
                    </div>
                </div>
                <div className="post-content">
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
                <div className="post-footer">
                    <span onClick={handleLikeClick}>👍 {likes}</span>
                    <span>💬 {comments.length}</span>
                    <span className="post-time">{post.timeAgo}</span>
                </div>
            </div>
            <div className="comments-section">
                {comments.map((comment) => (
                    <div key={comment.id} className="comment">
                        <img className="profile-picture" src="path_to_commenter_image" alt="commenter"/>
                        <div className="comment-content">
                            <span className="comment-username">{comment.author}</span>
                            <p>{comment.content}</p>
                            <div className="comment-footer">
                                <span>👍 {comment.likes}</span>
                                <span>답글달기</span>
                                <span className="comment-time">{comment.time}</span>
                            </div>
                        </div>
                        <button className="more-button">⋯</button>
                    </div>
                ))}
            </div>
            <div className="comment-input-section">
                <input
                    type="text"
                    value={newComment}
                    onChange={handleCommentChange}
                    placeholder="댓글을 써주세요."
                />
                <button className="submit-comment" onClick={handleCommentSubmit}>
                    등록
                </button>
            </div>
        </div>
    );
};

export default ReadPost;
