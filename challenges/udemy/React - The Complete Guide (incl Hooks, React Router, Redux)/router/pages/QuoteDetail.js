import { useParams } from 'react-router-dom';

import { Comments } from '../components/comments/Comments';

export default function QuoteDetail() {
    const { qid } = useParams();
    return (
        <div>
            <h1>Quote Detail: {qid}</h1>
            <Link to={`/quotes/${qid}/comments`}>comments</Link>
            <Route to={`/quotes/${qid}/comments`}>
                <Comments />
            </Route>
        </div>
    );
}