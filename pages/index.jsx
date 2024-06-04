import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first Meetup",
    image:
      "https://th.bing.com/th/id/R.171469519d57e63bf0cb18c3257797e3?rik=Rs1FirAHPKiyXA&riu=http%3a%2f%2fwww.baltana.com%2ffiles%2fwallpapers-2%2fFruit-HD-Wallpapers-03484.jpg&ehk=7L0lkg9TPcRVu%2bjsZhWvhNw1CZRgILylaYrEFKMa6n4%3d&risl=&pid=ImgRaw&r=0",
    address: "Some address 5 Toyin",
    description: "This is the first meetup",
  },
  { 
    id: "m2",
    title: "A second Meetup",
    image:
      "https://th.bing.com/th/id/R.171469519d57e63bf0cb18c3257797e3?rik=Rs1FirAHPKiyXA&riu=http%3a%2f%2fwww.baltana.com%2ffiles%2fwallpapers-2%2fFruit-HD-Wallpapers-03484.jpg&ehk=7L0lkg9TPcRVu%2bjsZhWvhNw1CZRgILylaYrEFKMa6n4%3d&risl=&pid=ImgRaw&r=0",
    address: "Some address 5 Toyin",
    description: "This is the second meetup",
  },
];



function HomePage(props) {
    return <MeetupList meetups={props.meetups} />
}


export async function getServerSideProps(context){
  const req = context.req;
  const res = context.res;
  
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };

}

// export async function getStaticProps() {
//   //fetch data from an API
//   return{
//     props: {
//       meetups: DUMMY_MEETUPS
//     },
//     revalidate: 10
//   };
// }

export default HomePage;

