import { useState } from 'react';
import { useSelector } from '../hooks/useTypedSelector';

import { useActions } from '../hooks/useActions';

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('');
    const { searchRepositories } = useActions();
    const { data, error, loading } = useSelector((state) => state.repositories);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        searchRepositories(term);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={term} onChange={(e) => setTerm(e.target.value)} />
                <button disabled={loading}>{loading ? 'Loading..' : 'Search'}</button>
                {error && <div>{error}</div>}
            </form>
            {!error && !loading && data.length && data.map((name) => <div key={name}>{name}</div>)}
        </div>
    );
};

export default RepositoriesList;
