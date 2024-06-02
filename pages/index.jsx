import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A first Meetup',
        image: 'file:///C:/Users/user/Downloads/fruit1.jpg',
        address: 'Some address 5 Toyin',
        description: 'This is the first meetup'
    },
    {
        id: 'm2',
        title: 'A second Meetup',
        image: 'file:///C:/Users/user/Downloads/fruit1.jpg',
        address: 'Some address 5 Toyin',
        description: 'This is the second meetup'
    }
]

function HomePage() {
    return <MeetupList meetups={DUMMY_MEETUPS} />
}

export default HomePage;