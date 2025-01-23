import { Page } from '../components/Page/Page'
import useUsers from '../hooks/useUsers/useUsers';
 
export const Users = () => {

    const {isLoading, users, error} = useUsers();

    return (
        <Page title="Users">
            {isLoading ? (
                <span>Loading...</span>
                ) : (
                <>
                    <ul>
                        {users.map((user) => (
                            <li key={user.id}>{user.login}</li>
                        ))}
                    </ul>
                    <>
                        {error ? (
                            <div>{error}</div>
                        ) : (
                            <ul>
                                {users.map((user) => (
                                    <li key={user.id}>{user.login}</li>
                                ))}
                            </ul>
                        )}
                    </>
                </>

            )}
      </Page>
    );
};