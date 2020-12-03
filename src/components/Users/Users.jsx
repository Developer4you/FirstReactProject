import React from 'react';
import styles from './users.module.css'

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://www.aboutfacesentertainment.com/images/caricature/artists/nyman_s/nyman_s_arnold2.jpg',
                followed: false,
                fullName: 'Arnold',
                status: 'I am a boss',
                location: {city: 'Las Vegas', country: 'USA'}
            },
            {
                id: 2,
                photoUrl: 'https://i.pinimg.com/736x/ec/48/05/ec480579ea2c032002957023d6245f71--caricature.jpg',
                followed: true,
                fullName: 'Sylvester',
                status: 'I am best',
                location: {city: 'Milan', country: 'Italia'}
            },
            {
                id: 3,
                photoUrl: 'https://illustrators.ru/uploads/illustration/image/702195/main_702195_original.jpg',
                followed: false,
                fullName: 'Klavdia',
                status: 'I am beautiful',
                location: {city: 'Minsk', country: 'Belarus'}
            }])
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={styles.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                <span>
                        <div>
                            {u.fullName}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </span>
                <span>
                        <div>
                            {u.location.country}
                        </div>
                        <div>
                            {u.location.city}
                        </div>
                    </span>
            </div>)
        }
    </div>
}

export default Users;