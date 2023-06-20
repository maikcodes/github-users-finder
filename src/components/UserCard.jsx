import PropTypes from 'prop-types';

export const UserCard = ({ user }) => {

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'short' });
        const year = date.getFullYear().toString()

        return `Joined ${day} ${month} ${year}`;
    }


    return (
        <div className='user-card' >
            <div className='image-side'>
                <img className='user-avatar' src={user?.avatar_url} alt='' />
            </div>
            <div className='data-side'>
                <div className='left-data-column'>
                    <h2>{user.name}</h2>
                    <a href={user?.html_url} target='_blank' rel='noreferrer'>@{user?.login}</a>
                </div>
                <div className='right-data-column'>
                    <p className='joined'>{formatDate(user?.created_at)}</p>
                </div>
                <p className='bio'>{user?.bio || 'This profile has no bio'}</p>
                <div className='user-stats'>
                    <table>
                        <thead>
                            <tr>
                                <th>Repos</th>
                                <th>Followers</th>
                                <th>Following</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{user?.public_repos}</td>
                                <td>{user?.followers}</td>
                                <td>{user?.following}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='info'>
                    <i className='bi bi-geo-alt-fill'> {user?.location || 'Not Available'}</i>
                </div>
                <div className='info'>
                    {
                        user?.twitter_username ?
                            <i className='bi bi-link-45deg'><a href={user.twitter_username}>{user.twitter_username}</a></i>
                            :
                            <i className='bi bi-link-45deg'>Not Available</i>
                    }
                </div>
                <div className='info'>
                    {
                        user?.blog ?
                            <i className='bi bi-link-45deg'><a href={user.blog}>{user?.blog}</a></i>
                            :
                            <i className='bi bi-link-45deg'>Not Available</i>
                    }
                </div>
                <div className='info'>
                    <i className='bi bi-building'> {user?.company || 'Not Available'}</i>
                </div>
            </div>
        </div>
    );
};

UserCard.propTypes = {
    user: PropTypes.object.isRequired,
};
