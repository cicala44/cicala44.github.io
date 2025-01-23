import "./CommentCards.css"

const CommentCards = (props) =>
{
    return(
        <div class={(props.adjustSize !== undefined) ? "comment-card-" + props.adjustSize : "comment-card"}>
            <div class={(props.adjustSize !== undefined) ? "comment-" + props.adjustSize : "comment"}>
                {props.comment}
            </div>
            <div class={(props.adjustSize !== undefined) ? "writer-" + props.adjustSize : "writer"}>
                {props.writer}
            </div>
        </div>
    );
}
export default CommentCards;